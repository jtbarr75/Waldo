!function(){function e(){fetch(`${window.location.pathname}.json`).then(e=>{if(e.ok)return e.json();throw new Error("Network response not ok")}).then(e=>{u=e})}function t(e){if("LI"!==e.target.tagName&&i(),"image"!==e.target.id||f)return;let t=e.target.getBoundingClientRect();m(e.clientX+document.body.scrollLeft-t.left,e.clientY+document.body.scrollTop-t.top)}function n(){(p+=1)===u.numCharacters&&o()}function o(){timer.stopTimer(),f=!0;const e=document.getElementById("timer").dataset.time;document.getElementById("win-message").innerText=`You won in ${timer.formatTime(e)}`,document.getElementById("win-popup").style.display="block"}function c(e){const{xpos:t,ypos:n}=document.getElementById("select").dataset;Math.abs(e.location.xpos-t)<20&&Math.abs(e.location.ypos-n)<25&&a(e),i()}function a(e){const t=r(e.location.xpos,e.location.ypos,"blue");document.querySelector(".image-wrapper").appendChild(t),document.getElementById(e.name).classList.add("found"),n()}function i(){const e=document.getElementById("select");e&&e.parentElement.removeChild(e)}function l(e){const{id:t}=e.target.dataset,n=`/api/${window.location.pathname}/characters/${t}`;fetch(n).then(e=>{if(e.ok)return e.json();throw new Error("Network response not ok")}).then(e=>{c(e.data)})["catch"](e=>console.log(e.message))}function d(e,t){let n=document.createElement("li");return n.innerText=e,n.dataset.id=t,n.onclick=l,n}function r(e,t,n="black"){let o=document.createElement("div");return o.classList.add("select-container"),o.style.top=`${t-30}px`,o.style.left=`${e-20}px`,o.dataset.xpos=e,o.dataset.ypos=t,o.appendChild(s(n)),o}function s(e){let t=document.createElement("div");return t.classList.add("select-box",e),t}function m(e,t){let n=r(e,t);n.id="select";let o=document.createElement("ul");u.characters.forEach(e=>{let t=d(e.name,e.id);o.appendChild(t)}),n.appendChild(o),document.querySelector(".image-wrapper").appendChild(n)}let u,p=0,f=!1;document.onclick=t,e()}();