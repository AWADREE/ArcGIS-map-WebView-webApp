import{d8 as a,a$ as c,d9 as m,da as e,aX as g,db as p,dc as b,ab as h,dd as w}from"./index-CV1RNnVc.js";import{s as x}from"./sphere-D5PL-wrG.js";import{c as A}from"./plane-BZqfeobj.js";function s(r){return r?{origin:a(r.origin),vector:a(r.vector)}:{origin:c(),vector:c()}}function k(r,n,o=s()){return m(o.origin,r),e(o.vector,n,r),o}function l(r,n,o){return M(r,n,0,1,o)}function M(r,n,o,u,i){const{vector:t,origin:v}=r,d=e(A.get(),n,v),f=g(t,d)/p(t);return b(i,t,h(f,o,u)),w(i,i,r.origin)}new x(()=>s());export{l as M,k as h,s as v};