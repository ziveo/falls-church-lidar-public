import{hl as f,ey as m,hm as a,hn as n,ho as c}from"./index.a2b594ae.js";import{n as _,b as o}from"./quatf64.2f917dd7.js";import{n as u}from"./mat4f64.0958f530.js";class w{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&f(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*h);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,h));t++)this._items.push(this.allocator())}}const h=1024;class e{constructor(t,r,i){this.itemByteSize=t,this.itemCreate=r,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(i/this.itemByteSize)}get(){this._itemsPtr===0&&f(()=>this._reset());const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const r=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let i=0;i<this._itemsPerBuffer;++i)this._items.push(this.itemCreate(r,i*this.itemByteSize));this._buffers.push(r)}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(t=s){return new e(16,a,t)}static createVec3f64(t=s){return new e(24,n,t)}static createVec4f64(t=s){return new e(32,c,t)}static createMat3f64(t=s){return new e(72,_,t)}static createMat4f64(t=s){return new e(128,u,t)}static createQuatf64(t=s){return new e(32,o,t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const s=4*m.KILOBYTES;e.createVec2f64();const M=e.createVec3f64();e.createVec4f64();e.createMat3f64();const p=e.createMat4f64();e.createQuatf64();export{M as c,p as f,w as s};
