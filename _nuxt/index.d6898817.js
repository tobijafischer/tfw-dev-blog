import{A as E,B as j,C as y,r as m,D,d as w,b as i,c as l,n as I,p as L,i as $,e as o,k as b,E as B,g as x,F as N,G as O,f as V,w as F,t as g}from"./entry.58d9fc30.js";import{_ as H}from"./nuxt-link.067ab680.js";import{u as W}from"./asyncData.c49b3c7a.js";import{q}from"./query.3693d26e.js";import"./preview.84a096c9.js";function X(e){return E()?(j(e),!0):!1}function C(e){return typeof e=="function"?e():y(e)}const Y=typeof window<"u"&&typeof document<"u",z=Object.prototype.toString,G=e=>z.call(e)==="[object Object]",M=()=>{};function T(e){var t;const n=C(e);return(t=n==null?void 0:n.$el)!=null?t:n}const S=Y?window:void 0;function J(...e){let t,n,s,u;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,u]=e,t=S):[t,n,s,u]=e,!t)return M;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const _=[],p=()=>{_.forEach(r=>r()),_.length=0},h=(r,a,d,f)=>(r.addEventListener(a,d,f),()=>r.removeEventListener(a,d,f)),c=D(()=>[T(t),C(u)],([r,a])=>{if(p(),!r)return;const d=G(a)?{...a}:a;_.push(...n.flatMap(f=>s.map(k=>h(r,f,k,d))))},{immediate:!0,flush:"post"}),v=()=>{c(),p()};return X(v),v}function K(e={}){const{window:t=S}=e;if(!t)return{x:m(0),y:m(0)};const n=m(t.scrollX),s=m(t.scrollY);return J(t,"scroll",()=>{n.value=t.scrollX,s.value=t.scrollY},{capture:!1,passive:!0}),{x:n,y:s}}const A=e=>(L("data-v-55b427d1"),e=e(),$(),e),P=A(()=>o("h1",null,[o("span",{class:"name first"},"Tobija"),o("span",{class:"claim active-grotesk"},"Concept. Design. Code."),o("span",{class:"name last"},"Fischer")],-1)),Q=A(()=>o("h2",{class:"active-grotesk"},"Silently documenting random bits of my web development journey.",-1)),R=[P,Q],U=w({__name:"Header",setup(e){const{y:t}=K();return(n,s)=>(i(),l("header",{class:I(y(t)>175?"fixed":"")},R,2))}});const Z=b(U,[["__scopeId","data-v-55b427d1"]]),ee={key:0,role:"list"},te=w({__name:"index",async setup(e){let t,n;const{data:s}=([t,n]=B(()=>W("bloglist",()=>q("/blog").find())),t=await t,n(),t);return(u,_)=>{const p=Z,h=H;return i(),l("div",null,[x(p),o("main",null,[y(s)?(i(),l("ul",ee,[(i(!0),l(N,null,O(y(s),c=>(i(),l("li",null,[x(h,{to:`${c._path}`},{default:F(()=>[o("p",null,g(c.published_at),1),o("h3",null,g(c.title),1)]),_:2},1032,["to"])]))),256))])):V("",!0)])])}}});const ce=b(te,[["__scopeId","data-v-440cf194"]]);export{ce as default};