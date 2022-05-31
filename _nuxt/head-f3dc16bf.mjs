import{q as c,y as u,E as a,_ as y,d as b,r as x,J as C,K as M,c as v,z as g,F as f,L as S,M as P,s as $,N as Z,D as z,O,G as k,H as j,P as R,Q as D,R as Y,S as V,v as B,C as F,b as T}from"./entry-04f2ec62.mjs";const H={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W=a("path",{fill:"currentColor",d:"M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"},null,-1),E=a("path",{fill:"none",d:"m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z"},null,-1),q=[W,E];function G(n,s){return c(),u("svg",H,q)}var J={name:"carbon-checkmark-filled",render:G};const K={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Q=a("path",{fill:"currentColor",d:"M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2zm-1.1 6h2.2v11h-2.2V8zM16 25c-.8 0-1.5-.7-1.5-1.5S15.2 22 16 22s1.5.7 1.5 1.5S16.8 25 16 25z"},null,-1),X=[Q];function tt(n,s){return c(),u("svg",K,X)}var et={name:"carbon-warning-filled",render:tt};const nt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},st=a("path",{fill:"currentColor",d:"M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2ZM9 16.41L7.59 15l2-2l-2-2L9 9.59l2 2l2-2L14.41 11l-2 2l2 2L13 16.41l-2-2ZM16 25a3 3 0 1 1 3-3a3 3 0 0 1-3 3Zm8.41-10L23 16.41l-2-2l-2 2L17.59 15l2-2l-2-2L19 9.59l2 2l2-2L24.41 11l-2 2Z"},null,-1),rt=[st];function at(n,s){return c(),u("svg",nt,rt)}var ot={name:"carbon-face-dizzy-filled",render:at};const ct={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},lt=a("path",{fill:"currentColor",d:"M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 23a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25Zm1.142-7.754v2.501h-2.25V15h2.125a2.376 2.376 0 0 0 0-4.753h-1.5a2.378 2.378 0 0 0-2.375 2.375v.638h-2.25v-.638A4.628 4.628 0 0 1 15.517 8h1.5a4.624 4.624 0 0 1 .125 9.246Z"},null,-1),it=a("path",{fill:"none",d:"M16 25a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25Zm1.142-7.754v2.501h-2.25V15h2.125a2.376 2.376 0 0 0 0-4.753h-1.5a2.378 2.378 0 0 0-2.375 2.375v.638h-2.25v-.638A4.628 4.628 0 0 1 15.517 8h1.5a4.624 4.624 0 0 1 .125 9.246Z"},null,-1),dt=[lt,it];function ut(n,s){return c(),u("svg",ct,dt)}var _t={name:"carbon-help-filled",render:ut};const L=n=>n>=0?(n*100).toFixed(2)+"%":"No data available",A=(n,s="bg")=>n>=.9?`${s}-purple-500`:n>=.5?`${s}-yellow-400`:n>=0?`${s}-red-400`:`${s}-gray-200`,U=(n,s="state")=>n>=.9?s==="state"?"success":"Fully operational":n>=.5?s==="state"?"warning":"Partial Outage":n>=0?s==="state"?"danger":"Major Outage":s==="state"?"unknown":"Unknown",mt=b({name:"StatusIcon",props:{uptime:Number},setup(n,{expose:s}){s();const e={props:n,IconTick:J,IconWarning:et,IconDanger:ot,IconUnknown:_t,statusString:U};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),pt={class:"inline-flex md:text-xl"};function ht(n,s,t,e,o,p){return c(),u("div",pt,[e.statusString(t.uptime)=="success"?(c(),x(e.IconTick,{key:0,class:"text-purple-500"})):e.statusString(t.uptime)=="warning"?(c(),x(e.IconWarning,{key:1,class:"text-yellow-300"})):e.statusString(t.uptime)=="danger"?(c(),x(e.IconDanger,{key:2,class:"text-red-400"})):e.statusString(t.uptime)=="unknown"?(c(),x(e.IconUnknown,{key:3,class:"text-gray-400"})):C("",!0)])}var I=y(mt,[["render",ht]]);const ft=b({name:"OverallStatus",props:{report_data:Object},setup(n,{expose:s}){s();const t=n,{$dayjs:e}=M(),o=v(()=>(Array.isArray(t.report_data)?t.report_data:[t.report_data]).map(i=>{if(!i)return;let r=i.body.filter(m=>e.utc(m.time).isToday()).map(m=>m.status==="success"?1:0);return r.reduce((m,h)=>m+h,0)/r.length})),p=v(()=>o.value.find(l=>l>=0&&l<.5)?0:o.value.find(l=>l>=.5&&l<.9)?.5:1),_=v(()=>{const l=o.value.filter(r=>r>=0&&r<.5).length,i=o.value.filter(r=>r>=.5&&r<.9).length;return l?`${l} Major Outage`:i?`${i} Partial Outage`:"All Systems Operational"}),d={props:t,$dayjs:e,todayUptimeList:o,todayOverallUptime:p,todayOverallMessage:_,statusColor:A};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),xt={class:"flex justify-center"},vt={class:"ml-3 md:ml-6"};function gt(n,s,t,e,o,p){const _=I;return c(),u("div",xt,[a("div",{class:S(["w-full bg-white p-6 md:p-8 flex items-center rounded-xl shadow-lg shadow-purple-100 text-xl md:text-3xl font-medium",e.statusColor(e.todayOverallUptime,"text")])},[g(_,{uptime:e.todayOverallUptime,class:"md:text-3xl"},null,8,["uptime"]),a("h2",vt,f(e.todayOverallMessage),1)],2)])}var Jt=y(ft,[["render",gt]]);const yt=b({name:"Status",props:{date:Object,uptime:Number,count:Number},setup(n,{expose:s}){s();const t=n,e=v(()=>A(t.uptime)),o={props:t,uptimeClass:e,formatUptime:L,statusString:U};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),bt={class:"px-4 py-2 flex flex-col items-center"},wt={class:"mt-2 text-sm text-gray-400"};function $t(n,s,t,e,o,p){const _=P("tippy"),d=Z;return c(),x(d,null,{default:$(()=>[g(_,{interactive:"",trigger:"click mouseenter",placement:"bottom"},{default:$(({state:l})=>[a("div",{class:S(["w-2 h-7 rounded cursor-pointer transform transition hover:scale-125",[e.uptimeClass,{"scale-125":l.isMounted}]])},null,2)]),content:$(()=>[a("div",bt,[a("p",null,f(t.date.format("DD MMM YYYY")),1),a("p",{class:S(["text-white text-center mt-2 px-4 py-2 rounded-lg",e.uptimeClass])},f(e.statusString(t.uptime,"message")),3),a("p",wt,f(e.formatUptime(t.uptime)),1)])]),_:1})]),_:1})}var St=y(yt,[["render",$t]]);const kt=b({name:"StatusGrid",props:{data:Object},setup(n,{expose:s}){const t=n,e=z(),o=function(l,i){var r=[];for(let m=i-1;m>=0;m--){let h=O.utc(l).subtract(m,"day");r.push(h)}return r},p=v(()=>o(new Date,e.value).map(i=>{var h;let r=(h=t.data)==null?void 0:h.filter(w=>i.isSame(O.utc(w.time),"day")).map(w=>w.status==="success"?1:0),m=r!=null&&r.length?r.reduce((w,N)=>w+N,0)/r.length:-1;return{date:i,uptime:m,count:r==null?void 0:r.length}})),_=v(()=>{let l=p.value.filter(i=>i.uptime>=0);return l.reduce((i,r)=>i+r.uptime*r.count,0)/l.reduce((i,r)=>i+r.count,0)});s({overallUptime:_});const d={props:t,gridCount:e,getDateArray:o,computedData:p,overallUptime:_};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),Ot={key:0,class:"flex justify-between"},Ct={key:1,class:"h-8.5 w-full bg-gray-100 rounded-lg animate-pulse"};function Mt(n,s,t,e,o,p){const _=St;return t.data?(c(),u("div",Ot,[(c(!0),u(k,null,j(e.computedData,d=>(c(),x(_,R(D({key:d.date},d)),null,16))),128))])):(c(),u("div",Ct))}var jt=y(kt,[["render",Mt]]);const Lt=b({name:"Card",props:{meta_data:Object,report_data:Object},setup(n,{expose:s}){s();const t=n,e=Y(),o={props:t,status:e,formatUptime:L};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),At={class:"my-8 md:my-10 w-full"},Ut={class:"mb-4 flex items-center justify-between"},It={class:"mx-0.5 truncate"},Nt={class:"flex items-center"},Pt={class:"text-sm text-gray-400"},Zt={key:0,class:"ml-3 md:text-xl text-gray-400"},zt={key:1,class:"bg-gray-100 rounded-lg w-24 h-7 animate-pulse"};function Rt(n,s,t,e,o,p){var i,r,m,h;const _=I,d=B,l=jt;return c(),u("div",At,[a("div",Ut,[a("div",It,[a("div",Nt,[g(_,{uptime:(i=e.status)==null?void 0:i.overallUptime},null,8,["uptime"]),g(d,{to:t.meta_data._path,class:"ml-2 md:text-xl"},{default:$(()=>[V(f(t.meta_data.title),1)]),_:1},8,["to"])]),a("h4",Pt,f(t.meta_data.url),1)]),a("div",null,[(r=e.status)!=null&&r.overallUptime?(c(),u("p",Zt,f(e.formatUptime((m=e.status)==null?void 0:m.overallUptime)),1)):(c(),u("div",zt))])]),g(l,{ref:"status",data:(h=t.report_data)==null?void 0:h.body},null,8,["data"])])}var Kt=y(Lt,[["render",Rt]]);const Dt=b({name:"IncidentReport",props:{incidents:Object},setup(n,{expose:s}){s();const t=n,{$dayjs:e}=M(),o={props:t,$dayjs:e};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),Yt=a("div",{class:"mt-12 md:mt-20 font-semibold inline-flex items-end"},[a("h2",{class:"text-xl md:text-3xl"},"Recent Incident")],-1),Vt={class:"mt-4 md:mt-8"},Bt={key:0},Ft=a("div",{class:"bg-gray-50 rounded-xl p-8 h-48 flex items-center justify-center"},"No incident reported",-1),Tt=[Ft],Ht={class:"md:text-xl my-4"},Wt={class:"bg-gray-50 rounded-xl p-4 md:p-8"},Et={key:0,class:"px-4 py-2 mb-4 rounded-xl text-white bg-purple-500 w-max"};function qt(n,s,t,e,o,p){const _=F;return c(),u(k,null,[Yt,a("div",Vt,[!t.incidents||t.incidents.length==0?(c(),u("div",Bt,Tt)):(c(!0),u(k,{key:1},j(t.incidents,(d,l)=>(c(),u("div",{class:"mb-8",key:d._id},[a("h3",Ht,f(e.$dayjs.utc(d.date)),1),a("div",Wt,[d.resolved?(c(),u("p",Et,"Resolved")):C("",!0),g(_,{class:"prose max-w-none",value:d},null,8,["value"])])]))),128))])],64)}var Qt=y(Dt,[["render",qt]]);const Xt=(n="StatusBase",s="Free & Open Source uptime monitoring tool and beautiful status pages with incidents reports. Powered by Nuxt Content!",t="https://statusbase.vercel.app/og.png")=>{T({title:n,htmlAttrs:{lang:"en"},viewport:"width=device-width, initial-scale=1",charset:"utf-8",link:[{rel:"icon",href:"/favicon.png"}],meta:[{name:"description",content:s},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:"@zernonia"},{name:"twitter:title",content:n},{name:"twitter:description",content:s},{name:"twitter:image",content:t},{property:"og:type",content:"website"},{property:"og:title",content:n},{property:"og:url",content:"https://statusbase.vercel.app/"},{property:"og:image",content:t!=null?t:t},{property:"og:description",content:s}]})};export{Jt as _,Qt as a,Kt as b,Xt as u};
