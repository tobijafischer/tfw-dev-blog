import{_ as l}from"./ProseCode.vue.bd03f1fc.js";import{d as n,b as s,a4 as i,w as r,e as o,n as u,a6 as g,a5 as d}from"./entry.58d9fc30.js";const h=n({__name:"ProsePre",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]},meta:{type:String,default:null},class:{type:String,default:null},style:{type:[String,Object],default:null}},setup(e){return(a,c)=>{const t=l;return s(),i(t,{code:e.code,language:e.language,filename:e.filename,highlights:e.highlights,meta:e.meta},{default:r(()=>[o("pre",{class:u(a.$props.class),style:g(e.style)},[d(a.$slots,"default")],6)]),_:3},8,["code","language","filename","highlights","meta"])}}});export{h as default};