import{cT as s,cx as p,$ as h,a0 as a,a1 as o}from"./index.a2b594ae.js";import{f as g,u as m}from"./LayerView.cda7cf95.js";import{i as l}from"./GraphicContainer.0564b6c8.js";import{a as c}from"./BaseGraphicContainer.1fa0b98f.js";import"./utils.d12e2f8e.js";import"./Utils.2e3a7d75.js";import"./number.6e30c64a.js";import"./enums.9bd521fc.js";import"./enums.c60b1dad.js";import"./Texture.ccb8779a.js";import"./VertexElementDescriptor.2400a91d.js";import"./MaterialKey.0b3d0eb1.js";import"./alignmentUtils.84250e5d.js";import"./CIMSymbolHelper.9d471047.js";import"./BidiEngine.95523203.js";import"./GeometryUtils.f3664fe1.js";import"./normalizeUtilsSync.924df729.js";import"./projectionSupport.19c2bea2.js";import"./json.8bd707cf.js";import"./VertexArrayObject.4f327ffb.js";import"./FeatureContainer.3d3ea08e.js";import"./TileContainer.65a061dc.js";import"./WGLContainer.22a0c4e4.js";import"./ProgramTemplate.f984cffb.js";import"./StyleDefinition.d46cb482.js";import"./config.ded6d251.js";import"./GeometryUtils.b4d0dc88.js";import"./earcut.f65e2fcc.js";import"./visualVariablesUtils.3b6fdf98.js";import"./visualVariablesUtils.e34b6b98.js";import"./Matcher.d151d078.js";import"./tileUtils.40106882.js";import"./TileClipper.5b46af68.js";import"./Geometry.f2d62961.js";import"./cimAnalyzer.92f51743.js";import"./ExpandedCIM.ec020537.js";import"./schemaUtils.a0315d44.js";import"./createSymbolSchema.6b64f055.js";import"./MD5.7323a015.js";import"./util.6c0fb4fc.js";import"./ComputedAttributeStorage.40f17c59.js";import"./centroid.87389c2d.js";import"./vec3f32.ca7a14c1.js";const n={remove(){},pause(){},resume(){}};let r=class extends g(m){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new c({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new l(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.graphicsView=null,this.handles.remove("graphicslayerview2d")}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate)}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;return typeof i=="number"?t=[i]:i instanceof s?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(e=>e&&e.uid):p.isCollection(i)&&i.length>0&&(t=i.map(e=>e&&e.uid).toArray()),t=t==null?void 0:t.filter(e=>e!=null),t.length?(this._addHighlight(t),{remove:()=>this._removeHighlight(t)}):n}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};h([a()],r.prototype,"graphicsView",void 0),r=h([o("esri.views.2d.layers.GraphicsLayerView2D")],r);const ri=r;export{ri as default};
