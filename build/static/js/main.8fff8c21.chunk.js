(this["webpackJsonpblog-frontend"]=this["webpackJsonpblog-frontend"]||[]).push([[0],{81:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(25),r=n.n(c),i=(n(81),n(28)),d=n(30),l=n.n(d),o=n(39),h=n(13),j=n(136),b=n(138),u=n(135),O=n(2),v=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cloudflare-general-assignment.dhara30a.workers.dev/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(O.jsxs)("div",{className:"allPost",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Posts"}),Object(O.jsx)(i.a,{to:"/newpost",className:"btn btn-primary",children:"Add new post"})]}),n.map((function(e){return Object(O.jsx)("div",{className:"post",children:Object(O.jsx)(j.a,{variant:"outlined",sx:{minWidth:275},children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(u.a,{variant:"h5",component:"div",children:e.title}),Object(O.jsxs)(u.a,{sx:{mb:1.5},color:"text.secondary",children:["by ",e.username]}),Object(O.jsx)(u.a,{variant:"body2",children:e.content})]})})})}))]})},x=n(6),m=n(42),f=n(43),p=n(38),g=n(67),y=n(66),w=n(132),C=n(130),S=n(133),k=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(f.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)},e.next=4,fetch("https://cloudflare-general-assignment.dhara30a.workers.dev/posts",n);case 4:200===e.sent.status?(this.setState({}),alert("New Post Added Successfully")):alert("An Error occured!!! Please try again.");case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{children:Object(O.jsx)(i.a,{to:"/",children:"Go Back"})}),Object(O.jsxs)("div",{className:"newPost",children:[Object(O.jsx)("h2",{children:"Add new Post"}),Object(O.jsxs)("form",{id:"add-post",onSubmit:this.onSubmit,children:[Object(O.jsx)("div",{children:Object(O.jsx)(w.a,{name:"title",id:"standard-basic",label:"Title",variant:"standard",value:this.state.value,onChange:this.handleChange})}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{children:Object(O.jsx)(w.a,{name:"username",id:"standard-basic",label:"Username",variant:"standard",value:this.state.value,onChange:this.handleChange})}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Content:"}),Object(O.jsx)("br",{}),Object(O.jsx)(C.a,{name:"content",value:this.state.value,onChange:this.handleChange,"aria-label":"minimum height",minRows:10,placeholder:"Enter post body",style:{width:400}})]}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{children:Object(O.jsx)(S.a,{variant:"contained",onClick:this.handleSubmit,children:"Submit"})})]})]})]})}}]),n}(a.Component),P=k;n(93);var N=function(){return Object(O.jsxs)(i.b,{children:[Object(O.jsx)(v,{path:"/"}),Object(O.jsx)(P,{path:"/newpost"})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,139)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root")),T()}},[[94,1,2]]]);
//# sourceMappingURL=main.8fff8c21.chunk.js.map