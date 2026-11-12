var Kg=Object.defineProperty;var Qg=(e,t,r)=>t in e?Kg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var mo=(e,t,r)=>Qg(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();/*!
 * ONNX Runtime Web v1.21.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var za=Object.defineProperty,Zg=Object.getOwnPropertyDescriptor,Xg=Object.getOwnPropertyNames,Jg=Object.prototype.hasOwnProperty,Yg=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),q=(e,t)=>()=>(e&&(t=e(e=0)),t),fr=(e,t)=>{for(var r in t)za(e,r,{get:t[r],enumerable:!0})},ey=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Xg(t))!Jg.call(e,n)&&n!==r&&za(e,n,{get:()=>t[n],enumerable:!(a=Zg(t,n))||a.enumerable});return e},Lr=e=>ey(za({},"__esModule",{value:!0}),e),Yt,yt,qt,go,Kd,Qd=q(()=>{Yt=new Map,yt=[],qt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=Yt.get(e);if(a===void 0)Yt.set(e,{backend:t,priority:r});else{if(a.priority>r)return;if(a.priority===r&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=yt.indexOf(e);n!==-1&&yt.splice(n,1);for(let i=0;i<yt.length;i++)if(Yt.get(yt[i]).priority<=r){yt.splice(i,0,e);return}yt.push(e)}return}throw new TypeError("not a valid backend")},go=async e=>{let t=Yt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return r||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Kd=async e=>{let t=e.executionProviders||[],r=t.map(p=>typeof p=="string"?p:p.name),a=r.length===0?yt:r,n,i=[],o=new Set;for(let p of a){let d=await go(p);typeof d=="string"?i.push({name:p,err:d}):(n||(n=d),n===d&&o.add(p))}if(!n)throw new Error(`no available backend found. ERR: ${i.map(p=>`[${p.name}] ${p.err}`).join(", ")}`);for(let{name:p,err:d}of i)r.includes(p)&&console.warn(`removing requested execution provider "${p}" from session options because it is not available: ${d}`);let l=t.filter(p=>o.has(typeof p=="string"?p:p.name));return[n,new Proxy(e,{get:(p,d)=>d==="executionProviders"?l:Reflect.get(p,d)})]}}),ty=q(()=>{Qd()}),Zd,ry=q(()=>{Zd="1.21.0"}),bi,Ge,Xd=q(()=>{ry(),bi="warning",Ge={wasm:{},webgl:{},webgpu:{},versions:{common:Zd},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);bi=e}},get logLevel(){return bi}},Object.defineProperty(Ge,"logLevel",{enumerable:!0})}),be,iy=q(()=>{Xd(),be=Ge}),Jd,Yd,ay=q(()=>{Jd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let a=r.getContext("2d");if(a!=null){let n,i;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],i=e.dims[3]):(n=e.dims[3],i=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,p,d;l===void 0||l.mean===void 0?p=[255,255,255,255]:typeof l.mean=="number"?p=[l.mean,l.mean,l.mean,l.mean]:(p=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(p[3]=l.mean[3])),l===void 0||l.bias===void 0?d=[0,0,0,0]:typeof l.bias=="number"?d=[l.bias,l.bias,l.bias,l.bias]:(d=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(d[3]=l.bias[3]));let m=i*n,g=0,y=m,_=m*2,w=-1;o==="RGBA"?(g=0,y=m,_=m*2,w=m*3):o==="RGB"?(g=0,y=m,_=m*2):o==="RBG"&&(g=0,_=m,y=m*2);for(let b=0;b<i;b++)for(let S=0;S<n;S++){let v=(e.data[g++]-d[0])*p[0],$=(e.data[y++]-d[1])*p[1],T=(e.data[_++]-d[2])*p[2],k=w===-1?255:(e.data[w++]-d[3])*p[3];a.fillStyle="rgba("+v+","+$+","+T+","+k+")",a.fillRect(S,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Yd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(r!=null){let n,i,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],i=e.dims[1],o=e.dims[3]):(n=e.dims[3],i=e.dims[2],o=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",p=t==null?void 0:t.norm,d,m;p===void 0||p.mean===void 0?d=[255,255,255,255]:typeof p.mean=="number"?d=[p.mean,p.mean,p.mean,p.mean]:(d=[p.mean[0],p.mean[1],p.mean[2],255],p.mean[3]!==void 0&&(d[3]=p.mean[3])),p===void 0||p.bias===void 0?m=[0,0,0,0]:typeof p.bias=="number"?m=[p.bias,p.bias,p.bias,p.bias]:(m=[p.bias[0],p.bias[1],p.bias[2],0],p.bias[3]!==void 0&&(m[3]=p.bias[3]));let g=i*n;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let y=4,_=0,w=1,b=2,S=3,v=0,$=g,T=g*2,k=-1;l==="RGBA"?(v=0,$=g,T=g*2,k=g*3):l==="RGB"?(v=0,$=g,T=g*2):l==="RBG"&&(v=0,T=g,$=g*2),a=r.createImageData(n,i);for(let C=0;C<i*n;_+=y,w+=y,b+=y,S+=y,C++)a.data[_]=(e.data[v++]-m[0])*d[0],a.data[w]=(e.data[$++]-m[1])*d[1],a.data[b]=(e.data[T++]-m[2])*d[2],a.data[S]=k===-1?255:(e.data[k++]-m[3])*d[3]}else throw new Error("Can not access image data");return a}}),Tr,ep,tp,rp,ip,ap,ny=q(()=>{Aa(),Tr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=t,n=t.norm??{mean:255,bias:0},i,o;typeof n.mean=="number"?i=[n.mean,n.mean,n.mean,n.mean]:i=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?o=[n.bias,n.bias,n.bias,n.bias]:o=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",p=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*a,m=p==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),g=4,y=0,_=1,w=2,b=3,S=0,v=d,$=d*2,T=-1;l==="RGB"&&(g=3,y=0,_=1,w=2,b=-1),p==="RGBA"?T=d*3:p==="RBG"?(S=0,$=d,v=d*2):p==="BGR"&&($=0,v=d,S=d*2);for(let k=0;k<d;k++,y+=g,w+=g,_+=g,b+=g)m[S++]=(e[y]+o[0])/i[0],m[v++]=(e[_]+o[1])/i[1],m[$++]=(e[w]+o[2])/i[2],T!==-1&&b!==-1&&(m[T++]=(e[b]+o[3])/i[3]);return p==="RGBA"?new Ue("float32",m,[1,4,r,a]):new Ue("float32",m,[1,3,r,a])},ep=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",o,l=t??{},p=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=m=>typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||m instanceof OffscreenCanvas?m.getContext("2d"):null;if(r){let m=p();m.width=e.width,m.height=e.height;let g=d(m);if(g!=null){let y=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(y=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=y,l.width=_}else l.tensorFormat="RGBA",l.height=y,l.width=_;g.drawImage(e,0,0),o=g.getImageData(0,0,_,y).data}else throw new Error("Can not access image data")}else if(a){let m,g;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(m=t.resizedHeight,g=t.resizedWidth):(m=e.height,g=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=m,l.width=g,t!==void 0){let y=p();y.width=g,y.height=m;let _=d(y);if(_!=null)_.putImageData(e,0,0),o=_.getImageData(0,0,g,m).data;else throw new Error("Can not access image data")}else o=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let m=p();m.width=e.width,m.height=e.height;let g=d(m);if(g!=null){let y=e.height,_=e.width;return g.drawImage(e,0,0,_,y),o=g.getImageData(0,0,_,y).data,l.height=y,l.width=_,Tr(o,l)}else throw new Error("Can not access image data")}else{if(i)return new Promise((m,g)=>{let y=p(),_=d(y);if(!e||!_)return g();let w=new Image;w.crossOrigin="Anonymous",w.src=e,w.onload=()=>{y.width=w.width,y.height=w.height,_.drawImage(w,0,0,y.width,y.height);let b=_.getImageData(0,0,y.width,y.height);l.height=y.height,l.width=y.width,m(Tr(b.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return Tr(o,l);throw new Error("Input data provided is not supported - aborted tensor creation")},tp=(e,t)=>{let{width:r,height:a,download:n,dispose:i}=t,o=[1,a,r,4];return new Ue({location:"texture",type:"float32",texture:e,dims:o,download:n,dispose:i})},rp=(e,t)=>{let{dataType:r,dims:a,download:n,dispose:i}=t;return new Ue({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:a,download:n,dispose:i})},ip=(e,t)=>{let{dataType:r,dims:a,download:n,dispose:i}=t;return new Ue({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:a,download:n,dispose:i})},ap=(e,t,r)=>new Ue({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Et,ur,$i,np,sy=q(()=>{Et=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ur=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),$i=!1,np=()=>{if(!$i){$i=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,a=typeof r<"u"&&r.from;e&&(Et.set("int64",BigInt64Array),ur.set(BigInt64Array,"int64")),t&&(Et.set("uint64",BigUint64Array),ur.set(BigUint64Array,"uint64")),a?(Et.set("float16",r),ur.set(r,"float16")):Et.set("float16",Uint16Array)}}}),sp,op,oy=q(()=>{Aa(),sp=e=>{let t=1;for(let r=0;r<e.length;r++){let a=e[r];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);t*=a}return t},op=(e,t)=>{switch(e.location){case"cpu":return new Ue(e.type,e.data,t);case"cpu-pinned":return new Ue({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ue({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ue({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Ue({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ue,Aa=q(()=>{ay(),ny(),sy(),oy(),Ue=class{constructor(e,t,r){np();let a,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,n=e.dims,e.location){case"cpu-pinned":{let o=Et.get(a);if(!o)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,l;if(typeof e=="string")if(a=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let p=Et.get(e);if(p===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&p===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${p.name} as data.`);e==="uint64"||e==="int64"?o=p.from(t,BigInt):o=p.from(t)}else if(t instanceof p)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&p!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${a} tensor's data must be type of ${p}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let p=typeof e[0];if(p==="string")a="string",o=e;else if(p==="boolean")a="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${p}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",o=Uint8Array.from(e);else{let p=ur.get(e.constructor);if(p===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=p,o=e}if(l===void 0)l=[o.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");n=l,this.cpuData=o,this.dataLocation="cpu"}let i=sp(n);if(this.cpuData&&i!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=n,this.size=i}static async fromImage(e,t){return ep(e,t)}static fromTexture(e,t){return tp(e,t)}static fromGpuBuffer(e,t){return rp(e,t)}static fromMLTensor(e,t){return ip(e,t)}static fromPinnedBuffer(e,t,r){return ap(e,t,r)}toDataURL(e){return Jd(this,e)}toImageData(e){return Yd(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return op(this,e)}}}),Xe,up=q(()=>{Aa(),Xe=Ue}),Vr,vi,at,Je,lp=q(()=>{Xd(),Vr=(e,t)=>{(typeof Ge.trace>"u"?!Ge.wasm.trace:!Ge.trace)||console.timeStamp(`${e}::ORT::${t}`)},vi=(e,t)=>{var n;let r=((n=new Error().stack)==null?void 0:n.split(/\r\n|\r|\n/g))||[],a=!1;for(let i=0;i<r.length;i++){if(a&&!r[i].includes("TRACE_FUNC")){let o=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(o+=`::${t}`),Vr("CPU",o);return}r[i].includes("TRACE_FUNC")&&(a=!0)}},at=e=>{(typeof Ge.trace>"u"?!Ge.wasm.trace:!Ge.trace)||vi("BEGIN",e)},Je=e=>{(typeof Ge.trace>"u"?!Ge.wasm.trace:!Ge.trace)||vi("END",e)}}),dp,uy=q(()=>{Qd(),up(),lp(),dp=class pp{constructor(t){this.handler=t}async run(t,r,a){at();let n={},i={};if(typeof t!="object"||t===null||t instanceof Xe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Xe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,m=Object.getOwnPropertyNames(r);for(let g of this.outputNames)if(m.indexOf(g)!==-1){let y=r[g];(y===null||y instanceof Xe)&&(d=!0,o=!1,n[g]=y)}if(d){if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(o)for(let d of this.outputNames)n[d]=null;let l=await this.handler.run(t,n,i),p={};for(let d in l)if(Object.hasOwnProperty.call(l,d)){let m=l[d];m instanceof Xe?p[d]=m:p[d]=new Xe(m.type,m.data,m.dims)}return Je(),p}async release(){return this.handler.dispose()}static async create(t,r,a,n){at();let i,o={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let m=t,g=0,y=t.byteLength;if(typeof r=="object"&&r!==null)o=r;else if(typeof r=="number"){if(g=r,!Number.isSafeInteger(g))throw new RangeError("'byteOffset' must be an integer.");if(g<0||g>=m.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${m.byteLength}).`);if(y=t.byteLength-g,typeof a=="number"){if(y=a,!Number.isSafeInteger(y))throw new RangeError("'byteLength' must be an integer.");if(y<=0||g+y>m.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${m.byteLength-g}].`);if(typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(m,g,y)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,p]=await Kd(o),d=await l.createInferenceSessionHandler(i,p);return Je(),new pp(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Oa,ly=q(()=>{uy(),Oa=dp}),dy=q(()=>{}),py=q(()=>{}),cy=q(()=>{}),hy=q(()=>{}),fy={};fr(fy,{InferenceSession:()=>Oa,TRACE:()=>Vr,TRACE_FUNC_BEGIN:()=>at,TRACE_FUNC_END:()=>Je,Tensor:()=>Xe,env:()=>be,registerBackend:()=>qt});var Ye=q(()=>{ty(),iy(),ly(),up(),dy(),py(),lp(),cy(),hy()}),Ra=q(()=>{}),cp={};fr(cp,{default:()=>hp});var xi,Si,hp,my=q(()=>{var e;yf(),Nt(),Ba(),xi="ort-wasm-proxy-worker",Si=((e=globalThis.self)==null?void 0:e.name)===xi,Si&&(self.onmessage=t=>{let{type:r,in:a}=t.data;try{switch(r){case"init-wasm":Na(a.wasm).then(()=>{Ya(a).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:i}=a;en(i,n).then(()=>{postMessage({type:r})},o=>{postMessage({type:r,err:o})});break}case"copy-from":{let{buffer:n}=a,i=Qr(n);postMessage({type:r,out:i});break}case"create":{let{model:n,options:i}=a;tn(n,i).then(o=>{postMessage({type:r,out:o})},o=>{postMessage({type:r,err:o})});break}case"release":rn(a),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:i,inputs:o,outputIndices:l,options:p}=a;an(n,i,o,l,new Array(l.length).fill(null),p).then(d=>{d.some(m=>m[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},sn([...o,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":nn(a),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),hp=Si?null:t=>new Worker(t??Pe,{type:"module",name:xi})}),fp={};fr(fp,{default:()=>mp});var ki,Ti,mp,yo,gy=q(()=>{var e,t;Ti=(ki=import.meta.url,async function(r={}){var fo;var a,n,i=r,o=new Promise((s,u)=>{a=s,n=u}),l=typeof window=="object",p=typeof WorkerGlobalScope<"u",d=p&&((fo=self.name)==null?void 0:fo.startsWith("em-pthread"));i.mountExternalData=(s,u)=>{s.startsWith("./")&&(s=s.substring(2)),(i.Bd||(i.Bd=new Map)).set(s,u)},i.unmountExternalData=()=>{delete i.Bd};var m=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let g=()=>{let s=(c,h,f)=>(...x)=>{let I=tt,A=h==null?void 0:h();x=c(...x);let R=h==null?void 0:h();return A!==R&&(c=R,f(A),h=f=null),tt!=I?new Promise((U,H)=>{ci={resolve:U,reject:H}}):x},u=c=>async(...h)=>{var f;try{if(i.Cd)throw Error("Session already started");let x=i.Cd={be:h[0],errors:[]},I=await c(...h);if(i.Cd!==x)throw Error("Session mismatch");(f=i.Dd)==null||f.flush();let A=x.errors;if(0<A.length){let R=await Promise.all(A);if(R=R.filter(U=>U),0<R.length)throw Error(R.join(`
`))}return I}finally{i.Cd=null}};i._OrtCreateSession=s(i._OrtCreateSession,()=>i._OrtCreateSession,c=>i._OrtCreateSession=c),i._OrtRun=u(s(i._OrtRun,()=>i._OrtRun,c=>i._OrtRun=c)),i._OrtRunWithBinding=u(s(i._OrtRunWithBinding,()=>i._OrtRunWithBinding,c=>i._OrtRunWithBinding=c)),i._OrtBindInput=s(i._OrtBindInput,()=>i._OrtBindInput,c=>i._OrtBindInput=c),g=void 0};i.jsepInit=(s,u)=>{if(g==null||g(),s==="webgpu"){[i.Dd,i.Rd,i.Vd,i.Hd,i.Ud,i.hc,i.Wd,i.Zd,i.Sd,i.Td,i.Xd]=u;let c=i.Dd;i.jsepRegisterBuffer=(h,f,x,I)=>c.registerBuffer(h,f,x,I),i.jsepGetBuffer=h=>c.getBuffer(h),i.jsepCreateDownloader=(h,f,x)=>c.createDownloader(h,f,x),i.jsepOnCreateSession=h=>{c.onCreateSession(h)},i.jsepOnReleaseSession=h=>{c.onReleaseSession(h)},i.jsepOnRunStart=h=>c.onRunStart(h),i.$d=(h,f)=>{c.upload(h,f)}}else if(s==="webnn"){[i.Dd,i.Yd,i.Id,i.jsepEnsureTensor,i.Jd,i.jsepDownloadTensor]=u,i.jsepReleaseTensorId=i.Id,i.jsepUploadTensor=i.Jd;let c=i.Dd;i.jsepOnRunStart=h=>c.onRunStart(h),i.jsepOnRunEnd=c.onRunEnd.bind(c),i.jsepRegisterMLContext=(h,f)=>{c.registerMLContext(h,f)},i.jsepOnReleaseSession=h=>{c.onReleaseSession(h)},i.jsepCreateMLTensorDownloader=(h,f)=>c.createMLTensorDownloader(h,f),i.jsepRegisterMLTensor=(h,f,x,I)=>c.registerMLTensor(h,f,x,I),i.jsepCreateMLContext=h=>c.createMLContext(h),i.jsepRegisterMLConstant=(h,f,x,I,A)=>c.registerMLConstant(h,f,x,I,A,i.Bd),i.jsepRegisterGraphInput=c.registerGraphInput.bind(c),i.jsepIsGraphInput=c.isGraphInput.bind(c),i.jsepCreateTemporaryTensor=c.createTemporaryTensor.bind(c)}};var y,_,w=Object.assign({},i),b=(s,u)=>{throw u},S="";(l||p)&&(p?S=self.location.href:typeof document<"u"&&document.currentScript&&(S=document.currentScript.src),ki&&(S=ki),S=S.startsWith("blob:")?"":S.slice(0,S.replace(/[?#].*/,"").lastIndexOf("/")+1),p&&(_=s=>{var u=new XMLHttpRequest;return u.open("GET",s,!1),u.responseType="arraybuffer",u.send(null),new Uint8Array(u.response)}),y=async s=>{if(ge(s))return new Promise((c,h)=>{var f=new XMLHttpRequest;f.open("GET",s,!0),f.responseType="arraybuffer",f.onload=()=>{f.status==200||f.status==0&&f.response?c(f.response):h(f.status)},f.onerror=h,f.send(null)});var u=await fetch(s,{credentials:"same-origin"});if(u.ok)return u.arrayBuffer();throw Error(u.status+" : "+u.url)});var v=console.log.bind(console),$=console.error.bind(console),T=v,k=$;Object.assign(i,w),w=null;var C,E,z,B,W,G,ee,ae,Z,te,J,V,de,me=i.wasmBinary,F=!1,ge=s=>s.startsWith("file://");function M(){return C.buffer!=B.buffer&&ye(),B}function L(){return C.buffer!=B.buffer&&ye(),W}function le(){return C.buffer!=B.buffer&&ye(),G}function ve(){return C.buffer!=B.buffer&&ye(),ee}function D(){return C.buffer!=B.buffer&&ye(),ae}function ce(){return C.buffer!=B.buffer&&ye(),Z}function qe(){return C.buffer!=B.buffer&&ye(),te}function Ne(){return C.buffer!=B.buffer&&ye(),de}if(d){let s=function(u){try{var c=u.data,h=c.yd;if(h==="load"){let f=[];self.onmessage=x=>f.push(x),self.startWorker=()=>{postMessage({yd:"loaded"});for(let x of f)s(x);self.onmessage=s};for(let x of c.Od)i[x]&&!i[x].proxy||(i[x]=(...I)=>{postMessage({yd:"callHandler",Nd:x,args:I})},x=="print"&&(T=i[x]),x=="printErr"&&(k=i[x]));C=c.he,ye(),vt(c.ie)}else if(h==="run"){Bf(c.xd),gi(c.xd,0,0,1,0,0),fn(),di(c.xd),Ce||(us(),Ce=!0);try{Nf(c.de,c.Fd)}catch(f){if(f!="unwind")throw f}}else c.target!=="setimmediate"&&(h==="checkMailbox"?Ce&&gr():h&&(k(`worker: received unknown command ${h}`),k(c)))}catch(f){throw ls(),f}};var vt,Ce=!1;k=function(...u){u=u.join(" "),console.error(u)},self.alert=function(...u){postMessage({yd:"alert",text:u.join(" "),fe:Sr()})},self.onunhandledrejection=u=>{throw u.reason||u},self.onmessage=s}function ye(){var s=C.buffer;i.HEAP8=B=new Int8Array(s),i.HEAP16=G=new Int16Array(s),i.HEAPU8=W=new Uint8Array(s),i.HEAPU16=ee=new Uint16Array(s),i.HEAP32=ae=new Int32Array(s),i.HEAPU32=Z=new Uint32Array(s),i.HEAPF32=te=new Float32Array(s),i.HEAPF64=de=new Float64Array(s),i.HEAP64=J=new BigInt64Array(s),i.HEAPU64=V=new BigUint64Array(s)}function pt(){d?startWorker(i):P.Bb()}d||(C=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ye());var Ft,xt=0,jt=null;function on(){if(--xt==0&&jt){var s=jt;jt=null,s()}}function nt(s){throw k(s="Aborted("+s+")"),F=!0,s=new WebAssembly.RuntimeError(s+". Build with -sASSERTIONS for more info."),n(s),s}function un(){return{a:{Ta:Rf,Va:Of,W:Mf,la:Df,b:Uf,u:Wf,R:qf,Za:Lf,d:Vf,pb:_n,g:Pf,T:$n,Ga:vn,lb:Sn,nb:kn,Ha:Tn,Ea:Cn,wb:In,Da:En,pa:zn,mb:An,jb:On,Fa:Rn,kb:Bn,Ma:Gf,za:Hf,eb:Ff,cb:Kf,ya:Zf,V:Xf,N:Jf,db:Yf,ma:sm,fb:om,zb:um,hb:lm,qb:dm,ab:pm,Aa:cm,yb:di,Ja:hm,S:fm,Wa:mm,$:_m,G:wm,E:$m,m:oi,H:vm,B:km,X:Tm,J:Cm,v:Im,O:Em,D:zm,t:Am,A:Om,z:Rm,w:Bm,r:Nm,tb:Mm,ub:Dm,vb:Pm,rb:Kn,sb:Qn,bb:Zn,Oa:Wm,La:Lm,y:Vm,ja:Gm,Ba:Hm,Ka:qm,qa:Fm,Ia:jm,ib:Km,U:Um,fa:Qm,Sa:Zm,gb:Xm,Qa:Jm,Pa:Ym,Ab:es,Ca:ts,ob:ti,aa:rs,oa:is,xb:as,na:ns,$a:Tg,ia:Ug,sa:Gg,ga:Sg,da:Og,ua:Lg,p:vg,e:sg,c:ag,ea:zg,f:og,n:lg,k:_g,Y:pg,ka:wg,j:xg,wa:Eg,Ra:jg,ca:Dg,Ua:Fg,P:Ag,K:hg,_:Mg,Q:kg,Z:Wg,x:cg,l:ng,va:Ng,i:ig,h:dg,ra:Hg,ta:Vg,o:ug,q:fg,s:gg,I:yg,C:$g,L:bg,xa:Ig,_a:Cg,F:Pg,Ya:Rg,ba:qg,M:mg,Xa:Bg,ha:tg,a:C,Na:ei}}}var Xr={1319426:()=>typeof wasmOffsetConverter<"u",1319483:(s,u,c,h,f)=>{if(i===void 0||!i.Bd)return 1;if((s=Te(Number(s>>>0))).startsWith("./")&&(s=s.substring(2)),!(s=i.Bd.get(s)))return 2;if(u=Number(u>>>0),c=Number(c>>>0),h=Number(h>>>0),u+c>s.byteLength)return 3;try{let x=s.subarray(u,u+c);switch(f){case 0:L().set(x,h>>>0);break;case 1:i.$d(h,x);break;default:return 4}return 0}catch{return 4}},1320198:(s,u,c)=>{i.Jd(s,L().subarray(u>>>0,u+c>>>0))},1320261:()=>i.Yd(),1320302:s=>{i.Id(s)},1320338:()=>{i.Sd()},1320369:()=>{i.Td()},1320398:()=>{i.Xd()},1320423:s=>i.Rd(s),1320456:s=>i.Vd(s),1320488:(s,u,c)=>{i.Hd(Number(s),Number(u),Number(c),!0)},1320551:(s,u,c)=>{i.Hd(Number(s),Number(u),Number(c))},1320608:s=>{i.hc("Abs",s,void 0)},1320659:s=>{i.hc("Neg",s,void 0)},1320710:s=>{i.hc("Floor",s,void 0)},1320763:s=>{i.hc("Ceil",s,void 0)},1320815:s=>{i.hc("Reciprocal",s,void 0)},1320873:s=>{i.hc("Sqrt",s,void 0)},1320925:s=>{i.hc("Exp",s,void 0)},1320976:s=>{i.hc("Erf",s,void 0)},1321027:s=>{i.hc("Sigmoid",s,void 0)},1321082:(s,u,c)=>{i.hc("HardSigmoid",s,{alpha:u,beta:c})},1321161:s=>{i.hc("Log",s,void 0)},1321212:s=>{i.hc("Sin",s,void 0)},1321263:s=>{i.hc("Cos",s,void 0)},1321314:s=>{i.hc("Tan",s,void 0)},1321365:s=>{i.hc("Asin",s,void 0)},1321417:s=>{i.hc("Acos",s,void 0)},1321469:s=>{i.hc("Atan",s,void 0)},1321521:s=>{i.hc("Sinh",s,void 0)},1321573:s=>{i.hc("Cosh",s,void 0)},1321625:s=>{i.hc("Asinh",s,void 0)},1321678:s=>{i.hc("Acosh",s,void 0)},1321731:s=>{i.hc("Atanh",s,void 0)},1321784:s=>{i.hc("Tanh",s,void 0)},1321836:s=>{i.hc("Not",s,void 0)},1321887:(s,u,c)=>{i.hc("Clip",s,{min:u,max:c})},1321956:s=>{i.hc("Clip",s,void 0)},1322008:(s,u)=>{i.hc("Elu",s,{alpha:u})},1322066:s=>{i.hc("Gelu",s,void 0)},1322118:s=>{i.hc("Relu",s,void 0)},1322170:(s,u)=>{i.hc("LeakyRelu",s,{alpha:u})},1322234:(s,u)=>{i.hc("ThresholdedRelu",s,{alpha:u})},1322304:(s,u)=>{i.hc("Cast",s,{to:u})},1322362:s=>{i.hc("Add",s,void 0)},1322413:s=>{i.hc("Sub",s,void 0)},1322464:s=>{i.hc("Mul",s,void 0)},1322515:s=>{i.hc("Div",s,void 0)},1322566:s=>{i.hc("Pow",s,void 0)},1322617:s=>{i.hc("Equal",s,void 0)},1322670:s=>{i.hc("Greater",s,void 0)},1322725:s=>{i.hc("GreaterOrEqual",s,void 0)},1322787:s=>{i.hc("Less",s,void 0)},1322839:s=>{i.hc("LessOrEqual",s,void 0)},1322898:(s,u,c,h,f)=>{i.hc("ReduceMean",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323073:(s,u,c,h,f)=>{i.hc("ReduceMax",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323247:(s,u,c,h,f)=>{i.hc("ReduceMin",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323421:(s,u,c,h,f)=>{i.hc("ReduceProd",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323596:(s,u,c,h,f)=>{i.hc("ReduceSum",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323770:(s,u,c,h,f)=>{i.hc("ReduceL1",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323943:(s,u,c,h,f)=>{i.hc("ReduceL2",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1324116:(s,u,c,h,f)=>{i.hc("ReduceLogSum",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1324293:(s,u,c,h,f)=>{i.hc("ReduceSumSquare",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1324473:(s,u,c,h,f)=>{i.hc("ReduceLogSumExp",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1324653:s=>{i.hc("Where",s,void 0)},1324706:(s,u,c)=>{i.hc("Transpose",s,{perm:u?Array.from(D().subarray(Number(u)>>>0,Number(c)>>>0)):[]})},1324830:(s,u,c,h)=>{i.hc("DepthToSpace",s,{blocksize:u,mode:Te(c),format:h?"NHWC":"NCHW"})},1324963:(s,u,c,h)=>{i.hc("DepthToSpace",s,{blocksize:u,mode:Te(c),format:h?"NHWC":"NCHW"})},1325096:(s,u,c,h,f,x,I,A,R,U,H,X,se,$e,Ve)=>{i.hc("ConvTranspose",s,{format:R?"NHWC":"NCHW",autoPad:u,dilations:[c],group:h,kernelShape:[f],pads:[x,I],strides:[A],wIsConst:()=>!!M()[U>>>0],outputPadding:H?Array.from(D().subarray(Number(H)>>>0,Number(X)>>>0)):[],outputShape:se?Array.from(D().subarray(Number(se)>>>0,Number($e)>>>0)):[],activation:Te(Ve)})},1325529:(s,u,c,h,f,x,I,A,R,U,H,X,se,$e)=>{i.hc("ConvTranspose",s,{format:A?"NHWC":"NCHW",autoPad:u,dilations:Array.from(D().subarray(Number(c)>>>0,2+(Number(c)>>>0)>>>0)),group:h,kernelShape:Array.from(D().subarray(Number(f)>>>0,2+(Number(f)>>>0)>>>0)),pads:Array.from(D().subarray(Number(x)>>>0,4+(Number(x)>>>0)>>>0)),strides:Array.from(D().subarray(Number(I)>>>0,2+(Number(I)>>>0)>>>0)),wIsConst:()=>!!M()[R>>>0],outputPadding:U?Array.from(D().subarray(Number(U)>>>0,Number(H)>>>0)):[],outputShape:X?Array.from(D().subarray(Number(X)>>>0,Number(se)>>>0)):[],activation:Te($e)})},1326190:(s,u,c,h,f,x,I,A,R,U,H,X,se,$e,Ve)=>{i.hc("ConvTranspose",s,{format:R?"NHWC":"NCHW",autoPad:u,dilations:[c],group:h,kernelShape:[f],pads:[x,I],strides:[A],wIsConst:()=>!!M()[U>>>0],outputPadding:H?Array.from(D().subarray(Number(H)>>>0,Number(X)>>>0)):[],outputShape:se?Array.from(D().subarray(Number(se)>>>0,Number($e)>>>0)):[],activation:Te(Ve)})},1326623:(s,u,c,h,f,x,I,A,R,U,H,X,se,$e)=>{i.hc("ConvTranspose",s,{format:A?"NHWC":"NCHW",autoPad:u,dilations:Array.from(D().subarray(Number(c)>>>0,2+(Number(c)>>>0)>>>0)),group:h,kernelShape:Array.from(D().subarray(Number(f)>>>0,2+(Number(f)>>>0)>>>0)),pads:Array.from(D().subarray(Number(x)>>>0,4+(Number(x)>>>0)>>>0)),strides:Array.from(D().subarray(Number(I)>>>0,2+(Number(I)>>>0)>>>0)),wIsConst:()=>!!M()[R>>>0],outputPadding:U?Array.from(D().subarray(Number(U)>>>0,Number(H)>>>0)):[],outputShape:X?Array.from(D().subarray(Number(X)>>>0,Number(se)>>>0)):[],activation:Te($e)})},1327284:(s,u)=>{i.hc("GlobalAveragePool",s,{format:u?"NHWC":"NCHW"})},1327375:(s,u,c,h,f,x,I,A,R,U,H,X,se,$e)=>{i.hc("AveragePool",s,{format:$e?"NHWC":"NCHW",auto_pad:u,ceil_mode:c,count_include_pad:h,storage_order:f,dilations:x?Array.from(D().subarray(Number(x)>>>0,Number(I)>>>0)):[],kernel_shape:A?Array.from(D().subarray(Number(A)>>>0,Number(R)>>>0)):[],pads:U?Array.from(D().subarray(Number(U)>>>0,Number(H)>>>0)):[],strides:X?Array.from(D().subarray(Number(X)>>>0,Number(se)>>>0)):[]})},1327854:(s,u)=>{i.hc("GlobalAveragePool",s,{format:u?"NHWC":"NCHW"})},1327945:(s,u,c,h,f,x,I,A,R,U,H,X,se,$e)=>{i.hc("AveragePool",s,{format:$e?"NHWC":"NCHW",auto_pad:u,ceil_mode:c,count_include_pad:h,storage_order:f,dilations:x?Array.from(D().subarray(Number(x)>>>0,Number(I)>>>0)):[],kernel_shape:A?Array.from(D().subarray(Number(A)>>>0,Number(R)>>>0)):[],pads:U?Array.from(D().subarray(Number(U)>>>0,Number(H)>>>0)):[],strides:X?Array.from(D().subarray(Number(X)>>>0,Number(se)>>>0)):[]})},1328424:(s,u)=>{i.hc("GlobalMaxPool",s,{format:u?"NHWC":"NCHW"})},1328511:(s,u,c,h,f,x,I,A,R,U,H,X,se,$e)=>{i.hc("MaxPool",s,{format:$e?"NHWC":"NCHW",auto_pad:u,ceil_mode:c,count_include_pad:h,storage_order:f,dilations:x?Array.from(D().subarray(Number(x)>>>0,Number(I)>>>0)):[],kernel_shape:A?Array.from(D().subarray(Number(A)>>>0,Number(R)>>>0)):[],pads:U?Array.from(D().subarray(Number(U)>>>0,Number(H)>>>0)):[],strides:X?Array.from(D().subarray(Number(X)>>>0,Number(se)>>>0)):[]})},1328986:(s,u)=>{i.hc("GlobalMaxPool",s,{format:u?"NHWC":"NCHW"})},1329073:(s,u,c,h,f,x,I,A,R,U,H,X,se,$e)=>{i.hc("MaxPool",s,{format:$e?"NHWC":"NCHW",auto_pad:u,ceil_mode:c,count_include_pad:h,storage_order:f,dilations:x?Array.from(D().subarray(Number(x)>>>0,Number(I)>>>0)):[],kernel_shape:A?Array.from(D().subarray(Number(A)>>>0,Number(R)>>>0)):[],pads:U?Array.from(D().subarray(Number(U)>>>0,Number(H)>>>0)):[],strides:X?Array.from(D().subarray(Number(X)>>>0,Number(se)>>>0)):[]})},1329548:(s,u,c,h,f)=>{i.hc("Gemm",s,{alpha:u,beta:c,transA:h,transB:f})},1329652:s=>{i.hc("MatMul",s,void 0)},1329706:(s,u,c,h)=>{i.hc("ArgMax",s,{keepDims:!!u,selectLastIndex:!!c,axis:h})},1329814:(s,u,c,h)=>{i.hc("ArgMin",s,{keepDims:!!u,selectLastIndex:!!c,axis:h})},1329922:(s,u)=>{i.hc("Softmax",s,{axis:u})},1329985:(s,u)=>{i.hc("Concat",s,{axis:u})},1330045:(s,u,c,h,f)=>{i.hc("Split",s,{axis:u,numOutputs:c,splitSizes:h?Array.from(D().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1330201:s=>{i.hc("Expand",s,void 0)},1330255:(s,u)=>{i.hc("Gather",s,{axis:Number(u)})},1330326:(s,u)=>{i.hc("GatherElements",s,{axis:Number(u)})},1330405:(s,u)=>{i.hc("GatherND",s,{batch_dims:Number(u)})},1330484:(s,u,c,h,f,x,I,A,R,U,H)=>{i.hc("Resize",s,{antialias:u,axes:c?Array.from(D().subarray(Number(c)>>>0,Number(h)>>>0)):[],coordinateTransformMode:Te(f),cubicCoeffA:x,excludeOutside:I,extrapolationValue:A,keepAspectRatioPolicy:Te(R),mode:Te(U),nearestMode:Te(H)})},1330846:(s,u,c,h,f,x,I)=>{i.hc("Slice",s,{starts:u?Array.from(D().subarray(Number(u)>>>0,Number(c)>>>0)):[],ends:h?Array.from(D().subarray(Number(h)>>>0,Number(f)>>>0)):[],axes:x?Array.from(D().subarray(Number(x)>>>0,Number(I)>>>0)):[]})},1331110:s=>{i.hc("Tile",s,void 0)},1331162:(s,u,c)=>{i.hc("InstanceNormalization",s,{epsilon:u,format:c?"NHWC":"NCHW"})},1331276:(s,u,c)=>{i.hc("InstanceNormalization",s,{epsilon:u,format:c?"NHWC":"NCHW"})},1331390:s=>{i.hc("Range",s,void 0)},1331443:(s,u)=>{i.hc("Einsum",s,{equation:Te(u)})},1331524:(s,u,c,h,f)=>{i.hc("Pad",s,{mode:u,value:c,pads:h?Array.from(D().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1331667:(s,u,c,h,f,x)=>{i.hc("BatchNormalization",s,{epsilon:u,momentum:c,spatial:!!f,trainingMode:!!h,format:x?"NHWC":"NCHW"})},1331836:(s,u,c,h,f,x)=>{i.hc("BatchNormalization",s,{epsilon:u,momentum:c,spatial:!!f,trainingMode:!!h,format:x?"NHWC":"NCHW"})},1332005:(s,u,c)=>{i.hc("CumSum",s,{exclusive:Number(u),reverse:Number(c)})},1332102:(s,u,c)=>{i.hc("DequantizeLinear",s,{axis:u,blockSize:c})},1332192:(s,u,c,h,f)=>{i.hc("GridSample",s,{align_corners:u,mode:Te(c),padding_mode:Te(h),format:f?"NHWC":"NCHW"})},1332362:(s,u,c,h,f)=>{i.hc("GridSample",s,{align_corners:u,mode:Te(c),padding_mode:Te(h),format:f?"NHWC":"NCHW"})},1332532:(s,u)=>{i.hc("ScatterND",s,{reduction:Te(u)})},1332617:(s,u,c,h,f,x,I,A,R)=>{i.hc("Attention",s,{numHeads:u,isUnidirectional:c,maskFilterValue:h,scale:f,doRotary:x,qkvHiddenSizes:I?Array.from(D().subarray(Number(A)>>>0,Number(A)+I>>>0)):[],pastPresentShareBuffer:!!R})},1332889:s=>{i.hc("BiasAdd",s,void 0)},1332944:s=>{i.hc("BiasSplitGelu",s,void 0)},1333005:s=>{i.hc("FastGelu",s,void 0)},1333061:(s,u,c,h,f,x,I,A,R,U,H,X,se,$e,Ve,Jt)=>{i.hc("Conv",s,{format:X?"NHWC":"NCHW",auto_pad:u,dilations:c?Array.from(D().subarray(Number(c)>>>0,Number(h)>>>0)):[],group:f,kernel_shape:x?Array.from(D().subarray(Number(x)>>>0,Number(I)>>>0)):[],pads:A?Array.from(D().subarray(Number(A)>>>0,Number(R)>>>0)):[],strides:U?Array.from(D().subarray(Number(U)>>>0,Number(H)>>>0)):[],w_is_const:()=>!!M()[Number(se)>>>0],activation:Te($e),activation_params:Ve?Array.from(qe().subarray(Number(Ve)>>>0,Number(Jt)>>>0)):[]})},1333645:s=>{i.hc("Gelu",s,void 0)},1333697:(s,u,c,h,f,x,I,A,R)=>{i.hc("GroupQueryAttention",s,{numHeads:u,kvNumHeads:c,scale:h,softcap:f,doRotary:x,rotaryInterleaved:I,smoothSoftmax:A,localWindowSize:R})},1333914:(s,u,c,h)=>{i.hc("LayerNormalization",s,{axis:u,epsilon:c,simplified:!!h})},1334025:(s,u,c,h)=>{i.hc("LayerNormalization",s,{axis:u,epsilon:c,simplified:!!h})},1334136:(s,u,c,h,f,x)=>{i.hc("MatMulNBits",s,{k:u,n:c,accuracyLevel:h,bits:f,blockSize:x})},1334263:(s,u,c,h,f,x)=>{i.hc("MultiHeadAttention",s,{numHeads:u,isUnidirectional:c,maskFilterValue:h,scale:f,doRotary:x})},1334422:(s,u)=>{i.hc("QuickGelu",s,{alpha:u})},1334486:(s,u,c,h,f)=>{i.hc("RotaryEmbedding",s,{interleaved:!!u,numHeads:c,rotaryEmbeddingDim:h,scale:f})},1334625:(s,u,c)=>{i.hc("SkipLayerNormalization",s,{epsilon:u,simplified:!!c})},1334727:(s,u,c)=>{i.hc("SkipLayerNormalization",s,{epsilon:u,simplified:!!c})},1334829:(s,u,c,h)=>{i.hc("GatherBlockQuantized",s,{gatherAxis:u,quantizeAxis:c,blockSize:h})},1334950:s=>{i.Wd(s)},1334984:(s,u)=>i.Zd(Number(s),Number(u),i.Cd.be,i.Cd.errors)};function Of(s,u,c){return Ln(async()=>{await i.Ud(Number(s),Number(u),Number(c))})}function Rf(){return typeof wasmOffsetConverter<"u"}class Jr{constructor(u){mo(this,"name","ExitStatus");this.message=`Program terminated with exit(${u})`,this.status=u}}var ln=s=>{s.terminate(),s.onmessage=()=>{}},Yr=[],dn=s=>{ht.length==0&&(gn(),mn(ht[0]));var u=ht.pop();if(!u)return 6;Kt.push(u),St[s.xd]=u,u.xd=s.xd;var c={yd:"run",de:s.ce,Fd:s.Fd,xd:s.xd};return u.postMessage(c,s.Ld),0},ct=0,xe=(s,u,...c)=>{for(var h=2*c.length,f=ie(),x=_i(8*h),I=x>>>3,A=0;A<c.length;A++){var R=c[A];typeof R=="bigint"?(J[I+2*A]=1n,J[I+2*A+1]=R):(J[I+2*A]=0n,Ne()[I+2*A+1>>>0]=R)}return s=ds(s,0,h,x,u),re(f),s};function ei(s){if(d)return xe(0,1,s);if(z=s,!(0<ct)){for(var u of Kt)ln(u);for(u of ht)ln(u);ht=[],Kt=[],St={},F=!0}b(0,new Jr(s))}function pn(s){if(d)return xe(1,0,s);ti(s)}var ti=s=>{if(z=s,d)throw pn(s),"unwind";ei(s)},ht=[],Kt=[],cn=[],St={},hn=s=>{var u=s.xd;delete St[u],ht.push(s),Kt.splice(Kt.indexOf(s),1),s.xd=0,ps(u)};function fn(){cn.forEach(s=>s())}var mn=s=>new Promise(u=>{s.onmessage=f=>{var x=(f=f.data).yd;if(f.Ed&&f.Ed!=Sr()){var I=St[f.Ed];I?I.postMessage(f,f.Ld):k(`Internal error! Worker sent a message "${x}" to target pthread ${f.Ed}, but that thread no longer exists!`)}else x==="checkMailbox"?gr():x==="spawnThread"?dn(f):x==="cleanupThread"?hn(St[f.ee]):x==="loaded"?(s.loaded=!0,u(s)):x==="alert"?alert(`Thread ${f.fe}: ${f.text}`):f.target==="setimmediate"?s.postMessage(f):x==="callHandler"?i[f.Nd](...f.args):x&&k(`worker sent an unknown command ${x}`)},s.onerror=f=>{throw k(`worker sent an error! ${f.filename}:${f.lineno}: ${f.message}`),f};var c,h=[];for(c of[])i.propertyIsEnumerable(c)&&h.push(c);s.postMessage({yd:"load",Od:h,he:C,ie:E})});function gn(){var s=new Worker(import.meta.url.startsWith("file:")?new URL("/i41-restore-preview/assets/ort.webgpu.bundle.min-CEayb2S6.mjs",import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});ht.push(s)}var Bf=s=>{ye();var u=ce()[s+52>>>2>>>0];s=ce()[s+56>>>2>>>0],fs(u,u-s),re(u)},Nf=(s,u)=>{ct=0,s=wi(s,u),0<ct?z=s:yi(s)},mr=[];function Mf(s){var u=new ri(s>>>=0);if(M()[u.wd+12>>>0]==0){var c=1;M()[u.wd+12>>>0]=c}return c=0,M()[u.wd+13>>>0]=c,mr.push(u),gs(s),_s(s)}var Dt=0,Df=()=>{ne(0,0);var s=mr.pop();ms(s.Gd),Dt=0};class ri{constructor(u){this.Gd=u,this.wd=u-24}}function Pf(s){throw Dt||(Dt=s>>>0),Dt}var ii=s=>{var u=Dt;if(!u)return Xt(0),0;var c=new ri(u);ce()[c.wd+16>>>2>>>0]=u;var h=ce()[c.wd+4>>>2>>>0];if(!h)return Xt(0),u;for(var f of s){if(f===0||f===h)break;if(ys(f,h,c.wd+16))return Xt(f),u}return Xt(h),u};function Uf(){return ii([])}function Wf(s){return ii([s>>>0])}function qf(s,u){return ii([s>>>0,u>>>0])}var Lf=()=>{var s=mr.pop();s||nt("no exception to throw");var u=s.Gd;if(M()[s.wd+13>>>0]==0){mr.push(s);var c=1;M()[s.wd+13>>>0]=c,c=0,M()[s.wd+12>>>0]=c}throw Dt=u};function Vf(s,u,c){var h=new ri(s>>>=0);throw u>>>=0,c>>>=0,ce()[h.wd+16>>>2>>>0]=0,ce()[h.wd+4>>>2>>>0]=u,ce()[h.wd+8>>>2>>>0]=c,Dt=s}function yn(s,u,c,h){return d?xe(2,1,s,u,c,h):_n(s,u,c,h)}function _n(s,u,c,h){if(s>>>=0,c>>>=0,h>>>=0,m===void 0)return 6;var f=[];return d&&f.length===0?yn(s,u>>>=0,c,h):(s={ce:c,xd:s,Fd:h,Ld:f},d?(s.yd="spawnThread",postMessage(s,f),0):dn(s))}var wn=typeof TextDecoder<"u"?new TextDecoder:void 0,bn=(s,u=0,c=NaN)=>{var h=(u>>>=0)+c;for(c=u;s[c]&&!(c>=h);)++c;if(16<c-u&&s.buffer&&wn)return wn.decode(s.buffer instanceof ArrayBuffer?s.subarray(u,c):s.slice(u,c));for(h="";u<c;){var f=s[u++];if(128&f){var x=63&s[u++];if((224&f)==192)h+=String.fromCharCode((31&f)<<6|x);else{var I=63&s[u++];65536>(f=(240&f)==224?(15&f)<<12|x<<6|I:(7&f)<<18|x<<12|I<<6|63&s[u++])?h+=String.fromCharCode(f):(f-=65536,h+=String.fromCharCode(55296|f>>10,56320|1023&f))}}else h+=String.fromCharCode(f)}return h},Te=(s,u)=>(s>>>=0)?bn(L(),s,u):"";function $n(s,u,c){return d?xe(3,1,s,u,c):0}function vn(s,u){if(d)return xe(4,1,s,u)}var xn=s=>{for(var u=0,c=0;c<s.length;++c){var h=s.charCodeAt(c);127>=h?u++:2047>=h?u+=2:55296<=h&&57343>=h?(u+=4,++c):u+=3}return u},Pt=(s,u,c)=>{var h=L();if(u>>>=0,0<c){var f=u;c=u+c-1;for(var x=0;x<s.length;++x){var I=s.charCodeAt(x);if(55296<=I&&57343>=I&&(I=65536+((1023&I)<<10)|1023&s.charCodeAt(++x)),127>=I){if(u>=c)break;h[u++>>>0]=I}else{if(2047>=I){if(u+1>=c)break;h[u++>>>0]=192|I>>6}else{if(65535>=I){if(u+2>=c)break;h[u++>>>0]=224|I>>12}else{if(u+3>=c)break;h[u++>>>0]=240|I>>18,h[u++>>>0]=128|I>>12&63}h[u++>>>0]=128|I>>6&63}h[u++>>>0]=128|63&I}}h[u>>>0]=0,s=u-f}else s=0;return s};function Sn(s,u){if(d)return xe(5,1,s,u)}function kn(s,u,c){if(d)return xe(6,1,s,u,c)}function Tn(s,u,c){return d?xe(7,1,s,u,c):0}function Cn(s,u){if(d)return xe(8,1,s,u)}function In(s,u,c){if(d)return xe(9,1,s,u,c)}function En(s,u,c,h){if(d)return xe(10,1,s,u,c,h)}function zn(s,u,c,h){if(d)return xe(11,1,s,u,c,h)}function An(s,u,c,h){if(d)return xe(12,1,s,u,c,h)}function On(s){if(d)return xe(13,1,s)}function Rn(s,u){if(d)return xe(14,1,s,u)}function Bn(s,u,c){if(d)return xe(15,1,s,u,c)}var Nn,ft,Gf=()=>nt(""),et=s=>{for(var u="";L()[s>>>0];)u+=Nn[L()[s++>>>0]];return u},ai={},ni={};function st(s,u,c={}){return function(h,f,x={}){var I=f.name;if(!h)throw new ft(`type "${I}" must have a positive integer typeid pointer`);if(ni.hasOwnProperty(h)){if(x.Pd)return;throw new ft(`Cannot register type '${I}' twice`)}ni[h]=f,ai.hasOwnProperty(h)&&(f=ai[h],delete ai[h],f.forEach(A=>A()))}(s,u,c)}var Mn=(s,u,c)=>{switch(u){case 1:return c?h=>M()[h>>>0]:h=>L()[h>>>0];case 2:return c?h=>le()[h>>>1>>>0]:h=>ve()[h>>>1>>>0];case 4:return c?h=>D()[h>>>2>>>0]:h=>ce()[h>>>2>>>0];case 8:return c?h=>J[h>>>3]:h=>V[h>>>3];default:throw new TypeError(`invalid integer width (${u}): ${s}`)}};function Hf(s,u,c){c>>>=0,st(s>>>=0,{name:u=et(u>>>0),fromWireType:h=>h,toWireType:function(h,f){if(typeof f!="bigint"&&typeof f!="number")throw f=f===null?"null":(h=typeof f)=="object"||h==="array"||h==="function"?f.toString():""+f,new TypeError(`Cannot convert "${f}" to ${this.name}`);return typeof f=="number"&&(f=BigInt(f)),f},zd:mt,readValueFromPointer:Mn(u,c,u.indexOf("u")==-1),Ad:null})}var mt=8;function Ff(s,u,c,h){st(s>>>=0,{name:u=et(u>>>0),fromWireType:function(f){return!!f},toWireType:function(f,x){return x?c:h},zd:mt,readValueFromPointer:function(f){return this.fromWireType(L()[f>>>0])},Ad:null})}var si=[],ot=[];function oi(s){9<(s>>>=0)&&--ot[s+1]==0&&(ot[s]=void 0,si.push(s))}var De=s=>{if(!s)throw new ft("Cannot use deleted val. handle = "+s);return ot[s]},Le=s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let u=si.pop()||ot.length;return ot[u]=s,ot[u+1]=1,u}};function ui(s){return this.fromWireType(ce()[s>>>2>>>0])}var jf={name:"emscripten::val",fromWireType:s=>{var u=De(s);return oi(s),u},toWireType:(s,u)=>Le(u),zd:mt,readValueFromPointer:ui,Ad:null};function Kf(s){return st(s>>>0,jf)}var Qf=(s,u)=>{switch(u){case 4:return function(c){return this.fromWireType(qe()[c>>>2>>>0])};case 8:return function(c){return this.fromWireType(Ne()[c>>>3>>>0])};default:throw new TypeError(`invalid float width (${u}): ${s}`)}};function Zf(s,u,c){c>>>=0,st(s>>>=0,{name:u=et(u>>>0),fromWireType:h=>h,toWireType:(h,f)=>f,zd:mt,readValueFromPointer:Qf(u,c),Ad:null})}function Xf(s,u,c,h,f){if(s>>>=0,c>>>=0,u=et(u>>>0),f===-1&&(f=4294967295),f=A=>A,h===0){var x=32-8*c;f=A=>A<<x>>>x}var I=u.includes("unsigned")?function(A,R){return R>>>0}:function(A,R){return R};st(s,{name:u,fromWireType:f,toWireType:I,zd:mt,readValueFromPointer:Mn(u,c,h!==0),Ad:null})}function Jf(s,u,c){function h(x){var I=ce()[x>>>2>>>0];return x=ce()[x+4>>>2>>>0],new f(M().buffer,x,I)}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][u];st(s>>>=0,{name:c=et(c>>>0),fromWireType:h,zd:mt,readValueFromPointer:h},{Pd:!0})}function Yf(s,u){st(s>>>=0,{name:u=et(u>>>0),fromWireType:function(c){for(var h,f=ce()[c>>>2>>>0],x=c+4,I=x,A=0;A<=f;++A){var R=x+A;A!=f&&L()[R>>>0]!=0||(I=Te(I,R-I),h===void 0?h=I:(h+="\0",h+=I),I=R+1)}return rt(c),h},toWireType:function(c,h){h instanceof ArrayBuffer&&(h=new Uint8Array(h));var f=typeof h=="string";if(!(f||h instanceof Uint8Array||h instanceof Uint8ClampedArray||h instanceof Int8Array))throw new ft("Cannot pass non-string to std::string");var x=f?xn(h):h.length,I=kr(4+x+1),A=I+4;if(ce()[I>>>2>>>0]=x,f)Pt(h,A,x+1);else if(f)for(f=0;f<x;++f){var R=h.charCodeAt(f);if(255<R)throw rt(I),new ft("String has UTF-16 code units that do not fit in 8 bits");L()[A+f>>>0]=R}else for(f=0;f<x;++f)L()[A+f>>>0]=h[f];return c!==null&&c.push(rt,I),I},zd:mt,readValueFromPointer:ui,Ad(c){rt(c)}})}var Dn=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,em=(s,u)=>{for(var c=s>>1,h=c+u/2;!(c>=h)&&ve()[c>>>0];)++c;if(32<(c<<=1)-s&&Dn)return Dn.decode(L().slice(s,c));for(c="",h=0;!(h>=u/2);++h){var f=le()[s+2*h>>>1>>>0];if(f==0)break;c+=String.fromCharCode(f)}return c},tm=(s,u,c)=>{if(c??(c=2147483647),2>c)return 0;var h=u;c=(c-=2)<2*s.length?c/2:s.length;for(var f=0;f<c;++f){var x=s.charCodeAt(f);le()[u>>>1>>>0]=x,u+=2}return le()[u>>>1>>>0]=0,u-h},rm=s=>2*s.length,im=(s,u)=>{for(var c=0,h="";!(c>=u/4);){var f=D()[s+4*c>>>2>>>0];if(f==0)break;++c,65536<=f?(f-=65536,h+=String.fromCharCode(55296|f>>10,56320|1023&f)):h+=String.fromCharCode(f)}return h},am=(s,u,c)=>{if(u>>>=0,c??(c=2147483647),4>c)return 0;var h=u;c=h+c-4;for(var f=0;f<s.length;++f){var x=s.charCodeAt(f);if(55296<=x&&57343>=x&&(x=65536+((1023&x)<<10)|1023&s.charCodeAt(++f)),D()[u>>>2>>>0]=x,(u+=4)+4>c)break}return D()[u>>>2>>>0]=0,u-h},nm=s=>{for(var u=0,c=0;c<s.length;++c){var h=s.charCodeAt(c);55296<=h&&57343>=h&&++c,u+=4}return u};function sm(s,u,c){if(s>>>=0,u>>>=0,c=et(c>>>=0),u===2)var h=em,f=tm,x=rm,I=A=>ve()[A>>>1>>>0];else u===4&&(h=im,f=am,x=nm,I=A=>ce()[A>>>2>>>0]);st(s,{name:c,fromWireType:A=>{for(var R,U=ce()[A>>>2>>>0],H=A+4,X=0;X<=U;++X){var se=A+4+X*u;X!=U&&I(se)!=0||(H=h(H,se-H),R===void 0?R=H:(R+="\0",R+=H),H=se+u)}return rt(A),R},toWireType:(A,R)=>{if(typeof R!="string")throw new ft(`Cannot pass non-string to C++ string type ${c}`);var U=x(R),H=kr(4+U+u);return ce()[H>>>2>>>0]=U/u,f(R,H+4,U+u),A!==null&&A.push(rt,H),H},zd:mt,readValueFromPointer:ui,Ad(A){rt(A)}})}function om(s,u){st(s>>>=0,{Qd:!0,name:u=et(u>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function um(s){gi(s>>>0,!p,1,!l,131072,!1),fn()}var li=s=>{if(!F)try{if(s(),!(0<ct))try{d?yi(z):ti(z)}catch(u){u instanceof Jr||u=="unwind"||b(0,u)}}catch(u){u instanceof Jr||u=="unwind"||b(0,u)}};function di(s){s>>>=0,typeof Atomics.ge=="function"&&(Atomics.ge(D(),s>>>2,s).value.then(gr),s+=128,Atomics.store(D(),s>>>2,1))}var gr=()=>{var s=Sr();s&&(di(s),li(hs))};function lm(s,u){(s>>>=0)==u>>>0?setTimeout(gr):d?postMessage({Ed:s,yd:"checkMailbox"}):(s=St[s])&&s.postMessage({yd:"checkMailbox"})}var pi=[];function dm(s,u,c,h,f){for(u>>>=0,h/=2,pi.length=h,c=f>>>0>>>3,f=0;f<h;f++)pi[f]=J[c+2*f]?J[c+2*f+1]:Ne()[c+2*f+1>>>0];return(u?Xr[u]:rg[s])(...pi)}var pm=()=>{ct=0};function cm(s){s>>>=0,d?postMessage({yd:"cleanupThread",ee:s}):hn(St[s])}function hm(s){}var yr=(s,u)=>{var c=ni[s];if(c===void 0)throw s=os(s),c=et(s),rt(s),new ft(`${u} has unknown type ${c}`);return c},Pn=(s,u,c)=>{var h=[];return s=s.toWireType(h,c),h.length&&(ce()[u>>>2>>>0]=Le(h)),s};function fm(s,u,c){return u>>>=0,c>>>=0,s=De(s>>>0),u=yr(u,"emval::as"),Pn(u,c,s)}function mm(s,u){return u>>>=0,s=De(s>>>0),(u=yr(u,"emval::as")).toWireType(null,s)}var _r=s=>{try{s()}catch(u){nt(u)}},gt=0,tt=null,Un=0,wr=[],Wn={},qn={},gm=0,ci=null,ym=[];function Ln(s){return function(u){if(!F){if(gt===0){var c=!1,h=!1;u((f=0)=>{if(!F&&(Un=f,c=!0,h)){gt=2,_r(()=>co(tt)),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.resume(),f=!1;try{var x=function(){var R=D()[tt+8>>>2>>>0];return R=P[qn[R]],--ct,R()}()}catch(R){x=R,f=!0}var I=!1;if(!tt){var A=ci;A&&(ci=null,(f?A.reject:A.resolve)(x),I=!0)}if(f&&!I)throw x}}),h=!0,c||(gt=1,tt=function(){var f=kr(65548),x=f+12;ce()[f>>>2>>>0]=x,ce()[f+4>>>2>>>0]=x+65536,x=wr[0];var I=Wn[x];return I===void 0&&(I=gm++,Wn[x]=I,qn[I]=x),x=I,D()[f+8>>>2>>>0]=x,f}(),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.pause(),_r(()=>lo(tt)))}else gt===2?(gt=0,_r(ho),rt(tt),tt=null,ym.forEach(li)):nt(`invalid state: ${gt}`);return Un}}(u=>{s().then(u)})}function _m(s){return s>>>=0,Ln(async()=>{var u=await De(s);return Le(u)})}var br=[];function wm(s,u,c,h){return c>>>=0,h>>>=0,(s=br[s>>>0])(null,u=De(u>>>0),c,h)}var bm={},$r=s=>{var u=bm[s];return u===void 0?et(s):u};function $m(s,u,c,h,f){return c>>>=0,h>>>=0,f>>>=0,(s=br[s>>>0])(u=De(u>>>0),u[c=$r(c)],h,f)}var Vn=()=>typeof globalThis=="object"?globalThis:Function("return this")();function vm(s){return(s>>>=0)==0?Le(Vn()):(s=$r(s),Le(Vn()[s]))}var xm=s=>{var u=br.length;return br.push(s),u},Sm=(s,u)=>{for(var c=Array(s),h=0;h<s;++h)c[h]=yr(ce()[u+4*h>>>2>>>0],"parameter "+h);return c},Gn=(s,u)=>Object.defineProperty(u,"name",{value:s});function km(s,u,c){var h=(u=Sm(s,u>>>0)).shift();s--;var f=`return function (obj, func, destructorsRef, args) {
`,x=0,I=[];c===0&&I.push("obj");for(var A=["retType"],R=[h],U=0;U<s;++U)I.push("arg"+U),A.push("argType"+U),R.push(u[U]),f+=`  var arg${U} = argType${U}.readValueFromPointer(args${x?"+"+x:""});
`,x+=u[U].zd;return f+=`  var rv = ${c===1?"new func":"func.call"}(${I.join(", ")});
`,h.Qd||(A.push("emval_returnValue"),R.push(Pn),f+=`  return emval_returnValue(retType, destructorsRef, rv);
`),A.push(f+`};
`),s=function(H){var X=Function;if(!(X instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof X} which is not a function`);var se=Gn(X.name||"unknownFunctionName",function(){});return se.prototype=X.prototype,se=new se,(H=X.apply(se,H))instanceof Object?H:se}(A)(...R),c=`methodCaller<(${u.map(H=>H.name).join(", ")}) => ${h.name}>`,xm(Gn(c,s))}function Tm(s){return s=$r(s>>>0),Le(i[s])}function Cm(s,u){return u>>>=0,s=De(s>>>0),u=De(u),Le(s[u])}function Im(s){9<(s>>>=0)&&(ot[s+1]+=1)}function Em(){return Le([])}function zm(s){s=De(s>>>0);for(var u=Array(s.length),c=0;c<s.length;c++)u[c]=s[c];return Le(u)}function Am(s){return Le($r(s>>>0))}function Om(){return Le({})}function Rm(s){for(var u=De(s>>>=0);u.length;){var c=u.pop();u.pop()(c)}oi(s)}function Bm(s,u,c){u>>>=0,c>>>=0,s=De(s>>>0),u=De(u),c=De(c),s[u]=c}function Nm(s,u){return u>>>=0,s=(s=yr(s>>>0,"_emval_take_value")).readValueFromPointer(u),Le(s)}function Mm(s,u){s=-9007199254740992>s||9007199254740992<s?NaN:Number(s),u>>>=0,s=new Date(1e3*s),D()[u>>>2>>>0]=s.getUTCSeconds(),D()[u+4>>>2>>>0]=s.getUTCMinutes(),D()[u+8>>>2>>>0]=s.getUTCHours(),D()[u+12>>>2>>>0]=s.getUTCDate(),D()[u+16>>>2>>>0]=s.getUTCMonth(),D()[u+20>>>2>>>0]=s.getUTCFullYear()-1900,D()[u+24>>>2>>>0]=s.getUTCDay(),s=(s.getTime()-Date.UTC(s.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,D()[u+28>>>2>>>0]=s}var Hn=s=>s%4==0&&(s%100!=0||s%400==0),Fn=[0,31,60,91,121,152,182,213,244,274,305,335],jn=[0,31,59,90,120,151,181,212,243,273,304,334];function Dm(s,u){s=-9007199254740992>s||9007199254740992<s?NaN:Number(s),u>>>=0,s=new Date(1e3*s),D()[u>>>2>>>0]=s.getSeconds(),D()[u+4>>>2>>>0]=s.getMinutes(),D()[u+8>>>2>>>0]=s.getHours(),D()[u+12>>>2>>>0]=s.getDate(),D()[u+16>>>2>>>0]=s.getMonth(),D()[u+20>>>2>>>0]=s.getFullYear()-1900,D()[u+24>>>2>>>0]=s.getDay();var c=(Hn(s.getFullYear())?Fn:jn)[s.getMonth()]+s.getDate()-1|0;D()[u+28>>>2>>>0]=c,D()[u+36>>>2>>>0]=-60*s.getTimezoneOffset(),c=new Date(s.getFullYear(),6,1).getTimezoneOffset();var h=new Date(s.getFullYear(),0,1).getTimezoneOffset();s=0|(c!=h&&s.getTimezoneOffset()==Math.min(h,c)),D()[u+32>>>2>>>0]=s}function Pm(s){s>>>=0;var u=new Date(D()[s+20>>>2>>>0]+1900,D()[s+16>>>2>>>0],D()[s+12>>>2>>>0],D()[s+8>>>2>>>0],D()[s+4>>>2>>>0],D()[s>>>2>>>0],0),c=D()[s+32>>>2>>>0],h=u.getTimezoneOffset(),f=new Date(u.getFullYear(),6,1).getTimezoneOffset(),x=new Date(u.getFullYear(),0,1).getTimezoneOffset(),I=Math.min(x,f);return 0>c?D()[s+32>>>2>>>0]=+(f!=x&&I==h):0<c!=(I==h)&&(f=Math.max(x,f),u.setTime(u.getTime()+6e4*((0<c?I:f)-h))),D()[s+24>>>2>>>0]=u.getDay(),c=(Hn(u.getFullYear())?Fn:jn)[u.getMonth()]+u.getDate()-1|0,D()[s+28>>>2>>>0]=c,D()[s>>>2>>>0]=u.getSeconds(),D()[s+4>>>2>>>0]=u.getMinutes(),D()[s+8>>>2>>>0]=u.getHours(),D()[s+12>>>2>>>0]=u.getDate(),D()[s+16>>>2>>>0]=u.getMonth(),D()[s+20>>>2>>>0]=u.getYear(),s=u.getTime(),BigInt(isNaN(s)?-1:s/1e3)}function Kn(s,u,c,h,f,x,I){return d?xe(16,1,s,u,c,h,f,x,I):-52}function Qn(s,u,c,h,f,x){if(d)return xe(17,1,s,u,c,h,f,x)}var Qt={},Um=()=>performance.timeOrigin+performance.now();function Zn(s,u){if(d)return xe(18,1,s,u);if(Qt[s]&&(clearTimeout(Qt[s].id),delete Qt[s]),!u)return 0;var c=setTimeout(()=>{delete Qt[s],li(()=>cs(s,performance.timeOrigin+performance.now()))},u);return Qt[s]={id:c,ke:u},0}function Wm(s,u,c,h){s>>>=0,u>>>=0,c>>>=0,h>>>=0;var f=new Date().getFullYear(),x=new Date(f,0,1).getTimezoneOffset();f=new Date(f,6,1).getTimezoneOffset();var I=Math.max(x,f);ce()[s>>>2>>>0]=60*I,D()[u>>>2>>>0]=+(x!=f),s=(u=A=>{var R=Math.abs(A);return`UTC${0<=A?"-":"+"}${String(Math.floor(R/60)).padStart(2,"0")}${String(R%60).padStart(2,"0")}`})(x),u=u(f),f<x?(Pt(s,c,17),Pt(u,h,17)):(Pt(s,h,17),Pt(u,c,17))}var qm=()=>Date.now();function Lm(s,u,c){return 0<=s&&3>=s?(s===0?s=Date.now():s=performance.timeOrigin+performance.now(),J[c>>>0>>>3]=BigInt(Math.round(1e6*s)),0):28}var hi=[],Xn=(s,u)=>{hi.length=0;for(var c;c=L()[s++>>>0];){var h=c!=105;u+=(h&=c!=112)&&u%8?4:0,hi.push(c==112?ce()[u>>>2>>>0]:c==106?J[u>>>3]:c==105?D()[u>>>2>>>0]:Ne()[u>>>3>>>0]),u+=h?8:4}return hi};function Vm(s,u,c){return s>>>=0,u=Xn(u>>>0,c>>>0),Xr[s](...u)}function Gm(s,u,c){return s>>>=0,u=Xn(u>>>0,c>>>0),Xr[s](...u)}var Hm=()=>{};function Fm(s,u){return k(Te(s>>>0,u>>>0))}var jm=()=>{throw ct+=1,"unwind"};function Km(){return 4294901760}var Qm=()=>navigator.hardwareConcurrency;function Zm(){return nt("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Xm(s){s>>>=0;var u=L().length;if(s<=u||4294901760<s)return!1;for(var c=1;4>=c;c*=2){var h=u*(1+.2/c);h=Math.min(h,s+100663296);e:{h=(Math.min(4294901760,65536*Math.ceil(Math.max(s,h)/65536))-C.buffer.byteLength+65535)/65536|0;try{C.grow(h),ye();var f=1;break e}catch{}f=void 0}if(f)return!0}return!1}var vr=()=>(nt("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Zt={},Jn=s=>{s.forEach(u=>{vr()})};function Jm(){var s=Error().stack.toString().split(`
`);return s[0]=="Error"&&s.shift(),Jn(s),Zt.Kd=vr(),Zt.ae=s,Zt.Kd}function Ym(s,u,c){if(s>>>=0,u>>>=0,Zt.Kd==s)var h=Zt.ae;else(h=Error().stack.toString().split(`
`))[0]=="Error"&&h.shift(),Jn(h);for(var f=3;h[f]&&vr()!=s;)++f;for(s=0;s<c&&h[s+f];++s)D()[u+4*s>>>2>>>0]=vr();return s}var fi,mi={},Yn=()=>{if(!fi){var s,u={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(s in mi)mi[s]===void 0?delete u[s]:u[s]=mi[s];var c=[];for(s in u)c.push(`${s}=${u[s]}`);fi=c}return fi};function es(s,u){if(d)return xe(19,1,s,u);s>>>=0,u>>>=0;var c=0;return Yn().forEach((h,f)=>{var x=u+c;for(f=ce()[s+4*f>>>2>>>0]=x,x=0;x<h.length;++x)M()[f++>>>0]=h.charCodeAt(x);M()[f>>>0]=0,c+=h.length+1}),0}function ts(s,u){if(d)return xe(20,1,s,u);s>>>=0,u>>>=0;var c=Yn();ce()[s>>>2>>>0]=c.length;var h=0;return c.forEach(f=>h+=f.length+1),ce()[u>>>2>>>0]=h,0}function rs(s){return d?xe(21,1,s):52}function is(s,u,c,h){return d?xe(22,1,s,u,c,h):52}function as(s,u,c,h){return d?xe(23,1,s,u,c,h):70}var eg=[null,[],[]];function ns(s,u,c,h){if(d)return xe(24,1,s,u,c,h);u>>>=0,c>>>=0,h>>>=0;for(var f=0,x=0;x<c;x++){var I=ce()[u>>>2>>>0],A=ce()[u+4>>>2>>>0];u+=8;for(var R=0;R<A;R++){var U=L()[I+R>>>0],H=eg[s];U===0||U===10?((s===1?T:k)(bn(H)),H.length=0):H.push(U)}f+=A}return ce()[h>>>2>>>0]=f,0}function tg(s){return s>>>0}d||function(){for(var s=i.numThreads-1;s--;)gn();Yr.unshift(()=>{xt++,function(u){d?u():Promise.all(ht.map(mn)).then(u)}(()=>on())})}();for(var ss=Array(256),xr=0;256>xr;++xr)ss[xr]=String.fromCharCode(xr);Nn=ss,ft=i.BindingError=class extends Error{constructor(s){super(s),this.name="BindingError"}},i.InternalError=class extends Error{constructor(s){super(s),this.name="InternalError"}},ot.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>ot.length/2-5-si.length;var P,rg=[ei,pn,yn,$n,vn,Sn,kn,Tn,Cn,In,En,zn,An,On,Rn,Bn,Kn,Qn,Zn,es,ts,rs,is,as,ns];(async function(){function s(h,f){return P=h.exports,P=function(){var x=P,I={};for(let[A,R]of Object.entries(x))I[A]=typeof R=="function"?(...U)=>{wr.push(A);try{return R(...U)}finally{F||(wr.pop(),tt&&gt===1&&wr.length===0&&(gt=0,ct+=1,_r(po),typeof Fibers<"u"&&Fibers.le()))}}:R;return I}(),P=function(){var x=P,I=R=>U=>R(U)>>>0,A=R=>()=>R()>>>0;return(x=Object.assign({},x)).Cb=I(x.Cb),x.fc=A(x.fc),x.ic=I(x.ic),x.vc=I(x.vc),x.wc=A(x.wc),x.Ac=I(x.Ac),x}(),cn.push(P.jc),E=f,on(),P}xt++;var u=un();if(i.instantiateWasm)return new Promise(h=>{i.instantiateWasm(u,(f,x)=>{s(f,x),h(f.exports)})});if(d)return new Promise(h=>{vt=f=>{var x=new WebAssembly.Instance(f,un());h(s(x,f))}});Ft??(Ft=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",S):S+"ort-wasm-simd-threaded.jsep.wasm":new URL("/i41-restore-preview/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm",import.meta.url).href);try{var c=await async function(h){var f=Ft;if(!me&&typeof WebAssembly.instantiateStreaming=="function"&&!ge(f))try{var x=fetch(f,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(x,h)}catch(I){k(`wasm streaming compile failed: ${I}`),k("falling back to ArrayBuffer instantiation")}return async function(I,A){try{var R=await async function(U){if(!me)try{var H=await y(U);return new Uint8Array(H)}catch{}if(U==Ft&&me)U=new Uint8Array(me);else{if(!_)throw"both async and sync fetching of the wasm failed";U=_(U)}return U}(I);return await WebAssembly.instantiate(R,A)}catch(U){k(`failed to asynchronously prepare wasm: ${U}`),nt(U)}}(f,h)}(u);return s(c.instance,c.module)}catch(h){return n(h),Promise.reject(h)}})();var os=s=>(os=P.Cb)(s),us=()=>(us=P.Db)();i._OrtInit=(s,u)=>(i._OrtInit=P.Eb)(s,u),i._OrtGetLastError=(s,u)=>(i._OrtGetLastError=P.Fb)(s,u),i._OrtCreateSessionOptions=(s,u,c,h,f,x,I,A,R,U)=>(i._OrtCreateSessionOptions=P.Gb)(s,u,c,h,f,x,I,A,R,U),i._OrtAppendExecutionProvider=(s,u)=>(i._OrtAppendExecutionProvider=P.Hb)(s,u),i._OrtAddFreeDimensionOverride=(s,u,c)=>(i._OrtAddFreeDimensionOverride=P.Ib)(s,u,c),i._OrtAddSessionConfigEntry=(s,u,c)=>(i._OrtAddSessionConfigEntry=P.Jb)(s,u,c),i._OrtReleaseSessionOptions=s=>(i._OrtReleaseSessionOptions=P.Kb)(s),i._OrtCreateSession=(s,u,c)=>(i._OrtCreateSession=P.Lb)(s,u,c),i._OrtReleaseSession=s=>(i._OrtReleaseSession=P.Mb)(s),i._OrtGetInputOutputCount=(s,u,c)=>(i._OrtGetInputOutputCount=P.Nb)(s,u,c),i._OrtGetInputName=(s,u)=>(i._OrtGetInputName=P.Ob)(s,u),i._OrtGetOutputName=(s,u)=>(i._OrtGetOutputName=P.Pb)(s,u),i._OrtFree=s=>(i._OrtFree=P.Qb)(s),i._OrtCreateTensor=(s,u,c,h,f,x)=>(i._OrtCreateTensor=P.Rb)(s,u,c,h,f,x),i._OrtGetTensorData=(s,u,c,h,f)=>(i._OrtGetTensorData=P.Sb)(s,u,c,h,f),i._OrtReleaseTensor=s=>(i._OrtReleaseTensor=P.Tb)(s),i._OrtCreateRunOptions=(s,u,c,h)=>(i._OrtCreateRunOptions=P.Ub)(s,u,c,h),i._OrtAddRunConfigEntry=(s,u,c)=>(i._OrtAddRunConfigEntry=P.Vb)(s,u,c),i._OrtReleaseRunOptions=s=>(i._OrtReleaseRunOptions=P.Wb)(s),i._OrtCreateBinding=s=>(i._OrtCreateBinding=P.Xb)(s),i._OrtBindInput=(s,u,c)=>(i._OrtBindInput=P.Yb)(s,u,c),i._OrtBindOutput=(s,u,c,h)=>(i._OrtBindOutput=P.Zb)(s,u,c,h),i._OrtClearBoundOutputs=s=>(i._OrtClearBoundOutputs=P._b)(s),i._OrtReleaseBinding=s=>(i._OrtReleaseBinding=P.$b)(s),i._OrtRunWithBinding=(s,u,c,h,f)=>(i._OrtRunWithBinding=P.ac)(s,u,c,h,f),i._OrtRun=(s,u,c,h,f,x,I,A)=>(i._OrtRun=P.bc)(s,u,c,h,f,x,I,A),i._OrtEndProfiling=s=>(i._OrtEndProfiling=P.cc)(s),i._JsepOutput=(s,u,c)=>(i._JsepOutput=P.dc)(s,u,c),i._JsepGetNodeName=s=>(i._JsepGetNodeName=P.ec)(s);var Sr=()=>(Sr=P.fc)(),rt=i._free=s=>(rt=i._free=P.gc)(s),kr=i._malloc=s=>(kr=i._malloc=P.ic)(s),gi=(s,u,c,h,f,x)=>(gi=P.kc)(s,u,c,h,f,x),ls=()=>(ls=P.lc)(),ds=(s,u,c,h,f)=>(ds=P.mc)(s,u,c,h,f),ps=s=>(ps=P.nc)(s),yi=s=>(yi=P.oc)(s),cs=(s,u)=>(cs=P.pc)(s,u),hs=()=>(hs=P.qc)(),ne=(s,u)=>(ne=P.rc)(s,u),Xt=s=>(Xt=P.sc)(s),fs=(s,u)=>(fs=P.tc)(s,u),re=s=>(re=P.uc)(s),_i=s=>(_i=P.vc)(s),ie=()=>(ie=P.wc)(),ms=s=>(ms=P.xc)(s),gs=s=>(gs=P.yc)(s),ys=(s,u,c)=>(ys=P.zc)(s,u,c),_s=s=>(_s=P.Ac)(s),ws=i.dynCall_iii=(s,u,c)=>(ws=i.dynCall_iii=P.Bc)(s,u,c),bs=i.dynCall_vi=(s,u)=>(bs=i.dynCall_vi=P.Cc)(s,u),wi=i.dynCall_ii=(s,u)=>(wi=i.dynCall_ii=P.Dc)(s,u),$s=i.dynCall_vii=(s,u,c)=>($s=i.dynCall_vii=P.Ec)(s,u,c),vs=i.dynCall_iiii=(s,u,c,h)=>(vs=i.dynCall_iiii=P.Fc)(s,u,c,h),xs=i.dynCall_viii=(s,u,c,h)=>(xs=i.dynCall_viii=P.Gc)(s,u,c,h),Ss=i.dynCall_iiiii=(s,u,c,h,f)=>(Ss=i.dynCall_iiiii=P.Hc)(s,u,c,h,f),ks=i.dynCall_viiii=(s,u,c,h,f)=>(ks=i.dynCall_viiii=P.Ic)(s,u,c,h,f),Ts=i.dynCall_viiiiii=(s,u,c,h,f,x,I)=>(Ts=i.dynCall_viiiiii=P.Jc)(s,u,c,h,f,x,I),Cs=i.dynCall_viiiiiii=(s,u,c,h,f,x,I,A)=>(Cs=i.dynCall_viiiiiii=P.Kc)(s,u,c,h,f,x,I,A),Is=i.dynCall_ji=(s,u)=>(Is=i.dynCall_ji=P.Lc)(s,u),Es=i.dynCall_v=s=>(Es=i.dynCall_v=P.Mc)(s),zs=i.dynCall_viiiii=(s,u,c,h,f,x)=>(zs=i.dynCall_viiiii=P.Nc)(s,u,c,h,f,x),As=i.dynCall_i=s=>(As=i.dynCall_i=P.Oc)(s),Os=i.dynCall_fii=(s,u,c)=>(Os=i.dynCall_fii=P.Pc)(s,u,c),Rs=i.dynCall_viiiiiiii=(s,u,c,h,f,x,I,A,R)=>(Rs=i.dynCall_viiiiiiii=P.Qc)(s,u,c,h,f,x,I,A,R),Bs=i.dynCall_viiiiiiiiii=(s,u,c,h,f,x,I,A,R,U,H)=>(Bs=i.dynCall_viiiiiiiiii=P.Rc)(s,u,c,h,f,x,I,A,R,U,H),Ns=i.dynCall_jiii=(s,u,c,h)=>(Ns=i.dynCall_jiii=P.Sc)(s,u,c,h),Ms=i.dynCall_dii=(s,u,c)=>(Ms=i.dynCall_dii=P.Tc)(s,u,c),Ds=i.dynCall_viiiiiiiii=(s,u,c,h,f,x,I,A,R,U)=>(Ds=i.dynCall_viiiiiiiii=P.Uc)(s,u,c,h,f,x,I,A,R,U),Ps=i.dynCall_viiiiiiiiiii=(s,u,c,h,f,x,I,A,R,U,H,X)=>(Ps=i.dynCall_viiiiiiiiiii=P.Vc)(s,u,c,h,f,x,I,A,R,U,H,X),Us=i.dynCall_iiiiii=(s,u,c,h,f,x)=>(Us=i.dynCall_iiiiii=P.Wc)(s,u,c,h,f,x),Ws=i.dynCall_iij=(s,u,c)=>(Ws=i.dynCall_iij=P.Xc)(s,u,c),qs=i.dynCall_iiiiiiiiii=(s,u,c,h,f,x,I,A,R,U)=>(qs=i.dynCall_iiiiiiiiii=P.Yc)(s,u,c,h,f,x,I,A,R,U),Ls=i.dynCall_iiiiiiiiiii=(s,u,c,h,f,x,I,A,R,U,H)=>(Ls=i.dynCall_iiiiiiiiiii=P.Zc)(s,u,c,h,f,x,I,A,R,U,H),Vs=i.dynCall_vij=(s,u,c)=>(Vs=i.dynCall_vij=P._c)(s,u,c),Gs=i.dynCall_iiif=(s,u,c,h)=>(Gs=i.dynCall_iiif=P.$c)(s,u,c,h),Hs=i.dynCall_iiij=(s,u,c,h)=>(Hs=i.dynCall_iiij=P.ad)(s,u,c,h),Fs=i.dynCall_fiii=(s,u,c,h)=>(Fs=i.dynCall_fiii=P.bd)(s,u,c,h),js=i.dynCall_viiiiiiiiiiiii=(s,u,c,h,f,x,I,A,R,U,H,X,se,$e)=>(js=i.dynCall_viiiiiiiiiiiii=P.cd)(s,u,c,h,f,x,I,A,R,U,H,X,se,$e),Ks=i.dynCall_vjiii=(s,u,c,h,f)=>(Ks=i.dynCall_vjiii=P.dd)(s,u,c,h,f),Qs=i.dynCall_vif=(s,u,c)=>(Qs=i.dynCall_vif=P.ed)(s,u,c),Zs=i.dynCall_iiiiiii=(s,u,c,h,f,x,I)=>(Zs=i.dynCall_iiiiiii=P.fd)(s,u,c,h,f,x,I),Xs=i.dynCall_iiiij=(s,u,c,h,f)=>(Xs=i.dynCall_iiiij=P.gd)(s,u,c,h,f),Js=i.dynCall_iiiiiiii=(s,u,c,h,f,x,I,A)=>(Js=i.dynCall_iiiiiiii=P.hd)(s,u,c,h,f,x,I,A),Ys=i.dynCall_viiiiiiiiiiii=(s,u,c,h,f,x,I,A,R,U,H,X,se)=>(Ys=i.dynCall_viiiiiiiiiiii=P.id)(s,u,c,h,f,x,I,A,R,U,H,X,se),eo=i.dynCall_diii=(s,u,c,h)=>(eo=i.dynCall_diii=P.jd)(s,u,c,h),to=i.dynCall_jiiii=(s,u,c,h,f)=>(to=i.dynCall_jiiii=P.kd)(s,u,c,h,f),ro=i.dynCall_viiij=(s,u,c,h,f)=>(ro=i.dynCall_viiij=P.ld)(s,u,c,h,f),io=i.dynCall_fiiii=(s,u,c,h,f)=>(io=i.dynCall_fiiii=P.md)(s,u,c,h,f),ao=i.dynCall_viiif=(s,u,c,h,f)=>(ao=i.dynCall_viiif=P.nd)(s,u,c,h,f),no=i.dynCall_diiii=(s,u,c,h,f)=>(no=i.dynCall_diiii=P.od)(s,u,c,h,f),so=i.dynCall_viiid=(s,u,c,h,f)=>(so=i.dynCall_viiid=P.pd)(s,u,c,h,f),oo=i.dynCall_iiiijii=(s,u,c,h,f,x,I)=>(oo=i.dynCall_iiiijii=P.qd)(s,u,c,h,f,x,I),uo=i.dynCall_iiiiiij=(s,u,c,h,f,x,I)=>(uo=i.dynCall_iiiiiij=P.rd)(s,u,c,h,f,x,I),lo=s=>(lo=P.sd)(s),po=()=>(po=P.td)(),co=s=>(co=P.ud)(s),ho=()=>(ho=P.vd)();function ig(s,u,c){var h=ie();try{$s(s,u,c)}catch(f){if(re(h),f!==f+0)throw f;ne(1,0)}}function ag(s,u,c){var h=ie();try{return ws(s,u,c)}catch(f){if(re(h),f!==f+0)throw f;ne(1,0)}}function ng(s,u){var c=ie();try{bs(s,u)}catch(h){if(re(c),h!==h+0)throw h;ne(1,0)}}function sg(s,u){var c=ie();try{return wi(s,u)}catch(h){if(re(c),h!==h+0)throw h;ne(1,0)}}function og(s,u,c,h){var f=ie();try{return vs(s,u,c,h)}catch(x){if(re(f),x!==x+0)throw x;ne(1,0)}}function ug(s,u,c,h,f){var x=ie();try{ks(s,u,c,h,f)}catch(I){if(re(x),I!==I+0)throw I;ne(1,0)}}function lg(s,u,c,h,f){var x=ie();try{return Ss(s,u,c,h,f)}catch(I){if(re(x),I!==I+0)throw I;ne(1,0)}}function dg(s,u,c,h){var f=ie();try{xs(s,u,c,h)}catch(x){if(re(f),x!==x+0)throw x;ne(1,0)}}function pg(s,u,c,h,f,x,I){var A=ie();try{return Zs(s,u,c,h,f,x,I)}catch(R){if(re(A),R!==R+0)throw R;ne(1,0)}}function cg(s){var u=ie();try{Es(s)}catch(c){if(re(u),c!==c+0)throw c;ne(1,0)}}function hg(s,u,c){var h=ie();try{return Ws(s,u,c)}catch(f){if(re(h),f!==f+0)throw f;ne(1,0)}}function fg(s,u,c,h,f,x){var I=ie();try{zs(s,u,c,h,f,x)}catch(A){if(re(I),A!==A+0)throw A;ne(1,0)}}function mg(s,u,c){var h=ie();try{Vs(s,u,c)}catch(f){if(re(h),f!==f+0)throw f;ne(1,0)}}function gg(s,u,c,h,f,x,I){var A=ie();try{Ts(s,u,c,h,f,x,I)}catch(R){if(re(A),R!==R+0)throw R;ne(1,0)}}function yg(s,u,c,h,f,x,I,A){var R=ie();try{Cs(s,u,c,h,f,x,I,A)}catch(U){if(re(R),U!==U+0)throw U;ne(1,0)}}function _g(s,u,c,h,f,x){var I=ie();try{return Us(s,u,c,h,f,x)}catch(A){if(re(I),A!==A+0)throw A;ne(1,0)}}function wg(s,u,c,h,f,x,I,A){var R=ie();try{return Js(s,u,c,h,f,x,I,A)}catch(U){if(re(R),U!==U+0)throw U;ne(1,0)}}function bg(s,u,c,h,f,x,I,A,R,U){var H=ie();try{Ds(s,u,c,h,f,x,I,A,R,U)}catch(X){if(re(H),X!==X+0)throw X;ne(1,0)}}function $g(s,u,c,h,f,x,I,A,R){var U=ie();try{Rs(s,u,c,h,f,x,I,A,R)}catch(H){if(re(U),H!==H+0)throw H;ne(1,0)}}function vg(s){var u=ie();try{return As(s)}catch(c){if(re(u),c!==c+0)throw c;ne(1,0)}}function xg(s,u,c,h,f,x,I,A,R,U){var H=ie();try{return qs(s,u,c,h,f,x,I,A,R,U)}catch(X){if(re(H),X!==X+0)throw X;ne(1,0)}}function Sg(s,u,c){var h=ie();try{return Os(s,u,c)}catch(f){if(re(h),f!==f+0)throw f;ne(1,0)}}function kg(s,u,c,h){var f=ie();try{return Ns(s,u,c,h)}catch(x){if(re(f),x!==x+0)throw x;return ne(1,0),0n}}function Tg(s,u,c){var h=ie();try{return Ms(s,u,c)}catch(f){if(re(h),f!==f+0)throw f;ne(1,0)}}function Cg(s,u,c,h,f,x,I,A,R,U,H,X){var se=ie();try{Ps(s,u,c,h,f,x,I,A,R,U,H,X)}catch($e){if(re(se),$e!==$e+0)throw $e;ne(1,0)}}function Ig(s,u,c,h,f,x,I,A,R,U,H){var X=ie();try{Bs(s,u,c,h,f,x,I,A,R,U,H)}catch(se){if(re(X),se!==se+0)throw se;ne(1,0)}}function Eg(s,u,c,h,f,x,I,A,R,U,H){var X=ie();try{return Ls(s,u,c,h,f,x,I,A,R,U,H)}catch(se){if(re(X),se!==se+0)throw se;ne(1,0)}}function zg(s,u,c,h){var f=ie();try{return Gs(s,u,c,h)}catch(x){if(re(f),x!==x+0)throw x;ne(1,0)}}function Ag(s,u,c,h){var f=ie();try{return Hs(s,u,c,h)}catch(x){if(re(f),x!==x+0)throw x;ne(1,0)}}function Og(s,u,c,h){var f=ie();try{return Fs(s,u,c,h)}catch(x){if(re(f),x!==x+0)throw x;ne(1,0)}}function Rg(s,u,c,h,f,x,I,A,R,U,H,X,se,$e){var Ve=ie();try{js(s,u,c,h,f,x,I,A,R,U,H,X,se,$e)}catch(Jt){if(re(Ve),Jt!==Jt+0)throw Jt;ne(1,0)}}function Bg(s,u,c,h,f){var x=ie();try{Ks(s,u,c,h,f)}catch(I){if(re(x),I!==I+0)throw I;ne(1,0)}}function Ng(s,u,c){var h=ie();try{Qs(s,u,c)}catch(f){if(re(h),f!==f+0)throw f;ne(1,0)}}function Mg(s,u){var c=ie();try{return Is(s,u)}catch(h){if(re(c),h!==h+0)throw h;return ne(1,0),0n}}function Dg(s,u,c,h,f){var x=ie();try{return Xs(s,u,c,h,f)}catch(I){if(re(x),I!==I+0)throw I;ne(1,0)}}function Pg(s,u,c,h,f,x,I,A,R,U,H,X,se){var $e=ie();try{Ys(s,u,c,h,f,x,I,A,R,U,H,X,se)}catch(Ve){if(re($e),Ve!==Ve+0)throw Ve;ne(1,0)}}function Ug(s,u,c,h){var f=ie();try{return eo(s,u,c,h)}catch(x){if(re(f),x!==x+0)throw x;ne(1,0)}}function Wg(s,u,c,h,f){var x=ie();try{return to(s,u,c,h,f)}catch(I){if(re(x),I!==I+0)throw I;return ne(1,0),0n}}function qg(s,u,c,h,f){var x=ie();try{ro(s,u,c,h,f)}catch(I){if(re(x),I!==I+0)throw I;ne(1,0)}}function Lg(s,u,c,h,f){var x=ie();try{return io(s,u,c,h,f)}catch(I){if(re(x),I!==I+0)throw I;ne(1,0)}}function Vg(s,u,c,h,f){var x=ie();try{ao(s,u,c,h,f)}catch(I){if(re(x),I!==I+0)throw I;ne(1,0)}}function Gg(s,u,c,h,f){var x=ie();try{return no(s,u,c,h,f)}catch(I){if(re(x),I!==I+0)throw I;ne(1,0)}}function Hg(s,u,c,h,f){var x=ie();try{so(s,u,c,h,f)}catch(I){if(re(x),I!==I+0)throw I;ne(1,0)}}function Fg(s,u,c,h,f,x,I){var A=ie();try{return oo(s,u,c,h,f,x,I)}catch(R){if(re(A),R!==R+0)throw R;ne(1,0)}}function jg(s,u,c,h,f,x,I){var A=ie();try{return uo(s,u,c,h,f,x,I)}catch(R){if(re(A),R!==R+0)throw R;ne(1,0)}}return i.stackSave=()=>ie(),i.stackRestore=s=>re(s),i.stackAlloc=s=>_i(s),i.setValue=function(s,u,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":M()[s>>>0]=u;break;case"i16":le()[s>>>1>>>0]=u;break;case"i32":D()[s>>>2>>>0]=u;break;case"i64":J[s>>>3]=BigInt(u);break;case"float":qe()[s>>>2>>>0]=u;break;case"double":Ne()[s>>>3>>>0]=u;break;case"*":ce()[s>>>2>>>0]=u;break;default:nt(`invalid type for setValue: ${c}`)}},i.getValue=function(s,u="i8"){switch(u.endsWith("*")&&(u="*"),u){case"i1":case"i8":return M()[s>>>0];case"i16":return le()[s>>>1>>>0];case"i32":return D()[s>>>2>>>0];case"i64":return J[s>>>3];case"float":return qe()[s>>>2>>>0];case"double":return Ne()[s>>>3>>>0];case"*":return ce()[s>>>2>>>0];default:nt(`invalid type for getValue: ${u}`)}},i.UTF8ToString=Te,i.stringToUTF8=Pt,i.lengthBytesUTF8=xn,function s(){if(0<xt)jt=s;else if(d)a(i),pt();else{for(;0<Yr.length;)Yr.shift()(i);0<xt?jt=s:(i.calledRun=!0,F||(pt(),a(i)))}}(),i.PTR_SIZE=4,o}),mp=Ti,yo=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),yo&&Ti()}),Ci,_o,Pe,gp,Cr,wo,bo,Ii,$o,Ei,yp,zi,_p,Ba=q(()=>{Ra(),Ci=typeof location>"u"?void 0:location.origin,_o=()=>{var e;return(e=import.meta.url)!=null&&e.startsWith("file:")?new URL(new URL("/i41-restore-preview/assets/ort.webgpu.bundle.min-CEayb2S6.mjs",import.meta.url).href,Ci).href:import.meta.url},Pe=_o(),gp=()=>{if(Pe&&!Pe.startsWith("blob:"))return Pe.substring(0,Pe.lastIndexOf("/")+1)},Cr=(e,t)=>{try{let r=t??Pe;return(r?new URL(e,r):new URL(e)).origin===Ci}catch{return!1}},wo=(e,t)=>{let r=t??Pe;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},bo=(e,t)=>`${t??"./"}${e}`,Ii=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},$o=async e=>(await import(e)).default,Ei=(my(),Lr(cp)).default,yp=async()=>{if(!Pe)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Cr(Pe))return[void 0,Ei()];let e=await Ii(Pe);return[e,Ei(e)]},zi=(gy(),Lr(fp)).default,_p=async(e,t,r)=>{if(!e&&!t&&zi&&Pe&&Cr(Pe))return[void 0,zi];{let a="ort-wasm-simd-threaded.jsep.mjs",n=e??wo(a,t),i=r&&n&&!Cr(n,t),o=i?await Ii(n):n??bo(a,t);return[i?o:void 0,await $o(o)]}}}),Ai,Ir,er,Oi,vo,xo,Na,Ie,Nt=q(()=>{Ba(),Ir=!1,er=!1,Oi=!1,vo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},xo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Na=async e=>{if(Ir)return Promise.resolve();if(er)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Oi)throw new Error("previous call to 'initializeWebAssembly()' failed.");er=!0;let t=e.initTimeout,r=e.numThreads;if(!xo())throw new Error("WebAssembly SIMD is not supported in the current environment.");let a=vo();r>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,i=typeof n=="string"?n:void 0,o=n==null?void 0:n.mjs,l=(o==null?void 0:o.href)??o,p=n==null?void 0:n.wasm,d=(p==null?void 0:p.href)??p,m=e.wasmBinary,[g,y]=await _p(l,i,r>1),_=!1,w=[];if(t>0&&w.push(new Promise(b=>{setTimeout(()=>{_=!0,b()},t)})),w.push(new Promise((b,S)=>{let v={numThreads:r};if(m)v.wasmBinary=m;else if(d||i)v.locateFile=$=>d??i+$;else if(l&&l.indexOf("blob:")!==0)v.locateFile=$=>new URL($,l).href;else if(g){let $=gp();$&&(v.locateFile=T=>$+T)}y(v).then($=>{er=!1,Ir=!0,Ai=$,b(),g&&URL.revokeObjectURL(g)},$=>{er=!1,Oi=!0,S($)})})),await Promise.race(w),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ie=()=>{if(Ir&&Ai)return Ai;throw new Error("WebAssembly is not initialized yet.")}}),Oe,Gr,fe,Ma=q(()=>{Nt(),Oe=(e,t)=>{let r=Ie(),a=r.lengthBytesUTF8(e)+1,n=r._malloc(a);return r.stringToUTF8(e,n,a),t.push(n),n},Gr=(e,t,r,a)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,i])=>{let o=t?t+n:n;if(typeof i=="object")Gr(i,o+".",r,a);else if(typeof i=="string"||typeof i=="number")a(o,i.toString());else if(typeof i=="boolean")a(o,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},fe=e=>{let t=Ie(),r=t.stackSave();try{let a=t.PTR_SIZE,n=t.stackAlloc(2*a);t._OrtGetLastError(n,n+a);let i=Number(t.getValue(n,a===4?"i32":"i64")),o=t.getValue(n+a,"*"),l=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${l}`)}finally{t.stackRestore(r)}}}),wp,yy=q(()=>{Nt(),Ma(),wp=e=>{let t=Ie(),r=0,a=[],n=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(n.terminate=!1);let i=0;return(e==null?void 0:e.tag)!==void 0&&(i=Oe(e.tag,a)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,i),r===0&&fe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Gr(e.extra,"",new WeakSet,(o,l)=>{let p=Oe(o,a),d=Oe(l,a);t._OrtAddRunConfigEntry(r,p,d)!==0&&fe(`Can't set a run config entry: ${o} - ${l}.`)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseRunOptions(r),a.forEach(o=>t._free(o)),i}}}),So,ko,To,Co,bp,_y=q(()=>{Nt(),Ma(),So=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},ko=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},To=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Co=(e,t,r)=>{for(let a of t){let n=typeof a=="string"?a:a.name;switch(n){case"webnn":if(n="WEBNN",typeof a!="string"){let o=a==null?void 0:a.deviceType;if(o){let l=Oe("deviceType",r),p=Oe(o,r);Ie()._OrtAddSessionConfigEntry(e,l,p)!==0&&fe(`Can't set a session config entry: 'deviceType' - ${o}.`)}}break;case"webgpu":if(n="JS",typeof a!="string"){let o=a;if(o!=null&&o.preferredLayout){if(o.preferredLayout!=="NCHW"&&o.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${o.preferredLayout}`);let l=Oe("preferredLayout",r),p=Oe(o.preferredLayout,r);Ie()._OrtAddSessionConfigEntry(e,l,p)!==0&&fe(`Can't set a session config entry: 'preferredLayout' - ${o.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let i=Oe(n,r);Ie()._OrtAppendExecutionProvider(e,i)!==0&&fe(`Can't append execution provider: ${n}.`)}},bp=e=>{let t=Ie(),r=0,a=[],n=e||{};To(n);try{let i=So(n.graphOptimizationLevel??"all"),o=ko(n.executionMode??"sequential"),l=typeof n.logId=="string"?Oe(n.logId,a):0,p=n.logSeverityLevel??2;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log serverity level is not valid: ${p}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let m=typeof n.optimizedModelFilePath=="string"?Oe(n.optimizedModelFilePath,a):0;if(r=t._OrtCreateSessionOptions(i,!!n.enableCpuMemArena,!!n.enableMemPattern,o,!!n.enableProfiling,0,l,p,d,m),r===0&&fe("Can't create session options."),n.executionProviders&&Co(r,n.executionProviders,a),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);let g=Oe("enableGraphCapture",a),y=Oe(n.enableGraphCapture.toString(),a);t._OrtAddSessionConfigEntry(r,g,y)!==0&&fe(`Can't set a session config entry: 'enableGraphCapture' - ${n.enableGraphCapture}.`)}if(n.freeDimensionOverrides)for(let[g,y]of Object.entries(n.freeDimensionOverrides)){if(typeof g!="string")throw new Error(`free dimension override name must be a string: ${g}`);if(typeof y!="number"||!Number.isInteger(y)||y<0)throw new Error(`free dimension override value must be a non-negative integer: ${y}`);let _=Oe(g,a);t._OrtAddFreeDimensionOverride(r,_,y)!==0&&fe(`Can't set a free dimension override: ${g} - ${y}.`)}return n.extra!==void 0&&Gr(n.extra,"",new WeakSet,(g,y)=>{let _=Oe(g,a),w=Oe(y,a);t._OrtAddSessionConfigEntry(r,_,w)!==0&&fe(`Can't set a session config entry: ${g} - ${y}.`)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&fe("Can't release session options."),a.forEach(o=>t._free(o)),i}}}),Wt,zt,At,Da,Hr,Pa,Ua,ma,Y=q(()=>{Wt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},zt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},At=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((n,i)=>n*i,1);return r>0?Math.ceil(a*r):void 0},Da=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Hr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Pa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ua=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ma=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Wa,$p=q(()=>{Ra(),Wa=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(a)}catch(l){if(l instanceof RangeError){let p=Math.ceil(a/65536);i=new WebAssembly.Memory({initial:p,maximum:p}).buffer}else throw l}let o=0;for(;;){let{done:l,value:p}=await n.read();if(l)break;let d=p.byteLength;new Uint8Array(i,o,d).set(p),o+=d}return new Uint8Array(i,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Io,Eo,zo,Ao,qa,Oo,pe,dt=q(()=>{Y(),Io=["V","I","W","E","F"],Eo=(e,t)=>{console.log(`[${Io[e]},${new Date().toISOString()}]${t}`)},qa=(e,t)=>{zo=e,Ao=t},Oo=(e,t)=>{let r=Hr(e),a=Hr(zo);r>=a&&Eo(r,typeof t=="function"?t():t)},pe=(...e)=>{Ao&&Oo(...e)}}),La,vp=q(()=>{Y(),La=(e,t)=>new(Da(t))(e)}),Va=q(()=>{}),Ri,Er,zr,Ro,Bo,Bi,ga,No,xp,wy=q(()=>{dt(),Va(),Ri=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Er=[],zr=e=>Math.ceil(Number(e)/16)*16,Ro=e=>{for(let t=0;t<Er.length;t++){let r=Er[t];if(e<=r)return r}return Math.ceil(e/16)*16},Bo=1,Bi=()=>Bo++,ga=async(e,t,r,a)=>{let n=zr(r),i=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,i,0,n),e.flush(),await i.mapAsync(GPUMapMode.READ);let l=i.getMappedRange();if(a){let p=a();return p.set(new Uint8Array(l,0,r)),p}else return new Uint8Array(l.slice(0,r))}finally{i.destroy()}},No=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ri)Er.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,a=t.byteOffset,n=t.byteLength,i=zr(n),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${n}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:i,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),p=l.getMappedRange();new Uint8Array(p).set(new Uint8Array(r,a,n)),l.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(l,0,o.gpuData.buffer,0,i),this.backend.device.queue.submit([d.finish()]),l.destroy(),pe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=zr(r.originalSize),i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let a;if(r){if(a=r[0],e===r[1])return pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=Bi();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),pe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Ro(e),a,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,i=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||i){let l=(n?this.freeBuffers:this.freeUniformBuffers).get(r);l?l.length>0?a=l.pop():a=this.backend.device.createBuffer({size:r,usage:t}):a=this.backend.device.createBuffer({size:r,usage:t})}else a=this.backend.device.createBuffer({size:r,usage:t});let o={id:Bi(),type:0,buffer:a};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),pe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return pe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await ga(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ri.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(pe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},xp=(...e)=>new No(...e)}),Mo,we,ke=q(()=>{Mo=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},we=e=>new Mo(e)}),Do,Gt,O,Fr,Sp,kp,Tp,oe=q(()=>{Do=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Gt=class{static calcShape(e,t,r=!1){let a=e.length,n=t.length;if(a===0)return t;if(n===0)return e;let i=Math.max(e.length,t.length),o=new Array(i);if(r){if(a<2||n<2)return;let l=Do.calcMatMulShape([e[a-2],e[a-1]],[t[n-2],t[n-1]]);if(l===void 0)return;[o[i-2],o[i-1]]=l}for(let l=r?3:1;l<=i;l++){let p=a-l<0?1:e[a-l],d=n-l<0?1:t[n-l];if(p!==d&&p>1&&d>1)return;let m=Math.max(p,d);if(p&&d)o[i-l]=Math.max(p,d);else{if(m>1)return;o[i-l]=0}}return o}static isValidBroadcast(e,t){let r=e.length,a=t.length;if(r>a)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[a-n])return!1;return!0}},O=class Wr{static size(t){return Wr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let a=t.length;if(a===0)return[];let n=new Array(a),i=a-1;for(;i>=0;){if(t[i]%r===0){n[i]=t[i]/r;break}if(r%t[i]!==0)throw new Error("cannot convert shape");n[i]=1,r/=t[i],i--}for(i--;i>=0;i--)n[i]=t[i];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Wr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Wr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,a){let n=1;for(let i=r;i<a;i++){if(t[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[i])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let a=new Array(r);a[r-1]=1,a[r-2]=t[r-1];for(let n=r-3;n>=0;--n)a[n]=a[n+1]*t[n+1];return a}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(a=>this.normalizeAxis(a,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(a=>t[a]):t.slice().reverse()}static padShape(t,r){let a=t.length;return t.map((n,i)=>n+r[i]+r[i+a])}static areEqual(t,r){return t.length!==r.length?!1:t.every((a,n)=>a===r[n])}},Fr=class lr{static adjustPoolAttributes(t,r,a,n,i,o){if(!t&&a.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<r.length-2;l++)l>=a.length?a.push(r[l+2]):a[l]=r[l+2];for(let l=0;l<a.length;l++)if(l<n.length){if(n[l]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let l=0;l<a.length;l++)if(l<i.length){if(i[l]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let l=0;l<a.length*2;l++)if(l<o.length){if(o[l]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let l=0;l<a.length;l++){if(a[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[l]>=a[l]||o[l+a.length]>=a[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,a,n,i,o,l){if(l){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let p=0;p<t.length-2;p++)lr.adjustPadAndReturnShape(t[p+(o?1:2)],r[p],a[p],n[p],i,p,p+t.length-2,l)}}static computePoolOutputShape(t,r,a,n,i,o,l){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let p=[r[0],r[1]];return lr.computeShapeHelper(t,r,p,a,n,i,o,l),p}static computeConvOutputShape(t,r,a,n,i,o,l){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let p=[t[0],r[0]];return lr.computeShapeHelper(!1,t,p,a,n,i,o,l),p}static computeShapeHelper(t,r,a,n,i,o,l,p){if(t)for(let d=0;d<r.length-2;d++)a.push(1);else for(let d=0;d<r.length-2;d++)a.push(lr.adjustPadAndReturnShape(r[d+2],n[d],i[d],o[d],l,d,d+r.length-2,p))}static adjustPadAndReturnShape(t,r,a,n,i,o,l,p){let d=a*(n-1)+1;if(p&&p!=="NOTSET")switch(p){case"VALID":return i[o]=0,i[l]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let m=((t+r-1)/r-1)*r+n-t;return i[o]=Math.floor(p==="SAME_LOWER"?(m+1)/2:m/2),i[l]=m-i[o],Math.floor((t+m-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[o]+i[l]-d)/r+1)}},Sp=class{static getShapeOfGemmResult(e,t,r,a,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let i,o,l;t?(i=e[1],o=e[0]):(i=e[0],o=e[1]);let p=-1;if(a?(l=r[0],p=1):(l=r[1],p=0),r[p]!==o)throw new Error("dimension mismatch");if(i<=0||l<=0||o<=0)throw new Error("invalid shape specified");if(n&&!Gt.isValidBroadcast(n,[i,l]))throw new Error("gemm: invalid bias shape for broadcast");return[i,l,o]}},kp=-34028234663852886e22,Tp=34028234663852886e22}),Ht,Ar,Ee,Re,Q,Se,ya,Lt,bt,K,tr,N,j,Cp,Ga,Po,Ip,ue=q(()=>{Y(),oe(),Ht=64,Ar=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ee=(e,t=1)=>{let r=Ar(e,t);return typeof r=="string"?r:r[0]},Re=(e,t=1)=>{let r=Ar(e,t);return typeof r=="string"?r:r[1]},Q=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:O.computeStrides(r)})}),t},Se=e=>e%4===0?4:e%2===0?2:1,ya=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Lt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,bt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,K=(e,t,r,a)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,tr=(e,t,r,a,n)=>{let i=typeof r=="number",o=i?r:r.length,l=[...new Array(o).keys()],p=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,d=Ar(t,n),m=typeof d=="string"?d:d[1],g=typeof d=="string"?d:d[0],y={indices:p,value:m,storage:g,tensor:t},_=M=>typeof M=="string"?M:`${M}u`,w={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=i?"uniforms.":"",S=`${b}${e}_shape`,v=`${b}${e}_strides`,$="";for(let M=0;M<o-1;M++)$+=`
    let dim${M} = current / ${K(v,M,o)};
    let rest${M} = current % ${K(v,M,o)};
    indices[${M}] = dim${M};
    current = rest${M};
    `;$+=`indices[${o-1}] = current;`;let T=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${y.indices} {
    var indices: ${y.indices};
    var current = offset;
    ${$}
    return indices;
  }`,k=M=>(w.offsetToIndices=!0,o<2?M:`o2i_${e}(${M})`),C=[];if(o>=2)for(let M=o-1;M>=0;M--)C.push(`${K(v,M,o)} * (indices[${M}])`);let E=o<2?"":`
  fn i2o_${e}(indices: ${y.indices}) -> u32 {
    return ${C.join("+")};
  }`,z=M=>(w.indicesToOffset=!0,o<2?M:`i2o_${e}(${M})`),B=(...M)=>o===0?"0u":`${y.indices}(${M.map(_).join(",")})`,W=(M,L)=>o<2?`${M}`:`${K(M,L,o)}`,G=(M,L,le)=>o<2?`${M}=${le};`:`${K(M,L,o)}=${le};`,ee={},ae=(M,L)=>{w.broadcastedIndicesToOffset=!0;let le=`${L.name}broadcastedIndicesTo${e}Offset`;if(le in ee)return`${le}(${M})`;let ve=[];for(let D=o-1;D>=0;D--){let ce=L.indicesGet("outputIndices",D+L.rank-o);ve.push(`${W(v,D)} * (${ce} % ${W(S,D)})`)}return ee[le]=`fn ${le}(outputIndices: ${L.type.indices}) -> u32 {
             return ${ve.length>0?ve.join("+"):"0u"};
           }`,`${le}(${M})`},Z=(M,L)=>(()=>{if(y.storage===y.value)return`${e}[${M}]=${L};`;if(y.storage==="vec2<u32>"&&y.value==="i32")return`${e}[${M}]=vec2<u32>(u32(${L}), select(0u, 0xFFFFFFFFu, ${L} < 0));`;if(y.storage==="vec2<u32>"&&y.value==="u32")return`${e}[${M}]=vec2<u32>(u32(${L}), 0u);`;if(y.storage==="u32"&&y.value==="vec4<bool>")return`${e}[${M}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${L}));`;throw new Error(`not supported combination of storage type ${y.storage} and value type ${y.value} yet`)})(),te=M=>(()=>{if(y.storage===y.value)return`${e}[${M}]`;if(y.storage==="vec2<u32>"&&y.value==="i32")return`i32(${e}[${M}].x)`;if(y.storage==="vec2<u32>"&&y.value==="u32")return`u32(${e}[${M}].x)`;if(y.storage==="u32"&&y.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${M}] & 0xFFu), bool(${e}[${M}] & 0xFF00u), bool(${e}[${M}] & 0xFF0000u), bool(${e}[${M}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${y.storage} and value type ${y.value} yet`)})(),J=o<2?"":`
  fn get_${e}ByIndices(indices: ${y.indices}) -> ${m} {
    return ${te(`i2o_${e}(indices)`)};
  }`,V=o<2?"":(()=>{let M=l.map(le=>`d${le}: u32`).join(", "),L=l.map(le=>`d${le}`).join(", ");return`
  fn get_${e}(${M}) -> ${m} {
    return get_${e}ByIndices(${B(L)});
  }`})(),de=(...M)=>{if(M.length!==o)throw new Error(`indices length must be ${o}`);let L=M.map(_).join(",");return o===0?te("0u"):o===1?te(L[0]):(w.get=!0,w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}(${L})`)},me=M=>o<2?te(M):(w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}ByIndices(${M})`),F=o<2?"":`
  fn set_${e}ByIndices(indices: ${y.indices}, value: ${m}) {
    ${Z(`i2o_${e}(indices)`,"value")}
  }`,ge=o<2?"":(()=>{let M=l.map(le=>`d${le}: u32`).join(", "),L=l.map(le=>`d${le}`).join(", ");return`
  fn set_${e}(${M}, value: ${m}) {
    set_${e}ByIndices(${B(L)}, value);
  }`})();return{impl:()=>{let M=[],L=!1;return w.offsetToIndices&&(M.push(T),L=!0),w.indicesToOffset&&(M.push(E),L=!0),w.broadcastedIndicesToOffset&&(Object.values(ee).forEach(le=>M.push(le)),L=!0),w.set&&(M.push(ge),L=!0),w.setByIndices&&(M.push(F),L=!0),w.get&&(M.push(V),L=!0),w.getByIndices&&(M.push(J),L=!0),!i&&L&&M.unshift(`const ${S} = ${y.indices}(${r.join(",")});`,`const ${v} = ${y.indices}(${O.computeStrides(r).join(",")});`),M.join(`
`)},type:y,offsetToIndices:k,indicesToOffset:z,broadcastedIndicesToOffset:ae,indices:B,indicesGet:W,indicesSet:G,set:(...M)=>{if(M.length!==o+1)throw new Error(`indices length must be ${o}`);let L=M[o];if(typeof L!="string")throw new Error("value must be string");let le=M.slice(0,o).map(_).join(",");return o===0?Z("0u",L):o===1?Z(le[0],L):(w.set=!0,w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}(${le}, ${L})`)},setByOffset:Z,setByIndices:(M,L)=>o<2?Z(M,L):(w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}ByIndices(${M}, ${L});`),get:de,getByOffset:te,getByIndices:me,usage:a,name:e,strides:v,shape:S,rank:o}},N=(e,t,r,a=1)=>tr(e,t,r,"input",a),j=(e,t,r,a=1)=>tr(e,t,r,"output",a),Cp=(e,t,r)=>tr(e,t,r,"atomicOutput",1),Ga=(e,t,r,a=1)=>tr(e,t,r,"internal",a),Po=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Ht){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,i=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,o=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${a})
  fn main(${i}) {
    ${o}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let n=a==null||a===1?r:`vec${a}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ip=(e,t)=>new Po(e,t)}),Uo,Ni,Wo,qo,Lo,Vo,We,Ep,zp,$t=q(()=>{Y(),oe(),ke(),ue(),Uo=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ni=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Wo=(e,t)=>O.sortBasedOnPerm(e,Ni(e.length,t)),qo=(e,t,r,a)=>{let n=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<t;++i)n+=`a[${e[i]}]=i[${i}];`;return n+="return a;}"},Lo=(e,t)=>{let r=[],a=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&a.push(t[n]);return{newShape:r,newPerm:a}},Vo=(e,t)=>{let r=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<r)return!1;r=e[a]}return!0},We=(e,t)=>{let r=e.dataType,a=e.dims.length,n=Ni(a,t),i=Wo(e.dims,n),o=e.dims,l=i,p=a<2||Vo(n,e.dims),d;if(p)return d=w=>{let b=N("input",r,o,4),S=j("output",r,l,4);return`
  ${w.registerUniform("output_size","u32").declareVariables(b,S)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=O.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64/4)},programUniforms:[{type:12,data:Math.ceil(w/4)}]}},getShaderSource:d};let{newShape:m,newPerm:g}=Lo(e.dims,n),y=O.areEqual(g,[2,3,1]),_=O.areEqual(g,[3,1,2]);if(m.length===2||y||_){o=y?[m[0],m[1]*m[2]]:_?[m[0]*m[1],m[2]]:m,l=[o[1],o[0]];let w=16;return d=b=>{let S=N("a",r,o.length),v=j("output",r,l.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(S,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${w+1}>, ${w}>;
  ${b.mainStart([w,w,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${w} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${w}u + local_id.x;
    let input_row = workgroup_id_x * ${w}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${w}u + local_id.x;
    let output_row = workgroup_id_y * ${w}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=O.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(l[1]/w),y:Math.ceil(l[0]/w)},programUniforms:[{type:12,data:b},...Q(o,l)]}},getShaderSource:d}}return d=w=>{let b=N("a",r,o.length),S=j("output",r,l.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(b,S)}

  ${qo(n,a,b,S)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let w=O.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...Q(o,l)]}},getShaderSource:d}},Ep=(e,t)=>{Uo(e.inputs,t.perm),e.compute(We(e.inputs[0],t.perm))},zp=e=>we({perm:e.perm})}),Go,Ho,Fo,jo,Ko,Qo,Zo,Xo,Jo,Yo,Fe,Ap,Op,Rp,Bp,Np,Mp,Dp,Pp,Up,Wp,by=q(()=>{Y(),oe(),ue(),Ha(),$t(),Go={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Ho={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Fo={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},jo={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Ko=(e,t)=>{let r=[];for(let a=t-e;a<t;++a)r.push(a);return r},Qo=(e,t)=>{let r=[],a=e.length;for(let i=0;i<a;i++)t.indexOf(i)===-1&&r.push(e[i]);let n=t.map(i=>e[i]);return[r,n]},Zo=(e,t)=>{let r=e.length+t.length,a=[],n=0;for(let i=0;i<r;i++)t.indexOf(i)===-1?a.push(e[n++]):a.push(1);return a},Xo=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Jo=(e,t)=>{let r=[];if(!Xo(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&r.push(a);e.forEach(a=>r.push(a))}return r},Yo=(e,t,r,a,n,i,o)=>{let l=r[0].dims,p=O.size(i),d=O.size(o),m=N("_A",r[0].dataType,l),g=j("output",n,i),y=64;p===1&&(y=256);let _=`
          var<workgroup> aBestValues : array<f32, ${y}>;
       `,w=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(m,g)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(y)}

          let outputIndex = global_idx / ${y};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Fo[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${y}) {
           let candidate = f32(${m.getByOffset("offset + k")});
           bestValue = ${Go[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${y}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Ho[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${g.setByOffset("outputIndex",`${a==="mean"?`${g.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${g.type.storage}(${jo[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${y}`,inputDependencies:["type"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:i,dataType:n}],dispatchGroup:{x:p},programUniforms:[{type:12,data:d}]})}},Fe=(e,t,r,a)=>{let n=e.inputs.length===1?r:_a(e.inputs,r),i=n.axes;i.length===0&&!n.noopWithEmptyAxes&&(i=e.inputs[0].dims.map((_,w)=>w));let o=O.normalizeAxes(i,e.inputs[0].dims.length),l=o,p=e.inputs[0],d=Jo(l,e.inputs[0].dims.length);d.length>0&&(p=e.compute(We(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],l=Ko(l.length,p.dims.length));let[m,g]=Qo(p.dims,l),y=m;n.keepDims&&(y=Zo(m,o)),e.compute(Yo(t,n.cacheKey,[p],a,e.inputs[0].dataType,y,g),{inputs:[p]})},Ap=(e,t)=>{Fe(e,"ReduceMeanShared",t,"mean")},Op=(e,t)=>{Fe(e,"ReduceL1Shared",t,"l1")},Rp=(e,t)=>{Fe(e,"ReduceL2Shared",t,"l2")},Bp=(e,t)=>{Fe(e,"ReduceLogSumExpShared",t,"logSumExp")},Np=(e,t)=>{Fe(e,"ReduceMaxShared",t,"max")},Mp=(e,t)=>{Fe(e,"ReduceMinShared",t,"min")},Dp=(e,t)=>{Fe(e,"ReduceProdShared",t,"prod")},Pp=(e,t)=>{Fe(e,"ReduceSumShared",t,"sum")},Up=(e,t)=>{Fe(e,"ReduceSumSquareShared",t,"sumSquare")},Wp=(e,t)=>{Fe(e,"ReduceLogSumShared",t,"logSum")}}),je,eu,jr,_a,Ke,tu,ru,iu,au,nu,su,ou,uu,lu,du,Qe,qp,Lp,Vp,Gp,Hp,Fp,jp,Kp,Qp,Zp,Ha=q(()=>{Y(),oe(),ke(),ue(),by(),je=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},eu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],jr=(e,t,r,a,n,i,o=!1,l=!1)=>{let p=[],d=r[0].dims,m=d.length,g=O.normalizeAxes(n,m),y=!l&&g.length===0;d.forEach((b,S)=>{y||g.indexOf(S)>=0?o&&p.push(1):p.push(b)});let _=p.length,w=O.size(p);return{name:e,shaderCache:t,getShaderSource:b=>{let S=[],v=N("_A",r[0].dataType,m),$=j("output",i,_),T=a(v,$,g),k=T[2];for(let C=0,E=0;C<m;C++)y||g.indexOf(C)>=0?(o&&E++,k=`for(var j${C}: u32 = 0; j${C} < ${d[C]}; j${C}++) {
                  ${T[2].includes("last_index")?`let last_index = j${C};`:""}
                  ${v.indicesSet("input_indices",C,`j${C}`)}
                  ${k}
                }`):(S.push(`${v.indicesSet("input_indices",C,$.indicesGet("output_indices",E))};`),E++);return`

        ${b.registerUniform("output_size","u32").declareVariables(v,$)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${$.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${k}
          ${T[3]}
          ${T.length===4?$.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:p,dataType:i}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...Q(d,p)]})}},_a=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),we({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ke=(e,t,r,a)=>{let n=e.inputs,i=n.length===1?r:_a(n,r);e.compute(jr(t,{hint:i.cacheKey,inputDependencies:["rank"]},[n[0]],i.noopWithEmptyAxes&&i.axes.length===0?eu:a,i.axes,n[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},tu=(e,t)=>{je(e.inputs),Ke(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},ru=(e,t)=>{je(e.inputs),Ke(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},iu=(e,t)=>{je(e.inputs),Ke(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},au=(e,t)=>{je(e.inputs),Ke(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},nu=(e,t)=>{je(e.inputs),Ke(e,"ReduceMax",t,(r,a,n)=>{let i=[];for(let o=0;o<r.rank;o++)(n.indexOf(o)>=0||n.length===0)&&i.push(r.indicesSet("input_indices",o,0));return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},su=(e,t)=>{je(e.inputs),Ke(e,"ReduceMean",t,(r,a,n)=>{let i=1;for(let o=0;o<r.rank;o++)(n.indexOf(o)>=0||n.length===0)&&(i*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${i});`]})},ou=(e,t)=>{je(e.inputs),Ke(e,"ReduceMin",t,(r,a,n)=>{let i=[];for(let o=0;o<r.rank;o++)(n.indexOf(o)>=0||n.length===0)&&i.push(`input_indices[${o}] = 0;`);return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},uu=(e,t)=>{je(e.inputs),Ke(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},lu=(e,t)=>{je(e.inputs),Ke(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},du=(e,t)=>{je(e.inputs),Ke(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Qe=(e,t,r)=>{if(t.length===0)return r;let a=1,n=1;for(let i=0;i<t.length;i++)t.indexOf(i)===-1?a*=e[i]:n*=e[i];return n<32&&a>1024},qp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?su(e,t):Ap(e,t)},Lp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ru(e,t):Op(e,t)},Vp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?iu(e,t):Rp(e,t)},Gp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?au(e,t):Bp(e,t)},Hp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nu(e,t):Np(e,t)},Fp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ou(e,t):Mp(e,t)},jp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uu(e,t):Dp(e,t)},Kp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lu(e,t):Pp(e,t)},Qp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?du(e,t):Up(e,t)},Zp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?tu(e,t):Wp(e,t)}}),Mi,Xp,Jp,wa,$y=q(()=>{Y(),ke(),Ha(),Mi=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Xp=(e,t)=>{Mi(e.inputs);let r=(a,n,i)=>{let o=[];for(let l=0;l<a.rank;l++)(i.indexOf(l)>=0||i.length===0)&&o.push(`input_indices[${l}] = 0;`);return[`${o.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(jr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Jp=(e,t)=>{Mi(e.inputs);let r=(a,n,i)=>{let o=[];for(let l=0;l<a.rank;l++)(i.indexOf(l)>=0||i.length===0)&&o.push(`input_indices[${l}] = 0;`);return[`${o.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(jr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},wa=e=>we(e)}),pu,Or,cu,hu,fu,hr,mu,Yp,Fa=q(()=>{Y(),oe(),Va(),ue(),pu=(e,t)=>{let r=e[0],a=e[1],n=e[2],i=e[3],o=e[4],l=e[5];if(o&&l)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let p=r.dims[0],d=r.dims[1],m=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==m)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let g=n.dims[0]/3,y=g,_=y;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");g=t.qkvHiddenSizes[0],y=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let w=d;if(g!==y)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==g+y+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(o){if(y!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==p)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==y/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=o.dims[3])}let S=w+b,v=-1,$=0;if(i)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==p||l.dims[1]!==t.numHeads||l.dims[2]!==d||l.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:d,pastSequenceLength:b,kvSequenceLength:w,totalSequenceLength:S,maxSequenceLength:v,inputHiddenSize:m,hiddenSize:g,vHiddenSize:_,headSize:Math.floor(g/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Or=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,cu=(e,t,r,a,n,i,o,l)=>{let p=Se(o?1:i),d=64,m=i/p;m<d&&(d=32);let g=Math.ceil(i/p/d),y=[{type:12,data:t},{type:12,data:r},{type:12,data:a},{type:12,data:n},{type:12,data:m},{type:12,data:g}],_=Ee(e.dataType,p),w=Re(1,p),b=["type"];o&&b.push("type"),l&&b.push("type");let S=v=>{let $=j("x",e.dataType,e.dims,p),T=[$],k=o?N("seq_lens",o.dataType,o.dims):void 0;k&&T.push(k);let C=l?N("total_sequence_length_input",l.dataType,l.dims):void 0;C&&T.push(C);let E=Re(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(z).declareVariables(...T)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Or(k,C,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${w}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${w}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(p){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${p}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${w}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${w}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(p){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${p}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${$.type.value}(${E}(1.0) / ${E}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${w}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${$.type.value}(${E}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${_};${p}`,inputDependencies:b},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(i/d),y:n,z:t*r},programUniforms:y})}},hu=(e,t,r,a,n,i,o,l,p)=>{let d=o+i.kvSequenceLength,m=[i.batchSize,i.numHeads,i.sequenceLength,d],g=e>1&&a,y=i.kvNumHeads?i.kvNumHeads:i.numHeads,_=g?[i.batchSize,y,d,i.headSize]:void 0,w=i.nReps?i.nReps:1,b=i.scale===0?1/Math.sqrt(i.headSize):i.scale,S=Se(i.headSize),v=i.headSize/S,$=12,T={x:Math.ceil(d/$),y:Math.ceil(i.sequenceLength/$),z:i.batchSize*i.numHeads},k=[{type:12,data:i.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:1,data:b},{type:12,data:o},{type:12,data:i.kvSequenceLength},{type:12,data:w}],C=g&&a&&O.size(a.dims)>0,E=["type","type"];C&&E.push("type"),n&&E.push("type"),l&&E.push("type"),p&&E.push("type");let z=[{dims:m,dataType:t.dataType,gpuDataType:0}];g&&z.push({dims:_,dataType:t.dataType,gpuDataType:0});let B=W=>{let G=N("q",t.dataType,t.dims,S),ee=N("key",r.dataType,r.dims,S),ae=[G,ee];if(C){let F=N("past_key",a.dataType,a.dims,S);ae.push(F)}n&&ae.push(N("attention_bias",n.dataType,n.dims));let Z=l?N("seq_lens",l.dataType,l.dims):void 0;Z&&ae.push(Z);let te=p?N("total_sequence_length_input",p.dataType,p.dims):void 0;te&&ae.push(te);let J=j("output",t.dataType,m),V=[J];g&&V.push(j("present_key",t.dataType,_,S));let de=Re(1,S),me=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${G.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${G.type.storage}, ${$*$}>;
  ${W.registerUniforms(me).declareVariables(...ae,...V)}
  ${W.mainStart([$,$,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${w===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${w===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Or(Z,te,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${C&&g?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${g?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${de}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${C&&g?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${g?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${de}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${J.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${n!==void 0};${a!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:z,dispatchGroup:T,programUniforms:k}),getShaderSource:B}},fu=(e,t,r,a,n,i,o=void 0,l=void 0)=>{let p=i+n.kvSequenceLength,d=n.nReps?n.nReps:1,m=n.vHiddenSize*d,g=e>1&&a,y=n.kvNumHeads?n.kvNumHeads:n.numHeads,_=g?[n.batchSize,y,p,n.headSize]:void 0,w=[n.batchSize,n.sequenceLength,m],b=12,S={x:Math.ceil(n.vHeadSize/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},v=[{type:12,data:n.sequenceLength},{type:12,data:p},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:m},{type:12,data:i},{type:12,data:n.kvSequenceLength},{type:12,data:d}],$=g&&a&&O.size(a.dims)>0,T=["type","type"];$&&T.push("type"),o&&T.push("type"),l&&T.push("type");let k=[{dims:w,dataType:t.dataType,gpuDataType:0}];g&&k.push({dims:_,dataType:t.dataType,gpuDataType:0});let C=E=>{let z=N("probs",t.dataType,t.dims),B=N("v",r.dataType,r.dims),W=[z,B];$&&W.push(N("past_value",a.dataType,a.dims));let G=o?N("seq_lens",o.dataType,o.dims):void 0;o&&W.push(G);let ee=l?N("total_sequence_length_input",l.dataType,l.dims):void 0;l&&W.push(ee);let ae=[j("output",t.dataType,w)];g&&ae.push(j("present_value",t.dataType,_));let Z=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${z.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${z.type.value}, ${b*b}>;
  ${E.registerUniforms(Z).declareVariables(...W,...ae)}
  ${E.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Or(G,ee,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${$&&g?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${g?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${$&&g?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${g?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:k,dispatchGroup:S,programUniforms:v}),getShaderSource:C}},hr=(e,t,r,a,n,i,o,l,p,d,m=void 0,g=void 0)=>{let y=Math.min(e.outputCount,1+(o?1:0)+(l?1:0)),_=y>1?d.pastSequenceLength:0,w=_+d.kvSequenceLength,b=p&&O.size(p.dims)>0?p:void 0,S=[t,r];y>1&&o&&O.size(o.dims)>0&&S.push(o),b&&S.push(b),m&&S.push(m),g&&S.push(g);let v=e.compute(hu(y,t,r,o,b,d,_,m,g),{inputs:S,outputs:y>1?[-1,1]:[-1]})[0];e.compute(cu(v,d.batchSize,d.numHeads,_,d.sequenceLength,w,m,g),{inputs:m&&g?[v,m,g]:[v],outputs:[]});let $=[v,a];y>1&&l&&O.size(l.dims)>0&&$.push(l),m&&$.push(m),g&&$.push(g),e.compute(fu(y,v,a,l,d,_,m,g),{inputs:$,outputs:y>1?[0,2]:[0]})},mu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,n=t.inputHiddenSize,i=t.headSize,o=12,l={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},p=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:a},{type:12,data:n},{type:12,data:i},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],m=g=>{let y=j("output_q",p[0].dataType,r),_=j("output_k",p[0].dataType,r),w=j("output_v",p[0].dataType,r),b=N("input",p[0].dataType,p[0].dims),S=N("weight",p[1].dataType,p[1].dims),v=N("bias",p[2].dataType,p[2].dims),$=b.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${$}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${$}, ${o*o}>;
  var<workgroup> tileWeightK: array<${$}, ${o*o}>;
  var<workgroup> tileWeightV: array<${$}, ${o*o}>;
  ${g.registerUniforms(T).declareVariables(b,S,v,y,_,w)}
  ${g.mainStart([o,o,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${$}(0);
    var valueK = ${$}(0);
    var valueV = ${$}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:d}),getShaderSource:m},{inputs:p,outputs:[-1,-1,-1]})},Yp=(e,t)=>{let r=pu(e.inputs,t),[a,n,i]=mu(e,r);return hr(e,a,n,i,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),gu,yu,_u,ec,vy=q(()=>{Ye(),Y(),oe(),ke(),ue(),gu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(a,n,i)=>{let o=n.length;if(o!==a.length)throw new Error(`${i}: num dimensions != ${o}`);n.forEach((l,p)=>{if(l!==a[p])throw new Error(`${i}: dim[${p}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,a,"Invalid input scale"),r(e[2].dims,a,"Invalid input B"),r(e[3].dims,a,"Invalid input mean"),r(e[4].dims,a,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},yu=(e,t)=>{let{epsilon:r,spatial:a,format:n}=t,i=e[0].dims,o=a?Se(i[i.length-1]):1,l=n==="NHWC"&&i.length>1?o:1,p=O.size(i)/o,d=a,m=d?i.length:i,g=N("x",e[0].dataType,e[0].dims,o),y=N("scale",e[1].dataType,e[1].dims,l),_=N("bias",e[2].dataType,e[2].dims,l),w=N("inputMean",e[3].dataType,e[3].dims,l),b=N("inputVar",e[4].dataType,e[4].dims,l),S=j("y",e[0].dataType,m,o),v=()=>{let T="";if(a)T=`let cOffset = ${i.length===1?"0u":n==="NHWC"?`outputIndices[${i.length-1}] / ${o}`:"outputIndices[1]"};`;else if(n==="NCHW")T=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${y.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let k=1;k<y.rank;k++)T+=`cIndices[${k}] = outputIndices[${k}];`;T+=`let cOffset = ${y.indicesToOffset("cIndices")};`}return T},$=T=>`
  const epsilon = ${r};
  ${T.registerUniform("outputSize","u32").declareVariables(g,y,_,w,b,S)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${o}`)};
    ${v()}
    let scale = ${y.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${w.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${g.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${o}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:d?[{type:12,data:p},...Q(i)]:[{type:12,data:p}]})}},_u=e=>we(e),ec=(e,t)=>{let{inputs:r,outputCount:a}=e,n=_u({...t,outputCount:a});if(be.webgpu.validateInputContent&&gu(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(yu(r,n))}}),wu,bu,tc,xy=q(()=>{oe(),ue(),wu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},bu=e=>{let t=e[0].dims,r=e[0].dims[2],a=O.size(t)/4,n=e[0].dataType,i=N("input",n,t,4),o=N("bias",n,[r],4),l=N("residual",n,t,4),p=j("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(i,o,l,p)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${i.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${p.setByOffset("global_idx","value")}
  }`}},tc=e=>{wu(e.inputs),e.compute(bu(e.inputs))}}),$u,he,rc,ic,ac,nc,sc,oc,uc,lc,dc,vu,pc,cc,hc,fc,dr,mc,qr,gc,yc,_c,wc,bc,$c,vc,xc,Sc,kc,Tc,Cc,Ic,Ec,zc,Ac,Di,Oc,ba,$a,Rc,Bc,Nc,xu,Su,Mc,ja=q(()=>{Y(),oe(),ke(),ue(),$u=(e,t,r,a,n,i,o)=>{let l=Math.ceil(t/4),p="";typeof n=="string"?p=`${n}(a)`:p=n("a");let d=N("inputData",r,[l],4),m=j("outputData",a,[l],4),g=[{name:"vec_size",type:"u32"}];return o&&g.push(...o),`
      ${e.registerUniforms(g).declareVariables(d,m)}

  ${i??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${m.setByOffset("global_idx",p)}
  }`},he=(e,t,r,a,n,i=e.dataType,o,l)=>{let p=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return o&&p.push(...o),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>$u(d,O.size(e.dims),e.dataType,i,r,a,l),getRunData:d=>({outputs:[{dims:e.dims,dataType:i}],dispatchGroup:{x:Math.ceil(O.size(d[0].dims)/64/4)},programUniforms:p})}},rc=e=>{e.compute(he(e.inputs[0],"Abs","abs"))},ic=e=>{e.compute(he(e.inputs[0],"Acos","acos"))},ac=e=>{e.compute(he(e.inputs[0],"Acosh","acosh"))},nc=e=>{e.compute(he(e.inputs[0],"Asin","asin"))},sc=e=>{e.compute(he(e.inputs[0],"Asinh","asinh"))},oc=e=>{e.compute(he(e.inputs[0],"Atan","atan"))},uc=e=>{e.compute(he(e.inputs[0],"Atanh","atanh"))},lc=e=>we(e),dc=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(he(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},vu=e=>{let t,r,a=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return we({min:t,max:r})},pc=(e,t)=>{let r=t||vu(e.inputs),a=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},cc=e=>{e.compute(he(e.inputs[0],"Ceil","ceil"))},hc=e=>{e.compute(he(e.inputs[0],"Cos","cos"))},fc=e=>{e.compute(he(e.inputs[0],"Cosh","cosh"))},dr=e=>we(e),mc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},qr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,gc=e=>{let t=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,qr(t)))},yc=e=>{e.compute(he(e.inputs[0],"Exp","exp"))},_c=e=>{e.compute(he(e.inputs[0],"Floor","floor"))},wc=e=>{let t=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,qr(t)))},bc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},$c=e=>{e.compute(he(e.inputs[0],"Not",t=>`!${t}`))},vc=e=>{e.compute(he(e.inputs[0],"Neg",t=>`-${t}`))},xc=e=>{e.compute(he(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Sc=e=>{let t=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},kc=e=>{e.compute(he(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Tc=e=>we(e),Cc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"HardSigmoid",a=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${a} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Ic=e=>{e.compute(he(e.inputs[0],"Sin","sin"))},Ec=e=>{e.compute(he(e.inputs[0],"Sinh","sinh"))},zc=e=>{e.compute(he(e.inputs[0],"Sqrt","sqrt"))},Ac=e=>{e.compute(he(e.inputs[0],"Tan","tan"))},Di=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Oc=e=>{e.compute(he(e.inputs[0],"Tanh",Di))},ba=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Di("v")};
}
`,$a=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Rc=e=>{let t=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"FastGelu",$a,ba(t),void 0,e.inputs[0].dataType))},Bc=(e,t)=>{let r=Re(e.inputs[0].dataType);return e.compute(he(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${r}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Nc=e=>{e.compute(he(e.inputs[0],"Log","log"))},xu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Su=e=>`quick_gelu_impl(${e})`,Mc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(he(e.inputs[0],"QuickGelu",Su,xu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),ku,Tu,Dc,Sy=q(()=>{oe(),ue(),ja(),ku=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Tu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=N("input",e[0].dataType,e[0].dims,4),a=N("bias",e[0].dataType,[e[0].dims[2]],4),n=j("output",e[0].dataType,t,4),i=O.size(t)/4,o=Ee(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(r,a,n)}

  ${qr(o)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Dc=e=>{ku(e.inputs),e.compute(Tu(e.inputs))}}),Cu,Iu,Ze,Pc,Uc,Wc,qc,Lc,Vc,Gc,Hc,Fc,jc,ky=q(()=>{Y(),oe(),ue(),Cu=(e,t,r,a,n,i,o,l,p,d,m,g)=>{let y,_;typeof l=="string"?y=_=($,T)=>`${l}((${$}),(${T}))`:typeof l=="function"?y=_=l:(y=l.scalar,_=l.vector);let w=j("outputData",m,a.length,4),b=N("aData",p,t.length,4),S=N("bData",d,r.length,4),v;if(n)if(i){let $=O.size(t)===1,T=O.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,C=r.length>0&&r[r.length-1]%4===0;$||T?v=w.setByOffset("global_idx",_($?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),T?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):v=`
            let outputIndices = ${w.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",w)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",w)};
            ${w.setByOffset("global_idx",_(o||k?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||C?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=w.setByOffset("global_idx",_(b.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(T,k,C="")=>{let E=`aData[indexA${k}][componentA${k}]`,z=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${w.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${b.broadcastedIndicesToOffset(`outputIndices${k}`,w)};
            let offsetB${k} = ${S.broadcastedIndicesToOffset(`outputIndices${k}`,w)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${T}[${k}] = ${C}(${y(E,z)});
          `};m===9?v=`
            var data = vec4<u32>(0);
            ${$("data",0,"u32")}
            ${$("data",1,"u32")}
            ${$("data",2,"u32")}
            ${$("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${$("outputData[global_idx]",0)}
            ${$("outputData[global_idx]",1)}
            ${$("outputData[global_idx]",2)}
            ${$("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,S,w)}

        ${g??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},Iu=(e,t,r,a,n,i,o=r.dataType)=>{let l=r.dims.map(b=>Number(b)??1),p=a.dims.map(b=>Number(b)??1),d=!O.areEqual(l,p),m=l,g=O.size(l),y=!1,_=!1,w=[d];if(d){let b=Gt.calcShape(l,p,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");m=b.slice(),g=O.size(m);let S=O.size(l)===1,v=O.size(p)===1,$=l.length>0&&l[l.length-1]%4===0,T=p.length>0&&p[p.length-1]%4===0;w.push(S),w.push(v),w.push($),w.push(T);let k=1;for(let C=1;C<m.length;C++){let E=l[l.length-C],z=p[p.length-C];if(E===z)k*=E;else break}k%4===0?(_=!0,y=!0):(S||v||$||T)&&(y=!0)}else y=!0;return w.push(y),{name:e,shaderCache:{hint:t+w.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>Cu(b,l,p,m,y,d,_,n,r.dataType,a.dataType,o,i),getRunData:()=>({outputs:[{dims:m,dataType:o}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(m)/4)},...Q(l,p,m)]})}},Ze=(e,t,r,a,n,i)=>{e.compute(Iu(t,n??"",e.inputs[0],e.inputs[1],r,a,i))},Pc=e=>{Ze(e,"Add",(t,r)=>`${t}+${r}`)},Uc=e=>{Ze(e,"Div",(t,r)=>`${t}/${r}`)},Wc=e=>{Ze(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},qc=e=>{Ze(e,"Mul",(t,r)=>`${t}*${r}`)},Lc=e=>{let t=N("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ze(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Vc=e=>{Ze(e,"Sub",(t,r)=>`${t}-${r}`)},Gc=e=>{Ze(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Hc=e=>{Ze(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Fc=e=>{Ze(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},jc=e=>{Ze(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Eu,zu,Au,Ou,Kc,Qc,Ty=q(()=>{Y(),oe(),ke(),ue(),Eu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,a=e[r],n=a.dataType,i=a.dims.length;e.forEach((o,l)=>{if(l!==r){if(o.dataType!==n)throw new Error("input tensors should be one type");if(o.dims.length!==i)throw new Error("input tensors should have the same shape");o.dims.forEach((p,d)=>{if(d!==t&&p!==a.dims[d])throw new Error("non concat dimensions must match")})}})},zu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Au=(e,t)=>{let r=e.length,a=[];for(let n=0;n<r;++n){let i=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?a.push(i):n===0?a.push(`if (inputIndex == ${n}u) { ${i} }`):n===r-1?a.push(`else { ${i} }`):a.push(`else if (inputIndex == ${n}) { ${i} }`)}return a.join(`
`)},Ou=(e,t,r,a)=>{let n=O.size(r),i=new Array(e.length),o=new Array(e.length),l=0,p=[],d=[],m=[{type:12,data:n}];for(let b=0;b<e.length;++b)l+=e[b].dims[t],i[b]=l,d.push(e[b].dims.length),o[b]=N(`input${b}`,a,d[b]),p.push("rank"),m.push({type:12,data:i[b]});for(let b=0;b<e.length;++b)m.push(...Q(e[b].dims));m.push(...Q(r));let g=j("output",a,r.length),y=g.indicesGet("indices",t),_=Array.from(Array(i.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),w=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)b.registerUniform(`sizeInConcatAxis${S}`,"u32");return b.declareVariables(...o,g)})()}

  ${zu(i.length,_)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${g.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${y});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${_});
      ${y} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Au(o,g)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:m}),getShaderSource:w}},Kc=(e,t)=>{let r=e.inputs,a=r[0].dims,n=O.normalizeAxis(t.axis,a.length);Eu(r,n);let i=a.slice();i[n]=r.reduce((l,p)=>l+(p.dims.length>n?p.dims[n]:0),0);let o=r.filter(l=>O.size(l.dims)>0);e.compute(Ou(o,n,i,r[0].dataType),{inputs:o})},Qc=e=>we({axis:e.axis})}),Ot,Rt,Bt,Ka,Mt=q(()=>{Y(),oe(),Ot=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Rt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Bt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Ka=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,a]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:a}}else if(t==="Clip"){let[r,a]=(e==null?void 0:e.activation_params)||[kp,Tp];return{activation:t,clipMax:a,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),ze,Zc,Qa=q(()=>{ze=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Zc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Xc,Cy=q(()=>{Xc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),cr,Za,Xa=q(()=>{Y(),oe(),ue(),Mt(),cr=(e,t,r,a,n)=>{let i=a-r;return`
      ${Array.from({length:r}).map((o,l)=>`
      if (${K(t.shape,l,t.rank)} != 1) {
        ${t.indicesSet(e,l,K(n,l+i,a))}
      } else {
        ${t.indicesSet(e,l,0)}
      }`).join("")}
`},Za=(e,t,r,a,n=!1,i)=>{let o=e[0].dims,l=e[1].dims,p=o[o.length-2],d=l[l.length-1],m=o[o.length-1],g=Se(d),y=Se(m),_=Se(p),w=O.size(r)/g/_,b=e.length>2,S=a?a.slice(0,-2):r.slice(0,-2),v=[O.size(S),p,d],$=[{type:12,data:w},{type:12,data:p},{type:12,data:d},{type:12,data:m}];Rt(t,$),$.push(...Q(S,o,l)),b&&$.push(...Q(e[2].dims)),$.push(...Q(v));let T=k=>{let C=Ga("batch_dims",e[0].dataType,S.length),E=N("a",e[0].dataType,o.length,y),z=N("b",e[1].dataType,l.length,g),B=j("output",e[0].dataType,v.length,g),W=Ee(B.type.tensor),G=Ot(t,B.type.value,W),ee=[E,z],ae="";if(b){let J=n?g:1;ee.push(N("bias",e[2].dataType,e[2].dims.length,J)),ae=`${n?`value += bias[col / ${J}];`:`value += ${B.type.value}(bias[row + i]);`}`}let Z=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Bt(t,Z);let te=()=>{let J=`var a_data: ${E.type.value};`;for(let V=0;V<y;V++)J+=`
              let b_data${V} = b[(b_offset + (k + ${V}) * uniforms.N + col) / ${g}];`;for(let V=0;V<_;V++){J+=`a_data = a[(a_offset + (row + ${V}) * uniforms.K + k) / ${y}];`;for(let de=0;de<y;de++)J+=`
            values[${V}] = fma(${z.type.value}(a_data${y===1?"":`[${de}]`}), b_data${de}, values[${V}]);
`}return J};return`
  ${k.registerUniforms(Z).registerInternalVariables(C).declareVariables(...ee,B)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${g})) * ${g};
    var index1 = global_idx / (uniforms.N / ${g});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${C.offsetToIndices("batch")};`}

    var a_indices: ${E.type.indices};
    ${cr("a_indices",E,E.rank-2,C.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${cr("b_indices",z,z.rank-2,C.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${B.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${y}) {
      ${te()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${ae}
      ${G}
      let cur_indices = ${B.type.indices}(batch, row + i, col);
      let offset = ${B.indicesToOffset("cur_indices")};
      ${B.setByOffset(`offset / ${g}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${g};${y};${_};${n}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:$}),getShaderSource:T}}}),Ru,Bu,va,Pi,Nu,xa,Mu,Kr,Ja=q(()=>{Y(),oe(),ue(),Mt(),Xa(),Qa(),Ru=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Bu=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,va=(e,t,r="f32",a,n=!1,i=32,o=!1,l=32)=>{let p=t[1]*e[1],d=t[0]*e[0],m=n?p:i,g=n?i:p,y=m/t[0],_=i/t[1];if(!((n&&y===4&&e[1]===4||!n&&(y===3||y===4))&&m%t[0]===0&&i%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${y} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${y} must be 3 or 4.
  tileAWidth ${m} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${y}<${r}>, ${m/y}>, ${g}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${i}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${y};
const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${p};

  let num_tiles = ${o?`${Math.ceil(l/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${o?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Ru(n,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${y===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Bu(n,y)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Pi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Nu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",xa=(e,t,r="f32",a,n=!1,i=32,o=!1,l=32,p=!1)=>{let d=e[1]*t[1],m=e[0]*t[0],g=n?d:i,y=n?i:d;if(!(y%t[1]===0&&g%t[0]===0&&i%t[1]===0))throw new Error(`tileAHight ${y} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${g} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);let _=y/t[1],w=g/t[0],b=i/t[1],S=p?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${m};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${y}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${g}; inputCol = inputCol + ${t[0]}) {
          ${Pi(n,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${m}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${w};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${w}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Pi(n,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Nu(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${g}>, ${y}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${m}>, ${i}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${o?`${Math.ceil(l/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${o?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},Mu=(e,t,r,a,n=!1)=>{let[i,o,l,p]=a,d=Ee(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${ze(e,d)} {
      var value = ${ze(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${cr("aIndices",o,o.rank-2,i.rank,"batchIndices")}
        ${o.indicesSet("aIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("aIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${ze(e,d)} {
      var value = ${ze(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${l.type.indices};
        ${cr("bIndices",l,l.rank-2,i.rank,"batchIndices")}
        ${l.indicesSet("bIndices",l.rank-2,"u32(row)")}
        ${l.indicesSet("bIndices",l.rank-1,"u32(colIn)")}
        value = ${l.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ze(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${ze(e,d)}(bias[row])`};`:""}
        ${r}
        ${p.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Kr=(e,t,r,a,n=!1,i)=>{let o=e[0].dims,l=e[1].dims,p=o.slice(0,-2),d=l.slice(0,-2),m=a?a.slice(0,-2):r.slice(0,-2),g=O.size(m),y=o[o.length-2],_=o[o.length-1],w=l[l.length-1],b=_%4===0&&w%4===0,S=y<=8?[4,1,1]:[4,4,1],v=[8,8,1],$=[Math.ceil(w/v[0]/S[0]),Math.ceil(y/v[1]/S[1]),Math.ceil(g/v[2]/S[2])],T=b?4:1,k=[...p,y,_/T],C=k.length,E=[...d,_,w/T],z=E.length,B=[g,y,w/T],W=[{type:6,data:y},{type:6,data:w},{type:6,data:_}];Rt(t,W),W.push(...Q(m,k,E));let G=["rank","rank"],ee=e.length>2;ee&&(W.push(...Q(e[2].dims)),G.push("rank")),W.push(...Q(B));let ae=Z=>{let te=m.length,J=Ga("batchDims",e[0].dataType,te,1),V=Ee(e[0].dataType),de=N("a",e[0].dataType,C,T),me=N("b",e[1].dataType,z,T),F=j("result",e[0].dataType,B.length,T),ge=[de,me];if(ee){let D=n?T:1;ge.push(N("bias",e[2].dataType,e[2].dims.length,D))}let M=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Bt(t,M);let L=Ee(F.type.tensor),le=Ot(t,F.type.value,L),ve=Mu(T,ee,le,[J,de,me,F],n);return`
  ${Z.registerUniforms(M).registerInternalVariables(J).declareVariables(...ge,F)}
  ${ve}
  ${b?va(S,v,V,J):xa(S,v,V,J)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${b};${n}`,inputDependencies:G},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:W}),getShaderSource:ae}}}),Du,Jc,Iy=q(()=>{Y(),dt(),ue(),Mt(),Qa(),Cy(),Ja(),Du=(e,t,r,a,n=!1,i,o=4,l=4,p=4,d="f32")=>{let m=W=>{switch(W){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${W} is not supported.`)}},g=W=>{switch(W){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${W} is not supported.`)}},y=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,w=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",v=e?"col":"row",$=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${ze(o,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${w} && xCol >= 0 && xCol < ${b}) {
      ${y}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${m(o)}
    }
    return resData;`,T=e?t&&a?`
    let col = colIn * ${o};
    ${$}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${ze(o,d)}(0.0);`:a&&r?`
    let col = colIn * ${o};
    ${$}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
    }
    return ${ze(o,d)}(0.0);`,k=e?a&&r?g(l):`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g(l)}
    }
    return ${ze(l,d)}(0.0);`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${g(l)}
    }
    return ${ze(l,d)}(0.0);`,C=ze(p,d),E=ze(e?o:l,d),z=ze(e?l:o,d),B=Ot(i,C,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?T:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?k:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${C}) {
      let col = colIn * ${p};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${Zc(n)}
      ${B}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Jc=(e,t,r,a,n,i,o,l,p)=>{let d=t.format==="NHWC",m=d?e[0].dims[3]:e[0].dims[1],g=r[0],y=d?r[2]:r[3],_=d?r[1]:r[2],w=d?r[3]:r[1],b=d&&(m%4===0||m%3===0)&&w%4===0,S=d?w:y*_,v=d?y*_:w,$=[8,8,1],T=a<=8?[4,1,1]:[4,4,1],k=[Math.ceil(S/$[0]/T[0]),Math.ceil(v/$[1]/T[1]),Math.ceil(g/$[2]/T[2])];pe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let C=b?d&&m%4!==0?3:4:1,E=$[1]*T[1],z=$[0]*T[0],B=Math.max($[0]*C,$[1]),W=a%E===0,G=n%z===0,ee=i%B===0,ae=b?[C,4,4]:[1,1,1],Z=[{type:6,data:a},{type:6,data:n},{type:6,data:i},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Rt(t,Z),Z.push(...Q(e[0].dims,e[1].dims));let te=["rank","rank"];o&&(Z.push(...Q(e[2].dims)),te.push("rank")),Z.push(...Q(r));let J=V=>{let de=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Bt(t,de);let me=b?4:1,F=Ee(e[0].dataType),ge=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${F}>`:F}) {
        result[flatIndex] = ${b?`vec4<${F}>`:F}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${F}>`:F}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,M=N("x",e[0].dataType,e[0].dims.length,C===3?1:C),L=N("w",e[1].dataType,e[1].dims.length,me),le=[M,L],ve=j("result",e[0].dataType,r.length,me);if(o){let D=N("bias",e[2].dataType,e[2].dims.length,me);le.push(D),ge+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${F}>`:F} {
          return bias[coords.${d?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${Xc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${V.registerUniforms(de).declareVariables(...le,ve)}
        ${ge}
        ${Du(d,W,G,ee,o,t,ae[0],ae[1],ae[2],F)}
        ${b?va(T,$,F,void 0,!d,B):xa(T,$,F,void 0,!d,B,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${C};${b};${W};${G};${ee};${E};${z};${B}`,inputDependencies:te},getRunData:()=>({outputs:[{dims:p?p(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:Z}),getShaderSource:J}}}),Pu,Ui,rr,Uu,Wi,Wu,Yc,eh,Ey=q(()=>{Y(),dt(),oe(),ue(),Mt(),Qa(),Pu=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ui=e=>typeof e=="number"?[e,e,e]:e,rr=(e,t)=>t<=1?e:e+(e-1)*(t-1),Uu=(e,t,r,a=1)=>{let n=rr(t,a);return Math.floor((e[0]*(r-1)-r+n)/2)},Wi=(e,t,r,a,n)=>{n==null&&(n=Uu(e,t[0],a[0]));let i=[0,0,0,r];for(let o=0;o<3;o++)e[o]+2*n>=t[o]&&(i[o]=Math.trunc((e[o]-t[o]+2*n)/a[o]+1));return i},Wu=(e,t,r,a,n,i,o,l,p,d)=>{let m,g,y,_;if(e==="VALID"&&(e=0),typeof e=="number"){m={top:e,bottom:e,left:e,right:e,front:e,back:e};let w=Wi([t,r,a,1],[l,p,d],1,[n,i,o],e);g=w[0],y=w[1],_=w[2]}else if(Array.isArray(e)){if(!e.every((b,S,v)=>b===v[0]))throw Error(`Unsupported padding parameter: ${e}`);m={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let w=Wi([t,r,a,1],[l,p,d],1,[n,i,o],e[0]);g=w[0],y=w[1],_=w[2]}else if(e==="SAME_UPPER"){g=Math.ceil(t/n),y=Math.ceil(r/i),_=Math.ceil(a/o);let w=(g-1)*n+l-t,b=(y-1)*i+p-r,S=(_-1)*o+d-a,v=Math.floor(w/2),$=w-v,T=Math.floor(b/2),k=b-T,C=Math.floor(S/2),E=S-C;m={top:T,bottom:k,left:C,right:E,front:v,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:m,outDepth:g,outHeight:y,outWidth:_}},Yc=(e,t,r,a,n,i=!1,o="channelsLast")=>{let l,p,d,m,g;if(o==="channelsLast")[l,p,d,m,g]=e;else if(o==="channelsFirst")[l,g,p,d,m]=e;else throw new Error(`Unknown dataFormat ${o}`);let[y,,_,w,b]=t,[S,v,$]=Ui(r),[T,k,C]=Ui(a),E=rr(_,T),z=rr(w,k),B=rr(b,C),{padInfo:W,outDepth:G,outHeight:ee,outWidth:ae}=Wu(n,p,d,m,S,v,$,E,z,B),Z=i?y*g:y,te=[0,0,0,0,0];return o==="channelsFirst"?te=[l,Z,G,ee,ae]:o==="channelsLast"&&(te=[l,G,ee,ae,Z]),{batchSize:l,dataFormat:o,inDepth:p,inHeight:d,inWidth:m,inChannels:g,outDepth:G,outHeight:ee,outWidth:ae,outChannels:Z,padInfo:W,strideDepth:S,strideHeight:v,strideWidth:$,filterDepth:_,filterHeight:w,filterWidth:b,effectiveFilterDepth:E,effectiveFilterHeight:z,effectiveFilterWidth:B,dilationDepth:T,dilationHeight:k,dilationWidth:C,inShape:e,outShape:te,filterShape:t}},eh=(e,t,r,a,n,i)=>{let o=i==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let l=[64,1,1],p={x:r.map((S,v)=>v)},d=[Math.ceil(Pu(p.x.map(S=>r[S]))/l[0]),1,1];pe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let m=1,g=O.size(r),y=[{type:12,data:g},{type:12,data:a},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];Rt(t,y),y.push(...Q(e[0].dims,e[1].dims));let _=["rank","rank"],w=e.length===3;w&&(y.push(...Q(e[2].dims)),_.push("rank")),y.push(...Q(r));let b=S=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Bt(t,v);let $=1,T=Ee(e[0].dataType),k=N("x",e[0].dataType,e[0].dims.length,m),C=N("W",e[1].dataType,e[1].dims.length,$),E=[k,C],z=j("result",e[0].dataType,r.length,$),B="";if(w){let ee=N("bias",e[2].dataType,e[2].dims.length,$);E.push(ee),B+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${o?K("coords",4,5):K("coords",1,5)}];
        }`}let W=ze(m,T),G=Ot(t,W,T);return`
            ${B}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
          ${S.registerUniforms(v).declareVariables(...E,z)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${z.offsetToIndices("global_idx")};
              let batch = ${K("coords",0,k.rank)};
              let d2 = ${o?K("coords",k.rank-1,k.rank):K("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${o?K("coords",1,k.rank):K("coords",2,k.rank)},
              ${o?K("coords",2,k.rank):K("coords",3,k.rank)},
              ${o?K("coords",3,k.rank):K("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?K("uniforms.x_shape",1,k.rank):K("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${o?K("uniforms.x_shape",2,k.rank):K("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${o?K("uniforms.x_shape",3,k.rank):K("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${o?K("uniforms.x_shape",4,k.rank):K("uniforms.x_shape",1,k.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${w?"value = value + getBiasByOutputCoords(coords)":""};
              ${G}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${m};${w}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:y}),getShaderSource:b}}}),th,rh,zy=q(()=>{Y(),oe(),ue(),Mt(),th=(e,t,r,a)=>{let n=e.length>2,i=n?"value += b[output_channel];":"",o=e[0].dims,l=e[1].dims,p=t.format==="NHWC",d=p?r[3]:r[1],m=d/t.group,g=p&&m>=4?Se(d):1,y=O.size(r)/g,_=[{type:12,data:y},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:m}];Rt(t,_),_.push(...Q(o,[l[0],l[1],l[2],l[3]/g]));let w=n?["rank","rank","rank"]:["rank","rank"];_.push(...Q([r[0],r[1],r[2],r[3]/g]));let b=S=>{let v=j("output",e[0].dataType,r.length,g),$=Ee(v.type.tensor),T=Ot(t,v.type.value,$),k=N("x",e[0].dataType,o.length),C=N("w",e[1].dataType,l.length,g),E=[k,C];n&&E.push(N("b",e[2].dataType,e[2].dims,g));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Bt(t,z);let B=p?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${C.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${C.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(z).declareVariables(...E,v)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${p?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${p?1:2}], outputIndices[${p?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${g} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${p?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${B}
    ${i}
    ${T}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${g}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:b}},rh=(e,t,r,a)=>{let n=e.length>2,i=Se(r[3]),o=Se(r[2]),l=O.size(r)/i/o,p=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/i],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/i],m=[r[0],r[1],r[2],r[3]/i],g=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Rt(t,g),g.push(...Q(p,d,m));let y=(o-1)*t.strides[1]+d[1],_=w=>{let b=j("output",e[0].dataType,m.length,i),S=Ee(b.type.tensor),v=Ot(t,b.type.value,S),$=N("x",e[0].dataType,p.length,i),T=N("w",e[1].dataType,d.length,i),k=[$,T];n&&k.push(N("b",e[2].dataType,e[2].dims,i));let C=n?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Bt(t,E),`
  ${w.registerUniforms(E).declareVariables(...k,b)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${$.type.value}, ${y}>;
    var values: array<${b.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${y}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${$.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${$.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${C}
      ${v}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${i};${o};${y};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:_}}}),qu,Rr,Lu,Br,Sa,qi,Vu,Gu,ka,Ay=q(()=>{oe(),Iy(),Ey(),Ja(),zy(),Mt(),Xa(),$t(),qu=(e,t,r,a,n,i)=>{let o=e[0],l=e.slice(i?1:2,i?3:4),p=l.length,d=t[0],m=t.slice(2).map((y,_)=>y+(y-1)*(r[_]-1)),g=l.map((y,_)=>y+a[_]+a[_+p]).map((y,_)=>Math.floor((y-m[_]+n[_])/n[_]));return g.splice(0,0,o),g.splice(i?3:1,0,d),g},Rr=[2,3,1,0],Lu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Br=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let i=2;i<t[1].dims.length;++i)r[i-2]===0&&(r[i-2]=t[1].dims[i]);let a=e.pads.slice();Fr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,a,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:a}),n},Sa=e=>{let t=Ka(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,i=e.group,o=e.kernel_shape,l=e.pads,p=e.strides,d=e.w_is_const();return{autoPad:a,format:r,dilations:n,group:i,kernelShape:o,pads:l,strides:p,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},qi=(e,t,r,a)=>{let n=r.format==="NHWC",i=qu(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let E=[t[0]];if(n){let z=e.kernelCustomData.wT??e.compute(We(t[1],Rr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),E.push(z)}else E.push(t[1]);t.length===3&&E.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(rh(E,r,i,a),{inputs:E}):e.compute(th(E,r,i,a),{inputs:E});return}let o=t.length===3,l=t[0].dims[n?1:2],p=t[0].dims[n?2:3],d=t[0].dims[n?3:1],m=t[1].dims[2],g=t[1].dims[3],y=i[n?1:2],_=i[n?2:3],w=i[n?3:1],b=n&&m===l&&g===p&&r.pads[0]===0&&r.pads[1]===0;if(b||m===1&&g===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let E=i[0],z,B,W,G=[];if(n){let Z=e.kernelCustomData.wT??e.compute(We(t[1],Rr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Z),b){let te=l*p*d;z=t[0].reshape([1,E,te]),B=Z.reshape([1,te,w]),W=[1,E,w]}else z=t[0].reshape([E,l*p,d]),B=Z.reshape([1,d,w]),W=[E,y*_,w];G.push(z),G.push(B)}else z=t[0].reshape([E,d,l*p]),B=t[1].reshape([1,w,d]),W=[E,w,y*_],G.push(B),G.push(z);o&&G.push(t[2]);let ee=W[2],ae=G[0].dims[G[0].dims.length-1];ee<8&&ae<8?e.compute(Za(G,r,i,W,n,a),{inputs:G}):e.compute(Kr(G,r,i,W,n,a),{inputs:G});return}let S=!0,v=e.kernelCustomData.wT??e.compute(We(t[1],Rr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let $=[t[0],v];o&&$.push(t[2]);let T=n?y*_:w,k=n?w:y*_,C=m*g*d;e.compute(Jc($,r,i,T,k,C,o,S,a),{inputs:$})},Vu=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],i=[1].concat(t.strides),o=[1].concat(t.dilations),l=[1].concat(t.kernelShape),p=Br({...t,pads:n,strides:i,dilations:o,kernelShape:l},a);qi(e,a,p,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Gu=(e,t,r)=>{let a=r.format==="NHWC"?"channelsLast":"channelsFirst",n=Br(r,t),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,o=Yc(t[0].dims,t[1].dims,r.strides,r.dilations,i,!1,a);e.compute(eh(t,n,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],a))},ka=(e,t)=>{if(Lu(e.inputs,t),e.inputs[0].dims.length===3)Vu(e,t);else if(e.inputs[0].dims.length===5)Gu(e,e.inputs,t);else{let r=Br(t,e.inputs);qi(e,e.inputs,r)}}}),ih,Oy=q(()=>{Y(),dt(),oe(),ue(),ih=(e,t,r)=>{let a=e.length>2,n=t.outputShape,i=t.format==="NHWC",o=t.group,l=e[1].dims,p=l[2]/o,d=l[3],m=i?Se(p):1,g=i?Se(d):1,y=i?d===1?m:g:1,_=O.size(n)/g,w=[Math.ceil(_/64),1,1];pe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${w}`);let b=["rank","rank"],S=[t.strides[0],t.strides[1]],v=[t.kernelShape[i?1:2],t.kernelShape[i?2:3]],$=[t.dilations[0],t.dilations[1]],T=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[i?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[i?2:3]-1)*(t.dilations[1]-1))],k=[T[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),T[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],C=[{type:12,data:_},{type:12,data:S},{type:12,data:v},{type:12,data:$},{type:12,data:T},{type:6,data:k},{type:12,data:p},{type:12,data:d},...Q(e[0].dims,e[1].dims)];a&&(C.push(...Q(e[2].dims)),b.push("rank")),C.push(...Q(n));let E=z=>{let B=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:S.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:T.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],W=Ee(e[0].dataType),G=i?1:2,ee=i?2:3,ae=i?3:1,Z=N("W",e[1].dataType,e[1].dims.length,y),te=N("Dy",e[0].dataType,e[0].dims.length,m),J=[te,Z];a&&J.push(N("bias",e[2].dataType,[n[ae]].length,g));let V=j("result",e[0].dataType,n.length,g),de=()=>{let F="";if(m===1)F+=`
        let w_offset = ${Z.indicesToOffset(`${Z.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${Z.getByOffset(`w_offset / ${y}`)};
        dotProd = dotProd + xValue * wValue;`;else if(d===1)F+=`
          let wValue = ${Z.getByOffset(`${Z.indicesToOffset(`${Z.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${y}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let ge=0;ge<m;ge++)F+=`
            let wValue${ge} = ${Z.getByOffset(`${Z.indicesToOffset(`${Z.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ge}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${ge}] * wValue${ge};`;return F},me=`
            let outputIndices = ${V.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${V.indicesGet("outputIndices",0)};
            let d1 = ${V.indicesGet("outputIndices",ae)};
            let r = ${V.indicesGet("outputIndices",G)};
            let c = ${V.indicesGet("outputIndices",ee)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${V.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${W}(dyRCorner) + ${W}(wR)) / ${W}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${W}(uniforms.Dy_shape[${G}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${W}(dyCCorner) + ${W}(wC)) / ${W}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${W}(uniforms.Dy_shape[${ee}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${m}) {
                  let xValue = ${i?te.getByOffset(`${te.indicesToOffset(`${te.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${m}`):te.get("batch","inputChannel","idyR","idyC")};
                  ${de()}
                  inputChannel = inputChannel + ${m};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${g}]`:""};
            ${V.setByOffset("global_idx","value")};
          `;return`
    ${z.registerUniforms(B).declareVariables(...J,V)}
      ${z.mainStart()}
      ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${me}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${m}${y}${g}${d===1}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:w[0],y:w[1],z:w[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:C}),getShaderSource:E}}}),Hu,Fu,ju,Li,ah,Ku,Vi,Qu,nh,Ry=q(()=>{Oy(),Mt(),$t(),Hu=(e,t,r,a,n,i)=>(e-1)*t+r+(a-1)*n+1-i,Fu=(e,t,r,a,n)=>{let i=Math.floor(e/2);t==="SAME_UPPER"?(r[a]=i,r[n]=e-i):t==="SAME_LOWER"&&(r[a]=e-i,r[n]=i)},ju=(e,t,r,a,n,i,o,l,p,d)=>{let m=e.length-2,g=d.length===0;p.length<m&&p.push(...Array(m-p.length).fill(0));let y=e[0],_=t[l?3:1]*n;for(let w=0,b=e.length-m-(l?1:0);w<m;++w,++b){let S=e[b],v=g?S*o[w]:d[w],$=Hu(S,o[w],i[w],t[b],r[w],v);Fu($,a,i,w,w+m),g&&d.push(o[w]*(S-1)+p[w]+(t[b]-1)*r[w]+1-i[w]-i[w+m])}d.splice(0,0,y),d.splice(l?3:1,0,_)},Li=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((g,y)=>g*y,1)===0){r.length=0;for(let g=2;g<t[1].dims.length;++g)r.push(t[1].dims[g])}let a=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(a?3:1,0,t[1].dims[1]);let n=e.pads.slice(),i=e.outputShape.slice(),o=e.outputPadding.slice(),l=t[0].dims,p=e.dilations.slice();if(p.reduce((g,y)=>g+y,0)===0){let g=t[0].dims.length-2;p=new Array(g).fill(1)}let d=e.strides.slice();if(d.reduce((g,y)=>g+y,0)===0){let g=t[0].dims.length-2;d=new Array(g).fill(1)}ju(l,r,p,e.autoPad,e.group,n,d,a,o,i);let m=Object.assign({},e);return Object.assign(m,{kernelShape:r,pads:n,outputPadding:o,outputShape:i,dilations:p,strides:d}),m},ah=e=>{let t=Ka(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,i=e.group,o=e.kernelShape,l=e.pads,p=e.strides,d=e.wIsConst(),m=e.outputPadding,g=e.outputShape;return{autoPad:a,format:r,dilations:n,group:i,kernelShape:o,outputPadding:m,outputShape:g,pads:l,strides:p,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Ku=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.reduce((o,l)=>o+l,0)>0&&t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.reduce((o,l)=>o+l,0)>0&&t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.reduce((o,l)=>o+l,0)>0&&t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((o,l)=>o+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Vi=(e,t,r,a)=>{let n=e.kernelCustomData.wT??e.compute(We(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let i=[t[0],n];t.length===3&&i.push(t[2]),e.compute(ih(i,r,a),{inputs:i})},Qu=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let i=t.dilations;(i.length===0||i[0]===0)&&(i=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],o=[1].concat(o),i=[1].concat(i),n=[1].concat(n);let p=t.outputPadding;p=[0].concat(p);let d=Li({...t,pads:l,strides:o,dilations:i,kernelShape:n,outputPadding:p},a);Vi(e,a,d,m=>r?[m[0],m[2],m[3]]:[m[0],m[1],m[3]])},nh=(e,t)=>{if(Ku(e.inputs,t),e.inputs[0].dims.length===3)Qu(e,t);else{let r=Li(t,e.inputs);Vi(e,e.inputs,r)}}}),Zu,sh,oh,By=q(()=>{Y(),oe(),ke(),ue(),Zu=(e,t,r,a)=>{let n=O.size(t),i=t.length,o=N("input",e,i),l=j("output",e,i),p=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=O.normalizeAxis(p,i),m=g=>{let y=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,_=K("uniforms.input_shape","uniforms.axis",i),w=a.reverse?y+(a.exclusive?" + 1":""):"0",b=a.reverse?_:y+(a.exclusive?"":" + 1");return`
                ${g.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,l)}
                ${g.mainStart()}
                  ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${w};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...Q(t,t)]}),getShaderSource:m}},sh=(e,t)=>{let r=e.inputs[0].dims,a=e.inputs[0].dataType,n=e.inputs[1];e.compute(Zu(a,r,n,t),{inputs:[0]})},oh=e=>{let t=e.exclusive===1,r=e.reverse===1;return we({exclusive:t,reverse:r})}}),Xu,Ju,Yu,uh,lh,Ny=q(()=>{Y(),oe(),ke(),ue(),Xu=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Ju=(e,t,r,a)=>{let n=[];n.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<t;++i)n.push(r.indicesSet("a",e[i],`i[${i}]`));return n.push("return a;}"),n.join(`
`)},Yu=(e,t)=>{let r,a,n,i,o,l,p=t.format==="NHWC",d=t.blocksize,m=t.mode==="DCR";p?([r,a,n,i]=e.dims,o=m?[r,a,n,d,d,i/d**2]:[r,a,n,i/d**2,d,d],l=m?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,a,n,i]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=m?[r,d,d,i/d**2,a,n]:[r,i/d**2,d,d,a,n],l=m?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let g=e.reshape(o),y=g.dims.length,_=e.dataType,w=N("a",_,y),b=j("output",_,y),S=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(w,b)}

  ${Ju(l,y,w,b)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let $=p?[r,a*d,n*d,i/d**2]:[r,i/d**2,a*d,n*d],T=O.size($),k=g.dims,C=O.sortBasedOnPerm(k,l);return{outputs:[{dims:$,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...Q(k,C)]}},getShaderSource:S}},uh=(e,t)=>{Xu(e.inputs),e.compute(Yu(e.inputs[0],t))},lh=e=>we({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Nr,ir,Gi,el,tl,rl,il,Hi,al,dh,ph,My=q(()=>{Y(),oe(),ke(),ue(),Nr="[a-zA-Z]|\\.\\.\\.",ir="("+Nr+")+",Gi="^"+ir+"$",el="("+ir+",)*"+ir,tl="^"+el+"$",rl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},il=class{constructor(e,t){var n;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,a]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(tl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,o)=>{let l=e[o].dims.slice();if(!i.match(RegExp(Gi)))throw new Error("Invalid LHS term");let p=this.processTerm(i,!0,l,o);this.lhs.push(p)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([i,o])=>o.count===1||i==="...").map(([i])=>i).join("");else if(!a.match(RegExp(ir)))throw new Error("Invalid RHS");(n=a.match(RegExp(Nr,"g")))==null||n.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(i);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,r){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,a)}processTerm(e,t,r,a=-1){let n=r.length,i=!1,o=[],l=0;if(!e.match(RegExp(Gi))&&!t&&e!=="")throw new Error("Invalid LHS term");let p=e.match(RegExp(Nr,"g")),d=new rl(a);return p==null||p.forEach((m,g)=>{if(m==="..."){if(i)throw new Error("Only one ellipsis is allowed per input term");i=!0;let y=n-p.length+1;if(y<0)throw new Error("Ellipsis out of bounds");if(o=r.slice(l,l+y),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<o.length;_++){let w=String.fromCharCode(48+_);d.addSymbol(w,g+_),this.addSymbol(w,r[l++],a)}}else d.addSymbol(m,g+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(m,r[l++],a)}),d}},Hi=e=>e+"_max",al=(e,t,r,a)=>{let n=e.map(d=>d.length).map((d,m)=>N(`input${m}`,t,d)),i=O.size(a),o=j("output",t,a.length),l=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),p=d=>{let m=[],g="var prod = 1.0;",y="var sum = 0.0;",_="sum += prod;",w=[],b=[],S=[],v=[],$=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,C)=>{var E;if(r.rhs.symbolToIndices.has(C)){let z=(E=r.rhs.symbolToIndices.get(C))==null?void 0:E[0];z!==void 0&&r.lhs.forEach((B,W)=>{if(k.inputIndices.includes(W)){let G=B.symbolToIndices.get(C);if(G===void 0)throw new Error("Invalid symbol error");G.forEach(ee=>{m.push(`${n[W].indicesSet(`input${W}Indices`,ee,o.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,B)=>{if(k.inputIndices.includes(B)){let W=z.symbolToIndices.get(C);if(W===void 0)throw new Error("Invalid symbol error");W.forEach(G=>{w.push(`${n[B].indicesSet(`input${B}Indices`,G,`${C}`)}`)}),v.push(`prod *= ${n[B].getByIndices(`input${B}Indices`)};`)}}),b.push(`for(var ${C}: u32 = 0; ${C} < uniforms.${Hi(C)}; ${C}++) {`),S.push("}")});let T=$?[...m,`let sum = ${n.map((k,C)=>k.getByIndices(`input${C}Indices`)).join(" * ")};`]:[...m,y,...b,...w,g,...v,_,...S];return`
            ${d.registerUniforms(l.map(k=>({name:`${Hi(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,o)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${n.map((k,C)=>`var input${C}Indices: ${n[C].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=l.filter(g=>r.symbolToInfo.has(g)).map(g=>{var y;return{type:12,data:((y=r.symbolToInfo.get(g))==null?void 0:y.dimValue)||0}});d.push({type:12,data:i});let m=e.map((g,y)=>[...Q(g)]).reduce((g,y)=>g.concat(y),d);return m.push(...Q(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:m}},getShaderSource:p}},dh=(e,t)=>{let r=new il(e.inputs,t.equation),a=r.outputDims,n=e.inputs.map((i,o)=>i.dims);e.compute(al(n,e.inputs[0].dataType,r,a))},ph=e=>{let t=e.equation.replace(/\s+/g,"");return we({equation:t})}}),nl,Fi,sl,ol,ch,Dy=q(()=>{Y(),oe(),ue(),nl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;a<r.length&&n<t.length;++a,++n)if(r[a]!==t[n]&&r[a]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Fi=(e,t)=>{let r=e.length-t.length,a=[];for(let n=0;n<r;++n)a.push(e[n]);for(let n=0;n<t.length;++n)a.push(t[n]===1?e[n+r]:t[n]);return a},sl=(e,t)=>e.length>t.length?Fi(e,t):Fi(t,e),ol=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=sl(t,r),n=e[0].dataType,i=n===9||O.size(t)===1,o=n===9||t.length>0&&t[t.length-1]%4===0?4:1,l=i||a.length>0&&a[a.length-1]%4===0?4:1,p=Math.ceil(O.size(a)/l),d=g=>{let y=N("input",n,t.length,o),_=j("output",n,a.length,l),w;if(n===9){let b=(S,v,$="")=>`
          let outputIndices${v} = ${_.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${y.broadcastedIndicesToOffset(`outputIndices${v}`,_)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${S}[${v}] = ${$}(${y.getByOffset(`index${v}`)}[component${v}]);
        `;w=`
        let outputOffset = global_idx * ${l};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else w=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${l}`)};
        let inputOffset = ${y.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${y.getByOffset(`inputOffset / ${o}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${g.registerUniform("vec_size","u32").declareVariables(y,_)}
    ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${w}`},m=[{type:12,data:p},...Q(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${o}${l}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m})}},ch=e=>{nl(e.inputs),e.compute(ol(e.inputs),{inputs:[0]})}}),ul,hh,Py=q(()=>{Y(),oe(),ue(),ja(),ul=e=>{let t=e[0].dataType,r=O.size(e[0].dims),a=O.size(e[1].dims),n=a%4===0,i=o=>{let l=N("x",t,[1],4),p=N("bias",t,[1],4),d=j("y",t,[1],4),m=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],g=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${p.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,y=n?`
      let bias = ${p.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${g(0)}${g(1)}${g(2)}${g(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(m).declareVariables(l,p,d)}

    ${ba(Re(t))}

    ${o.mainStart(Ht)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${y}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",$a("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(r/Ht/4)}})}},hh=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?Rc(e):e.compute(ul(e.inputs))}}),ll,dl,fh,mh,Uy=q(()=>{Y(),oe(),ke(),ue(),ll=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},dl=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r.length,i=O.normalizeAxis(t.axis,n),o=r.slice(0);o.splice(i,1,...a);let l=r[i],p=e[0].dataType===9?4:1,d=Math.ceil(O.size(o)/p),m=[{type:12,data:d},{type:6,data:l},{type:12,data:i},...Q(e[0].dims,e[1].dims,o)],g=y=>{let _=N("data",e[0].dataType,e[0].dims.length,p),w=N("inputIndices",e[1].dataType,e[1].dims.length),b=j("output",e[0].dataType,o.length,p),S=$=>{let T=a.length,k=`var indicesIndices${$}  = ${w.type.indices}(0);`;for(let C=0;C<T;C++)k+=`${T>1?`indicesIndices${$}[${C}]`:`indicesIndices${$}`} = ${o.length>1?`outputIndices${$}[uniforms.axis + ${C}]`:`outputIndices${$}`};`;k+=`
          var idx${$} = ${w.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${_.type.indices};
        `;for(let C=0,E=0;C<n;C++)C===i?(k+=`${n>1?`dataIndices${$}[${C}]`:`dataIndices${$}`} = u32(idx${$});`,E+=T):(k+=`${n>1?`dataIndices${$}[${C}]`:`dataIndices${$}`} = ${o.length>1?`outputIndices${$}[${E}]`:`outputIndices${$}`};`,E++);return k},v;if(e[0].dataType===9){let $=(T,k,C="")=>`
          let outputIndices${k} = ${b.offsetToIndices(`outputOffset + ${k}u`)};
          ${S(k)};
          let offset${k} = ${_.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${T}[${k}] = ${C}(${_.getByOffset(`index${k}`)}[component${k}]);
        `;v=`
        let outputOffset = global_idx * ${p};
        var value = vec4<u32>(0);
        ${$("value",0,"u32")}
        ${$("value",1,"u32")}
        ${$("value",2,"u32")}
        ${$("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${_.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,w,b)}
      ${y.mainStart()}
        ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:g}},fh=e=>we({axis:e.axis}),mh=(e,t)=>{let r=e.inputs;ll(r),e.compute(dl(e.inputs,t))}}),pl,gh,yh,Wy=q(()=>{Y(),oe(),ue(),pl=(e,t,r,a,n,i,o,l,p)=>{let d=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:r},{type:12,data:o},{type:12,data:l},{type:12,data:p}],m=[i];d.push(...Q(t.dims,m));let g=y=>{let _=N("indices_data",t.dataType,t.dims.length),w=j("input_slice_offsets_data",12,1,1),b=[_,w],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${y.registerUniforms(S).declareVariables(...b)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:m,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:d}),getShaderSource:g},{inputs:[t],outputs:[-1]})[0]},gh=(e,t)=>{let r=e.inputs,a=r[0].dims,n=r[0].dataType,i=r[1].dims,o=i[i.length-1],l=O.sizeToDimension(i,i.length-1),p=O.sizeFromDimension(a,t.batchDims+o),d=O.sizeToDimension(a,t.batchDims),m=O.sizeFromDimension(a,t.batchDims),g=l/d,y=new Array(o),_=p;for(let k=0;k<o;++k)y[o-1-k]=_,_*=a[t.batchDims+o-1-k];let w=pl(e,r[1],y,t.batchDims,a,l,g,m,o),b=t.batchDims+o;if(b>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=i.slice(0,-1).concat(a.slice(b)),v=O.size(S),$=[{type:12,data:v},{type:12,data:p},...Q(r[0].dims,w.dims,S)],T=k=>{let C=N("data",r[0].dataType,r[0].dims.length),E=N("slice_offsets",12,w.dims.length),z=j("output",r[0].dataType,S.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(C,E,z)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:n}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:$}),getShaderSource:T},{inputs:[r[0],w]})},yh=e=>({batchDims:e.batch_dims,cacheKey:""})}),cl,hl,_h,wh,qy=q(()=>{Y(),oe(),ke(),ue(),cl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,n=e[0],i=e[2],o=e.length===4?e[3]:void 0;if(i.dims.length!==n.dims.length||!n.dims.map((l,p)=>p===r?Math.ceil(l/a)===i.dims[p]:l===i.dims[p]).reduce((l,p)=>l&&p,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==i.dims.length||!o.dims.map((l,p)=>l===i.dims[p]).reduce((l,p)=>l&&p,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},hl=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r.length,i=O.normalizeAxis(t.gatherAxis,n),o=O.normalizeAxis(t.quantizeAxis,n),l=r.slice(0);l.splice(i,1,...a);let p=O.size(l),d=e[2].dataType,m=e[0].dataType===22,g=[{type:12,data:p},{type:12,data:o},{type:12,data:i},{type:12,data:t.blockSize},...Q(...e.map((_,w)=>_.dims),l)],y=_=>{let w=N("data",e[0].dataType,e[0].dims.length),b=N("inputIndices",e[1].dataType,e[1].dims.length),S=N("scales",e[2].dataType,e[2].dims.length),v=e.length>3?N("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=j("output",d,l.length),T=[w,b,S];v&&T.push(v);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(k).declareVariables(...T,$)}
        ${_.mainStart()}
        let output_indices = ${$.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${$.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${$.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${w.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${$.indicesGet("output_indices","i")};
          ${w.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[i]};
        }
        ${w.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${$.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${w.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${w.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${w.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${m?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${m?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Re(d)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,w)=>w!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,w)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:d}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:g}),getShaderSource:y}},_h=(e,t)=>{let r=e.inputs;cl(r,t),e.compute(hl(e.inputs,t))},wh=e=>we({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),fl,ml,bh,$h,Ly=q(()=>{Y(),oe(),ke(),ue(),fl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},ml=(e,t)=>{let r=e[0].dims,a=e[0].dataType,n=r.length,i=e[1].dims,o=e[1].dataType,l=O.normalizeAxis(t.axis,n),p=r[l],d=i.slice(0),m=O.size(d),g=N("input",a,n),y=N("indicesInput",o,i.length),_=j("output",a,d.length),w=[{type:12,data:m},{type:6,data:p},{type:12,data:l}];return w.push(...Q(r,i,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:w}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,y,_)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${y.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${g.type.indices}(outputIndices);
      ${g.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${g.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},bh=e=>we({axis:e.axis}),$h=(e,t)=>{let r=e.inputs;fl(r),e.compute(ml(e.inputs,t))}}),gl,yl,vh,xh,Vy=q(()=>{Y(),oe(),ue(),gl=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},yl=(e,t)=>{let r=e[0].dims.slice(),a=e[1].dims.slice(),[n,i,o]=Sp.getShapeOfGemmResult(r,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),l=[n,i];if(!l)throw new Error("Can't use gemm on the given tensors");let p=16,d=Math.ceil(i/p),m=Math.ceil(n/p),g=!0,y=O.size(l),_=[{type:12,data:g?d:y},{type:12,data:n},{type:12,data:i},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],w=["type","type"];e.length===3&&(_.push(...Q(e[2].dims)),w.push("rank")),_.push(...Q(l));let b=v=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",k=N("a",e[0].dataType,e[0].dims),C=N("b",e[1].dataType,e[1].dims),E=k.type.value,z=null,B=[k,C];e.length===3&&(z=N("c",e[2].dataType,e[2].dims.length),B.push(z));let W=j("output",e[0].dataType,l.length);B.push(W);let G=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(G).declareVariables(...B)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${T}
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",W)}; value += ${E}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=v=>{let $=N("a",e[0].dataType,e[0].dims),T=N("b",e[1].dataType,e[1].dims),k=null,C=[$,T];e.length===3&&(k=N("c",e[2].dataType,e[2].dims.length),C.push(k));let E=j("output",e[0].dataType,l.length);C.push(E);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],B="",W="";t.transA&&t.transB?(W=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,B="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(W=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,B="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(W=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,B="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(W=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,B="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let G=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(z).declareVariables(...C)}
  var<workgroup> tile_a: array<array<${$.type.storage}, ${p}>, ${p}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${p}>, ${p}>;
  ${v.mainStart([p,p,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${p};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${p};
    let num_tiles = (uniforms.K - 1) / ${p} + 1;
    var k_start = 0u;
    var value = ${E.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${W}
      k_start = k_start + ${p};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${p}; k++) {
        ${B}
      }
      workgroupBarrier();
    }

    ${G}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return g?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:d*m},programUniforms:_}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:b}},vh=e=>{let t=e.transA,r=e.transB,a=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:a,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},xh=(e,t)=>{gl(e.inputs),e.compute(yl(e.inputs,t))}}),it,ut,kt,Tt,_l,wl,bl,$l,vl,xl,Sl,kl,Sh,kh,Gy=q(()=>{Y(),oe(),ke(),ue(),[it,ut,kt,Tt]=[0,1,2,3],_l=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},wl=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,bl=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,$l=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,vl=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,xl=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${it}] = batch;
     indices[${ut}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${kt}] = u32(r);
            indices[${Tt}] = u32(c);
          }
        `;case"border":return`
          indices[${kt}] = u32(clamp(r, 0, H - 1));
          indices[${Tt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${kt}] = gs_reflect(r, border[1], border[3]);
          indices[${Tt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Sl=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${it}], indices[${ut}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${it}], indices[${ut}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${it}], indices[${ut}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${it}], indices[${ut}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${it}], indices[${ut}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${it}], indices[${ut}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,kl=(e,t)=>{let r=N("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=N("grid",e[1].dataType,a.length,2),i=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(i=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[it,ut,kt,Tt]=[0,3,1,2]);let o=j("output",e[0].dataType,i.length),l=r.type.value,p=O.size(i),d=[{type:12,data:p},...Q(e[0].dims,a,i)],m=g=>`
  ${g.registerUniform("output_size","u32").declareVariables(r,n,o)}
  ${wl}
  ${bl(l)}
  ${$l(t)}
  ${vl(t)}
  ${xl(r,l,t)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${kt}]);
      let W_in = i32(uniforms.x_shape[${Tt}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${it}], indices[${kt}], indices[${Tt}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Sl(o,l,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:g=>{let y=O.size(i);return{outputs:[{dims:i,dataType:g[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:d}},getShaderSource:m}},Sh=(e,t)=>{_l(e.inputs),e.compute(kl(e.inputs,t))},kh=e=>we({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Be,Tl,Th,ji,Cl,pr,Ch,Ih=q(()=>{Y(),oe(),ke(),Va(),Fa(),ue(),$t(),Be=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Tl=(e,t)=>{let r=e[0],a=Be(e,1),n=Be(e,2),i=Be(e,3),o=Be(e,4),l=Be(e,5),p=Be(e,6),d=Be(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let m=r.dims[0],g=r.dims[1],y=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=g,w=0,b=0,S=Math.floor(y/t.numHeads);if(p&&d&&O.size(p.dims)&&O.size(d.dims)){if(p.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(p.dims[0]!==m||p.dims[1]!==t.numHeads||p.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==m||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');w=p.dims[2],b=p.dims[2]}else if(p&&O.size(p.dims)||d&&O.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(a&&O.size(a.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,_=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,_=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,_=a.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(i&&O.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=w+_,T=0;if(o&&O.size(o.dims)>0){T=8;let z=o.dims;throw z.length===1?z[0]===m?T=1:z[0]===3*m+2&&(T=3):z.length===2&&z[0]===m&&z[1]===$&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,C=y;if(n&&O.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(_!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=n.dims[2]}else{if(_!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');C=n.dims[1]*n.dims[3],k=!0}}let E=!1;if(o&&O.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(l&&O.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==m||l.dims[1]!==t.numHeads||l.dims[2]!==g||l.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:m,sequenceLength:g,pastSequenceLength:w,kvSequenceLength:_,totalSequenceLength:$,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:y,vHiddenSize:C,headSize:S,vHeadSize:Math.floor(C/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:E,passPastInKv:k,qkvFormat:v}},Th=e=>we({...e}),ji=we({perm:[0,2,1,3]}),Cl=(e,t,r,a,n,i,o)=>{let l=[a,n,i],p=O.size(l),d=[{type:12,data:p},{type:12,data:o},{type:12,data:i}],m=g=>{let y=j("qkv_with_bias",t.dataType,l),_=N("qkv",t.dataType,l),w=N("bias",r.dataType,l),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${g.registerUniforms(b).declareVariables(_,w,y)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:d}),getShaderSource:m},{inputs:[t,r],outputs:[-1]})[0]},pr=(e,t,r,a,n,i,o,l)=>{let p=i;if(o&&O.size(o.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return p=Cl(e,i,o,t,a,r*n,l),p=p.reshape([t,a,r,n]),r===1||a===1?p:e.compute(We(p,ji.perm),{inputs:[p],outputs:[-1]})[0]}else return i.dims.length===3&&(p=i.reshape([t,a,r,n])),r===1||a===1?p:e.compute(We(p,ji.perm),{inputs:[p],outputs:[-1]})[0]},Ch=(e,t)=>{let r=Tl(e.inputs,t),a=e.inputs[0],n=Be(e.inputs,1),i=Be(e.inputs,2),o=Be(e.inputs,3),l=Be(e.inputs,4),p=Be(e.inputs,5),d=Be(e.inputs,6),m=Be(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if((n==null?void 0:n.dims.length)===5)throw new Error("Packed KV is not implemented");let g=n&&i&&n.dims.length===4&&i.dims.length===4,y=pr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,o,0);if(g)return hr(e,y,n,i,l,void 0,d,m,p,r);if(!n||!i)throw new Error("key and value must be provided");let _=pr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,o,r.hiddenSize),w=pr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,o,2*r.hiddenSize);hr(e,y,_,w,l,void 0,d,m,p,r)}}),Il,El,zl,Al,Ta,Eh,zh,Ah=q(()=>{Y(),oe(),ke(),ue(),Il=e=>{if(!e||e.length<1)throw new Error("too few inputs")},El=(e,t)=>{let r=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),a=r.length),we({numOutputs:a,axis:t.axis,splitSizes:r})},zl=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${K("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Al=e=>{let t=e.length,r=[];for(let a=0;a<t;++a){let n=e[a].setByIndices("indices","input[global_idx]");t===1?r.push(n):a===0?r.push(`if (output_number == ${a}u) { ${n} }`):a===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${a}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Ta=(e,t)=>{let r=e[0].dims,a=O.size(r),n=e[0].dataType,i=O.normalizeAxis(t.axis,r.length),o=new Array(t.numOutputs),l=N("input",n,r.length),p=new Array(t.numOutputs),d=[],m=[],g=0,y=[{type:12,data:a}];for(let w=0;w<t.numOutputs;w++){g+=t.splitSizes[w],p[w]=g;let b=r.slice();b[i]=t.splitSizes[w],m.push(b),o[w]=j(`output${w}`,n,b.length),d.push({dims:m[w],dataType:e[0].dataType})}y.push({type:12,data:p},...Q(r,...m));let _=w=>`
  ${w.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",p.length).declareVariables(l,...o)}
  ${zl(p.length)}
  ${Al(o)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${K("uniforms.size_in_split_axis","output_number - 1u",p.length)};
      ${l.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:y})}},Eh=(e,t)=>{Il(e.inputs);let r=e.inputs.length===1?t:El(e.inputs,t);e.compute(Ta(e.inputs,r),{inputs:[0]})},zh=e=>{let t=e.axis,r=e.splitSizes,a=e.numOutputs<0?r.length:e.numOutputs;if(a!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return we({axis:t,numOutputs:a,splitSizes:r})}}),Ol,Rl,Ki,Oh,Hy=q(()=>{ke(),Fa(),Ih(),Ah(),$t(),Ol=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],a=e[1],n=e[2],i=e[3],o=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,p=r.dims[0],d=r.dims[1],m=r.dims.length===3?l?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],g=d,y=0,_=!a||a.dims.length===0,w=Math.floor(_?m/(t.numHeads+2*t.kvNumHeads):m/t.numHeads);_&&(m=w*t.numHeads);let b=i&&i.dims.length!==0,S=o&&o.dims.length!==0;if(b&&i.dims.length===4&&i.dims[0]===p&&i.dims[1]!==t.kvNumHeads&&i.dims[2]===t.kvNumHeads&&i.dims[3]===w)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&S){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=i.dims[2]}else if(b||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(a&&a.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(r.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');g=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');g=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');g=a.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let $=0,T=!1,k=t.kvNumHeads?w*t.kvNumHeads:m;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(g!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=n.dims[2]}else{if(g!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=n.dims[1]*n.dims[3],T=!0}}let C=e.length>4?e[5]:void 0;if(C&&C.dims.length!==1&&C.dims[0]!==p)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:p,sequenceLength:d,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:m,vHiddenSize:k,headSize:w,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:v}},Rl=we({perm:[0,2,1,3]}),Ki=(e,t,r)=>{let a=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(a=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),a=e.compute(We(a,Rl.perm),{inputs:[a],outputs:[-1]})[0]),a},Oh=(e,t)=>{var S;let r=Ol(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,i=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,l=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,p=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,m=r.kvNumHeads?r.kvNumHeads:r.numHeads,g=we({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,m*r.headSize,m*r.headSize]}),[y,_,w]=!n&&!i?e.compute(Ta([a],g),{inputs:[a],outputs:[-1,-1,-1]}):[a,n,i],b=pr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,y,void 0,0);hr(e,b,Ki(e,_,r),Ki(e,w,r),void 0,void 0,o,l,void 0,r,p,d)}}),Qi,Bl,Nl,Rh,Fy=q(()=>{Y(),oe(),$t(),ue(),Qi=(e,t,r,a,n,i,o,l)=>{let p=Se(i),d=p===1?"f32":`vec${p}f`,m=p===1?"vec2f":`mat2x${p}f`,g=n*o,y=64;g===1&&(y=256);let _=[n,o,i/p],w=[n,o,2],b=["rank","type","type"],S=[];S.push(...Q(_,w));let v=$=>{let T=N("x",t.dataType,3,p),k=N("scale",r.dataType,r.dims),C=N("bias",a.dataType,a.dims),E=j("output",1,3,2),z=[T,k,C,E];return`
  var<workgroup> workgroup_shared : array<${m}, ${y}>;
  const workgroup_size = ${y}u;
  ${$.declareVariables(...z)}
  ${$.mainStart(y)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${T.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${m}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${bt("workgroup_shared[0][0]",p)} / f32(hight * ${p});
      let squared_sum_final = ${bt("workgroup_shared[0][1]",p)} / f32(hight * ${p});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${p};${l};${y}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:w,dataType:1}],dispatchGroup:{x:g},programUniforms:S}),getShaderSource:v},{inputs:[t,r,a],outputs:[-1]})[0]},Bl=(e,t,r)=>{let a=t[0].dims,n=a,i=2,o=a[0],l=a[1],p=O.sizeFromDimension(a,i),d=Se(p),m=O.size(n)/d,g=Qi(e,t[0],t[1],t[2],o,p,l,r.epsilon),y=[o,l,p/d],_=[o,l],w=["type","none"],b=S=>{let v=N("x",t[0].dataType,y.length,d),$=N("scale_shift",1,_.length,2),T=j("output",t[0].dataType,y.length,d),k=[v,$,T];return`
  ${S.registerUniform("output_size","u32").declareVariables(...k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...Q(y,_,y)]}),getShaderSource:b},{inputs:[t[0],g]})},Nl=(e,t,r)=>{let a=t[0].dims,n=a,i=a[0],o=a[a.length-1],l=O.sizeFromDimension(a,1)/o,p=Se(o),d=O.size(n)/p,m=[{type:12,data:l},{type:12,data:Math.floor(o/p)}],g=["type","type"],y=!1,_=[0,a.length-1];for(let v=0;v<a.length-2;v++)y=y||a[v+1]!==1,_.push(v+1);y=y&&a[a.length-1]!==1;let w=y?e.compute(We(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},(v,$)=>a[_[$]])),b=Qi(e,w,t[1],t[2],i,l,o,r.epsilon),S=v=>{let $=Ee(t[0].dataType),T=p===1?"vec2f":`mat${p}x2f`,k=z=>{let B=z===0?"x":"y",W=p===1?"f32":`vec${p}f`;switch(p){case 1:return`${$}(${W}(scale.${B}))`;case 2:return`vec2<${$}>(${W}(scale[0].${B}, scale[1].${B}))`;case 4:return`vec4<${$}>(${W}(scale[0].${B}, scale[1].${B}, scale[2].${B}, scale[3].${B}))`;default:throw new Error(`Not supported compoents ${p}`)}},C=N("input",t[0].dataType,t[0].dims,p),E=j("output",t[0].dataType,n,p);return`
  @group(0) @binding(0) var<storage, read> input : array<${C.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${p}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:S},{inputs:[t[0],b]})},Rh=(e,t)=>{t.format==="NHWC"?Nl(e,e.inputs,t):Bl(e,e.inputs,t)}}),Ml,Dl,Bh,jy=q(()=>{Y(),oe(),ue(),Ml=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Dl=(e,t,r)=>{let a=t.simplified,n=e[0].dims,i=e[1],o=!a&&e[2],l=n,p=O.normalizeAxis(t.axis,n.length),d=O.sizeToDimension(n,p),m=O.sizeFromDimension(n,p),g=O.size(i.dims),y=o?O.size(o.dims):0;if(g!==m||o&&y!==m)throw new Error(`Size of X.shape()[axis:] == ${m}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${g} and bias size of ${y}`);let _=[];for(let C=0;C<n.length;++C)C<p?_.push(n[C]):_.push(1);let w=Se(m),b=["type","type"],S=[{type:12,data:d},{type:1,data:m},{type:12,data:Math.floor(m/w)},{type:1,data:t.epsilon}];o&&b.push("type");let v=r>1,$=r>2,T=C=>{let E=Ee(e[0].dataType),z=[N("x",e[0].dataType,e[0].dims,w),N("scale",i.dataType,i.dims,w)];o&&z.push(N("bias",o.dataType,o.dims,w)),z.push(j("output",e[0].dataType,l,w)),v&&z.push(j("mean_data_output",1,_)),$&&z.push(j("inv_std_output",1,_));let B=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${C.registerUniforms(B).declareVariables(...z)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ya("f32",w)};
    var mean_square_vector = ${ya("f32",w)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Lt(E,w,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${bt("mean_vector",w)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${bt("mean_square_vector",w)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Lt(E,w,"x[j + offset]")};
      let f32scale = ${Lt(E,w,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${Lt(E,w,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:l,dataType:e[0].dataType}];return v&&k.push({dims:_,dataType:1}),$&&k.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${w};${r};${a}`,inputDependencies:b},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:T}},Bh=(e,t)=>{Ml(e.inputs),e.compute(Dl(e.inputs,t,e.outputCount))}}),Pl,Nh,Ky=q(()=>{oe(),Xa(),Ja(),Pl=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Nh=e=>{Pl(e.inputs);let t=Gt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&a<8)e.compute(Za(e.inputs,{activation:""},t));else{let n=t[t.length-2],i=O.size(e.inputs[0].dims.slice(0,-2)),o=O.size(e.inputs[1].dims.slice(0,-2));if(i!==1&&n===1&&o===1){let l=e.inputs[0].reshape([1,i,a]),p=e.inputs[1].reshape([1,a,r]),d=[1,i,r],m=[l,p];e.compute(Kr(m,{activation:""},t,d),{inputs:m})}else e.compute(Kr(e.inputs,{activation:""},t))}}}),Ul,Wl,ql,Mh,Dh,Qy=q(()=>{Y(),oe(),ke(),ue(),Ul=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],a=r.dims.length;if(r.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),i=t.blockSize/8*t.bits,o=e[1];if(!O.areEqual(o.dims,[t.n,n,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(O.size(l)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let p=e[3].dims,d=t.bits>4?t.n*n:t.n*Math.floor((n+1)/2);if(O.size(p)!==d)throw new Error("zeroPoints input size error.")}},Wl=(e,t)=>{let r=e[0].dims,a=r.length,n=r[a-2],i=t.k,o=t.n,l=r.slice(0,a-2),p=O.size(l),d=e[1].dims[2]/4,m=e[0].dataType,g=Se(t.k),y=Se(d),_=Se(o),w=l.concat([n,o]),b=n>1&&o/_%2===0?2:1,S=O.size(w)/_/b,v=64,$=[],T=[p,n,i/g],k=O.convertShape(e[1].dims).slice();k.splice(-1,1,d/y),$.push(...Q(T)),$.push(...Q(k)),$.push(...Q(e[2].dims)),e.length===4&&$.push(...Q(O.convertShape(e[3].dims)));let C=[p,n,o/_];$.push(...Q(C));let E=z=>{let B=T.length,W=N("a",e[0].dataType,B,g),G=N("b",12,k.length,y),ee=N("scales",e[2].dataType,e[2].dims.length),ae=[W,G,ee],Z=e.length===4?N("zero_points",12,e[3].dims.length):void 0;Z&&ae.push(Z);let te=C.length,J=j("output",e[0].dataType,te,_),V=Ee(e[0].dataType),de=(()=>{switch(g){case 1:return`array<${V}, 8>`;case 2:return`mat4x2<${V}>`;case 4:return`mat2x4<${V}>`;default:throw new Error(`${g}-component is not supported.`)}})(),me=()=>{let M=`
          // reuse a data
            var input_offset = ${W.indicesToOffset(`${W.type.indices}(batch, row, word_offset)`)};
            var a_data: ${de};
            for (var j: u32 = 0; j < ${8/g}; j++) {
              a_data[j] = ${W.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let L=0;L<_*b;L++)M+=`
            b_value = ${y===1?`b${L}_data`:`b${L}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${de}(${Array.from({length:4},(le,ve)=>`${V}(b_value_lower[${ve}]), ${V}(b_value_upper[${ve}])`).join(", ")});
            b_dequantized_values = ${g===1?`${de}(${Array.from({length:8},(le,ve)=>`(b_quantized_values[${ve}] - ${Z?`zero_point${L}`:"zero_point"}) * scale${L}`).join(", ")});`:`(b_quantized_values - ${de}(${Array(8).fill(`${Z?`zero_point${L}`:"zero_point"}`).join(",")})) * scale${L};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(L/_)}]${_>1?`[${L%_}]`:""} += ${Array.from({length:8/g},(le,ve)=>`${g===1?`a_data[${ve}] * b_dequantized_values[${ve}]`:`dot(a_data[${ve}], b_dequantized_values[${ve}])`}`).join(" + ")};
          `;return M},F=()=>{let M=`
            var col_index = col * ${_};
            ${Z?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${V}(8);`}
            `;for(let L=0;L<_*b;L++)M+=`
            let scale${L} = ${ee.getByOffset("col_index * nBlocksPerCol + block")};
            ${Z?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${Z.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${L} = ${V}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return M},ge=()=>{let M=`col_index = col * ${_};`;for(let L=0;L<_*b;L++)M+=`
            let b${L}_data = ${G.getByIndices(`${G.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return M+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${de};
            var b_dequantized_values: ${de};`,M};return`
        var<workgroup> workgroup_shared: array<${J.type.value}, ${b*v}>;
        ${z.declareVariables(...ae,J)}
        ${z.mainStart([v,1,1])}
          let output_indices = ${J.offsetToIndices(`(global_idx / ${v}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/g};
            ${F()}
            for (var word: u32 = 0; word < ${d}; word += ${y}) {
              ${ge()}
              for (var i: u32 = 0; i < ${y}; i++) {
                ${me()}
                word_offset += ${8/g};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${J.type.value} = ${J.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${J.setByIndices(`${J.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${g};${y};${_};${b};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:w,dataType:m}],dispatchGroup:{x:S},programUniforms:$}),getShaderSource:E}},ql=(e,t)=>{let r=e[0].dims,a=r.length,n=r[a-2],i=t.k,o=t.n,l=r.slice(0,a-2),p=O.size(l),d=e[1].dims[2]/4,m=e[0].dataType,g=Se(t.k),y=Se(d),_=l.concat([n,o]),w=128,b=o%8===0?8:o%4===0?4:1,S=w/b,v=S*y*8,$=v/g,T=v/t.blockSize,k=O.size(_)/b,C=[],E=[p,n,i/g],z=O.convertShape(e[1].dims).slice();z.splice(-1,1,d/y),C.push(...Q(E)),C.push(...Q(z)),C.push(...Q(e[2].dims)),e.length===4&&C.push(...Q(O.convertShape(e[3].dims)));let B=[p,n,o];C.push(...Q(B));let W=G=>{let ee=E.length,ae=N("a",e[0].dataType,ee,g),Z=N("b",12,z.length,y),te=N("scales",e[2].dataType,e[2].dims.length),J=[ae,Z,te],V=e.length===4?N("zero_points",12,e[3].dims.length):void 0;V&&J.push(V);let de=B.length,me=j("output",e[0].dataType,de),F=Ee(e[0].dataType),ge=()=>{switch(g){case 1:return`
          let a_data0 = vec4<${F}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${F}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${F}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${F}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${g}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ae.type.value}, ${$}>;
        var<workgroup> inter_results: array<array<${me.type.value}, ${S}>, ${b}>;
        ${G.declareVariables(...J,me)}
        ${G.mainStart([S,b,1])}
          let output_indices = ${me.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${T} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${$};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${$}; a_offset += ${w})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ae.getByIndices(`${ae.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ae.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${T} + local_id.x;
            ${V?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${F}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${F}(8);`}
            let scale = ${te.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${Z.getByIndices(`${Z.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/g};
            for (var i: u32 = 0; i < ${y}; i++) {
              ${ge()}
              let b_value = ${y===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${F}>(${Array.from({length:4},(M,L)=>`${F}(b_value_lower[${L}]), ${F}(b_value_upper[${L}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${F}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(M,L)=>`${`dot(a_data${L}, b_dequantized_values[${L}])`}`).join(" + ")};
              word_offset += ${8/g};
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${me.type.value} = ${me.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${me.setByIndices(`${me.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${g};${y};${S};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:m}],dispatchGroup:{x:k},programUniforms:C}),getShaderSource:W}},Mh=(e,t)=>{Ul(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(ql(e.inputs,t)):e.compute(Wl(e.inputs,t))},Dh=e=>we(e)}),Ll,Vl,Gl,Hl,Fl,jl,Kl,Ql,Ph,Zy=q(()=>{Y(),oe(),ue(),Ll=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Vl=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
            k = i32(${e.indicesGet("indices",n)}) - ${K("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${K("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${K("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},Gl=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${K("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${K("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${K("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${K("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Hl=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${K("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${K("uniforms.x_shape",n,t)})) {
                  k = i32(${K("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${K("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Fl=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${K("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${K("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${K("uniforms.x_shape",n,t)})) {
                  k -= i32(${K("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${K("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},jl=(e,t,r)=>{switch(r.mode){case 0:return Vl(e,t,r.pads.length);case 1:return Gl(e,t,r.pads.length);case 2:return Hl(e,t,r.pads.length);case 3:return Fl(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Kl=(e,t)=>{let r=O.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,n=O.size(r),i=[{type:12,data:n},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&i.push({type:o?e[2].dataType:1,data:t.value}),i.push(...Q(e[0].dims,r));let l=["rank"],p=d=>{let m=j("output",e[0].dataType,r.length),g=N("x",e[0].dataType,a.length),y=g.type.value,_=jl(m,a.length,t),w=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&w.push({name:"constant_value",type:o?y:"f32"}),`
            ${d.registerUniforms(w).declareVariables(g,m)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${m.offsetToIndices("global_idx")};

            var value = ${y}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(r)/64)},programUniforms:i}),getShaderSource:p}},Ql=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,i=new Int32Array(2*n).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let p=0;p<l.length;p++)i[Number(l[p])]=Number(r[p]),i[Number(l[p])+n]=Number(r[p+l.length])}else r.forEach((l,p)=>i[Number(p)]=Number(l));let o=[];return i.forEach(l=>o.push(l)),{mode:t.mode,value:a,pads:o}}else return t},Ph=(e,t)=>{Ll(e.inputs);let r=Ql(e.inputs,t);e.compute(Kl(e.inputs,r),{inputs:[0]})}}),ar,Zi,Xi,Ji,Yi,Zl,Xl,ea,ta,Uh,Wh,ra,qh,Lh,ia,Vh,Gh,Hh,Fh,Xy=q(()=>{Ye(),Y(),oe(),ue(),ar=e=>{if(be.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Zi=(e,t,r)=>{let a=t.format==="NHWC",n=e.dims.slice();a&&n.splice(1,0,n.pop());let i=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),l=t.strides.slice(),p=i?t.dilations.slice():[],d=t.pads.slice();Fr.adjustPoolAttributes(r,n,o,l,p,d);let m=Fr.computePoolOutputShape(r,n,l,p,o,d,t.autoPad),g=Object.assign({},t);i?Object.assign(g,{kernelShape:o,strides:l,pads:d,dilations:p,cacheKey:t.cacheKey}):Object.assign(g,{kernelShape:o,strides:l,pads:d,cacheKey:t.cacheKey});let y=m.slice();return y.push(y.splice(1,1)[0]),[g,a?y:m]},Xi=(e,t)=>{let r=t.format==="NHWC",a=O.size(e),n=O.size(t.kernelShape),i=[{type:12,data:a},{type:12,data:n}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],p=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],m=t.pads[t.pads.length-1],g=!!(d+m);i.push({type:12,data:l},{type:12,data:p},{type:12,data:d},{type:12,data:m}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let y=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],w=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];y=!!(b+S),i.push({type:12,data:_},{type:12,data:w},{type:12,data:b},{type:12,data:S}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,o,!0,g,y]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=O.computeStrides(t.kernelShape);i.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let p=t.pads.reduce((d,m)=>d+m);return[i,o,!!p,!1,!1]}},Ji=(e,t,r,a,n,i,o,l,p,d,m,g)=>{let y=n.format==="NHWC",_=t.type.value,w=j("output",t.type.tensor,a);if(n.kernelShape.length<=2){let b="",S="",v="",$=r-(y?2:1);if(m?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${$}] < 0 || xIndices[${$}]
                      >= uniforms.x_shape[${$}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`,n.kernelShape.length===2){let T=r-(y?3:2);g?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(p).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var value = ${_}(${l});
              var pad = 0;
              ${S}
              ${b}
              ${v}
              ${o}

              output[global_idx] = value;
            }`}else{if(y)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=n.kernelShape.length,S=n.pads.length,v="";return d?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${i}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${i}
            `,`
            ${e.registerUniforms(p).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${_}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${K("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${K("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${K("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${K("uniforms.pads","j - 2u",S)};
                  ${v}
              }
              ${o}

              output[global_idx] = value;
            }`}},Yi=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Zl=e=>`${Yi(e)};${e.countIncludePad}`,Xl=e=>`${Yi(e)};${e.storageOrder};${e.dilations}`,ea=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ta=(e,t,r,a)=>{let[n,i]=Zi(t,a,r),o=N("x",t.dataType,t.dims.length),l=o.type.value,p="value += x_val;",d="";n.countIncludePad?d+=`value /= ${l}(uniforms.kernelSize);`:d+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[m,g,y,_,w]=Xi(i,n);m.push(...Q(t.dims,i));let b=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${y};${_};${w}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(i)/64)},programUniforms:m}),getShaderSource:S=>Ji(S,o,t.dims.length,i.length,n,p,d,0,g,y,_,w)}},Uh=e=>{let t=e.count_include_pad!==0,r=ea(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...r,cacheKey:""};return{...a,cacheKey:Zl(a)}},Wh=(e,t)=>{ar(e.inputs),e.compute(ta("AveragePool",e.inputs[0],!1,t))},ra={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},qh=e=>{let t=e.format;return{format:t,...ra,cacheKey:t}},Lh=(e,t)=>{ar(e.inputs),e.compute(ta("GlobalAveragePool",e.inputs[0],!0,t))},ia=(e,t,r,a)=>{let[n,i]=Zi(t,a,r),o=`
      value = max(x_val, value);
    `,l="",p=N("x",t.dataType,t.dims.length),d=["rank"],[m,g,y,_,w]=Xi(i,n);return m.push(...Q(t.dims,i)),{name:e,shaderCache:{hint:`${a.cacheKey};${y};${_};${w}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(i)/64)},programUniforms:m}),getShaderSource:b=>Ji(b,p,t.dims.length,i.length,n,o,l,t.dataType===10?-65504:-1e5,g,y,_,w)}},Vh=(e,t)=>{ar(e.inputs),e.compute(ia("MaxPool",e.inputs[0],!1,t))},Gh=e=>{let t=e.storage_order,r=e.dilations,a=ea(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...a,cacheKey:""};return{...n,cacheKey:Xl(n)}},Hh=e=>{let t=e.format;return{format:t,...ra,cacheKey:t}},Fh=(e,t)=>{ar(e.inputs),e.compute(ia("GlobalMaxPool",e.inputs[0],!0,t))}}),Jl,Yl,jh,Kh,Jy=q(()=>{Y(),oe(),ke(),ue(),Jl=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,a)=>r===e[2].dims[a]).reduce((r,a)=>r&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,i)=>i===t.axis||n===e[0].dims[i]).reduce((n,i)=>n&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/a)||t.blockSize>Math.ceil(r/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Yl=(e,t)=>{let r=O.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,n=a===3,i=e[0].dims,o=e[1].dataType,l=O.size(i),p=a===3||a===2,d=p?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,m=e[1].dims,g=e.length>2?e[2]:void 0,y=g?p?[Math.ceil(O.size(g.dims)/4)]:g.dims:void 0,_=m.length===0||m.length===1&&m[0]===1,w=_===!1&&m.length===1,b=Se(l),S=_&&(!p||b===4),v=S?b:1,$=S&&!p?b:1,T=N("input",p?12:a,d.length,$),k=N("scale",o,m.length),C=g?N("zero_point",p?12:a,y.length):void 0,E=j("output",o,i.length,v),z=[T,k];C&&z.push(C);let B=[d,m];g&&B.push(y);let W=[{type:12,data:l/v},{type:12,data:r},{type:12,data:t.blockSize},...Q(...B,i)],G=ee=>{let ae=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ee.registerUniforms(ae).declareVariables(...z,E)}
      ${ee.mainStart()}
          ${ee.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${E.offsetToIndices("global_idx")};

          // Set input x
          ${p?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${k.getByOffset("0")}`:w?`
            let scale_index = ${E.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${C?_?p?`
                let zero_point_input = ${C.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${C.getByOffset("0")}`:w?p?`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${C.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${C.getByOffset("zero_point_index")};`:p?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${C.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${C.getByIndices("scale_indices")};`:`let zero_point_value = ${p?n?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${E.setByOffset("global_idx",`${E.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:C?["rank","rank","rank"]:["rank","rank"]},getShaderSource:G,getRunData:()=>({outputs:[{dims:i,dataType:o}],dispatchGroup:{x:Math.ceil(l/v/64),y:1,z:1},programUniforms:W})}},jh=(e,t)=>{Jl(e.inputs,t),e.compute(Yl(e.inputs,t))},Kh=e=>we({axis:e.axis,blockSize:e.blockSize})}),ed,td,Qh,Yy=q(()=>{Ye(),Y(),ue(),ed=(e,t,r)=>{let a=e===t,n=e<t&&r<0,i=e>t&&r>0;if(a||n||i)throw new Error("Range these inputs' contents are invalid.")},td=(e,t,r,a)=>{let n=Math.abs(Math.ceil((t-e)/r)),i=[n],o=n,l=[{type:12,data:o},{type:a,data:e},{type:a,data:r},...Q(i)],p=d=>{let m=j("output",a,i.length),g=m.type.value,y=[{name:"outputSize",type:"u32"},{name:"start",type:g},{name:"delta",type:g}];return`
        ${d.registerUniforms(y).declareVariables(m)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${g}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:p,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l})}},Qh=e=>{let t=0,r=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),be.webgpu.validateInputContent&&ed(t,r,a),e.compute(td(t,r,a,e.inputs[0].dataType),{inputs:[]})}}),rd,id,Zh,Xh,e0=q(()=>{Y(),oe(),ke(),ue(),rd=(e,t,r,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,i=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${r}));`:`
              ${n}bitcast<${a}>(oldValue) + (${r})${i}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${i}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${r}));`:`${n}min(bitcast<${a}>(oldValue), (${r}))${i}`;case"mul":return`${n}(bitcast<${a}>(oldValue) * (${r}))${i}`;default:throw new Error(`Reduction ${e} is not supported.`)}},id=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r,i=1,o=Math.ceil(O.size(a)/i),l=a[a.length-1],p=O.sizeFromDimension(r,l),d=[{type:12,data:o},{type:12,data:l},{type:12,data:p},...Q(e[1].dims,e[2].dims,n)],m=g=>{let y=N("indices",e[1].dataType,e[1].dims.length),_=N("updates",e[2].dataType,e[2].dims.length,i),w=t.reduction!=="none"&&t.reduction!==""?Cp("output",e[0].dataType,n.length):j("output",e[0].dataType,n.length,i);return`
      ${g.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(y,_,w)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    let n = ${O.size(a)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${rd(t.reduction,"output[data_offset + i]","value",w.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:d}),getShaderSource:m}},Zh=e=>we({reduction:e.reduction}),Xh=(e,t)=>{e.compute(id(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),ad,nd,sd,aa,od,ud,ld,dd,pd,cd,hd,fd,na,md,gd,yd,_d,wd,Jh,Yh,t0=q(()=>{Y(),oe(),ke(),ue(),ad=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},nd=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(r).fill(1);return t.forEach((n,i)=>a[n]=e[i]),a},sd=(e,t,r,a,n,i)=>{let[o,l,p]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(m=>i.push(m));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0){if(e[l].getFloat32Array().forEach(m=>a.push(m)),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");ad(a,t),t.axes.length>0&&nd(a,t.axes,d).forEach((m,g)=>a[g]=m)}if(p>0&&e.length>p&&e[p].dims.length===1&&e[p].dims[0]>0&&(e[p].getBigInt64Array().forEach(m=>n.push(Number(m))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof n<"u"&&a.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},aa=(e,t,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,od=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${aa("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${aa("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",ud=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",ld=(e,t,r)=>{let a=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?a:e.slice();return t.length>0?(t.forEach((i,o)=>{a[i]=n[o],a[o+r]=n[t.length+o]}),a):n},dd=(e,t,r,a)=>{let n=[];if(r.length>0)if(a.length>0){if(e.forEach(i=>n.push(i)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((i,o)=>n[i]=r[o])}else r.forEach(i=>n.push(i));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((i,o)=>Math.round(i*t[o]))}return n},pd=(e,t,r)=>{let a=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>t[i]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>t[i]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(i=>t[i]=a),r.axes.forEach(i=>n[i]=Math.round(e[i]*t[i]))):(t.fill(a,0,t.length),n.forEach((i,o)=>n[o]=Math.round(i*t[o]))),n},cd=(e,t,r,a,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${K("uniforms.scales","i",a)};
        var roi_low = ${K("uniforms.roi","i",n)};
        var roi_hi = ${K("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${K("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${K("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,hd=(e,t,r,a,n,i,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${K("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${K("uniforms.roi","i",i)};
          var roi_hi = ${K("uniforms.roi",`i + ${r.length}`,i)};
          var input_shape_i = ${K("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${K("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,fd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${K("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,na=(e,t,r,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",md=(e,t,r,a,n)=>{let[i,o,l,p]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${r[l]} - 1))`)};
      ${na(e,p,i,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${o}];
      var col:${d} = originalIndices[${l}];
      ${a?`if (row < 0 || row > (${r[o]} - 1) || col < 0 || col > (${r[l]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[o]} - 1));
      col = max(0, min(col, ${r[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${i}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},gd=(e,t,r,a,n,i,o,l,p,d)=>{let m=r.length===2,[g,y]=m?[0,1]:[2,3],_=e.type.value,w=b=>{let S=b===g?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[b]},
        ${a[b]}, ${r[b]}, ${i[b]}, ${i[b]} + ${r.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${p};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${_} = originalIdx + ${_}(i);
          if (${S} < 0 || ${S} >= ${r[b]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${p};`:`${S} = max(0, min(${S}, ${r[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${S})`)};
          data[i + 1] = ${b===g?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${w(g)};
    ${w(y)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},yd=(e,t,r,a,n)=>{let[i,o,l,p,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],m=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${m} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${r[l]} - 1))`)};
      ${e.indicesSet("input_indices",p,`max(0, min(width, ${r[p]} - 1))`)};
      ${na(e,d,i,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${m} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${m} = originalIndices[${o}];
      var height:${m} = originalIndices[${l}];
      var width:${m} = originalIndices[${p}];
      ${a?`if (depth < 0 || depth > (${r[o]} - 1) || height < 0 || height > (${r[l]} - 1) || width < 0 || (width > ${r[p]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[o]} - 1));
      height = max(0, min(height, ${r[l]} - 1));
      width = max(0, min(width, ${r[p]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${i}])`:"0"};

      var x111: ${m} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${m} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${m} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${m} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${m} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${m} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${m} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${m} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${m} = abs(depth - ${m}(depth1));
      var dx2: ${m} = abs(${m}(depth2) - depth);
      var dy1: ${m} = abs(height - ${m}(height1));
      var dy2: ${m} = abs(${m}(height2) - height);
      var dz1: ${m} = abs(width - ${m}(width1));
      var dz2: ${m} = abs(${m}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},_d=(e,t,r,a,n,i)=>{let o=e.dims,l=ld(i,t.axes,o.length),p=dd(o,a,n,t.axes),d=a.slice();a.length===0&&(d=o.map(($,T)=>$===0?1:p[T]/$),t.keepAspectRatioPolicy!=="stretch"&&(p=pd(o,d,t)));let m=j("output",e.dataType,p.length),g=N("input",e.dataType,o.length),y=O.size(p),_=o.length===p.length&&o.every(($,T)=>$===p[T]),w=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,S=g.type.value,v=$=>`
      ${_?"":`
      ${od(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${fd(g,o)};
              ${ud(t.nearestMode,r,S)};
              ${hd(g,m,o,p,d.length,l.length,w)};
              `;case"linear":return`
              ${cd(m,o,p,d.length,l.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${md(g,m,o,w,b)}`;if(o.length===3||o.length===5)return`${yd(g,m,o,w,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${gd(g,m,o,p,d,l,t.cubicCoeffA,w,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${$.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",l.length).declareVariables(g,m)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${m.offsetToIndices("global_idx")};
        var input_indices: ${g.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${g.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${o.length===2||o.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${l.length>0?l:""}|${_}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:p,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},{type:1,data:d},{type:1,data:l},...Q(o,p)]})}},wd=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Jh=(e,t)=>{let r=[],a=[],n=[],i=wd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");sd(e.inputs,t,i,r,a,n),e.compute(_d(e.inputs[0],t,i,r,a,n),{inputs:[0]})},Yh=e=>{let t=e.antialias,r=e.axes,a=e.coordinateTransformMode,n=e.cubicCoeffA,i=e.excludeOutside!==0,o=e.extrapolationValue,l=e.keepAspectRatioPolicy,p=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return we({antialias:t,axes:r,coordinateTransformMode:a,cubicCoeffA:n,excludeOutside:i,extrapolationValue:o,keepAspectRatioPolicy:l,mode:p,nearestMode:d})}}),bd,$d,ef,r0=q(()=>{Y(),oe(),ke(),ue(),bd=(e,t)=>{let[r,a,n,i]=e,{numHeads:o,rotaryEmbeddingDim:l}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!O.areEqual(a.dims,[])&&!O.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!O.areEqual(n.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let p=r.dims[0],d=r.dims[r.dims.length-2],m=n.dims[0],g=O.sizeFromDimension(r.dims,1)/d,y=l===0?n.dims[1]*2:g/o;if(l>y)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(p!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(d!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(y/2!==n.dims[1]&&l/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(d>m)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},$d=(e,t)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:n,scale:i}=t,o=e[0].dims[0],l=O.sizeFromDimension(e[0].dims,1),p=e[0].dims[e[0].dims.length-2],d=l/p,m=e[2].dims[1],g=n===0?m*2:d/a,y=new Array(o,p,d/g,g-m),_=O.computeStrides(y),w=[{type:1,data:i},{type:12,data:y},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[l,d,g,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,g,p*g,1]}):[],...Q(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=S=>{let v=N("input",e[0].dataType,e[0].dims.length),$=N("position_ids",e[1].dataType,e[1].dims.length),T=N("cos_cache",e[2].dataType,e[2].dims.length),k=N("sin_cache",e[3].dataType,e[3].dims.length),C=j("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:y.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${S.declareVariables(v,$,T,k,C)}

        ${S.mainStart(Ht)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${$.broadcastedIndicesToOffset("bsnh.xy",j("",$.type.tensor,2))};
            let position_id =
                u32(${$.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${C.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${C.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${C.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:we({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(y)/Ht)},programUniforms:w})}},ef=(e,t)=>{bd(e.inputs,t),e.compute($d(e.inputs,t))}}),vd,xd,tf,i0=q(()=>{Y(),oe(),ue(),vd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],a=e[2];if(t.dataType!==r.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],i=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},xd=(e,t,r,a)=>{let n=t.simplified,i=e[0].dims,o=O.size(i),l=i,p=o,d=i.slice(-1)[0],m=a?i.slice(0,-1).concat(1):[],g=!n&&e.length>3,y=e.length>4,_=a&&r>1,w=a&&r>2,b=r>3,S=64,v=Se(d),$=[{type:12,data:p},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],T=C=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[N("x",e[0].dataType,e[0].dims,v),N("skip",e[1].dataType,e[1].dims,v),N("gamma",e[2].dataType,e[2].dims,v)];g&&z.push(N("beta",e[3].dataType,e[3].dims,v)),y&&z.push(N("bias",e[4].dataType,e[4].dims,v)),z.push(j("output",e[0].dataType,l,v)),_&&z.push(j("mean_output",1,m)),w&&z.push(j("inv_std_output",1,m)),b&&z.push(j("input_skip_bias_sum",e[0].dataType,l,v));let B=Ee(e[0].dataType),W=Ee(1,v);return`

      ${C.registerUniforms(E).declareVariables(...z)}
      var<workgroup> sum_shared : array<${W}, ${S}>;
      var<workgroup> sum_squared_shared : array<${W}, ${S}>;

      ${C.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${y?"bias[offset1d + i]":B+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Lt(B,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${bt("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${bt("square_sum",v)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${w?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${B}(mean)`}) *
            ${B}(inv_std_dev) * gamma[offset1d + i]
            ${g?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:l,dataType:e[0].dataType}];return r>1&&k.push({dims:m,dataType:1}),r>2&&k.push({dims:m,dataType:1}),r>3&&k.push({dims:i,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${_};${w};${b}`,inputDependencies:e.map((C,E)=>"type")},getShaderSource:T,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(p/d)},programUniforms:$})}},tf=(e,t)=>{vd(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(xd(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Sd,nr,kd,sa,Td,Cd,rf,af,a0=q(()=>{Y(),oe(),ke(),ue(),Sd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},nr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>r.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>r.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},kd=(e,t)=>{if(e.length>1){let r=nr(e,1),a=nr(e,2),n=nr(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),we({starts:r,ends:a,axes:n})}else return t},sa=(e,t,r,a,n)=>{let i=e;return e<0&&(i+=r[a[t]]),n[t]<0?Math.max(0,Math.min(i,r[a[t]]-1)):Math.max(0,Math.min(i,r[a[t]]))},Td=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${K("uniforms.input_shape","i",r.length)};
            let steps_i = ${K("uniforms.steps","i",r.length)};
            let signs_i = ${K("uniforms.signs","i",r.length)};
            let starts_i = ${K("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Cd=(e,t)=>{let r=e[0].dims,a=O.size(r),n=t.axes.length>0?O.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],i=nr(e,4);i.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(n.length).fill(1));let o=t.starts.map((v,$)=>sa(v,$,r,n,i)),l=t.ends.map((v,$)=>sa(v,$,r,n,i));if(n.length!==o.length||n.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let v=0;v<r.length;++v)n.includes(v)||(o.splice(v,0,0),l.splice(v,0,r[v]),i.splice(v,0,1));let p=i.map(v=>Math.sign(v));i.forEach((v,$,T)=>{if(v<0){let k=(l[$]-o[$])/v,C=o[$],E=C+k*i[$];o[$]=E,l[$]=C,T[$]=-v}});let d=r.slice(0);n.forEach((v,$)=>{d[v]=Math.ceil((l[v]-o[v])/i[v])});let m={dims:d,dataType:e[0].dataType},g=j("output",e[0].dataType,d.length),y=N("input",e[0].dataType,e[0].dims.length),_=O.size(d),w=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:p.length},{name:"steps",type:"u32",length:i.length}],b=[{type:12,data:_},{type:12,data:o},{type:6,data:p},{type:12,data:i},...Q(e[0].dims,d)],S=v=>`
      ${v.registerUniforms(w).declareVariables(y,g)}
        ${Td(y,g,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${g.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${g.setByOffset("global_idx",y.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${p.length}_${o.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[m],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:b})}},rf=(e,t)=>{Sd(e.inputs,t);let r=kd(e.inputs,t);e.compute(Cd(e.inputs,r),{inputs:[0]})},af=e=>{let t=e.starts,r=e.ends,a=e.axes;return we({starts:t,ends:r,axes:a})}}),Id,Ed,nf,sf,n0=q(()=>{Y(),oe(),ke(),$t(),ue(),Id=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Ed=(e,t)=>{let r=e.inputs[0],a=r.dims,n=O.size(a),i=a.length,o=O.normalizeAxis(t.axis,i),l=o<a.length-1,p,d=[];l?(d=Array.from({length:i},(z,B)=>B),d[o]=i-1,d[i-1]=o,p=e.compute(We(r,d),{inputs:[r],outputs:[-1]})[0]):p=r;let m=p.dims,g=m[i-1],y=n/g,_=Se(g),w=g/_,b=64;y===1&&(b=256);let S=(z,B)=>B===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:B===2?`max(${z}.x, ${z}.y)`:B===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,v=N("x",p.dataType,p.dims,_),$=j("result",p.dataType,p.dims,_),T=v.type.value,k=Ee(p.dataType)==="f32"?`var threadMax = ${T}(-3.402823e+38f);`:`var threadMax = ${T}(-65504.0h);`,C=z=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${z.registerUniform("packedCols","i32").declareVariables(v,$)}
      ${z.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${T}(${S("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${T}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${T}(${bt("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,E=e.compute({name:"Softmax",shaderCache:{hint:`${_};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:m,dataType:p.dataType}],dispatchGroup:{x:y},programUniforms:[{type:6,data:w}]}),getShaderSource:C},{inputs:[p],outputs:[l?-1:0]})[0];l&&e.compute(We(E,d),{inputs:[E]})},nf=(e,t)=>{Id(e.inputs),Ed(e,t)},sf=e=>we({axis:e.axis})}),oa,zd,Ad,Od,of,s0=q(()=>{Y(),oe(),ue(),oa=e=>Array.from(e.getBigInt64Array(),Number),zd=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(oa(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Ad=(e,t)=>{let r=[];for(let a=0;a<e.length;++a)r.push(e[a]*t[a]);return r},Od=(e,t)=>{let r=e[0].dims,a=t??oa(e[1]),n=Ad(r,a),i=O.size(n),o=e[0].dataType,l=N("input",o,r.length),p=j("output",o,n.length),d=m=>`
      const inputShape = ${l.indices(...r)};
      ${m.registerUniform("output_size","u32").declareVariables(l,p)}
      ${m.mainStart()}
      ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${p.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${p.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${p.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...Q(e[0].dims,n)]}),getShaderSource:d}},of=e=>{zd(e.inputs),e.compute(Od(e.inputs),{inputs:[0]})}}),Rd,Bd,uf,o0=q(()=>{Y(),oe(),ue(),Rd=(e,t,r,a,n)=>{let i=j("output_data",n,r.length,4),o=N("a_data",t[1].dataType,t[1].dims.length,4),l=N("b_data",t[2].dataType,t[2].dims.length,4),p=N("c_data",t[0].dataType,t[0].dims.length,4),d,m=(g,y,_)=>`select(${y}, ${g}, ${_})`;if(!a)d=i.setByOffset("global_idx",m(o.getByOffset("global_idx"),l.getByOffset("global_idx"),p.getByOffset("global_idx")));else{let g=(y,_,w="")=>{let b=`a_data[index_a${_}][component_a${_}]`,S=`b_data[index_b${_}][component_b${_}]`,v=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${i.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${o.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let offset_b${_} = ${l.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let offset_c${_} = ${p.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${y}[${_}] = ${w}(${m(b,S,v)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${g("data",0,"u32")}
            ${g("data",1,"u32")}
            ${g("data",2,"u32")}
            ${g("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${g("output_data[global_idx]",0)}
            ${g("output_data[global_idx]",1)}
            ${g("output_data[global_idx]",2)}
            ${g("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(p,o,l,i)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Bd=e=>{let t=e[1].dims,r=e[2].dims,a=e[0].dims,n=e[1].dataType,i=!(O.areEqual(t,r)&&O.areEqual(r,a)),o=t,l=O.size(t);if(i){let d=Gt.calcShape(Gt.calcShape(t,r,!1),a,!1);if(!d)throw new Error("Can't perform where op on the given tensors");o=d,l=O.size(o)}let p=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Rd(d,e,o,i,n),getRunData:()=>({outputs:[{dims:o,dataType:n}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:p},...Q(a,t,r,o)]})}},uf=e=>{e.compute(Bd(e.inputs))}}),lf,u0=q(()=>{$y(),Fa(),vy(),xy(),Sy(),ky(),Ty(),Ay(),Ry(),By(),Ny(),My(),Dy(),Py(),Uy(),Wy(),qy(),Ly(),Vy(),Gy(),Hy(),Fy(),jy(),Ky(),Qy(),Ih(),Zy(),Xy(),Jy(),Yy(),e0(),Ha(),t0(),r0(),i0(),a0(),n0(),Ah(),s0(),$t(),ja(),o0(),lf=new Map([["Abs",[rc]],["Acos",[ic]],["Acosh",[ac]],["Add",[Pc]],["ArgMax",[Jp,wa]],["ArgMin",[Xp,wa]],["Asin",[nc]],["Asinh",[sc]],["Atan",[oc]],["Atanh",[uc]],["Attention",[Yp]],["AveragePool",[Wh,Uh]],["BatchNormalization",[ec]],["BiasAdd",[tc]],["BiasSplitGelu",[Dc]],["Cast",[dc,lc]],["Ceil",[cc]],["Clip",[pc]],["Concat",[Kc,Qc]],["Conv",[ka,Sa]],["ConvTranspose",[nh,ah]],["Cos",[hc]],["Cosh",[fc]],["CumSum",[sh,oh]],["DepthToSpace",[uh,lh]],["DequantizeLinear",[jh,Kh]],["Div",[Uc]],["Einsum",[dh,ph]],["Elu",[mc,dr]],["Equal",[Wc]],["Erf",[gc]],["Exp",[yc]],["Expand",[ch]],["FastGelu",[hh]],["Floor",[_c]],["FusedConv",[ka,Sa]],["Gather",[mh,fh]],["GatherElements",[$h,bh]],["GatherBlockQuantized",[_h,wh]],["GatherND",[gh,yh]],["Gelu",[wc]],["Gemm",[xh,vh]],["GlobalAveragePool",[Lh,qh]],["GlobalMaxPool",[Fh,Hh]],["Greater",[Gc]],["GreaterOrEqual",[Fc]],["GridSample",[Sh,kh]],["GroupQueryAttention",[Oh]],["HardSigmoid",[Cc,Tc]],["InstanceNormalization",[Rh]],["LayerNormalization",[Bh]],["LeakyRelu",[bc,dr]],["Less",[Hc]],["LessOrEqual",[jc]],["Log",[Nc]],["MatMul",[Nh]],["MatMulNBits",[Mh,Dh]],["MaxPool",[Vh,Gh]],["Mul",[qc]],["MultiHeadAttention",[Ch,Th]],["Neg",[vc]],["Not",[$c]],["Pad",[Ph]],["Pow",[Lc]],["QuickGelu",[Mc,dr]],["Range",[Qh]],["Reciprocal",[xc]],["ReduceMin",[Fp]],["ReduceMean",[qp]],["ReduceMax",[Hp]],["ReduceSum",[Kp]],["ReduceProd",[jp]],["ReduceL1",[Lp]],["ReduceL2",[Vp]],["ReduceLogSum",[Zp]],["ReduceLogSumExp",[Gp]],["ReduceSumSquare",[Qp]],["Relu",[Sc]],["Resize",[Jh,Yh]],["RotaryEmbedding",[ef]],["ScatterND",[Xh,Zh]],["Sigmoid",[kc]],["Sin",[Ic]],["Sinh",[Ec]],["Slice",[rf,af]],["SkipLayerNormalization",[tf]],["Split",[Eh,zh]],["Sqrt",[zc]],["Softmax",[nf,sf]],["Sub",[Vc]],["Tan",[Ac]],["Tanh",[Oc]],["ThresholdedRelu",[Bc,dr]],["Tile",[of]],["Transpose",[Ep,zp]],["Where",[uf]]])}),df,l0=q(()=>{Ye(),dt(),ue(),df=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,a,n){at(e.programInfo.name);let i=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let d of t)l.push({binding:l.length,resource:{buffer:d.buffer}});for(let d of r)l.push({binding:l.length,resource:{buffer:d.buffer}});n&&l.push({binding:l.length,resource:n});let p=i.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:p,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}o.setPipeline(e.computePipeline),o.setBindGroup(0,p),o.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Je(e.programInfo.name)}dispose(){}build(e,t){at(e.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(d=>{r.features.has(d.feature)&&a.push(`enable ${d.extension};`)});let n=Ip(t,this.backend.device.limits),i=e.getShaderSource(n),o=`${a.join(`
`)}
${n.additionalImplementations}
${i}`,l=r.createShaderModule({code:o,label:e.name});pe("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let p=r.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return Je(e.name),{programInfo:e,computePipeline:p,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&a<=n)return[t,r,a];let i=t*r*a,o=Math.ceil(Math.sqrt(i));if(o>n){if(o=Math.ceil(Math.cbrt(i)),o>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),Nd,Md,Dd,Pd,pf,d0=q(()=>{Ye(),Y(),dt(),vp(),wy(),u0(),l0(),Nd=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let a=0;a<e.length;++a){let n=e[a].dataType;switch(t[a]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let i=e[a].dims.length;r.push(`${n};${i}`);break}case"dims":{let i=e[a].dims.join(",");r.push(`${n};${i}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return r.join("|")},Md=(e,t,r)=>{var n,i;let a=e.name;return(n=e.shaderCache)!=null&&n.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+r+`:${Nd(t,((i=e.shaderCache)==null?void 0:i.inputDependencies)??new Array(t.length).fill("dims"))}`,a},Dd=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Pd=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},pf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=i=>t.features.has(i)&&r.push(i)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups")&&n("subgroups-f16"),this.device=await t.requestDevice(a),this.deviceInfo=new Pd(this.device),this.adapterInfo=new Dd(t.info||await t.requestAdapterInfo()),this.gpuDataManager=xp(this),this.programManager=new df(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,qa(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;at(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var a;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let i=r[n],o=i.kernelId,l=this.kernels.get(o),p=l.kernelType,d=l.kernelName,m=i.programName,g=i.inputTensorViews,y=i.outputTensorViews,_=t[n*2],w=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let b=Number(_-this.queryTimeBase),S=Number(w-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((a=this.env.webgpu.profiling)!=null&&a.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:g.map(v=>({dims:v.dims,dataType:zt(v.dataType)})),outputsMetadata:y.map(v=>({dims:v.dims,dataType:zt(v.dataType)})),kernelId:o,kernelType:p,kernelName:d,programName:m,startTime:b,endTime:S});else{let v="";g.forEach((T,k)=>{v+=`input[${k}]: [${T.dims}] | ${zt(T.dataType)}, `});let $="";y.forEach((T,k)=>{$+=`output[${k}]: [${T.dims}] | ${zt(T.dataType)}, `}),console.log(`[profiling] kernel "${o}|${p}|${d}|${m}" ${v}${$}execution time: ${S-b} ns`)}Vr("GPU",`${m}::${_}::${w}`)}e.unmap(),this.pendingQueries.delete(e)}),Je()}run(e,t,r,a,n,i){at(e.name);let o=[];for(let $=0;$<t.length;++$){let T=t[$].data;if(T===0)continue;let k=this.gpuDataManager.get(T);if(!k)throw new Error(`no GPU data for input: ${T}`);o.push(k)}let{outputs:l,dispatchGroup:p,programUniforms:d}=e.getRunData(t),m=r.length===0?l.map(($,T)=>T):r;if(m.length!==l.length)throw new Error(`Output size ${m.length} must be equal to ${l.length}.`);let g=[],y=[];for(let $=0;$<l.length;++$){if(!Number.isInteger(m[$])||m[$]<-3||m[$]>=i)throw new Error(`Invalid output index: ${m[$]}`);if(m[$]===-3)continue;let T=m[$]===-1,k=m[$]===-2,C=T||k?n(l[$].dataType,l[$].dims):a(m[$],l[$].dataType,l[$].dims);if(g.push(C),C.data===0)continue;let E=this.gpuDataManager.get(C.data);if(!E)throw new Error(`no GPU data for output: ${C.data}`);if(T&&this.temporaryData.push(E),k){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(E)}y.push(E)}if(o.length!==t.length||y.length!==g.length){if(y.length===0)return Je(e.name),g;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(d){let $=0,T=[];d.forEach(z=>{let B=typeof z.data=="number"?[z.data]:z.data;if(B.length===0)return;let W=z.type===10?2:4,G,ee;z.type===10?(ee=B.length>4?16:B.length>2?8:B.length*W,G=B.length>4?16:W*B.length):(ee=B.length<=2?B.length*W:16,G=16),$=Math.ceil($/ee)*ee,T.push($);let ae=z.type===10?8:4;$+=B.length>4?Math.ceil(B.length/ae)*G:B.length*W});let k=16;$=Math.ceil($/k)*k;let C=new ArrayBuffer($);d.forEach((z,B)=>{let W=T[B],G=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(C,W,G.length).set(G);else if(z.type===12)new Uint32Array(C,W,G.length).set(G);else if(z.type===10)new Uint16Array(C,W,G.length).set(G);else if(z.type===1)new Float32Array(C,W,G.length).set(G);else throw new Error(`Unsupported uniform type: ${zt(z.type)}`)});let E=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,C,0,$),this.gpuDataManager.release(E.id),_={offset:0,size:$,buffer:E.buffer}}let w=this.programManager.normalizeDispatchGroupSize(p),b=w[1]===1&&w[2]===1,S=Md(e,t,b),v=this.programManager.getArtifact(S);if(v||(v=this.programManager.build(e,w),this.programManager.setArtifact(S,v),pe("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let $=0;$<d.length;$++){let T=d[$],k=T.type,C=typeof T.data=="number"?1:T.data.length,[E,z]=v.uniformVariablesInfo[$];if(k!==E||C!==z)throw new Error(`Uniform variable ${$} mismatch: expect type ${E} with size ${z}, got type ${k} with size ${C} in program "${v.programInfo.name}".`)}}if(pe("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${w[0]}x${w[1]}x${w[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:g};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(v,o,y,w,_),Je(e.name),g}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,a){let n=lf.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let i={kernelType:e,kernelName:a,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,i)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let n=a.kernelType,i=a.kernelName,o=a.kernelEntry,l=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${i}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),pe("info",()=>`[WebGPU] Start to run kernel "[${n}] ${i}"...`);let p=this.env.debug;this.temporaryData=[];try{return p&&this.device.pushErrorScope("validation"),o(t,l[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${i}" failed. ${d}`)),1}finally{p&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${i}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,a){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let i=n.get(t),o=this.gpuDataManager.registerExternalBuffer(r,a,i);return n.set(t,[o,r]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let a=await ga(this,e,t);return La(a.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){pe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){pe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){pe("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let a=0;a<r;a++){let n=this.getComputePassEncoder(),i=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Ud,ua,Wd,la,da,pa,qd,cf,p0=q(()=>{dt(),Ud=1,ua=()=>Ud++,Wd=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),la=(e,t)=>{let r=Wd.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((a,n)=>a*n)*r/8):0},da=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return la(this.dataType,this.tensorShape)}destroy(){pe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((a,n)=>a===r[n])}},pa=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,a){let n=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==la(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let i=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,i,!0,!0),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else pe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},qd=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=ua();return this.tensorTrackersById.set(e,new pa(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,a,n){pe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${a}, copyOld: ${n}}`);let i=this.tensorTrackersById.get(t);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(e,r,a,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){pe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,a){let n=this.getMLContext(e),i=ua(),o=new da({sessionId:e,context:n,tensor:t,dataType:r,shape:a});return this.tensorTrackersById.set(i,new pa(this,o)),this.externalTensors.add(o),i}async getCachedTensor(e,t,r,a,n,i){let o=this.getMLContext(e);for(let[p,d]of this.freeTensors.entries())if(d.canReuseTensor(o,t,r)){pe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${r}}`);let m=this.freeTensors.splice(p,1)[0];return m.sessionId=e,m}pe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${r}}`);let l=await o.createTensor({dataType:t,shape:r,dimensions:r,usage:a,writable:n,readable:i});return new da({sessionId:e,context:o,tensor:l,dataType:t,shape:r})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},cf=(...e)=>new qd(...e)}),Mr,Ld,hf,c0=q(()=>{Y(),Nt(),vp(),p0(),dt(),Mr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Ld=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),a=Object.keys(t).sort();return r.length===a.length&&r.every((n,i)=>n===a[i]&&e[n]===t[n])},hf=class{constructor(e){this.tensorManager=cf(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,qa(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){pe("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){pe("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)pe("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(r=>Ld(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(n=>n.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){pe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,a,n){let i=Mr.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,i,a,n)}async createTemporaryTensor(e,t,r){pe("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let a=Mr.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,a,r,!1);let i=this.temporarySessionTensorIds.get(e);return i?i.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!Ie().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");pe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return La(r,t)}}registerMLTensor(e,t,r,a){let n=Mr.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let i=this.tensorManager.registerTensor(e,t,n,a);return pe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${a}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,a,n,i){if(!i)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let l=i.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let p=l.slice(t,t+r).buffer,d;switch(n.dataType){case"float32":d=new Float32Array(p);break;case"float16":d=new Uint16Array(p);break;case"int32":d=new Int32Array(p);break;case"uint32":d=new Uint32Array(p);break;case"int64":d=new BigInt64Array(p);break;case"uint64":d=new BigUint64Array(p);break;case"int8":d=new Int8Array(p);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(p);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return pe("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}}`),a.constant(n,d)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}flush(){}}}),ff={};fr(ff,{init:()=>mf});var Dr,Vd,mf,h0=q(()=>{Y(),d0(),dt(),oe(),c0(),Dr=class gf{constructor(t,r,a,n){this.module=t,this.dataType=r,this.data=a,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new gf(this.module,this.dataType,this.data,t)}},Vd=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let a=e.PTR_SIZE,n=r/e.PTR_SIZE,i=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*n++,i));let o=Number(e.getValue(a*n++,i));this.outputCount=Number(e.getValue(a*n++,i)),this.customDataOffset=Number(e.getValue(a*n++,"*")),this.customDataSize=Number(e.getValue(a*n++,i));let l=[];for(let p=0;p<o;p++){let d=Number(e.getValue(a*n++,i)),m=Number(e.getValue(a*n++,"*")),g=Number(e.getValue(a*n++,i)),y=[];for(let _=0;_<g;_++)y.push(Number(e.getValue(a*n++,i)));l.push(new Dr(e,d,m,y))}this.inputs=l}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var o;let r=((o=t==null?void 0:t.inputs)==null?void 0:o.map(l=>typeof l=="number"?this.inputs[l]:l))??this.inputs,a=(t==null?void 0:t.outputs)??[],n=(l,p,d)=>new Dr(this.module,p,this.output(l,d),d),i=(l,p)=>{let d=At(l,p);if(!d)throw new Error(`Unsupported data type: ${l}`);let m=d>0?this.backend.gpuDataManager.create(d).id:0;return new Dr(this.module,l,m,p)};return this.backend.run(e,r,a,n,i,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,n=a===4?"i32":"i64",i=this.module.stackAlloc((1+t.length)*a);this.module.setValue(i,t.length,n);for(let o=0;o<t.length;o++)this.module.setValue(i+a*(o+1),t[o],n);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},mf=async(e,t,r,a)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let i=new pf;await i.initialize(r,a),n("webgpu",[i,o=>i.alloc(Number(o)),o=>i.free(o),(o,l,p,d=!1)=>{if(d)pe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(p)}`),i.memcpy(Number(o),Number(l));else{pe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(p)}`);let m=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(p));i.upload(Number(l),m)}},async(o,l,p)=>{pe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${p}`),await i.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+p)>>>0))},(o,l,p)=>i.createKernel(o,Number(l),p,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>i.releaseKernel(o),(o,l,p,d)=>{pe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${p}, kernel=${o}, contextDataOffset=${l}`);let m=new Vd(t,i,Number(l));return i.computeKernel(Number(o),m,d)},()=>i.captureBegin(),()=>i.captureEnd(),()=>i.replay()])}else{let i=new hf(r);n("webnn",[i,()=>i.reserveTensorId(),o=>i.releaseTensorId(o),async(o,l,p,d,m)=>i.ensureTensor(o,l,p,d,m),(o,l)=>{i.uploadTensor(o,l)},async(o,l)=>i.downloadTensor(o,l)])}}}),Gd,Ya,en,_t,Hd,Qr,tn,rn,ca,an,nn,sn,yf=q(()=>{yy(),_y(),Y(),Nt(),Ma(),$p(),Gd=(e,t)=>{Ie()._OrtInit(e,t)!==0&&fe("Can't initialize onnxruntime.")},Ya=async e=>{Gd(e.wasm.numThreads,Hr(e.logLevel))},en=async(e,t)=>{{let r=(h0(),Lr(ff)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let a=e.webgpu.adapter;if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:i}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Ie(),e,a)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Ie(),e)}}},_t=new Map,Hd=e=>{let t=Ie(),r=t.stackSave();try{let a=t.PTR_SIZE,n=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,n,n+a)!==0&&fe("Can't get session input/output count.");let i=a===4?"i32":"i64";return[Number(t.getValue(n,i)),Number(t.getValue(n+a,i))]}finally{t.stackRestore(r)}},Qr=e=>{let t=Ie(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},tn=async(e,t)=>{var g,y,_;let r,a,n=Ie();Array.isArray(e)?[r,a]=e:e.buffer===n.HEAPU8.buffer?[r,a]=[e.byteOffset,e.byteLength]:[r,a]=Qr(e);let i=0,o=0,l=0,p=[],d=[],m=[];try{if([o,p]=bp(t),(t==null?void 0:t.externalData)&&n.mountExternalData){let C=[];for(let E of t.externalData){let z=typeof E=="string"?E:E.path;C.push(Wa(typeof E=="string"?E:E.data).then(B=>{n.mountExternalData(z,B)}))}await Promise.all(C)}for(let C of(t==null?void 0:t.executionProviders)??[])if((typeof C=="string"?C:C.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof C!="string"){let E=C,z=E==null?void 0:E.context,B=E==null?void 0:E.gpuDevice,W=E==null?void 0:E.deviceType,G=E==null?void 0:E.powerPreference;z?n.currentContext=z:B?n.currentContext=await n.jsepCreateMLContext(B):n.currentContext=await n.jsepCreateMLContext({deviceType:W,powerPreference:G})}else n.currentContext=await n.jsepCreateMLContext();break}i=await n._OrtCreateSession(r,a,o),i===0&&fe("Can't create a session."),(g=n.jsepOnCreateSession)==null||g.call(n),n.currentContext&&(n.jsepRegisterMLContext(i,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[w,b]=Hd(i),S=!!(t!=null&&t.enableGraphCapture),v=[],$=[],T=[];for(let C=0;C<w;C++){let E=n._OrtGetInputName(i,C);E===0&&fe("Can't get an input name."),d.push(E),v.push(n.UTF8ToString(E))}for(let C=0;C<b;C++){let E=n._OrtGetOutputName(i,C);E===0&&fe("Can't get an output name."),m.push(E);let z=n.UTF8ToString(E);$.push(z);{if(S&&(t==null?void 0:t.preferredOutputLocation)===void 0){T.push("gpu-buffer");continue}let B=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((y=t==null?void 0:t.preferredOutputLocation)==null?void 0:y[z])??"cpu";if(B!=="cpu"&&B!=="cpu-pinned"&&B!=="gpu-buffer"&&B!=="ml-tensor")throw new Error(`Not supported preferred output location: ${B}.`);if(S&&B!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${B}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);T.push(B)}}let k=null;return T.some(C=>C==="gpu-buffer"||C==="ml-tensor")&&(l=n._OrtCreateBinding(i),l===0&&fe("Can't create IO binding."),k={handle:l,outputPreferredLocations:T,outputPreferredLocationsEncoded:T.map(C=>ma(C))}),_t.set(i,[i,d,m,k,S,!1]),[i,v,$]}catch(w){throw d.forEach(b=>n._OrtFree(b)),m.forEach(b=>n._OrtFree(b)),l!==0&&n._OrtReleaseBinding(l)!==0&&fe("Can't release IO binding."),i!==0&&n._OrtReleaseSession(i)!==0&&fe("Can't release session."),w}finally{n._free(r),o!==0&&n._OrtReleaseSessionOptions(o)!==0&&fe("Can't release session options."),p.forEach(w=>n._free(w)),(_=n.unmountExternalData)==null||_.call(n)}},rn=e=>{var p;let t=Ie(),r=_t.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,n,i,o,l]=r;o&&(l&&t._OrtClearBoundOutputs(o.handle)!==0&&fe("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&fe("Can't release IO binding.")),(p=t.jsepOnReleaseSession)==null||p.call(t,e),n.forEach(d=>t._OrtFree(d)),i.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(a)!==0&&fe("Can't release session."),_t.delete(e)},ca=async(e,t,r,a,n,i=!1)=>{if(!e){t.push(0);return}let o=Ie(),l=o.PTR_SIZE,p=e[0],d=e[1],m=e[3],g=m,y,_;if(p==="string"&&(m==="gpu-buffer"||m==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(i&&m!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(m==="gpu-buffer"){let S=e[2].gpuBuffer;_=At(Wt(p),d);let v=o.jsepRegisterBuffer;if(!v)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=v(a,n,S,_)}else if(m==="ml-tensor"){let S=e[2].mlTensor;_=At(Wt(p),d);let v=o.jsepRegisterMLTensor;if(!v)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=v(a,S,Wt(p),d)}else{let S=e[2];if(Array.isArray(S)){_=l*S.length,y=o._malloc(_),r.push(y);for(let v=0;v<S.length;v++){if(typeof S[v]!="string")throw new TypeError(`tensor data at index ${v} is not a string`);o.setValue(y+v*l,Oe(S[v],r),"*")}}else{let v=o.jsepIsGraphInput;if(p!=="string"&&v){let $=o._OrtGetInputName(a,n),T=o.UTF8ToString($);if(v(a,T)){let k=Wt(p);_=At(k,d),g="ml-tensor";let C=o.jsepCreateTemporaryTensor,E=o.jsepUploadTensor;if(!C||!E)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let z=await C(a,k,d);E(z,new Uint8Array(S.buffer,S.byteOffset,S.byteLength)),y=z}else _=S.byteLength,y=o._malloc(_),r.push(y),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,_),y)}else _=S.byteLength,y=o._malloc(_),r.push(y),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,_),y)}}let w=o.stackSave(),b=o.stackAlloc(4*d.length);try{d.forEach((v,$)=>o.setValue(b+$*l,v,l===4?"i32":"i64"));let S=o._OrtCreateTensor(Wt(p),y,_,b,d.length,ma(g));S===0&&fe(`Can't create tensor for input/output. session=${a}, index=${n}.`),t.push(S)}finally{o.stackRestore(w)}},an=async(e,t,r,a,n,i)=>{var ee,ae,Z;let o=Ie(),l=o.PTR_SIZE,p=_t.get(e);if(!p)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=p[0],m=p[1],g=p[2],y=p[3],_=p[4],w=p[5],b=t.length,S=a.length,v=0,$=[],T=[],k=[],C=[],E=o.stackSave(),z=o.stackAlloc(b*l),B=o.stackAlloc(b*l),W=o.stackAlloc(S*l),G=o.stackAlloc(S*l);try{[v,$]=wp(i);for(let V=0;V<b;V++)await ca(r[V],T,C,e,t[V],_);for(let V=0;V<S;V++)await ca(n[V],k,C,e,b+a[V],_);for(let V=0;V<b;V++)o.setValue(z+V*l,T[V],"*"),o.setValue(B+V*l,m[t[V]],"*");for(let V=0;V<S;V++)o.setValue(W+V*l,k[V],"*"),o.setValue(G+V*l,g[a[V]],"*");if(y&&!w){let{handle:V,outputPreferredLocations:de,outputPreferredLocationsEncoded:me}=y;if(m.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${m.length}).`);for(let F=0;F<b;F++){let ge=t[F];await o._OrtBindInput(V,m[ge],T[F])!==0&&fe(`Can't bind input[${F}] for session=${e}.`)}for(let F=0;F<S;F++){let ge=a[F];(ee=n[F])!=null&&ee[3]?o._OrtBindOutput(V,g[ge],k[F],0)!==0&&fe(`Can't bind pre-allocated output[${F}] for session=${e}.`):o._OrtBindOutput(V,g[ge],0,me[ge])!==0&&fe(`Can't bind output[${F}] to ${de[F]} for session=${e}.`)}_t.set(e,[d,m,g,y,_,!0])}(ae=o.jsepOnRunStart)==null||ae.call(o,d);let te;y?te=await o._OrtRunWithBinding(d,y.handle,S,W,v):te=await o._OrtRun(d,B,z,b,G,S,W,v),te!==0&&fe("failed to call OrtRun().");let J=[];for(let V=0;V<S;V++){let de=Number(o.getValue(W+V*l,"*"));if(de===k[V]){J.push(n[V]);continue}let me=o.stackSave(),F=o.stackAlloc(4*l),ge=!1,M,L=0;try{o._OrtGetTensorData(de,F,F+l,F+2*l,F+3*l)!==0&&fe(`Can't access output tensor data on index ${V}.`);let le=l===4?"i32":"i64",ve=Number(o.getValue(F,le));L=o.getValue(F+l,"*");let D=o.getValue(F+l*2,"*"),ce=Number(o.getValue(F+l*3,le)),qe=[];for(let Ce=0;Ce<ce;Ce++)qe.push(Number(o.getValue(D+Ce*l,le)));o._OrtFree(D)!==0&&fe("Can't free memory for tensor dims.");let Ne=qe.reduce((Ce,ye)=>Ce*ye,1);M=zt(ve);let vt=y==null?void 0:y.outputPreferredLocations[a[V]];if(M==="string"){if(vt==="gpu-buffer"||vt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ce=[];for(let ye=0;ye<Ne;ye++){let pt=o.getValue(L+ye*l,"*"),Ft=o.getValue(L+(ye+1)*l,"*"),xt=ye===Ne-1?void 0:Ft-pt;Ce.push(o.UTF8ToString(pt,xt))}J.push([M,qe,Ce,"cpu"])}else if(vt==="gpu-buffer"&&Ne>0){let Ce=o.jsepGetBuffer;if(!Ce)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ye=Ce(L),pt=At(ve,Ne);if(pt===void 0||!Pa(M))throw new Error(`Unsupported data type: ${M}`);ge=!0,J.push([M,qe,{gpuBuffer:ye,download:o.jsepCreateDownloader(ye,pt,M),dispose:()=>{o._OrtReleaseTensor(de)!==0&&fe("Can't release tensor.")}},"gpu-buffer"])}else if(vt==="ml-tensor"&&Ne>0){let Ce=o.jsepEnsureTensor;if(!Ce)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(At(ve,Ne)===void 0||!Ua(M))throw new Error(`Unsupported data type: ${M}`);let ye=await Ce(e,L,ve,qe,!1);ge=!0,J.push([M,qe,{mlTensor:ye,download:o.jsepCreateMLTensorDownloader(L,M),dispose:()=>{o.jsepReleaseTensorId(L),o._OrtReleaseTensor(de)}},"ml-tensor"])}else{let Ce=Da(M),ye=new Ce(Ne);new Uint8Array(ye.buffer,ye.byteOffset,ye.byteLength).set(o.HEAPU8.subarray(L,L+ye.byteLength)),J.push([M,qe,ye,"cpu"])}}finally{o.stackRestore(me),M==="string"&&L&&o._free(L),ge||o._OrtReleaseTensor(de),(Z=o.jsepOnRunEnd)==null||Z.call(o,d)}}return y&&!_&&(o._OrtClearBoundOutputs(y.handle)!==0&&fe("Can't clear bound outputs."),_t.set(e,[d,m,g,y,_,!1])),J}finally{o.stackRestore(E),T.forEach(te=>o._OrtReleaseTensor(te)),k.forEach(te=>o._OrtReleaseTensor(te)),C.forEach(te=>o._free(te)),v!==0&&o._OrtReleaseRunOptions(v),$.forEach(te=>o._free(te))}},nn=e=>{let t=Ie(),r=_t.get(e);if(!r)throw new Error("invalid session id");let a=r[0],n=t._OrtEndProfiling(a);n===0&&fe("Can't get an profile file name."),t._OrtFree(n)},sn=e=>{let t=[];for(let r of e){let a=r[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),wt,Me,Ut,sr,or,Pr,ha,Ur,Ct,It,Fd,_f,wf,bf,$f,vf,xf,Sf,kf=q(()=>{Ye(),yf(),Nt(),Ba(),wt=()=>!!be.wasm.proxy&&typeof document<"u",Ut=!1,sr=!1,or=!1,Ur=new Map,Ct=(e,t)=>{let r=Ur.get(e);r?r.push(t):Ur.set(e,[t])},It=()=>{if(Ut||!sr||or||!Me)throw new Error("worker not ready")},Fd=e=>{switch(e.data.type){case"init-wasm":Ut=!1,e.data.err?(or=!0,ha[1](e.data.err)):(sr=!0,ha[0]()),Pr&&(URL.revokeObjectURL(Pr),Pr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Ur.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},_f=async()=>{if(!sr){if(Ut)throw new Error("multiple calls to 'initWasm()' detected.");if(or)throw new Error("previous call to 'initWasm()' failed.");if(Ut=!0,wt())return new Promise((e,t)=>{Me==null||Me.terminate(),yp().then(([r,a])=>{var n;try{Me=a,Me.onerror=o=>t(o),Me.onmessage=Fd,ha=[e,t];let i={type:"init-wasm",in:be};!i.in.wasm.wasmPaths&&(r||(n=import.meta.url)!=null&&n.startsWith("file:"))&&(i.in.wasm.wasmPaths={wasm:new URL("/i41-restore-preview/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm",import.meta.url).href}),Me.postMessage(i),Pr=r}catch(i){t(i)}},t)});try{await Na(be.wasm),await Ya(be),sr=!0}catch(e){throw or=!0,e}finally{Ut=!1}}},wf=async e=>{if(wt())return It(),new Promise((t,r)=>{Ct("init-ep",[t,r]);let a={type:"init-ep",in:{epName:e,env:be}};Me.postMessage(a)});await en(be,e)},bf=async e=>wt()?(It(),new Promise((t,r)=>{Ct("copy-from",[t,r]);let a={type:"copy-from",in:{buffer:e}};Me.postMessage(a,[e.buffer])})):Qr(e),$f=async(e,t)=>{if(wt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return It(),new Promise((r,a)=>{Ct("create",[r,a]);let n={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),Me.postMessage(n,i)})}else return tn(e,t)},vf=async e=>{if(wt())return It(),new Promise((t,r)=>{Ct("release",[t,r]);let a={type:"release",in:e};Me.postMessage(a)});rn(e)},xf=async(e,t,r,a,n,i)=>{if(wt()){if(r.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return It(),new Promise((o,l)=>{Ct("run",[o,l]);let p=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:p,outputIndices:a,options:i}};Me.postMessage(d,sn(p))})}else return an(e,t,r,a,n,i)},Sf=async e=>{if(wt())return It(),new Promise((t,r)=>{Ct("end-profiling",[t,r]);let a={type:"end-profiling",in:e};Me.postMessage(a)});nn(e)}}),fa,jd,Tf,f0=q(()=>{Ye(),kf(),Y(),Ra(),$p(),fa=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},jd=e=>{switch(e[3]){case"cpu":return new Xe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Pa(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:n}=e[2];return Xe.fromGpuBuffer(r,{dataType:t,dims:e[1],download:a,dispose:n})}case"ml-tensor":{let t=e[0];if(!Ua(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:n}=e[2];return Xe.fromMLTensor(r,{dataType:t,dims:e[1],download:a,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},Tf=class{async fetchModelAndCopyToWasmMemory(e){return bf(await Wa(e))}async loadModel(e,t){at();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await $f(r,t),Je()}async dispose(){return vf(this.sessionId)}async run(e,t,r){at();let a=[],n=[];Object.entries(e).forEach(g=>{let y=g[0],_=g[1],w=this.inputNames.indexOf(y);if(w===-1)throw new Error(`invalid input '${y}'`);a.push(_),n.push(w)});let i=[],o=[];Object.entries(t).forEach(g=>{let y=g[0],_=g[1],w=this.outputNames.indexOf(y);if(w===-1)throw new Error(`invalid output '${y}'`);i.push(_),o.push(w)});let l=a.map((g,y)=>fa(g,()=>`input "${this.inputNames[n[y]]}"`)),p=i.map((g,y)=>g?fa(g,()=>`output "${this.outputNames[o[y]]}"`):null),d=await xf(this.sessionId,n,l,o,p,r),m={};for(let g=0;g<d.length;g++)m[this.outputNames[o[g]]]=i[g]??jd(d[g]);return Je(),m}startProfiling(){}endProfiling(){Sf(this.sessionId)}}}),Cf={};fr(Cf,{OnnxruntimeWebAssemblyBackend:()=>Ia,initializeFlags:()=>Ca,wasmBackend:()=>If});var Ca,Ia,If,m0=q(()=>{Ye(),kf(),f0(),Ca=()=>{if((typeof be.wasm.initTimeout!="number"||be.wasm.initTimeout<0)&&(be.wasm.initTimeout=0),be.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof be.wasm.proxy!="boolean"&&(be.wasm.proxy=!1),typeof be.wasm.trace!="boolean"&&(be.wasm.trace=!1),typeof be.wasm.numThreads!="number"||!Number.isInteger(be.wasm.numThreads)||be.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)be.wasm.numThreads=1;else{let e=typeof navigator>"u"?Yg("node:os").cpus().length:navigator.hardwareConcurrency;be.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Ia=class{async init(e){Ca(),await _f(),await wf(e)}async createInferenceSessionHandler(e,t){let r=new Tf;return await r.loadModel(e,t),Promise.resolve(r)}},If=new Ia});Ye();Ye();Ye();var g0="1.21.0";{let e=(m0(),Lr(Cf)).wasmBackend;qt("webgpu",e,5),qt("webnn",e,5),qt("cpu",e,10),qt("wasm",e,10)}Object.defineProperty(be.versions,"web",{value:g0,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const y0=Object.freeze({url:new URL("/i41-restore-preview/assets/restoreformer_pp_int8w-Boeqyz6d.onnx",import.meta.url).href,bytes:74375477,sha256:"4b3983dba15b8dd26db1bc94be57558ca4d783424ca6f3715676ab53450bcb6c",inputSize:512});function _0(e,t){if(!Number.isInteger(e)||!Number.isInteger(t)||e<=0||t<=0)throw new Error("图片尺寸无效");if(e>1e4||t>1e4||e*t>16e6)throw new Error("图片尺寸过大");return{width:e,height:t}}function w0({webgpu:e,requested:t}){return t==="wasm"?"wasm":t==="webgpu"&&e?"webgpu":null}function b0(e,t,r){const a=new Float32Array(3*t*r),n=t*r;for(let i=0;i<n;i+=1)a[i]=e[i*4]/127.5-1,a[n+i]=e[i*4+1]/127.5-1,a[n*2+i]=e[i*4+2]/127.5-1;return a}function $0(e,t,r){const a=new Uint8ClampedArray(t*r*4),n=t*r;for(let i=0;i<n;i+=1)a[i*4]=Math.max(0,Math.min(255,(e[i]+1)*127.5)),a[i*4+1]=Math.max(0,Math.min(255,(e[n+i]+1)*127.5)),a[i*4+2]=Math.max(0,Math.min(255,(e[n*2+i]+1)*127.5)),a[i*4+3]=255;return a}const _e=e=>document.getElementById(e),v0=_e("input"),Ef=_e("output"),Ea=v0.getContext("2d",{willReadFrequently:!0}),x0=Ef.getContext("2d");let Ae=null,lt=null,Vt=null,Zr=null,zf=null;be.wasm.numThreads=globalThis.crossOriginIsolated?Math.min(4,navigator.hardwareConcurrency||1):1;be.wasm.proxy=!1;be.wasm.simd=!0;function He(e,t){_e("message").textContent=e,t!==void 0&&(_e("progress").value=t)}async function S0(){if(!navigator.gpu)return _e("gpu-status").textContent="浏览器未启用 WebGPU",_e("provider").value="wasm",He("未检测到 WebGPU。请更新 Chrome / Edge，并检查浏览器硬件加速。已切换 CPU 模式。",0),!1;try{let e=await navigator.gpu.requestAdapter();if(e||(e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})),e||(e=await navigator.gpu.requestAdapter({featureLevel:"compatibility"})),!e)throw new Error("浏览器没有返回 GPU 适配器");const t=e.info,r=[t==null?void 0:t.vendor,t==null?void 0:t.architecture,t==null?void 0:t.device].filter(Boolean).join(" · ");return _e("gpu-status").textContent=r?`可用：${r}`:"可用",!0}catch(e){return _e("gpu-status").textContent=`不可用：${e.message}`,_e("provider").value="wasm",He("WebGPU 无可用适配器。请打开 chrome://gpu 或 edge://gpu 查看原因，并确认“可用时使用图形加速”已开启、显卡驱动已更新。已切换 CPU 模式。",0),!1}}let Af=!1;_e("file").addEventListener("change",async()=>{var t;if(lt=((t=_e("file").files)==null?void 0:t[0])||null,_e("run").disabled=!0,_e("download").disabled=!0,Zr=null,!lt)return;if(lt.size>20*1024*1024){He("文件超过 20 MiB，请选择更小的图片。",0);return}Vt&&URL.revokeObjectURL(Vt),Vt=URL.createObjectURL(lt);const e=new Image;e.src=Vt;try{await e.decode(),_0(e.naturalWidth,e.naturalHeight),Ea.clearRect(0,0,512,512),Ea.drawImage(e,0,0,512,512),_e("run").disabled=!Ae,He(`图片已准备：${e.naturalWidth} × ${e.naturalHeight}，将缩放为 512 × 512。`,0)}catch(r){He(`图片读取失败：${r.message}`,0)}});_e("load").addEventListener("click",async()=>{var r;const e=_e("provider").value,t=w0({webgpu:Af,requested:e});if(!t){He("当前浏览器无法使用 WebGPU。可手动选择 CPU 兼容模式。",0);return}_e("load").disabled=!0,_e("run").disabled=!0,_e("model-status").textContent="正在下载并初始化",He("正在下载约 74 MB 模型，首次使用请保持页面打开…",10);try{const a=performance.now();(r=Ae==null?void 0:Ae.release)==null||r.call(Ae),Ae=await Oa.create(y0.url,{executionProviders:[t],graphOptimizationLevel:"all",preferredOutputLocation:t==="webgpu"?"cpu":void 0}),zf=t,_e("model-status").textContent=`${t.toUpperCase()} 已就绪`,_e("timing").textContent=`加载 ${((performance.now()-a)/1e3).toFixed(1)} 秒`,_e("run").disabled=!lt,He("模型已就绪。",100)}catch(a){Ae=null,_e("model-status").textContent="加载失败",He(`模型加载失败：${a.message}`,0)}finally{_e("load").disabled=!1}});_e("run").addEventListener("click",async()=>{if(!(!Ae||!lt)){_e("run").disabled=!0,_e("download").disabled=!0,He(`正在使用 ${zf.toUpperCase()} 修复…`,20);try{const e=Ea.getImageData(0,0,512,512),t=new Xe("float32",b0(e.data,512,512),[1,3,512,512]),r=performance.now(),a=await Ae.run({[Ae.inputNames[0]]:t},[Ae.outputNames[0]]),n=performance.now()-r,i=a[Ae.outputNames[0]],o=$0(i.data,512,512);x0.putImageData(new ImageData(o,512,512),0,0),Zr=await new Promise((l,p)=>Ef.toBlob(d=>d?l(d):p(new Error("导出失败")),"image/png")),_e("timing").textContent=`推理 ${(n/1e3).toFixed(1)} 秒`,_e("download").disabled=!1,He("修复完成。结果可能生成不存在的细节，请与原图对比。",100)}catch(e){He(`修复失败：${e.message}`,0)}finally{_e("run").disabled=!1}}});_e("download").addEventListener("click",()=>{if(!Zr)return;const e=document.createElement("a"),t=URL.createObjectURL(Zr);e.href=t,e.download=`${(lt==null?void 0:lt.name.replace(/\.[^.]+$/,""))||"face"}-restored.png`,e.click(),setTimeout(()=>URL.revokeObjectURL(t),3e4)});addEventListener("pagehide",()=>{var e;(e=Ae==null?void 0:Ae.release)==null||e.call(Ae),Vt&&URL.revokeObjectURL(Vt)});S0().then(e=>{Af=e});
