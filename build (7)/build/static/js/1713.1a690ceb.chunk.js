"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[1713],{48669:function(e,r,n){n.d(r,{Z:function(){return f}});var t=n(1413),i=n(45987),a=n(16157),o=n(62463),s=n(42669),c=n(80493),l=n(77449),d=n(2135),u=n(46417);function v(e){var r=e.link,n=e.activeLast,i=e.disabled,o=r.name,s=r.href,c=r.icon,v=(0,t.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},i&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,u.jsxs)(u.Fragment,{children:[c&&(0,u.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),o]});return s?(0,u.jsx)(l.Z,{component:d.rU,to:s,sx:v,children:x}):(0,u.jsxs)(a.Z,{sx:v,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function f(e){var r=e.links,n=e.action,d=e.heading,f=e.moreLink,m=e.activeLast,p=e.sx,Z=(0,i.Z)(e,x),j=r[r.length-1].name;return(0,u.jsxs)(a.Z,{sx:(0,t.Z)({mb:5},p),children:[(0,u.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(a.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!r.length&&(0,u.jsx)(c.Z,(0,t.Z)((0,t.Z)({separator:(0,u.jsx)(h,{})},Z),{},{children:r.map((function(e){return(0,u.jsx)(v,{link:e,activeLast:m,disabled:e.name===j},e.name||"")}))}))]}),n&&(0,u.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!f&&(0,u.jsx)(a.Z,{sx:{mt:2},children:f.map((function(e){return(0,u.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function h(){return(0,u.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},72805:function(e,r,n){n.d(r,{Z:function(){return t.Z}});var t=n(48669)},71713:function(e,r,n){n.r(r),n.d(r,{default:function(){return k}});var t=n(29439),i=n(47313),a=n(65964),o=n(16157),s=n(10679),c=n(62463),l=n(48175),d=n(72805),u=n(16769),v=n(80654),x=n(34207),f=n(82403),h=n(46417),m={minHeight:160,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center","& > *":{m:1}},p=["inherit","primary","secondary","info","success","warning","error"];function Z(e){var r=e.progress;return(0,h.jsxs)(f.ZP,{columns:{xs:1,md:3},spacing:3,children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(u._,{title:"Circular Indeterminate"}),(0,h.jsx)(v.Z,{variant:"outlined",sx:m,children:p.map((function(e){return(0,h.jsx)(x.Z,{color:e},e)}))})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(u._,{title:"Circular determinate"}),(0,h.jsxs)(v.Z,{variant:"outlined",sx:m,children:[(0,h.jsx)(x.Z,{color:"info"}),(0,h.jsx)(x.Z,{color:"info",variant:"determinate",value:25}),(0,h.jsx)(x.Z,{color:"info",variant:"determinate",value:50}),(0,h.jsx)(x.Z,{color:"info",variant:"determinate",value:75}),(0,h.jsx)(x.Z,{color:"info",variant:"determinate",value:100}),(0,h.jsx)(x.Z,{color:"info",variant:"determinate",value:r})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(u._,{title:"Circular Size"}),(0,h.jsxs)(v.Z,{variant:"outlined",sx:m,children:[(0,h.jsx)(x.Z,{size:48,color:"info"}),(0,h.jsx)(x.Z,{color:"info"}),(0,h.jsx)(x.Z,{size:32,color:"info"}),(0,h.jsx)(x.Z,{size:24,color:"info"})]})]})]})}var j=n(28566),g=["inherit","primary","secondary","info","success","warning","error"],y={p:2,minHeight:160,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center","& > *":{m:1}};function b(e){var r=e.progress,n=e.buffer;return(0,h.jsxs)(f.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(u._,{title:"Linears Indeterminate"}),(0,h.jsx)(v.Z,{variant:"outlined",sx:y,children:g.map((function(e){return(0,h.jsx)(j.Z,{color:e,sx:{mb:2,width:1}},e)}))})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(u._,{title:"Linears Determinate"}),(0,h.jsx)(v.Z,{variant:"outlined",sx:y,children:g.map((function(e){return(0,h.jsx)(j.Z,{color:e,value:r,variant:"determinate",sx:{mb:2,width:1}},e)}))})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(u._,{title:"Linears Buffer"}),(0,h.jsx)(v.Z,{variant:"outlined",sx:y,children:g.map((function(e){return(0,h.jsx)(j.Z,{color:e,variant:"buffer",value:r,valueBuffer:n,sx:{mb:2,width:1}},e)}))})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(u._,{title:"Linears Query"}),(0,h.jsx)(v.Z,{variant:"outlined",sx:y,children:g.map((function(e){return(0,h.jsx)(j.Z,{color:e,variant:"query",value:r,valueBuffer:n,sx:{mb:2,width:1}},e)}))})]})]})}function k(){var e=(0,i.useState)(0),r=(0,t.Z)(e,2),n=r[0],v=r[1],x=(0,i.useState)(10),f=(0,t.Z)(x,2),m=f[0],p=f[1];(0,i.useEffect)((function(){var e=setInterval((function(){v((function(e){if(100===e)return 0;var r=10*Math.random();return Math.min(e+r,100)}))}),500);return function(){clearInterval(e)}}),[]);var j=(0,i.useRef)((function(){}));return(0,i.useEffect)((function(){j.current=function(){if(n>100)v(0),p(10);else{var e=10*Math.random(),r=10*Math.random();v(n+e),p(n+e+r)}}})),(0,i.useEffect)((function(){var e=setInterval((function(){j.current()}),500);return function(){clearInterval(e)}}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.ql,{children:(0,h.jsx)("title",{children:" MUI Components: Progress | INTERNATIONAL JOURNAL INDEXING"})}),(0,h.jsx)(o.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,h.jsx)(s.Z,{children:(0,h.jsx)(d.Z,{heading:"Progress",links:[{name:"Components",href:l.ko.components},{name:"Progress"}],moreLink:["https://mui.com/components/progress"]})})}),(0,h.jsx)(s.Z,{sx:{my:10},children:(0,h.jsxs)(c.Z,{spacing:5,children:[(0,h.jsx)(u.g,{title:"Circular",children:(0,h.jsx)(Z,{progress:n})}),(0,h.jsx)(u.g,{title:"Linear",children:(0,h.jsx)(b,{progress:n,buffer:m})})]})})]})}},16769:function(e,r,n){n.d(r,{_:function(){return u},g:function(){return d}});var t=n(1413),i=n(17551),a=n(80654),o=n(29700),s=n(16157),c=n(42669),l=n(46417);function d(e){var r=e.title,n=e.sx,c=e.children;return(0,l.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,i.Fq)(e.palette.grey[500],.04)}},children:[r&&(0,l.jsx)(o.Z,{title:r}),(0,l.jsx)(s.Z,{sx:(0,t.Z)({p:5,minHeight:180},n),children:c})]})}function u(e){var r=e.title;return(0,l.jsx)(c.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:r})}},29700:function(e,r,n){n.d(r,{Z:function(){return b}});var t=n(4942),i=n(63366),a=n(87462),o=n(47313),s=n(83061),c=n(21921),l=n(42669),d=n(11236),u=n(64164),v=n(77430),x=n(32298);function f(e){return(0,x.Z)("MuiCardHeader",e)}var h=(0,v.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=n(46417),p=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Z=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,r){var n;return(0,a.Z)((n={},(0,t.Z)(n,"& .".concat(h.title),r.title),(0,t.Z)(n,"& .".concat(h.subheader),r.subheader),n),r.root)}})({display:"flex",alignItems:"center",padding:16}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,r){return r.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,r){return r.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,r){return r.content}})({flex:"1 1 auto"}),b=o.forwardRef((function(e,r){var n=(0,d.Z)({props:e,name:"MuiCardHeader"}),t=n.action,o=n.avatar,u=n.className,v=n.component,x=void 0===v?"div":v,h=n.disableTypography,b=void 0!==h&&h,k=n.subheader,w=n.subheaderTypographyProps,S=n.title,C=n.titleTypographyProps,M=(0,i.Z)(n,p),P=(0,a.Z)({},n,{component:x,disableTypography:b}),N=function(e){var r=e.classes;return(0,c.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},f,r)}(P),I=S;null==I||I.type===l.Z||b||(I=(0,m.jsx)(l.Z,(0,a.Z)({variant:o?"body2":"h5",className:N.title,component:"span",display:"block"},C,{children:I})));var R=k;return null==R||R.type===l.Z||b||(R=(0,m.jsx)(l.Z,(0,a.Z)({variant:o?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:R}))),(0,m.jsxs)(Z,(0,a.Z)({className:(0,s.Z)(N.root,u),as:x,ref:r,ownerState:P},M,{children:[o&&(0,m.jsx)(j,{className:N.avatar,ownerState:P,children:o}),(0,m.jsxs)(y,{className:N.content,ownerState:P,children:[I,R]}),t&&(0,m.jsx)(g,{className:N.action,ownerState:P,children:t})]}))}))},34207:function(e,r,n){n.d(r,{Z:function(){return _}});var t=n(30168),i=n(63366),a=n(87462),o=n(47313),s=n(83061),c=n(21921),l=n(30686),d=n(28170),u=n(11236),v=n(64164),x=n(77430),f=n(32298);function h(e){return(0,f.Z)("MuiCircularProgress",e)}(0,x.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var m,p,Z,j,g,y,b,k,w=n(46417),S=["className","color","disableShrink","size","style","thickness","value","variant"],C=44,M=(0,l.F4)(g||(g=m||(m=(0,t.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),P=(0,l.F4)(y||(y=p||(p=(0,t.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),N=(0,v.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[r.root,r[n.variant],r["color".concat((0,d.Z)(n.color))]]}})((function(e){var r=e.ownerState,n=e.theme;return(0,a.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:n.transitions.create("transform")},"inherit"!==r.color&&{color:(n.vars||n).palette[r.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,l.iv)(b||(b=Z||(Z=(0,t.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),M)})),I=(0,v.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,r){return r.svg}})({display:"block"}),R=(0,v.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,r){var n=e.ownerState;return[r.circle,r["circle".concat((0,d.Z)(n.variant))],n.disableShrink&&r.circleDisableShrink]}})((function(e){var r=e.ownerState,n=e.theme;return(0,a.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var r=e.ownerState;return"indeterminate"===r.variant&&!r.disableShrink&&(0,l.iv)(k||(k=j||(j=(0,t.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),P)})),_=o.forwardRef((function(e,r){var n=(0,u.Z)({props:e,name:"MuiCircularProgress"}),t=n.className,o=n.color,l=void 0===o?"primary":o,v=n.disableShrink,x=void 0!==v&&v,f=n.size,m=void 0===f?40:f,p=n.style,Z=n.thickness,j=void 0===Z?3.6:Z,g=n.value,y=void 0===g?0:g,b=n.variant,k=void 0===b?"indeterminate":b,M=(0,i.Z)(n,S),P=(0,a.Z)({},n,{color:l,disableShrink:x,size:m,thickness:j,value:y,variant:k}),_=function(e){var r=e.classes,n=e.variant,t=e.color,i=e.disableShrink,a={root:["root",n,"color".concat((0,d.Z)(t))],svg:["svg"],circle:["circle","circle".concat((0,d.Z)(n)),i&&"circleDisableShrink"]};return(0,c.Z)(a,h,r)}(P),L={},D={},H={};if("determinate"===k){var T=2*Math.PI*((C-j)/2);L.strokeDasharray=T.toFixed(3),H["aria-valuenow"]=Math.round(y),L.strokeDashoffset="".concat(((100-y)/100*T).toFixed(3),"px"),D.transform="rotate(-90deg)"}return(0,w.jsx)(N,(0,a.Z)({className:(0,s.Z)(_.root,t),style:(0,a.Z)({width:m,height:m},D,p),ownerState:P,ref:r,role:"progressbar"},H,M,{children:(0,w.jsx)(I,{className:_.svg,ownerState:P,viewBox:"".concat(22," ").concat(22," ").concat(C," ").concat(C),children:(0,w.jsx)(R,{className:_.circle,style:L,ownerState:P,cx:C,cy:C,r:(C-j)/2,fill:"none",strokeWidth:j})})}))}))}}]);