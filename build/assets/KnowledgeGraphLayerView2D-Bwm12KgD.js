import{V as i,C as n,o as s,y as a,D as l,p as o}from"./index-CoAqRdgv.js";import{f as h,y as d}from"./LayerView-BBgiwAJg.js";import"./Container-DCBWyjsb.js";import"./highlightReasons-1rwijU3k.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-BL7Bcv91.js";import"./layerViewUtils-DaObYqcz.js";let t=class extends h(d){constructor(e){super(e),this.layerViews=new i}set layerViews(e){this._set("layerViews",n(e,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,r)=>e+r.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(e){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,r)=>this.container.addChildAt(e.container,r))}};s([a({cast:l})],t.prototype,"layerViews",null),s([a({readOnly:!0})],t.prototype,"updatingProgress",null),t=s([o("esri.views.2d.layers.KnowledgeGraphLayerView2D")],t);const C=t;export{C as default};