import{dy as p,dA as a,er as d,o as t,y as i,p as l,dJ as y,s as u}from"./index-JSomUsfp.js";let s=class extends p(a(y)){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,o)=>{d(()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let n="Unsupported layer type";r&&(n+=" "+r),o(new u("layer:unsupported-layer-type",n,{layerType:r}))})}))}read(e,o){const r={resourceInfo:e};e.id!=null&&(r.id=e.id),e.title!=null&&(r.title=e.title),super.read(r,o)}write(e,o){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};t([i({readOnly:!0})],s.prototype,"resourceInfo",void 0),t([i({type:["show","hide"]})],s.prototype,"listMode",void 0),t([i({type:Boolean,readOnly:!1})],s.prototype,"persistenceEnabled",void 0),t([i({json:{read:!1},readOnly:!0,value:"unsupported"})],s.prototype,"type",void 0),s=t([l("esri.layers.UnsupportedLayer")],s);const h=s;export{h as default};