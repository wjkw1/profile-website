import{h as n,l as o,x as c,o as h,u as r,V as l,W as p,X as u,v as d,Y as f}from"./CSptohBm.js";import{_ as m}from"./voDieJjQ.js";const S=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(a){const t=a,i=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=p(u(d().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return f(e,t.src)}return t.src});return(s,e)=>(h(),c(l(r(m)),{src:r(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};
