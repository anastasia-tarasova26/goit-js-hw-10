import{i as s}from"./vendor-77e16229.js";const o=document.querySelector(".form");o.addEventListener("submit",i=>{i.preventDefault();const t=o.elements.delay.value,n=o.elements.state.value;new Promise((e,m)=>{setTimeout(()=>{n==="fulfilled"?e(`✅ Fulfilled promise in ${t}ms          `):m(`❌ Rejected promise in ${t}ms          `)},t)}).then(e=>{s.show({color:"green",message:e,position:"topRight"})}).catch(e=>{s.show({color:"red",message:e,position:"topRight"})})});
//# sourceMappingURL=2-snackbar-c6e298f3.js.map
