const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./D7KHetir.js","./DJjo5Nk7.js","./entry.CvZIZUJ1.css","./DH3ynkwY.js","./DfwPwMA7.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{u as f}from"./D1IfEWSl.js";import{v,V as p,_ as g,a as d,W as l,E as h,s as _,K as y,M as r}from"./DJjo5Nk7.js";import{q as C,w as m,e as w,s as P,j as $,u as N}from"./DH3ynkwY.js";import{u as j}from"./DfwPwMA7.js";import{_ as E}from"./JfpzSNyG.js";const T=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await g(()=>import("./D7KHetir.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r(E,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),R=D;export{R as default};
