import{C as x,x as K,D as W,E as O,l as G,z as q,i as J,G as Q,H as V,m as B,A as X}from"./entry.0c43ed49.js";import{u as T}from"./preview.f4d93494.js";const Y=()=>null;function At(...r){const n=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(n);let[s,t,e={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=e.server??!0,e.default=e.default??Y,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0;const a=q(),i=()=>a.isHydrating?a.payload.data[s]:a.static.data[s],u=()=>i()!==void 0;(!a._asyncData[s]||!e.immediate)&&(a._asyncData[s]={data:x(i()??e.default()),pending:x(!u()),error:K(a.payload._errors,s),status:x("idle")});const o={...a._asyncData[s]};o.refresh=o.execute=(c={})=>{if(a._asyncDataPromises[s]){if(c.dedupe===!1)return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if((c._initial||a.isHydrating&&c._initial!==!1)&&u())return i();o.pending.value=!0,o.status.value="pending";const g=new Promise((f,y)=>{try{f(t(a))}catch(S){y(S)}}).then(f=>{if(g.cancelled)return a._asyncDataPromises[s];let y=f;e.transform&&(y=e.transform(f)),e.pick&&(y=Z(y,e.pick)),o.data.value=y,o.error.value=null,o.status.value="success"}).catch(f=>{if(g.cancelled)return a._asyncDataPromises[s];o.error.value=f,o.data.value=J(e.default()),o.status.value="error"}).finally(()=>{g.cancelled||(o.pending.value=!1,a.payload.data[s]=o.data.value,o.error.value&&(a.payload._errors[s]=Q(o.error.value)),delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=g,a._asyncDataPromises[s]};const l=()=>o.refresh({_initial:!0}),h=e.server!==!1&&a.payload.serverRendered;{const c=V();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const f=c._nuxtOnBeforeMountCbs;c&&(W(()=>{f.forEach(y=>{y()}),f.splice(0,f.length)}),O(()=>f.splice(0,f.length)))}h&&a.isHydrating&&u()?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):c&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?c._nuxtOnBeforeMountCbs.push(l):e.immediate&&l(),e.watch&&G(e.watch,()=>o.refresh());const g=a.hook("app:data:refresh",f=>{if(!f||f.includes(s))return o.refresh()});c&&O(g)}const d=Promise.resolve(a._asyncDataPromises[s]).then(()=>o);return Object.assign(d,o),d}function Z(r,n){const s={};for(const t of n)s[t]=r[t];return s}const k=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function tt(r,n){n?n={...k,...n}:n=k;const s=$(n);return s.dispatch(r),s.toString()}const et=Object.freeze(["prototype","__proto__","constructor"]);function $(r){let n="",s=new Map;const t=e=>{n+=e};return{toString(){return n},getContext(){return s},dispatch(e){return r.replacer&&(e=r.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const a=Object.prototype.toString.call(e);let i="";const u=a.length;u<10?i="unknown:["+a+"]":i=a.slice(8,u-1),i=i.toLowerCase();let o=null;if((o=s.get(e))===void 0)s.set(e,s.size);else return this.dispatch("[CIRCULAR:"+o+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](e):r.ignoreUnknown||this.unkown(e,i);else{let l=Object.keys(e);r.unorderedObjects&&(l=l.sort());let h=[];r.respectType!==!1&&!D(e)&&(h=et),r.excludeKeys&&(l=l.filter(c=>!r.excludeKeys(c)),h=h.filter(c=>!r.excludeKeys(c))),t("object:"+(l.length+h.length)+":");const d=c=>{this.dispatch(c),t(":"),r.excludeValues||this.dispatch(e[c]),t(",")};for(const c of l)d(c);for(const c of h)d(c)}},array(e,a){if(a=a===void 0?r.unorderedArrays!==!1:a,t("array:"+e.length+":"),!a||e.length<=1){for(const o of e)this.dispatch(o);return}const i=new Map,u=e.map(o=>{const l=$(r);l.dispatch(o);for(const[h,d]of l.getContext())i.set(h,d);return l.toString()});return s=i,u.sort(),this.array(u,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,a){if(t(a),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),D(e)?this.dispatch("[native]"):this.dispatch(e.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),r.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const a=[...e];return this.array(a,r.unorderedSets!==!1)},set(e){t("set:");const a=[...e];return this.array(a,r.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(r.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const z="[native code] }",rt=z.length;function D(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-rt)===z}class m{constructor(n,s){n=this.words=n||[],this.sigBytes=s===void 0?n.length*4:s}toString(n){return(n||nt).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let s=0;s<n.sigBytes;s++){const t=n.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=t<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<n.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=n.words[s>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new m([...this.words])}}const nt={stringify(r){const n=[];for(let s=0;s<r.sigBytes;s++){const t=r.words[s>>>2]>>>24-s%4*8&255;n.push((t>>>4).toString(16),(t&15).toString(16))}return n.join("")}},st={stringify(r){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let t=0;t<r.sigBytes;t+=3){const e=r.words[t>>>2]>>>24-t%4*8&255,a=r.words[t+1>>>2]>>>24-(t+1)%4*8&255,i=r.words[t+2>>>2]>>>24-(t+2)%4*8&255,u=e<<16|a<<8|i;for(let o=0;o<4&&t*8+o*6<r.sigBytes*8;o++)s.push(n.charAt(u>>>6*(3-o)&63))}return s.join("")}},it={parse(r){const n=r.length,s=[];for(let t=0;t<n;t++)s[t>>>2]|=(r.charCodeAt(t)&255)<<24-t%4*8;return new m(s,n)}},at={parse(r){return it.parse(unescape(encodeURIComponent(r)))}};class ot{constructor(){this._data=new m,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new m,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=at.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,s){}_process(n){let s,t=this._data.sigBytes/(this.blockSize*4);n?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,a=Math.min(e*4,this._data.sigBytes);if(e){for(let i=0;i<e;i+=this.blockSize)this._doProcessBlock(this._data.words,i);s=this._data.words.splice(0,e),this._data.sigBytes-=a}return new m(s,a)}}class ct extends ot{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const E=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ut=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],w=[];class lt extends ct{constructor(){super(...arguments),this._hash=new m([...E])}reset(){super.reset(),this._hash=new m([...E])}_doProcessBlock(n,s){const t=this._hash.words;let e=t[0],a=t[1],i=t[2],u=t[3],o=t[4],l=t[5],h=t[6],d=t[7];for(let c=0;c<64;c++){if(c<16)w[c]=n[s+c]|0;else{const _=w[c-15],I=(_<<25|_>>>7)^(_<<14|_>>>18)^_>>>3,b=w[c-2],M=(b<<15|b>>>17)^(b<<13|b>>>19)^b>>>10;w[c]=I+w[c-7]+M+w[c-16]}const g=o&l^~o&h,f=e&a^e&i^a&i,y=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),S=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),C=d+S+g+ut[c]+w[c],F=y+f;d=h,h=l,l=o,o=u+C|0,u=i,i=a,a=e,e=C+F|0}t[0]=t[0]+e|0,t[1]=t[1]+a|0,t[2]=t[2]+i|0,t[3]=t[3]+u|0,t[4]=t[4]+o|0,t[5]=t[5]+l|0,t[6]=t[6]+h|0,t[7]=t[7]+d|0}finalize(n){super.finalize(n);const s=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(t+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ft(r){return new lt().finalize(r).toString(st)}function R(r,n={}){const s=typeof r=="string"?r:tt(r,n);return ft(s).slice(0,10)}const ht=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,dt=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,yt=/^([/\\]\s*){2,}[^/\\]/;function pt(r,n={}){return typeof n=="boolean"&&(n={acceptRelative:n}),n.strict?ht.test(r):dt.test(r)||(n.acceptRelative?yt.test(r):!1)}const gt=/\/$|\/\?/;function v(r="",n=!1){return n?gt.test(r):r.endsWith("/")}function j(r="",n=!1){if(!n)return(v(r)?r.slice(0,-1):r)||"/";if(!v(r,!0))return r||"/";const[s,...t]=r.split("?");return(s.slice(0,-1)||"/")+(t.length>0?`?${t.join("?")}`:"")}function mt(r="",n=!1){if(!n)return r.endsWith("/")?r:r+"/";if(v(r,!0))return r||"/";const[s,...t]=r.split("?");return s+"/"+(t.length>0?`?${t.join("?")}`:"")}function wt(r=""){return r.startsWith("/")}function _t(r=""){return wt(r)?r:"/"+r}function bt(r,n){if(Bt(n)||pt(r))return r;const s=j(n);return r.startsWith(s)?r:H(s,r)}function Bt(r){return!r||r==="/"}function St(r){return r&&r!=="/"}const xt=/^\.?\//;function H(r,...n){let s=r||"";for(const t of n.filter(e=>St(e)))if(s){const e=t.replace(xt,"");s=mt(s)+e}else s=t;return s}const A=(r,n)=>n.split(".").reduce((s,t)=>s&&s[t],r),P=(r,n)=>Object.keys(r).filter(n).reduce((s,t)=>Object.assign(s,{[t]:r[t]}),{}),Lt=r=>n=>r&&r.length?P(n,s=>!r.includes(s)):n,Tt=r=>n=>Array.isArray(n)?n.map(s=>r(s)):r(n),N=r=>{const n=[],s=[];for(const t of r)["$","_"].includes(t)?n.push(t):s.push(t);return{prefixes:n,properties:s}},$t=(r=[])=>n=>{if(r.length===0||!n)return n;const{prefixes:s,properties:t}=N(r);return P(n,e=>!t.includes(e)&&!s.includes(e[0]))},zt=(r=[])=>n=>{if(r.length===0||!n)return n;const{prefixes:s,properties:t}=N(r);return P(n,e=>t.includes(e)||s.includes(e[0]))},jt=(r,n)=>{const s=new Intl.Collator(n.$locale,{numeric:n.$numeric,caseFirst:n.$caseFirst,sensitivity:n.$sensitivity}),t=Object.keys(n).filter(e=>!e.startsWith("$"));for(const e of t)r=r.sort((a,i)=>{const u=[A(a,e),A(i,e)].map(o=>{if(o!==null)return o instanceof Date?o.toISOString():o});return n[e]===-1&&u.reverse(),s.compare(u[0],u[1])});return r},Ht=(r,n="Expected an array")=>{if(!Array.isArray(r))throw new TypeError(n)},p=r=>Array.isArray(r)?r:[void 0,null].includes(r)?[]:[r],vt=["sort","where","only","without"];function Pt(r,n={}){const s={};for(const i of Object.keys(n.initialParams||{}))s[i]=vt.includes(i)?p(n.initialParams[i]):n.initialParams[i];const t=(i,u=o=>o)=>(...o)=>(s[i]=u(...o),a),e=i=>{var u;return n.legacy?i!=null&&i.surround?i.surround:i&&(i!=null&&i.dirConfig&&(i.result={_path:(u=i.dirConfig)==null?void 0:u._path,...i.result,_dir:i.dirConfig}),i!=null&&i._path||Array.isArray(i)||!Object.prototype.hasOwnProperty.call(i,"result")?i:i==null?void 0:i.result):i},a={params:()=>({...s,...s.where?{where:[...p(s.where)]}:{},...s.sort?{sort:[...p(s.sort)]}:{}}),only:t("only",p),without:t("without",p),where:t("where",i=>[...p(s.where),...p(i)]),sort:t("sort",i=>[...p(s.sort),...p(i)]),limit:t("limit",i=>parseInt(String(i),10)),skip:t("skip",i=>parseInt(String(i),10)),find:()=>r(a).then(e),findOne:()=>r(t("first")(!0)).then(e),count:()=>r(t("count")(!0)).then(e),locale:i=>a.where({_locale:i}),withSurround:t("surround",(i,u)=>({query:i,...u})),withDirConfig:()=>t("dirConfig")(!0)};return n.legacy&&(a.findSurround=(i,u)=>a.withSurround(i,u).find().then(e)),a}function U(r){return JSON.stringify(r,Ct)}function Ct(r,n){return n instanceof RegExp?`--REGEX ${n.toString()}`:n}const Ot=r=>{let n=U(r);return n=typeof Buffer<"u"?Buffer.from(n).toString("base64"):btoa(n),n=n.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(n.match(/.{1,100}/g)||[]).join("/")},L=r=>bt(r,B().public.content.api.baseURL),Nt=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxt.com/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},kt=()=>{const{experimental:r}=B().public.content;return r.clientDB?!0:T().isEnabled()},Dt=()=>async r=>{const{content:n}=B().public,s=r.params(),t=n.experimental.stripQueryParameters?L(`/query/${`${R(s)}.${n.integrity}`}/${Ot(s)}.json`):L(`/query/${R(s)}.${n.integrity}.json`);if(kt())return(await X(()=>import("./client-db.b163567b.js"),["./client-db.b163567b.js","./entry.0c43ed49.js","./index.288f722b.js","./preview.f4d93494.js"],import.meta.url).then(i=>i.useContentDatabase())).fetch(r);const e=await $fetch(t,{method:"GET",responseType:"json",params:n.experimental.stripQueryParameters?void 0:{_params:U(s),previewToken:T().getPreviewToken()}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};function Ut(r,...n){const{content:s}=B().public,t=Pt(Dt(),{initialParams:typeof r!="string"?r:{},legacy:!0});let e;typeof r=="string"&&(e=_t(H(r,...n)));const a=t.params;return t.params=()=>{var u,o,l;const i=a();return e&&(i.where=i.where||[],i.first&&(i.where||[]).length===0?i.where.push({_path:j(e)}):i.where.push({_path:new RegExp(`^${e.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(u=i.sort)!=null&&u.length||(i.sort=[{_file:1,$numeric:!0}]),s.locales.length&&((l=(o=i.where)==null?void 0:o.find(d=>d._locale))!=null&&l._locale||(i.where=i.where||[],i.where.push({_locale:s.defaultLocale}))),i},t}export{L as a,Nt as b,Ht as c,p as d,Ot as e,jt as f,A as g,R as h,Tt as i,U as j,$t as k,zt as l,H as m,Pt as n,Lt as o,bt as p,Ut as q,kt as s,At as u,mt as w};