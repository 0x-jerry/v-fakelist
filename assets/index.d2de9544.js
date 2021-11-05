import{r as e,a as t,p as i,b as n,d as s,c as l,o as r,e as a,f as d,g as o,h as u,i as h,n as c,u as p,w as g,F as f,j as m,k as v,l as y,t as w,m as k,v as b,q as x,s as S,x as q,y as A}from"./vendor.30a03375.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const H=e(new Array(1e3).fill(0).map(((e,t)=>E(`item-${t}`))));function E(e){return{id:e,check:!1,height:~~(10+40*Math.random()),items:new Array(300).fill(0).map(((e,t)=>String(t)))}}const L=e({renderSize:t(20)}),z={items:H,get:e=>H.find((t=>t.id===e))};i("data-v-3e60c06d");const _=["data-fake-id"];n();var N=s({props:{uid:{type:String,required:!0},height:{type:Number,required:!0}},emits:["update:height"],setup(e,{emit:i}){const n=e,s=l((()=>({height:n.height+"px"}))),g=t(),f=new ResizeObserver((()=>{g.value&&i("update:height",g.value.clientHeight)}));return r((()=>{g.value&&(f.observe(g.value),i("update:height",g.value.clientHeight))})),a((()=>{f.disconnect()})),(t,i)=>(d(),o("div",{class:"fake-item",key:e.uid,"data-fake-id":e.uid,style:c(p(s))},[u("div",{ref:g},[h(t.$slots,"default",{},void 0,!0)],512)],12,_))}});N.__scopeId="data-v-3e60c06d";var U=s({props:{ids:{type:Array,required:!0},minHeight:{type:Number,required:!1}},setup(i){const n=i,s=e({items:[],offScreenStyle:{width:""}}),a=l((()=>s.items.filter((e=>e.render)))),u=l((()=>{let e=0,t=0,i=0,n=-1;return s.items.forEach(((s,l)=>{s.render&&-1===n&&(n=l),-1!==n?s.render?i+=s.height:l<n?e+=s.height:t+=s.height:e+=s.height})),{height:i+"px",paddingTop:e+"px",paddingBottom:t+"px"}})),w=t();let k=!1;const b={};async function x(){if(!w.value)return;const e=s.items,t=w.value.querySelectorAll("[data-fake-id]");t.forEach((t=>{const i=t.getAttribute("data-fake-id"),n=e.find((e=>e.uid===i));n&&-1===n.height&&(n.height=t.clientHeight)})),e.forEach((e=>{-1===e.height&&(e.height=n.minHeight||t.item(0).clientHeight)}))}g((()=>{s.items=n.ids.map(((e,t)=>b[e]||(b[e]={uid:e,height:-1,render:t<20}))),k&&x()}));return r((()=>{x(),k=!0,window.addEventListener("wheel",(e=>{e.preventDefault(),(async(e=0)=>{if(!w.value)return;const t=w.value.offsetTop,i=window.scrollY-0+e,n=i+window.innerHeight+0;let l=t;s.items.forEach((e=>{const t=l,s=t+e.height,r=t>=i&&t<=n||s>=i&&s<=n||t<=i&&s>=n;e.render=r,l+=e.height})),L.renderSize=s.items.filter((e=>e.render)).length})(e.deltaY),console.log("hello",window.scrollY),window.scrollTo({top:window.scrollY+e.deltaY})}),{passive:!1})})),(e,t)=>(d(),o("div",{ref:w,class:"rendered",style:c(p(u))},[(d(!0),o(f,null,m(p(a),(t=>(d(),v(N,{key:t.uid,uid:t.uid,height:t.height,"onUpdate:height":e=>t.height=e},{default:y((()=>[h(e.$slots,"content",{uid:t.uid})])),_:2},1032,["uid","height","onUpdate:height"])))),128))],4))}});i("data-v-f05096fc");const Y={class:"counter"},$={class:"flex"},I={style:{"font-size":"35px"}},T=u("span",null," Height: ",-1),V={class:"flex-wrap"};n();var j=s({props:{uid:{type:String,required:!0}},setup(e){const i=e,n=t({});g((()=>{n.value=z.get(i.uid)}));const s=l((()=>({height:n.value.height+"px"})));return(t,i)=>(d(),o("div",Y,[u("div",$,[u("span",I,w(e.uid),1),u("label",null,[T,k(u("input",{"onUpdate:modelValue":i[0]||(i[0]=e=>n.value.height=e),type:"number"},null,512),[[b,n.value.height,void 0,{number:!0}]])]),k(u("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>n.value.check=e),type:"checkbox"},null,512),[[x,n.value.check]])]),u("div",V,[(d(!0),o(f,null,m(n.value.items,(e=>(d(),o("span",{class:"gap",key:e},w(e),1)))),128))]),u("div",{class:"fake-height",style:c(p(s))},w(n.value.height)+" px",5)]))}});j.__scopeId="data-v-f05096fc";const F={class:"fixed-info"},M={class:"app"},O=q(" Fake List: "),B=u("span",null,"Select All",-1),C=u("span",null,"list Length:",-1);A(s({setup(t){const i=l((()=>z.items.map((e=>e.id))));function n(e){z.items.forEach((t=>{t.check=e.target.checked}))}const s=e({length:1e3});return g((()=>{const e=s.length;if(z.items.length>=e)z.items.length=e;else{const t=z.items.length;z.items.push(...new Array(e-t).fill(0).map(((e,i)=>E(`item-${t+i}`))))}})),(e,t)=>(d(),o(f,null,[u("div",F,"item size: "+w(p(L).renderSize),1),u("div",M,[u("h1",null,[O,u("label",null,[B,u("input",{type:"checkbox",onChange:n},null,32)]),u("label",null,[C,k(u("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>p(s).length=e),type:"number"},null,512),[[b,p(s).length,void 0,{number:!0}]])])]),S(U,{ids:p(i)},{content:y((({uid:e})=>[S(j,{uid:e},null,8,["uid"])])),_:1},8,["ids"])])],64))}})).mount("#app");