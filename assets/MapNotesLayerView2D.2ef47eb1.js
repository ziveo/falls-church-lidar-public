import{r as o,cT as f,cx as w,R as p,S as n,cR as y,t as _,$ as V,a1 as v}from"./index.a2b594ae.js";import{s as C}from"./utils.d12e2f8e.js";import{r as b}from"./GroupContainer.3f96898d.js";import{f as T,u as H}from"./LayerView.cda7cf95.js";import{i as g}from"./GraphicContainer.0564b6c8.js";import{a as d}from"./BaseGraphicContainer.1fa0b98f.js";import"./Utils.2e3a7d75.js";import"./number.6e30c64a.js";import"./enums.9bd521fc.js";import"./enums.c60b1dad.js";import"./Texture.ccb8779a.js";import"./VertexElementDescriptor.2400a91d.js";import"./MaterialKey.0b3d0eb1.js";import"./alignmentUtils.84250e5d.js";import"./WGLContainer.22a0c4e4.js";import"./VertexArrayObject.4f327ffb.js";import"./ProgramTemplate.f984cffb.js";import"./StyleDefinition.d46cb482.js";import"./config.ded6d251.js";import"./GeometryUtils.b4d0dc88.js";import"./earcut.f65e2fcc.js";import"./CIMSymbolHelper.9d471047.js";import"./BidiEngine.95523203.js";import"./GeometryUtils.f3664fe1.js";import"./normalizeUtilsSync.924df729.js";import"./projectionSupport.19c2bea2.js";import"./json.8bd707cf.js";import"./FeatureContainer.3d3ea08e.js";import"./TileContainer.65a061dc.js";import"./visualVariablesUtils.3b6fdf98.js";import"./visualVariablesUtils.e34b6b98.js";import"./Matcher.d151d078.js";import"./tileUtils.40106882.js";import"./TileClipper.5b46af68.js";import"./Geometry.f2d62961.js";import"./cimAnalyzer.92f51743.js";import"./ExpandedCIM.ec020537.js";import"./schemaUtils.a0315d44.js";import"./createSymbolSchema.6b64f055.js";import"./MD5.7323a015.js";import"./util.6c0fb4fc.js";import"./ComputedAttributeStorage.40f17c59.js";import"./centroid.87389c2d.js";import"./vec3f32.ca7a14c1.js";const m="sublayers",l="layerView",I=Object.freeze({remove(){},pause(){},resume(){}});let c=class extends T(H){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new b}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){o(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():o(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(o(this._graphicsViewsFeatureCollectionMap)){const h=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&h.popupTemplate&&(r.popupTemplate=h.popupTemplate)}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;return typeof i=="number"?t=[i]:i instanceof f?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(e=>e&&e.uid):w.isCollection(i)&&(t=i.map(e=>e&&e.uid).toArray()),t=t.filter(e=>e!=null),t.length?(this._addHighlight(t),{remove:()=>{this._removeHighlight(t)}}):I}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(o(e)&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const h=new g(this.view.featuresTilingScheme);h.fadeTransitionEnabled=!0;const r=new d({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:h});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.handles.add([p(()=>s.visible,a=>r.container.visible=a,n),p(()=>r.updating,()=>this.notifyChange("updating"),n)],l)}this._updateHighlight()}else o(this.layer.sublayers)&&this.handles.add(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.handles.remove(m)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),_(this.layer.sublayers))return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const h=new C,r=new g(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const a=new d({view:t,graphics:s.graphics,requestUpdateCallback:e,container:r});this.handles.add([s.on("graphic-update",a.graphicUpdateHandler),p(()=>s.visible,u=>a.container.visible=u,n),p(()=>a.updating,()=>this.notifyChange("updating"),n)],l),h.addChild(a.container),this.container.addChild(h),i.push(a)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};c=V([v("esri.views.2d.layers.MapNotesLayerView2D")],c);const wi=c;export{wi as default};
