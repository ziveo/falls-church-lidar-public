import{lr as Y,$ as o,a0 as u,cJ as O,dh as J,a1 as k,cN as G,d_ as P,cx as K,f as N,a8 as he,ls as W,lt as ye,r as fe,jj as ge,jl as we,jk as xe,eq as ve,er as Se,es as Me,am as Z,R as ee,dm as te,aQ as re,hL as Ie,U as ie,a_ as se,bF as ae,dM as Le,bQ as Te,ew as be}from"./index.a2b594ae.js";import{p as Ee,x as Pe}from"./WebTileLayer.1407146c.js";import{o as Q}from"./crsUtils.6e7c3f6a.js";import{o as le}from"./xmlUtils.fe1322c5.js";class Ce{constructor(t,r=0,i=t.lods.length-1){this.tileInfo=t,this.minLOD=r,this.maxLOD=i}getAvailability(t,r,i){const s=this.tileInfo.lodAt(t);return!s||t<this.minLOD||t>this.maxLOD?"unavailable":s.cols&&s.rows?i>=s.cols[0]&&i<=s.cols[1]&&r>=s.rows[0]&&r<=s.rows[1]?"available":"unavailable":"available"}async fetchAvailability(t,r,i,s){return await Y(s),this.getAvailability(t,r,i)}async fetchAvailabilityUpsample(t,r,i,s,l){await Y(l),s.level=t,s.row=r,s.col=i;const a=this.tileInfo;for(a.updateTileInfo(s);;){const n=this.getAvailability(s.level,s.row,s.col);if(n!=="unavailable")return n;if(!a.upsampleTile(s))return"unavailable"}}}var B;let F=B=class extends G{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new B;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};o([u({type:O,json:{read:{source:"fullExtent"}}})],F.prototype,"fullExtent",void 0),o([u({type:String,json:{read:{source:"id"}}})],F.prototype,"id",void 0),o([u({type:J,json:{read:{source:"tileInfo"}}})],F.prototype,"tileInfo",void 0),F=B=o([k("esri.layer.support.TileMatrixSet")],F);const Oe=F;var H;let T=H=class extends G{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new H;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};o([u({json:{read:{source:"id"}}})],T.prototype,"id",void 0),o([u({json:{read:{source:"title"}}})],T.prototype,"title",void 0),o([u({json:{read:{source:"abstract"}}})],T.prototype,"description",void 0),o([u({json:{read:{source:"legendUrl"}}})],T.prototype,"legendUrl",void 0),o([u({json:{read:{source:"isDefault"}}})],T.prototype,"isDefault",void 0),o([u({json:{read:{source:"keywords"}}})],T.prototype,"keywords",void 0),T=H=o([k("esri.layer.support.WMTSStyle")],T);const Re=T;var q;let x=q=class extends G{constructor(e){super(e),this.fullExtent=null,this.fullExtents=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}get description(){return this._get("description")}set description(e){this._set("description",e)}readFullExtent(e,t){return(e=t.fullExtent)?O.fromJSON(e):null}readFullExtents(e,t){var r;return(r=t.fullExtents)!=null&&r.length?t.fullExtents.map(i=>O.fromJSON(i)):t.tileMatrixSets.map(i=>O.fromJSON(i.fullExtent)).filter(i=>i)}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e}set styleId(e){this._set("styleId",e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find(e=>e.id===this.tileMatrixSetId):null}clone(){const e=new q;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};o([u()],x.prototype,"description",null),o([u()],x.prototype,"fullExtent",void 0),o([P("fullExtent",["fullExtent"])],x.prototype,"readFullExtent",null),o([u({readOnly:!0})],x.prototype,"fullExtents",void 0),o([P("fullExtents",["fullExtents","tileMatrixSets"])],x.prototype,"readFullExtents",null),o([u()],x.prototype,"imageFormat",null),o([u({json:{read:{source:"formats"}}})],x.prototype,"imageFormats",void 0),o([u()],x.prototype,"id",void 0),o([u()],x.prototype,"layer",void 0),o([u()],x.prototype,"styleId",null),o([u({type:K.ofType(Re),json:{read:{source:"styles"}}})],x.prototype,"styles",void 0),o([u({value:null,json:{write:{ignoreOrigin:!0}}})],x.prototype,"title",null),o([u()],x.prototype,"tileMatrixSetId",void 0),o([u({readOnly:!0})],x.prototype,"tileMatrixSet",null),o([u({type:K.ofType(Oe),json:{read:{source:"tileMatrixSets"}}})],x.prototype,"tileMatrixSets",void 0),x=q=o([k("esri.layers.support.WMTSSublayer")],x);const A=x,ce=90.71428571428571;function oe(e){const t=e.replace(/ows:/gi,"");if(!w("Contents",new DOMParser().parseFromString(t,"text/xml").documentElement))throw new N("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function Fe(e,t){var j,U;e=e.replace(/ows:/gi,"");const r=new DOMParser().parseFromString(e,"text/xml").documentElement,i=new Map,s=new Map,l=w("Contents",r);if(!l)throw new N("wmtslayer:wmts-capabilities-xml-is-not-valid");const a=(j=w("OperationsMetadata",r))==null?void 0:j.querySelector("[name='GetTile']"),n=a==null?void 0:a.getElementsByTagName("Get"),c=n&&Array.prototype.slice.call(n),h=((U=t==null?void 0:t.url)==null?void 0:U.indexOf("https"))>-1;let f,g,p=t.serviceMode,d=t&&t.url;if(c&&c.length&&c.some(M=>{const L=w("Constraint",M);return!L||_("AllowedValues","Value",p,L)?(d=M.attributes[0].nodeValue,!0):(!L||_("AllowedValues","Value","RESTful",L)||_("AllowedValues","Value","REST",L)?g=M.attributes[0].nodeValue:L&&!_("AllowedValues","Value","KVP",L)||(f=M.attributes[0].nodeValue),!1)}),!d)if(g)d=g,p="RESTful";else if(f)d=f,p="KVP";else{const M=w("ServiceMetadataURL",r);d=M&&M.getAttribute("xlink:href")}const S=d.indexOf("1.0.0/");S===-1&&p==="RESTful"?d+="/":S>-1&&(d=d.substring(0,S)),p==="KVP"&&(d+=S>-1?"":"?"),h&&(d=d.replace(/^http:/i,"https:"));const $=y("ServiceIdentification>ServiceTypeVersion",r),R=y("ServiceIdentification>AccessConstraints",r),v=/^none$/i.test(R)?null:R,I=E("Layer",l),b=E("TileMatrixSet",l),D=I.map(M=>{const L=y("Identifier",M);return i.set(L,M),_e(L,M,b,h,$)});return{copyright:v,dimensionMap:s,layerMap:i,layers:D,serviceMode:p,tileUrl:d}}function $e(e){return e.layers.forEach(t=>{t.tileMatrixSets.forEach(r=>{const i=r.tileInfo;i.dpi!==96&&(i.lods.forEach(s=>{s.scale=96*s.scale/i.dpi,s.resolution=me(i.spatialReference.wkid,s.scale*ce/96,r.id)}),i.dpi=96)})}),e}function z(e){return e.nodeType===Node.ELEMENT_NODE}function w(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(z(i)&&i.nodeName===e)return i}return null}function E(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];z(s)&&s.nodeName===e&&r.push(s)}return r}function C(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];z(s)&&s.nodeName===e&&r.push(s)}return r.map(i=>i.textContent)}function y(e,t){return e.split(">").forEach(r=>{t&&(t=w(r,t))}),t&&t.textContent}function _(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some(l=>{if(l.nodeName.includes(e)){const a=w(t,l),n=a&&a.textContent;if(n===r||r.split(":")&&r.split(":")[1]===n)return s=l,!0}return!1}),s}function _e(e,t,r,i,s){const l=y("Abstract",t),a=C("Format",t);return{id:e,fullExtent:Ue(t),fullExtents:Ne(t),description:l,formats:a,styles:ke(t,i),title:y("Title",t),tileMatrixSets:De(s,t,r)}}function pe(e,t){var f;const r=[],i=(f=e.layerMap)==null?void 0:f.get(t);if(!i)return;const s=E("ResourceURL",i),l=E("Dimension",i);let a,n,c,h;return l.length&&(a=y("Identifier",l[0]),n=C("Default",l[0])||C("Value",l[0])),l.length>1&&(c=y("Identifier",l[1]),h=C("Default",l[1])||C("Value",l[1])),e.dimensionMap.set(t,{dimensions:n,dimensions2:h}),s.forEach(g=>{let p=g.getAttribute("template");if(g.getAttribute("resourceType")==="tile"){if(a&&n.length)if(p.includes("{"+a+"}"))p=p.replace("{"+a+"}","{dimensionValue}");else{const d=p.toLowerCase().indexOf("{"+a.toLowerCase()+"}");d>-1&&(p=p.substring(0,d)+"{dimensionValue}"+p.substring(d+a.length+2))}if(c&&h.length)if(p.includes("{"+c+"}"))p=p.replace("{"+c+"}","{dimensionValue2}");else{const d=p.toLowerCase().indexOf("{"+c.toLowerCase()+"}");d>-1&&(p=p.substring(0,d)+"{dimensionValue2}"+p.substring(d+c.length+2))}r.push({template:p,format:g.getAttribute("format"),resourceType:"tile"})}}),r}function Ve(e,t,r,i,s,l,a,n){var p,d;const c=Ae(e,t,i);if(!((c==null?void 0:c.length)>0))return"";const{dimensionMap:h}=e,f=(p=h.get(t).dimensions)==null?void 0:p[0],g=(d=h.get(t).dimensions2)==null?void 0:d[0];return c[a%c.length].template.replace(/\{Style\}/gi,s).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,l).replace(/\{TileRow\}/gi,""+a).replace(/\{TileCol\}/gi,""+n).replace(/\{dimensionValue\}/gi,f).replace(/\{dimensionValue2\}/gi,g)}function Ae(e,t,r){const i=pe(e,t),s=i.filter(l=>l.format===r);return s.length?s:i}function je(e,t,r,i){const{dimensionMap:s}=e,l=pe(e,t);let a="";if(l&&l.length>0){const n=s.get(t).dimensions&&s.get(t).dimensions[0],c=s.get(t).dimensions2&&s.get(t).dimensions2[0];a=l[0].template,a.indexOf(".xxx")===a.length-4&&(a=a.slice(0,a.length-4)),a=a.replace(/\{Style\}/gi,i),a=a.replace(/\{TileMatrixSet\}/gi,r),a=a.replace(/\{TileMatrix\}/gi,"{level}"),a=a.replace(/\{TileRow\}/gi,"{row}"),a=a.replace(/\{TileCol\}/gi,"{col}"),a=a.replace(/\{dimensionValue\}/gi,n),a=a.replace(/\{dimensionValue2\}/gi,c)}return a}function Ue(e){const t=w("WGS84BoundingBox",e),r=t?y("LowerCorner",t).split(" "):["-180","-90"],i=t?y("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function Ne(e){const t=[];return le(e,{BoundingBox:r=>{if(!r.getAttribute("crs"))return;const i=r.getAttribute("crs").toLowerCase(),s=X(i),l=i.includes("epsg")&&Q(s.wkid);let a,n,c,h;le(r,{LowerCorner:f=>{[a,n]=f.textContent.split(" ").map(g=>Number.parseFloat(g)),l&&([a,n]=[n,a])},UpperCorner:f=>{[c,h]=f.textContent.split(" ").map(g=>Number.parseFloat(g)),l&&([c,h]=[h,c])}}),t.push({xmin:a,ymin:n,xmax:c,ymax:h,spatialReference:s})}}),t}function ke(e,t){return E("Style",e).map(r=>{const i=w("LegendURL",r),s=w("Keywords",r),l=s&&C("Keyword",s);let a=i&&i.getAttribute("xlink:href");return t&&(a=a&&a.replace(/^http:/i,"https:")),{abstract:y("Abstract",r),id:y("Identifier",r),isDefault:r.getAttribute("isDefault")==="true",keywords:l,legendUrl:a,title:y("Title",r)}})}function De(e,t,r){return E("TileMatrixSetLink",t).map(i=>We(e,i,r))}function We(e,t,r){const i=w("TileMatrixSet",t).textContent,s=C("TileMatrix",t),l=r.find(v=>{const I=w("Identifier",v),b=I&&I.textContent;return!!(b===i||i.split(":")&&i.split(":")[1]===b)}),a=w("TileMatrixSetLimits",t),n=a&&E("TileMatrixLimits",a),c=new Map;if(n!=null&&n.length)for(const v of n){const I=w("TileMatrix",v).textContent,b=+w("MinTileRow",v).textContent,D=+w("MaxTileRow",v).textContent,j=+w("MinTileCol",v).textContent,U=+w("MaxTileCol",v).textContent;c.set(I,{minCol:j,maxCol:U,minRow:b,maxRow:D})}const h=y("SupportedCRS",l).toLowerCase(),f=Ke(l,h),g=f.spatialReference,p=w("TileMatrix",l),d=[parseInt(y("TileWidth",p),10),parseInt(y("TileHeight",p),10)],S=[];s.length?s.forEach((v,I)=>{const b=_("TileMatrix","Identifier",v,l);S.push(ne(b,h,I,i,c))}):E("TileMatrix",l).forEach((v,I)=>{S.push(ne(v,h,I,i,c))});const $=Be(e,l,f,d,S[0]).toJSON(),R=new J({dpi:96,spatialReference:g,size:d,origin:f,lods:S}).toJSON();return{id:i,fullExtent:$,tileInfo:R}}function X(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);t!==900913&&t!==3857||(t=102100);const r=qe(e);return fe(r)&&(t=r),{wkid:t}}function Ke(e,t){return de(w("TileMatrix",e),t)}function de(e,t){const r=X(t),[i,s]=y("TopLeftCorner",e).split(" ").map(a=>parseFloat(a)),l=t.includes("epsg")&&Q(r.wkid);return new he(l?{x:s,y:i,spatialReference:r}:{x:i,y:s,spatialReference:r})}function Be(e,t,r,i,s){const l=w("BoundingBox",t);let a,n,c,h,f,g;if(l&&(a=y("LowerCorner",l).split(" "),n=y("UpperCorner",l).split(" ")),a&&a.length>1&&n&&n.length>1)c=parseFloat(a[0]),f=parseFloat(a[1]),h=parseFloat(n[0]),g=parseFloat(n[1]);else{const p=w("TileMatrix",t),d=parseInt(y("MatrixWidth",p),10),S=parseInt(y("MatrixHeight",p),10);c=r.x,g=r.y,h=c+d*i[0]*s.resolution,f=g-S*i[1]*s.resolution}return He(e,r.spatialReference)?new O(f,c,g,h,r.spatialReference):new O(c,f,h,g,r.spatialReference)}function He(e,t){return e==="1.0.0"&&Q(t.wkid)}var V;function qe(e){return e.includes("crs84")||e.includes("crs:84")?V.CRS84:e.includes("crs83")||e.includes("crs:83")?V.CRS83:e.includes("crs27")||e.includes("crs:27")?V.CRS27:null}function ne(e,t,r,i,s){var v;const l=X(t),a=y("Identifier",e);let n=parseFloat(y("ScaleDenominator",e));const c=me(l.wkid,n,i);n*=96/ce;const h=+y("MatrixWidth",e),f=+y("MatrixHeight",e),{maxCol:g=h-1,maxRow:p=f-1,minCol:d=0,minRow:S=0}=(v=s.get(a))!=null?v:{},{x:$,y:R}=de(e,t);return{cols:[d,g],level:r,levelValue:a,origin:[$,R],scale:n,resolution:c,rows:[S,p]}}function me(e,t,r){let i;return i=W.hasOwnProperty(""+e)?W.values[W[e]]:r==="default028mm"?6370997*Math.PI/180:ye(e).metersPerDegree,7*t/25e3/i}(function(e){e[e.CRS84=4326]="CRS84",e[e.CRS83=4269]="CRS83",e[e.CRS27=4267]="CRS27"})(V||(V={}));const ue={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},Je=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let m=class extends ge(we(xe(ve(Se(Me(be)))))){constructor(...e){super(...e),this._sublayersHandles=new Z,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.own([ee(()=>this.activeLayer,(t,r)=>{r&&(r.layer=null),t&&(t.layer=this)},te),ee(()=>this.sublayers,(t,r)=>{r&&(r.forEach(i=>{i.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null),t&&(t.forEach(i=>{i.layer=this}),this._sublayersHandles||(this._sublayersHandles=new Z),this._sublayersHandles.add([t.on("after-add",({item:i})=>{i.layer=this}),t.on("after-remove",({item:i})=>{i.layer=null})]))},te)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){if(this.serviceMode==="KVP"||this.serviceMode==="RESTful")return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(re).then(()=>this._fetchService(e)).catch(t=>{throw re(t),new N("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:t})})),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new A);let i=t.layers.find(s=>s.id===this.activeLayer.id);return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,l=i==null?void 0:i.layerIdentifier;let a=null;const n=i==null?void 0:i.tileMatrixSet;n&&(Array.isArray(n)?n.length&&(a=n[0]):a=n);const c=s==null?void 0:s.format,h=s==null?void 0:s.style;return new A({id:l,imageFormat:c,styleId:h,tileMatrixSetId:a})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const l=Ie("tileMatrixSet.tileInfo",s);t.tileInfo=l?l.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return Ge(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets.map(e=>e.tileInfo.spatialReference).toArray()}get tilemapCache(){var t,r;const e=(r=(t=this.activeLayer)==null?void 0:t.tileMatrixSet)==null?void 0:r.tileInfo;return new Ce(e)}get title(){var e,t;return(t=(e=this.activeLayer)==null?void 0:e.title)!=null?t:"Layer"}set title(e){e?this._override("title",e):this._clearOverride("title")}get url(){return this._get("url")}set url(e){e&&e.substr(-1)==="/"?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,s=new Ee({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new Pe({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:s})}fetchTile(e,t,r){const i=this.getTileUrl(e,t,r);return ie(i,{responseType:"image"}).then(s=>s.data)}findSublayerById(e){return this.sublayers.find(t=>t.id===e)}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],s=i?i.levelValue?i.levelValue:`${i.level}`:`${e}`;let l=this.resourceInfo?"":Ve({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);return l||(l=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,s).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`)),l=this._appendCustomLayerParameters(l),l}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const s=je({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(s)return s}if(this.serviceMode==="KVP")return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if(this.serviceMode==="RESTful"){let s="";return ue[r.toLowerCase()]&&(s=ue[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)this.resourceInfo.serviceMode==="KVP"&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),oe(t.data)}catch{const r=this.serviceMode==="KVP"?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),oe(t.data),this.serviceMode=r}catch(i){throw new N("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:i})}}this.resourceInfo?t.data=$e(t.data):t.data=Fe(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await ie(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find(t=>t.id===e)}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...se(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=ae(e),i={...r.query,...t},s=Le(i);return s===""?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){this.url=this.url.split("?")[0];const t=e==="KVP"?`${this.url}?request=GetCapabilities&service=WMTS&version=${this.version}`:`${this.url}/${this.version}/WMTSCapabilities.xml`;return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=ae(e).query;if(!t)return null;const r={};return Object.keys(t).forEach(i=>{r[i.toLowerCase()]=t[i]}),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const i=Object.keys(r);i.length&&(e=e?se(e):{},i.forEach(s=>{e.hasOwnProperty(s)||Je.has(s)||(e[s]=r[s])}))}return e}};function Ge(e,t){return e.map(r=>{const i=new A;return i.read(r,t),i})}o([u()],m.prototype,"dimensionMap",void 0),o([u()],m.prototype,"layerMap",void 0),o([u({type:A,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],m.prototype,"activeLayer",null),o([P("service","activeLayer",["layers"])],m.prototype,"readActiveLayerFromService",null),o([P(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],m.prototype,"readActiveLayerFromItemOrWebDoc",null),o([Te(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:J},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],m.prototype,"writeActiveLayer",null),o([u({type:String,value:"",json:{write:!0}})],m.prototype,"copyright",void 0),o([u({type:["show","hide"]})],m.prototype,"listMode",void 0),o([u({json:{read:!0,write:!0}})],m.prototype,"blendMode",void 0),o([u({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],m.prototype,"customParameters",void 0),o([P(["portal-item","web-document"],"customParameters")],m.prototype,"readCustomParameters",null),o([u({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],m.prototype,"customLayerParameters",void 0),o([u({type:O,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],m.prototype,"fullExtent",void 0),o([u({readOnly:!0})],m.prototype,"fullExtents",null),o([u({type:["WebTiledLayer"]})],m.prototype,"operationalLayerType",void 0),o([u()],m.prototype,"resourceInfo",void 0),o([u()],m.prototype,"serviceMode",void 0),o([P(["portal-item","web-document"],"serviceMode",["templateUrl"])],m.prototype,"readServiceMode",null),o([u({type:K.ofType(A)})],m.prototype,"sublayers",void 0),o([P("service","sublayers",["layers"])],m.prototype,"readSublayersFromService",null),o([u({readOnly:!0})],m.prototype,"supportedSpatialReferences",null),o([u({readOnly:!0})],m.prototype,"tilemapCache",null),o([u({json:{read:{source:"title"}}})],m.prototype,"title",null),o([u({json:{read:!1},readOnly:!0,value:"wmts"})],m.prototype,"type",void 0),o([u({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],m.prototype,"url",null),o([u()],m.prototype,"version",void 0),m=o([k("esri.layers.WMTSLayer")],m);const Ze=m;export{Ze as default};
