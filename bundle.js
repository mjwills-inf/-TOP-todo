!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="dist",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var r=function(e,t,o,r,n,a,c){return{title:e,description:t,dueDate:o,priority:r,notes:n,flagged:a,completed:c}},n=function(e,t,o){return{todos:[],title:e,description:t,color:o}},a=function(){return{renderTodos:function(e){var t=document.querySelector("#dom-todo");t.innerHTML="";for(var o=0;o<e.length;o++){var r=document.createElement("div");r.className="todo-div",r.setAttribute("project-array-ref",o);var n=document.createElement("h5");n.className="todo-title",n.innerText=e[o].title;var a=document.createElement("div");a.className="date-div",a.innerText=e[o].dueDate;var c=document.createElement("div");c.className="notes-container";var d=document.createElement("button");d.classList="edit-button todo-edit",d.innerText="edit";var i=document.createElement("button");i.classList="delete-button todo-delete",i.innerText="delete";var l=document.createElement("div");l.className="flagged-div",l.innerText="[flagged-div]",1==e[o].flagged&&l.classList.add("isFlagged");var s=document.createElement("div");s.className="complete-div",s.innerText="[complete-div]",1==e[o].completed&&s.classList.add("isComplete"),r.appendChild(n),r.appendChild(a),r.appendChild(c),r.appendChild(d),r.appendChild(i),r.appendChild(l),r.appendChild(s),t.appendChild(r)}},renderProjects:function(e){var t=document.querySelector("#dom-project");t.innerHTML="";for(var o=0;o<e.length;o++){var r=document.createElement("div");r.className="project-div",r.setAttribute("container-array-ref",o);var n=document.createElement("div");n.style.backgroundColor=e[o].color,n.textContent="Color";var a=document.createElement("h5");a.className="project-title",a.textContent=e[o].title;var c=document.createElement("button");c.classList="edit-button project-edit",c.innerText="edit";var d=document.createElement("button");d.classList="delete-button project-delete",d.innerText="delete",r.appendChild(n),r.appendChild(a),r.appendChild(c),r.appendChild(d),t.appendChild(r)}},currentProjectDisplay:function(e){var t=document.querySelector("#project-name-display"),o=document.querySelector("#project-description-display");t.innerText=e.title,o.innerText=e.description}}},c=function(){var e,t,o={projects:e=[],addToProjectContainer:function(t){e.push(t)}};if(localStorage.dataTodo){console.log("running pullfromlocal");for(var a=JSON.parse(localStorage.getItem("dataTodo")),c=0;c<a.projects.length;c++){var d=a.projects[c];o.projects.push(d)}t=o.projects[0]}else{console.log("running populateLocal"),t=n("Default","This is your default project","#013220");var i=n("Dummy","for demo","#02075D"),l=r("Your Todos are displayed here","Description Description Description","2022-12-02",2,"Notes Notes Notes Notes Notes Notes Notes Notes",!1,!1),s=r("Click to expand","Here's more infrmation in a description","",3,"And here's even more for any notes you may want to make",!1,!1),u=r("Edit, delete, complete","","","","",!1,!1),p=r("Dummy","fo demo","2020-02-02",2,"dummy notes",!0,!1),m=r("Dummy2","fo2 demo","1999-09-19",0,"dummy notes",!1,!0);t.todos.push(l,s,u),i.todos.push(p,m),o.addToProjectContainer(t),o.addToProjectContainer(i)}return{projectContainer:o,defaultProject:t,saveToLocal:function(e){var t=JSON.stringify(e);localStorage.setItem("dataTodo",t)}}},d=function(){var e=c(),t=e.projectContainer,o=a(),d=0,i=document.querySelector("#project-title"),l=document.querySelector("#project-description"),s=document.querySelector("#color"),u=document.querySelector("#title"),p=document.querySelector("#description"),m=document.querySelector("#duedate"),v=document.querySelector("#priority"),y=document.querySelector("#notes"),f=document.querySelector("#project-title-edit"),j=document.querySelector("#project-description-edit"),g=document.querySelector("#color-edit"),b=document.querySelector("#title-edit"),h=document.querySelector("#description-edit"),T=document.querySelector("#duedate-edit"),S=document.querySelector("#priority-edit"),N=document.querySelector("#notes-edit"),C=function(r){switch(r.target.id){case"settings":alert("Settings modal [Would be here]");break;case"save":alert("save to localStorage would be set up as an option and then run on obj edit functions"),e.saveToLocal(t);break;case"clear":localStorage.clear();break;case"add-project-modal":q();break;case"add-todo-modal":x();break;case"project-submit":A(),o.renderProjects(t.projects),q(),L();break;case"todo-submit":k(),o.renderTodos(t.projects[d].todos),x(),P();break;case"project-cancel":q(),L();break;case"todo-cancel":x(),P();break;case"project-submit-edit":w(r),o.currentProjectDisplay(t.projects[d]),o.renderProjects(t.projects),O();break;case"project-cancel-edit":O();break;case"todo-submit-edit":H(r),o.renderTodos(t.projects[d].todos),M();break;case"todo-cancel-edit":M()}},q=function(){var e=document.querySelector("#modal-project");"none"==e.style.display||""==e.style.display?e.style.display="block":e.style.display="none"},x=function(){var e=document.querySelector("#modal-todo");"none"==e.style.display||""==e.style.display?e.style.display="block":e.style.display="none"},L=function(){i.value="",l.value="",s.value="#b2b2b2"},P=function(){u.value="",p.value="",m.value="",y.value="",v.value="3"},A=function(){var e=n(i.value,l.value,s.value);t.addToProjectContainer(e)},k=function(){var e=r(u.value,p.value,m.value,v.value,y.value,!1,!1);t.projects[d].todos.push(e)},D=function(){document.querySelectorAll(".notes-container").forEach((function(e){e.innerHTML=""}))},E=function(){var e=event.target.querySelector(".notes-container");if(e.classList.contains("notes-container-rendered"))e.classList.remove("notes-container-rendered");else{var o=event.target.getAttribute("project-array-ref"),r=document.createElement("div");r.className="description-div",r.textContent=t.projects[d].todos[o].description;var n=document.createElement("div");n.className="notes-div",n.textContent=t.projects[d].todos[o].notes,e.appendChild(r),e.appendChild(n),e.classList.add("notes-container-rendered")}},O=function(e){var t=document.querySelector("#modal-project-edit");t.setAttribute("container-index",e),"none"==t.style.display||""==t.style.display?t.style.display="block":t.style.display="none"},M=function(e){var t=document.querySelector("#modal-todo-edit");t.setAttribute("project-index",e),"none"==t.style.display||""==t.style.display?t.style.display="block":t.style.display="none"},I=function(){var e=event.target.parentNode.getAttribute("container-array-ref"),o=t.projects[e];f.value=o.title,j.value=o.description,g.value=o.color},_=function(){var e=event.target.parentNode.getAttribute("project-array-ref"),o=t.projects[d].todos[e];b.value=o.title,h.value=o.description,T.value=o.dueDate,S.value=o.priority,N.value=o.notes},w=function(){var e=event.target.parentNode.parentNode.getAttribute("container-index"),o=t.projects[e];o.title=f.value,o.description=j.value,o.color=g.value},H=function(){var e=event.target.parentNode.parentNode.getAttribute("project-index"),o=t.projects[d].todos[e];o.title=b.value,o.description=h.value,o.dueDate=T.value,o.priority=S.value,o.notes=N.value},F=function(){var e=event.target.parentNode.getAttribute("container-array-ref");confirm("This will delete your Project and all it's Todos")&&t.projects.splice(e,1)},J=function(){var e=event.target.parentNode.getAttribute("project-array-ref");t.projects[d].todos.splice(e,1),console.log(t.projects[d])},R=function(){var e=event.target.parentNode.getAttribute("project-array-ref");1==t.projects[d].todos[e].flagged?t.projects[d].todos[e].flagged=!1:t.projects[d].todos[e].flagged=!0},U=function(){var e=event.target.parentNode.getAttribute("project-array-ref");1==t.projects[d].todos[e].completed?t.projects[d].todos[e].completed=!1:t.projects[d].todos[e].completed=!0};return{addListeners:function(){for(var e=document.querySelectorAll("button"),t=0;t<e.length;t++)e[t].addEventListener("click",C)},documentListener:function(){document.addEventListener("click",(function(e){if(e.target.matches(".project-div")){var r=e.target.getAttribute("container-array-ref");d=r,o.renderTodos(t.projects[d].todos),o.currentProjectDisplay(t.projects[d])}if(e.target.matches(".todo-div")&&(D(),E(e)),e.target.matches(".project-edit")){var n=e.target.parentNode.getAttribute("container-array-ref");O(n),I(e)}if(e.target.matches(".project-delete")&&(F(),o.renderProjects(t.projects),d>0?d--:d=d,o.renderProjects(t.projects),o.renderTodos(t.projects[d].todos),o.currentProjectDisplay(t.projects[d])),e.target.matches(".todo-edit")){var a=e.target.parentNode.getAttribute("project-array-ref");M(a),_()}e.target.matches(".todo-delete")&&(J(),o.renderTodos(t.projects[d].todos)),e.target.matches(".flagged-div")&&(R(),o.renderTodos(t.projects[d].todos)),e.target.matches(".complete-div")&&(U(),o.renderTodos(t.projects[d].todos))}))}}};!function(){console.log("DEFAULT DATA INIT");var e=c(),t=e.projectContainer,o=e.defaultProject;console.log("DOM CONTROL INIT");var r=d();r.addListeners(),r.documentListener();var n=a();n.renderProjects(t.projects),n.renderTodos(o.todos),n.currentProjectDisplay(o)}()}]);