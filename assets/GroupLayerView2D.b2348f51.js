import{$ as a,a0 as l,dl as p,a1 as d,cx as V,R as y,dm as h,cP as w,t as o}from"./index.a2b594ae.js";import{r as v}from"./GroupContainer.3f96898d.js";import{u,f as m}from"./LayerView.cda7cf95.js";import"./WGLContainer.22a0c4e4.js";import"./enums.c60b1dad.js";import"./utils.d12e2f8e.js";import"./Utils.2e3a7d75.js";import"./number.6e30c64a.js";import"./enums.9bd521fc.js";import"./Texture.ccb8779a.js";import"./VertexElementDescriptor.2400a91d.js";import"./MaterialKey.0b3d0eb1.js";import"./alignmentUtils.84250e5d.js";import"./VertexArrayObject.4f327ffb.js";import"./ProgramTemplate.f984cffb.js";import"./StyleDefinition.d46cb482.js";import"./config.ded6d251.js";import"./GeometryUtils.b4d0dc88.js";import"./earcut.f65e2fcc.js";let t=class extends u{constructor(i){super(i),this.type="group",this.layerViews=new V}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.handles.add([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),y(()=>this.layer.visibilityMode,()=>this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null)),h),y(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},h)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(i){this._set("layerViews",w(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>{var s;return(s=this._findLayerViewForLayer(e))==null?void 0:s.visible});return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){o(i)&&(i=this._firstVisibleOnLayerOrder(),o(i)&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map(s=>y(()=>s.visible,r=>this._applyVisibility(()=>{r!==this.visible&&(s.visible=this.visible)},()=>this._applyExclusiveVisibility(r?s:null)),h)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e!=null&&e.visible?e:null))}_applyVisibility(i,e){var s,r;this._hasLayerViewVisibleOverrides()&&(((s=this.layer)==null?void 0:s.visibilityMode)==="inherited"?i():((r=this.layer)==null?void 0:r.visibilityMode)==="exclusive"&&e())}};a([l({cast:p})],t.prototype,"layerViews",null),a([l({readOnly:!0})],t.prototype,"updatingProgress",null),a([l()],t.prototype,"view",void 0),t=a([d("esri.views.layers.GroupLayerView")],t);const b=t;let n=class extends m(b){constructor(){super(...arguments),this.container=new v}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",()=>this._updateStageChildren()),"grouplayerview2d")}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}update(i){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};n=a([d("esri.views.2d.layers.GroupLayerView2D")],n);const z=n;export{z as default};
