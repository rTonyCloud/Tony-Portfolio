(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{41:function(e,t,c){},52:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),i=c(21),n=c.n(i),r=(c(52),c(53),c(42)),l=(c(41),c(1)),j=function(){return Object(l.jsxs)("div",{className:"Jumbotron",children:[Object(l.jsx)("h1",{className:"text-white bold-black",children:"Welcome to Tony Rivera's Website."}),Object(l.jsx)("h2",{className:"text-white bold-black",children:"I am a full-stack engineer!"})]})};var o=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(j,{})})},b=c.p+"static/media/me.5e084c67.png",d=c(31),h=c(22),x=c(68),u=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(x.a,{children:[Object(l.jsx)("h1",{children:"About Me:"}),Object(l.jsx)("h2",{children:"My name is Tony Rivera and I am a Full-Stack Engineer!"}),Object(l.jsx)(d.a,{children:Object(l.jsxs)(h.a,{xs:2,md:2,children:[Object(l.jsx)("img",{src:b,alt:"tonyphoto",roundedCircle:!0})," "]})})]})})},m=c(8),O=c(2),g=c(11);var p=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(g.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(""),n=Object(g.a)(i,2),r=n[0],j=n[1],o=c.name,b=c.email,d=c.message,h=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));r||(s(Object(O.a)(Object(O.a)({},c),{},Object(m.a)({},e.target.name,e.target.value))),console.log("Handle Form",c))};return Object(l.jsx)(x.a,{children:Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),r||console.log("Submit Form",c)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:o,onBlur:h})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:b,onBlur:h})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:d,onBlur:h})]}),r&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:r})}),Object(l.jsx)("button",{"data-testid":"button",type:"submit",className:"btn",children:"Submit"})]})]})})};c(57);var A=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("footer",{children:Object(l.jsx)("h2",{children:"\xa9 2021 Tony Rivera"})})})},f=c(69),v=c(70),y=c.p+"static/media/resume.59ebc4c1.pdf",B=c(25),w=(c(58),function(){return Object(l.jsx)("div",{className:"Nav",children:Object(l.jsx)(f.a,{claasName:"Navbar",variant:"dark",expand:"lg",children:Object(l.jsxs)(x.a,{children:[Object(l.jsxs)(f.a.Brand,{href:"https://rtonycloud.github.io/React-Portfolio",children:[Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"Logo",className:"logo"})," "]}),Object(l.jsx)(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(l.jsx)(f.a.Collapse,{id:"basic-navbar-nav",children:Object(l.jsxs)(v.a,{children:[Object(l.jsx)(v.a.Link,{as:B.b,to:"/React-Portfolio",children:"Home"}),Object(l.jsx)(v.a.Link,{as:B.b,to:"/About",children:"About"}),Object(l.jsx)(v.a.Link,{as:B.b,to:"/Projects",children:"Projects"}),Object(l.jsx)(v.a.Link,{as:B.b,to:"/Contact",children:"Contact"}),Object(l.jsx)("button",{children:Object(l.jsx)("a",{href:y,download:"resume.pdf",children:"Download Resume"})})]})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{href:"https://github.com/rTonyCloud/",children:Object(l.jsx)("i",{class:"fab fa-github"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/tony-rivera-engineer/",children:Object(l.jsx)("i",{class:"fab fa-linkedin"})}),Object(l.jsx)("a",{href:"https://stackoverflow.com/users/15778624/tonycloud",children:Object(l.jsx)("i",{class:"fab fa-stack-overflow"})})]})]})})})}),k=c(7),q=c.p+"static/media/qtum.61effa73.png",I=c.p+"static/media/api-quiz.72ff0acb.png",F=c.p+"static/media/books.bbfaa4e4.png",R=c.p+"static/media/music.33472846.png",N=c.p+"static/media/readlips.c2353cc4.png",Q=c.p+"static/media/tracker.927b2d37.png",H=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("section",{children:Object(l.jsxs)(d.a,{xs:1,md:2,className:"g-4",children:[Object(l.jsx)(h.a,{children:Object(l.jsxs)(k.a,{children:[Object(l.jsx)(k.a.Img,{variant:"",src:q}),Object(l.jsxs)(k.a.Body,{children:[Object(l.jsx)(k.a.Title,{children:"Qtum Halvening"}),Object(l.jsxs)(k.a.Text,{children:[Object(l.jsx)("p",{children:"A countdown timer for Qtum Block halving reward."}),Object(l.jsx)("a",{href:"https://github.com/qtumproject/halvingcountdown",className:"hover:bg-blue-400 rounded-full p-2 hover:text-white md:text-2xl lg:text-3xl border-blue-400",id:"qtum",children:"Visit Repo"})]})]})]})}),Object(l.jsx)(h.a,{children:Object(l.jsxs)(k.a,{children:[Object(l.jsx)(k.a.Img,{variant:"top",src:R}),Object(l.jsxs)(k.a.Body,{children:[Object(l.jsx)(k.a.Title,{children:"Music World"}),Object(l.jsxs)(k.a.Text,{children:[Object(l.jsx)("p",{children:"A musical store that sales music products and equipment."}),Object(l.jsx)("a",{href:"https://github.com/rTonyCloud/music-world-ecommerce",className:"hover:bg-blue-400 rounded-full p-2 hover:text-white md:text-2xl lg:text-3xl border-blue-400",id:"qtum",children:"Visit Repo"})]})]})]})}),Object(l.jsx)(h.a,{children:Object(l.jsxs)(k.a,{children:[Object(l.jsx)(k.a.Img,{variant:"top",src:Q}),Object(l.jsxs)(k.a.Body,{children:[Object(l.jsx)(k.a.Title,{children:"Employee tracker"}),Object(l.jsxs)(k.a.Text,{children:[Object(l.jsx)("p",{children:"Employee tracker that stores information based on a company, employee, department and salary."}),Object(l.jsx)("a",{href:"https://github.com/rTonyCloud/Mysql-Employee-Tracker",className:"hover:bg-blue-400 rounded-full p-2 hover:text-white md:text-2xl lg:text-3xl border-blue-400",id:"qtum",children:"Visit Repo"})]})]})]})}),Object(l.jsx)(h.a,{children:Object(l.jsxs)(k.a,{children:[Object(l.jsx)(k.a.Img,{variant:"top",src:F}),Object(l.jsxs)(k.a.Body,{children:[Object(l.jsx)(k.a.Title,{children:"Card title"}),Object(l.jsxs)(k.a.Text,{children:[Object(l.jsx)("p",{children:"A countdown timer for Qtum Block halving reward."}),Object(l.jsx)("a",{href:"https://github.com/rTonyCloud/Mern-Book-Search",className:"hover:bg-blue-400 rounded-full p-2 hover:text-white md:text-2xl lg:text-3xl border-blue-400",id:"qtum",children:"Visit Repo"})]})]})]})}),Object(l.jsx)(h.a,{children:Object(l.jsxs)(k.a,{children:[Object(l.jsx)(k.a.Img,{variant:"top",src:N}),Object(l.jsxs)(k.a.Body,{children:[Object(l.jsx)(k.a.Title,{children:"Card title"}),Object(l.jsxs)(k.a.Text,{children:[Object(l.jsx)("p",{children:"A countdown timer for Qtum Block halving reward."}),Object(l.jsx)("a",{href:"https://github.com/rTonyCloud/Read-My-Lips",className:"hover:bg-blue-400 rounded-full p-2 hover:text-white md:text-2xl lg:text-3xl border-blue-400",id:"qtum",children:"Visit Repo"})]})]})]})}),Object(l.jsx)(h.a,{children:Object(l.jsxs)(k.a,{children:[Object(l.jsx)(k.a.Img,{variant:"top",src:I}),Object(l.jsxs)(k.a.Body,{children:[Object(l.jsx)(k.a.Title,{children:"Code quiz"}),Object(l.jsxs)(k.a.Text,{children:[Object(l.jsx)("p",{children:"A code quiz I created."}),Object(l.jsx)("a",{href:"https://github.com/rTonyCloud/web-quiz",className:"hover:bg-blue-400 rounded-full p-2 hover:text-white md:text-2xl lg:text-3xl border-blue-400",id:"qtum",children:"Visit Repo"})]})]})]})})]})})})},V=c(10);r.a;var C=function(){return Object(l.jsx)(B.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("nav",{children:Object(l.jsx)(w,{})}),Object(l.jsxs)(V.c,{children:[Object(l.jsx)(V.a,{path:"/About",component:u}),Object(l.jsx)(V.a,{path:"/Projects",component:H}),Object(l.jsx)(V.a,{path:"/Contact",component:p}),Object(l.jsx)(V.a,{path:"/React-Portfolio",exact:!0,component:o})]}),Object(l.jsx)("footer",{children:Object(l.jsx)(A,{})})]})})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),i(e),n(e)}))};n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),T()}},[[66,1,2]]]);
//# sourceMappingURL=main.91cd0a5d.chunk.js.map