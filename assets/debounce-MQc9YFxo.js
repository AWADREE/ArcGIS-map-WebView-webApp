/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */var M=typeof global=="object"&&global&&global.Object===Object&&global;const R=M;var w=typeof self=="object"&&self&&self.Object===Object&&self,B=R||w||Function("return this")();const W=B;var F=W.Symbol;const y=F;var L=Object.prototype,G=L.hasOwnProperty,U=L.toString,g=y?y.toStringTag:void 0;function _(e){var n=G.call(e,g),i=e[g];try{e[g]=void 0;var o=!0}catch{}var f=U.call(e);return o&&(n?e[g]=i:delete e[g]),f}var D=Object.prototype,H=D.toString;function X(e){return H.call(e)}var q="[object Null]",z="[object Undefined]",$=y?y.toStringTag:void 0;function J(e){return e==null?e===void 0?z:q:$&&$ in Object(e)?_(e):X(e)}function K(e){return e!=null&&typeof e=="object"}var Q="[object Symbol]";function V(e){return typeof e=="symbol"||K(e)&&J(e)==Q}var Y=/\s/;function Z(e){for(var n=e.length;n--&&Y.test(e.charAt(n)););return n}var ee=/^\s+/;function ne(e){return e&&e.slice(0,Z(e)+1).replace(ee,"")}function O(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var E=NaN,te=/^[-+]0x[0-9a-f]+$/i,re=/^0b[01]+$/i,ie=/^0o[0-7]+$/i,oe=parseInt;function k(e){if(typeof e=="number")return e;if(V(e))return E;if(O(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=O(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=ne(e);var i=re.test(e);return i||ie.test(e)?oe(e.slice(2),i?2:8):te.test(e)?E:+e}var ae=function(){return W.Date.now()};const p=ae;var fe="Expected a function",ce=Math.max,se=Math.min;function ue(e,n,i){var o,f,u,s,r,c,d=0,v=!1,l=!1,T=!0;if(typeof e!="function")throw new TypeError(fe);n=k(n)||0,O(i)&&(v=!!i.leading,l="maxWait"in i,u=l?ce(k(i.maxWait)||0,n):u,T="trailing"in i?!!i.trailing:T);function j(t){var a=o,b=f;return o=f=void 0,d=t,s=e.apply(b,a),s}function N(t){return d=t,r=setTimeout(m,n),v?j(t):s}function P(t){var a=t-c,b=t-d,I=n-a;return l?se(I,u-b):I}function h(t){var a=t-c,b=t-d;return c===void 0||a>=n||a<0||l&&b>=u}function m(){var t=p();if(h(t))return x(t);r=setTimeout(m,P(t))}function x(t){return r=void 0,T&&o?j(t):(o=f=void 0,s)}function A(){r!==void 0&&clearTimeout(r),d=0,o=c=f=r=void 0}function C(){return r===void 0?s:x(p())}function S(){var t=p(),a=h(t);if(o=arguments,f=this,c=t,a){if(r===void 0)return N(c);if(l)return clearTimeout(r),r=setTimeout(m,n),j(c)}return r===void 0&&(r=setTimeout(m,n)),s}return S.cancel=A,S.flush=C,S}export{y as S,V as a,J as b,O as c,ue as d,R as f,K as i,W as r};
