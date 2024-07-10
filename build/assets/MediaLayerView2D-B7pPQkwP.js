import{eS as L,q as v,P as g,eT as b,eU as P,eV as O,n as D,s as W,eW as z,V as I,E as $,m as Q,r as k,eX as B,j as F,b7 as N,e5 as Y,o as w,y as A,p as X,ad as J,eY as K}from"./index-D53vMPd9.js";import{j as Z,m as C}from"./perspectiveUtils-DRatnYp-.js";import"./GeometryUtils-C5ej_iIV.js";import"./UpdateTracking2D-DhZ2KO-9.js";import{d as x}from"./enums-BRXbslMp.js";import"./definitions-Y_v3njP4.js";import"./floatRGBA-BRFohVRS.js";import{s as ee}from"./Container-D0PztaTh.js";import"./WGLContainer-BC0iQaMO.js";import{e as te,c as q}from"./Texture-CqazhqFM.js";import{D as re,E as ie,F as M}from"./enums-BlUEVwJR.js";import{c as G}from"./Program-nKZuE_pH.js";import"./LabelMetric-Dea-z4Pm.js";import"./StyleDefinition-BK3ROBTO.js";import"./enums-BRzLM11V.js";import"./MagnifierPrograms-CwgfXhMv.js";import"./pbf-BbsZMhS8.js";import"./FeatureCommandQueue-PV9oTGg2.js";import"./PieChartMeshWriter-RkPZu1GS.js";import"./renderState-C37QfRey.js";import"./interfaces-B8ge7Jg9.js";import"./testSVGPremultipliedAlpha-CmC5xjO6.js";import"./GraphicsView2D-CmZgFDxc.js";import"./earcut-DZgeeiHY.js";import"./vec3f32-nZdmKIgz.js";import{e as se}from"./mat3f64-q3fE-ZOt.js";import{f as ne}from"./utils-8tzsWSaW.js";import{o as oe}from"./ProgramTemplate-mscC1f_P.js";import{f as ae}from"./OverlayContainer-rSfNUJjq.js";import{f as le,y as he}from"./LayerView-yG8mn8ty.js";import"./normalizeUtilsSync-DkRPQ8Tq.js";import"./BidiEngine-BwB1Df7c.js";import"./OptimizedFeature-DUj7o6ET.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-Csz4XzIe.js";import"./highlightReasons-M5sf-_ox.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-CjdjcvRf.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./CircularArray-CujHzHWW.js";import"./AttributeStore-c9c3vlWu.js";import"./TimeOnly-D1WxW24T.js";import"./timeSupport-BHaiFWx3.js";import"./json-Wa8cmqdu.js";import"./constants-D5zmR9t2.js";import"./TurboLine-D9hPdm1C.js";import"./basicInterfaces-DngWxyLO.js";import"./grouping-Dt1rAhnj.js";import"./layerViewUtils-DaObYqcz.js";const me=[1,1],pe=4,p=se(),ce={none:x.None,loop:x.Loop,oscillate:x.Oscillate};function de(t){return t?{...t,playAnimation:t.playing,repeatType:t.repeatType?ce[t.repeatType]:void 0}:{}}class ue extends ee{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.wrapAroundShift=0,this.perspectiveTransform=L(),this._playHandle=null,this._vertices=new Float32Array(20),this._handles=[],this._handles.push(v(()=>this.elementView.element.opacity,r=>this.opacity=r,g),v(()=>[this.elementView.coords],()=>{this.requestRender()},g),v(()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions],()=>{var r;(r=this._playHandle)==null||r.remove(),this.texture=b(this.texture),this.requestRender()},g),P(()=>this.elementView.element.loaded,()=>{const r=this.elementView.element;this.ready(),r.type==="video"&&r.content!=null&&this._handles.push(O(r.content,"play",()=>this.requestRender()))},g)),e.element.load().catch(r=>{D.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new W("element-load-error","Element cannot be displayed",{element:e,error:r}))})}getMesh(e){throw new Error("Method not implemented.")}destroy(){var e;(e=this._playHandle)==null||e.remove(),this._handles.forEach(r=>r.remove()),this.texture=b(this.texture)}get textureSize(){return me}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:r}=e,i=this.elementView.element.content;if(i!=null){const s=i instanceof HTMLImageElement,n=i instanceof HTMLVideoElement,l=s?i.naturalWidth:n?i.videoWidth:i.width,o=s?i.naturalHeight:n?i.videoHeight:i.height;if(this._updatePerspectiveTransform(l,o),this.texture)n&&!i.paused&&(this.texture.setData(i),this.requestRender(),this.texture.generateMipmap());else{const a=new te;if(a.wrapMode=re.CLAMP_TO_EDGE,a.preMultiplyAlpha=!0,a.width=l,a.height=o,"getFrame"in i){const u=m=>{this.texture?this.texture.setData(m):this.texture=new q(r,a,m),this.requestRender()};"animationOptions"in this.elementView.element&&(this._playHandle=ne(i,de(this.elementView.element.animationOptions),null,u))}else this.texture=new q(r,a,i);this.texture.generateMipmap(),n&&!i.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}draw(e){e.drawArrays(ie.TRIANGLE_STRIP,0,pe)}updateDrawCoords(e,r,i,s){const{coords:n,bounds:l}=this.elementView;if(n==null||l==null)return;const[o,a,u,m]=n.rings[0],U=this._vertices,{x:f,y}=e;U.set([a[0]-f,a[1]-y,o[0]-f,o[1]-y,u[0]-f,u[1]-y,m[0]-f,m[1]-y]);let _=r;if(s){const[E,,T]=l,{worldWidth:R,xBounds:j}=s,[V,S]=j;E<V&&T>V?_=R:T>S&&E<S&&(_=-R)}this.wrapAroundShift=_,this.isWrapAround=_!==0}getVAO(e,r,i){if(this.elementView.coords==null)return null;const s=this._vertices;if(this._vao)this._geometryVbo.setData(s);else{this._geometryVbo=G.createVertex(e,M.DYNAMIC_DRAW,s);const n=G.createVertex(e,M.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new oe(e,i,r,{geometry:this._geometryVbo,tex:n})}return this._vao}_updatePerspectiveTransform(e,r){const i=this._vertices;Z(p,[0,0,e,0,0,r,e,r],[i[0],i[1],i[4],i[5],i[2],i[3],i[6],i[7]]),z(this.perspectiveTransform,p[6]/p[8]*e,p[7]/p[8]*r)}}let d=class extends le(he){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new I}attach(){this.addAttachHandles([$(()=>this.layer.effectiveSource,"refresh",()=>{this._tileStrategy.refresh(t=>this._updateTile(t)),this.requestUpdate()}),$(()=>this.layer.effectiveSource,"change",({element:t})=>this._elementUpdateHandler(t))]),this._overlayContainer=new ae,this.container.addChild(this._overlayContainer),this._fetchQueue=new Q({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(t,e)=>this._queryElements(t,e)}),this._tileStrategy=new k({cachePolicy:"purge",resampling:!0,acquireTile:t=>this._acquireTile(t),releaseTile:t=>this._releaseTile(t),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var t;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(t=this._debugGraphicsView)==null||t.destroy()}supportsSpatialReference(t){return!0}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(t){var e;this._tileStrategy.update(t),(e=this._debugGraphicsView)==null||e.update(t)}async hitTest(t,e){const r=[],i=t.normalize(),s=[i.x,i.y];for(const{projectedElement:{normalizedCoords:n,element:l}}of this._elementReferences.values())n!=null&&B(n.rings,s)&&r.push({type:"media",element:l,layer:this.layer,mapPoint:t,sourcePoint:l.toSource(t)});return r.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updateTile(t))}_acquireTile(t){const e=new fe(t.clone());return this._updateTile(e),e}_updateTile(t){this._updatingHandles.addPromise(this._fetchQueue.push(t.key).then(e=>{const[r,i]=t.setElements(e);this._referenceElements(t,r),this._dereferenceElements(t,i),this.requestUpdate()},e=>{F(e)||D.getLogger(this).error(e)}))}_releaseTile(t){this._fetchQueue.abort(t.key.id),t.elements&&this._dereferenceElements(t,t.elements),this.requestUpdate()}async _queryElements(t,e){const r=this.layer.effectiveSource;if(r==null)return[];this.view.featuresTilingScheme.getTileBounds(h,t,!0);const i=new N({xmin:h[0],ymin:h[1],xmax:h[2],ymax:h[3],spatialReference:this.view.spatialReference});return r.queryElements(i,e)}_referenceElements(t,e){if(this.layer.source!=null)for(const r of e)this._referenceElement(t,r)}_referenceElement(t,e){Y(this._elementReferences,e.uid,()=>{const r=new C({element:e,spatialReference:this.view.spatialReference}),i=new ue(r);return this._overlayContainer.addChild(i),this.elements.add(e),{tiles:new Set,projectedElement:r,overlay:i,debugGraphic:null}}).tiles.add(t)}_dereferenceElements(t,e){for(const r of e)this._dereferenceElement(t,r)}_dereferenceElement(t,e){var i;const r=this._elementReferences.get(e.uid);r.tiles.delete(t),r.tiles.size||(this._overlayContainer.removeChild(r.overlay),r.overlay.destroy(),r.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(i=this._debugGraphicsView)==null||i.graphics.remove(r.debugGraphic))}_elementUpdateHandler(t){var i;let e=this._elementReferences.get(t.uid);if(e){const s=e.projectedElement.normalizedCoords;if(s==null)return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),void((i=this._debugGraphicsView)==null?void 0:i.graphics.remove(e.debugGraphic));const n=[],l=[];for(const o of this._tileStrategy.tiles){const a=H(this.view.featuresTilingScheme,o,s);e.tiles.has(o)?a||l.push(o):a&&n.push(o)}for(const o of n)this._referenceElement(o,t);for(const o of l)this._dereferenceElement(o,t);return e=this._elementReferences.get(t.uid),void((e==null?void 0:e.debugGraphic)&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const r=new C({element:t,spatialReference:this.view.spatialReference}).normalizedCoords;if(r!=null)for(const s of this._tileStrategy.tiles)H(this.view.featuresTilingScheme,s,r)&&this._referenceElement(s,t)}};w([A()],d.prototype,"layer",void 0),w([A({readOnly:!0})],d.prototype,"elements",void 0),d=w([X("esri.views.2d.layers.MediaLayerView2D")],d);const h=J(),c={xmin:0,ymin:0,xmax:0,ymax:0};function H(t,e,r){return t.getTileBounds(h,e.key,!0),c.xmin=h[0],c.ymin=h[1],c.xmax=h[2],c.ymax=h[3],K(c,r)}class fe{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const r=[],i=new Set(this.elements);this.elements=e;for(const s of e)i.has(s)?i.delete(s):r.push(s);return this.isReady=!0,[r,Array.from(i)]}destroy(){}}const dt=d;export{dt as default};
