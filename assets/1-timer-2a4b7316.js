import{f as m,i as f}from"./vendor-77e16229.js";const r=document.querySelector("button[data-start]"),a=document.querySelector("#datetime-picker"),p=document.querySelector("span[data-days]"),S=document.querySelector("span[data-hours]"),h=document.querySelector("span[data-minutes]"),y=document.querySelector("span[data-seconds]"),s=1e3;let i=null;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t=t[0],i=t,new Date().getTime()<t.getTime()?r.disabled=!1:(r.disabled=!0,f.show({message:"Please choose a date in the future",messageColor:"white",backgroundColor:"#e34234",position:"topRight"}))}};m("#datetime-picker",g);r.addEventListener("click",t=>{C(),r.disabled=!0,r.style.cursor="not-allowed",a.disabled=!0,a.style.cursor="not-allowed"});function C(){const t=setInterval(()=>{let n=new Date,o=i.getTime()-n.getTime(),e=T(o);p.textContent=e.days.toString().padStart(2,"0"),S.textContent=e.hours.toString().padStart(2,"0"),h.textContent=e.minutes.toString().padStart(2,"0"),y.textContent=e.seconds.toString().padStart(2,"0"),o<=1e3&&clearInterval(t)},s)}function T(t){const n=s*60,o=n*60,e=o*24,c=Math.floor(t/e),u=Math.floor(t%e/o),d=Math.floor(t%e%o/n),l=Math.floor(t%e%o%n/s);return{days:c,hours:u,minutes:d,seconds:l}}
//# sourceMappingURL=1-timer-2a4b7316.js.map