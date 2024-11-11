"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[6807],{48669:function(e,n,t){t.d(n,{Z:function(){return v}});var a=t(1413),i=t(45987),r=t(16157),l=t(62463),o=t(42669),s=t(80493),c=t(77449),d=t(2135),u=t(46417);function h(e){var n=e.link,t=e.activeLast,i=e.disabled,l=n.name,o=n.href,s=n.icon,h=(0,a.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},i&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,u.jsxs)(u.Fragment,{children:[s&&(0,u.jsx)(r.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),l]});return o?(0,u.jsx)(c.Z,{component:d.rU,to:o,sx:h,children:x}):(0,u.jsxs)(r.Z,{sx:h,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function v(e){var n=e.links,t=e.action,d=e.heading,v=e.moreLink,m=e.activeLast,Z=e.sx,f=(0,i.Z)(e,x),b=n[n.length-1].name;return(0,u.jsxs)(r.Z,{sx:(0,a.Z)({mb:5},Z),children:[(0,u.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(r.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(s.Z,(0,a.Z)((0,a.Z)({separator:(0,u.jsx)(p,{})},f),{},{children:n.map((function(e){return(0,u.jsx)(h,{link:e,activeLast:m,disabled:e.name===b},e.name||"")}))}))]}),t&&(0,u.jsxs)(r.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!v&&(0,u.jsx)(r.Z,{sx:{mt:2},children:v.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function p(){return(0,u.jsx)(r.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},72805:function(e,n,t){t.d(n,{Z:function(){return a.Z}});var a=t(48669)},93109:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var a=t(29439),i=t(47313),r=t(65964),l=t(82403),o=t(16157),s=t(10679),c=t(62463),d=t(49280),u=t(51987),h=t(48175),x=t(72805),v=t(8730),p=t(16769),m=t(46417),Z={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},f=[{value:"one",icon:(0,m.jsx)(v.Z,{icon:"eva:phone-call-fill",width:24}),label:"Item One"},{value:"two",icon:(0,m.jsx)(v.Z,{icon:"eva:heart-fill",width:24}),label:"Item Two"},{value:"three",icon:(0,m.jsx)(v.Z,{icon:"eva:headphones-fill",width:24}),label:"Item Three",disabled:!0},{value:"four",icon:(0,m.jsx)(v.Z,{icon:"eva:headphones-fill",width:24}),label:"Item Four"},{value:"five",icon:(0,m.jsx)(v.Z,{icon:"eva:headphones-fill",width:24}),label:"Item Five",disabled:!0},{value:"six",icon:(0,m.jsx)(v.Z,{icon:"eva:headphones-fill",width:24}),label:"Item Six"},{value:"seven",icon:(0,m.jsx)(v.Z,{icon:"eva:headphones-fill",width:24}),label:"Item Seven"}];function b(){var e=(0,i.useState)("one"),n=(0,a.Z)(e,2),t=n[0],v=n[1],b=(0,i.useState)("one"),j=(0,a.Z)(b,2),g=j[0],y=j[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.ql,{children:(0,m.jsx)("title",{children:" MUI Components: Tabs | INTERNATIONAL JOURNAL INDEXING"})}),(0,m.jsx)(o.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,m.jsx)(s.Z,{children:(0,m.jsx)(x.Z,{heading:"Tabs",links:[{name:"Components",href:h.ko.components},{name:"Tabs"}],moreLink:["https://mui.com/components/tabs"]})})}),(0,m.jsx)(s.Z,{sx:{my:10},children:(0,m.jsxs)(l.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,m.jsx)(p.g,{title:"Text",sx:Z,children:(0,m.jsxs)(c.Z,{spacing:2,sx:{width:1},children:[(0,m.jsx)(d.Z,{value:t,onChange:function(e,n){return v(n)},children:f.slice(0,3).map((function(e){return(0,m.jsx)(u.Z,{value:e.value,label:e.label},e.value)}))}),f.slice(0,3).map((function(e){return e.value===t&&(0,m.jsx)(o.Z,{sx:{p:2,borderRadius:1,bgcolor:"background.neutral"},children:e.label},e.value)}))]})}),(0,m.jsx)(p.g,{title:"Icon",sx:Z,children:(0,m.jsx)(d.Z,{value:t,onChange:function(e,n){return v(n)},children:f.slice(0,3).map((function(e){return(0,m.jsx)(u.Z,{icon:e.icon,value:e.value},e.value)}))})}),(0,m.jsx)(p.g,{title:"Top",sx:Z,children:(0,m.jsx)(d.Z,{value:t,onChange:function(e,n){return v(n)},children:f.slice(0,3).map((function(e){return(0,m.jsx)(u.Z,{iconPosition:"top",icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value)}))})}),(0,m.jsx)(p.g,{title:"Bottom",sx:Z,children:(0,m.jsx)(d.Z,{value:t,onChange:function(e,n){return v(n)},children:f.slice(0,3).map((function(e){return(0,m.jsx)(u.Z,{iconPosition:"bottom",icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value)}))})}),(0,m.jsx)(p.g,{title:"Start",sx:Z,children:(0,m.jsx)(d.Z,{value:t,onChange:function(e,n){return v(n)},children:f.slice(0,3).map((function(e){return(0,m.jsx)(u.Z,{icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value)}))})}),(0,m.jsx)(p.g,{title:"End",sx:Z,children:(0,m.jsx)(d.Z,{value:t,onChange:function(e,n){return v(n)},children:f.slice(0,3).map((function(e){return(0,m.jsx)(u.Z,{iconPosition:"end",icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value)}))})}),(0,m.jsx)(p.g,{title:"Scrollable",sx:Z,children:(0,m.jsx)(o.Z,{sx:{flexGrow:1,width:"100%",maxWidth:320},children:(0,m.jsx)(d.Z,{value:g,onChange:function(e,n){return y(n)},children:f.map((function(e){return(0,m.jsx)(u.Z,{label:e.label,value:e.value},e.value)}))})})})]})})]})}},16769:function(e,n,t){t.d(n,{_:function(){return u},g:function(){return d}});var a=t(1413),i=t(17551),r=t(80654),l=t(29700),o=t(16157),s=t(42669),c=t(46417);function d(e){var n=e.title,t=e.sx,s=e.children;return(0,c.jsxs)(r.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,i.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,c.jsx)(l.Z,{title:n}),(0,c.jsx)(o.Z,{sx:(0,a.Z)({p:5,minHeight:180},t),children:s})]})}function u(e){var n=e.title;return(0,c.jsx)(s.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}},29700:function(e,n,t){t.d(n,{Z:function(){return y}});var a=t(4942),i=t(63366),r=t(87462),l=t(47313),o=t(83061),s=t(21921),c=t(42669),d=t(11236),u=t(64164),h=t(77430),x=t(32298);function v(e){return(0,x.Z)("MuiCardHeader",e)}var p=(0,h.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=t(46417),Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,n){var t;return(0,r.Z)((t={},(0,a.Z)(t,"& .".concat(p.title),n.title),(0,a.Z)(t,"& .".concat(p.subheader),n.subheader),t),n.root)}})({display:"flex",alignItems:"center",padding:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,n){return n.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,n){return n.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,n){return n.content}})({flex:"1 1 auto"}),y=l.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiCardHeader"}),a=t.action,l=t.avatar,u=t.className,h=t.component,x=void 0===h?"div":h,p=t.disableTypography,y=void 0!==p&&p,w=t.subheader,k=t.subheaderTypographyProps,C=t.title,I=t.titleTypographyProps,T=(0,i.Z)(t,Z),M=(0,r.Z)({},t,{component:x,disableTypography:y}),N=function(e){var n=e.classes;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},v,n)}(M),R=C;null==R||R.type===c.Z||y||(R=(0,m.jsx)(c.Z,(0,r.Z)({variant:l?"body2":"h5",className:N.title,component:"span",display:"block"},I,{children:R})));var L=w;return null==L||L.type===c.Z||y||(L=(0,m.jsx)(c.Z,(0,r.Z)({variant:l?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:L}))),(0,m.jsxs)(f,(0,r.Z)({className:(0,o.Z)(N.root,u),as:x,ref:n,ownerState:M},T,{children:[l&&(0,m.jsx)(b,{className:N.avatar,ownerState:M,children:l}),(0,m.jsxs)(g,{className:N.content,ownerState:M,children:[R,L]}),a&&(0,m.jsx)(j,{className:N.action,ownerState:M,children:a})]}))}))},56248:function(e,n,t){t(47313);var a=t(46095),i=t(46417);n.Z=(0,a.Z)((0,i.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},82222:function(e,n,t){t(47313);var a=t(46095),i=t(46417);n.Z=(0,a.Z)((0,i.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")}}]);