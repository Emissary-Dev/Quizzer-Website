const e=document.querySelector("#menu-btn"),t=(document.querySelector(".logo"),document.querySelector(".menu-container")),n=document.querySelector(".white-theme"),o=document.querySelector(".gray-theme"),s=document.querySelector(".purple-theme"),r=document.querySelector(".transparent-black-screen"),i=document.querySelector(".create-a-quiz-hyperlink"),a=document.querySelector("#create-btn"),l=document.querySelector(".scroll-container"),c=document.querySelector("#signed-in-as"),u=document.querySelector("#eaqc"),d=document.querySelector("#select-a-quiz-main-div"),m=document.querySelector(".new-quiz-btn"),h=document.querySelector(".log-out-btn");class q{constructor(e,t,n){this.themeObj={newClass:e,oldClass1:t,oldClass2:n,newClassNoIndi:e.slice(1),oldClass1NoIndi:t.slice(1),oldClass2NoIndi:""},this.themeObj.oldClass2&&(this.themeObj.oldClass2NoIndi=n.slice(1))}addTheme=function(e){this.themeObj.oldClass1&&document.querySelectorAll(this.themeObj.oldClass1).forEach((e=>{e.classList.remove(this.themeObj.oldClass1NoIndi),e.classList.add(this.themeObj.newClassNoIndi)})),""!==this.themeObj.oldClass2NoIndi&&document.querySelectorAll(this.themeObj.oldClass2).forEach((e=>{e.classList.remove(this.themeObj.oldClass2NoIndi),e.classList.add(this.themeObj.newClassNoIndi)}))}}const w=document.querySelector("#delete-container"),b=document.querySelector("#transparent-black-screen");let v,p,y,f,g,S,z,x,L,k,A,E,O,j,M,T,N,I=new q(".main-theme-color",".gray-theme-color",".purple-theme-color"),$=new q(".main-hyperlink-color",".secondary-hyperlink-color"),C=new q(".main-quiz-tab-color",".purple-quiz-tab-color",".gray-quiz-tab-color"),Q=new q(".main-theme-color-secondary",".gray-theme-color-secondary",".purple-theme-color-secondary"),H=new q(".main-font-color",".white-font-color"),_="main",J=0;const P=function(){"white"===JSON.parse(localStorage.getItem("current_username")).theme?he():"gray"===JSON.parse(localStorage.getItem("current_username")).theme?qe():we()},R=function(){t.classList.add("no-opacity"),t.classList.add("menu-hidden-pos"),r.classList.add("no-opacity"),document.body.style.overflowY="scroll"},Y=function(e){return localStorage.setItem("current_quiz",JSON.stringify(Object.values(N.quizzes)[e])),JSON.parse(localStorage.getItem("current_quiz"))};b.addEventListener("click",(function(){document.body.style.overflowY="scroll",b.classList.add("hidden"),w.classList.add("hidden")})),document.querySelector("#delete-yes").addEventListener("click",(function(){document.body.style.overflowY="scroll",b.classList.add("hidden"),w.classList.add("hidden"),G(J)})),document.querySelector("#delete-no").addEventListener("click",(function(e){document.body.style.overflowY="scroll",b.classList.add("hidden"),w.classList.add("hidden")}));const W=function(){localStorage.setItem("current_username",JSON.stringify(N))},U=function(){N=JSON.parse(localStorage.getItem("current_username"))},F=function(){T=document.querySelector("#caqc"),T.classList.remove("hidden"),D(T),m.removeEventListener("click",F),a.addEventListener("click",B),document.querySelector("#new-quiz-name-input").addEventListener("keyup",(function(e){"Enter"===e.key&&B()}))};function B(){const e=document.querySelector("#quiz-type-select"),t=document.querySelector("#new-quiz-name-input");if(t.value&&""!==t.value.trim())return N.quizzes[t.value.trim()]?void newMessage(!1,"Quiz name taken. Try another one","timed"):(a.removeEventListener("click",B),t.removeEventListener("keyup",B),X(e.value,t.value.trim()),t.value="",T.classList.add("hidden"),void newMessage(!0,"Quiz Created! Use Edit to add Questions/Answers","timed"));newMessage(!1,"Please enter a name","timed")}const D=function(e){const t=e.getBoundingClientRect();window.scrollTo({left:0,top:t.top+window.pageYOffset,behavior:"smooth"})},X=function(e,t){Z({name:t,type:e,highestCombo:0,questions:[]},t)},Z=function(e,t){U(),N.quizzes[t]=e,ae(),K()},G=function(e){document.querySelector(`#quiz-tab-flex-${e}`)&&document.querySelector(`#quiz-tab-flex-${e}`).remove(),U(),delete N.quizzes[Object.keys(N.quizzes)[e]],ae(),localStorage.setItem("current_quiz",""),K()},K=function(){Object.keys(N.quizzes).length>0?(document.querySelectorAll(".quiz-tab-flex").forEach((e=>{e.remove()})),Object.values(N.quizzes).forEach(((e,t)=>{l.insertAdjacentHTML("beforeend",`<div id='quiz-tab-flex-${t}' class="quiz-tab-flex"> <button id='quiz-tab-${t}' class="quiz-tab ${_}-quiz-tab-color  tab-shadow">\n      <p class="quiz-name-tag main-font-color">${e.name}</p>\n      <p class="quiz-questions-tag main-font-color">Questions: ${Object.keys(e.questions).length}<br/>High Score: ${e.highestCombo} </p>\n    \n      </button>      <p id='edit-${t}' class="quiz-tab-options-container quiz-tab-options-edit scale-up">Edit</p>\n      <p  id="delete-${t}" class="quiz-tab-options-container quiz-tab-options-delete scale-up ">X\n       </p></div>`),document.querySelector(`#delete-${t}`).addEventListener("click",(function(e){var n;e.stopPropagation,T&&T.classList.add("hidden"),D(d),n=t,w.classList.remove("hidden"),b.classList.remove("hidden"),document.body.style.overflowY="hidden",document.querySelector("#delete-question").textContent=`Are you sure you want to delete "${Object.keys(N.quizzes)[n]}"? `,J=t})),document.querySelector(`#edit-${t}`).addEventListener("click",(function(e){V(t),newMessage(!0,"Welcome to edit! Scroll down to begin adding/editing questions!","timed")})),document.querySelector(`#quiz-tab-${t}`).addEventListener("click",(function(n){e.questions.length>0?e?(Y(t),window.location.href="quizzing.html"):newMessage(!1,"Error: Failed to access quiz. Please try again later","timed"):newMessage(!1,"You can not begin quizzing yet! Please add some questions!","timed")}))})),document.querySelector("#no-quizzes-text").classList.add("hidden"),m.classList.remove("hidden"),P(),m.addEventListener("click",F)):(document.querySelector("#no-quizzes-text").classList.remove("hidden"),m.classList.add("hidden")),localStorage.getItem("current_quiz")?document.querySelector("#recent-quiz").textContent=JSON.parse(localStorage.getItem("current_quiz")).name:document.querySelector("#recent-quiz").textContent="",document.querySelector(".play-now-btn").addEventListener("click",(function(e){""!==JSON.parse(localStorage.getItem("current_quiz"))&&JSON.parse(localStorage.getItem("current_quiz")).questions.length>0?window.location.href="quizzing.html":newMessage(!1,"You can not begin quizzing yet! Please add some questions!","timed")}))},V=function(e){u.classList.remove("hidden"),d.classList.add("hidden"),T&&T.classList.add("hidden"),u.innerHTML=' <header class="title  select-a-quiz main-font-color">EDIT QUIZ</header>\n  <div class="return-arrow scale-up main-font-color">\n  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n   <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n </svg>\n</div>\n \n   <div class="edit-quiz-grid">\n     <select disabled id="edit-multiple-choice-input">\n       <option value="sq">Standard Quiz</option>\n       <option value="mc">Multiple Choice</option>\n     </select>\n     <input id="edit-quiz-name-box" type="text" placeholder="Quiz Name" />\n     <p id="edit-quiz-questions-counter" class=" main-font-color">Total Questions: </p>\n     <p class="sub-title edit-quiz-questions-sub-title main-font-color">Questions </p>\n     <div class="scroll-container questions-scroll-container"> \n     </div>\n\n     <p class="sub-title edit-quiz-answers-sub-title main-font-color">Answers </p>\n     <div id="answers-list" class="scroll-container answers-scroll-container"> \n     </div>\n   \n \n     <div class="edit-btn-flex">\n\n       <button class=" scale-up save-btn">Save</button>\n       <button class="scale-up add-btn">Add Question</button>\n       <div class="remove-quiz-flex">\n       <input id="question-delete-box" type="text" placeholder="1" />\n       <button class="scale-up remove-btn">Remove Question</button>\n\n     </div>\n     </div>\n   </div>',f=document.querySelector(".add-btn"),k=document.querySelector(".remove-btn"),A=document.querySelector(".save-btn"),E=document.querySelector(".return-arrow"),j=document.querySelector("#edit-multiple-choice-input"),v=document.querySelector(".questions-scroll-container"),p=document.querySelector(".answers-scroll-container"),M=document.querySelector("#answers-list"),L=document.querySelector("#question-delete-box"),O=document.querySelector("#edit-quiz-name-box");const t=Y(e);if(document.querySelector("#edit-quiz-questions-counter").textContent=`Total Questions: ${Object.values(t.questions).length}`,O.value=t.name,v.classList.add("spaced-grid-template-rows"),E.addEventListener("click",(function(e){u.classList.add("hidden"),u.innerHTML="",d.classList.remove("hidden"),v.innerHTML="",p.innerHTML="",K()})),"sq"===t.type)j.value="sq",f.addEventListener("click",(function(t){!1===oe()?Object.values(N.quizzes)[e].questions.length<500?(le(e),newMessage(!0,"Success! Scroll up to view added questions","timed")):newMessage(!1,"Question limit reached. Please remove some questions and try again","timed"):newMessage(!1,"Failed. Please make sure each box is filled","timed")})),k.addEventListener("click",(function(n){!isNaN(parseInt(L.value.trim()))&&parseInt(L.value.trim())<=Object.values(t.questions).length?(ue(L.value.trim(),e),newMessage(!0,"Removed.","timed")):newMessage(!1,"Remove failed. Please make sure the box is filled with valid characters","timed")})),A.addEventListener("click",(function(t){!1===ee()?se(e):newMessage(!1,"Save failed. Please make sure each box is filled","timed")})),ie(e),p.classList.add("spaced-grid-template-rows"),Object.values(N.quizzes)[e].questions.forEach(((e,t)=>{p.insertAdjacentHTML("beforeend",` <div class="edit-questions-container answers">\n        <p class="sub-title main-font-color list-num">${t+1}.</p>\n      <input class="edit-answer-box" type="text" placeholder="Answer" value="${e.answer}"/>\n      </div>`)})),M.insertAdjacentHTML("afterend",' <div class="interchangable-check-box-flex">\n        <p class="sub-title new-question-sub-title main-font-color">Is the Answer\'s word order interchangeable? (Uncheck if each word should be in order)</p>\n        <div id="interchangeable-scroll-container"> \n        </div>\n        \n        </div> <p class="sub-title new-question-sub-title main-font-color">New Question </p>\n        <input id="new-question-box" type="text" placeholder="New Question" />\n        \n        \n        <p class="sub-title new-answer-sub-title main-font-color">Answer to the New Question </p>\n        <input id="new-answer-box" type="text" placeholder="New Answer" />\n\n        <div class="new-interchangable-check-box-flex">\n        <p class="sub-title new-question-sub-title main-font-color">Is the Answer\'s word order interchangeable? (Uncheck if each word should be in order)</p>\n        <input type="checkbox" id="new-interchangeable-check-box" name="new-interchangeable" value="true" checked>\n\n        </div>'),y=document.querySelector("#interchangeable-scroll-container"),Object.values(N.quizzes)[e].questions.forEach(((e,t)=>{y.insertAdjacentHTML("beforeend",` <div class="interchangeable-flex"><p class="sub-title main-font-color list-num">${t+1}.</p>\n          <input type="checkbox"  class="interchangeable-check-box" name="new-interchangeable" value="${e.interchangeable}" ${"true"===e.interchangeable?"checked":""}></div>`)}));else{j.value="mc",ie(e),f.addEventListener("click",(function(t){!1===ne()?Object.values(N.quizzes)[e].questions.length<500?(ce(e),newMessage(!0,"Added.","timed")):newMessage(!1,"Question limit reached. Please delete some questions and try again","timed"):newMessage(!1,"Failed. Please make sure each box is filled","timed")})),k.addEventListener("click",(function(n){!isNaN(parseInt(L.value.trim()))&&parseInt(L.value.trim())<=Object.values(t.questions).length?(ue(L.value.trim(),e),newMessage(!0,"Removed.","timed")):newMessage(!1,"Remove failed. Please make sure the box is filled with valid characters","timed")})),A.addEventListener("click",(function(t){!1===te()?(re(e),newMessage(!0,"Saved.","timed")):newMessage(!1,"Save failed. Please make sure each box is filled","timed")})),M.insertAdjacentHTML("afterend",'\n       \n       <p class="sub-title new-question-sub-title main-font-color">New Question </p>\n       <input id="new-question-box" type="text" placeholder="New Question" />\n       \n       \n       <p class="sub-title new-answer-sub-title main-font-color">Wrong Answers to the New Question </p>\n       <div id="wong-answers-scroll-container" class=" new-answers-scroll-container"> \n       <input class="new-answer-box" type="text" placeholder="Wrong Answer" />\n       </div>\n\n         \n       <p class="sub-title new-answer-sub-title main-font-color">Answer to the New Question </p>\n       <input id="new-answer-box" type="text" placeholder="Real Answer" />\n\n       '),p.classList.add("auto-grid-template-rows"),p.style.removeProperty("grid-auto-rows"),Object.values(N.quizzes)[e].questions.forEach(((e,t)=>{p.insertAdjacentHTML("beforeend",` <p class="sub-title main-font-color mc-answers-list-num">For Question ${t+1}</p> <div id="mc-answers-scroll-container-${t}" class="mc-answers-scroll-container"> </div>`),document.querySelector(`#mc-answers-scroll-container-${t}`).insertAdjacentHTML("beforeend",` <p class="sub-title  mc-answers-list-num">Right Answer</p> <input class="right-answer-box edit-answer-box" type="text" placeholder="Answer" value="${e.answers.realAnswer}"/> <p class="sub-title  mc-answers-list-num">Wrong Answers</p>`),e.answers.wrongAnswers.forEach(((e,n)=>{document.querySelector(`#mc-answers-scroll-container-${t}`).insertAdjacentHTML("beforeend",`  <input class="wrong-answer-box" type="text" placeholder="Answer" value="${e}"/>`)}))})),k.insertAdjacentHTML("afterend",'\n       <button class="scale-up add-answer-btn">Add Wrong Answer</button>\n       ');document.querySelector(".add-answer-btn").addEventListener("click",(function(){let e=!0;document.querySelectorAll(".new-answer-box").forEach(((t,n)=>{n>6&&(e=!1)})),e?document.querySelector(".new-answers-scroll-container").insertAdjacentHTML("beforeend",'\n        <input class="new-answer-box" type="text" placeholder="Wrong Answer" />\n \n        '):newMessage(!1,"Wrong Answer limit reached.","timed")}))}},ee=function(){let e=!1;return document.querySelectorAll(".edit-question-name-box").forEach(((t,n)=>{" "!==t.value.trim()&&""!==t.value.trim()||(e=!0)})),document.querySelectorAll(".edit-answer-box").forEach(((t,n)=>{" "!==t.value.trim()&&""!==t.value.trim()||(e=!0)}))," "!==O.value.trim()&&""!==O.value.trim()||(e=!0),!0===e},te=function(){let e=!1;return document.querySelectorAll(".edit-question-name-box").forEach(((t,n)=>{" "!==t.value.trim()&&""!==t.value.trim()||(e=!0)})),document.querySelectorAll(".mc-answers-scroll-container").forEach(((t,n)=>{t.querySelectorAll(".wrong-answer-box").forEach(((t,n)=>{" "!==t.value.trim()&&""!==t.value.trim()||(e=!0)})),t.querySelectorAll(".edit-answer-box").forEach(((t,n)=>{" "!==t.value.trim()&&""!==t.value.trim()||(e=!0)}))})),!0===e},ne=function(){let e=!1;return S=document.querySelector("#new-question-box"),g=document.querySelector("#new-answer-box"),x=[],document.querySelectorAll(".new-answer-box").forEach(((t,n)=>{" "!==t.value.trim()&&""!==t.value.trim()||(e=!0)}))," "!==S.value.trim()&&""!==S.value.trim()||(e=!0)," "!==g.value.trim()&&""!==g.value.trim()||(e=!0),!0===e},oe=function(){let e=!1;return S=document.querySelector("#new-question-box"),g=document.querySelector("#new-answer-box"),z=document.querySelector("#new-interchangeable-check-box")," "!==g.value.trim()&&""!==g.value.trim()||(e=!0)," "!==S.value.trim()&&""!==S.value.trim()||(e=!0),!0===e},se=function(e){Object.values(N.quizzes)[e].name=O.value.trim(),document.querySelectorAll(".edit-question-name-box").forEach(((t,n)=>{Object.values(N.quizzes)[e].questions[n].question=t.value.trim()})),document.querySelectorAll(".edit-answer-box").forEach(((t,n)=>{Object.values(N.quizzes)[e].questions[n].answer=t.value.trim()})),document.querySelectorAll(".interchangeable-check-box").forEach(((t,n)=>{t.checked?t.value=!0:t.value=!1,Object.values(N.quizzes)[e].questions[n].interchangeable=t.value})),ae(),newMessage(!0,"Saved.","timed")},re=function(e){Object.values(N.quizzes)[e].name=O.value.trim(),Object.values(N.quizzes)[e].questions.forEach(((e,t)=>{e.answers.wrongAnswers=[]})),document.querySelectorAll(".edit-question-name-box").forEach(((t,n)=>{Object.values(N.quizzes)[e].questions[n].question=t.value.trim()})),document.querySelectorAll(".mc-answers-scroll-container").forEach(((t,n)=>{t.querySelectorAll(".wrong-answer-box").forEach(((t,o)=>{Object.values(N.quizzes)[e].questions[n].answers.wrongAnswers.push(t.value.trim())})),t.querySelectorAll(".edit-answer-box").forEach(((t,o)=>{Object.values(N.quizzes)[e].questions[n].answers.realAnswer=t.value.trim()}))})),ae(),newMessage(!0,"Saved.","timed")},ie=function(e){Object.values(N.quizzes)[e].questions.forEach(((e,t)=>{v.insertAdjacentHTML("beforeend",`<div class="edit-questions-container ">\n        <p class="sub-title main-font-color list-num">${t+1}.</p>\n      <input id="edit-question-name-box-${t}" class="edit-question-name-box " type="text" placeholder="Question Name" value="${e.question}" />\n      </div>`)}))},ae=function(){localStorage.setItem("current_username",JSON.stringify(N)),localStorage.setItem(`${N.username}`,JSON.stringify(N))},le=function(e){const t={question:S.value.trim(),answer:g.value.trim(),interchangeable:z.checked?"true":"false"};de(t,e)},ce=function(e){document.querySelectorAll(".new-answer-box").forEach(((e,t)=>{x.push(e.value.trim())}));const t={question:S.value.trim(),answers:{realAnswer:g.value.trim(),wrongAnswers:x}};de(t,e)},ue=function(e,t){U(),Object.values(N.quizzes)[t].questions.splice(e-1,1),W(),document.querySelectorAll(".edit-questions-container").forEach((e=>{e.remove()})),document.querySelectorAll(".interchangeable-flex").forEach((e=>{e.remove()})),V(t)},de=function(e,t){U(),Object.values(N.quizzes)[t].questions.push(e),W(),V(t)},me=function(e){U(),N.theme=e,ae(),localStorage.setItem(`${JSON.parse(localStorage.getItem("current_username")).username}`,JSON.stringify(N))},he=function(){I=new q(".main-theme-color",".gray-theme-color",".purple-theme-color"),$=new q(".main-hyperlink-color",".secondary-hyperlink-color"),C=new q(".main-quiz-tab-color",".purple-quiz-tab-color",".gray-quiz-tab-color"),Q=new q(".main-theme-color-secondary",".gray-theme-color-secondary",".purple-theme-color-secondary"),H=new q(".main-font-color",".white-font-color"),I.addTheme(),$.addTheme(),H.addTheme(),C.addTheme(),Q.addTheme(),_="main",me("white")},qe=function(){I=new q(".gray-theme-color",".main-theme-color",".purple-theme-color"),$=new q(".secondary-hyperlink-color",".main-hyperlink-color"),C=new q(".gray-quiz-tab-color",".purple-quiz-tab-color",".main-quiz-tab-color"),Q=new q(".gray-theme-color-secondary",".main-theme-color-secondary",".purple-theme-color-secondary"),H=new q(".white-font-color",".main-font-color"),I.addTheme(),$.addTheme(),H.addTheme(),C.addTheme(),Q.addTheme(),_="gray",me("gray")},we=function(){I=new q(".purple-theme-color",".main-theme-color",".gray-theme-color"),$=new q(".secondary-hyperlink-color",".main-hyperlink-color"),C=new q(".purple-quiz-tab-color",".gray-quiz-tab-color",".main-quiz-tab-color"),Q=new q(".purple-theme-color-secondary",".main-theme-color-secondary",".gray-theme-color-secondary"),H=new q(".white-font-color",".main-font-color"),I.addTheme(),$.addTheme(),H.addTheme(),C.addTheme(),Q.addTheme(),_="purple",me("purple")};e.addEventListener("click",(function(e){t.classList.contains("no-opacity")?(t.classList.remove("no-opacity"),t.classList.remove("menu-hidden-pos"),r.classList.remove("no-opacity"),document.body.style.overflow="hidden",window.scrollTo(0,0)):R()})),r.addEventListener("click",R),o.addEventListener("click",qe),n.addEventListener("click",he),s.addEventListener("click",we),h.addEventListener("click",(function(e){localStorage.setItem("current_quiz",""),window.location.href="index.html"})),localStorage.setItem("scrollToSignUp","false"),localStorage.getItem("current_username")?P():window.location.href="index.html",i&&i.addEventListener("click",(function(e){e.preventDefault(),F()})),N=JSON.parse(localStorage.getItem("current_username")),c.textContent=`Signed in as: ${N.username}`,K();
//# sourceMappingURL=logged-in.3f64ba77.js.map