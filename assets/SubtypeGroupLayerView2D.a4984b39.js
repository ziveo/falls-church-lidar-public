import{$ as l,a1 as n,R as p,S as y,r as m,cZ as u}from"./index.a2b594ae.js";import d from"./FeatureLayerView2D.44e6efd3.js";import"./enums.9bd521fc.js";import"./LayerView.cda7cf95.js";import"./utils.d12e2f8e.js";import"./Utils.2e3a7d75.js";import"./number.6e30c64a.js";import"./enums.c60b1dad.js";import"./Texture.ccb8779a.js";import"./VertexElementDescriptor.2400a91d.js";import"./MaterialKey.0b3d0eb1.js";import"./alignmentUtils.84250e5d.js";import"./schemaUtils.a0315d44.js";import"./visualVariablesUtils.e34b6b98.js";import"./createSymbolSchema.6b64f055.js";import"./CIMSymbolHelper.9d471047.js";import"./BidiEngine.95523203.js";import"./GeometryUtils.f3664fe1.js";import"./cimAnalyzer.92f51743.js";import"./ExpandedCIM.ec020537.js";import"./MD5.7323a015.js";import"./util.6c0fb4fc.js";import"./popupUtils.b17f3311.js";import"./RefreshableLayerView.6c560e1f.js";function h(e,r){return!e.visible||e.minScale!==0&&r>e.minScale||e.maxScale!==0&&r<e.maxScale}let o=class extends d{initialize(){this.handles.add([p(()=>{var e;return(e=this.view)==null?void 0:e.viewpoint},()=>this._update(),y)])}_injectOverrides(e){let r=super._injectOverrides(e);const s=this.view.scale,t=this.layer.sublayers.filter(a=>h(a,s)).map(a=>a.subtypeCode);if(!t.length)return r;r=m(r)?r:new u().toJSON();const i=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return r.where=r.where?`(${r.where}) AND (${i})`:i,r}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],t=this.layer.sublayers.find(i=>i.subtypeCode===s);e.layer=t,e.sourceLayer=this.layer}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(i=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:i.labelingInfo,labelsVisible:i.labelsVisible,renderer:i.renderer,subtypeCode:i.subtypeCode,orderBy:null}))},r=this.layer.sublayers.map(i=>i.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};o=l([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const z=o;export{z as default};
