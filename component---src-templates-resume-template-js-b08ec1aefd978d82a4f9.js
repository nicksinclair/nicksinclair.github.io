(self.webpackChunkpersonal_portfolio=self.webpackChunkpersonal_portfolio||[]).push([[891],{2399:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(7294),l=a(5444),r=a(1773),c=[{label:"PROJECTS",to:"/projects"},{label:"RESUME",to:"/resume"}];var i=function(){var e=r.globalHistory.location.pathname;return n.createElement("nav",{className:"nav-container"},n.createElement("ul",null,c.map((function(t){return n.createElement("li",{key:t.label,className:"menu-item "+(e.includes(t.to)?"current-menu-item":"")},n.createElement(l.Link,{to:t.to},t.label))}))))},m=function(e){var t=e.siteTitle;return n.createElement("header",null,n.createElement("div",{className:"sticky-container"},n.createElement("h1",{className:"site-title",style:{margin:0}},n.createElement(l.Link,{to:"/"},t)),n.createElement(i,null)))};m.defaultProps={siteTitle:""};var o=m,s=function(e){var t,a=e.children,r=(0,l.useStaticQuery)("3649515864");return n.createElement("div",{className:"site-container"},n.createElement(o,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title.toUpperCase())||"Title"}),n.createElement("main",{className:"content"},a),n.createElement("footer",null,n.createElement("p",null,"Created using React, Gatsby, GraphQL, Sass, and Markdown.")))}},7706:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return r}});var n=a(7294),l=a(2399);function r(e){var t=e.data.markdownRemark,a=t.frontmatter,r=t.html;return n.createElement(l.Z,null,n.createElement("article",{className:"resume-container"},n.createElement("h1",null,a.title.toUpperCase()),n.createElement("h4",null,n.createElement("em",null,"Updated ",a.updated)),n.createElement("a",{href:"mailto: "+a.email,target:"_blank",rel:"noopener noreferrer"},a.email),n.createElement("div",{className:"resume-content",dangerouslySetInnerHTML:{__html:r}})))}}}]);
//# sourceMappingURL=component---src-templates-resume-template-js-b08ec1aefd978d82a4f9.js.map