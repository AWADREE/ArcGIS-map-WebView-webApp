import{o as t,y as p,p as e}from"./index-B0_eEgGQ.js";import{r as a}from"./FeatureLayerView2D-BQMO6fxw.js";import"./Container-B-rZRGcE.js";import"./highlightReasons-BynA7HGL.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-uGRFkZ3B.js";import"./featureConversionUtils-RcIFVLiE.js";import"./OptimizedFeature-DUj7o6ET.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./timeSupport-C3cNmatd.js";import"./LayerView-kB1S8457.js";import"./layerViewUtils-DaObYqcz.js";import"./TechniqueInstance-D2gn_csV.js";import"./UpdateTracking2D-ClHQNGCf.js";import"./BidiEngine-BwB1Df7c.js";import"./GeometryUtils-BeBReqpv.js";import"./enums-BRXbslMp.js";import"./Rect-CUzevAry.js";import"./LabelMetric-Dne4c7PD.js";import"./Program-CmQH1QWm.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-ByNmv_Qk.js";import"./TileContainer-DIQwU52H.js";import"./WGLContainer-CFlfp67C.js";import"./ProgramTemplate-DK_d_siO.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-BBrSRCv9.js";import"./CircularArray-CujHzHWW.js";import"./tileUtils-B7X19rIS.js";import"./SDFHelper-PdLcyBCB.js";import"./floatRGBA-44Jhziyh.js";import"./FeatureCommandQueue-CZiOqVWT.js";import"./constants-D5zmR9t2.js";import"./HighlightCounter-DE1CsSmf.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-CS3qqnuB.js";import"./RefreshableLayerView-Den-Qjdm.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([e("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([e("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const X=o;export{X as default};