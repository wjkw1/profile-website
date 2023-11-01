import{o as e,c as n,a as i,t as r,j as l,F as d,r as g,h as _,b as u,i as p,_ as y,f}from"./entry.beb1e7c7.js";import{u as h,q as x}from"./query.3bfd18da.js";import"./preview.c11c2059.js";const w=["href"],k={class:"max-w-sm rounded-lg overflow-hidden shadow-lg m-3 p-6 border border-gray-100"},S=["src","alt"],b={class:"py-4"},A={class:"font-semibold text-3xl mb-2"},B={key:0,class:"my-1 text-sm text-gray-600 font-light"},v={class:"text-gray-600 text-base"},C={key:0,class:"flex flex-wrap pt-4 pb-2"},$={class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},N={__name:"Card",props:{title:{type:String},description:{type:String},icon:{type:String,default:"IconMarkdown"},img:{type:String},imgAlt:{type:String},date:{type:String},slug:{type:String,default:null},tags:{type:Array,default:()=>[]}},setup(t){return(a,o)=>(e(),n("a",{href:t.slug},[i("div",k,[i("img",{class:"w-full rounded",src:t.img,alt:t.imgAlt},null,8,S),i("div",b,[i("h2",A,r(t.title),1),i("em",null,[t.date?(e(),n("p",B,r(t.date),1)):l("",!0)]),i("p",v,r(t.description),1)]),t.tags.length>0?(e(),n("div",C,[(e(!0),n(d,null,g(t.tags,c=>(e(),n("span",$,"#"+r(c),1))),256))])):l("",!0)])],8,w))}},V=N,q={class:"grow my-10 px-3 align-middle grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto"},D={__name:"BlogsPage",async setup(t){let a,o;const{data:c}=([a,o]=_(()=>h("blogs",()=>x("blog").only(["_id","_path","title","date","description","tags","img","imgAlt"]).find())),a=await a,o(),a);return(E,I)=>{const m=V;return e(),n("main",q,[(e(!0),n(d,null,g(p(c),s=>(e(),n("div",{key:s._id},[u(m,{slug:s._path,title:s.title,description:s.description,date:s.date,tags:s.tags,img:s.img,"img-alt":s.imgAlt},null,8,["slug","title","description","date","tags","img","img-alt"])]))),128))])}}},F=D,P={};function j(t,a){const o=F;return e(),f(o)}const G=y(P,[["render",j]]);export{G as default};
