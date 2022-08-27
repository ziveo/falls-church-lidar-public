import{fT as x,A as d,fy as j,fC as l,ft as $,a6 as p,a5 as a,fz as q,s as X,hh as Y,g5 as E,hi as T,fx as k,t as B,fD as D,fB as A,hj as V,fL as F,hg as G,fu as H,hk as C,C as _,hc as I}from"./index.a2b594ae.js";import{s as J,c as f,f as K}from"./vectorStacks.5491bbd6.js";var g;(function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"})(g||(g={}));function yt(t){return t?{origin:x(t.origin),direction:x(t.direction)}:{origin:d(),direction:d()}}function St(t,e){const n=U.get();return n.origin=t,n.direction=e,n}function N(t,e,n){const o=j(t.direction,l(n,e,t.origin));return $(n,t.origin,p(n,t.direction,o)),n}function Q(){return{origin:null,direction:null}}const U=new J(Q);function W(t,e){const n=j(t,e)/(a(t)*a(e));return-q(n)}const tt=X.getLogger("esri.geometry.support.sphere");function R(){return Y()}function Z(t,e=R()){return E(e,t)}function nt(t,e){return T(t[0],t[1],t[2],e)}function et(t){return t}function ot(t){t[0]=t[1]=t[2]=t[3]=0}function rt(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function m(t){return t[3]}function it(t){return t}function st(t,e,n,o){return T(t,e,n,o)}function ct(t,e,n){return t!==n&&k(n,t),n[3]=t[3]+e,n}function ut(t,e,n){return tt.error("sphere.setExtent is not yet supported"),t===n?n:Z(t,n)}function M(t,e,n){if(B(e))return!1;const{origin:o,direction:r}=e,i=at;i[0]=o[0]-t[0],i[1]=o[1]-t[1],i[2]=o[2]-t[2];const s=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],c=2*(r[0]*i[0]+r[1]*i[1]+r[2]*i[2]),h=c*c-4*s*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(h<0)return!1;const b=Math.sqrt(h);let u=(-c-b)/(2*s);const y=(-c+b)/(2*s);return(u<0||y<u&&y>0)&&(u=y),!(u<0)&&(n&&(n[0]=o[0]+r[0]*u,n[1]=o[1]+r[1]*u,n[2]=o[2]+r[2]*u),!0)}const at=d();function ft(t,e){return M(t,e,null)}function gt(t,e,n){if(M(t,e,n))return n;const o=v(t,e,f.get());return $(n,e.origin,p(f.get(),e.direction,D(e.origin,o)/a(e.direction))),n}function v(t,e,n){const o=f.get(),r=K.get();A(o,e.origin,e.direction);const i=m(t);A(n,o,e.origin),p(n,n,1/a(n)*i);const s=z(t,e.origin),c=W(e.origin,n);return V(r,c+s,o),F(n,n,r),n}function lt(t,e,n){return M(t,e,n)?n:(N(e,t,n),w(t,n,n))}function w(t,e,n){const o=l(f.get(),e,t),r=p(f.get(),o,t[3]/a(o));return $(n,r,t)}function ht(t,e){const n=l(f.get(),e,t),o=G(n),r=t[3]*t[3];return Math.sqrt(Math.abs(o-r))}function z(t,e){const n=l(f.get(),e,t),o=a(n),r=m(t),i=r+Math.abs(r-o);return q(r/i)}const S=d();function L(t,e,n,o){const r=l(S,e,t);switch(n){case g.X:{const i=C(r,S)[2];return _(o,-Math.sin(i),Math.cos(i),0)}case g.Y:{const i=C(r,S),s=i[1],c=i[2],h=Math.sin(s);return _(o,-h*Math.cos(c),-h*Math.sin(c),Math.cos(s))}case g.Z:return H(o,r);default:return}}function O(t,e){const n=l(P,e,t);return a(n)-t[3]}function dt(t,e,n,o){const r=O(t,e),i=L(t,e,g.Z,P),s=p(P,i,n-r);return $(o,e,s)}function pt(t,e){const n=I(t,e),o=m(t);return n<=o*o}const P=d(),$t=R();Object.freeze(Object.defineProperty({__proto__:null,create:R,copy:Z,fromCenterAndRadius:nt,wrap:et,clear:ot,fromRadius:rt,getRadius:m,getCenter:it,fromValues:st,elevate:ct,setExtent:ut,intersectRay:M,intersectsRay:ft,intersectRayClosestSilhouette:gt,closestPointOnSilhouette:v,closestPoint:lt,projectPoint:w,distanceToSilhouette:ht,angleToSilhouette:z,axisAt:L,altitudeAt:O,setAltitudeAt:dt,containsPoint:pt,tmpSphere:$t},Symbol.toStringTag,{value:"Module"}));export{it as E,pt as Q,ft as X,R as _,yt as d,St as j,m as k,Z as q};
