import{d as $,o as u,c as _,u as h,t as v,p as P,a as V,b as e,r as c,w as I,e as y,v as T,f as W,n as N,g as q,F as D,h as A,i as F,j as Q,k as Y,l as K,m as b,q as w,s as x,R as C,x as G}from"./vendor.95828768.js";const J=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerpolicy&&(n.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?n.credentials="include":l.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(l){if(l.ep)return;l.ep=!0;const n=s(l);fetch(l.href,n)}};J();const X="modulepreload",H={},Z="/",ee=function(t,s){return!s||s.length===0?t():Promise.all(s.map(a=>{if(a=`${Z}${a}`,a in H)return;H[a]=!0;const l=a.endsWith(".css"),n=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${n}`))return;const i=document.createElement("link");if(i.rel=l?"stylesheet":X,l||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),l)return new Promise((m,f)=>{i.addEventListener("load",m),i.addEventListener("error",f)})})).then(()=>t())};var se="/assets/homepage.e4458487.png";var O=(o,t)=>{const s=o.__vccOpts||o;for(const[a,l]of t)s[a]=l;return s};const te=o=>(P("data-v-5e22aee1"),o=o(),V(),o),le={class:"section homePagebg"},ae={key:0,class:"title"},oe={key:1,class:"title"},ne=te(()=>e("img",{src:se},null,-1)),ie=$({setup(o){var s;const t=(s=r.user)==null?void 0:s.handle;return(a,l)=>(u(),_("div",le,[h(r).user?(u(),_("h1",oe,"Welcome, "+v(h(t)),1)):(u(),_("h1",ae,"Welcome, Please login to continue")),ne]))}});var re=O(ie,[["__scopeId","data-v-5e22aee1"]]);const de={class:"section"},ce={class:"title"},M=$({props:{title:{type:String,default:"Hello World"}},setup(o){const t=o;return(s,a)=>(u(),_("div",de,[e("h1",ce,v(t.title),1)]))}});const E=o=>(P("data-v-36164220"),o=o(),V(),o),ue={class:"container loginContainer"},_e={class:"window"},pe=E(()=>e("div",{class:"overlay"},null,-1)),he={class:"content"},me=["onSubmit"],ve=E(()=>e("div",{class:"welcome"},"Hello There!",-1)),fe={class:"input-fields"},ge=E(()=>e("div",null,[e("button",{class:"ghost-round full-width"},"Login")],-1)),be=$({setup(o){const t=c(""),s=c("");function a(){xs(t.value,s.value)}return(l,n)=>(u(),_("div",ue,[e("div",_e,[pe,e("div",he,[e("form",{onSubmit:I(a,["prevent"])},[ve,e("div",fe,[y(e("input",{type:"text",placeholder:"Username",class:"input-line full-width","onUpdate:modelValue":n[0]||(n[0]=i=>t.value=i)},null,512),[[T,t.value]]),y(e("input",{type:"password",placeholder:"Password",class:"input-line full-width","onUpdate:modelValue":n[1]||(n[1]=i=>s.value=i)},null,512),[[T,s.value]])]),ge],40,me)])])]))}});var ye=O(be,[["__scopeId","data-v-36164220"]]);const S=[{id:1,handle:"Lawliet",firstName:"Lawliet",lastName:"Ryuzaki",password:"Deathnote",email:"l@gmail.com",picture:"https://randomuser.me/api/portraits/lego/4.jpg",userTasks:[{task:"Need to update vue",dueDate:"2022-05-16",isCompleted:!0,assignedBy:"Kira"},{task:"Need to update pinia",dueDate:"2022-01-11",isCompleted:!1,assignedBy:"OnePiece"},{task:"Need to update express",dueDate:"2022-02-28",isCompleted:!0,assignedBy:"Kira"}]},{id:2,handle:"Kira",firstName:"Light",lastName:"Yagami",password:"Shinigami",email:"lyagami@gmail.com",picture:"https://randomuser.me/api/portraits/lego/5.jpg",userTasks:[{task:"Need to update angular",dueDate:"2022-03-21",isCompleted:!1,assignedBy:"Ryuk"},{task:"Need to update react",dueDate:"2022-03-22",isCompleted:!1,assignedBy:"OnePiece"}]},{id:3,handle:"Luffy",firstName:"Monkey",lastName:"Luffy",password:"OnePiece",email:"l@gmail.com",picture:"https://randomuser.me/api/portraits/lego/2.jpg",userTasks:[{task:"Need to update jQuery",dueDate:"2022-05-02",isCompleted:!1,assignedBy:"Kira"},{task:"Need to update ajax",dueDate:"2022-07-02",isCompleted:!1,assignedBy:"Ryuk"}]}];var $e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",list:S});const ke={class:"section"},we={class:"container"},Te={class:"columns"},xe={class:"column"},Ce={class:"panel"},Ne={class:"tabs is-boxed"},Se=e("a",null,[e("span",{class:"icon"},[e("i",{class:"fas fa-clipboard-list","aria-hidden":"true"})]),e("span",null,"Current")],-1),Le=[Se],De=e("a",null,[e("span",{class:"icon"},[e("i",{class:"fas fa-calendar-times","aria-hidden":"true"})]),e("span",null,"Completed")],-1),Ae=[De],Ue=e("a",null,[e("span",{class:"icon"},[e("i",{class:"fas fa-calendar","aria-hidden":"true"})]),e("span",null,"All")],-1),Be=[Ue],Pe={class:"panel-block"},Ve=["onSubmit"],Ie={class:"field has-addons"},Oe={class:"control has-icons-left is-expanded"},Ee=e("span",{class:"icon is-left"},[e("i",{class:"fas fa-calendar-plus","aria-hidden":"true"})],-1),Re=e("br",null,null,-1),ze={class:"control has-icons-left is-expanded"},He=e("span",{class:"icon is-left"},[e("i",{class:"fa fa-dharmachakra","aria-hidden":"true"})],-1),Me=e("br",null,null,-1),We={class:"control has-icons-left is-expanded"},Ke=["value"],je=e("span",{class:"icon is-left"},[e("i",{class:"fas fa-book-reader","aria-hidden":"true"})],-1),qe=e("br",null,null,-1),Fe=e("div",{class:"control"},[e("button",{class:"button is-primary"},"Add")],-1),Qe={class:"table",style:{width:"100%"}},Ye=e("thead",null,[e("tr",null,[e("th",null,[e("abbr",{title:"title"},"Title")]),e("th",null,[e("abbr",{title:"dueDate"},"Due Date(yyyy/mm/dd)")]),e("th",null,[e("abbr",{title:"assignedTo"},"Assigned To")]),e("th",null,[e("abbr",{title:"assignedBy"},"Assigned by")]),e("th",null,[e("abbr",{title:"completed"},"Completed")])])],-1),Ge=["onUpdate:modelValue"],Je=$({setup(o){var z;const t=c("All"),s=c(""),a=c(""),l=c("");(z=r.user)==null||z.userTasks;const n=W(r.user!=null?r.user.userTasks:null),i=c(r.user!=null?r.user.userTasks:null),m=c(null);console.log(S);function f(){var p,d;const g=S.find(L=>L.id+""==l.value);m.value=(p=r.user)==null?void 0:p.handle,console.log(m),console.log(g),g==null||g.userTasks.unshift({task:s.value,dueDate:a.value,isCompleted:!1,assignedBy:m}),console.log(g),((d=r.user)==null?void 0:d.id)+""==l.value&&(i.value=g==null?void 0:g.userTasks),s.value="",a.value="",l.value=""}function k(g){t.value=g,t.value.includes("Current")?i.value=n.filter(p=>!p.isCompleted):t.value.includes("Completed")?i.value=n.filter(p=>p.isCompleted):i.value=n}return(g,p)=>(u(),_("div",ke,[e("div",we,[e("div",Te,[e("div",xe,[e("div",Ce,[e("div",Ne,[e("ul",null,[e("li",{class:N({"is-active":t.value=="Current"}),onClick:p[0]||(p[0]=d=>k("Current"))},Le,2),e("li",{class:N({"is-active":t.value=="Completed"}),onClick:p[1]||(p[1]=d=>k("Completed"))},Ae,2),e("li",{class:N({"is-active":t.value=="All"}),onClick:p[2]||(p[2]=d=>k("All"))},Be,2)])]),e("div",Pe,[e("form",{style:{width:"100%"},onSubmit:I(f,["prevent"])},[e("div",Ie,[e("div",Oe,[y(e("input",{class:"input is-primary",type:"text",placeholder:"New Task","onUpdate:modelValue":p[3]||(p[3]=d=>s.value=d)},null,512),[[T,s.value]]),Ee]),Re,e("div",ze,[y(e("input",{class:"input is-primary",type:"date",placeholder:"Date","onUpdate:modelValue":p[4]||(p[4]=d=>a.value=d)},null,512),[[T,a.value]]),He]),Me,e("div",We,[y(e("select",{class:"input is-primary",type:"text",placeholder:"Select User","onUpdate:modelValue":p[5]||(p[5]=d=>l.value=d)},[(u(!0),_(D,null,A(h($e).list,d=>(u(),_("option",{key:d.firstName,value:d.id},v(d.firstName),9,Ke))),128))],512),[[q,l.value]]),je]),qe,Fe])],40,Ve)]),e("table",Qe,[Ye,(u(!0),_(D,null,A(i.value,d=>{var L;return u(),_("tbody",{key:d.title},[e("tr",null,[e("td",null,v(d.task),1),e("td",null,v(d.dueDate),1),e("td",null,v((L=h(r).user)==null?void 0:L.handle),1),e("td",null,v(d.assignedBy),1),e("td",null,[e("a",{class:N(["panel-block",{"is-completed":t.value!="Completed"&&d.isCompleted}])},[y(e("input",{type:"checkbox","onUpdate:modelValue":j=>d.isCompleted=j},null,8,Ge),[[F,d.isCompleted]])],2)])])])}),128))])])])])])]))}}),Xe={class:"section"},Ze={class:"container"},es={class:"columns"},ss={class:"column"},ts={class:"title"},ls={class:"panel"},as={class:"table",style:{width:"100%"}},os=e("thead",null,[e("tr",null,[e("th",null,[e("abbr",{title:"title"},"Task Title")]),e("th",null,[e("abbr",{title:"dueDate"},"Due Date(yyyy-mm-dd)")]),e("th",null,[e("abbr",{title:"assignedTo"},"Assigned To")]),e("th",null,[e("abbr",{title:"assignedBy"},"Assigned by")])])],-1),ns=$({setup(o){var s;c("All"),c(""),c(""),c(""),(s=r.user)==null||s.userTasks,c(r.user!=null?r.user.userTasks:null),c(r.user!=null?r.user.userTasks:null),c(null);const t=S;return(a,l)=>{var n;return u(),_("div",Xe,[e("div",Ze,[e("div",es,[e("div",ss,[e("h1",ts,"Welcome "+v((n=h(r).user)==null?void 0:n.handle),1),e("div",ls,[e("table",as,[os,(u(!0),_(D,null,A(h(t),(i,m)=>(u(),_("tbody",{key:i.userTasks[m]},[(u(!0),_(D,null,A(h(t)[m].userTasks,(f,k)=>(u(),_("tr",{key:f[k]},[e("td",null,v(i.userTasks[k].task),1),e("td",null,v(i.userTasks[k].dueDate),1),e("td",null,v(h(t)[m].handle),1),e("td",null,v(i.userTasks[k].assignedBy),1)]))),128))]))),128))])])])])])])}}}),is={class:"container my-5 mt-5 mx-5 px-5"},rs=e("h2",{class:"title is-2 is-capitalized"},"Contact Us",-1),ds=["onSubmit"],cs={class:"field"},us=e("label",{for:"name",class:"label is-size-4 has-text-weight-light"},null,-1),_s={class:"control has-icons-left"},ps=e("span",{class:"icon is-left"},[e("i",{class:"fa fa-user"})],-1),hs={class:"field"},ms=e("label",{for:"email",class:"label is-size-4 has-text-weight-light"},null,-1),vs={class:"control has-icons-left"},fs=e("span",{class:"icon is-left"},[e("i",{class:"fa fa-envelope"})],-1),gs={class:"field"},bs=e("label",{for:"message",class:"label is-size-4 has-text-weight-light"},null,-1),ys=e("button",{type:"submit",class:"button is-success is-size-5"},"Submit",-1),$s=e("hr",null,null,-1),ks={class:"title"},ws=$({setup(o){const t=c(""),s=c(""),a=c(""),l=c("");function n(){t.value="Thanks for your review. It will be addressed shortly",s.value="",a.value="",l.value=""}return(i,m)=>(u(),_("div",is,[rs,e("form",{onSubmit:I(n,["prevent"]),method:"post"},[e("div",cs,[us,e("div",_s,[y(e("input",{type:"text",name:"name",id:"name",class:"input",placeholder:"Name",autofocus:"","onUpdate:modelValue":m[0]||(m[0]=f=>s.value=f)},null,512),[[T,s.value]]),ps])]),e("div",hs,[ms,e("div",vs,[y(e("input",{type:"email",name:"email",id:"email",class:"input",placeholder:"Email","onUpdate:modelValue":m[1]||(m[1]=f=>a.value=f)},null,512),[[T,a.value]]),fs])]),e("div",gs,[bs,y(e("textarea",{name:"message",id:"message",rows:"5",class:"textarea is-medium",placeholder:"Message","onUpdate:modelValue":m[2]||(m[2]=f=>l.value=f)},null,512),[[T,l.value]])]),ys],40,ds),$s,e("h1",ks,v(t.value),1)]))}}),Ts=[{path:"/",component:re},{path:"/login",component:ye},{path:"/messages",component:()=>ee(()=>import("./Wall.67d8ede9.js"),["assets/Wall.67d8ede9.js","assets/vendor.95828768.js"])},{path:"/signup",component:M,props:{title:"Signup Page!"}},{path:"/about",component:M,props:{title:"About Page!"}},{path:"/contact",component:ws},{path:"/assignedtasks",component:Je},{path:"/viewAllTasks",component:ns}],B=Q({history:Y(),routes:Ts,linkActiveClass:"is-active"});B.beforeEach((o,t)=>{r.destinationUrl==null&&o.path!="/login"&&(r.destinationUrl=o.path),console.log({to:o});const s=["/assignedtasks","/viewAllTasks","/feed","/hidden"];if(console.log({protectedUrls:s}),s.includes(o.path)&&(console.log("requires login"),!r.user))return"/login"});const U=W({user:null,destinationUrl:null});async function xs(o,t){var a;const s=S.find(l=>l.handle===o);if(!s)throw{message:"User not found"};if(s.password!==t)throw{message:"Password Incorrect"};U.user=s,B.push((a=U.destinationUrl)!=null?a:"/")}function Cs(){U.user=null,B.push("/login")}var r=U;const R=o=>(P("data-v-2af43f50"),o=o(),V(),o),Ns={key:0,class:"buttons"},Ss=R(()=>e("strong",null,"Sign up",-1)),Ls=x(" Log in "),Ds={key:1,class:"buttons"},As={class:"avatar"},Us=["src"],Bs=x(),Ps=R(()=>e("br",null,null,-1)),Vs=R(()=>e("strong",null,"Log out",-1)),Is=[Vs],Os=$({setup(o){return(t,s)=>{const a=K("router-link");return h(r).user?(u(),_("div",Ds,[e("div",As,[e("img",{src:h(r).user.picture},null,8,Us),e("div",null,[e("strong",null,v(h(r).user.firstName)+" "+v(h(r).user.lastName),1),Bs,Ps,e("i",null,v(h(r).user.email),1)])]),e("a",{class:"button is-primary",onClick:s[0]||(s[0]=l=>h(Cs)())},Is)])):(u(),_("div",Ns,[b(a,{class:"button is-primary",to:"/signup"},{default:w(()=>[Ss]),_:1}),b(a,{class:"button is-light",to:"/login"},{default:w(()=>[Ls]),_:1})]))}}});var Es=O(Os,[["__scopeId","data-v-2af43f50"]]);const Rs={class:"navbar is-outlined navHeaderbg",role:"navigation","aria-label":"main navigation"},zs={class:"container homepagebg"},Hs={class:"navbar-start"},Ms=x("Home"),Ws={class:"navbar-item has-dropdown is-hoverable"},Ks=e("a",{class:"navbar-link"},"Tasks",-1),js={class:"navbar-dropdown"},qs=x("Tasks Assigned"),Fs=x("All Tasks"),Qs={class:"navbar-item has-dropdown is-hoverable"},Ys=e("a",{class:"navbar-link"},"More",-1),Gs={class:"navbar-dropdown"},Js=x("About"),Xs=e("hr",{class:"navbar-divider"},null,-1),Zs=x("Report an issue"),et={class:"navbar-end"},st={class:"navbar-item"},tt=$({setup(o){const t=c(!1);return(s,a)=>(u(),_("nav",Rs,[e("div",zs,[e("div",{class:N(["navbar-menu",{"is-active":t.value}])},[e("div",Hs,[b(h(C),{class:"navbar-item",to:"/"},{default:w(()=>[Ms]),_:1}),e("div",Ws,[Ks,e("div",js,[b(h(C),{class:"navbar-item",to:"/assignedtasks"},{default:w(()=>[qs]),_:1}),b(h(C),{class:"navbar-item",to:"/viewAllTasks"},{default:w(()=>[Fs]),_:1})])]),e("div",Qs,[Ys,e("div",Gs,[b(h(C),{class:"navbar-item",to:"/about"},{default:w(()=>[Js]),_:1}),Xs,b(h(C),{class:"navbar-item",to:"/contact"},{default:w(()=>[Zs]),_:1})])])]),e("div",et,[e("div",st,[b(Es)])])],2)])]))}}),lt={class:"container"},at=$({setup(o){return(t,s)=>{const a=K("router-view");return u(),_("div",null,[b(tt),e("div",lt,[b(a)])])}}});G(at).use(B).mount("#app");
