const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/objectResourceUtils-BAHZrwOm.js","assets/devEnvironmentUtils-D6qIi8Ky.js","assets/index-CoAqRdgv.js","assets/index-BPvgi06w.css","assets/mat3f64-q3fE-ZOt.js","assets/mat4f64-CSKppSlJ.js","assets/BufferView-DEtRrbgv.js","assets/vec3-YsjPNQry.js","assets/vec4-BHMx0BvP.js","assets/DefaultMaterial_COLOR_GAMMA-CzicCVvM.js","assets/enums-BlUEVwJR.js","assets/quat-B56m6BCa.js","assets/quatf64-Bdb9ZJJK.js","assets/resourceUtils-Ddk83RJt.js","assets/basicInterfaces-DngWxyLO.js","assets/Indices-PdO_ZKCL.js","assets/NestedMap-DgiGbX8E.js","assets/requestImageUtils-Dp_KMUwu.js","assets/orientedBoundingBox-CI-mjH1m.js","assets/spatialReferenceEllipsoidUtils-gCD5zmnG.js","assets/computeTranslationToOriginAndRotation-DLB2arK2.js","assets/plane-CoX7-qlI.js","assets/Util-Df3XGnHs.js","assets/sphere-DNKc6jw8.js","assets/lineSegment-CEFxWM9s.js","assets/VertexAttribute-BlT9lbVY.js","assets/Texture-BL7Bcv91.js","assets/InterleavedLayout-CFYgqgdW.js","assets/types-D0PSWh4d.js","assets/NormalAttribute.glsl-Csx0dvH6.js","assets/interfaces-B8ge7Jg9.js","assets/renderState-C37QfRey.js","assets/BindType-BmZEZMMh.js","assets/doublePrecisionUtils-B0owpBza.js"])))=>i.map(i=>d[i]);
import{eC as v,s,a0 as y,_ as p,eD as l,bD as b,eE as w,a$ as f}from"./index-CoAqRdgv.js";let a=h();function h(){return new v(50)}function T(){a=h()}async function $(e,r){var o,t;if((o=e.resource)!=null&&o.href)return _(e.resource.href).then(n=>[n.width,n.height]);if((t=e.resource)!=null&&t.primitive)return r!=null?[r,r]:[256,256];throw new s("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(e){return y(e,{responseType:"image"}).then(r=>r.data)}async function x(e,r=null){var t,n;if(!e.isPrimitive){const i=(t=e.resource)==null?void 0:t.href;if(!i)throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const u=a.get(i);if(u!==void 0)return u;const{fetch:m}=await p(()=>import("./objectResourceUtils-BAHZrwOm.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33])),d=await m(i,{disableTextures:!0}),c=l(d.referenceBoundingBox,f());return a.put(i,c),c}if(!((n=e.resource)!=null&&n.primitive))throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const o=b(w(e.resource.primitive));if(r!=null)for(let i=0;i<o.length;i++)o[i]*=r;return l(o,f())}export{T as clearBoundingBoxCache,$ as computeIconLayerResourceSize,x as computeObjectLayerResourceSize};