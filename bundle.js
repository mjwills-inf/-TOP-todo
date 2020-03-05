!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="dist",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var o=function(e,t,r,o,n,a,d){return{title:e,description:t,dueDate:r,priority:o,notes:n,flagged:a,completed:d}},n=function(e,t,r){return{todos:[],title:e,description:t,color:r}},a=function(){return{renderTodos:function(e){var t=document.querySelector("#dom-todo");t.innerHTML="";for(var r=0;r<e.length;r++){var o=document.createElement("div");o.className="todo-div",o.setAttribute("project-array-ref",r);var n=document.createElement("h5");n.className="todo-title",n.innerText=e[r].title;var a=document.createElement("div");a.className="date-div",a.innerText=e[r].dueDate;var d=document.createElement("div");d.className="notes-container";var c=document.createElement("button");c.classList="edit-button todo-edit",c.innerText="edit";var i=document.createElement("button");i.classList="delete-button todo-delete",i.innerText="delete";var s=document.createElement("div");s.className="flagged-div",s.innerText="[flagged-div]",1==e[r].flagged&&s.classList.add("isFlagged");var l=document.createElement("div");l.className="complete-div",l.innerText="[complete-div]",1==e[r].completed&&l.classList.add("isComplete"),o.appendChild(n),o.appendChild(a),o.appendChild(d),o.appendChild(c),o.appendChild(i),o.appendChild(s),o.appendChild(l),t.appendChild(o)}},renderProjects:function(e){var t=document.querySelector("#dom-project");t.innerHTML="";for(var r=0;r<e.length;r++){var o=document.createElement("div");o.className="project-div",o.setAttribute("container-array-ref",r);var n=document.createElement("div");n.style.backgroundColor=e[r].color,n.textContent="Color";var a=document.createElement("h5");a.className="project-title",a.textContent=e[r].title;var d=document.createElement("button");d.classList="edit-button project-edit",d.innerText="edit";var c=document.createElement("button");c.classList="delete-button project-delete",c.innerText="delete",o.appendChild(n),o.appendChild(a),o.appendChild(d),o.appendChild(c),t.appendChild(o)}},currentProjectDisplay:function(e){var t=document.querySelector("#project-name-display"),r=document.querySelector("#project-description-display");t.innerText=e.title,r.innerText=e.description}}},d=function(){var e=a(),t=0,r=document.querySelector("#project-title"),d=document.querySelector("#project-description"),c=document.querySelector("#color"),s=document.querySelector("#title"),l=document.querySelector("#description"),u=document.querySelector("#duedate"),p=document.querySelector("#priority"),m=document.querySelector("#notes"),v=document.querySelector("#project-title-edit"),y=document.querySelector("#project-description-edit"),f=document.querySelector("#color-edit"),j=document.querySelector("#title-edit"),g=document.querySelector("#description-edit"),b=document.querySelector("#duedate-edit"),h=document.querySelector("#priority-edit"),S=document.querySelector("#notes-edit"),T=function(r){switch(r.target.id){case"settings":alert("Settings modal [Would be here]");break;case"add-project-modal":N();break;case"add-todo-modal":C();break;case"project-submit":P(),e.renderProjects(i.projects),N(),q();break;case"todo-submit":k(),e.renderTodos(i.projects[t].todos),C(),x();break;case"project-cancel":N(),q();break;case"todo-cancel":C(),x();break;case"project-submit-edit":_(r),e.currentProjectDisplay(i.projects[t]),e.renderProjects(i.projects),L();break;case"project-cancel-edit":L();break;case"todo-submit-edit":w(r),e.renderTodos(i.projects[t].todos),D();break;case"todo-cancel-edit":D()}},N=function(){var e=document.querySelector("#modal-project");"none"==e.style.display||""==e.style.display?e.style.display="block":e.style.display="none"},C=function(){var e=document.querySelector("#modal-todo");"none"==e.style.display||""==e.style.display?e.style.display="block":e.style.display="none"},q=function(){r.value="",d.value="",c.value="#b2b2b2"},x=function(){s.value="",l.value="",u.value="",m.value="",p.value="3"},P=function(){var e=n(r.value,d.value,c.value);i.addToProjectContainer(e)},k=function(){var e=o(s.value,l.value,u.value,p.value,m.value,!1,!1);i.projects[t].todos.push(e)},A=function(){document.querySelectorAll(".notes-container").forEach((function(e){e.innerHTML=""}))},E=function(){var e=event.target.querySelector(".notes-container");if(e.classList.contains("notes-container-rendered"))e.classList.remove("notes-container-rendered");else{var r=event.target.getAttribute("project-array-ref"),o=document.createElement("div");o.className="description-div",o.textContent=i.projects[t].todos[r].description;var n=document.createElement("div");n.className="notes-div",n.textContent=i.projects[t].todos[r].notes,e.appendChild(o),e.appendChild(n),e.classList.add("notes-container-rendered")}},L=function(e){var t=document.querySelector("#modal-project-edit");t.setAttribute("container-index",e),"none"==t.style.display||""==t.style.display?t.style.display="block":t.style.display="none"},D=function(e){var t=document.querySelector("#modal-todo-edit");t.setAttribute("project-index",e),"none"==t.style.display||""==t.style.display?t.style.display="block":t.style.display="none"},M=function(){var e=event.target.parentNode.getAttribute("container-array-ref"),t=i.projects[e];v.value=t.title,y.value=t.description,f.value=t.color},O=function(){var e=event.target.parentNode.getAttribute("project-array-ref"),r=i.projects[t].todos[e];j.value=r.title,g.value=r.description,b.value=r.dueDate,h.value=r.priority,S.value=r.notes},_=function(){var e=event.target.parentNode.parentNode.getAttribute("container-index"),t=i.projects[e];t.title=v.value,t.description=y.value,t.color=f.value},w=function(){var e=event.target.parentNode.parentNode.getAttribute("project-index"),r=i.projects[t].todos[e];r.title=j.value,r.description=g.value,r.dueDate=b.value,r.priority=h.value,r.notes=S.value},H=function(){var e=event.target.parentNode.getAttribute("container-array-ref");confirm("This will delete your Project and all it's Todos")&&i.projects.splice(e,1)},F=function(){var e=event.target.parentNode.getAttribute("project-array-ref");i.projects[t].todos.splice(e,1),console.log(i.projects[t])},W=function(){var e=event.target.parentNode.getAttribute("project-array-ref");1==i.projects[t].todos[e].flagged?i.projects[t].todos[e].flagged=!1:i.projects[t].todos[e].flagged=!0},Y=function(){var e=event.target.parentNode.getAttribute("project-array-ref");1==i.projects[t].todos[e].completed?i.projects[t].todos[e].completed=!1:i.projects[t].todos[e].completed=!0};return{addListeners:function(){for(var e=document.querySelectorAll("button"),t=0;t<e.length;t++)e[t].addEventListener("click",T)},documentListener:function(){document.addEventListener("click",(function(r){if(r.target.matches(".project-div")){var o=r.target.getAttribute("container-array-ref");t=o,e.renderTodos(i.projects[t].todos),e.currentProjectDisplay(i.projects[t])}if(r.target.matches(".todo-div")&&(A(),E(r)),r.target.matches(".project-edit")){var n=r.target.parentNode.getAttribute("container-array-ref");L(n),M(r)}if(r.target.matches(".project-delete")&&(H(),e.renderProjects(i.projects),t>0?t--:t=t,e.renderProjects(i.projects),e.renderTodos(i.projects[t].todos),e.currentProjectDisplay(i.projects[t])),r.target.matches(".todo-edit")){var a=r.target.parentNode.getAttribute("project-array-ref");D(a),O()}r.target.matches(".todo-delete")&&(F(),e.renderTodos(i.projects[t].todos)),r.target.matches(".flagged-div")&&(W(),e.renderTodos(i.projects[t].todos)),r.target.matches(".complete-div")&&(Y(),e.renderTodos(i.projects[t].todos))}))}}};r.d(t,"projectContainer",(function(){return i}));var c,i={projects:c=[],addToProjectContainer:function(e){c.push(e)}},s=n("Default","This is your default project","#013220"),l=n("Dummy","for demo","#02075D"),u=o("Your Todos are displayed here","Description Description Description","2022-12-02",2,"Notes Notes Notes Notes Notes Notes Notes Notes",!1,!1),p=o("Click to expand","Here's more infrmation in a description","",3,"And here's even more for any notes you may want to make",!1,!1),m=o("Edit, delete, complete","","","","",!1,!1),v=o("Dummy","fo demo","2020-02-02",2,"dummy notes",!0,!1),y=o("Dummy2","fo2 demo","1999-09-19",0,"dummy notes",!1,!0);s.todos.push(u,p,m),l.todos.push(v,y),i.addToProjectContainer(s),i.addToProjectContainer(l);var f=d();f.addListeners(),f.documentListener();var j=a();j.renderProjects(i.projects),j.renderTodos(s.todos),j.currentProjectDisplay(s)}]);