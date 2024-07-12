import{o as i,y as a,b4 as _,e6 as I,p as u,bP as b,bu as L,df as x,hC as N,ay as M,dt as R,V as A,ap as J,a0 as j,dK as V,dx as P,dy as D,dz as E,dA as K,dL as U,dM as C,E as $,eN as z,c7 as G,b2 as k,s as c,n as S,bV as q,dS as F,dJ as H}from"./index-B0_eEgGQ.js";import{j as h}from"./persistable-W13RH0CP.js";import{L as Z,C as w}from"./SceneService-BymHC78O.js";import{p as B,a as Q,y as W,m as X}from"./I3SLayerDefinitions-D1sC12I1.js";import{$ as T,Z as Y,w as ee}from"./elevationInfoUtils-DuKt1UXZ.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-DoQlV2tV.js";import"./originUtils-D69mHv66.js";import"./jsonContext-H4Ij8gdS.js";import"./resourceUtils-Y6Fd6z5n.js";import"./resourceUtils-BEH-JW2i.js";import"./saveAPIKeyUtils-D8jZIxCk.js";import"./saveUtils-T23kZe0G.js";var f;let n=f=class extends b{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){var l;if((l=r.layer)!=null&&l.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!L(e.spatialReference,r.layer.spatialReference))return void((r==null?void 0:r.messages)&&r.messages.push(new x("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const y=new _;N(e,y,r.layer.spatialReference),t[o]=y.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new f({geometry:M(this.geometry),type:this.type})}};i([a({type:_}),h()],n.prototype,"geometry",void 0),i([I(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),i([a({type:["clip","mask","replace"],nonNullable:!0}),h()],n.prototype,"type",void 0),n=f=i([u("esri.layers.support.SceneModification")],n);const m=n;var p;let d=p=class extends R(A.ofType(m)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}static fromJSON(e,t){const o=new p;for(const r of e)o.add(m.fromJSON(r,t));return o}static async fromUrl(e,t,o){const r={url:J(e),origin:"service"},l=await j(e,{responseType:"json",signal:o==null?void 0:o.signal}),y=t.toJSON(),g=[];for(const v of l.data)g.push(m.fromJSON({...v,geometry:{...v.geometry,spatialReference:y}},r));return new p({url:e,items:g})}};i([a({type:String})],d.prototype,"url",void 0),d=p=i([u("esri.layers.support.SceneModifications")],d);const O=d;let s=class extends Z(V(P(D(E(K(U(C(H)))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles($(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,z))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:G(e,o),context:o}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e==null?void 0:e.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){k(o)}if(await this._fetchService(t),this._modificationsSource!=null){const o=await O.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",o,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(w.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(w.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new c("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new c("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new c("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";T(S.getLogger(this),Y(t,"absolute-height",e)),T(S.getLogger(this),ee(t,e))}};i([a({type:String,readOnly:!0})],s.prototype,"geometryType",void 0),i([a({type:["show","hide"]})],s.prototype,"listMode",void 0),i([a({type:["IntegratedMeshLayer"]})],s.prototype,"operationalLayerType",void 0),i([a({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),i([a({type:B,readOnly:!0})],s.prototype,"nodePages",void 0),i([a({type:[Q],readOnly:!0})],s.prototype,"materialDefinitions",void 0),i([a({type:[W],readOnly:!0})],s.prototype,"textureSetDefinitions",void 0),i([a({type:[X],readOnly:!0})],s.prototype,"geometryDefinitions",void 0),i([a({readOnly:!0})],s.prototype,"serviceUpdateTimeStamp",void 0),i([a({type:O}),h({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],s.prototype,"modifications",void 0),i([q(["web-scene","portal-item"],"modifications")],s.prototype,"readModifications",null),i([a(F)],s.prototype,"elevationInfo",null),i([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),s=i([u("esri.layers.IntegratedMeshLayer")],s);const he=s;export{he as default};