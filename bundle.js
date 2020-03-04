!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="dist",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var r=function(e,t,o,r,n,a,c){return{title:e,description:t,dueDate:o,priority:r,notes:n,flagged:a,completed:c}},n=function(e,t,o){return{todos:[],title:e,description:t,color:o}},a=function(){return{renderTodos:function(e){var t=document.querySelector("#dom-todo");t.innerHTML="";for(var o=0;o<e.length;o++){var r=document.createElement("div");r.className="todo-div",r.setAttribute("project-array-ref",o);var n=document.createElement("h5");n.className="todo-title",n.innerText=e[o].title;var a=document.createElement("div");a.className="date-div",a.innerText=e[o].dueDate;var c=document.createElement("div");c.className="notes-container";var d=document.createElement("button");d.classList="edit-button todo-edit",d.innerText="edit";var i=document.createElement("button");i.classList="delete-button todo-delete",i.innerText="delete";var l=document.createElement("div");l.className="flagged-div",l.innerText="flagged-div";var s=document.createElement("div");s.className="complete-div",s.innerText="complete-div",r.appendChild(n),r.appendChild(a),r.appendChild(c),r.appendChild(d),r.appendChild(i),r.appendChild(l),r.appendChild(s),t.appendChild(r)}},renderProjects:function(e){var t=document.querySelector("#dom-project");t.innerHTML="";for(var o=0;o<e.length;o++){var r=document.createElement("div");r.className="project-div",r.setAttribute("container-array-ref",o);var n=document.createElement("div");n.style.backgroundColor=e[o].color,n.textContent="Color";var a=document.createElement("h5");a.className="project-title",a.textContent=e[o].title;var c=document.createElement("button");c.classList="edit-button project-edit",c.innerText="edit";var d=document.createElement("button");d.classList="delete-button project-delete",d.innerText="delete",r.appendChild(n),r.appendChild(a),r.appendChild(c),r.appendChild(d),t.appendChild(r)}},currentProjectDisplay:function(e){var t=document.querySelector("#project-name-display"),o=document.querySelector("#project-description-display");t.innerText=e.title,o.innerText=e.description}}},c=function(){var e=a(),t=i.projects[0],o=document.querySelector("#project-title"),c=document.querySelector("#project-description"),d=document.querySelector("#color"),l=document.querySelector("#title"),s=document.querySelector("#description"),u=document.querySelector("#duedate"),p=document.querySelector("#priority"),m=document.querySelector("#notes"),y=document.querySelector("#project-title-edit"),v=document.querySelector("#project-description-edit"),f=document.querySelector("#color-edit"),g=document.querySelector("#title-edit"),b=document.querySelector("#description-edit"),j=document.querySelector("#duedate-edit"),h=document.querySelector("#priority-edit"),S=document.querySelector("#notes-edit"),N=function(o){switch(o.target.id){case"settings":alert("Settings modal [Would be here]");break;case"add-project-modal":q();break;case"add-todo-modal":C();break;case"project-submit":E(),e.renderProjects(i.projects),q(),T();break;case"todo-submit":L(),e.renderTodos(t.todos),C(),x();break;case"project-cancel":q(),T();break;case"todo-cancel":C(),x()}},q=function(){var e=document.querySelector("#modal-project");"none"==e.style.display||""==e.style.display?e.style.display="block":e.style.display="none"},C=function(){var e=document.querySelector("#modal-todo");"none"==e.style.display||""==e.style.display?e.style.display="block":e.style.display="none"},T=function(){o.value="",c.value="",d.value="#b2b2b2"},x=function(){l.value="",s.value="",u.value="",m.value="",p.value="3"},E=function(){var e=n(o.value,c.value,d.value);i.addToProjectContainer(e)},L=function(){var e=r(l.value,s.value,u.value,p.value,m.value,!1,!1);t.todos.push(e)},k=function(){document.querySelectorAll(".notes-container").forEach((function(e){e.innerHTML=""}))},A=function(e){var o=e.target.querySelector(".notes-container");if(o.classList.contains("notes-container-rendered"))o.classList.remove("notes-container-rendered");else{var r=e.target.getAttribute("project-array-ref"),n=document.createElement("div");n.className="description-div",n.textContent=t.todos[r].description;var a=document.createElement("div");a.className="notes-div",a.textContent=t.todos[r].notes,o.appendChild(n),o.appendChild(a),o.classList.add("notes-container-rendered")}},P=function(e){var t=document.querySelector("#modal-project-edit");t.setAttribute("container-index",e),"none"==t.style.display||""==t.style.display?t.style.display="block":t.style.display="none"},D=function(e){var t=document.querySelector("#modal-todo-edit");t.setAttribute("project-index",e),"none"==t.style.display||""==t.style.display?t.style.display="block":t.style.display="none"},O=function(e){var t=e.target.parentNode.getAttribute("container-array-ref"),o=i.projects[t];y.value=o.title,v.value=o.description,f.value=o.color},M=function(){var e=event.target.parentNode.getAttribute("project-array-ref"),o=t.todos[e];g.value=o.title,b.value=o.description,j.value=o.dueDate,h.value=o.priority,S.value=o.notes},_=function(e){console.log("confirm project BUTTON"),console.log(e),console.log(e.target),console.log(e.target.parentNode),console.log(e.target.parentNode.parentNode);e.target.parentNode.parentNode.getAttribute("container-array-ref")},H=function(){console.log("confirm todo");event.target.parentNode.parentNode.getAttribute("project-array-ref")};return{addListeners:function(){for(var e=document.querySelectorAll("button"),t=0;t<e.length;t++)e[t].addEventListener("click",N)},documentListener:function(){document.addEventListener("click",(function(o){if(o.target.matches(".project-div")){var r=o.target.getAttribute("container-array-ref");t=i.projects[r],e.renderTodos(t.todos),e.currentProjectDisplay(t)}if(o.target.matches(".todo-div")&&(k(),A(o)),o.target.matches(".project-edit")){var n=o.target.parentNode.getAttribute("container-array-ref");console.log(n),P(n),O(o)}if(o.target.matches(".project-delete")&&console.log(o.target),o.target.matches(".todo-edit")){var a=o.target.parentNode.getAttribute("project-array-ref");D(a),M()}o.target.matches(".todo-delete")&&console.log(o.target),o.target.matches(".flagged-div")&&console.log(o.target),o.target.matches(".complete-div")&&console.log(o.target),o.target.matches("#project-submit-edit")&&_(o),o.target.matches("#project-cancel-edit")&&P(),o.target.matches("#todo-submit-edit")&&H(o),o.target.matches("#todo-cancel-edit")&&D()}))}}};o.d(t,"projectContainer",(function(){return i}));var d,i={projects:d=[],addToProjectContainer:function(e){d.push(e)}},l=n("Default","This is your default project","#013220"),s=n("Dummy","for demo","#02075D"),u=r("Your Todos are displayed here","Description Description Description","2022-12-02",2,"Notes Notes Notes Notes Notes Notes Notes Notes",!1,!0),p=r("Click to expand","Here's more infrmation in a description","",3,"And here's even more for any notes you may want to make",!1,!1),m=r("Edit, delete, complete","","","","",!1,!1),y=r("Dummy","fo demo","2020-02-02",2,"dummy notes",!1,!1),v=r("Dummy2","fo2 demo","1999-09-19",0,"dummy notes",!1,!1);l.todos.push(u,p,m),s.todos.push(y,v),i.addToProjectContainer(l),i.addToProjectContainer(s);var f=c();f.addListeners(),f.documentListener();var g=a();g.renderProjects(i.projects),g.renderTodos(l.todos),g.currentProjectDisplay(l)}]);