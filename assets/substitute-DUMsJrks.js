import{b8 as l,b9 as b,ba as a,bb as o,n as d}from"./index-BCiz3IFU.js";const m=()=>d.getLogger("esri.intl.substitute");function h(e,t,r={}){const{format:n={}}=r;return l(e,s=>p(s,t,n))}function p(e,t,r){let n,s;const u=e.indexOf(":");if(u===-1?n=e.trim():(n=e.slice(0,u).trim(),s=e.slice(u+1).trim()),!n)return"";const i=b(n,t);if(i==null)return"";const f=(s?r==null?void 0:r[s]:null)??(r==null?void 0:r[n]);return f?g(i,f):s?w(i,s):c(i)}function g(e,t){switch(t.type){case"date":return o(e,t.intlOptions);case"number":return a(e,t.intlOptions);default:return m().warn("missing format descriptor for key {key}"),c(e)}}function w(e,t){switch(t.toLowerCase()){case"dateformat":return o(e);case"numberformat":return a(e);default:return m().warn(`inline format is unsupported since 4.12: ${t}`),/^(dateformat|datestring)/i.test(t)?o(e):/^numberformat/i.test(t)?a(e):c(e)}}function c(e){switch(typeof e){case"string":return e;case"number":return a(e);case"boolean":return""+e;default:return e instanceof Date?o(e):""}}export{h as s};