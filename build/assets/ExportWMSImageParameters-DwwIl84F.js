import{o as a,y as l,p as c,bI as h}from"./index-D53vMPd9.js";const b={visible:"visibleSublayers"};let s=class extends h{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("wms-sublayer-update",r=>this.notifyChange(b[r.propertyName]))],"layer"))}get layers(){return this.visibleSublayers.filter(({name:e})=>e).map(({name:e})=>e).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:r}=this,t=e==null?void 0:e.sublayers,o=[],i=n=>{const{minScale:y,maxScale:p,sublayers:u,visible:m}=n;m&&(r===0||(y===0||r<=y)&&(p===0||r>=p))&&(u?u.forEach(i):o.push(n))};return t==null||t.forEach(i),o}toJSON(){const{layer:e,layers:r}=this,{imageFormat:t,imageTransparency:o,version:i}=e;return{format:t,request:"GetMap",service:"WMS",styles:"",transparent:o?"TRUE":"FALSE",version:i,layers:r}}};a([l()],s.prototype,"layer",null),a([l({readOnly:!0})],s.prototype,"layers",null),a([l({type:Number})],s.prototype,"scale",void 0),a([l({readOnly:!0})],s.prototype,"version",null),a([l({readOnly:!0})],s.prototype,"visibleSublayers",null),s=a([c("esri.layers.support.ExportWMSImageParameters")],s);export{s as a};
