import{_ as p}from"./nuxt-link.e4d5c256.js";import{o as e,f as l,w as f,a as i,t as r,c as n,j as m,F as _,r as g,h as y,i as x,_ as h}from"./entry.8dee9017.js";import{u as w,q as k}from"./query.4f114b71.js";import"./preview.e5dd0b6d.js";const S={class:"max-w-sm rounded-lg overflow-hidden shadow-lg m-3 p-6 border border-gray-100"},A=["src","alt"],b={class:"py-4"},B={class:"font-semibold text-3xl mb-2"},C={key:0,class:"my-1 text-sm text-gray-600 font-light"},v={class:"text-gray-600 text-base"},$={key:0,class:"flex flex-wrap pt-4 pb-2"},N={class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},q={__name:"Card",props:{title:{type:String},description:{type:String},icon:{type:String,default:"IconMarkdown"},img:{type:String},imgAlt:{type:String},date:{type:String},slug:{type:String,default:null},tags:{type:Array,default:()=>[]}},setup(t){return(a,o)=>{const c=p;return e(),l(c,{href:t.slug},{default:f(()=>[i("div",S,[i("img",{class:"w-full rounded",src:t.img,alt:t.imgAlt},null,8,A),i("div",b,[i("h2",B,r(t.title),1),i("em",null,[t.date?(e(),n("p",C,r(t.date),1)):m("",!0)]),i("p",v,r(t.description),1)]),t.tags.length>0?(e(),n("div",$,[(e(!0),n(_,null,g(t.tags,d=>(e(),n("span",N,"#"+r(d),1))),256))])):m("",!0)])]),_:1},8,["href"])}}},D=q,F={class:"grow my-10 px-3 align-middle grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto"},L={__name:"BlogsPage",async setup(t){let a,o;const{data:c}=([a,o]=y(()=>w("blogs",()=>k("blog").only(["_id","_path","title","date","description","tags","img","imgAlt"]).find())),a=await a,o(),a);return(d,E)=>{const u=D;return e(),n("main",F,[(e(!0),n(_,null,g(x(c),s=>(e(),n("div",null,[(e(),l(u,{key:s._id,slug:s._path,title:s.title,description:s.description,date:s.date,tags:s.tags,img:s.img,"img-alt":s.imgAlt},null,8,["slug","title","description","date","tags","img","img-alt"]))]))),256))])}}},P=L,V={};function j(t,a){const o=P;return e(),l(o)}const H=h(V,[["render",j]]);export{H as default};
