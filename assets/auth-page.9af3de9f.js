import{_ as l,o as a,c as i,a as s,m as b,G as f,B as v,C as w,r as c,e as d,i as h,h as k,d as I,p as S,b as $}from"./index.0907dd76.js";import{C as x}from"./loader.0a707479.js";const y={},B={width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L=s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 1.72705C5.64625 1.72705 0.5 6.8733 0.5 13.227C0.5 18.3158 3.79187 22.6139 8.36312 24.1377C8.93812 24.2383 9.15375 23.8933 9.15375 23.5914C9.15375 23.3183 9.13938 22.4127 9.13938 21.4495C6.25 21.9814 5.5025 20.7452 5.2725 20.0983C5.14313 19.7677 4.5825 18.747 4.09375 18.4739C3.69125 18.2583 3.11625 17.7264 4.07938 17.712C4.985 17.6977 5.63187 18.5458 5.8475 18.8908C6.8825 20.6302 8.53563 20.1414 9.19688 19.8396C9.2975 19.0921 9.59938 18.5889 9.93 18.3014C7.37125 18.0139 4.6975 17.022 4.6975 12.6233C4.6975 11.3727 5.14312 10.3377 5.87625 9.53267C5.76125 9.24517 5.35875 8.06643 5.99125 6.48518C5.99125 6.48518 6.95438 6.1833 9.15375 7.66393C10.0738 7.40518 11.0513 7.2758 12.0288 7.2758C13.0063 7.2758 13.9838 7.40518 14.9038 7.66393C17.1031 6.16893 18.0662 6.48518 18.0662 6.48518C18.6987 8.06643 18.2962 9.24517 18.1812 9.53267C18.9144 10.3377 19.36 11.3583 19.36 12.6233C19.36 17.0364 16.6719 18.0139 14.1131 18.3014C14.53 18.6608 14.8894 19.3508 14.8894 20.4289C14.8894 21.967 14.875 23.2033 14.875 23.5914C14.875 23.8933 15.0906 24.2527 15.6656 24.1377C20.2081 22.6139 23.5 18.3014 23.5 13.227C23.5 6.8733 18.3538 1.72705 12 1.72705V1.72705Z",fill:"white"},null,-1),P=[L];function R(e,t){return a(),i("svg",B,P)}const V=l(y,[["render",R]]),G=(e,t,o)=>b({url:"/github",method:"POST",data:{clientId:e,code:t,clientSecret:o}},!0),N=e=>{const t=`${f}/login/oauth/authorize`,o=new URLSearchParams;o.append("client_id",e),o.append("scope","repo:status read:user"),window.location.href=`${t}?${o}`},n={clientId:"7122eb36b46496384643",clientSecret:"8ec491f725fb9dfe0160e7f14b610f781476144a"},T="/assets/macbook.1300b7ae.png";const U={name:"auth-page",components:{CLoader:x,IconGithub:V,IconLogo:v},data(){return{isCode:!0}},created(){const e=new URLSearchParams(window.location.search).get("code");this.isCode=!!e,e&&G(n.clientId,e,n.clientSecret).then(t=>{const{token:o}=t;localStorage.setItem("token",o),this.$router.replace({name:w.favourites})}).catch(t=>{console.log(t)})},methods:{getCode(){N(n.clientId)}}},u=e=>(S("data-v-aab32a6b"),e=e(),$(),e),A={class:"auth"},z={class:"auth__page-content page-content"},H={key:0,class:"auth__content"},M={class:"auth__header"},j=u(()=>s("div",{class:"auth__subtitle"}," More than just one repository. This is our digital world. ",-1)),q=I(" Authorize with github "),E=u(()=>s("div",{class:"auth__device-img-wrapper"},[s("img",{src:T,alt:"macbook",width:"800",height:"615",class:"auth__device-img"}),s("div",{class:"auth__device-background"})],-1));function O(e,t,o,Z,r,_){const p=c("icon-logo"),C=c("icon-github"),g=c("c-loader");return a(),i("div",A,[s("div",z,[r.isCode?h("",!0):(a(),i("div",H,[s("div",M,[d(p,{class:"auth__logo"}),j,s("button",{type:"button",onClick:t[0]||(t[0]=(...m)=>_.getCode&&_.getCode(...m)),class:"btn auth__btn"},[q,d(C,{class:"auth__btn-icon"})])]),E])),r.isCode?(a(),k(g,{key:1,class:"loader-center-page"})):h("",!0)])])}const J=l(U,[["render",O],["__scopeId","data-v-aab32a6b"]]);export{J as default};