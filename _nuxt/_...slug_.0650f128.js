import{_ as m}from"./ContentRendererMarkdown.vue.22ff64ed.js";import{_ as p}from"./nuxt-link.e4d5c256.js";import x from"./ContentRenderer.6c204415.js";import{u as f,q as d}from"./query.4f114b71.js";import{u as h,g as y,h as g,f as w,w as o,i as v,o as b,a as e,t as C,b as n,d as k}from"./entry.8dee9017.js";import"./index.288f722b.js";import"./preview.e5dd0b6d.js";const R={class:"prose flex flex-col grow mx-6 my-10 justify-center text-left max-w-2xl sm:text-justify sm:mx-auto"},N={class:"text-4xl"},j={class:"flex flex-col grow mx-10 px-3 items-center justify-center text-center"},B=e("p",{class:"text-2xl"},"Sorry, we could not find that blog page. Please check the URL and try again. ",-1),T={__name:"[...slug]",async setup(V){let t,s;const r=h(),c=y(()=>r.path),{data:l}=([t,s]=g(()=>f("filename",()=>d("blog").where({_path:c.value}).findOne())),t=await t,s(),t);return(q,A)=>{const _=m,i=p,u=x;return b(),w(u,{value:v(l)},{default:o(a=>[e("article",R,[e("h1",N,C(a.value.title),1),n(_,{value:a.value},null,8,["value"])])]),empty:o(()=>[e("main",j,[B,n(i,{class:"text-blue-600 visited:text-purple-600",href:"/blog"},{default:o(()=>[k("Go to other blogs posts... ")]),_:1})])]),_:1},8,["value"])}}};export{T as default};