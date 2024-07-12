import{aX as C,hl as a,hY as T,hp as D,d8 as y,a$ as l,d9 as F,da as f,dd as M,dc as g,hi as Y,aW as Z,aM as b,hZ as v,aL as G,h_ as z,aY as A,h$ as H,dO as I,db as J,i0 as d,a_ as K,i1 as O,fo as R,i2 as Q,i3 as U,hm as tt}from"./index-B0_eEgGQ.js";import{c as h,f as nt}from"./plane-DxqzzG-o.js";function it(t,i){const n=C(t,i)/(a(t)*a(i));return-T(n)}class et{constructor(i){this._allocator=i,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&D(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const i=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*L);this._items.length=Math.min(i,this._items.length),this._itemsPtr=0}_grow(){for(let i=0;i<Math.max(8,Math.min(this._items.length,L));i++)this._items.push(this._allocator())}}const L=1024;function E(t){return t?j(y(t.origin),y(t.direction)):j(l(),l())}function j(t,i){return{origin:t,direction:i}}function Lt(t,i){const n=ot.get();return n.origin=t,n.direction=i,n}function st(t,i,n=E()){return F(n.origin,t),f(n.direction,i,t),n}function rt(t,i,n){const e=C(t.direction,f(n,i,t.origin));return M(n,t.origin,g(n,t.direction,e)),n}const ot=new et(()=>E()),ct=x();function x(){return Y()}const ut=Z,at=Z;function X(t,i){return b(i,t)}function ht(t,i){return v(t[0],t[1],t[2],i)}function ft(t){return t}function lt(t){t[0]=t[1]=t[2]=t[3]=0}function gt(t,i){return t[0]=t[1]=t[2]=0,t[3]=i,t}function $(t){return t[3]}function mt(t){return t}function dt(t,i,n,e){return v(t,i,n,e)}function _t(t,i,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+i,n}function Mt(t,i,n){return t!==n&&X(t,n),n}function p(t,i,n){if(i==null||!k(t,i,_))return!1;let{t0:e,t1:s}=_;if((e<0||s<e&&s>0)&&(e=s),e<0)return!1;if(n){const{origin:r,direction:o}=i;n[0]=r[0]+o[0]*e,n[1]=r[1]+o[1]*e,n[2]=r[2]+o[2]*e}return!0}function $t(t,i,n){const e=st(i,n);if(!k(t,e,_))return[];const{origin:s,direction:r}=e,{t0:o,t1:c}=_,u=m=>{const P=l();return tt(P,s,r,m),q(t,P,P)};return Math.abs(o-c)<G()?[u(o)]:[u(o),u(c)]}const _={t0:0,t1:0};function k(t,i,n){const{origin:e,direction:s}=i,r=pt;r[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2];const o=s[0]*s[0]+s[1]*s[1]+s[2]*s[2];if(o===0)return!1;const c=2*(s[0]*r[0]+s[1]*r[1]+s[2]*r[2]),u=c*c-4*o*(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-t[3]*t[3]);if(u<0)return!1;const m=Math.sqrt(u);return n.t0=(-c-m)/(2*o),n.t1=(-c+m)/(2*o),!0}const pt=l();function Pt(t,i){return p(t,i,null)}function St(t,i,n){if(p(t,i,n))return n;const e=N(t,i,h.get());return M(n,i.origin,g(h.get(),i.direction,z(i.origin,e)/a(i.direction))),n}function N(t,i,n){const e=h.get(),s=nt.get();A(e,i.origin,i.direction);const r=$(t);A(n,e,i.origin),g(n,n,1/a(n)*r);const o=V(t,i.origin),c=it(i.origin,n);return H(s,c+o,e),I(n,n,s),n}function bt(t,i,n){return p(t,i,n)?n:(rt(i,t,n),q(t,n,n))}function q(t,i,n){const e=f(h.get(),i,t),s=g(h.get(),e,t[3]/a(e));return M(n,s,t)}function wt(t,i){const n=f(h.get(),i,t),e=J(n),s=t[3]*t[3];return Math.sqrt(Math.abs(e-s))}function V(t,i){const n=f(h.get(),i,t),e=a(n),s=$(t),r=s+Math.abs(s-e);return T(s/r)}const S=l();function W(t,i,n,e){const s=f(S,i,t);switch(n){case d.X:{const r=O(s,S)[2];return R(e,-Math.sin(r),Math.cos(r),0)}case d.Y:{const r=O(s,S),o=r[1],c=r[2],u=Math.sin(o);return R(e,-u*Math.cos(c),-u*Math.sin(c),Math.cos(o))}case d.Z:return K(e,s);default:return}}function B(t,i){const n=f(w,i,t);return a(n)-t[3]}function xt(t,i,n,e){const s=B(t,i),r=W(t,i,d.Z,w),o=g(w,r,n-s);return M(e,i,o)}function qt(t,i){const n=Q(t,i),e=$(t);return n<=e*e}function yt(t,i,n=Y()){const e=z(t,i),s=t[3],r=i[3];return e+r<s?(b(n,t),n):e+s<r?(b(n,i),n):(U(n,t,i,(e+r-s)/(2*e)),n[3]=(e+s+r)/2,n)}const w=l(),At=x();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:ct,altitudeAt:B,angleToSilhouette:V,axisAt:W,clear:lt,closestPoint:bt,closestPointOnSilhouette:N,containsPoint:qt,copy:X,create:x,distanceToSilhouette:wt,elevate:_t,equals:at,exactEquals:ut,fromCenterAndRadius:ht,fromRadius:gt,fromValues:dt,getCenter:mt,getRadius:$,intersectLine:$t,intersectRay:p,intersectRayClosestSilhouette:St,intersectsRay:Pt,projectPoint:q,setAltitudeAt:xt,setExtent:Mt,tmpSphere:At,union:yt,wrap:ft},Symbol.toStringTag,{value:"Module"}));export{Pt as H,$ as N,X as T,mt as V,x as _,qt as a,Lt as l,E as m,et as s};