import{B as E,C as D,D as y,c as h,E as w,G as I,a as x,f as d,g as _,n as L,p as W,l as $,h as s,H as B,j as b,F as N,I as O,i as T,w as V,t as g}from"./DJjo5Nk7.js";import{_ as S}from"./DlAUqK2U.js";import{_ as F}from"./JfpzSNyG.js";import{u as G}from"./D1IfEWSl.js";import{q as H}from"./DH3ynkwY.js";import"./DfwPwMA7.js";function X(e){return E()?(D(e),!0):!1}function C(e){return typeof e=="function"?e():y(e)}const Y=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const q=Object.prototype.toString,z=e=>q.call(e)==="[object Object]",M=()=>{};function J(e){var t;const n=C(e);return(t=n==null?void 0:n.$el)!=null?t:n}const A=Y?window:void 0;function K(...e){let t,n,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,r]=e,t=A):[t,n,o,r]=e,!t)return M;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const l=[],i=()=>{l.forEach(c=>c()),l.length=0},a=(c,u,f,m)=>(c.addEventListener(u,f,m),()=>c.removeEventListener(u,f,m)),p=I(()=>[J(t),C(r)],([c,u])=>{if(i(),!c)return;const f=z(u)?{...u}:u;l.push(...n.flatMap(m=>o.map(j=>a(c,m,j,f))))},{immediate:!0,flush:"post"}),v=()=>{p(),i()};return X(v),v}function P(e={}){const{window:t=A,behavior:n="auto"}=e;if(!t)return{x:h(0),y:h(0)};const o=h(t.scrollX),r=h(t.scrollY),l=w({get(){return o.value},set(a){scrollTo({left:a,behavior:n})}}),i=w({get(){return r.value},set(a){scrollTo({top:a,behavior:n})}});return K(t,"scroll",()=>{o.value=t.scrollX,r.value=t.scrollY},{capture:!1,passive:!0}),{x:l,y:i}}const k=e=>(W("data-v-55b427d1"),e=e(),$(),e),Q=k(()=>s("h1",null,[s("span",{class:"name first"},"Tobija"),s("span",{class:"claim active-grotesk"},"Concept. Design. Code."),s("span",{class:"name last"},"Fischer")],-1)),R=k(()=>s("h2",{class:"active-grotesk"},"Silently documenting random bits of my web development journey.",-1)),U=[Q,R],Z=x({__name:"Header",setup(e){const{y:t}=P();return(n,o)=>(d(),_("header",{class:L(y(t)>175?"fixed":"")},U,2))}}),ee=S(Z,[["__scopeId","data-v-55b427d1"]]),te={key:0,role:"list"},ne=x({__name:"index",async setup(e){let t,n;const{data:o}=([t,n]=B(()=>G("bloglist",()=>H("/blog").find())),t=await t,n(),t);return(r,l)=>{const i=ee,a=F;return d(),_("div",null,[b(i),s("main",null,[y(o)?(d(),_("ul",te,[(d(!0),_(N,null,O(y(o),p=>(d(),_("li",null,[b(a,{to:`${p._path}`},{default:V(()=>[s("p",null,g(p.published_at),1),s("h3",null,g(p.title),1)]),_:2},1032,["to"])]))),256))])):T("",!0)])])}}}),ie=S(ne,[["__scopeId","data-v-440cf194"]]);export{ie as default};
