import{I as L}from"./index-JSomUsfp.js";import{u as d}from"./basicInterfaces-DngWxyLO.js";class h{constructor(r){this.data=r,this.type="encoded-mesh-texture",this.encoding=d.KTX2_ENCODING}}function w(e){return(e==null?void 0:e.type)==="encoded-mesh-texture"}async function f(e){const r=new Blob([e]),o=await r.text();return JSON.parse(o)}async function p(e,r){if(r===d.KTX2_ENCODING)return new h(e);const o=new Blob([e],{type:r}),n=URL.createObjectURL(o),t=new Image;if(L("esri-iPhone"))return new Promise((c,m)=>{const s=()=>{a(),c(t)},i=u=>{a(),m(u)},a=()=>{URL.revokeObjectURL(n),t.removeEventListener("load",s),t.removeEventListener("error",i)};t.addEventListener("load",s),t.addEventListener("error",i),t.src=n});try{t.src=n,await t.decode()}catch{console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(n),t}export{f as n,p as o,w as r,h as t};