(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{9906:(e,t,r)=>{Promise.resolve().then(r.bind(r,9382))},9382:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>k});var o=r(7437),s=r(2265);class a{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let i={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},l=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},n=async(e,t,r={})=>{let o=await fetch(i.origin+e,{method:"POST",headers:r,body:t}),s=await o.text(),l=new a(o.status,s);if(o.ok)return l;throw l},c=(e,t,r)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||"string"!=typeof r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},m=e=>e.webdriver||!e.languages||0===e.languages.length,d=()=>new a(451,"Unavailable For Headless Browser"),u=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},p=e=>!e.list?.length||!e.watchVariable,h=(e,t)=>e instanceof FormData?e.get(t):e[t],f=(e,t)=>{if(p(e))return!1;u(e.list,e.watchVariable);let r=h(t,e.watchVariable);return"string"==typeof r&&e.list.includes(r)},b=()=>new a(403,"Forbidden"),x=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"},g=async(e,t,r)=>{let o=Number(await r.get(e)||0);return t-Date.now()+o},y=async(e,t,r)=>{if(!t.throttle||!r)return!1;x(t.throttle,t.id);let o=t.id||e;return await g(o,t.throttle,r)>0||(await r.set(o,Date.now().toString()),!1)},w=()=>new a(429,"Too Many Requests"),v=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},j=e=>"string"==typeof e?document.querySelector(e):e,N={sendForm:async(e,t,r,o)=>{let s=l(o),a=s.publicKey||i.publicKey,u=s.blockHeadless||i.blockHeadless,p=i.storageProvider||s.storageProvider,h={...i.blockList,...s.blockList},x={...i.limitRate,...s.limitRate};if(u&&m(navigator))return Promise.reject(d());let g=j(r);c(a,e,t),v(g);let N=new FormData(g);return f(h,N)?Promise.reject(b()):await y(location.pathname,x,p)?Promise.reject(w()):(N.append("lib_version","4.4.1"),N.append("service_id",e),N.append("template_id",t),N.append("user_id",a),n("/api/v1.0/email/send-form",N))}};function k(){let e=(0,s.useRef)(),[t,r]=(0,s.useState)(!1);return(0,o.jsxs)("section",{id:"contact-form",className:"flex-grow","aria-labelledby":"contact-title",tabIndex:"-1",children:[(0,o.jsx)("header",{className:"border-b border-gray-200",children:(0,o.jsx)("div",{className:"mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8",children:(0,o.jsx)("div",{className:"flex flex-row items-center justify-center gap-4",children:(0,o.jsx)("h1",{id:"contact-title",className:"text-2xl font-bold text-portfolio sm:text-3xl text-center",children:"Contact"})})})}),(0,o.jsx)("div",{className:"bg-stone-100 text-center p-4 mx-auto max-w-screen-md mt-4 rounded-lg",children:(0,o.jsx)("p",{className:"text-md text-portfolio",children:"If you’re ready to invest in high-quality content, get in touch! I’d love to discuss how I can contribute to the success of your business."})}),t&&(0,o.jsx)("p",{className:"text-center text-portfolio text-xl font-bold",role:"status","aria-live":"polite",children:"Message sent!"}),(0,o.jsx)("div",{className:"py-12 lg:py-8 px-4 mx-auto max-w-screen-md",children:(0,o.jsxs)("form",{action:"#",ref:e,onSubmit:t=>{t.preventDefault(),N.sendForm("contact_service","contact_form",e.current,"lhdMxDBMufUETZkc3").then(()=>{console.log("Success!"),r(!0),setTimeout(()=>r(!1),5e3),t.target.reset(),document.getElementById("contact-form").focus()},e=>{console.log("Failed...",e.text)})},className:"space-y-8","aria-describedby":"contact-instructions",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium text-portfolio",children:"Name"}),(0,o.jsx)("input",{type:"text",id:"name",name:"user_name",className:"shadow-sm bg-stone-100 border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 text-portfolio border-portfolio",required:!0,"aria-required":"true"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-portfolio",children:"Email"}),(0,o.jsx)("input",{type:"email",id:"email",name:"user_email",className:"block p-3 w-full text-sm bg-stone-100 rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 text-portfolio border-portfolio",required:!0,"aria-required":"true"})]}),(0,o.jsxs)("div",{className:"sm:col-span-2",children:[(0,o.jsx)("label",{htmlFor:"message",className:"block mb-2 text-sm font-medium text-portfolio",children:"Message"}),(0,o.jsx)("textarea",{id:"message",name:"message",rows:"6",className:"block p-2.5 w-full text-sm bg-stone-100 rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 text-portfolio border-portfolio",required:!0,"aria-required":"true"})]}),(0,o.jsx)("button",{type:"submit",className:"py-3 px-5 text-sm font-medium text-center text-stone-100 bg-portfolio rounded-lg sm:w-fit focus:ring-4 focus:outline-none",children:"Send message"})]})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[130,215,744],()=>t(9906)),_N_E=e.O()}]);