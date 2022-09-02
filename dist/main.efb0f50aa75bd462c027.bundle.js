(()=>{"use strict";var e,t={8011:()=>{var e=function(e,t,r,n){return new(r||(r=Promise))((function(a,s){function c(e){try{i(n.next(e))}catch(e){s(e)}}function o(e){try{i(n.throw(e))}catch(e){s(e)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,o)}i((n=n.apply(e,t||[])).next())}))};const t=(e,t)=>{const r=document.querySelector(".character-wrap"),n=document.querySelector(".more-btn");r.innerHTML="";const a=t<e.length?t:e.length;for(let t=0;t<a;t++){const n=e[t],a="Dead"===n.status;r.innerHTML+=`\n        <div class="character ${a?"dead":""}" data-id="${n.id}">\n          <div class="character__main-info">\n            <img class="character__img" src="${n.image}" alt="eweq">\n            <p class="character__status ${a?"dead-status":"alive-status"}">${n.status}</p>\n            <p class="character__name">${n.name}</p>\n          </div>\n          <div class="character__info">\n            <p class="character__species">Species: ${n.species}</p>\n            <p class="character__type">Type: ${n.type?n.type:"Unknown"}</p>\n            <p class="character__gender">Gender: ${n.gender}</p>\n            <p class="character__location">Location: ${n.location.name}</p>\n          </div>\n          <button class="character__delete-btn">&#9587</button>\n        </div>\n        `}e.length>t?n.classList.remove("hidden"):e.length<t&&n.classList.add("hidden")};class r{constructor(e){try{this.storage="local"===e?window.localStorage:window.sessionStorage}catch(e){console.error(e)}}get length(){if(this.storage)return this.storage.length}get(e){if(this.storage)try{const t=this.storage.getItem(e);if(null===t)return;return JSON.parse(t)}catch(e){console.error(e)}}set(e,t){if(this.storage)try{const r=JSON.stringify(t);this.storage.setItem(e,r)}catch(e){console.error(e)}}remove(e){this.storage&&this.storage.removeItem(e)}clear(){this.storage&&this.storage.clear()}}const n=new r("local");new r("session");let a=5;const s=document.querySelector(".character-wrap");let c=n.get("characters")||[];c&&t(c,a);document.querySelector("form").addEventListener("submit",(r=>{r.preventDefault();const s=r.target,o=s.querySelector("input").valueAsNumber;s.reset(),o<1||o>826?alert("The ID should be between 1 and 826!"):function(t,r={}){return e(this,void 0,void 0,(function*(){const e="https://rickandmortyapi.com/api/character/"+t,n=yield fetch(e,r),a=yield n.json();return yield a}))}(o).then((e=>{c.unshift(Object.assign({},e)),t(c,a),n.set("characters",c)}))})),s.addEventListener("click",(e=>{const r=e.target;var s;r.classList.contains("character__delete-btn")&&(s=r.parentElement,c=c.filter((e=>e.id!==+s.dataset.id)),t(c,a),n.set("characters",c))})),document.querySelector(".more-btn").addEventListener("click",(()=>{console.log("currentCountChars - "+a),a+=5,t(c,a)}))}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,r,a,s)=>{if(!r){var c=1/0;for(h=0;h<e.length;h++){for(var[r,a,s]=e[h],o=!0,i=0;i<r.length;i++)(!1&s||c>=s)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(o=!1,s<c&&(c=s));if(o){e.splice(h--,1);var l=a();void 0!==l&&(t=l)}}return t}s=s||0;for(var h=e.length;h>0&&e[h-1][2]>s;h--)e[h]=e[h-1];e[h]=[r,a,s]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,s,[c,o,i]=r,l=0;if(c.some((t=>0!==e[t]))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(i)var h=i(n)}for(t&&t(r);l<c.length;l++)s=c[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(h)},r=self.webpackChunkhomework=self.webpackChunkhomework||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.O(void 0,[981],(()=>n(6981)));var a=n.O(void 0,[981],(()=>n(8011)));a=n.O(a)})();