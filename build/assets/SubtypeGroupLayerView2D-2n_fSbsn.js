import{o as a,p as n,q as d,P as u,I as l}from"./index-BQYPq7Rf.js";import{r as g}from"./FeatureLayerView2D-C1_bgkPE.js";import"./Container-D9hV8OLG.js";import"./highlightReasons-CNwwy99t.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-B00l_Uip.js";import"./featureConversionUtils-C425n98A.js";import"./OptimizedFeature-DUj7o6ET.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./timeSupport-BWX6u_is.js";import"./LayerView-BUvEiNNE.js";import"./layerViewUtils-DaObYqcz.js";import"./TechniqueInstance-CsmaN1ma.js";import"./UpdateTracking2D-B2Vn3619.js";import"./BidiEngine-BwB1Df7c.js";import"./GeometryUtils-DUcskBxw.js";import"./enums-BRXbslMp.js";import"./Rect-CUzevAry.js";import"./LabelMetric-C6NbWzvY.js";import"./Program-h4pSljoJ.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-6t5n1oh7.js";import"./TileContainer-Z98U6UkF.js";import"./WGLContainer-CRpcDYF9.js";import"./ProgramTemplate-DHI2TvXn.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-2hkM7tHL.js";import"./CircularArray-CujHzHWW.js";import"./tileUtils-B7X19rIS.js";import"./SDFHelper-Bo5YPR4V.js";import"./floatRGBA-CdPTa2S-.js";import"./FeatureCommandQueue-DtKlXUs_.js";import"./constants-D5zmR9t2.js";import"./HighlightCounter-6_wLLndq.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-MjS3g6BS.js";import"./RefreshableLayerView-C03bpffE.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._workerProxy,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const ti=i;export{ti as default};
