(this["webpackJsonpstockanalytica-react"]=this["webpackJsonpstockanalytica-react"]||[]).push([[0],{45:function(e,t,n){e.exports=n(59)},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(66),l=n(65),r=n(0),c=n.n(r),i=n(21),o=n.n(i),m=n(27),s=n(37),u=n(3),E=n(44),d=n(61),h=n(62),f=n(63),p=n(18),g=(n(54),function(e){return c.a.createElement(d.a,{mt:{base:4,md:0},mr:6,display:"block"},e.children)}),b=function(e){var t=Object(r.useState)(!1),n=Object(E.a)(t,2),a=n[0],l=n[1];return c.a.createElement(h.a,Object.assign({as:"nav",align:"center",justify:"space-between",wrap:"wrap",padding:"1.5rem",bg:"teal.500",color:"white",background:"radial-gradient(circle, #5c27fb 0%, #7047f7 100%)"},e),c.a.createElement(h.a,{align:"center",mr:10},c.a.createElement(f.a,{as:"h1",size:"lg",letterSpacing:"-.1rem"},"Stock Analytica")),c.a.createElement(p.a,{display:{base:"block",md:"none"},onClick:function(){return l(!a)}},c.a.createElement("svg",{fill:"white",width:"12px",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))),c.a.createElement(p.a,{display:{sm:a?"block":"none",md:"flex"},width:{sm:"full",md:"auto"},alignItems:"center",flexGrow:1},c.a.createElement(g,null,"Docs"),c.a.createElement(g,null,"Examples"),c.a.createElement(g,null,"Blog")))},k=(n(55),function(e){return c.a.createElement("footer",Object.assign({className:"container"},e.rest),e.children)});k.Wrapper=function(e){return c.a.createElement("div",Object.assign({className:"wrapper"},e.rest),e.children)},k.Row=function(e){return c.a.createElement("div",Object.assign({className:"row"},e.rest),e.children)},k.Column=function(e){return c.a.createElement("div",Object.assign({className:"column"},e.rest),e.children)},k.Link=function(e){return c.a.createElement("a",Object.assign({className:"link"},e.rest),e.children)},k.Title=function(e){return c.a.createElement("p",Object.assign({className:"title"},e.rest),e.children)};var v=n(20),w=function(){return c.a.createElement(k,null,c.a.createElement(k.Wrapper,null,c.a.createElement(k.Row,null,c.a.createElement(k.Column,null,c.a.createElement(k.Title,null,"About Us"),c.a.createElement(k.Link,{href:"#"},"Story"),c.a.createElement(k.Link,{href:"#"},"Clients"),c.a.createElement(k.Link,{href:"#"},"Testimonials")),c.a.createElement(k.Column,null,c.a.createElement(k.Title,null,"Services"),c.a.createElement(k.Link,{href:"#"},"Marketing"),c.a.createElement(k.Link,{href:"#"},"Consulting"),c.a.createElement(k.Link,{href:"#"},"Development"),c.a.createElement(k.Link,{href:"#"},"Design")),c.a.createElement(k.Column,null,c.a.createElement(k.Title,null,"Contact Us"),c.a.createElement(k.Link,{href:"#"},"United States"),c.a.createElement(k.Link,{href:"#"},"United Kingdom"),c.a.createElement(k.Link,{href:"#"},"Australia"),c.a.createElement(k.Link,{href:"#"},"Support")),c.a.createElement(k.Column,null,c.a.createElement(k.Title,null,"Social"),c.a.createElement(k.Link,{href:"#"},c.a.createElement(v.a,null),"Facebook"),c.a.createElement(k.Link,{href:"#"},c.a.createElement(v.b,null),"Instagram"),c.a.createElement(k.Link,{href:"#"},c.a.createElement(v.d,null),"Youtube"),c.a.createElement(k.Link,{href:"#"},c.a.createElement(v.c,null),"Twitter")))))},L=function(e){return c.a.createElement(r.Fragment,null,c.a.createElement(b,null),c.a.createElement("div",{className:"content"},e.children),c.a.createElement(w,null))},j=(n(56),function(){var e=Object(m.b)();return c.a.createElement("div",{className:"home"},c.a.createElement("div",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dignissimos."),c.a.createElement("button",{onClick:function(){return e({type:"DEFAULT",payload:"DEFAULT"})}},"Dispatch"))}),O=function(e){return c.a.createElement("div",null,"Testing",console.log(e.match))},y=function(){return c.a.createElement(s.a,null,c.a.createElement(L,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/home",component:j}),c.a.createElement(u.a,{path:"/test",component:O}))))};n(58),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=n(13),T=n(38),C=n(39),S=n(40),D=n.n(S),N=n(19),U={default:null},A=Object(x.combineReducers)({default:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DEFAULT":return Object(N.a)(Object(N.a)({},e),{},{default:t.payload});default:return e}}}),F={},M=[C.a,D.a],W=n(64),z=["360px","768px","1024px","1440px"];z.sm=z[0],z.md=z[1],z.lg=z[2],z.xl=z[3];var B=Object(N.a)(Object(N.a)({},W.a),{},{breakpoints:z});o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m.a,{store:Object(x.createStore)(A,F,Object(T.composeWithDevTools)(x.applyMiddleware.apply(void 0,M)))},c.a.createElement(a.a,{theme:B},c.a.createElement(l.a,null),c.a.createElement(y,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.4fe1495a.chunk.js.map