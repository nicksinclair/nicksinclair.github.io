(this["webpackJsonpnicksinclair.github.io"]=this["webpackJsonpnicksinclair.github.io"]||[]).push([[0],{121:function(e,t,c){},122:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),i=c.n(s),j=c(39),r=c.n(j),a=(c(48),c(8)),l=c(3),o=function(){return Object(n.jsxs)("div",{className:"navbar-container",children:[Object(n.jsx)("nav",{className:"navbar",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(a.c,{to:"/projects",children:"Projects"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.c,{to:"/about",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.c,{to:"/resume",children:"Resume"})})]})}),Object(n.jsx)(a.c,{exact:!0,to:"/",children:Object(n.jsx)("h2",{children:"NICK SINCLAIR"})})]})},b=function(){return Object(n.jsxs)("main",{className:"content",children:[Object(n.jsx)("h2",{children:"Hello!"}),Object(n.jsx)("p",{children:"I am Nick Sinclair"}),Object(n.jsx)("p",{children:"Welcome to my personal portoflio site"})]})},d=c(15),h=c(41),u=c.n(h)()({projectId:"q87olzgk",dataset:"production",useCdn:!0}),O=function(e){var t=e.link,c=e.image,s=e.title,i=e.category;return Object(n.jsx)("div",{className:"project-thumbnail",children:Object(n.jsxs)(a.b,{to:t,children:[Object(n.jsx)("div",{className:"project-image",children:Object(n.jsx)("img",{src:c,alt:"Project"})}),Object(n.jsxs)("div",{className:"text-container",children:[Object(n.jsx)("h4",{children:s}),Object(n.jsx)("p",{children:i})]})]},s)})},x=function(){var e=Object(s.useState)(null),t=Object(d.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){u.fetch('*[_type == "post"]{\n        title,\n        slug,\n        mainImage{\n          asset->{\n            _id,\n            url\n          }\n        }\n      }').then((function(e){return i(e)})).catch(console.error)}),[]),Object(n.jsxs)("main",{className:"content",children:[Object(n.jsx)("h2",{children:"PROJECTS"}),Object(n.jsx)("div",{className:"project-thumbnails",children:c&&c.map((function(e){return Object(n.jsx)(O,{link:"/projects/".concat(e.slug.current),image:e.mainImage.asset.url,title:e.title,category:"Web App"})}))})]})},m=c(42),p=c.n(m),g=c(20),f=c.n(g)()(u),v=function(){var e,t=Object(s.useState)(null),c=Object(d.a)(t,2),i=c[0],j=c[1],r=Object(l.f)().slug;return Object(s.useEffect)((function(){u.fetch('*[slug.current == $slug]{\n          title,\n          slug,\n          mainImage{\n            asset->{\n              _id,\n              url\n             }\n           },\n          body,\n          "name": author->name,\n        }',{slug:r}).then((function(e){j(e[0])})).catch(console.error)}),[r]),i?Object(n.jsxs)("main",{className:"content",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:i.title}),Object(n.jsx)("div",{children:Object(n.jsx)("h4",{children:i.name})})]}),Object(n.jsx)("img",{src:(e=i.mainImage,f.image(e)).width(200).url(),alt:""}),Object(n.jsx)("div",{children:Object(n.jsx)(p.a,{blocks:i.body,projectId:u.projectId,dataset:u.dataset})})]}):Object(n.jsx)("div",{children:"Loading..."})},N=function(){return Object(n.jsxs)("main",{className:"content",children:[Object(n.jsx)("h2",{children:"Hello!"}),Object(n.jsx)("p",{children:"I am Nick Sinclair"}),Object(n.jsx)("img",{src:"../images/headshot.png",alt:"Nick Sinclair Headshot"})]})},I=function(){return Object(n.jsx)("main",{className:"content",children:Object(n.jsx)("h2",{children:"RESUME"})})},k=function(){return Object(n.jsx)("div",{className:"footer-container",children:Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("h2",{children:"In progress!"})})})},S=(c(121),function(){return Object(n.jsx)(a.a,{basename:"/",children:Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(o,{}),Object(n.jsx)("div",{className:"content-container",children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/",exact:!0,component:b}),Object(n.jsx)(l.a,{path:"/projects",exact:!0,component:x}),Object(n.jsx)(l.a,{path:"/projects/:slug",component:v}),Object(n.jsx)(l.a,{path:"/about",component:N}),Object(n.jsx)(l.a,{path:"/resume",component:I}),Object(n.jsx)(l.a,{path:"/",render:function(){return Object(n.jsx)("div",{children:"404"})}})]})}),Object(n.jsx)(k,{})]})})}),y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,123)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,j=t.getTTFB;c(e),n(e),s(e),i(e),j(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),y()},48:function(e,t,c){}},[[122,1,2]]]);
//# sourceMappingURL=main.c25faabd.chunk.js.map