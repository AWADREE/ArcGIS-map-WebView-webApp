import{o as a,p as i}from"./index-B0_eEgGQ.js";import{E as s,a as h,R as o}from"./Container-B-rZRGcE.js";import{i as n}from"./AGraphicContainer-DpUeJoxk.js";let t=class extends n{get hasHighlight(){return this.children.some(e=>e.hasData)}renderChildren(e){this.attributeView.update(),e.drawPhase===s.HIGHLIGHT&&this.children.some(r=>r.hasData)&&(super.renderChildren(e),e.context.setColorMask(!0,!0,!0,!0),h(e,!0,r=>{this._renderChildren(r,o.All)}))}};t=a([i("esri.views.2d.layers.graphics.HighlightGraphicContainer")],t);const m=t;export{m as h};