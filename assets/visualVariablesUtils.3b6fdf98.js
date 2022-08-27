import{t as h,bx as f,y as z}from"./index.a2b594ae.js";import{k as r,n as d}from"./Utils.2e3a7d75.js";import{a9 as g}from"./enums.9bd521fc.js";import{o as S}from"./visualVariablesUtils.e34b6b98.js";const $=8388607,v=8388608,x=254,E=255,D=0,m=1,y=e=>(e&v)>>>23,F=e=>e&$,U=e=>y(e)===m?x:E;function k(e){return y(e)===m}function L(e,s){return((s?v:0)|e)>>>0}const R=(e,s)=>e&&((...t)=>s.warn("DEBUG:",...t))||(()=>null),T=!1;function Z(e,s){if(!e||!s)return e;switch(s){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function V(e){return{value:e.value,size:f(e.size)}}function a(e){return e.map(s=>V(s))}function u(e){if(typeof e=="string"||typeof e=="number")return f(e);const s=e;return{type:"size",expression:s.expression,stops:a(s.stops)}}const c=e=>{const s=[],t=[],n=a(e),o=n.length;for(let i=0;i<6;i++){const l=n[Math.min(i,o-1)];s.push(l.value),t.push(l.size==null?g:z(l.size))}return{values:new Float32Array(s),sizes:new Float32Array(t)}};function N(e){const s=e&&e.length>0?{}:null,t=s?{}:null;if(!s)return{vvFields:s,vvRanges:t};for(const n of e)if(n.field&&(s[n.type]=n.field),n.type==="size"){t.size||(t.size={});const o=n;switch(S(o)){case r.SIZE_MINMAX_VALUE:t.size.minMaxValue={minDataValue:o.minDataValue,maxDataValue:o.maxDataValue,minSize:u(o.minSize),maxSize:u(o.maxSize)};break;case r.SIZE_SCALE_STOPS:t.size.scaleStops={stops:a(o.stops)};break;case r.SIZE_FIELD_STOPS:if(o.levels){const i={};for(const l in o.levels)i[l]=c(o.levels[l]);t.size.fieldStops={type:"level-dependent",levels:i}}else t.size.fieldStops={type:"static",...c(o.stops)};break;case r.SIZE_UNIT_VALUE:t.size.unitValue={unit:o.valueUnit,valueRepresentation:o.valueRepresentation}}}else if(n.type==="color")t.color=A(n);else if(n.type==="opacity")t.opacity=_(n);else if(n.type==="rotation"){const o=n;t.rotation={type:o.rotationType}}return{vvFields:s,vvRanges:t}}function _(e){const s={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(typeof e.field=="string"){if(!e.stops)return null;{if(e.stops.length>8)return null;const t=e.stops;for(let n=0;n<8;++n){const o=t[Math.min(n,t.length-1)];s.values[n]=o.value,s.opacities[n]=o.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const t=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(let n=0;n<8;n++)s.values[n]=1/0,s.opacities[n]=t}}return s}function p(e,s,t){e[4*s+0]=t.r/255,e[4*s+1]=t.g/255,e[4*s+2]=t.b/255,e[4*s+3]=t.a}function A(e){if(h(e)||e.normalizationField)return null;const s={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if(typeof e.field=="string"){if(!e.stops)return null;{if(e.stops.length>8)return null;s.field=e.field;const t=e.stops;for(let n=0;n<8;++n){const o=t[Math.min(n,t.length-1)];s.values[n]=o.value,p(s.colors,n,o.color)}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const t=e.stops&&e.stops.length>=0&&e.stops[0].color;for(let n=0;n<8;n++)s.values[n]=1/0,p(s.colors,n,t)}}for(let t=0;t<32;t+=4)d(s.colors,t,!0);return s}export{$ as a,m as c,y as e,F as f,U as i,T as l,N as m,R as n,k as p,Z as r,L as s,D as u};
