import{_ as f}from"./ContentRendererMarkdown.vue.e1e91d29.js";import{_ as d}from"./nuxt-link.6c7a4ba3.js";import h from"./ContentRenderer.5573c94c.js";import{u as y,q as v}from"./query.a2310020.js";import{u as w,f as g,g as C,h as D,w as a,i as k,o as R,a as t,t as s,b as c,d as b}from"./entry.8554a1fa.js";import{u as M}from"./index.1891209c.js";import"./index.288f722b.js";import"./preview.d11ec884.js";const N={class:"prose flex flex-col grow mx-6 my-10 justify-center text-left max-w-2xl sm:text-justify sm:mx-auto"},Y={class:"text-4xl"},j={class:"text-sm italic"},B={class:"flex flex-col grow mx-10 px-3 items-center justify-center text-center"},V=t("p",{class:"text-2xl"},"Sorry, we could not find that blog page. Please check the URL and try again. ",-1),$={__name:"[...slug]",async setup(q){let e,n;const l=r=>M(r,"MMM DD, YYYY").value,_=w(),i=g(()=>_.path),{data:m}=([e,n]=C(()=>y("filename",()=>v("blog").where({_path:i.value}).findOne())),e=await e,n(),e);return(r,A)=>{const u=f,p=d,x=h;return R(),D(x,{value:k(m)},{default:a(o=>[t("article",N,[t("h1",Y,s(o.value.title),1),t("h3",j,s(l(o.value.date))+" • "+s(o.value.readTime),1),c(u,{value:o.value},null,8,["value"])])]),empty:a(()=>[t("main",B,[V,c(p,{class:"text-blue-600 visited:text-purple-600",href:"/blog"},{default:a(()=>[b("Go to other blogs posts... ")]),_:1})])]),_:1},8,["value"])}}};export{$ as default};