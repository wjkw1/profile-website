import{_}from"./i6Rid2O6.js";import{o as a,c as s,a as r,b as g,t as n,i as m,F as u,r as p,f,h}from"./CMcbiy_e.js";import{u as x,q as w}from"./C8-1Qxu5.js";import{u as S}from"./CNbPQa19.js";import{u as k}from"./5mQxJy57.js";import"./CkFAU6v9.js";const b=["href"],v={class:"max-w-sm rounded-lg overflow-hidden shadow-lg m-3 p-6 border border-gray-100"},A={class:"py-4"},D={class:"font-semibold text-3xl mb-2"},C={key:0,class:"my-1 text-sm text-gray-600 font-light"},T={class:"text-gray-600 text-base"},B={key:0,class:"flex flex-wrap pt-4 pb-2"},M={class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},N={__name:"Card",props:{title:{type:String},description:{type:String},icon:{type:String,default:"IconMarkdown"},img:{type:String},imgAlt:{type:String},date:{type:String},slug:{type:String,default:null},tags:{type:Array,default:()=>[]},readTime:{type:String}},setup(t){return(i,o)=>{const d=_;return a(),s("a",{href:t.slug},[r("div",v,[g(d,{class:"w-full rounded",src:t.img,alt:t.imgAlt,height:"500",width:"500"},null,8,["src","alt"]),r("div",A,[r("h2",D,n(t.title),1),r("em",null,[t.date?(a(),s("p",C,n(t.date)+" • "+n(t.readTime),1)):m("",!0)]),r("p",T,n(t.description),1)]),t.tags.length>0?(a(),s("div",B,[(a(!0),s(u,null,p(t.tags,l=>(a(),s("span",M,"#"+n(l),1))),256))])):m("",!0)])],8,b)}}},Y={class:"grow my-10 px-3 align-middle grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto"},L={__name:"index",async setup(t){let i,o;const d=c=>k(c,"MMM DD, YYYY").value,{data:l}=([i,o]=f(()=>x("blogs",()=>w("blog").sort({date:-1}).find())),i=await i,o(),i);return S({title:"- Blog"}),(c,F)=>{const y=N;return a(),s("main",Y,[(a(!0),s(u,null,p(h(l),e=>(a(),s("div",{key:e._id},[g(y,{slug:e._path,title:e.title,description:e.description,date:d(e.date),tags:e.tags,img:e.img,"img-alt":e.imgAlt,readTime:e.readTime},null,8,["slug","title","description","date","tags","img","img-alt","readTime"])]))),128))])}}};export{L as default};