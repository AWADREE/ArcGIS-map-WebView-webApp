const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/meshFeatureSet-BFQuIpty.js","assets/index-CV1RNnVc.js","assets/index-BPvgi06w.css","assets/Mesh-CFBxuS8Y.js","assets/MeshTransform-B6lF7jUW.js","assets/infoFor3D-DsOdlPuA.js","assets/mat4f64-CSKppSlJ.js","assets/quat-DzAJkGto.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-Bdb9ZJJK.js","assets/imageUtils-C37bm06p.js","assets/MeshVertexAttributes-CXPgiFTd.js","assets/MeshLocalVertexSpace-CpkcMWA2.js","assets/meshVertexSpaceUtils-BXF5qQVB.js","assets/earcut-B6ozfZ3O.js","assets/DoubleArray-uLYMoiXD.js","assets/Indices-DGYvEJOn.js","assets/plane-BZqfeobj.js","assets/deduplicate-haML_Xu0.js","assets/projection-C2CVHATe.js","assets/spatialReferenceEllipsoidUtils-BpvmCGY0.js","assets/computeTranslationToOriginAndRotation-BJtQIG25.js","assets/BufferView-B8PF2IPS.js","assets/vec3-0PbEKFus.js","assets/vec4-DGPIHlvH.js","assets/vertexSpaceConversion-OKGikXUN.js","assets/executeRelationshipQuery-CElRus-1.js","assets/query-BLmgntBC.js","assets/pbfQueryUtils-DpQLp1ZK.js","assets/pbf-Dd2oS6-P.js","assets/OptimizedFeature-DUj7o6ET.js","assets/OptimizedFeatureSet-Blu9Ckm7.js","assets/queryAttachments-BSKdIt-5.js","assets/AttachmentInfo-8bMGyF8f.js","assets/executeTopFeaturesQuery-ClAxPVD6.js","assets/queryTopFeatures-CTSTygLu.js","assets/executeForTopIds-DKzCEQD6.js","assets/executeForTopExtents-DDsiEgDA.js","assets/executeForTopCount-DQCWrQmM.js"])))=>i.map(i=>d[i]);
import{az as _,aA as S,b7 as T,o as n,y as l,ff as D,p as A,bI as N,ap as Q,I as j,t as P,fg as p,_ as u,s as f,G as q}from"./index-CV1RNnVc.js";import{u as h,i as y}from"./infoFor3D-DsOdlPuA.js";import{s as L,a as $}from"./executeForIds-CcWak5yq.js";import{x as z}from"./query-BLmgntBC.js";import{a as J}from"./executeQueryJSON-B9l4HpJk.js";import{n as C}from"./executeQueryPBF-dePQeau5.js";async function U(e,t,r){const o=_(e),i=await z(o,S.from(t),{...r}),s=i.data.extent;return!s||isNaN(s.xmin)||isNaN(s.ymin)||isNaN(s.xmax)||isNaN(s.ymax)?{count:i.data.count,extent:null}:{count:i.data.count,extent:T.fromJSON(s)}}let a=class extends N{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return Q(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var c;const r=this._normalizeQuery(e),o=((c=e.outStatistics)==null?void 0:c[0])!=null,i=j("featurelayer-pbf-statistics"),s=!o||i;let d;if(this.pbfSupported&&s)try{d=await C(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&s||(d=await J(this.url,r,t)),this._normalizeFields(d.fields),d}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return P.fromJSON(t);const{meshFeatureSetFromJSON:o}=await p(u(()=>import("./meshFeatureSet-BFQuIpty.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return L(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return U(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return $(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await p(Promise.all([u(()=>import("./index-CV1RNnVc.js").then(i=>i.n9),__vite__mapDeps([1,2])),u(()=>import("./executeRelationshipQuery-CElRus-1.js"),__vite__mapDeps([26,1,2,27,28,29,30,31]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await p(Promise.all([u(()=>import("./index-CV1RNnVc.js").then(i=>i.n9),__vite__mapDeps([1,2])),u(()=>import("./executeRelationshipQuery-CElRus-1.js"),__vite__mapDeps([26,1,2,27,28,29,30,31]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:i}=await p(u(()=>import("./queryAttachments-BSKdIt-5.js"),__vite__mapDeps([32,1,2,27,28,29,30,31,33])),t),s=_(this.url);return i(s,await(this.queryAttachmentsSupported?r(s,e,t):o(s,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await p(u(()=>import("./executeTopFeaturesQuery-ClAxPVD6.js"),__vite__mapDeps([34,1,2,35,27,28,29,30,31])),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await p(u(()=>import("./executeForTopIds-DKzCEQD6.js"),__vite__mapDeps([36,1,2,35,27,28,29,30,31])),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await p(u(()=>import("./executeForTopExtents-DDsiEgDA.js"),__vite__mapDeps([37,1,2,35,27,28,29,30,31])),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await p(u(()=>import("./executeForTopCount-DQCWrQmM.js"),__vite__mapDeps([38,1,2,35,27,28,29,30,31])),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=S.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?D.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:i}=r,s=h("model/gltf-binary",o)??y("glb",o),d=h("model/gltf+json",o)??y("gltf",o);for(const c of i){if(c===s){t.formatOf3DObjects=c;break}c!==d||t.formatOf3DObjects||(t.formatOf3DObjects=c)}if(!t.formatOf3DObjects)throw new f("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!q(t.outSpatialReference,this.sourceSpatialReference))throw new f("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:c,originY:m,originZ:x,translationX:b,translationY:F,translationZ:O,scaleX:g,scaleY:R,scaleZ:V,rotationX:E,rotationY:I,rotationZ:v,rotationDeg:w}=r.transformFieldRoles;t.outFields.push(c,m,x,b,F,O,g,R,V,E,I,v,w)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};n([l({type:D})],a.prototype,"dynamicDataSource",void 0),n([l()],a.prototype,"fieldsIndex",void 0),n([l()],a.prototype,"gdbVersion",void 0),n([l()],a.prototype,"infoFor3D",void 0),n([l({readOnly:!0})],a.prototype,"parsedUrl",null),n([l()],a.prototype,"pbfSupported",void 0),n([l()],a.prototype,"queryAttachmentsSupported",void 0),n([l()],a.prototype,"sourceSpatialReference",void 0),n([l({type:String})],a.prototype,"url",void 0),a=n([A("esri.layers.graphics.sources.support.QueryTask")],a);const B=a;export{B as x};