"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[8800],{48669:function(e,r,n){n.d(r,{Z:function(){return f}});var t=n(1413),o=n(45987),a=n(16157),i=n(62463),l=n(42669),s=n(80493),c=n(77449),u=n(2135),d=n(46417);function p(e){var r=e.link,n=e.activeLast,o=e.disabled,i=r.name,l=r.href,s=r.icon,p=(0,t.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},o&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,d.jsxs)(d.Fragment,{children:[s&&(0,d.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),i]});return l?(0,d.jsx)(c.Z,{component:u.rU,to:l,sx:p,children:m}):(0,d.jsxs)(a.Z,{sx:p,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function f(e){var r=e.links,n=e.action,u=e.heading,f=e.moreLink,x=e.activeLast,Z=e.sx,v=(0,o.Z)(e,m),g=r[r.length-1].name;return(0,d.jsxs)(a.Z,{sx:(0,t.Z)({mb:5},Z),children:[(0,d.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(a.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:u}),!!r.length&&(0,d.jsx)(s.Z,(0,t.Z)((0,t.Z)({separator:(0,d.jsx)(h,{})},v),{},{children:r.map((function(e){return(0,d.jsx)(p,{link:e,activeLast:x,disabled:e.name===g},e.name||"")}))}))]}),n&&(0,d.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!f&&(0,d.jsx)(a.Z,{sx:{mt:2},children:f.map((function(e){return(0,d.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function h(){return(0,d.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},72805:function(e,r,n){n.d(r,{Z:function(){return t.Z}});var t=n(48669)},41530:function(e,r,n){var t=n(74165),o=n(15861),a=n(29439),i=n(47313);r.Z=function(){var e=(0,i.useState)(null),r=(0,a.Z)(e,2),n=r[0],l=r[1],s=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(n=navigator)&&void 0!==n&&n.clipboard){e.next=3;break}return console.warn("Clipboard not supported"),e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,navigator.clipboard.writeText(r);case 6:return l(r),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(3),console.warn("Copy failed",e.t0),l(null),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(r){return e.apply(this,arguments)}}();return{copiedText:n,copy:s}}},58120:function(e,r,n){n.d(r,{Z:function(){return o}});var t=n(47313);function o(e){var r=e.click,n=e.doubleClick,o=e.timeout,a=void 0===o?250:o,i=(0,t.useRef)();return(0,t.useCallback)((function(e){i&&(clearTimeout(i.current),i.current=null),r&&1===e.detail&&(i.current=setTimeout((function(){r(e)}),a)),e.detail%2===0&&n(e)}),[r,n,a])}},58800:function(e,r,n){n.r(r),n.d(r,{default:function(){return C}});var t=n(29439),o=n(47313),a=n(65964),i=n(16157),l=n(10679),s=n(92484),c=n(62463),u=n(42669),d=n(67881),p=n(59017),m=n(83719),f=n(18104),h=n(41530),x=n(48175),Z=n(58120),v=n(72805),g=n(8730),b=n(41034),j=n(46417);function C(){var e=(0,b.Ds)().enqueueSnackbar,r=(0,h.Z)().copy,n=(0,o.useState)("https://www.npmjs.com/package/"),C=(0,t.Z)(n,2),y=C[0],k=C[1],w="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia\n  Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat\n  dolor lectus quis orci. Cras non dolor. Praesent egestas neque eu enim. Ut varius\n  tincidunt libero. Fusce fermentum odio nec arcu. Etiam rhoncus. Nulla sit amet est.\n  Donec posuere vulputate arcu. Vestibulum ullamcorper mauris at ligula. Praesent ut\n  ligula non mi varius sagittis. Pellentesque posuere. Praesent adipiscing. Sed\n  libero. Duis leo. Nulla porta dolor.",S=function(n){n&&(e("Copied!"),r(n))},N=(0,Z.Z)({doubleClick:function(){return S(w)}});return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a.ql,{children:(0,j.jsx)("title",{children:" Extra Components: Copy To Clipboard | INTERNATIONAL JOURNAL INDEXING"})}),(0,j.jsx)(i.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,j.jsx)(l.Z,{children:(0,j.jsx)(v.Z,{heading:"Copy To Clipboard",links:[{name:"Components",href:x.ko.components},{name:"Copy To Clipboard"}]})})}),(0,j.jsx)(l.Z,{sx:{my:10},children:(0,j.jsx)(s.Z,{sx:{p:5},children:(0,j.jsxs)(i.Z,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},gap:5,children:[(0,j.jsxs)(c.Z,{spacing:2,children:[(0,j.jsx)(u.Z,{variant:"overline",sx:{color:"text.secondary"},children:"on Change"}),(0,j.jsx)(d.Z,{fullWidth:!0,value:y,onChange:function(e){k(e.target.value)},InputProps:{endAdornment:(0,j.jsx)(p.Z,{position:"end",children:(0,j.jsx)(m.Z,{title:"Copy",children:(0,j.jsx)(f.Z,{onClick:function(){return S(y)},children:(0,j.jsx)(g.Z,{icon:"eva:copy-fill",width:24})})})})}})]}),(0,j.jsxs)(c.Z,{spacing:2,children:[(0,j.jsx)(u.Z,{variant:"overline",sx:{color:"text.secondary"},children:"on Double Click"}),(0,j.jsx)(u.Z,{onClick:N,children:w})]})]})})})]})}},80493:function(e,r,n){n.d(r,{Z:function(){return I}});var t=n(93433),o=n(29439),a=n(4942),i=n(87462),l=n(63366),s=n(47313),c=(n(96214),n(83061)),u=n(21921),d=n(64164),p=n(11236),m=n(42669),f=n(17551),h=n(46095),x=n(46417),Z=(0,h.Z)((0,x.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),v=n(56456),g=(0,d.ZP)(v.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,f._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,f._4)(r.palette.grey[600],.12)})})})),b=(0,d.ZP)(Z)({width:24,height:16});var j=function(e){var r=e;return(0,x.jsx)("li",{children:(0,x.jsx)(g,(0,i.Z)({focusRipple:!0},e,{ownerState:r,children:(0,x.jsx)(b,{ownerState:r})}))})},C=n(77430),y=n(32298);function k(e){return(0,y.Z)("MuiBreadcrumbs",e)}var w=(0,C.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],N=(0,d.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,a.Z)({},"& .".concat(w.li),r.li),r.root]}})({}),R=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),M=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function T(e,r,n,t){return e.reduce((function(o,a,i){return i<e.length-1?o=o.concat(a,(0,x.jsx)(M,{"aria-hidden":!0,className:r,ownerState:t,children:n},"separator-".concat(i))):o.push(a),o}),[])}var I=s.forwardRef((function(e,r){var n=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),a=n.children,d=n.className,m=n.component,f=void 0===m?"nav":m,h=n.expandText,Z=void 0===h?"Show path":h,v=n.itemsAfterCollapse,g=void 0===v?1:v,b=n.itemsBeforeCollapse,C=void 0===b?1:b,y=n.maxItems,w=void 0===y?8:y,M=n.separator,I=void 0===M?"/":M,P=(0,l.Z)(n,S),_=s.useState(!1),B=(0,o.Z)(_,2),L=B[0],q=B[1],A=(0,i.Z)({},n,{component:f,expanded:L,expandText:Z,itemsAfterCollapse:g,itemsBeforeCollapse:C,maxItems:w,separator:I}),E=function(e){var r=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,r)}(A),D=s.useRef(null),z=s.Children.toArray(a).filter((function(e){return s.isValidElement(e)})).map((function(e,r){return(0,x.jsx)("li",{className:E.li,children:e},"child-".concat(r))}));return(0,x.jsx)(N,(0,i.Z)({ref:r,component:f,color:"text.secondary",className:(0,c.Z)(E.root,d),ownerState:A},P,{children:(0,x.jsx)(R,{className:E.ol,ref:D,ownerState:A,children:T(L||w&&z.length<=w?z:function(e){return C+g>=e.length?e:[].concat((0,t.Z)(e.slice(0,C)),[(0,x.jsx)(j,{"aria-label":Z,onClick:function(){q(!0);var e=D.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,t.Z)(e.slice(e.length-g,e.length)))}(z),E.separator,I,A)})}))}))},92484:function(e,r,n){n.d(r,{Z:function(){return Z}});var t=n(87462),o=n(63366),a=n(47313),i=n(83061),l=n(21921),s=n(64164),c=n(11236),u=n(80654),d=n(77430),p=n(32298);function m(e){return(0,p.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var f=n(46417),h=["className","raised"],x=(0,s.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),Z=a.forwardRef((function(e,r){var n=(0,c.Z)({props:e,name:"MuiCard"}),a=n.className,s=n.raised,u=void 0!==s&&s,d=(0,o.Z)(n,h),p=(0,t.Z)({},n,{raised:u}),Z=function(e){var r=e.classes;return(0,l.Z)({root:["root"]},m,r)}(p);return(0,f.jsx)(x,(0,t.Z)({className:(0,i.Z)(Z.root,a),elevation:u?8:void 0,ref:r,ownerState:p},d))}))}}]);