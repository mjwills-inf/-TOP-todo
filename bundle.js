!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="dist",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var o=function(e,t,r,o,n,a,c){return{title:e,description:t,dueDate:r,priority:o,notes:n,flagged:a,completed:c}},n=function(e,t,r){return{todos:[],title:e,description:t,color:r}},a=function(){return{renderTodos:function(e){var t=document.querySelector("#dom-todo");t.innerHTML="";for(var r=0;r<e.length;r++){var o=document.createElement("div");o.className="todo-div",o.setAttribute("project-array-ref",r);var n=document.createElement("h5");n.className="todo-title",n.innerText=e[r].title;var a=document.createElement("div");a.className="date-div",a.innerText=e[r].dueDate;var c=document.createElement("div");c.className="notes-container";var d=document.createElement("button");d.classList="edit-button todo-edit",d.innerText="edit";var i=document.createElement("button");i.classList="delete-button todo-delete",i.innerText="delete";var s=document.createElement("div");s.className="flagged-div",s.innerText="[flagged-div]",1==e[r].flagged&&s.classList.add("isFlagged");var l=document.createElement("div");l.className="complete-div",l.innerText="[complete-div]",1==e[r].completed&&l.classList.add("isComplete"),o.appendChild(n),o.appendChild(a),o.appendChild(c),o.appendChild(d),o.appendChild(i),o.appendChild(s),o.appendChild(l),t.appendChild(o)}},renderProjects:function(e){var t=document.querySelector("#dom-project");t.innerHTML="";for(var r=0;r<e.length;r++){var o=document.createElement("div");o.className="project-div",o.setAttribute("container-array-ref",r);var n=document.createElement("div");n.style.backgroundColor=e[r].color,n.textContent="Color";var a=document.createElement("h5");a.className="project-title",a.textContent=e[r].title;var c=document.createElement("button");c.classList="edit-button project-edit",c.innerText="edit";var d=document.createElement("button");d.classList="delete-button project-delete",d.innerText="delete",o.appendChild(n),o.appendChild(a),o.appendChild(c),o.appendChild(d),t.appendChild(o)}},currentProjectDisplay:function(e){var t=document.querySelector("#project-name-display"),r=document.querySelector("#project-description-display");t.innerText=e.title,r.innerText=e.description}}},c=function(){var e,t={projects:e=[],addToProjectContainer:function(t){e.push(t)}},r=n("Default","This is your default project","#013220"),a=n("Dummy","for demo","#02075D"),c=o("Your Todos are displayed here","Description Description Description","2022-12-02",2,"Notes Notes Notes Notes Notes Notes Notes Notes",!1,!1),d=o("Click to expand","Here's more infrmation in a description","",3,"And here's even more for any notes you may want to make",!1,!1),i=o("Edit, delete, complete","","","","",!1,!1),s=o("Dummy","fo demo","2020-02-02",2,"dummy notes",!0,!1),l=o("Dummy2","fo2 demo","1999-09-19",0,"dummy notes",!1,!0);return r.todos.push(c,d,i),a.todos.push(s,l),t.addToProjectContainer(r),t.addToProjectContainer(a),{projectContainer:t,defaultProject:r}},d=function(){var e=c().projectContainer,t=a(),r=0,d=document.querySelector("#project-title"),i=document.querySelector("#project-description"),s=document.querySelector("#color"),l=document.querySelector("#title"),u=document.querySelector("#description"),p=document.querySelector("#duedate"),m=document.querySelector("#priority"),v=document.querySelector("#notes"),y=document.querySelector("#project-title-edit"),f=document.querySelector("#project-description-edit"),j=document.querySelector("#color-edit"),g=document.querySelector("#title-edit"),b=document.querySelector("#description-edit"),h=document.querySelector("#duedate-edit"),S=document.querySelector("#priority-edit"),T=document.querySelector("#notes-edit"),C=function(o){switch(o.target.id){case"settings":alert("Settings modal [Would be here]");break;case"add-project-modal":N();break;case"add-todo-modal":q();break;case"project-submit":k(),t.renderProjects(e.projects),N(),x();break;case"todo-submit":A(),t.renderTodos(e.projects[r].todos),q(),P();break;case"project-cancel":N(),x();break;case"todo-cancel":q(),P();break;case"project-submit-edit":w(o),t.currentProjectDisplay(e.projects[r]),t.renderProjects(e.projects),D();break;case"project-cancel-edit":D();break;case"todo-submit-edit":H(o),t.renderTodos(e.projects[r].todos),M();break;case"todo-cancel-edit":M()}},N=function(){var e=document.querySelector("#modal-project");"none"==e.style.display||""==e.style.display?e.style.display="block":e.style.display="none"},q=function(){var e=document.querySelector("#modal-todo");"none"==e.style.display||""==e.style.display?e.style.display="block":e.style.display="none"},x=function(){d.value="",i.value="",s.value="#b2b2b2"},P=function(){l.value="",u.value="",p.value="",v.value="",m.value="3"},k=function(){var t=n(d.value,i.value,s.value);e.addToProjectContainer(t)},A=function(){var t=o(l.value,u.value,p.value,m.value,v.value,!1,!1);e.projects[r].todos.push(t)},E=function(){document.querySelectorAll(".notes-container").forEach((function(e){e.innerHTML=""}))},L=function(){var t=event.target.querySelector(".notes-container");if(t.classList.contains("notes-container-rendered"))t.classList.remove("notes-container-rendered");else{var o=event.target.getAttribute("project-array-ref"),n=document.createElement("div");n.className="description-div",n.textContent=e.projects[r].todos[o].description;var a=document.createElement("div");a.className="notes-div",a.textContent=e.projects[r].todos[o].notes,t.appendChild(n),t.appendChild(a),t.classList.add("notes-container-rendered")}},D=function(e){var t=document.querySelector("#modal-project-edit");t.setAttribute("container-index",e),"none"==t.style.display||""==t.style.display?t.style.display="block":t.style.display="none"},M=function(e){var t=document.querySelector("#modal-todo-edit");t.setAttribute("project-index",e),"none"==t.style.display||""==t.style.display?t.style.display="block":t.style.display="none"},O=function(){var t=event.target.parentNode.getAttribute("container-array-ref"),r=e.projects[t];y.value=r.title,f.value=r.description,j.value=r.color},_=function(){var t=event.target.parentNode.getAttribute("project-array-ref"),o=e.projects[r].todos[t];g.value=o.title,b.value=o.description,h.value=o.dueDate,S.value=o.priority,T.value=o.notes},w=function(){var t=event.target.parentNode.parentNode.getAttribute("container-index"),r=e.projects[t];r.title=y.value,r.description=f.value,r.color=j.value},H=function(){var t=event.target.parentNode.parentNode.getAttribute("project-index"),o=e.projects[r].todos[t];o.title=g.value,o.description=b.value,o.dueDate=h.value,o.priority=S.value,o.notes=T.value},F=function(){var t=event.target.parentNode.getAttribute("container-array-ref");confirm("This will delete your Project and all it's Todos")&&e.projects.splice(t,1)},W=function(){var t=event.target.parentNode.getAttribute("project-array-ref");e.projects[r].todos.splice(t,1),console.log(e.projects[r])},Y=function(){var t=event.target.parentNode.getAttribute("project-array-ref");1==e.projects[r].todos[t].flagged?e.projects[r].todos[t].flagged=!1:e.projects[r].todos[t].flagged=!0},z=function(){var t=event.target.parentNode.getAttribute("project-array-ref");1==e.projects[r].todos[t].completed?e.projects[r].todos[t].completed=!1:e.projects[r].todos[t].completed=!0};return{addListeners:function(){for(var e=document.querySelectorAll("button"),t=0;t<e.length;t++)e[t].addEventListener("click",C)},documentListener:function(){document.addEventListener("click",(function(o){if(o.target.matches(".project-div")){var n=o.target.getAttribute("container-array-ref");r=n,t.renderTodos(e.projects[r].todos),t.currentProjectDisplay(e.projects[r])}if(o.target.matches(".todo-div")&&(E(),L(o)),o.target.matches(".project-edit")){var a=o.target.parentNode.getAttribute("container-array-ref");D(a),O(o)}if(o.target.matches(".project-delete")&&(F(),t.renderProjects(e.projects),r>0?r--:r=r,t.renderProjects(e.projects),t.renderTodos(e.projects[r].todos),t.currentProjectDisplay(e.projects[r])),o.target.matches(".todo-edit")){var c=o.target.parentNode.getAttribute("project-array-ref");M(c),_()}o.target.matches(".todo-delete")&&(W(),t.renderTodos(e.projects[r].todos)),o.target.matches(".flagged-div")&&(Y(),t.renderTodos(e.projects[r].todos)),o.target.matches(".complete-div")&&(z(),t.renderTodos(e.projects[r].todos))}))}}},i=c(),s=i.projectContainer,l=i.defaultProject,u=d();u.addListeners(),u.documentListener();var p=a();p.renderProjects(s.projects),p.renderTodos(l.todos),p.currentProjectDisplay(l)}]);