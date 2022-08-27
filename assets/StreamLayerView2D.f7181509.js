import{$ as s,a0 as a,a1 as h,R as p,f as l,de as f,t as c,r as m}from"./index.a2b594ae.js";import v from"./FeatureLayerView2D.44e6efd3.js";import{e as O}from"./util.6c0fb4fc.js";import"./enums.9bd521fc.js";import"./LayerView.cda7cf95.js";import"./utils.d12e2f8e.js";import"./Utils.2e3a7d75.js";import"./number.6e30c64a.js";import"./enums.c60b1dad.js";import"./Texture.ccb8779a.js";import"./VertexElementDescriptor.2400a91d.js";import"./MaterialKey.0b3d0eb1.js";import"./alignmentUtils.84250e5d.js";import"./schemaUtils.a0315d44.js";import"./visualVariablesUtils.e34b6b98.js";import"./createSymbolSchema.6b64f055.js";import"./CIMSymbolHelper.9d471047.js";import"./BidiEngine.95523203.js";import"./GeometryUtils.f3664fe1.js";import"./cimAnalyzer.92f51743.js";import"./ExpandedCIM.ec020537.js";import"./MD5.7323a015.js";import"./popupUtils.b17f3311.js";import"./RefreshableLayerView.6c560e1f.js";function d(e,t){if(c(e)&&c(t))return null;const r={};return m(t)&&(r.geometry=t.toJSON()),m(e)&&(r.where=e),r}let o=class extends v{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([p(()=>{var e;return(e=this.layer)==null?void 0:e.purgeOptions},()=>this._update()),p(()=>this.suspended,e=>{e?this._proxy.pauseStream():this._proxy.resumeStream()})])}get connectionError(){if(this.errorString)return new l("stream-controller",this.errorString)}on(e,t){e==="data-received"&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),i=this;return{remove(){r.remove(),e==="data-received"&&(i._proxy.closed||i.hasEventListener("data-received")||i._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(e,t){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new l("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(r=>{const i=f.fromJSON(r);return i.features.forEach(n=>{n.layer=this.layer,n.sourceLayer=this.layer}),i})}detach(){super.detach(),this.connectionStatus="disconnected"}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(d(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map(u=>u.toJSON()),i=O(e.geometryType),n=e.timeInfo&&e.timeInfo.toJSON()||null,y=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:i,objectIdField:t,timeInfo:n,source:this.layer.parsedUrl,serviceFilter:d(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:y,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};s([a()],o.prototype,"errorString",void 0),s([a({readOnly:!0})],o.prototype,"connectionError",null),s([a()],o.prototype,"connectionStatus",void 0),o=s([h("esri.views.2d.layers.StreamLayerView2D")],o);const z=o;export{z as default};
