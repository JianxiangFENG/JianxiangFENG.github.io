(()=>{"use strict";var n,e,t,r,i,o=-1,a=function(n){addEventListener("pageshow",(function(e){e.persisted&&(o=e.timeStamp,n(e))}),!0)},c=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},u=function(){var n=c();return n&&n.activationStart||0},s=function(n,e){var t=c(),r="navigate";return o>=0?r="back-forward-cache":t&&(document.prerendering||u()>0?r="prerender":document.wasDiscarded?r="restore":t.type&&(r=t.type.replace(/_/g,"-"))),{name:n,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},f=function(n,e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var r=new PerformanceObserver((function(n){Promise.resolve().then((function(){e(n.getEntries())}))}));return r.observe(Object.assign({type:n,buffered:!0},t||{})),r}}catch(n){}},d=function(n,e,t,r){var i,o;return function(a){e.value>=0&&(a||r)&&((o=e.value-(i||0))||void 0===i)&&(i=e.value,e.delta=o,e.rating=function(n,e){return n>e[1]?"poor":n>e[0]?"needs-improvement":"good"}(e.value,t),n(e))}},l=function(n){requestAnimationFrame((function(){return requestAnimationFrame((function(){return n()}))}))},p=function(n){var e=function(e){"pagehide"!==e.type&&"hidden"!==document.visibilityState||n(e)};addEventListener("visibilitychange",e,!0),addEventListener("pagehide",e,!0)},h=function(n){var e=!1;return function(t){e||(n(t),e=!0)}},v=-1,m=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},g=function(n){"hidden"===document.visibilityState&&v>-1&&(v="visibilitychange"===n.type?n.timeStamp:0,y())},w=function(){addEventListener("visibilitychange",g,!0),addEventListener("prerenderingchange",g,!0)},y=function(){removeEventListener("visibilitychange",g,!0),removeEventListener("prerenderingchange",g,!0)},T=function(){return v<0&&(v=m(),w(),a((function(){setTimeout((function(){v=m(),w()}),0)}))),{get firstHiddenTime(){return v}}},E=function(n){document.prerendering?addEventListener("prerenderingchange",(function(){return n()}),!0):n()},C=[1800,3e3],I=function(n,e){e=e||{},E((function(){var t,r=T(),i=s("FCP"),o=f("paint",(function(n){n.forEach((function(n){"first-contentful-paint"===n.name&&(o.disconnect(),n.startTime<r.firstHiddenTime&&(i.value=Math.max(n.startTime-u(),0),i.entries.push(n),t(!0)))}))}));o&&(t=d(n,i,C,e.reportAllChanges),a((function(r){i=s("FCP"),t=d(n,i,C,e.reportAllChanges),l((function(){i.value=performance.now()-r.timeStamp,t(!0)}))})))}))},S=[.1,.25],b={passive:!0,capture:!0},L=new Date,M=function(r,i){n||(n=i,e=r,t=new Date,P(removeEventListener),k())},k=function(){if(e>=0&&e<t-L){var i={entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+e};r.forEach((function(n){n(i)})),r=[]}},$=function(n){if(n.cancelable){var e=(n.timeStamp>1e12?new Date:performance.now())-n.timeStamp;"pointerdown"==n.type?function(n,e){var t=function(){M(n,e),i()},r=function(){i()},i=function(){removeEventListener("pointerup",t,b),removeEventListener("pointercancel",r,b)};addEventListener("pointerup",t,b),addEventListener("pointercancel",r,b)}(e,n):M(e,n)}},P=function(n){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return n(e,$,b)}))},A=[100,300],O=0,x=1/0,N=0,R=function(n){n.forEach((function(n){n.interactionId&&(x=Math.min(x,n.interactionId),N=Math.max(N,n.interactionId),O=N?(N-x)/7+1:0)}))},_=function(){return i?O:performance.interactionCount||0},D=function(){"interactionCount"in performance||i||(i=f("event",R,{type:"event",buffered:!0,durationThreshold:0}))},B=[200,500],F=0,H=function(){return _()-F},j=[],q={},U=function(n){var e=j[j.length-1],t=q[n.interactionId];if(t||j.length<10||n.duration>e.latency){if(t)t.entries.push(n),t.latency=Math.max(t.latency,n.duration);else{var r={id:n.interactionId,latency:n.duration,entries:[n]};q[r.id]=r,j.push(r)}j.sort((function(n,e){return e.latency-n.latency})),j.splice(10).forEach((function(n){delete q[n.id]}))}},z=[2500,4e3],J={};const W=window.innerWidth,X=window.innerHeight,G=window.screen,K=window.performance,Q=window.navigator,V=Q.connection||Q.mozConnection||Q.webkitConnection,Y=window.devicePixelRatio||1;function Z(n,e,t){return window.addEventListener(n,e,t)}const nn="unattributable";function en(n,e){if(!(n&&n instanceof Node))return nn;let{tagName:t,classList:r,id:i}=n;r=r&&r.length>0?Array.from(r):[],e&&([i,t,r]=e(i,t,r));let o,a=function(n){return n.sort().join(".")}(r);return o=i||a?`${t}${i?`#${i}`:""}${a?`.${a}`:""}`:`${en(n.parentNode,e)}${t?`>${t}`:""}`,o||nn}const tn=`${W}x${X}`,rn=G?`${G.width}x${G.height}`:"0x0";let on=0;function an(){if(on)return on;const n=K.getEntriesByType("navigation");return n.length>0&&(on=parseInt(n[0].responseStart||0,10)),on}let cn=null;const un=location.href;function sn(){return un}function fn(){return V&&"effectiveType"in V?V.effectiveType:"4g"}function dn(){return V&&"downlink"in V?V.downlink:-1}function ln(){return V&&"rtt"in V?V.rtt:-1}const pn={LCP:2,CLS:3,FID:4,TTFB:5,INP:6,FCP:7};function hn(n){return[parseInt(n.top,10),parseInt(n.bottom,10),parseInt(n.left,10),parseInt(n.right,10),parseInt(n.height,10),parseInt(n.width,10),parseInt(n.x,10),parseInt(n.y,10)]}function vn(n){return!!n.target}function mn(){return!0}function gn(n){n()}const wn={reportAllChanges:!0};function yn(n){!function(n,e){e=e||{},E((function(){var t,r=T(),i=s("LCP"),o=function(n){var e=n[n.length-1];e&&e.startTime<r.firstHiddenTime&&(i.value=Math.max(e.startTime-u(),0),i.entries=[e],t())},c=f("largest-contentful-paint",o);if(c){t=d(n,i,z,e.reportAllChanges);var v=h((function(){J[i.id]||(o(c.takeRecords()),c.disconnect(),J[i.id]=!0,t(!0))}));["keydown","click"].forEach((function(n){addEventListener(n,(function(){return setTimeout(v,0)}),!0)})),p(v),a((function(r){i=s("LCP"),t=d(n,i,z,e.reportAllChanges),l((function(){i.value=performance.now()-r.timeStamp,J[i.id]=!0,t(!0)}))}))}}))}(n,wn)}function Tn(n){!function(n,e){e=e||{},I(h((function(){var t,r=s("CLS",0),i=0,o=[],c=function(n){n.forEach((function(n){if(!n.hadRecentInput){var e=o[0],t=o[o.length-1];i&&n.startTime-t.startTime<1e3&&n.startTime-e.startTime<5e3?(i+=n.value,o.push(n)):(i=n.value,o=[n])}})),i>r.value&&(r.value=i,r.entries=o,t())},u=f("layout-shift",c);u&&(t=d(n,r,S,e.reportAllChanges),p((function(){c(u.takeRecords()),t(!0)})),a((function(){i=0,r=s("CLS",0),t=d(n,r,S,e.reportAllChanges),l((function(){return t()}))})),setTimeout(t,0))})))}(n,wn)}function En(t){!function(t,i){i=i||{},E((function(){var o,c=T(),u=s("FID"),l=function(n){n.startTime<c.firstHiddenTime&&(u.value=n.processingStart-n.startTime,u.entries.push(n),o(!0))},v=function(n){n.forEach(l)},m=f("first-input",v);o=d(t,u,A,i.reportAllChanges),m&&p(h((function(){v(m.takeRecords()),m.disconnect()}))),m&&a((function(){var a;u=s("FID"),o=d(t,u,A,i.reportAllChanges),r=[],e=-1,n=null,P(addEventListener),a=l,r.push(a),k()}))}))}(t,wn)}function Cn(n){!function(n,e){e=e||{},E((function(){var t;D();var r,i=s("INP"),o=function(n){n.forEach((function(n){n.interactionId&&U(n),"first-input"===n.entryType&&!j.some((function(e){return e.entries.some((function(e){return n.duration===e.duration&&n.startTime===e.startTime}))}))&&U(n)}));var e,t=(e=Math.min(j.length-1,Math.floor(H()/50)),j[e]);t&&t.latency!==i.value&&(i.value=t.latency,i.entries=t.entries,r())},c=f("event",o,{durationThreshold:null!==(t=e.durationThreshold)&&void 0!==t?t:40});r=d(n,i,B,e.reportAllChanges),c&&("PerformanceEventTiming"in window&&"interactionId"in PerformanceEventTiming.prototype&&c.observe({type:"first-input",buffered:!0}),p((function(){o(c.takeRecords()),i.value<0&&H()>0&&(i.value=0,i.entries=[]),r(!0)})),a((function(){j=[],F=_(),i=s("INP"),r=d(n,i,B,e.reportAllChanges)})))}))}(n,wn)}function In(n){I(n,wn)}window.__rpm&&window.__rpm.ready||(window.__rpm=function(n){if(!("sendBeacon"in navigator&&"performance"in window&&"PerformanceObserver"in window))return{ready:!1};const e=n||{},t=function(n,e){const t=new Map,r=new Map,i=e||mn;function o(n,e){const[r,o]=n;i(r)&&Q.sendBeacon(r,o),function(n,e){if(!e.has(n))return;const t=e.get(n);t.forEach(gn),t.clear()}(e,t)}var a;return Z("visibilitychange",a=function(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||(r.forEach(o),r.clear())},!0),Z("pagehide",a,!0),[function(e,i,o,a){a&&function(n,e,t){let r;n.has(e)?r=n.get(e):(r=new Set,n.set(e,r)),r.add(t)}(t,e,a),i?r.set(e,function(n,e,t){return[new URL(`${n}/${e}`).href,JSON.stringify(t)]}(n,e,o)):r.delete(e)}]}(e.pharosUrl||"https://collect.rebelmouse.io/collector/v1",e.rateController),{lcpTrackerOptions:r,clsTrackerOptions:i,inpTrackerOptions:o}=e||{},a=function(n,e,t){const[r]=n,i=[],o=t||{},a=an();let c=o.threshold||2500,u=0,s=!1,f=o.signatureMaker;const d=["",sn(),a,fn(),tn,rn,Math.round(Y),i,dn(),ln()];function l(){s=!0}function p(){s||r("lcp",u>=c,d,l)}return e((function(n){const e=n.entries,t=e[e.length-1],r=en(t.element,f);let o={};var c;t.url&&(c=t.url,o=K.getEntriesByType("resource").find((function(n){return n.name===c}))||{});const s=Math.max(a,o.requestStart||o.startTime||0),l=Math.max(s,o.responseEnd||0),h=Math.max(l,t.renderTime||t.loadTime||0),v=[parseInt(h,10)];l!==s&&v.push(parseInt(l,10),parseInt(s,10)),i.push(v),function(n,e){n[0].length>0?n[0]+=`|${e}`:n[0]=e,n[8]=dn(),n[9]=ln()}(d,r),u=h,p()})),{setThreshold:function(n){c=n,p()},setSignatureMaker:function(n){f=n}}}(t,yn,r),c=function(n,e,t){const[r]=n,i=t||{},o=an();let a=i.threshold||200,c=i.signatureMaker;const u=["",sn(),"",0,o,fn(),tn,rn,dn(),ln()];function s(){const n=u[3]>=a;r("inp",n,u)}return e((function(n){const e=n.value,t=n.entries;if(n.value<u[3])return;const r=[...t].reverse().find(vn);if(!r)return;const i=en(r.target,c);u[0]=i,u[2]=r.name,u[3]=e,u[8]=dn(),u[9]=ln(),s()})),{setThreshold:function(n){a=n,s()},setSignatureMaker:function(n){c=n}}}(t,Cn,o),u=function(n,e,t,r,i,o){const[a]=n,c=[(null==cn&&(cn=`${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`),cn),sn(),null,null,null,an(),null,null];function u(n){const{name:e,value:t}=n;c[pn[e]]="CLS"===e?t:Math.round(t),a("cwv",!0,c)}return e(u),t(u),r(u),i(u),o(u),!0}(t,yn,Tn,En,Cn,In),s=function(n,e,t){const[r]=n,i=t||{},o=[sn(),[]],a=new Map;let c=i.signatureMaker,u=i.totalThreshold||.1,s=i.sourceThreshold||.01;function f(n,e){const{node:t,currentRect:r,previousRect:i}=e,o=en(t,c)||"NO_ELEMENT";let a=-1,u=-1;if(t){const n=t.nodeType===Node.TEXT_NODE?t.parentElement:t;if(n&&n.getBoundingClientRect){const e=n.getBoundingClientRect();a=parseInt(e.width,10),u=parseInt(e.height,10)}}return[[...n[0],o],[...n[1],[hn(i),hn(r)]],[...n[2],[a,u]]]}return e((function(n){const{entries:e,value:t}=n,i=e[e.length-1];if(!i)return;const{sources:c,value:d}=i,[l,p,h]=c.reduce(f,[[],[],[]]),v=l.join("|")||"NO_SOURCES";let m;a.has(v)?(m=a.get(v),m[1]++,m[2]+=d,m[6].push(p),m[7].push(h),m[8]=dn(),m[9]=ln()):(m=[v,1,d,fn(),tn,rn,[p],[h],dn(),ln()],a.set(v,m));const g=function(n,e){const t=[];return n.forEach((function(n){n[2]>=e&&t.push(n)})),t}(a,s);o[1]=g,r("cls",t>=u&&g.length>0,o,(function(){var n;n=s,a.forEach((function(e,t,r){e[2]>=n&&r.delete(t)}))}))})),{setThresholds:function(n){u=n[0],s=n[1]},setSignatureMaker:function(n){c=n}}}(t,Tn,i);return{ready:!0,clsTracker:s,lcpTracker:a,cwvTracker:u,inpTracker:c}}(window.__rpmOptions))})();
//# sourceMappingURL=web.mjs.map