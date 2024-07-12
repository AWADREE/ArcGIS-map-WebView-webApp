import{o as r,y as o,p as m,c as g,j as l,n as d,q as u}from"./index-B0_eEgGQ.js";import{a as c}from"./BitmapContainer-PVnBbsUw.js";import{f as y,y as f}from"./LayerView-kB1S8457.js";import{V as x}from"./GraphicsView2D-CUgO8mD_.js";import{h as _}from"./HighlightGraphicContainer-N5gG43kl.js";import{_ as w}from"./ExportStrategy-Bfu_f1BA.js";import{y as H}from"./ExportImageParameters-CimdTta3.js";import{i as v}from"./timeSupport-C3cNmatd.js";import{i as I}from"./RefreshableLayerView-Den-Qjdm.js";import{_ as $,r as V}from"./drapedUtils-tpPMWV_2.js";import"./WGLContainer-CFlfp67C.js";import"./definitions-Y_v3njP4.js";import"./LabelMetric-Dne4c7PD.js";import"./enums-BRXbslMp.js";import"./Texture-uGRFkZ3B.js";import"./enums-BlUEVwJR.js";import"./Program-CmQH1QWm.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-DK_d_siO.js";import"./vec3f32-nZdmKIgz.js";import"./Container-B-rZRGcE.js";import"./highlightReasons-BynA7HGL.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-BBrSRCv9.js";import"./featureConversionUtils-RcIFVLiE.js";import"./OptimizedFeature-DUj7o6ET.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./layerViewUtils-DaObYqcz.js";import"./UpdateTracking2D-ClHQNGCf.js";import"./BidiEngine-BwB1Df7c.js";import"./GeometryUtils-BeBReqpv.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-ByNmv_Qk.js";import"./AttributeStore-BxOJF2gh.js";import"./TimeOnly-BzA1w-yM.js";import"./timeSupport-DyIXOu2X.js";import"./json-Wa8cmqdu.js";import"./FeatureCommandQueue-CZiOqVWT.js";import"./constants-D5zmR9t2.js";import"./normalizeUtilsSync-DHN7dler.js";import"./AGraphicContainer-DpUeJoxk.js";import"./TechniqueInstance-D2gn_csV.js";import"./TileContainer-DIQwU52H.js";import"./Bitmap-DSBTCeEb.js";import"./scaleUtils-Ck23p-Pn.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-DK9eVLQk.js";import"./popupUtils-CS3qqnuB.js";const E=t=>{let i=class extends t{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var e;return((e=this.view)==null?void 0:e.floors)??null}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return v(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}canResume(){var e;return!!super.canResume()&&!((e=this.timeExtent)!=null&&e.isEmpty)}};return r([o()],i.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],i.prototype,"floors",null),r([o({readOnly:!0})],i.prototype,"exportImageVersion",null),r([o()],i.prototype,"layer",void 0),r([o()],i.prototype,"suspended",void 0),r([o({readOnly:!0})],i.prototype,"timeExtent",null),i=r([m("esri.views.layers.MapImageLayerView")],i),i};let s=class extends E(I(y(f))){constructor(){super(...arguments),this._highlightGraphics=new g,this._updateHash=""}fetchPopupFeaturesAtLocation(t,i){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,i)}update(t){const i=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==i&&(this._updateHash=i,this.strategy.update(t).catch(e=>{l(e)||d.getLogger(this).error(e)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:i,version:e}=this.layer,a=e>=10.3,n=e>=10;this._bitmapContainer=new c,this.container.addChild(this._bitmapContainer),this._highlightView=new x({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new _(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new $({createFetchPopupFeaturesQueryGeometry:(p,h)=>V(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new w({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:i,imageRotationSupported:a,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(u(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,i,e,a){return this.layer.fetchImage(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...a})}fetchImageBitmap(t,i,e,a){return this.layer.fetchImageBitmap(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...a})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([o()],s.prototype,"strategy",void 0),r([o()],s.prototype,"updating",void 0),s=r([m("esri.views.2d.layers.MapImageLayerView2D")],s);const It=s;export{It as default};