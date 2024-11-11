"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[6145],{48669:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(1413),a=t(45987),o=t(16157),i=t(62463),l=t(42669),s=t(80493),c=t(77449),d=t(2135),u=t(46417);function p(e){var n=e.link,t=e.activeLast,a=e.disabled,i=n.name,l=n.href,s=n.icon,p=(0,r.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},a&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,u.jsxs)(u.Fragment,{children:[s&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),i]});return l?(0,u.jsx)(c.Z,{component:d.rU,to:l,sx:p,children:h}):(0,u.jsxs)(o.Z,{sx:p,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function m(e){var n=e.links,t=e.action,d=e.heading,m=e.moreLink,f=e.activeLast,Z=e.sx,g=(0,a.Z)(e,h),v=n[n.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,r.Z)({mb:5},Z),children:[(0,u.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(s.Z,(0,r.Z)((0,r.Z)({separator:(0,u.jsx)(x,{})},g),{},{children:n.map((function(e){return(0,u.jsx)(p,{link:e,activeLast:f,disabled:e.name===v},e.name||"")}))}))]}),t&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!m&&(0,u.jsx)(o.Z,{sx:{mt:2},children:m.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},72805:function(e,n,t){t.d(n,{Z:function(){return r.Z}});var r=t(48669)},26145:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(29439),a=t(47313),o=t(65964),i=t(16157),l=t(10679),s=t(605),c=t(35138),d=t(81962),u=t(35672),p=t(8224),h=t(25685),m=t(18104),x=t(48175),f=t(72805),Z=t(8730),g=t(16769),v=t(46417),y=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"],b=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"],j={display:"flex",alignItems:"center",justifyContent:"center"};function k(){var e=(0,a.useState)(1),n=(0,r.Z)(e,2),t=n[0],k=n[1],C=(0,a.useState)(null),M=(0,r.Z)(C,2),S=M[0],w=M[1],R=(0,a.useState)(null),N=(0,r.Z)(R,2),P=N[0],T=N[1],B=(0,a.useState)(null),I=(0,r.Z)(B,2),H=I[0],L=I[1],_=function(){w(null)},A=function(){L(null)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.ql,{children:(0,v.jsx)("title",{children:" MUI Components: Menu | INTERNATIONAL JOURNAL INDEXING"})}),(0,v.jsx)(i.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,v.jsx)(l.Z,{children:(0,v.jsx)(f.Z,{heading:"Menu",links:[{name:"Components",href:x.ko.components},{name:"Menu"}],moreLink:["https://mui.com/components/menus"]})})}),(0,v.jsx)(l.Z,{sx:{my:10},children:(0,v.jsxs)(i.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[(0,v.jsxs)(g.g,{title:"Simple",sx:j,children:[(0,v.jsx)(s.Z,{variant:"outlined",onClick:function(e){w(e.currentTarget)},children:"Open Menu"}),(0,v.jsx)(c.Z,{keepMounted:!0,id:"simple-menu",anchorEl:S,onClose:_,open:Boolean(S),children:["Profile","My account","Logout"].map((function(e){return(0,v.jsx)(d.Z,{onClick:_,children:e},e)}))})]}),(0,v.jsxs)(g.g,{title:"Selected",sx:j,children:[(0,v.jsx)(u.Z,{component:"nav","aria-label":"Device settings",children:(0,v.jsx)(p.Z,{"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:function(e){T(e.currentTarget)},children:(0,v.jsx)(h.Z,{primary:"When device is locked",secondary:y[t]})})}),(0,v.jsx)(c.Z,{keepMounted:!0,id:"lock-menu",anchorEl:P,onClose:_,open:Boolean(P),children:y.map((function(e,n){return(0,v.jsx)(d.Z,{disabled:0===n,selected:n===t,onClick:function(e){return function(e,n){k(n),T(null)}(0,n)},children:e},e)}))})]}),(0,v.jsxs)(g.g,{title:"Max height",sx:j,children:[(0,v.jsx)(m.Z,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){L(e.currentTarget)},children:(0,v.jsx)(Z.Z,{icon:"eva:more-vertical-fill"})}),(0,v.jsx)(c.Z,{keepMounted:!0,id:"long-menu",anchorEl:H,onClose:A,open:Boolean(H),PaperProps:{style:{maxHeight:216,width:"20ch"}},children:b.map((function(e){return(0,v.jsx)(d.Z,{selected:"Pyxis"===e,onClick:A,children:e},e)}))})]})]})})]})}},16769:function(e,n,t){t.d(n,{_:function(){return u},g:function(){return d}});var r=t(1413),a=t(17551),o=t(80654),i=t(29700),l=t(16157),s=t(42669),c=t(46417);function d(e){var n=e.title,t=e.sx,s=e.children;return(0,c.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,a.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,c.jsx)(i.Z,{title:n}),(0,c.jsx)(l.Z,{sx:(0,r.Z)({p:5,minHeight:180},t),children:s})]})}function u(e){var n=e.title;return(0,c.jsx)(s.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}},80493:function(e,n,t){t.d(n,{Z:function(){return T}});var r=t(93433),a=t(29439),o=t(4942),i=t(87462),l=t(63366),s=t(47313),c=(t(96214),t(83061)),d=t(21921),u=t(64164),p=t(11236),h=t(42669),m=t(17551),x=t(46095),f=t(46417),Z=(0,x.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),g=t(56456),v=(0,u.ZP)(g.Z)((function(e){var n=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(n.spacing(1)," * 0.5)"),marginRight:"calc(".concat(n.spacing(1)," * 0.5)")},"light"===n.palette.mode?{backgroundColor:n.palette.grey[100],color:n.palette.grey[700]}:{backgroundColor:n.palette.grey[700],color:n.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===n.palette.mode?{backgroundColor:n.palette.grey[200]}:{backgroundColor:n.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:n.shadows[0]},"light"===n.palette.mode?{backgroundColor:(0,m._4)(n.palette.grey[200],.12)}:{backgroundColor:(0,m._4)(n.palette.grey[600],.12)})})})),y=(0,u.ZP)(Z)({width:24,height:16});var b=function(e){var n=e;return(0,f.jsx)("li",{children:(0,f.jsx)(v,(0,i.Z)({focusRipple:!0},e,{ownerState:n,children:(0,f.jsx)(y,{ownerState:n})}))})},j=t(77430),k=t(32298);function C(e){return(0,k.Z)("MuiBreadcrumbs",e)}var M=(0,j.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,u.ZP)(h.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,n){return[(0,o.Z)({},"& .".concat(M.li),n.li),n.root]}})({}),R=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,n){return n.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),N=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,n){return n.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function P(e,n,t,r){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,(0,f.jsx)(N,{"aria-hidden":!0,className:n,ownerState:r,children:t},"separator-".concat(i))):a.push(o),a}),[])}var T=s.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),o=t.children,u=t.className,h=t.component,m=void 0===h?"nav":h,x=t.expandText,Z=void 0===x?"Show path":x,g=t.itemsAfterCollapse,v=void 0===g?1:g,y=t.itemsBeforeCollapse,j=void 0===y?1:y,k=t.maxItems,M=void 0===k?8:k,N=t.separator,T=void 0===N?"/":N,B=(0,l.Z)(t,S),I=s.useState(!1),H=(0,a.Z)(I,2),L=H[0],_=H[1],A=(0,i.Z)({},t,{component:m,expanded:L,expandText:Z,itemsAfterCollapse:v,itemsBeforeCollapse:j,maxItems:M,separator:T}),E=function(e){var n=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},C,n)}(A),O=s.useRef(null),U=s.Children.toArray(o).filter((function(e){return s.isValidElement(e)})).map((function(e,n){return(0,f.jsx)("li",{className:E.li,children:e},"child-".concat(n))}));return(0,f.jsx)(w,(0,i.Z)({ref:n,component:m,color:"text.secondary",className:(0,c.Z)(E.root,u),ownerState:A},B,{children:(0,f.jsx)(R,{className:E.ol,ref:O,ownerState:A,children:P(L||M&&U.length<=M?U:function(e){return j+v>=e.length?e:[].concat((0,r.Z)(e.slice(0,j)),[(0,f.jsx)(b,{"aria-label":Z,onClick:function(){_(!0);var e=O.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-v,e.length)))}(U),E.separator,T,A)})}))}))},29700:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(4942),a=t(63366),o=t(87462),i=t(47313),l=t(83061),s=t(21921),c=t(42669),d=t(11236),u=t(64164),p=t(77430),h=t(32298);function m(e){return(0,h.Z)("MuiCardHeader",e)}var x=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),f=t(46417),Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,n){var t;return(0,o.Z)((t={},(0,r.Z)(t,"& .".concat(x.title),n.title),(0,r.Z)(t,"& .".concat(x.subheader),n.subheader),t),n.root)}})({display:"flex",alignItems:"center",padding:16}),v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,n){return n.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,n){return n.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,n){return n.content}})({flex:"1 1 auto"}),j=i.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiCardHeader"}),r=t.action,i=t.avatar,u=t.className,p=t.component,h=void 0===p?"div":p,x=t.disableTypography,j=void 0!==x&&x,k=t.subheader,C=t.subheaderTypographyProps,M=t.title,S=t.titleTypographyProps,w=(0,a.Z)(t,Z),R=(0,o.Z)({},t,{component:h,disableTypography:j}),N=function(e){var n=e.classes;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},m,n)}(R),P=M;null==P||P.type===c.Z||j||(P=(0,f.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"h5",className:N.title,component:"span",display:"block"},S,{children:P})));var T=k;return null==T||T.type===c.Z||j||(T=(0,f.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:T}))),(0,f.jsxs)(g,(0,o.Z)({className:(0,l.Z)(N.root,u),as:h,ref:n,ownerState:R},w,{children:[i&&(0,f.jsx)(v,{className:N.avatar,ownerState:R,children:i}),(0,f.jsxs)(b,{className:N.content,ownerState:R,children:[P,T]}),r&&(0,f.jsx)(y,{className:N.action,ownerState:R,children:r})]}))}))}}]);