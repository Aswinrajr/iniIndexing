"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[1856],{26253:function(e,t,n){n.d(t,{cU:function(){return I},i5:function(){return b},A0:function(){return u},ZP:function(){return S}});var i=n(44021),r=n(1413),o=n(64164),s=n(16157),a=n(62463),l=n(46417),c=(0,o.ZP)(s.Z,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{zIndex:9,display:"flex",alignItems:"center",justifyContent:"center",color:e.theme.palette.primary.main,"& li":{width:18,height:18,opacity:.32,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer","&.slick-active":(0,r.Z)({opacity:1},t&&{"& span":{width:16,borderRadius:6}})}}})),d=(0,o.ZP)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function u(e){var t=(null===e||void 0===e?void 0:e.rounded)||!1,n=null===e||void 0===e?void 0:e.sx;return{appendDots:function(i){return(0,l.jsx)(c,(0,r.Z)((0,r.Z)({component:"ul",rounded:t,sx:n},e),{},{children:i}))},customPaging:function(){return(0,l.jsx)(a.Z,{component:"div",alignItems:"center",justifyContent:"center",sx:{width:1,height:1},children:(0,l.jsx)(d,{sx:{bgcolor:"currentColor"}})})}}}var h=n(45987),x=n(17551),p=n(62111),Z=n(18104),g=n(8730);function f(e){var t=e.icon,n=void 0===t?"eva:arrow-ios-forward-fill":t,i=e.isRTL;return(0,l.jsx)(g.Z,{icon:n,sx:(0,r.Z)({width:20,height:20,transform:" scaleX(-1)"},i&&{transform:" scaleX(1)"})})}function j(e){var t=e.icon,n=void 0===t?"eva:arrow-ios-forward-fill":t,i=e.isRTL;return(0,l.jsx)(g.Z,{icon:n,sx:(0,r.Z)({width:20,height:20},i&&{transform:" scaleX(-1)"})})}var m=["shape","filled","icon","onNext","onPrevious","children","leftButtonProps","rightButtonProps","sx"],v=(0,o.ZP)(Z.Z,{shouldForwardProp:function(e){return"filled"!==e&&"hasChildren"!==e&&"shape"!==e}})((function(e){var t=e.filled,n=e.shape,i=e.hasChildren,o=e.theme;return(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({color:"inherit",transition:o.transitions.create("all",{duration:o.transitions.duration.shorter})},"rounded"===n&&{borderRadius:1.5*Number(o.shape.borderRadius)}),!t&&{opacity:.48,"&:hover":{opacity:1}}),t&&{color:(0,x.Fq)(o.palette.common.white,.8),backgroundColor:(0,x.Fq)(o.palette.grey[900],.48),"&:hover":{color:o.palette.common.white,backgroundColor:o.palette.grey[900]}}),i&&{zIndex:9,top:"50%",position:"absolute",marginTop:o.spacing(-2.5)})}));function b(e){var t=e.shape,n=void 0===t?"circular":t,i=e.filled,o=void 0!==i&&i,s=e.icon,c=e.onNext,d=e.onPrevious,u=e.children,x=e.leftButtonProps,Z=e.rightButtonProps,g=e.sx,b=(0,h.Z)(e,m),y="rtl"===(0,p.Z)().direction;return!!u?(0,l.jsxs)(a.Z,(0,r.Z)((0,r.Z)({sx:g},b),{},{children:[(0,l.jsx)(v,(0,r.Z)((0,r.Z)({filled:o,shape:n,hasChildren:!!u,onClick:d},x),{},{sx:(0,r.Z)({left:16},null===x||void 0===x?void 0:x.sx),children:(0,l.jsx)(f,{icon:s,isRTL:y})})),u,(0,l.jsx)(v,(0,r.Z)((0,r.Z)({filled:o,shape:n,hasChildren:!!u,onClick:c},Z),{},{sx:(0,r.Z)({right:16},null===Z||void 0===Z?void 0:Z.sx),children:(0,l.jsx)(j,{icon:s,isRTL:y})}))]})):(0,l.jsxs)(a.Z,(0,r.Z)((0,r.Z)({direction:"row",alignItems:"center",display:"inline-flex",sx:g},b),{},{children:[(0,l.jsx)(v,(0,r.Z)((0,r.Z)({filled:o,shape:n,onClick:d},x),{},{children:(0,l.jsx)(f,{icon:s,isRTL:y})})),(0,l.jsx)(v,(0,r.Z)((0,r.Z)({filled:o,shape:n,onClick:c},Z),{},{children:(0,l.jsx)(j,{icon:s,isRTL:y})}))]}))}var y=n(42669),w=n(50769),C=["index","total","onNext","onPrevious","icon","sx"],k=(0,o.ZP)(s.Z)((function(e){var t=e.theme;return(0,r.Z)((0,r.Z)({},(0,w.Ls)({opacity:.48,color:t.palette.grey[900]})),{},{zIndex:9,display:"inline-flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),padding:t.spacing(.25),color:t.palette.common.white,borderRadius:t.shape.borderRadius})})),P=(0,o.ZP)(Z.Z)({width:28,height:28,padding:0,opacity:.48,"&:hover":{opacity:1}});function I(e){var t=e.index,n=e.total,i=e.onNext,o=e.onPrevious,s=e.icon,a=e.sx,c=(0,h.Z)(e,C),d="rtl"===(0,p.Z)().direction;return(0,l.jsxs)(k,(0,r.Z)((0,r.Z)({sx:a},c),{},{children:[(0,l.jsx)(P,{color:"inherit",onClick:o,children:(0,l.jsx)(f,{icon:s,isRTL:d})}),(0,l.jsxs)(y.Z,{variant:"subtitle2",component:"span",sx:{mx:.25},children:[t+1,"/",n]}),(0,l.jsx)(P,{color:"inherit",onClick:i,children:(0,l.jsx)(j,{icon:s,isRTL:d})})]}))}var S=i.Z},49372:function(e,t,n){n.d(t,{fY:function(){return l},yM:function(){return d},hN:function(){return v}});var i=n(1413),r=n(64164),o=n(17551),s=n(67881),a=n(46417),l=(0,r.ZP)((function(e){return(0,a.jsx)(s.Z,(0,i.Z)({select:!0,SelectProps:{native:!0}},e))}))((function(e){var t=e.theme;return{"& fieldset":{display:"none"},"& select":(0,i.Z)((0,i.Z)({},t.typography.subtitle2),{},{padding:t.spacing(.5,0,.5,1),paddingRight:"28px !important"}),"& .MuiOutlinedInput-root":{borderRadius:.75*Number(t.shape.borderRadius),backgroundColor:(0,o.Fq)(t.palette.grey[500],.08)}}})),c=n(4942),d=(0,r.ZP)(s.Z,{shouldForwardProp:function(e){return"width"!==e}})((function(e){var t=e.width,n=e.theme;return{"& fieldset":{display:"none"},"& .MuiOutlinedInput-root":{width:t,border:"solid 1px ".concat((0,o.Fq)(n.palette.grey[500],.32)),transition:n.transitions.create(["box-shadow","width"],{duration:n.transitions.duration.shorter}),"&.Mui-focused":(0,i.Z)({boxShadow:n.customShadows.z20},t&&(0,c.Z)({},n.breakpoints.up("sm"),{width:t+60}))}}})),u=n(45987),h=n(75192),x=n.n(h),p=n(47313),Z=n(62463),g=n(18104),f=n(8730),j=["quantity","onIncrease","onDecrease","disabledIncrease","disabledDecrease","sx"],m=(0,p.forwardRef)((function(e,t){var n=e.quantity,r=e.onIncrease,s=e.onDecrease,l=e.disabledIncrease,c=e.disabledDecrease,d=e.sx,h=(0,u.Z)(e,j);return(0,a.jsxs)(Z.Z,(0,i.Z)((0,i.Z)({ref:t,flexShrink:0,direction:"row",alignItems:"center",justifyContent:"space-between",sx:(0,i.Z)({mb:.5,py:.5,px:.75,width:96,borderRadius:1,border:function(e){return"solid 1px ".concat((0,o.Fq)(e.palette.grey[500],.32))}},d)},h),{},{children:[(0,a.jsx)(g.Z,{size:"small",color:"inherit",onClick:s,disabled:c,sx:{color:"text.secondary"},children:(0,a.jsx)(f.Z,{icon:"eva:minus-fill",width:16})}),n,(0,a.jsx)(g.Z,{size:"small",color:"inherit",onClick:r,disabled:l,sx:{color:"text.secondary"},children:(0,a.jsx)(f.Z,{icon:"eva:plus-fill",width:16})})]}))}));m.propTypes={sx:x().object,onDecrease:x().func,onIncrease:x().func,quantity:x().number,disabledDecrease:x().bool,disabledIncrease:x().bool};var v=m},60656:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(1413),r=n(45987),o=n(62463),s=n(42669),a=n(59063),l=n(46417),c=["title","description","img","sx"];function d(e){var t=e.title,n=e.description,d=e.img,u=e.sx,h=(0,r.Z)(e,c);return(0,l.jsxs)(o.Z,(0,i.Z)((0,i.Z)({alignItems:"center",justifyContent:"center",sx:(0,i.Z)({height:1,textAlign:"center",p:function(e){return e.spacing(8,2)}},u)},h),{},{children:[(0,l.jsx)(a.Z,{disabledEffect:!0,alt:"empty content",src:d||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,l.jsx)(s.Z,{variant:"h5",gutterBottom:!0,children:t}),n&&(0,l.jsx)(s.Z,{variant:"body2",sx:{color:"text.secondary"},children:n})]}))}},54045:function(e,t,n){function i(e,t,n){return e>0?Math.max(0,(1+e)*t-n):0}function r(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function o(e,t){return"desc"===e?function(e,n){return r(e,n,t)}:function(e,n){return-r(e,n,t)}}n.d(t,{$W:function(){return Z},K:function(){return b},et:function(){return x},S_:function(){return T},Z4:function(){return P},fQ:function(){return i},sQ:function(){return o},x6:function(){return l}});var s=n(29439),a=n(47313);function l(e){var t=(0,a.useState)(!(null===e||void 0===e||!e.defaultDense)),n=(0,s.Z)(t,2),i=n[0],r=n[1],o=(0,a.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),l=(0,s.Z)(o,2),c=l[0],d=l[1],u=(0,a.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),h=(0,s.Z)(u,2),x=h[0],p=h[1],Z=(0,a.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),g=(0,s.Z)(Z,2),f=g[0],j=g[1],m=(0,a.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),v=(0,s.Z)(m,2),b=v[0],y=v[1],w=(0,a.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),C=(0,s.Z)(w,2),k=C[0],P=C[1],I=(0,a.useCallback)((function(e){""!==e&&(p(c===e&&"asc"===x?"desc":"asc"),d(e))}),[x,c]),S=(0,a.useCallback)((function(e){var t=k.indexOf(e),n=[];-1===t?n=n.concat(k,e):0===t?n=n.concat(k.slice(1)):t===k.length-1?n=n.concat(k.slice(0,-1)):t>0&&(n=n.concat(k.slice(0,t),k.slice(t+1))),P(n)}),[k]),R=(0,a.useCallback)((function(e,t){P(e?t:[])}),[]),D=(0,a.useCallback)((function(e,t){j(t)}),[]),T=(0,a.useCallback)((function(e){j(0),y(parseInt(e.target.value,10))}),[]),B=(0,a.useCallback)((function(e){r(e.target.checked)}),[]);return{dense:i,order:x,page:f,orderBy:c,rowsPerPage:b,selected:k,onSelectRow:S,onSelectAllRows:R,onSort:I,onChangePage:D,onChangeDense:B,onChangeRowsPerPage:T,setPage:j,setDense:r,setOrder:p,setOrderBy:d,setSelected:P,setRowsPerPage:y}}var c=n(59629),d=n(37982),u=n(60656),h=n(46417);function x(e){var t=e.isNotFound;return(0,h.jsx)(c.Z,{children:t?(0,h.jsx)(d.Z,{colSpan:12,children:(0,h.jsx)(u.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,h.jsx)(d.Z,{colSpan:12,sx:{p:0}})})}var p=n(1413);function Z(e){var t=e.emptyRows,n=e.height;return t?(0,h.jsx)(c.Z,{sx:(0,p.Z)({},n&&{height:n*t}),children:(0,h.jsx)(d.Z,{colSpan:9})}):null}var g=n(90495),f=n(41769),j=n(99780),m=n(16157),v={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function b(e){var t=e.order,n=e.orderBy,i=e.rowCount,r=void 0===i?0:i,o=e.headLabel,s=e.numSelected,a=void 0===s?0:s,l=e.onSort,u=e.onSelectAllRows,x=e.sx;return(0,h.jsx)(g.Z,{sx:x,children:(0,h.jsxs)(c.Z,{children:[u&&(0,h.jsx)(d.Z,{padding:"checkbox",children:(0,h.jsx)(f.Z,{indeterminate:a>0&&a<r,checked:r>0&&a===r,onChange:function(e){return u(e.target.checked)}})}),o.map((function(e){return(0,h.jsx)(d.Z,{align:e.align||"left",sortDirection:n===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:l?(0,h.jsxs)(j.Z,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:function(){return l(e.id)},sx:{textTransform:"capitalize"},children:[e.label,n===e.id?(0,h.jsx)(m.Z,{sx:(0,p.Z)({},v),children:"desc"===t?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var y=n(45987),w=n(62463),C=n(42669),k=["dense","action","rowCount","numSelected","onSelectAllRows","sx"];function P(e){var t=e.dense,n=e.action,i=e.rowCount,r=e.numSelected,o=e.onSelectAllRows,s=e.sx,a=(0,y.Z)(e,k);return r?(0,h.jsxs)(w.Z,(0,p.Z)((0,p.Z)({direction:"row",alignItems:"center",sx:(0,p.Z)((0,p.Z)({pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter"},t&&{height:38}),s)},a),{},{children:[(0,h.jsx)(f.Z,{indeterminate:r>0&&r<i,checked:i>0&&r===i,onChange:function(e){return o(e.target.checked)}}),(0,h.jsxs)(C.Z,{variant:"subtitle1",sx:(0,p.Z)({ml:2,flexGrow:1,color:"primary.main"},t&&{ml:3}),children:[r," selected"]}),n&&n]})):null}var I=n(73803),S=n(64558),R=n(11626),D=["dense","onChangeDense","rowsPerPageOptions","sx"];function T(e){var t=e.dense,n=e.onChangeDense,i=e.rowsPerPageOptions,r=void 0===i?[5,10,25]:i,o=e.sx,s=(0,y.Z)(e,D);return(0,h.jsxs)(m.Z,{sx:(0,p.Z)({position:"relative"},o),children:[(0,h.jsx)(I.Z,(0,p.Z)({rowsPerPageOptions:r,component:"div"},s)),n&&(0,h.jsx)(S.Z,{label:"Dense",control:(0,h.jsx)(R.Z,{checked:t,onChange:n}),sx:{pl:2,py:1.5,top:0,position:{md:"absolute"}}})]})}},41856:function(e,t,n){n.r(t),n.d(t,{default:function(){return De}});var i=n(65964),r=n(10679),o=n(82937),s=n(62463),a=n(62111),l=n(69904),c=n(50152),d=n(1413),u=n(45987),h=n(92484),x=n(29700),p=n(83719),Z=n(18104),g=n(49316),f=n(16157),j=n(42669),m=n(605),v=n(8730),b=n(46417),y=["title","subheader","list"];function w(e){var t=e.title,n=e.subheader,i=e.list,r=(0,u.Z)(e,y);return(0,b.jsxs)(h.Z,(0,d.Z)((0,d.Z)({},r),{},{children:[(0,b.jsx)(x.Z,{title:t,subheader:n,action:(0,b.jsx)(p.Z,{title:"Add Contact",children:(0,b.jsx)(Z.Z,{color:"primary",size:"large",children:(0,b.jsx)(v.Z,{icon:"eva:plus-fill"})})})}),(0,b.jsxs)(s.Z,{spacing:3,sx:{p:3},children:[i.map((function(e){return(0,b.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,b.jsx)(g.Z,{src:e.avatar,sx:{width:48,height:48}}),(0,b.jsxs)(f.Z,{sx:{flexGrow:1,ml:2,minWidth:100},children:[(0,b.jsx)(j.Z,{variant:"subtitle2",sx:{mb:.5},noWrap:!0,children:e.name}),(0,b.jsx)(j.Z,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:e.email})]}),(0,b.jsx)(p.Z,{title:"Quick Transfer",children:(0,b.jsx)(Z.Z,{size:"small",children:(0,b.jsx)(v.Z,{icon:"eva:diagonal-arrow-right-up-fill"})})})]},e.id)})),(0,b.jsx)(m.Z,{variant:"outlined",size:"large",color:"inherit",children:"View All"})]})]}))}var C=n(29439),k=n(47313),P=n(82821),I=n(77449),S=n(69462),R=n(22449),D=n(57631),T=n(5448),B=n(67881),A=n(66382),z=n(76221),N=n(26253),W=["title","subheader","list","sx"],E=["autoWidth","amount","onBlur","onChange","sx"],_=1e3;function L(e){var t=e.title,n=e.subheader,i=e.list,r=e.sx,o=(0,u.Z)(e,W),l=(0,a.Z)(),c=(0,k.useRef)(null),Z=(0,k.useState)(24),v=(0,C.Z)(Z,2),y=v[0],w=v[1],R=(0,k.useState)(0),D=(0,C.Z)(R,2),T=D[0],B=D[1],A=(0,k.useState)(!1),E=(0,C.Z)(A,2),L=E[0],O=E[1],q=(0,k.useState)(0),G=(0,C.Z)(q,2),Q=G[0],$=G[1],Y=i.find((function(e,t){return t===Q})),U={dots:!1,arrows:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,centerPadding:"0px",slidesToShow:i.length>7?7:i.length,rtl:Boolean("rtl"===l.direction),beforeChange:function(e,t){return $(t)},responsive:[{breakpoint:l.breakpoints.values.xl,settings:{slidesToShow:i.length>5?5:i.length}}]};(0,k.useEffect)((function(){T&&V()}),[T]);var V=function(){var e=T.toString().length;w(22*e)},X=function(e){B(""===e.target.value?"":Number(e.target.value))},H=function(){T<0?B(0):T>_&&B(_)};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(h.Z,(0,d.Z)((0,d.Z)({sx:(0,d.Z)({boxShadow:0,bgcolor:"background.neutral"},r)},o),{},{children:[(0,b.jsx)(x.Z,{title:t,subheader:n}),(0,b.jsxs)(P.Z,{children:[(0,b.jsxs)(s.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,b.jsx)(j.Z,{variant:"overline",sx:{color:"text.secondary"},children:"Recent"}),(0,b.jsx)(I.Z,{sx:{typography:"button"},children:"View All"})]}),(0,b.jsx)(f.Z,{sx:{position:"relative"},children:(0,b.jsx)(N.i5,{filled:!0,onPrevious:function(){var e;null===(e=c.current)||void 0===e||e.slickPrev()},onNext:function(){var e;null===(e=c.current)||void 0===e||e.slickNext()},leftButtonProps:{sx:{p:.5,mt:-1.5,left:-16,"& svg":{width:16,height:16}}},rightButtonProps:{sx:{p:.5,mt:-1.5,right:-16,"& svg":{width:16,height:16}}},children:(0,b.jsx)(f.Z,{sx:{mx:"auto",maxWidth:280,width:40*(i.length+1)},children:(0,b.jsx)(N.ZP,(0,d.Z)((0,d.Z)({ref:c},U),{},{children:i.map((function(e,t){return(0,b.jsx)(f.Z,{sx:{py:5},children:(0,b.jsx)(p.Z,{title:e.name,arrow:!0,placement:"top",children:(0,b.jsx)(g.Z,{src:e.avatar,sx:(0,d.Z)({mx:"auto",opacity:.48,cursor:"pointer",transition:l.transitions.create("all")},Q===t&&{opacity:1,transform:"scale(1.25)",boxShadow:"-4px 12px 24px 0 rgb(0,0,0,0.24)"})})},e.id)},e.id)}))}))})})}),(0,b.jsxs)(s.Z,{spacing:3,children:[(0,b.jsx)(j.Z,{variant:"overline",sx:{color:"text.secondary"},children:"insert amount"}),(0,b.jsx)(F,{amount:T,onBlur:H,autoWidth:y,onChange:X}),(0,b.jsx)(S.ZP,{value:"number"===typeof T?T:0,valueLabelDisplay:"auto",step:50,marks:!0,min:0,max:_,onChange:function(e,t){B(t)}}),(0,b.jsxs)(s.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,b.jsx)(j.Z,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Your Balance"}),(0,b.jsx)(j.Z,{variant:"subtitle1",children:(0,z.e_)(34212)})]}),(0,b.jsx)(m.Z,{variant:"contained",size:"large",disabled:0===T,onClick:function(){O(!0)},children:"Transfer Now"})]})]})]})),(0,b.jsx)(M,{open:L,autoWidth:y,amount:T,contactInfo:Y,onClose:function(){O(!1)},onBlur:H,onChange:X})]})}function F(e){var t=e.autoWidth,n=e.amount,i=e.onBlur,r=e.onChange,o=e.sx,a=(0,u.Z)(e,E);return(0,b.jsxs)(s.Z,{direction:"row",justifyContent:"center",spacing:1,sx:o,children:[(0,b.jsx)(j.Z,{variant:"h5",children:"$"}),(0,b.jsx)(R.Z,(0,d.Z)({disableUnderline:!0,size:"small",value:n,onChange:r,onBlur:i,inputProps:{step:50,min:0,max:_,type:"number"},sx:{typography:"h3","& input":{p:0,textAlign:"center",width:t}}},a))]})}function M(e){var t=e.open,n=e.amount,i=e.autoWidth,r=e.contactInfo,o=e.onClose,a=e.onBlur,l=e.onChange;return(0,b.jsxs)(D.Z,{open:t,fullWidth:!0,maxWidth:"xs",onClose:o,children:[(0,b.jsx)(T.Z,{children:"Transfer to"}),(0,b.jsxs)(s.Z,{spacing:3,sx:{p:3,pb:0},children:[(0,b.jsxs)(s.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,b.jsx)(g.Z,{src:null===r||void 0===r?void 0:r.avatar,sx:{width:48,height:48}}),(0,b.jsxs)("div",{children:[(0,b.jsx)(j.Z,{variant:"subtitle2",children:null===r||void 0===r?void 0:r.name}),(0,b.jsx)(j.Z,{variant:"body2",sx:{color:"text.secondary"},children:null===r||void 0===r?void 0:r.email})]})]}),(0,b.jsx)(F,{onBlur:a,onChange:l,autoWidth:i,amount:n,disableUnderline:!1,sx:{justifyContent:"flex-end"}}),(0,b.jsx)(B.Z,{fullWidth:!0,multiline:!0,rows:2,placeholder:"Write a message..."})]}),(0,b.jsxs)(A.Z,{children:[(0,b.jsx)(m.Z,{variant:"contained",disabled:0===n,onClick:o,children:"Confirm & Transfer"}),(0,b.jsx)(m.Z,{onClick:o,children:"Cancel"})]})]})}var O=n(17551),q=n(78629),G=n(59063),Q=n(50769),$=["img","price","title","description","sx"];function Y(e){var t=e.img,n=e.price,i=e.title,r=e.description,o=e.sx,l=(0,u.Z)(e,$),c=(0,a.Z)();return(0,b.jsxs)(f.Z,(0,d.Z)((0,d.Z)({},l),{},{children:[(0,b.jsx)(G.Z,{disabledEffect:!0,alt:"illustration-invite",src:t,sx:(0,d.Z)({left:40,zIndex:9,width:140,position:"relative",filter:"drop-shadow(0 12px 24px rgba(0,0,0,0.24))"},o)}),(0,b.jsxs)(f.Z,{sx:(0,d.Z)({mt:-15,color:"common.white",borderRadius:2,p:c.spacing(16,5,5,5)},(0,Q.v3)({direction:"135deg",startColor:c.palette.primary.main,endColor:c.palette.primary.dark})),children:[(0,b.jsxs)(s.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,b.jsx)(j.Z,{variant:"h4",sx:{whiteSpace:"pre-line"},children:i}),(0,b.jsxs)(j.Z,{variant:"h2",children:[" ",n," "]})]}),(0,b.jsx)(j.Z,{variant:"body2",sx:{mt:2,mb:3},children:r}),(0,b.jsxs)(s.Z,{direction:"row",spacing:1,children:[(0,b.jsx)(q.ZP,{fullWidth:!0,placeholder:"Email",sx:{px:1.5,height:40,borderRadius:1,color:"common.white",bgcolor:(0,O.Fq)(c.palette.common.black,.16),"&::placeholder":{color:(0,O.Fq)(c.palette.common.white,.48)}}}),(0,b.jsx)(m.Z,{color:"warning",variant:"contained",children:"Invite"})]})]})]}))}var U=n(47284),V=["title","total","icon","percent","color","chart","sx"];function X(e){var t=e.title,n=e.total,i=e.icon,r=e.percent,o=e.color,l=void 0===o?"primary":o,c=e.chart,x=e.sx,p=(0,u.Z)(e,V),Z=(0,a.Z)(),g=c.series,f=c.options,m=(0,U.Q8)((0,d.Z)({colors:[Z.palette[l].main],chart:{sparkline:{enabled:!0}},xaxis:{labels:{show:!1}},yaxis:{labels:{show:!1}},stroke:{width:4},legend:{show:!1},grid:{show:!1},tooltip:{marker:{show:!1},y:{formatter:function(e){return(0,z.e_)(e)},title:{formatter:function(){return""}}}},fill:{gradient:{opacityFrom:.56,opacityTo:.56}}},f));return(0,b.jsxs)(h.Z,(0,d.Z)((0,d.Z)({sx:(0,d.Z)({width:1,boxShadow:0,color:Z.palette[l].darker,bgcolor:Z.palette[l].lighter},x)},p),{},{children:[(0,b.jsx)(v.Z,{icon:i,sx:{p:1.5,top:24,right:24,width:48,height:48,borderRadius:"50%",position:"absolute",color:Z.palette[l].lighter,bgcolor:Z.palette[l].dark}}),(0,b.jsxs)(s.Z,{spacing:1,sx:{p:3},children:[(0,b.jsx)(j.Z,{variant:"subtitle2",children:t}),(0,b.jsx)(j.Z,{variant:"h3",children:(0,z.e_)(n)}),(0,b.jsx)(H,{percent:r})]}),(0,b.jsx)(U.ZP,{type:"area",series:[{data:g}],options:m,height:120})]}))}function H(e){var t=e.percent;return(0,b.jsxs)(s.Z,{direction:"row",alignItems:"center",flexWrap:"wrap",spacing:.5,children:[(0,b.jsx)(v.Z,{icon:t<0?"eva:trending-down-fill":"eva:trending-up-fill"}),(0,b.jsxs)(j.Z,{variant:"subtitle2",component:"span",children:[t>0&&"+",(0,z.f2)(t),(0,b.jsx)(f.Z,{component:"span",sx:{opacity:.72,typography:"body2"},children:" than last month"})]})]})}var J=n(64164),K=n(81962),ee=n(22608),te=(0,J.ZP)("div")((function(e){var t=e.theme;return{position:"relative",height:276,"& .slick-list":{borderRadius:2*Number(t.shape.borderRadius)}}})),ne=(0,J.ZP)("div")((function(e){var t=e.theme;return(0,d.Z)((0,d.Z)({},(0,Q.v3)({color:(0,O.Fq)(t.palette.grey[900],.9),imgUrl:"/assets/background/overlay_2.jpg"})),{},{position:"relative",height:260,padding:t.spacing(3),backgroundRepeat:"no-repeat",color:t.palette.common.white,display:"flex",flexDirection:"column",justifyContent:"space-between"})})),ie={mx:"auto",width:"calc(100% - 16px)",borderRadius:2,position:"absolute",height:200,zIndex:8,bottom:8,left:0,right:0,bgcolor:"grey.500",opacity:.32};function re(e){var t=e.list,n=e.sx,i=(0,a.Z)(),r=(0,d.Z)({dots:!0,arrows:!1,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===i.direction)},(0,N.A0)({sx:{right:16,bottom:16,position:"absolute"}}));return(0,b.jsxs)(te,{sx:n,children:[(0,b.jsx)(f.Z,{sx:{position:"relative",zIndex:9},children:(0,b.jsx)(N.ZP,(0,d.Z)((0,d.Z)({},r),{},{children:t.map((function(e){return(0,b.jsx)(oe,{card:e},e.id)}))}))}),(0,b.jsx)(f.Z,{sx:(0,d.Z)({},ie)}),(0,b.jsx)(f.Z,{sx:(0,d.Z)((0,d.Z)({},ie),{},{opacity:.16,bottom:0,zIndex:7,width:"calc(100% - 40px)"})})]})}function oe(e){var t=e.card,n=t.id,i=t.cardType,r=t.balance,o=t.cardHolder,a=t.cardNumber,l=t.cardValid,c=(0,k.useState)(!1),u=(0,C.Z)(c,2),h=u[0],x=u[1],p=(0,k.useState)(null),g=(0,C.Z)(p,2),f=g[0],m=g[1],y=function(){m(null)};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(ne,{children:[(0,b.jsx)(Z.Z,{color:"inherit",onClick:function(e){m(e.currentTarget)},sx:(0,d.Z)({top:16,right:16,zIndex:9,opacity:.48,position:"absolute"},f&&{opacity:1}),children:(0,b.jsx)(v.Z,{icon:"eva:more-vertical-fill"})}),(0,b.jsxs)("div",{children:[(0,b.jsx)(j.Z,{sx:{mb:2,typography:"subtitle2",opacity:.72},children:"Current Balance"}),(0,b.jsxs)(s.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,b.jsx)(j.Z,{sx:{typography:"h3"},children:h?"********":(0,z.e_)(r)}),(0,b.jsx)(Z.Z,{color:"inherit",onClick:function(){x(!h)},sx:{opacity:.48},children:(0,b.jsx)(v.Z,{icon:h?"eva:eye-fill":"eva:eye-off-fill"})})]})]}),(0,b.jsxs)(s.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:1,children:[(0,b.jsx)(G.Z,{disabledEffect:!0,alt:"credit-card",src:"/assets/icons/payments/ic_".concat("mastercard"===i?"mastercard":"visa",".svg"),sx:{height:24}}),(0,b.jsx)(j.Z,{sx:{typography:"subtitle1",textAlign:"right"},children:a})]}),(0,b.jsxs)(s.Z,{direction:"row",spacing:5,children:[(0,b.jsxs)("div",{children:[(0,b.jsx)(j.Z,{sx:{mb:1,typography:"caption",opacity:.48},children:"Card Holder"}),(0,b.jsx)(j.Z,{sx:{typography:"subtitle1"},children:o})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)(j.Z,{sx:{mb:1,typography:"caption",opacity:.48},children:"Valid Dates"}),(0,b.jsx)(j.Z,{sx:{typography:"subtitle1"},children:l})]})]})]}),(0,b.jsxs)(ee.Z,{open:f,onClose:y,children:[(0,b.jsxs)(K.Z,{onClick:function(){y(),console.log("DELETE",n)},sx:{color:"error.main"},children:[(0,b.jsx)(v.Z,{icon:"eva:trash-2-outline"}),"Delete card"]}),(0,b.jsxs)(K.Z,{onClick:function(){y(),console.log("EDIT",n)},children:[(0,b.jsx)(v.Z,{icon:"eva:edit-fill"}),"Edit card"]})]})]})}var se=n(49372),ae=["title","subheader","chart"];function le(e){var t=e.title,n=e.subheader,i=e.chart,r=(0,u.Z)(e,ae),o=i.categories,s=i.colors,a=i.series,l=i.options,c=(0,k.useState)("Year"),p=(0,C.Z)(c,2),Z=p[0],g=p[1],j=(0,U.Q8)((0,d.Z)({colors:s,stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:o},tooltip:{y:{formatter:function(e){return"$".concat(e)}}}},l));return(0,b.jsxs)(h.Z,(0,d.Z)((0,d.Z)({},r),{},{children:[(0,b.jsx)(x.Z,{title:t,subheader:n,action:(0,b.jsx)(se.fY,{value:Z,onChange:function(e){return g(e.target.value)},children:a.map((function(e){return(0,b.jsx)("option",{value:e.type,children:e.type},e.type)}))})}),a.map((function(e){return(0,b.jsx)(f.Z,{sx:{mt:3,mx:3},dir:"ltr",children:e.type===Z&&(0,b.jsx)(U.ZP,{type:"bar",series:e.data,options:j,height:364})},e.type)}))]}))}var ce=n(89600),de=n(46725),ue=n(39874),he=n(44874),xe=n(53805),pe=n(34940),Ze=n(59629),ge=n(37982),fe=n(86259),je=n(13280),me=n(54045),ve=["title","subheader","tableLabels","tableData"];function be(e){var t=e.title,n=e.subheader,i=e.tableLabels,r=e.tableData,o=(0,u.Z)(e,ve);return(0,b.jsxs)(h.Z,(0,d.Z)((0,d.Z)({},o),{},{children:[(0,b.jsx)(x.Z,{title:t,subheader:n,sx:{mb:3}}),(0,b.jsx)(ue.Z,{sx:{overflow:"unset"},children:(0,b.jsx)(je.Z,{sx:{minWidth:720},children:(0,b.jsxs)(he.Z,{children:[(0,b.jsx)(me.K,{headLabel:i}),(0,b.jsx)(xe.Z,{children:r.map((function(e){return(0,b.jsx)(ye,{row:e},e.id)}))})]})})}),(0,b.jsx)(pe.Z,{}),(0,b.jsx)(f.Z,{sx:{p:2,textAlign:"right"},children:(0,b.jsx)(m.Z,{size:"small",color:"inherit",endIcon:(0,b.jsx)(v.Z,{icon:"eva:arrow-ios-forward-fill"}),children:"View All"})})]}))}function ye(e){var t=e.row,n="light"===(0,a.Z)().palette.mode,i=(0,k.useState)(null),r=(0,C.Z)(i,2),o=r[0],s=r[1],l=function(){s(null)};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(Ze.Z,{children:[(0,b.jsx)(ge.Z,{children:(0,b.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,b.jsxs)(f.Z,{sx:{position:"relative"},children:[Ce(t.category,t.avatar),(0,b.jsx)(f.Z,{sx:(0,d.Z)({right:0,bottom:0,width:18,height:18,display:"flex",borderRadius:"50%",position:"absolute",alignItems:"center",color:"common.white",bgcolor:"error.main",justifyContent:"center"},"Income"===t.type&&{bgcolor:"success.main"}),children:(0,b.jsx)(v.Z,{icon:"Income"===t.type?"eva:diagonal-arrow-left-down-fill":"eva:diagonal-arrow-right-up-fill",width:16})})]}),(0,b.jsxs)(f.Z,{sx:{ml:2},children:[(0,b.jsx)(j.Z,{variant:"body2",sx:{color:"text.secondary"},children:t.message}),(0,b.jsxs)(j.Z,{variant:"subtitle2",children:[" ",t.category]})]})]})}),(0,b.jsxs)(ge.Z,{children:[(0,b.jsx)(j.Z,{variant:"subtitle2",children:(0,ce.Z)(new Date(t.date),"dd MMM yyyy")}),(0,b.jsx)(j.Z,{variant:"body2",sx:{color:"text.secondary"},children:(0,ce.Z)(new Date(t.date),"p")})]}),(0,b.jsx)(ge.Z,{children:(0,z.e_)(t.amount)}),(0,b.jsx)(ge.Z,{children:(0,b.jsx)(fe.Z,{variant:n?"soft":"filled",color:("completed"===t.status?"success":"in_progress"===t.status&&"warning")||"error",children:(0,de.G)(t.status)})}),(0,b.jsx)(ge.Z,{align:"right",children:(0,b.jsx)(Z.Z,{color:o?"inherit":"default",onClick:function(e){s(e.currentTarget)},children:(0,b.jsx)(v.Z,{icon:"eva:more-vertical-fill"})})})]}),(0,b.jsxs)(ee.Z,{open:o,onClose:l,arrow:"right-top",sx:{width:160},children:[(0,b.jsxs)(K.Z,{onClick:function(){l(),console.log("DOWNLOAD",t.id)},children:[(0,b.jsx)(v.Z,{icon:"eva:download-fill"}),"Download"]}),(0,b.jsxs)(K.Z,{onClick:function(){l(),console.log("PRINT",t.id)},children:[(0,b.jsx)(v.Z,{icon:"eva:printer-fill"}),"Print"]}),(0,b.jsxs)(K.Z,{onClick:function(){l(),console.log("SHARE",t.id)},children:[(0,b.jsx)(v.Z,{icon:"eva:share-fill"}),"Share"]}),(0,b.jsx)(pe.Z,{sx:{borderStyle:"dashed"}}),(0,b.jsxs)(K.Z,{onClick:function(){l(),console.log("DELETE",t.id)},sx:{color:"error.main"},children:[(0,b.jsx)(v.Z,{icon:"eva:trash-2-outline"}),"Delete"]})]})]})}function we(e){var t=e.icon;return(0,b.jsx)(g.Z,{sx:{width:48,height:48,color:"text.secondary",bgcolor:"background.neutral"},children:(0,b.jsx)(v.Z,{icon:t,width:24})})}function Ce(e,t){return"Books"===e?(0,b.jsx)(we,{icon:"eva:book-fill"}):"Beauty & Health"===e?(0,b.jsx)(we,{icon:"eva:heart-fill"}):t?(0,b.jsx)(g.Z,{alt:e,src:t,sx:{width:48,height:48,boxShadow:function(e){return e.customShadows.z8}}}):null}var ke=n(4942),Pe=n(66281),Ie=["title","subheader","chart"],Se=(0,J.ZP)(h.Z)((function(e){var t=e.theme;return{"& .apexcharts-legend":(0,ke.Z)({width:240,margin:"auto"},t.breakpoints.up("sm"),{flexWrap:"wrap",height:160,width:"50%"}),"& .apexcharts-datalabels-group":{display:"none"}}}));function Re(e){var t=e.title,n=e.subheader,i=e.chart,r=(0,u.Z)(e,Ie),o=(0,a.Z)(),l=(0,Pe.Z)("up","sm"),c=i.colors,h=i.series,p=i.options,Z=h.map((function(e){return e.value})),g=(0,U.Q8)((0,d.Z)({colors:c,labels:h.map((function(e){return e.label})),stroke:{colors:[o.palette.background.paper]},fill:{opacity:.8},legend:{position:"right",itemMargin:{horizontal:10,vertical:5}},responsive:[{breakpoint:o.breakpoints.values.sm,options:{legend:{position:"bottom",horizontalAlign:"left"}}}]},p));return(0,b.jsxs)(Se,(0,d.Z)((0,d.Z)({},r),{},{children:[(0,b.jsx)(x.Z,{title:t,subheader:n}),(0,b.jsx)(f.Z,{sx:{my:5},dir:"ltr",children:(0,b.jsx)(U.ZP,{type:"polarArea",series:Z,options:g,height:l?240:360})}),(0,b.jsx)(pe.Z,{}),(0,b.jsxs)(s.Z,{direction:"row",divider:(0,b.jsx)(pe.Z,{orientation:"vertical",flexItem:!0}),children:[(0,b.jsxs)(f.Z,{sx:{py:2,width:1,textAlign:"center"},children:[(0,b.jsx)(j.Z,{sx:{mb:1,typography:"body2",color:"text.secondary"},children:"Categories"}),(0,b.jsx)(j.Z,{sx:{typography:"h4"},children:"9"})]}),(0,b.jsxs)(f.Z,{sx:{py:2,width:1,textAlign:"center"},children:[(0,b.jsx)(j.Z,{sx:{mb:1,typography:"body2",color:"text.secondary"},children:"Categories"}),(0,b.jsx)(j.Z,{sx:{typography:"h4"},children:"$18,765"})]})]})]}))}function De(){var e=(0,a.Z)(),t=(0,c.K$)().themeStretch;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.ql,{children:(0,b.jsx)("title",{children:" General: Banking | INTERNATIONAL JOURNAL INDEXING"})}),(0,b.jsx)(r.Z,{maxWidth:!t&&"xl",children:(0,b.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,b.jsx)(o.ZP,{item:!0,xs:12,md:7,children:(0,b.jsxs)(s.Z,{direction:{xs:"column",sm:"row"},spacing:3,children:[(0,b.jsx)(X,{title:"Income",icon:"eva:diagonal-arrow-left-down-fill",percent:2.6,total:18765,chart:{series:[111,136,76,108,74,54,57,84]}}),(0,b.jsx)(X,{title:"Expenses",color:"warning",icon:"eva:diagonal-arrow-right-up-fill",percent:-.5,total:8938,chart:{series:[111,136,76,108,74,54,57,84]}})]})}),(0,b.jsx)(o.ZP,{item:!0,xs:12,md:5,children:(0,b.jsx)(re,{list:l.x6})}),(0,b.jsx)(o.ZP,{item:!0,xs:12,md:8,children:(0,b.jsxs)(s.Z,{spacing:3,children:[(0,b.jsx)(le,{title:"Balance Statistics",subheader:"(+43% Income | +12% Expense) than last year",chart:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],colors:[e.palette.primary.main,e.palette.warning.main],series:[{type:"Week",data:[{name:"Income",data:[10,41,35,151,49,62,69,91,48]},{name:"Expenses",data:[10,34,13,56,77,88,99,77,45]}]},{type:"Month",data:[{name:"Income",data:[148,91,69,62,49,51,35,41,10]},{name:"Expenses",data:[45,77,99,88,77,56,13,34,10]}]},{type:"Year",data:[{name:"Income",data:[76,42,29,41,27,138,117,86,63]},{name:"Expenses",data:[80,55,34,114,80,130,15,28,55]}]}]}}),(0,b.jsx)(Re,{title:"Expenses Categories",chart:{series:[{label:"Category 1",value:14},{label:"Category 2",value:23},{label:"Category 3",value:21},{label:"Category 4",value:17},{label:"Category 5",value:15},{label:"Category 6",value:10},{label:"Category 7",value:12},{label:"Category 8",value:17},{label:"Category 9",value:21}],colors:[e.palette.primary.main,e.palette.warning.dark,e.palette.success.darker,e.palette.error.main,e.palette.info.dark,e.palette.info.darker,e.palette.success.main,e.palette.warning.main,e.palette.info.main]}}),(0,b.jsx)(be,{title:"Recent Transitions",tableData:l.DX,tableLabels:[{id:"description",label:"Description"},{id:"date",label:"Date"},{id:"amount",label:"Amount"},{id:"status",label:"Status"},{id:""}]})]})}),(0,b.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,b.jsxs)(s.Z,{spacing:3,children:[(0,b.jsx)(L,{title:"Quick Transfer",list:l.Gz}),(0,b.jsx)(w,{title:"Contacts",subheader:"You have 122 contacts",list:l.Gz.slice(-5)}),(0,b.jsx)(Y,{price:"$50",title:"Invite friends \n and earn",description:"Praesent egestas tristique nibh. Duis lobortis massa imperdiet quam.",img:"/assets/illustrations/characters/character_11.png"})]})})]})})]})}},76221:function(e,t,n){n.d(t,{FK:function(){return o},e_:function(){return s},f2:function(){return a},oe:function(){return c},v1:function(){return l}});var i=n(31733),r=n.n(i);function o(e){return r()(e).format()}function s(e){return d(e?r()(e).format("$0,0.00"):"",".00")}function a(e){return d(e?r()(Number(e)/100).format("0.0%"):"",".0")}function l(e){return d(e?r()(e).format("0.00a"):"",".00")}function c(e){return d(e?r()(e).format("0.0 b"):"",".0")}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".00",n=e.includes(t);return n?e.replace(t,""):e}}}]);