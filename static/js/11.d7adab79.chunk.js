(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[11],{173:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a(5),c=a(21),i=a(0),r=function(t){var e=t.label,a=t.link,n=t.value,s=t.format;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{width:"70%",children:e}),Object(i.jsx)("td",{children:a?Object(i.jsx)("a",{href:a,children:s(n)}):s(n)})]})};r.defaultProps={format:function(t){return t},link:null,value:null};var l=r,u=function(t){var e=t.data;return Object(i.jsx)("table",{children:Object(i.jsx)("tbody",{children:e.map((function(t){return Object(i.jsx)(l,{format:t.format,label:t.label,link:t.link,value:t.value},t.label)}))})})},j=[{key:"location",label:"Current city",value:"Hyderabad, India"}],b=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"Some stats about me"}),Object(i.jsx)(u,{data:j})]})},o=a(159),d=a.n(o),h=a(56),O=a(161),f=a(23),x=a(162),m=a.n(x),p=[{label:"Last updated at",key:"pushed_at",link:"https://github.com/ganeshkaila/ganeshkaila.github.io/commits",format:function(t){return m()(t).format("MMMM DD, YYYY")}}],k=function(){var t=Object(n.useState)(p),e=Object(f.a)(t,2),a=e[0],s=e[1],c=Object(n.useCallback)(Object(O.a)(d.a.mark((function t(){var e,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/repos/ganeshkaila/ganeshkaila.github.io");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,s(p.map((function(t){return Object(h.a)(Object(h.a)({},t),{},{value:Object.keys(a).includes(t.key)?a[t.key]:t.value})})));case 7:case"end":return t.stop()}}),t)}))),[]);return Object(n.useEffect)((function(){c()}),[c]),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Some stats about this site"}),Object(i.jsx)(u,{data:a})]})};e.default=function(){return Object(i.jsx)(c.a,{title:"Stats",description:"Some statistics about Ganesh Kaila and ganeshkaila.com",children:Object(i.jsxs)("article",{className:"post",id:"stats",children:[Object(i.jsx)("header",{children:Object(i.jsx)("div",{className:"title",children:Object(i.jsx)("h2",{"data-testid":"heading",children:Object(i.jsx)(s.b,{to:"/stats",children:"Stats"})})})}),Object(i.jsx)(b,{}),Object(i.jsx)(k,{})]})})}}}]);
//# sourceMappingURL=11.d7adab79.chunk.js.map