import { useEffect, useRef, useState } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Graphic from "@arcgis/core/Graphic";
import Polyline from "@arcgis/core/geometry/Polyline";
import { useParams } from "react-router-dom";
import axios from "axios";

const MapComponent = () => {
  const mapDiv = useRef<string | HTMLDivElement | undefined>(undefined);
  const graphicsLayer = useRef<any>(null);
  const routeLayer = useRef<any>(null);
  const viewRef = useRef<any>(null);
  const hasInitialized = useRef(false);
  const [features, setFeatures] = useState<any>([]);
  let { latlong } = useParams();

  const initializeMap = () => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    const map = new Map({
      basemap: "hybrid",
    });

    const view = new MapView({
      container: mapDiv.current,
      map: map,
      center: [31.6744, 30.02], // Coordinates for the New Administrative Capital
      zoom: 12,
    });

    view.when(() => {
      viewRef.current = view;
      graphicsLayer.current = new GraphicsLayer();
      routeLayer.current = new GraphicsLayer();
      map.add(graphicsLayer.current);
      map.add(routeLayer.current);

      const featureLayer = new FeatureLayer({
        url: "https://arcgis.itechs-eg.com/server/rest/services/WFM/Technician_Location_Task_Detail/MapServer/4",
      });

      const query = featureLayer.createQuery();
      query.where = "1=1"; // Query all features
      query.outFields = ["*"]; // Return all fields

      featureLayer
        .queryFeatures(query)
        .then((result) => {
          const latestFeatures: any = {};
          result.features.forEach((feature: any) => {
            const id = feature.attributes.user_id;
            const uid = feature.uid;
            if (!latestFeatures[id] || uid > latestFeatures[id].uid) {
              latestFeatures[id] = feature;
            }
          });
          addPins();
        })
        .catch((error) => {
          console.error("Error querying features:", error);
        });
    });
  };

  const addPins = () => {
    console.log("calling addPins");
    if (graphicsLayer.current && latlong) {
      // Clear existing graphics
      graphicsLayer.current.removeAll();
      routeLayer.current.removeAll();

      const coordinatesArray = latlong.split(",");
      if (coordinatesArray.length === 4) {
        // Add new start pin
        const startGraphic = new Graphic({
          geometry: {
            type: "point",
            longitude: parseFloat(coordinatesArray[1]),
            latitude: parseFloat(coordinatesArray[0]),
            spatialReference: { wkid: 4326 }, // WGS84
          },
          symbol: {
            type: "simple-marker",
            color: "red",
            size: "12px",
          },
        });
        graphicsLayer.current.add(startGraphic);

        // Add new end pin
        const endGraphic = new Graphic({
          geometry: {
            type: "point",
            longitude: parseFloat(coordinatesArray[3]),
            latitude: parseFloat(coordinatesArray[2]),
            spatialReference: { wkid: 4326 }, // WGS84
          },
          symbol: {
            type: "simple-marker",
            color: "red",
            size: "12px",
          },
        });
        graphicsLayer.current.add(endGraphic);

        // Set features state to trigger re-render
        setFeatures([startGraphic, endGraphic]);

        // Get route and add to map
        getRoute(
          {
            long: parseFloat(coordinatesArray[1]),
            lat: parseFloat(coordinatesArray[0]),
          },
          {
            long: parseFloat(coordinatesArray[3]),
            lat: parseFloat(coordinatesArray[2]),
          }
        );
      } else {
        console.error("Invalid latlong parameter");
      }
    }
  };

  const getRoute = async (
    start: { long: number; lat: number },
    end: { long: number; lat: number }
  ) => {
    const apiKey = "5b3ce3597851110001cf62485957637fb4de40aab06043d6f78f646e";
    const url = "https://api.openrouteservice.org/v2/directions/driving-car";

    try {
      const response = await axios.get(url, {
        params: {
          api_key: apiKey,
          start: `${start.long},${start.lat}`,
          end: `${end.long},${end.lat}`,
        },
      });

      const route = response.data.features[0].geometry.coordinates;
      console.log("Route coordinates:", route);

      const polyline = new Polyline({
        paths: route.map((coord: any) => [coord[0], coord[1]]),
        spatialReference: { wkid: 4326 }, // WGS84
      });

      const routeGraphic = new Graphic({
        geometry: polyline,
        symbol: {
          type: "simple-line",
          color: "black",
          width: 3,
        },
      });

      routeLayer.current.add(routeGraphic);
      console.log("Route graphic added:", routeGraphic);
    } catch (error) {
      console.error("Error fetching route:", error);
    }
  };

  useEffect(() => {
    initializeMap();
  }, [latlong]);

  const handleZoomToFeature = (geometry: any) => {
    viewRef.current.goTo({
      target: geometry,
      zoom: 15,
    });
  };

  return (
    <div>
      <div ref={mapDiv} style={{ width: "100%", height: "650px" }}></div>
      <div
        className="bg-danger-subtle"
        style={{ width: "400px", height: "12px" }}
      >
        <p>List of Features:</p>
        <div>
          {features.map((graphic: any, index: number) => (
            <div key={index}>
              {/* Assuming 'first_name' and 'last_name' are available attributes */}
              {`${graphic.attributes?.first_name ?? "Start"} ${
                graphic.attributes?.last_name ?? "End"
              }`}{" "}
              <button onClick={() => handleZoomToFeature(graphic.geometry)}>
                Zoom To
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
