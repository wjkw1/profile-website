import{i as d,l as w,u as y,n as D,m as g,q as H,s as q,v as c}from"./entry.a5f0ac23.js";import{u as S}from"./vue.f36acd1f.d6394bfe.js";import{w as b}from"./query.65679706.js";import x from"./ContentRenderer.f25c9ae5.js";import j from"./ContentQuery.f0851630.js";import"./preview.509b8f54.js";import"./ContentRendererMarkdown.vue.ca50126f.js";import"./index.288f722b.js";const a=(p,s=y())=>{const e=d(p),f=g();w(()=>d(p),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),f.public.content.host;const u=(t==null?void 0:t.description)||(n==null?void 0:n.description);u&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:u}),t!=null&&t.image||(n==null||n.image),D(()=>S(t))},{immediate:!0})},k=H({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(p){const{contentHead:s}=g().public.content,e=q(),{tag:f,excerpt:m,path:n,query:t,head:r}=p,u=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||b(y().path),find:"one"},C=(o,i)=>c("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return c(j,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:v})=>{var h;return u&&a(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:v,excerpt:m,...this.$attrs})}:({data:o})=>(u&&a(o),c(x,{value:o,excerpt:m,tag:f,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):C("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||c("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||c("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),J=k;export{J as default};
