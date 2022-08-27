import{e as D,I,t as V,bf as T,bg as x,B as N,r as S,y as A,bh as F,be as H,f as U}from"./index.a2b594ae.js";import{d as m,b as E,S as O}from"./Utils.2e3a7d75.js";import{U as B}from"./MaterialKey.0b3d0eb1.js";import{t as $,v as w}from"./enums.9bd521fc.js";import{C as i}from"./enums.c60b1dad.js";const q=1/D("mapview-transitions-duration");class M extends I{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(e){this._clips=e,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(e){this._opacity!==e&&(this._opacity=Math.min(1,Math.max(e,0)),this.requestRender())}get stage(){return this._stage}set stage(e){if(this._stage===e)return;const t=this._stage;this._stage=e,e?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):t.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return V(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(e){this._visible!==e&&(this._visible=e,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=T(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=T(),this.requestRender()),this._fadeOutResolver.promise}beforeRender(e){this.updateTransitionProperties(e.deltaTime,e.state.scale)}afterRender(e){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&this.computedOpacity===0&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var e;(e=this.parent)==null||e.removeChild(this)}setTransform(e){}processRender(e){this.stage&&this.computedVisible&&this.doRender(e)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(e,t){if(this.fadeTransitionEnabled){const s=this._fadeOutResolver||!this.visible?0:this.opacity,c=this.computedOpacity;if(c===s)this.computedVisible=this.visible;else{const p=e*q;this.computedOpacity=c>s?Math.max(s,c-p):Math.min(s,c+p),this.computedVisible=this.computedOpacity>0;const r=s===this.computedOpacity;this.inFadeTransition=!r,r||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(e){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}class k extends M{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender()}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach(t=>t.clips=e)}get computedEffects(){var e,t;return(t=(e=this._effectView)==null?void 0:e.effects)!=null?t:null}get effect(){var e,t;return(t=(e=this._effectView)==null?void 0:e.effect)!=null?t:""}set effect(e){(this._effectView||e)&&(this._effectView||(this._effectView=new x),this._effectView.effect=e,this.requestRender())}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._effectView&&(this._effectView.transitionStep(e,t),this._effectView.transitioning&&this.requestRender())}doRender(e){const t=this.createRenderParams(e);this.renderChildren(t)}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,t=this.children.length){if(!e||this.contains(e))return e;this._needsSort=!0;const s=e.parent;return s&&s!==this&&s.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}contains(e){return this._childrenSet.has(e)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t}sortChildren(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1)}_createTransforms(){return{dvs:N()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e}onDetach(){super.onDetach();for(const e of this.children)e.stage=null}renderChildren(e){for(const t of this.children)t.beforeRender(e);for(const t of this.children)t.processRender(e);for(const t of this.children)t.afterRender(e)}createRenderParams(e){return{...e,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}class f{static getStorageSpec(e){return null}static createOrUpdateRendererSchema(e,t){return S(e)&&e.type==="default"?e:{type:"default"}}static getVariation(e){return{}}static getVariationHash(e){return 0}}f.type="default",f.programSpec=null;class y extends f{static getStorageSpec({attributes:e}){return{visualVariables:!1,attributes:e!=null?e:null}}static _createRendererSchema(){return{type:"dot-density",colors:new Float32Array(32),dotValue:-1,dotSize:-1,dotScale:-1,dotBlending:!1,backgroundColor:new Float32Array(4),activeDots:new Float32Array(8),seed:-1}}static createOrUpdateRendererSchema(e,t){const{attributes:s,dotValue:c,referenceScale:p,dotSize:r,dotBlendingEnabled:d,seed:a,backgroundColor:u}=t,h=S(e)&&e.type==="dot-density"?e:this._createRendererSchema();h.dotValue=c,h.dotSize=r,h.dotScale=p,h.dotBlending=d,h.seed=a;const{colors:v,activeDots:_,backgroundColor:l}=h;for(let n=0;n<$;n++){const b=n>=s.length?null:s[n].color;m(v,b,4*n)}for(let n=0;n<8;n++)_[n]=n<t.attributes.length?1:0;return m(l,u),h}static getVariation(e){return{ddDotBlending:e.dotBlending}}static getVariationHash(e){return e.dotBlending?1:0}}y.type="dot-density",y.programSpec={shader:"materials/fill",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:i.SHORT},{location:1,name:"a_id",count:3,type:i.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:i.UNSIGNED_BYTE},{location:3,name:"a_inverseArea",count:1,type:i.FLOAT}]}};class g extends f{static getStorageSpec({field:e,valueExpression:t}){return{visualVariables:!1,attributes:e||t?[{field:e,valueExpression:t}]:null}}static _createRendererSchema(){return{type:"heatmap",radius:-1,referenceScale:-1,isFieldActive:0,minDensity:-1,densityRange:-1,kernel:null,gradient:null,gradientHash:"invalid"}}static createOrUpdateRendererSchema(e,t){const{radius:s,minDensity:c,maxDensity:p,referenceScale:r,field:d,valueExpression:a,colorStops:u}=t,h=p-c,v=d||a?1:0,_=u.map(({color:b,ratio:C})=>`${C}:${b.toString()}`).join();let l,n=!0;return S(e)&&e.type==="heatmap"?(l=e,n=_!==e.gradientHash):l=this._createRendererSchema(),l.radius=A(s),l.minDensity=c,l.densityRange=h,l.referenceScale=r,l.isFieldActive=v,n&&(l.gradient=F(u),l.gradientHash=_),l}}g.type="heatmap",g.programSpec={shader:"materials/icon/heatmapAccumulate",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:i.SHORT},{location:1,name:"a_vertexOffset",count:2,type:i.SHORT},{location:4,name:"a_id",count:4,type:i.UNSIGNED_BYTE}]}};class R extends f{static getStorageSpec({attributes:e}){return{visualVariables:!0,attributes:e!=null?e:null}}static _createRendererSchema(){return{type:"pie-chart",colors:new Float32Array(4*w),defaultColor:new Float32Array(4),othersColor:new Float32Array(4),outlineColor:new Float32Array(4),holePercentage:0,sectorThreshold:0,outlineWidth:1,numberOfFields:10}}static createOrUpdateRendererSchema(e,t){const{attributes:s,defaultColor:c,holePercentage:p,othersCategory:r,outline:d}=t,a=S(e)&&e.type==="pie-chart"?e:this._createRendererSchema();for(let u=0;u<w;u++){const h=u>=s.length?new H([0,0,0,0]):s[u].color;m(a.colors,h,4*u)}return m(a.defaultColor,c),m(a.othersColor,r==null?void 0:r.color),m(a.outlineColor,d==null?void 0:d.color),a.outlineWidth=A((d==null?void 0:d.width)||0),a.holePercentage=p,a.sectorThreshold=(r==null?void 0:r.threshold)||0,a.numberOfFields=s.length,a}static getVariation(e){return{numberOfFields:e.numberOfFields}}static getVariationHash(e){return e.numberOfFields}}R.type="pie-chart",R.programSpec={shader:"materials/pie",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:i.SHORT},{location:1,name:"a_vertexOffset",count:2,type:i.SHORT},{location:2,name:"a_texCoords",count:2,type:i.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:i.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:i.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:i.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:i.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:i.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:i.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]};function j(o,e){if(o.type!==e)throw new U("material-view-model:unexpected-renderer-schema",`expected to find renderer schema of type "${e}" but found type "${o.type}"`)}function W(o){switch(o.type){case"dot-density":return y;case"heatmap":return g;case"pie-chart":return R;default:return f}}function K(o){const{geometryType:e,symbologyType:t}=B.load(o);switch(e){case E.FILL:if(t===O.DOT_DENSITY)return y;break;case E.MARKER:switch(t){case O.HEATMAP:return g;case O.PIE_CHART:return R}}return f}export{M as a,j as b,W as c,f as e,K as p,k as s};
