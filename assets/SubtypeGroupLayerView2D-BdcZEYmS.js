import{o as a,p as n,q as d,P as u,I as l}from"./index-BvWQS-tz.js";import{r as g}from"./FeatureLayerView2D-CU7qDH2E.js";import"./Container-BfZfETYd.js";import"./highlightReasons-Bp_kSljk.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-B4o73kxg.js";import"./featureConversionUtils-CClVFUWU.js";import"./OptimizedFeature-DUj7o6ET.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./timeSupport-USjFL91m.js";import"./LayerView-BFcItbad.js";import"./layerViewUtils-DaObYqcz.js";import"./TechniqueInstance-RhoNwrVV.js";import"./UpdateTracking2D-WhBvUFpw.js";import"./BidiEngine-BwB1Df7c.js";import"./GeometryUtils-DtaNgGui.js";import"./enums-BRXbslMp.js";import"./Rect-CUzevAry.js";import"./LabelMetric-DpaE1p3S.js";import"./Program-DoeiLafD.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-n1Pj7GN5.js";import"./TileContainer-6PiNVl3F.js";import"./WGLContainer-CqM9BaS8.js";import"./ProgramTemplate-CKwdXi9z.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-HpBaasox.js";import"./CircularArray-CujHzHWW.js";import"./tileUtils-B7X19rIS.js";import"./SDFHelper-C6ncn8-z.js";import"./floatRGBA-YdDdDM3-.js";import"./FeatureCommandQueue-CFym4o7y.js";import"./constants-D5zmR9t2.js";import"./HighlightCounter-DsI7j-U6.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-C0rC_cWU.js";import"./RefreshableLayerView-CN8DgsAT.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._workerProxy,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const ti=i;export{ti as default};