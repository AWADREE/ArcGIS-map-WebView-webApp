import{dy as y,dA as i,er as l,o as s,y as t,p,dJ as d,s as u}from"./index-D53vMPd9.js";let e=class extends y(i(d)){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((r,o)=>{l(()=>{const n=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unknown layer type";n&&(a+=" "+n),o(new u("layer:unknown-layer-type",a,{layerType:n}))})}))}read(r,o){super.read({resourceInfo:r},o)}write(r,o){return null}};s([t({readOnly:!0})],e.prototype,"resourceInfo",void 0),s([t({type:["show","hide"]})],e.prototype,"listMode",void 0),s([t({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),e=s([p("esri.layers.UnknownLayer")],e);const f=e;export{f as default};
