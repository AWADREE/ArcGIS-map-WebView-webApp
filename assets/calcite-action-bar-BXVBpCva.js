import{b_ as d,b$ as O,c0 as B,c1 as k,ey as G,c2 as M}from"./index-JSomUsfp.js";import{c as P,d as $}from"./conditionalSlot-DY-puBav.js";import{g as q,o as y,s as E,m as R}from"./dom-CZeUaRuV.js";import{a as W,s as I,c as _}from"./loadable-EJuzY87v.js";import{u as F,c as U,a as j,s as J,d as K,b as Q}from"./t9n-BqBJfmJu.js";import{c as C}from"./observers-Dt8RtJ6p.js";import{S as g,d as V}from"./action-group-BtmRVA4M.js";import{S as X,d as Y,a as Z}from"./action-menu-D4PaNZtP.js";import{d as N}from"./action-B1EJ1RZG.js";import{d as ee}from"./icon-BlihV0TY.js";import{d as te}from"./loader-B7hIiKfv.js";import{d as oe}from"./debounce-MQc9YFxo.js";import"./guid-6Y9utpk5.js";import"./focusTrapComponent-CnYLqp0h.js";import"./openCloseComponent-CZkb3-kg.js";import"./component-RjiOe4wK.js";import"./interactive-fRFtoJZQ.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const ne=150,se=2,w=n=>n.reduce((e,t)=>e+t,0)/n.length,ie=n=>{const e=n.filter(o=>o.slot!==g.menuActions),t=e==null?void 0:e.length;return{actionWidth:t?w(e.map(o=>o.clientWidth||0)):0,actionHeight:t?w(e.map(o=>o.clientHeight||0)):0}},ae=({width:n,actionWidth:e,layout:t,height:o,actionHeight:i,groupCount:c})=>{const s=t==="horizontal"?n:o,a=t==="horizontal"?e:i;return Math.floor((s-c*se)/a)},ce=({layout:n,actionCount:e,actionWidth:t,width:o,actionHeight:i,height:c,groupCount:s})=>Math.max(e-ae({width:o,actionWidth:t,layout:n,height:c,actionHeight:i,groupCount:s}),0),x=n=>Array.from(n.querySelectorAll("calcite-action")).filter(e=>e.closest("calcite-action-menu")?e.slot===X.trigger:!0),le=({actionGroups:n,expanded:e,overflowCount:t})=>{let o=t;n.reverse().forEach(i=>{let c=0;const s=x(i).reverse();s.forEach(a=>{a.slot===g.menuActions&&(a.removeAttribute("slot"),a.textEnabled=e)}),o>0&&s.some(a=>(s.filter(h=>!h.slot).length>1&&s.length>2&&!a.closest("calcite-action-menu")&&(a.textEnabled=!0,a.setAttribute("slot",g.menuActions),c++,c>1&&o--),o<1)),O(i)})},L={chevronsLeft:"chevrons-left",chevronsRight:"chevrons-right"};function re(n,e){var t;return n||((t=e.closest("calcite-shell-panel"))==null?void 0:t.position)||"start"}function m({el:n,expanded:e}){x(n).filter(t=>t.slot!==g.menuActions).forEach(t=>t.textEnabled=e),n.querySelectorAll("calcite-action-group, calcite-action-menu").forEach(t=>t.expanded=e)}const de=({tooltip:n,referenceElement:e,expanded:t,ref:o})=>(n&&(n.referenceElement=!t&&e?e:null),o&&o(e),e),he=({expanded:n,expandText:e,collapseText:t,expandLabel:o,collapseLabel:i,toggle:c,el:s,position:a,tooltip:l,ref:h,scale:r})=>{const p=q(s)==="rtl",f=n?t:e,b=n?i:o,u=[L.chevronsLeft,L.chevronsRight];p&&u.reverse();const A=re(a,s)==="end",H=A?u[1]:u[0],T=A?u[0]:u[1];return d("calcite-action",{icon:n?H:T,id:"expand-toggle",label:b,onClick:c,ref:D=>de({tooltip:l,referenceElement:D,expanded:n,ref:h}),scale:r,text:f,textEnabled:n,title:!n&&!l?f:null})};/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const ue={actionGroupEnd:"action-group--end"},v={actionsEnd:"actions-end",bottomActions:"bottom-actions",expandTooltip:"expand-tooltip"},pe=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;--calcite-action-bar-expanded-max-width:auto}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=vertical][overflow-actions-disabled]){overflow-y:auto}:host([layout=horizontal][overflow-actions-disabled]){overflow-x:auto}:host([layout=vertical][expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-block-end:0;border-inline-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal][expand-disabled]) ::slotted(calcite-action-group:last-of-type){border-inline-end:0}::slotted(calcite-action-group:last-child){border-block-end:0;border-inline-end:0}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}",fe=pe,S=B(class extends k{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionBarToggle=G(this,"calciteActionBarToggle",6),this.mutationObserver=C("mutation",()=>{const{el:e,expanded:t}=this;m({el:e,expanded:t}),this.overflowActions()}),this.resizeObserver=C("resize",e=>this.resizeHandlerEntries(e)),this.actionMenuOpenHandler=e=>{if(e.target.menuOpen){const t=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(o=>{t.includes(o)||(o.menuOpen=!1)})}},this.resizeHandlerEntries=e=>{e.forEach(this.resizeHandler)},this.resizeHandler=e=>{const{width:t,height:o}=e.contentRect;this.resize({width:t,height:o})},this.resize=oe(({width:e,height:t})=>{const{el:o,expanded:i,expandDisabled:c,layout:s,overflowActionsDisabled:a}=this;if(a||s==="vertical"&&!t||s==="horizontal"&&!e)return;const l=x(o),h=c?l.length:l.length+1,r=Array.from(o.querySelectorAll("calcite-action-group"));this.setGroupLayout(r);const p=this.hasActionsEnd||this.hasBottomActions||!c?r.length+1:r.length,{actionHeight:f,actionWidth:b}=ie(l),u=ce({layout:s,actionCount:h,actionHeight:f,actionWidth:b,height:t,width:e,groupCount:p});le({actionGroups:r,expanded:i,overflowCount:u})},ne),this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionBarToggle.emit()},this.setExpandToggleRef=e=>{this.expandToggleEl=e},this.handleDefaultSlotChange=e=>{const t=y(e).filter(o=>o.matches("calcite-action-group"));this.setGroupLayout(t)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=E(e)},this.handleBottomActionsSlotChange=e=>{this.hasBottomActions=E(e)},this.handleTooltipSlotChange=e=>{const t=y(e).filter(o=>o==null?void 0:o.matches("calcite-tooltip"));this.expandTooltip=t[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.overflowActionsDisabled=!1,this.overlayPositioning="absolute",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.hasActionsEnd=!1,this.hasBottomActions=!1,this.expandTooltip=void 0,this.defaultMessages=void 0}expandHandler(){this.overflowActions()}expandedHandler(){const{el:e,expanded:t}=this;m({el:e,expanded:t}),this.overflowActions()}layoutHandler(){this.updateGroups()}overflowDisabledHandler(e){var t,o;if(e){(t=this.resizeObserver)==null||t.disconnect();return}(o=this.resizeObserver)==null||o.observe(this.el),this.overflowActions()}onMessagesChange(){}effectiveLocaleChange(){F(this,this.effectiveLocale)}componentDidLoad(){const{el:e,expanded:t}=this;W(this),m({el:e,expanded:t}),this.overflowActions()}connectedCallback(){var o,i;const{el:e,expanded:t}=this;U(this),j(this),m({el:e,expanded:t}),(o=this.mutationObserver)==null||o.observe(e,{childList:!0,subtree:!0}),this.overflowActionsDisabled||(i=this.resizeObserver)==null||i.observe(e),this.overflowActions(),P(this)}async componentWillLoad(){I(this),await J(this)}disconnectedCallback(){var e,t;(e=this.mutationObserver)==null||e.disconnect(),(t=this.resizeObserver)==null||t.disconnect(),$(this),K(this),Q(this)}async overflowActions(){this.resize({width:this.el.clientWidth,height:this.el.clientHeight})}async setFocus(){await _(this),R(this.el)}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(e){e.forEach(t=>t.layout=this.layout)}renderBottomActionGroup(){const{expanded:e,expandDisabled:t,el:o,position:i,toggleExpand:c,scale:s,layout:a,messages:l,actionsEndGroupLabel:h,overlayPositioning:r}=this,p=t?null:d(he,{collapseLabel:l.collapseLabel,collapseText:l.collapse,el:o,expandLabel:l.expandLabel,expandText:l.expand,expanded:e,position:i,ref:this.setExpandToggleRef,scale:s,toggle:c,tooltip:this.expandTooltip});return d("calcite-action-group",{class:ue.actionGroupEnd,hidden:this.expandDisabled&&!(this.hasActionsEnd||this.hasBottomActions),label:h,layout:a,overlayPositioning:r,scale:s},d("slot",{name:v.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),d("slot",{name:v.bottomActions,onSlotchange:this.handleBottomActionsSlotChange}),d("slot",{name:v.expandTooltip,onSlotchange:this.handleTooltipSlotChange}),p)}render(){return d(M,{key:"9e51fdce0eb5bab08780d3892afde985b339dc06",onCalciteActionMenuOpen:this.actionMenuOpenHandler},d("slot",{key:"cb68a40bd689cf49d7e15771da8c82eb959a0976",onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup())}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return fe}},[1,"calcite-action-bar",{actionsEndGroupLabel:[1,"actions-end-group-label"],expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],overflowActionsDisabled:[516,"overflow-actions-disabled"],overlayPositioning:[513,"overlay-positioning"],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],hasActionsEnd:[32],hasBottomActions:[32],expandTooltip:[32],defaultMessages:[32],overflowActions:[64],setFocus:[64]},void 0,{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function z(){if(typeof customElements>"u")return;["calcite-action-bar","calcite-action","calcite-action-group","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-bar":customElements.get(e)||customElements.define(e,S);break;case"calcite-action":customElements.get(e)||N();break;case"calcite-action-group":customElements.get(e)||V();break;case"calcite-action-menu":customElements.get(e)||Z();break;case"calcite-icon":customElements.get(e)||ee();break;case"calcite-loader":customElements.get(e)||te();break;case"calcite-popover":customElements.get(e)||Y();break}})}z();const Ge=S,Me=z;export{Ge as CalciteActionBar,Me as defineCustomElement};