import{u as d,r as x,s as l,f as n,a as s,j as t}from"./index-BzNIZUVI.js";import{s as p,a as g,b as f,c as h,C as j}from"./CatalogItem-DLxuWKF3.js";const C=()=>{const e=d();x.useEffect(()=>{e(l(1)),e(n())},[e]);const a=s(p),m=s(g),r=s(f),i=s(h),u=()=>{e(l(r+1)),e(n())},c=a.slice(0,r*i);return t.jsxs("div",{className:"flex flex-col items-center",children:[t.jsx("ul",{className:"flex flex-col items-center ",children:c.map(o=>t.jsx(j,{item:o},o._id))}),c.length<a.length&&!m&&t.jsx("button",{className:"w-[146px] h-[56px] mt-[18px] mb-6 py-[16px] px-[32px] border border-[rgba(71, 84, 103, 0.2)] rounded-[200px] font-medium text-sm tracking-[-0.01em] text-[#101828]",onClick:u,children:"Load more"})]})},L=()=>{const[e,a]=x.useState("all");return t.jsx("div",{className:"px-16 ml-auto mr-auto w-[1440px] mt-[50px] flex",children:t.jsx(C,{filter:e})})};export{L as default};
