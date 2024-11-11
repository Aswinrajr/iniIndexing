"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[8970],{48669:function(e,r,t){t.d(r,{Z:function(){return f}});var o=t(1413),n=t(45987),a=t(16157),i=t(62463),l=t(42669),s=t(80493),c=t(77449),d=t(2135),u=t(46417);function m(e){var r=e.link,t=e.activeLast,n=e.disabled,i=r.name,l=r.href,s=r.icon,m=(0,o.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},n&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),p=(0,u.jsxs)(u.Fragment,{children:[s&&(0,u.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),i]});return l?(0,u.jsx)(c.Z,{component:d.rU,to:l,sx:m,children:p}):(0,u.jsxs)(a.Z,{sx:m,children:[" ",p," "]})}var p=["links","action","heading","moreLink","activeLast","sx"];function f(e){var r=e.links,t=e.action,d=e.heading,f=e.moreLink,v=e.activeLast,Z=e.sx,x=(0,n.Z)(e,p),g=r[r.length-1].name;return(0,u.jsxs)(a.Z,{sx:(0,o.Z)({mb:5},Z),children:[(0,u.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(a.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!r.length&&(0,u.jsx)(s.Z,(0,o.Z)((0,o.Z)({separator:(0,u.jsx)(h,{})},x),{},{children:r.map((function(e){return(0,u.jsx)(m,{link:e,activeLast:v,disabled:e.name===g},e.name||"")}))}))]}),t&&(0,u.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!f&&(0,u.jsx)(a.Z,{sx:{mt:2},children:f.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function h(){return(0,u.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},72805:function(e,r,t){t.d(r,{Z:function(){return o.Z}});var o=t(48669)},8970:function(e,r,t){t.r(r),t.d(r,{default:function(){return j}});var o=t(29439),n=t(47313),a=t(65964),i=t(16157),l=t(10679),s=t(605),c=t(44906),d=t(42669),u=t(10383),m=t(87668),p=t(7481),f=t(64558),h=t(32670),v=t(48175),Z=t(72805),x=t(22608),g=t(16769),b=t(46417),y={display:"flex",alignItems:"center",justifyContent:"center"};function j(){var e=(0,n.useState)(null),r=(0,o.Z)(e,2),t=r[0],j=r[1],C=(0,n.useState)(null),S=(0,o.Z)(C,2),w=S[0],k=S[1],M=(0,n.useState)(null),N=(0,o.Z)(M,2),R=N[0],P=N[1],B=(0,n.useState)("top-left"),L=(0,o.Z)(B,2),F=L[0],T=L[1],E=function(){k(null)};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a.ql,{children:(0,b.jsx)("title",{children:" MUI Components: Popover | INTERNATIONAL JOURNAL INDEXING"})}),(0,b.jsx)(i.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,b.jsx)(l.Z,{children:(0,b.jsx)(Z.Z,{heading:"Popover",links:[{name:"Components",href:v.ko.components},{name:"Popover"}],moreLink:["https://mui.com/components/popover"]})})}),(0,b.jsxs)(l.Z,{sx:{my:10},children:[(0,b.jsxs)(i.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{mb:3},children:[(0,b.jsxs)(g.g,{title:"Click",sx:y,children:[(0,b.jsx)(s.Z,{variant:"contained",onClick:function(e){j(e.currentTarget)},children:"Open Popover"}),(0,b.jsx)(c.ZP,{open:Boolean(t),anchorEl:t,onClose:function(){j(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:(0,b.jsxs)(i.Z,{sx:{p:2,maxWidth:280},children:[(0,b.jsx)(d.Z,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),(0,b.jsx)(d.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]}),(0,b.jsxs)(g.g,{title:"Hover",sx:y,children:[(0,b.jsx)(d.Z,{"aria-owns":w?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(e){k(e.currentTarget)},onMouseLeave:E,children:"Hover with a Popover."}),(0,b.jsx)(c.ZP,{id:"mouse-over-popover",open:Boolean(w),anchorEl:w,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:E,disableRestoreFocus:!0,sx:{pointerEvents:"none"},children:(0,b.jsxs)(i.Z,{sx:{p:2,maxWidth:280},children:[(0,b.jsx)(d.Z,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),(0,b.jsx)(d.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]}),(0,b.jsxs)(g.g,{title:"Customized",sx:y,children:[(0,b.jsx)(s.Z,{variant:"contained",onClick:function(e){P(e.currentTarget)},sx:{mr:5},children:"Open Customized"}),(0,b.jsxs)(u.Z,{children:[(0,b.jsx)(m.Z,{sx:{typography:"body2"},children:"Arrow"}),(0,b.jsx)(p.Z,{value:F,onChange:function(e){return T(e.target.value)},children:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom","right-top","right-center","right-bottom"].map((function(e){return(0,b.jsx)(f.Z,{value:e,control:(0,b.jsx)(h.Z,{}),label:e},e)}))})]}),(0,b.jsx)(x.Z,{open:R,onClose:function(){P(null)},arrow:F,children:(0,b.jsxs)(i.Z,{sx:{p:2,maxWidth:280},children:[(0,b.jsx)(d.Z,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),(0,b.jsx)(d.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]})]})}},16769:function(e,r,t){t.d(r,{_:function(){return u},g:function(){return d}});var o=t(1413),n=t(17551),a=t(80654),i=t(29700),l=t(16157),s=t(42669),c=t(46417);function d(e){var r=e.title,t=e.sx,s=e.children;return(0,c.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,n.Fq)(e.palette.grey[500],.04)}},children:[r&&(0,c.jsx)(i.Z,{title:r}),(0,c.jsx)(l.Z,{sx:(0,o.Z)({p:5,minHeight:180},t),children:s})]})}function u(e){var r=e.title;return(0,c.jsx)(s.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:r})}},80493:function(e,r,t){t.d(r,{Z:function(){return B}});var o=t(93433),n=t(29439),a=t(4942),i=t(87462),l=t(63366),s=t(47313),c=(t(96214),t(83061)),d=t(21921),u=t(64164),m=t(11236),p=t(42669),f=t(17551),h=t(46095),v=t(46417),Z=(0,h.Z)((0,v.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),x=t(56456),g=(0,u.ZP)(x.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,f._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,f._4)(r.palette.grey[600],.12)})})})),b=(0,u.ZP)(Z)({width:24,height:16});var y=function(e){var r=e;return(0,v.jsx)("li",{children:(0,v.jsx)(g,(0,i.Z)({focusRipple:!0},e,{ownerState:r,children:(0,v.jsx)(b,{ownerState:r})}))})},j=t(77430),C=t(32298);function S(e){return(0,C.Z)("MuiBreadcrumbs",e)}var w=(0,j.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),k=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],M=(0,u.ZP)(p.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,a.Z)({},"& .".concat(w.li),r.li),r.root]}})({}),N=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),R=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function P(e,r,t,o){return e.reduce((function(n,a,i){return i<e.length-1?n=n.concat(a,(0,v.jsx)(R,{"aria-hidden":!0,className:r,ownerState:o,children:t},"separator-".concat(i))):n.push(a),n}),[])}var B=s.forwardRef((function(e,r){var t=(0,m.Z)({props:e,name:"MuiBreadcrumbs"}),a=t.children,u=t.className,p=t.component,f=void 0===p?"nav":p,h=t.expandText,Z=void 0===h?"Show path":h,x=t.itemsAfterCollapse,g=void 0===x?1:x,b=t.itemsBeforeCollapse,j=void 0===b?1:b,C=t.maxItems,w=void 0===C?8:C,R=t.separator,B=void 0===R?"/":R,L=(0,l.Z)(t,k),F=s.useState(!1),T=(0,n.Z)(F,2),E=T[0],W=T[1],q=(0,i.Z)({},t,{component:f,expanded:E,expandText:Z,itemsAfterCollapse:g,itemsBeforeCollapse:j,maxItems:w,separator:B}),I=function(e){var r=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},S,r)}(q),z=s.useRef(null),A=s.Children.toArray(a).filter((function(e){return s.isValidElement(e)})).map((function(e,r){return(0,v.jsx)("li",{className:I.li,children:e},"child-".concat(r))}));return(0,v.jsx)(M,(0,i.Z)({ref:r,component:f,color:"text.secondary",className:(0,c.Z)(I.root,u),ownerState:q},L,{children:(0,v.jsx)(N,{className:I.ol,ref:z,ownerState:q,children:P(E||w&&A.length<=w?A:function(e){return j+g>=e.length?e:[].concat((0,o.Z)(e.slice(0,j)),[(0,v.jsx)(y,{"aria-label":Z,onClick:function(){W(!0);var e=z.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,o.Z)(e.slice(e.length-g,e.length)))}(A),I.separator,B,q)})}))}))},29700:function(e,r,t){t.d(r,{Z:function(){return j}});var o=t(4942),n=t(63366),a=t(87462),i=t(47313),l=t(83061),s=t(21921),c=t(42669),d=t(11236),u=t(64164),m=t(77430),p=t(32298);function f(e){return(0,p.Z)("MuiCardHeader",e)}var h=(0,m.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),v=t(46417),Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,r){var t;return(0,a.Z)((t={},(0,o.Z)(t,"& .".concat(h.title),r.title),(0,o.Z)(t,"& .".concat(h.subheader),r.subheader),t),r.root)}})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,r){return r.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,r){return r.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,r){return r.content}})({flex:"1 1 auto"}),j=i.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiCardHeader"}),o=t.action,i=t.avatar,u=t.className,m=t.component,p=void 0===m?"div":m,h=t.disableTypography,j=void 0!==h&&h,C=t.subheader,S=t.subheaderTypographyProps,w=t.title,k=t.titleTypographyProps,M=(0,n.Z)(t,Z),N=(0,a.Z)({},t,{component:p,disableTypography:j}),R=function(e){var r=e.classes;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},f,r)}(N),P=w;null==P||P.type===c.Z||j||(P=(0,v.jsx)(c.Z,(0,a.Z)({variant:i?"body2":"h5",className:R.title,component:"span",display:"block"},k,{children:P})));var B=C;return null==B||B.type===c.Z||j||(B=(0,v.jsx)(c.Z,(0,a.Z)({variant:i?"body2":"body1",className:R.subheader,color:"text.secondary",component:"span",display:"block"},S,{children:B}))),(0,v.jsxs)(x,(0,a.Z)({className:(0,l.Z)(R.root,u),as:p,ref:r,ownerState:N},M,{children:[i&&(0,v.jsx)(g,{className:R.avatar,ownerState:N,children:i}),(0,v.jsxs)(y,{className:R.content,ownerState:N,children:[P,B]}),o&&(0,v.jsx)(b,{className:R.action,ownerState:N,children:o})]}))}))},10383:function(e,r,t){t.d(r,{Z:function(){return y}});var o=t(29439),n=t(63366),a=t(87462),i=t(47313),l=t(83061),s=t(21921),c=t(11236),d=t(64164),u=t(97868),m=t(28170),p=t(41340),f=t(10829),h=t(77430),v=t(32298);function Z(e){return(0,v.Z)("MuiFormControl",e)}(0,h.Z)("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);var x=t(46417),g=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],b=(0,d.ZP)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return(0,a.Z)({},r.root,r["margin".concat((0,m.Z)(t.margin))],t.fullWidth&&r.fullWidth)}})((function(e){var r=e.ownerState;return(0,a.Z)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===r.margin&&{marginTop:16,marginBottom:8},"dense"===r.margin&&{marginTop:8,marginBottom:4},r.fullWidth&&{width:"100%"})})),y=i.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiFormControl"}),d=t.children,h=t.className,v=t.color,y=void 0===v?"primary":v,j=t.component,C=void 0===j?"div":j,S=t.disabled,w=void 0!==S&&S,k=t.error,M=void 0!==k&&k,N=t.focused,R=t.fullWidth,P=void 0!==R&&R,B=t.hiddenLabel,L=void 0!==B&&B,F=t.margin,T=void 0===F?"none":F,E=t.required,W=void 0!==E&&E,q=t.size,I=void 0===q?"medium":q,z=t.variant,A=void 0===z?"outlined":z,H=(0,n.Z)(t,g),_=(0,a.Z)({},t,{color:y,component:C,disabled:w,error:M,fullWidth:P,hiddenLabel:L,margin:T,required:W,size:I,variant:A}),O=function(e){var r=e.classes,t=e.margin,o=e.fullWidth,n={root:["root","none"!==t&&"margin".concat((0,m.Z)(t)),o&&"fullWidth"]};return(0,s.Z)(n,Z,r)}(_),D=i.useState((function(){var e=!1;return d&&i.Children.forEach(d,(function(r){if((0,p.Z)(r,["Input","Select"])){var t=(0,p.Z)(r,["Select"])?r.props.input:r;t&&(0,u.B7)(t.props)&&(e=!0)}})),e})),U=(0,o.Z)(D,2),G=U[0],V=U[1],J=i.useState((function(){var e=!1;return d&&i.Children.forEach(d,(function(r){(0,p.Z)(r,["Input","Select"])&&(0,u.vd)(r.props,!0)&&(e=!0)})),e})),X=(0,o.Z)(J,2),K=X[0],Q=X[1],Y=i.useState(!1),$=(0,o.Z)(Y,2),ee=$[0],re=$[1];w&&ee&&re(!1);var te,oe=void 0===N||w?ee:N,ne=i.useMemo((function(){return{adornedStart:G,setAdornedStart:V,color:y,disabled:w,error:M,filled:K,focused:oe,fullWidth:P,hiddenLabel:L,size:I,onBlur:function(){re(!1)},onEmpty:function(){Q(!1)},onFilled:function(){Q(!0)},onFocus:function(){re(!0)},registerEffect:te,required:W,variant:A}}),[G,y,w,M,K,oe,P,L,te,W,I,A]);return(0,x.jsx)(f.Z.Provider,{value:ne,children:(0,x.jsx)(b,(0,a.Z)({as:C,ownerState:_,className:(0,l.Z)(O.root,h),ref:r},H,{children:d}))})}))},87668:function(e,r,t){var o=t(4942),n=t(63366),a=t(87462),i=t(47313),l=t(83061),s=t(21921),c=t(67223),d=t(11736),u=t(28170),m=t(11236),p=t(64164),f=t(7717),h=t(46417),v=["children","className","color","component","disabled","error","filled","focused","required"],Z=(0,p.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return(0,a.Z)({},r.root,"secondary"===t.color&&r.colorSecondary,t.filled&&r.filled)}})((function(e){var r,t=e.theme,n=e.ownerState;return(0,a.Z)({color:(t.vars||t).palette.text.secondary},t.typography.body1,(r={lineHeight:"1.4375em",padding:0,position:"relative"},(0,o.Z)(r,"&.".concat(f.Z.focused),{color:(t.vars||t).palette[n.color].main}),(0,o.Z)(r,"&.".concat(f.Z.disabled),{color:(t.vars||t).palette.text.disabled}),(0,o.Z)(r,"&.".concat(f.Z.error),{color:(t.vars||t).palette.error.main}),r))})),x=(0,p.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:function(e,r){return r.asterisk}})((function(e){var r=e.theme;return(0,o.Z)({},"&.".concat(f.Z.error),{color:(r.vars||r).palette.error.main})})),g=i.forwardRef((function(e,r){var t=(0,m.Z)({props:e,name:"MuiFormLabel"}),o=t.children,i=t.className,p=t.component,g=void 0===p?"label":p,b=(0,n.Z)(t,v),y=(0,d.Z)(),j=(0,c.Z)({props:t,muiFormControl:y,states:["color","required","focused","disabled","error","filled"]}),C=(0,a.Z)({},t,{color:j.color||"primary",component:g,disabled:j.disabled,error:j.error,filled:j.filled,focused:j.focused,required:j.required}),S=function(e){var r=e.classes,t=e.color,o=e.focused,n=e.disabled,a=e.error,i=e.filled,l=e.required,c={root:["root","color".concat((0,u.Z)(t)),n&&"disabled",a&&"error",i&&"filled",o&&"focused",l&&"required"],asterisk:["asterisk",a&&"error"]};return(0,s.Z)(c,f.M,r)}(C);return(0,h.jsxs)(Z,(0,a.Z)({as:g,ownerState:C,className:(0,l.Z)(S.root,i),ref:r},b,{children:[o,j.required&&(0,h.jsxs)(x,{ownerState:C,"aria-hidden":!0,className:S.asterisk,children:["\u2009","*"]})]}))}));r.Z=g},7717:function(e,r,t){t.d(r,{M:function(){return a}});var o=t(77430),n=t(32298);function a(e){return(0,n.Z)("MuiFormLabel",e)}var i=(0,o.Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]);r.Z=i},41340:function(e,r,t){t.d(r,{Z:function(){return n}});var o=t(47313);var n=function(e,r){return o.isValidElement(e)&&-1!==r.indexOf(e.type.muiName)}}}]);