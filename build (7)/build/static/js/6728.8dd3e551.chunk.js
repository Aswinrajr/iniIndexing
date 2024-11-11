"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[6728],{48669:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(1413),o=t(45987),a=t(16157),i=t(62463),l=t(42669),c=t(80493),s=t(77449),d=t(2135),u=t(46417);function m(e){var n=e.link,t=e.activeLast,o=e.disabled,i=n.name,l=n.href,c=n.icon,m=(0,r.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},o&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,u.jsxs)(u.Fragment,{children:[c&&(0,u.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),i]});return l?(0,u.jsx)(s.Z,{component:d.rU,to:l,sx:m,children:h}):(0,u.jsxs)(a.Z,{sx:m,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function x(e){var n=e.links,t=e.action,d=e.heading,x=e.moreLink,p=e.activeLast,Z=e.sx,v=(0,o.Z)(e,h),j=n[n.length-1].name;return(0,u.jsxs)(a.Z,{sx:(0,r.Z)({mb:5},Z),children:[(0,u.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(a.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(c.Z,(0,r.Z)((0,r.Z)({separator:(0,u.jsx)(f,{})},v),{},{children:n.map((function(e){return(0,u.jsx)(m,{link:e,activeLast:p,disabled:e.name===j},e.name||"")}))}))]}),t&&(0,u.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!x&&(0,u.jsx)(a.Z,{sx:{mt:2},children:x.map((function(e){return(0,u.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function f(){return(0,u.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},72805:function(e,n,t){t.d(n,{Z:function(){return r.Z}});var r=t(48669)},46728:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(29439),o=t(47313),a=t(65964),i=t(82403),l=t(16157),c=t(10679),s=t(41769),d=t(64558),u=t(10383),m=t(64287),h=t(48175),x=t(72805),f=t(8730),p=t(16769),Z=t(46417),v=["default","primary","secondary","info","success","warning","error"],j=["top","start","bottom","end"],b={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}};function g(){var e=(0,o.useState)([!0,!1]),n=(0,r.Z)(e,2),t=n[0],g=n[1];return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(a.ql,{children:(0,Z.jsx)("title",{children:" MUI Components: Checkbox | INTERNATIONAL JOURNAL INDEXING"})}),(0,Z.jsx)(l.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(x.Z,{heading:"Checkboxes",links:[{name:"Components",href:h.ko.components},{name:"Checkboxes"}],moreLink:["https://mui.com/components/checkboxes"]})})}),(0,Z.jsx)(c.Z,{sx:{my:10},children:(0,Z.jsxs)(i.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,Z.jsxs)(p.g,{title:"Basic",sx:b,children:[(0,Z.jsx)(s.Z,{}),(0,Z.jsx)(s.Z,{defaultChecked:!0}),(0,Z.jsx)(s.Z,{defaultChecked:!0,indeterminate:!0}),(0,Z.jsx)(s.Z,{disabled:!0}),(0,Z.jsx)(s.Z,{disabled:!0,defaultChecked:!0}),(0,Z.jsx)(s.Z,{disabled:!0,indeterminate:!0})]}),(0,Z.jsxs)(p.g,{title:"Size & Custom Icon",sx:b,children:[(0,Z.jsx)(d.Z,{label:"Normal",control:(0,Z.jsx)(s.Z,{defaultChecked:!0})}),(0,Z.jsx)(d.Z,{label:"Small",control:(0,Z.jsx)(s.Z,{defaultChecked:!0,size:"small"})}),(0,Z.jsx)(d.Z,{control:(0,Z.jsx)(s.Z,{color:"info",size:"small",icon:(0,Z.jsx)(f.Z,{icon:"eva:heart-fill"}),checkedIcon:(0,Z.jsx)(f.Z,{icon:"eva:heart-fill"})}),label:"Custom icon"}),(0,Z.jsx)(d.Z,{control:(0,Z.jsx)(s.Z,{color:"error",icon:(0,Z.jsx)(f.Z,{icon:"eva:award-fill"}),checkedIcon:(0,Z.jsx)(f.Z,{icon:"eva:award-fill"})}),label:"Custom icon"})]}),(0,Z.jsx)(p.g,{title:"Placement",sx:b,children:(0,Z.jsx)(u.Z,{component:"fieldset",children:(0,Z.jsx)(m.Z,{"aria-label":"position",row:!0,children:j.map((function(e){return(0,Z.jsx)(d.Z,{value:e,label:e,labelPlacement:e,control:(0,Z.jsx)(s.Z,{}),sx:{textTransform:"capitalize"}},e)}))})})}),(0,Z.jsxs)(p.g,{title:"Colors",children:[(0,Z.jsxs)(m.Z,{children:[v.map((function(e){return(0,Z.jsx)(d.Z,{control:(0,Z.jsx)(s.Z,{defaultChecked:!0,color:e}),label:e,sx:{textTransform:"capitalize"}},e)})),(0,Z.jsx)(d.Z,{disabled:!0,control:(0,Z.jsx)(s.Z,{defaultChecked:!0,color:"error"}),label:"Disabled"})]}),(0,Z.jsx)(u.Z,{component:"fieldset",children:(0,Z.jsxs)(m.Z,{children:[v.map((function(e){return(0,Z.jsx)(d.Z,{control:(0,Z.jsx)(s.Z,{defaultChecked:!0,indeterminate:!0,color:e}),label:e,sx:{textTransform:"capitalize"}},e)})),(0,Z.jsx)(d.Z,{disabled:!0,control:(0,Z.jsx)(s.Z,{defaultChecked:!0,indeterminate:!0,color:"error"}),label:"Disabled"})]})})]}),(0,Z.jsx)(p.g,{title:"Indeterminate",sx:b,children:(0,Z.jsxs)("div",{children:[(0,Z.jsx)(d.Z,{label:"Parent",control:(0,Z.jsx)(s.Z,{checked:t[0]&&t[1],indeterminate:t[0]!==t[1],onChange:function(e){g([e.target.checked,e.target.checked])}})}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(d.Z,{label:"Child 1",control:(0,Z.jsx)(s.Z,{checked:t[0],onChange:function(e){g([e.target.checked,t[1]])}})}),(0,Z.jsx)(d.Z,{label:"Child 2",control:(0,Z.jsx)(s.Z,{checked:t[1],onChange:function(e){g([t[0],e.target.checked])}})})]})]})})]})})]})}},16769:function(e,n,t){t.d(n,{_:function(){return u},g:function(){return d}});var r=t(1413),o=t(17551),a=t(80654),i=t(29700),l=t(16157),c=t(42669),s=t(46417);function d(e){var n=e.title,t=e.sx,c=e.children;return(0,s.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,o.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,s.jsx)(i.Z,{title:n}),(0,s.jsx)(l.Z,{sx:(0,r.Z)({p:5,minHeight:180},t),children:c})]})}function u(e){var n=e.title;return(0,s.jsx)(c.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}},29700:function(e,n,t){t.d(n,{Z:function(){return k}});var r=t(4942),o=t(63366),a=t(87462),i=t(47313),l=t(83061),c=t(21921),s=t(42669),d=t(11236),u=t(64164),m=t(77430),h=t(32298);function x(e){return(0,h.Z)("MuiCardHeader",e)}var f=(0,m.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),p=t(46417),Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,n){var t;return(0,a.Z)((t={},(0,r.Z)(t,"& .".concat(f.title),n.title),(0,r.Z)(t,"& .".concat(f.subheader),n.subheader),t),n.root)}})({display:"flex",alignItems:"center",padding:16}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,n){return n.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,n){return n.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,n){return n.content}})({flex:"1 1 auto"}),k=i.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiCardHeader"}),r=t.action,i=t.avatar,u=t.className,m=t.component,h=void 0===m?"div":m,f=t.disableTypography,k=void 0!==f&&f,C=t.subheader,y=t.subheaderTypographyProps,S=t.title,w=t.titleTypographyProps,M=(0,o.Z)(t,Z),N=(0,a.Z)({},t,{component:h,disableTypography:k}),z=function(e){var n=e.classes;return(0,c.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},x,n)}(N),I=S;null==I||I.type===s.Z||k||(I=(0,p.jsx)(s.Z,(0,a.Z)({variant:i?"body2":"h5",className:z.title,component:"span",display:"block"},w,{children:I})));var P=C;return null==P||P.type===s.Z||k||(P=(0,p.jsx)(s.Z,(0,a.Z)({variant:i?"body2":"body1",className:z.subheader,color:"text.secondary",component:"span",display:"block"},y,{children:P}))),(0,p.jsxs)(v,(0,a.Z)({className:(0,l.Z)(z.root,u),as:h,ref:n,ownerState:N},M,{children:[i&&(0,p.jsx)(j,{className:z.avatar,ownerState:N,children:i}),(0,p.jsxs)(g,{className:z.content,ownerState:N,children:[I,P]}),r&&(0,p.jsx)(b,{className:z.action,ownerState:N,children:r})]}))}))},41769:function(e,n,t){t.d(n,{Z:function(){return N}});var r=t(4942),o=t(63366),a=t(87462),i=t(47313),l=t(83061),c=t(21921),s=t(17551),d=t(45359),u=t(46095),m=t(46417),h=(0,u.Z)((0,m.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),x=(0,u.Z)((0,m.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),f=(0,u.Z)((0,m.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(28170),Z=t(11236),v=t(64164),j=t(77430),b=t(32298);function g(e){return(0,b.Z)("MuiCheckbox",e)}var k=(0,j.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),C=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],y=(0,v.ZP)(d.Z,{shouldForwardProp:function(e){return(0,v.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n["color".concat((0,p.Z)(t.color))]]}})((function(e){var n,t=e.theme,o=e.ownerState;return(0,a.Z)({color:(t.vars||t).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===o.color?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,s.Fq)("default"===o.color?t.palette.action.active:t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(n={},(0,r.Z)(n,"&.".concat(k.checked,", &.").concat(k.indeterminate),{color:(t.vars||t).palette[o.color].main}),(0,r.Z)(n,"&.".concat(k.disabled),{color:(t.vars||t).palette.action.disabled}),n))})),S=(0,m.jsx)(x,{}),w=(0,m.jsx)(h,{}),M=(0,m.jsx)(f,{}),N=i.forwardRef((function(e,n){var t,r,s=(0,Z.Z)({props:e,name:"MuiCheckbox"}),d=s.checkedIcon,u=void 0===d?S:d,h=s.color,x=void 0===h?"primary":h,f=s.icon,v=void 0===f?w:f,j=s.indeterminate,b=void 0!==j&&j,k=s.indeterminateIcon,N=void 0===k?M:k,z=s.inputProps,I=s.size,P=void 0===I?"medium":I,R=s.className,L=(0,o.Z)(s,C),T=b?N:v,H=b?N:u,W=(0,a.Z)({},s,{color:x,indeterminate:b,size:P}),B=function(e){var n=e.classes,t=e.indeterminate,r=e.color,o={root:["root",t&&"indeterminate","color".concat((0,p.Z)(r))]},i=(0,c.Z)(o,g,n);return(0,a.Z)({},n,i)}(W);return(0,m.jsx)(y,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":b},z),icon:i.cloneElement(T,{fontSize:null!=(t=T.props.fontSize)?t:P}),checkedIcon:i.cloneElement(H,{fontSize:null!=(r=H.props.fontSize)?r:P}),ownerState:W,ref:n,className:(0,l.Z)(B.root,R)},L,{classes:B}))}))},10383:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(29439),o=t(63366),a=t(87462),i=t(47313),l=t(83061),c=t(21921),s=t(11236),d=t(64164),u=t(97868),m=t(28170),h=t(41340),x=t(10829),f=t(77430),p=t(32298);function Z(e){return(0,p.Z)("MuiFormControl",e)}(0,f.Z)("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);var v=t(46417),j=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],b=(0,d.ZP)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return(0,a.Z)({},n.root,n["margin".concat((0,m.Z)(t.margin))],t.fullWidth&&n.fullWidth)}})((function(e){var n=e.ownerState;return(0,a.Z)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===n.margin&&{marginTop:16,marginBottom:8},"dense"===n.margin&&{marginTop:8,marginBottom:4},n.fullWidth&&{width:"100%"})})),g=i.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiFormControl"}),d=t.children,f=t.className,p=t.color,g=void 0===p?"primary":p,k=t.component,C=void 0===k?"div":k,y=t.disabled,S=void 0!==y&&y,w=t.error,M=void 0!==w&&w,N=t.focused,z=t.fullWidth,I=void 0!==z&&z,P=t.hiddenLabel,R=void 0!==P&&P,L=t.margin,T=void 0===L?"none":L,H=t.required,W=void 0!==H&&H,B=t.size,F=void 0===B?"medium":B,E=t.variant,_=void 0===E?"outlined":E,q=(0,o.Z)(t,j),A=(0,a.Z)({},t,{color:g,component:C,disabled:S,error:M,fullWidth:I,hiddenLabel:R,margin:T,required:W,size:F,variant:_}),O=function(e){var n=e.classes,t=e.margin,r=e.fullWidth,o={root:["root","none"!==t&&"margin".concat((0,m.Z)(t)),r&&"fullWidth"]};return(0,c.Z)(o,Z,n)}(A),D=i.useState((function(){var e=!1;return d&&i.Children.forEach(d,(function(n){if((0,h.Z)(n,["Input","Select"])){var t=(0,h.Z)(n,["Select"])?n.props.input:n;t&&(0,u.B7)(t.props)&&(e=!0)}})),e})),V=(0,r.Z)(D,2),U=V[0],G=V[1],J=i.useState((function(){var e=!1;return d&&i.Children.forEach(d,(function(n){(0,h.Z)(n,["Input","Select"])&&(0,u.vd)(n.props,!0)&&(e=!0)})),e})),X=(0,r.Z)(J,2),K=X[0],Q=X[1],Y=i.useState(!1),$=(0,r.Z)(Y,2),ee=$[0],ne=$[1];S&&ee&&ne(!1);var te,re=void 0===N||S?ee:N,oe=i.useMemo((function(){return{adornedStart:U,setAdornedStart:G,color:g,disabled:S,error:M,filled:K,focused:re,fullWidth:I,hiddenLabel:R,size:F,onBlur:function(){ne(!1)},onEmpty:function(){Q(!1)},onFilled:function(){Q(!0)},onFocus:function(){ne(!0)},registerEffect:te,required:W,variant:_}}),[U,g,S,M,K,re,I,R,te,W,F,_]);return(0,v.jsx)(x.Z.Provider,{value:oe,children:(0,v.jsx)(b,(0,a.Z)({as:C,ownerState:A,className:(0,l.Z)(O.root,f),ref:n},q,{children:d}))})}))},41340:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(47313);var o=function(e,n){return r.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)}}}]);