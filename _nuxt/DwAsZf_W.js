import{a0 as u,a as c,v as r,E as l,a2 as d,L as h,a3 as m,f as g,a9 as f,D as i,ak as p}from"./DJjo5Nk7.js";function x(t){throw u({fatal:!0,statusCode:500,statusMessage:`${t} is provided by @nuxt/image. Check your console to install it or run 'npx nuxi@latest module add @nuxt/image'`})}const S={setup:()=>x("<NuxtImg>")},w=c({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const n=r().public.mdc.useNuxtImage?S:"img",e=t,o=l(()=>{var s;if((s=e.src)!=null&&s.startsWith("/")&&!e.src.startsWith("//")){const a=d(h(r().app.baseURL));if(a!=="/"&&!e.src.startsWith(a))return m(a,e.src)}return e.src});return(s,a)=>(g(),f(p(i(n)),{src:i(o),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{w as default};
