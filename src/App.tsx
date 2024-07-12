import { Routes, Route } from "react-router-dom";
import MapComponent from "./Components/Map/MapComponent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MapComponent />} />
      <Route path="/:latlong?" element={<MapComponent />} />
    </Routes>
  );
};

export default App;
