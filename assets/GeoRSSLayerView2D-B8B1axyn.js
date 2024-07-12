import{q as l,P as h,t as g,V as w,v as f,w as d,x as n,o as u,p as V}from"./index-BvWQS-tz.js";import{f as b,y as S}from"./LayerView-BFcItbad.js";import{t as _}from"./GraphicContainer-BXdM84zW.js";import{V as T}from"./GraphicsView2D-BDJVKFC2.js";import"./Container-BfZfETYd.js";import"./highlightReasons-Bp_kSljk.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-B4o73kxg.js";import"./layerViewUtils-DaObYqcz.js";import"./AGraphicContainer-Dhobidam.js";import"./TechniqueInstance-RhoNwrVV.js";import"./UpdateTracking2D-WhBvUFpw.js";import"./BidiEngine-BwB1Df7c.js";import"./OptimizedFeature-DUj7o6ET.js";import"./GeometryUtils-DtaNgGui.js";import"./enums-BRXbslMp.js";import"./Rect-CUzevAry.js";import"./LabelMetric-DpaE1p3S.js";import"./Program-DoeiLafD.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-n1Pj7GN5.js";import"./TileContainer-6PiNVl3F.js";import"./WGLContainer-CqM9BaS8.js";import"./ProgramTemplate-CKwdXi9z.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-HpBaasox.js";import"./featureConversionUtils-CClVFUWU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-CFym4o7y.js";import"./constants-D5zmR9t2.js";import"./AttributeStore-CJP2vFWU.js";import"./TimeOnly-DbmWfbI5.js";import"./timeSupport-Sldv1L4a.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-CfhMVrSz.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(i=>{const t=this._popupTemplates.get(i),p=i.hitTest(e);for(const s of p)s.layer=o,s.sourceLayer=o,s.popupTemplate=t;return p}).map(i=>({type:"graphic",graphic:i,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:i}of e){const t=g.fromJSON(o),p=new w(t.features),s=i.drawingInfo,c=r?f.fromJSON(r):null,a=d(s.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)])}detach(){this._clear()}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const le=y;export{le as default};