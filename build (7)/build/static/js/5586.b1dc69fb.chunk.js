"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[5586],{26253:function(e,t,n){n.d(t,{cU:function(){return I},i5:function(){return b},A0:function(){return u},ZP:function(){return R}});var i=n(44021),r=n(1413),o=n(64164),s=n(16157),a=n(62463),l=n(46417),c=(0,o.ZP)(s.Z,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{zIndex:9,display:"flex",alignItems:"center",justifyContent:"center",color:e.theme.palette.primary.main,"& li":{width:18,height:18,opacity:.32,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer","&.slick-active":(0,r.Z)({opacity:1},t&&{"& span":{width:16,borderRadius:6}})}}})),d=(0,o.ZP)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function u(e){var t=(null===e||void 0===e?void 0:e.rounded)||!1,n=null===e||void 0===e?void 0:e.sx;return{appendDots:function(i){return(0,l.jsx)(c,(0,r.Z)((0,r.Z)({component:"ul",rounded:t,sx:n},e),{},{children:i}))},customPaging:function(){return(0,l.jsx)(a.Z,{component:"div",alignItems:"center",justifyContent:"center",sx:{width:1,height:1},children:(0,l.jsx)(d,{sx:{bgcolor:"currentColor"}})})}}}var h=n(45987),x=n(17551),p=n(62111),Z=n(18104),f=n(8730);function m(e){var t=e.icon,n=void 0===t?"eva:arrow-ios-forward-fill":t,i=e.isRTL;return(0,l.jsx)(f.Z,{icon:n,sx:(0,r.Z)({width:20,height:20,transform:" scaleX(-1)"},i&&{transform:" scaleX(1)"})})}function g(e){var t=e.icon,n=void 0===t?"eva:arrow-ios-forward-fill":t,i=e.isRTL;return(0,l.jsx)(f.Z,{icon:n,sx:(0,r.Z)({width:20,height:20},i&&{transform:" scaleX(-1)"})})}var v=["shape","filled","icon","onNext","onPrevious","children","leftButtonProps","rightButtonProps","sx"],j=(0,o.ZP)(Z.Z,{shouldForwardProp:function(e){return"filled"!==e&&"hasChildren"!==e&&"shape"!==e}})((function(e){var t=e.filled,n=e.shape,i=e.hasChildren,o=e.theme;return(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({color:"inherit",transition:o.transitions.create("all",{duration:o.transitions.duration.shorter})},"rounded"===n&&{borderRadius:1.5*Number(o.shape.borderRadius)}),!t&&{opacity:.48,"&:hover":{opacity:1}}),t&&{color:(0,x.Fq)(o.palette.common.white,.8),backgroundColor:(0,x.Fq)(o.palette.grey[900],.48),"&:hover":{color:o.palette.common.white,backgroundColor:o.palette.grey[900]}}),i&&{zIndex:9,top:"50%",position:"absolute",marginTop:o.spacing(-2.5)})}));function b(e){var t=e.shape,n=void 0===t?"circular":t,i=e.filled,o=void 0!==i&&i,s=e.icon,c=e.onNext,d=e.onPrevious,u=e.children,x=e.leftButtonProps,Z=e.rightButtonProps,f=e.sx,b=(0,h.Z)(e,v),w="rtl"===(0,p.Z)().direction;return!!u?(0,l.jsxs)(a.Z,(0,r.Z)((0,r.Z)({sx:f},b),{},{children:[(0,l.jsx)(j,(0,r.Z)((0,r.Z)({filled:o,shape:n,hasChildren:!!u,onClick:d},x),{},{sx:(0,r.Z)({left:16},null===x||void 0===x?void 0:x.sx),children:(0,l.jsx)(m,{icon:s,isRTL:w})})),u,(0,l.jsx)(j,(0,r.Z)((0,r.Z)({filled:o,shape:n,hasChildren:!!u,onClick:c},Z),{},{sx:(0,r.Z)({right:16},null===Z||void 0===Z?void 0:Z.sx),children:(0,l.jsx)(g,{icon:s,isRTL:w})}))]})):(0,l.jsxs)(a.Z,(0,r.Z)((0,r.Z)({direction:"row",alignItems:"center",display:"inline-flex",sx:f},b),{},{children:[(0,l.jsx)(j,(0,r.Z)((0,r.Z)({filled:o,shape:n,onClick:d},x),{},{children:(0,l.jsx)(m,{icon:s,isRTL:w})})),(0,l.jsx)(j,(0,r.Z)((0,r.Z)({filled:o,shape:n,onClick:c},Z),{},{children:(0,l.jsx)(g,{icon:s,isRTL:w})}))]}))}var w=n(42669),y=n(50769),P=["index","total","onNext","onPrevious","icon","sx"],C=(0,o.ZP)(s.Z)((function(e){var t=e.theme;return(0,r.Z)((0,r.Z)({},(0,y.Ls)({opacity:.48,color:t.palette.grey[900]})),{},{zIndex:9,display:"inline-flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),padding:t.spacing(.25),color:t.palette.common.white,borderRadius:t.shape.borderRadius})})),k=(0,o.ZP)(Z.Z)({width:28,height:28,padding:0,opacity:.48,"&:hover":{opacity:1}});function I(e){var t=e.index,n=e.total,i=e.onNext,o=e.onPrevious,s=e.icon,a=e.sx,c=(0,h.Z)(e,P),d="rtl"===(0,p.Z)().direction;return(0,l.jsxs)(C,(0,r.Z)((0,r.Z)({sx:a},c),{},{children:[(0,l.jsx)(k,{color:"inherit",onClick:o,children:(0,l.jsx)(m,{icon:s,isRTL:d})}),(0,l.jsxs)(w.Z,{variant:"subtitle2",component:"span",sx:{mx:.25},children:[t+1,"/",n]}),(0,l.jsx)(k,{color:"inherit",onClick:i,children:(0,l.jsx)(g,{icon:s,isRTL:d})})]}))}var R=i.Z},49372:function(e,t,n){n.d(t,{fY:function(){return l},yM:function(){return d},hN:function(){return j}});var i=n(1413),r=n(64164),o=n(17551),s=n(67881),a=n(46417),l=(0,r.ZP)((function(e){return(0,a.jsx)(s.Z,(0,i.Z)({select:!0,SelectProps:{native:!0}},e))}))((function(e){var t=e.theme;return{"& fieldset":{display:"none"},"& select":(0,i.Z)((0,i.Z)({},t.typography.subtitle2),{},{padding:t.spacing(.5,0,.5,1),paddingRight:"28px !important"}),"& .MuiOutlinedInput-root":{borderRadius:.75*Number(t.shape.borderRadius),backgroundColor:(0,o.Fq)(t.palette.grey[500],.08)}}})),c=n(4942),d=(0,r.ZP)(s.Z,{shouldForwardProp:function(e){return"width"!==e}})((function(e){var t=e.width,n=e.theme;return{"& fieldset":{display:"none"},"& .MuiOutlinedInput-root":{width:t,border:"solid 1px ".concat((0,o.Fq)(n.palette.grey[500],.32)),transition:n.transitions.create(["box-shadow","width"],{duration:n.transitions.duration.shorter}),"&.Mui-focused":(0,i.Z)({boxShadow:n.customShadows.z20},t&&(0,c.Z)({},n.breakpoints.up("sm"),{width:t+60}))}}})),u=n(45987),h=n(75192),x=n.n(h),p=n(47313),Z=n(62463),f=n(18104),m=n(8730),g=["quantity","onIncrease","onDecrease","disabledIncrease","disabledDecrease","sx"],v=(0,p.forwardRef)((function(e,t){var n=e.quantity,r=e.onIncrease,s=e.onDecrease,l=e.disabledIncrease,c=e.disabledDecrease,d=e.sx,h=(0,u.Z)(e,g);return(0,a.jsxs)(Z.Z,(0,i.Z)((0,i.Z)({ref:t,flexShrink:0,direction:"row",alignItems:"center",justifyContent:"space-between",sx:(0,i.Z)({mb:.5,py:.5,px:.75,width:96,borderRadius:1,border:function(e){return"solid 1px ".concat((0,o.Fq)(e.palette.grey[500],.32))}},d)},h),{},{children:[(0,a.jsx)(f.Z,{size:"small",color:"inherit",onClick:s,disabled:c,sx:{color:"text.secondary"},children:(0,a.jsx)(m.Z,{icon:"eva:minus-fill",width:16})}),n,(0,a.jsx)(f.Z,{size:"small",color:"inherit",onClick:r,disabled:l,sx:{color:"text.secondary"},children:(0,a.jsx)(m.Z,{icon:"eva:plus-fill",width:16})})]}))}));v.propTypes={sx:x().object,onDecrease:x().func,onIncrease:x().func,quantity:x().number,disabledDecrease:x().bool,disabledIncrease:x().bool};var j=v},60656:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(1413),r=n(45987),o=n(62463),s=n(42669),a=n(59063),l=n(46417),c=["title","description","img","sx"];function d(e){var t=e.title,n=e.description,d=e.img,u=e.sx,h=(0,r.Z)(e,c);return(0,l.jsxs)(o.Z,(0,i.Z)((0,i.Z)({alignItems:"center",justifyContent:"center",sx:(0,i.Z)({height:1,textAlign:"center",p:function(e){return e.spacing(8,2)}},u)},h),{},{children:[(0,l.jsx)(a.Z,{disabledEffect:!0,alt:"empty content",src:d||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,l.jsx)(s.Z,{variant:"h5",gutterBottom:!0,children:t}),n&&(0,l.jsx)(s.Z,{variant:"body2",sx:{color:"text.secondary"},children:n})]}))}},54045:function(e,t,n){function i(e,t,n){return e>0?Math.max(0,(1+e)*t-n):0}function r(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function o(e,t){return"desc"===e?function(e,n){return r(e,n,t)}:function(e,n){return-r(e,n,t)}}n.d(t,{$W:function(){return Z},K:function(){return b},et:function(){return x},S_:function(){return D},Z4:function(){return k},fQ:function(){return i},sQ:function(){return o},x6:function(){return l}});var s=n(29439),a=n(47313);function l(e){var t=(0,a.useState)(!(null===e||void 0===e||!e.defaultDense)),n=(0,s.Z)(t,2),i=n[0],r=n[1],o=(0,a.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),l=(0,s.Z)(o,2),c=l[0],d=l[1],u=(0,a.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),h=(0,s.Z)(u,2),x=h[0],p=h[1],Z=(0,a.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),f=(0,s.Z)(Z,2),m=f[0],g=f[1],v=(0,a.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),j=(0,s.Z)(v,2),b=j[0],w=j[1],y=(0,a.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),P=(0,s.Z)(y,2),C=P[0],k=P[1],I=(0,a.useCallback)((function(e){""!==e&&(p(c===e&&"asc"===x?"desc":"asc"),d(e))}),[x,c]),R=(0,a.useCallback)((function(e){var t=C.indexOf(e),n=[];-1===t?n=n.concat(C,e):0===t?n=n.concat(C.slice(1)):t===C.length-1?n=n.concat(C.slice(0,-1)):t>0&&(n=n.concat(C.slice(0,t),C.slice(t+1))),k(n)}),[C]),S=(0,a.useCallback)((function(e,t){k(e?t:[])}),[]),A=(0,a.useCallback)((function(e,t){g(t)}),[]),D=(0,a.useCallback)((function(e){g(0),w(parseInt(e.target.value,10))}),[]),F=(0,a.useCallback)((function(e){r(e.target.checked)}),[]);return{dense:i,order:x,page:m,orderBy:c,rowsPerPage:b,selected:C,onSelectRow:R,onSelectAllRows:S,onSort:I,onChangePage:A,onChangeDense:F,onChangeRowsPerPage:D,setPage:g,setDense:r,setOrder:p,setOrderBy:d,setSelected:k,setRowsPerPage:w}}var c=n(59629),d=n(37982),u=n(60656),h=n(46417);function x(e){var t=e.isNotFound;return(0,h.jsx)(c.Z,{children:t?(0,h.jsx)(d.Z,{colSpan:12,children:(0,h.jsx)(u.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,h.jsx)(d.Z,{colSpan:12,sx:{p:0}})})}var p=n(1413);function Z(e){var t=e.emptyRows,n=e.height;return t?(0,h.jsx)(c.Z,{sx:(0,p.Z)({},n&&{height:n*t}),children:(0,h.jsx)(d.Z,{colSpan:9})}):null}var f=n(90495),m=n(41769),g=n(99780),v=n(16157),j={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function b(e){var t=e.order,n=e.orderBy,i=e.rowCount,r=void 0===i?0:i,o=e.headLabel,s=e.numSelected,a=void 0===s?0:s,l=e.onSort,u=e.onSelectAllRows,x=e.sx;return(0,h.jsx)(f.Z,{sx:x,children:(0,h.jsxs)(c.Z,{children:[u&&(0,h.jsx)(d.Z,{padding:"checkbox",children:(0,h.jsx)(m.Z,{indeterminate:a>0&&a<r,checked:r>0&&a===r,onChange:function(e){return u(e.target.checked)}})}),o.map((function(e){return(0,h.jsx)(d.Z,{align:e.align||"left",sortDirection:n===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:l?(0,h.jsxs)(g.Z,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:function(){return l(e.id)},sx:{textTransform:"capitalize"},children:[e.label,n===e.id?(0,h.jsx)(v.Z,{sx:(0,p.Z)({},j),children:"desc"===t?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var w=n(45987),y=n(62463),P=n(42669),C=["dense","action","rowCount","numSelected","onSelectAllRows","sx"];function k(e){var t=e.dense,n=e.action,i=e.rowCount,r=e.numSelected,o=e.onSelectAllRows,s=e.sx,a=(0,w.Z)(e,C);return r?(0,h.jsxs)(y.Z,(0,p.Z)((0,p.Z)({direction:"row",alignItems:"center",sx:(0,p.Z)((0,p.Z)({pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter"},t&&{height:38}),s)},a),{},{children:[(0,h.jsx)(m.Z,{indeterminate:r>0&&r<i,checked:i>0&&r===i,onChange:function(e){return o(e.target.checked)}}),(0,h.jsxs)(P.Z,{variant:"subtitle1",sx:(0,p.Z)({ml:2,flexGrow:1,color:"primary.main"},t&&{ml:3}),children:[r," selected"]}),n&&n]})):null}var I=n(73803),R=n(64558),S=n(11626),A=["dense","onChangeDense","rowsPerPageOptions","sx"];function D(e){var t=e.dense,n=e.onChangeDense,i=e.rowsPerPageOptions,r=void 0===i?[5,10,25]:i,o=e.sx,s=(0,w.Z)(e,A);return(0,h.jsxs)(v.Z,{sx:(0,p.Z)({position:"relative"},o),children:[(0,h.jsx)(I.Z,(0,p.Z)({rowsPerPageOptions:r,component:"div"},s)),n&&(0,h.jsx)(R.Z,{label:"Dense",control:(0,h.jsx)(S.Z,{checked:t,onChange:n}),sx:{pl:2,py:1.5,top:0,position:{md:"absolute"}}})]})}},45586:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ae}});var i=n(65964),r=n(10679),o=n(82937),s=n(605),a=n(62463),l=n(62111),c=n(12865),d=n(69904),u=n(50152),h=n(1413),x=n(45987),p=n(16157),Z=n(42669),f=n(76221),m=n(8730),g=n(47284),v=n(46417),j=["title","total","icon","color","chart","sx"];function b(e){var t=e.title,n=e.total,i=e.icon,r=e.color,o=void 0===r?"primary":r,s=e.chart,c=e.sx,d=(0,x.Z)(e,j),u=(0,l.Z)(),b=s.series,w=s.options,y=(0,g.Q8)((0,h.Z)({colors:[u.palette[o].light],chart:{sparkline:{enabled:!0}},legend:{show:!1},plotOptions:{radialBar:{hollow:{size:"78%"},track:{margin:0},dataLabels:{name:{show:!1},value:{offsetY:6,color:u.palette.common.white,fontSize:u.typography.subtitle2.fontSize}}}}},w));return(0,v.jsxs)(a.Z,(0,h.Z)((0,h.Z)({direction:"row",alignItems:"center",sx:(0,h.Z)({p:3,borderRadius:2,overflow:"hidden",position:"relative",color:"common.white",bgcolor:"".concat(o,".dark")},c)},d),{},{children:[(0,v.jsx)(g.ZP,{type:"radialBar",series:[b],options:y,width:86,height:86}),(0,v.jsxs)(p.Z,{sx:{ml:3},children:[(0,v.jsxs)(Z.Z,{variant:"h4",children:[" ",(0,f.FK)(n)]}),(0,v.jsx)(Z.Z,{variant:"body2",sx:{opacity:.72},children:t})]}),(0,v.jsx)(m.Z,{icon:i,sx:{width:120,height:120,opacity:.12,position:"absolute",right:u.spacing(-3)}})]}))}var w=n(4942),y=n(64164),P=n(50769),C=["title","description","action","img"],k=(0,y.ZP)("div")((function(e){var t=e.theme;return(0,w.Z)({height:"100%",display:"flex",overflow:"hidden",position:"relative",color:t.palette.primary.darker,borderRadius:2*Number(t.shape.borderRadius),flexDirection:"column"},t.breakpoints.up("md"),{flexDirection:"row"})})),I=(0,y.ZP)("div")((function(e){var t=e.theme;return{top:0,left:0,zIndex:-1,width:"100%",height:"100%",position:"absolute",backgroundColor:t.palette.common.white,"&:before":(0,h.Z)({top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:-2,content:'""',opacity:.2},(0,P.v3)({direction:"135deg",startColor:t.palette.primary.light,endColor:t.palette.primary.main}))}}));function R(e){var t=e.title,n=e.description,i=e.action,r=e.img,o=(0,x.Z)(e,C);return(0,v.jsxs)(k,(0,h.Z)((0,h.Z)({},o),{},{children:[(0,v.jsxs)(a.Z,{flexGrow:1,justifyContent:"center",alignItems:{xs:"center",md:"flex-start"},sx:{pl:5,py:{xs:5,md:0},pr:{xs:5,md:0},textAlign:{xs:"center",md:"left"}},children:[(0,v.jsx)(Z.Z,{paragraph:!0,variant:"h4",sx:{whiteSpace:"pre-line"},children:t}),(0,v.jsx)(Z.Z,{variant:"body2",sx:{opacity:.8,mb:{xs:3,xl:5}},children:n}),i&&i]}),r&&r,(0,v.jsx)(I,{})]}))}var S=n(29439),A=n(89631),D=n(47313),F=n(17551),T=n(92484),N=n(77449),L=n(59063),O=n(55410),z=n(26253),_=["list"],M=(0,y.ZP)("div")((function(e){var t=e.theme;return{top:0,left:0,right:0,bottom:0,zIndex:8,position:"absolute",backgroundColor:(0,F.Fq)(t.palette.grey[900],.64)}}));function W(e){var t=e.list,n=(0,x.Z)(e,_),i=(0,l.Z)(),r=(0,D.useRef)(null),o=(0,D.useState)("rtl"===i.direction?t.length-1:0),s=(0,S.Z)(o,2),a=s[0],c=s[1],d=(0,h.Z)({speed:800,dots:!0,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===i.direction),beforeChange:function(e,t){return c(t)}},(0,z.A0)({sx:{top:20,left:20,position:"absolute"}}));return(0,v.jsxs)(T.Z,(0,h.Z)((0,h.Z)({},n),{},{children:[(0,v.jsx)(z.ZP,(0,h.Z)((0,h.Z)({ref:r},d),{},{children:t.map((function(e,t){return(0,v.jsx)(q,{item:e,isActive:t===a},e.id)}))})),(0,v.jsx)(z.i5,{onNext:function(){var e;null===(e=r.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=r.current)||void 0===e||e.slickPrev()},sx:{top:8,right:8,position:"absolute",color:"common.white"}})]}))}function q(e){var t=e.item,n=e.isActive,i=t.image,r=t.title,o=t.description;return(0,v.jsxs)(O.NM,{action:!0,animate:n,sx:{position:"relative"},children:[(0,v.jsxs)(a.Z,{spacing:1,sx:{p:3,width:1,bottom:0,zIndex:9,textAlign:"left",position:"absolute",color:"common.white"},children:[(0,v.jsx)(A.m.div,{variants:(0,O.EU)().inRight,children:(0,v.jsx)(Z.Z,{variant:"overline",component:"div",sx:{opacity:.48},children:"Featured App"})}),(0,v.jsx)(A.m.div,{variants:(0,O.EU)().inRight,children:(0,v.jsx)(N.Z,{color:"inherit",underline:"none",children:(0,v.jsx)(Z.Z,{variant:"h5",noWrap:!0,children:r})})}),(0,v.jsx)(A.m.div,{variants:(0,O.EU)().inRight,children:(0,v.jsx)(Z.Z,{variant:"body2",noWrap:!0,children:o})})]}),(0,v.jsx)(M,{}),(0,v.jsx)(L.Z,{alt:r,src:i,sx:{height:{xs:280,xl:320}}})]})}var B=n(46725),E=n(29700),K=n(39874),G=n(44874),U=n(53805),Q=n(34940),X=n(59629),J=n(37982),Y=n(18104),$=n(81962),V=n(86259),H=n(13280),ee=n(22608),te=n(54045),ne=["title","subheader","tableData","tableLabels"];function ie(e){var t=e.title,n=e.subheader,i=e.tableData,r=e.tableLabels,o=(0,x.Z)(e,ne);return(0,v.jsxs)(T.Z,(0,h.Z)((0,h.Z)({},o),{},{children:[(0,v.jsx)(E.Z,{title:t,subheader:n,sx:{mb:3}}),(0,v.jsx)(K.Z,{sx:{overflow:"unset"},children:(0,v.jsx)(H.Z,{children:(0,v.jsxs)(G.Z,{sx:{minWidth:720},children:[(0,v.jsx)(te.K,{headLabel:r}),(0,v.jsx)(U.Z,{children:i.map((function(e){return(0,v.jsx)(re,{row:e},e.id)}))})]})})}),(0,v.jsx)(Q.Z,{}),(0,v.jsx)(p.Z,{sx:{p:2,textAlign:"right"},children:(0,v.jsx)(s.Z,{size:"small",color:"inherit",endIcon:(0,v.jsx)(m.Z,{icon:"eva:arrow-ios-forward-fill"}),children:"View All"})})]}))}function re(e){var t=e.row,n=(0,D.useState)(null),i=(0,S.Z)(n,2),r=i[0],o=i[1],s=function(){o(null)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(X.Z,{children:[(0,v.jsx)(J.Z,{children:"INV-".concat(t.id)}),(0,v.jsx)(J.Z,{children:t.category}),(0,v.jsx)(J.Z,{children:(0,f.e_)(t.price)}),(0,v.jsx)(J.Z,{children:(0,v.jsx)(V.Z,{variant:"soft",color:("in_progress"===t.status?"warning":"out_of_date"===t.status&&"error")||"success",children:(0,B.G)(t.status)})}),(0,v.jsx)(J.Z,{align:"right",children:(0,v.jsx)(Y.Z,{color:r?"inherit":"default",onClick:function(e){o(e.currentTarget)},children:(0,v.jsx)(m.Z,{icon:"eva:more-vertical-fill"})})})]}),(0,v.jsxs)(ee.Z,{open:r,onClose:s,arrow:"right-top",sx:{width:160},children:[(0,v.jsxs)($.Z,{onClick:function(){s(),console.log("DOWNLOAD",t.id)},children:[(0,v.jsx)(m.Z,{icon:"eva:download-fill"}),"Download"]}),(0,v.jsxs)($.Z,{onClick:function(){s(),console.log("PRINT",t.id)},children:[(0,v.jsx)(m.Z,{icon:"eva:printer-fill"}),"Print"]}),(0,v.jsxs)($.Z,{onClick:function(){s(),console.log("SHARE",t.id)},children:[(0,v.jsx)(m.Z,{icon:"eva:share-fill"}),"Share"]}),(0,v.jsx)(Q.Z,{sx:{borderStyle:"dashed"}}),(0,v.jsxs)($.Z,{onClick:function(){s(),console.log("DELETE",t.id)},sx:{color:"error.main"},children:[(0,v.jsx)(m.Z,{icon:"eva:trash-2-outline"}),"Delete"]})]})]})}var oe=n(68520),se=n.n(oe),ae=n(49316),le=["title","subheader","list"];function ce(e){var t=e.title,n=e.subheader,i=e.list,r=(0,x.Z)(e,le);return(0,v.jsxs)(T.Z,(0,h.Z)((0,h.Z)({},r),{},{children:[(0,v.jsx)(E.Z,{title:t,subheader:n}),(0,v.jsx)(a.Z,{spacing:3,sx:{p:3},children:se()(i,["favourite"],["desc"]).map((function(e,t){return(0,v.jsx)(de,{author:e,index:t},e.id)}))})]}))}function de(e){var t=e.author,n=e.index;return(0,v.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,v.jsx)(ae.Z,{alt:t.name,src:t.avatar}),(0,v.jsxs)(p.Z,{sx:{flexGrow:1},children:[(0,v.jsx)(Z.Z,{variant:"subtitle2",children:t.name}),(0,v.jsxs)(Z.Z,{variant:"caption",sx:{mt:.5,display:"flex",alignItems:"center",color:"text.secondary"},children:[(0,v.jsx)(m.Z,{icon:"eva:heart-fill",width:16,sx:{mr:.5}}),(0,f.v1)(t.favourite)]})]}),(0,v.jsx)(m.Z,{icon:"ant-design:trophy-filled",sx:(0,h.Z)((0,h.Z)({p:1,width:40,height:40,borderRadius:"50%",color:"primary.main",bgcolor:function(e){return(0,F.Fq)(e.palette.primary.main,.08)}},1===n&&{color:"info.main",bgcolor:function(e){return(0,F.Fq)(e.palette.info.main,.08)}}),2===n&&{color:"error.main",bgcolor:function(e){return(0,F.Fq)(e.palette.error.main,.08)}})})]})}var ue=n(29955),he=["title","subheader","list"];function xe(e){var t=e.title,n=e.subheader,i=e.list,r=(0,x.Z)(e,he);return(0,v.jsxs)(T.Z,(0,h.Z)((0,h.Z)({},r),{},{children:[(0,v.jsx)(E.Z,{title:t,subheader:n}),(0,v.jsx)(H.Z,{children:(0,v.jsx)(a.Z,{spacing:3,sx:{p:3,pr:0},children:i.map((function(e){return(0,v.jsx)(pe,{app:e},e.id)}))})})]}))}function pe(e){var t=e.app,n=t.shortcut,i=t.system,r=t.price,o=t.rating,s=t.review,l=t.name;return(0,v.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,v.jsx)(p.Z,{sx:{width:48,height:48,flexShrink:0,display:"flex",borderRadius:1.5,alignItems:"center",justifyContent:"center",bgcolor:"background.neutral"},children:(0,v.jsx)(p.Z,{component:"img",src:n,sx:{width:24,height:24}})}),(0,v.jsxs)(p.Z,{sx:{flexGrow:1,minWidth:160},children:[(0,v.jsx)(Z.Z,{variant:"subtitle2",children:l}),(0,v.jsxs)(a.Z,{direction:"row",alignItems:"center",sx:{mt:.5,color:"text.secondary"},children:[(0,v.jsx)(m.Z,{width:16,icon:"Mac"===i?"ant-design:apple-filled":"ant-design:windows-filled"}),(0,v.jsx)(Z.Z,{variant:"caption",sx:{ml:.5,mr:1},children:i}),(0,v.jsx)(V.Z,{variant:"soft",color:0===r?"success":"error",children:0===r?"Free":(0,f.e_)(r)})]})]}),(0,v.jsxs)(a.Z,{alignItems:"flex-end",sx:{pr:3},children:[(0,v.jsx)(ue.Z,{readOnly:!0,size:"small",precision:.5,name:"reviews",value:o}),(0,v.jsxs)(Z.Z,{variant:"caption",sx:{mt:.5,color:"text.secondary"},children:[(0,f.v1)(s)," reviews"]})]})]})}var Ze=n(49372),fe=["title","subheader","chart"];function me(e){var t=e.title,n=e.subheader,i=e.chart,r=(0,x.Z)(e,fe),o=i.colors,s=i.categories,a=i.series,l=i.options,c=(0,D.useState)("2019"),d=(0,S.Z)(c,2),u=d[0],Z=d[1],f=(0,g.Q8)((0,h.Z)({colors:o,xaxis:{categories:s}},l));return(0,v.jsxs)(T.Z,(0,h.Z)((0,h.Z)({},r),{},{children:[(0,v.jsx)(E.Z,{title:t,subheader:n,action:(0,v.jsx)(Ze.fY,{value:u,onChange:function(e){return Z(e.target.value)},children:a.map((function(e){return(0,v.jsx)("option",{value:e.year,children:e.year},e.year)}))})}),a.map((function(e){return(0,v.jsx)(p.Z,{sx:{mt:3,mx:3},dir:"ltr",children:e.year===u&&(0,v.jsx)(g.ZP,{type:"line",series:e.data,options:f,height:364})},e.year)}))]}))}var ge=["title","percent","total","chart","sx"];function ve(e){var t=e.title,n=e.percent,i=e.total,r=e.chart,o=e.sx,s=(0,x.Z)(e,ge),a=r.colors,l=r.series,c=r.options,d=(0,h.Z)({colors:a,chart:{sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"68%",borderRadius:2}},tooltip:{x:{show:!1},y:{formatter:function(e){return(0,f.FK)(e)},title:{formatter:function(){return""}}},marker:{show:!1}}},c);return(0,v.jsxs)(T.Z,(0,h.Z)((0,h.Z)({sx:(0,h.Z)({display:"flex",alignItems:"center",p:3},o)},s),{},{children:[(0,v.jsxs)(p.Z,{sx:{flexGrow:1},children:[(0,v.jsx)(Z.Z,{variant:"subtitle2",children:t}),(0,v.jsx)(je,{percent:n}),(0,v.jsx)(Z.Z,{variant:"h3",children:(0,f.FK)(i)})]}),(0,v.jsx)(g.ZP,{type:"bar",series:[{data:l}],options:d,width:60,height:36})]}))}function je(e){var t=e.percent;return(0,v.jsxs)(a.Z,{direction:"row",alignItems:"center",sx:{mt:2,mb:1},children:[(0,v.jsx)(m.Z,{icon:t<0?"eva:trending-down-fill":"eva:trending-up-fill",sx:(0,h.Z)({mr:1,p:.5,width:24,height:24,borderRadius:"50%",color:"success.main",bgcolor:function(e){return(0,F.Fq)(e.palette.success.main,.16)}},t<0&&{color:"error.main",bgcolor:function(e){return(0,F.Fq)(e.palette.error.main,.16)}})}),(0,v.jsxs)(Z.Z,{component:"div",variant:"subtitle2",children:[t>0&&"+",(0,f.f2)(t)]})]})}var be=["title","subheader","chart"],we=(0,y.ZP)("div")((function(e){var t=e.theme;return{height:400,marginTop:t.spacing(5),"& .apexcharts-canvas svg":{height:400},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(328,"px) !important")}}}));function ye(e){var t=e.title,n=e.subheader,i=e.chart,r=(0,x.Z)(e,be),o=(0,l.Z)(),s=i.colors,a=i.series,c=i.options,d=a.map((function(e){return e.value})),u=(0,g.Q8)((0,h.Z)({chart:{sparkline:{enabled:!0}},colors:s,labels:a.map((function(e){return e.label})),stroke:{colors:[o.palette.background.paper]},legend:{floating:!0,horizontalAlign:"center"},tooltip:{fillSeriesColor:!1,y:{formatter:function(e){return(0,f.FK)(e)},title:{formatter:function(e){return"".concat(e)}}}},plotOptions:{pie:{donut:{size:"90%",labels:{value:{formatter:function(e){return(0,f.FK)(e)}},total:{formatter:function(e){var t=e.globals.seriesTotals.reduce((function(e,t){return e+t}),0);return(0,f.FK)(t)}}}}}}},c));return(0,v.jsxs)(T.Z,(0,h.Z)((0,h.Z)({},r),{},{children:[(0,v.jsx)(E.Z,{title:t,subheader:n}),(0,v.jsx)(we,{dir:"ltr",children:(0,v.jsx)(g.ZP,{type:"donut",series:d,options:u,height:280})})]}))}var Pe=["title","subheader","list"],Ce=(0,y.ZP)((function(e){return(0,v.jsx)(a.Z,(0,h.Z)({direction:"row",alignItems:"center"},e))}))({minWidth:72,flex:"1 1"}),ke=(0,y.ZP)(m.Z)((function(e){var t=e.theme;return{width:16,height:16,marginRight:t.spacing(.5),color:t.palette.text.disabled}}));function Ie(e){var t=e.title,n=e.subheader,i=e.list,r=(0,x.Z)(e,Pe);return(0,v.jsxs)(T.Z,(0,h.Z)((0,h.Z)({},r),{},{children:[(0,v.jsx)(E.Z,{title:t,subheader:n}),(0,v.jsx)(H.Z,{children:(0,v.jsx)(a.Z,{spacing:3,sx:{p:3},children:i.map((function(e){return(0,v.jsx)(Re,{country:e},e.id)}))})})]}))}function Re(e){var t=e.country;return(0,v.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,v.jsxs)(Ce,{sx:{minWidth:120},children:[(0,v.jsx)(L.Z,{disabledEffect:!0,alt:t.name,src:t.flag,sx:{width:28,mr:1}}),(0,v.jsx)(Z.Z,{variant:"subtitle2",children:t.name})]}),(0,v.jsxs)(Ce,{children:[(0,v.jsx)(ke,{icon:"ant-design:android-filled"}),(0,v.jsx)(Z.Z,{variant:"body2",children:(0,f.v1)(t.android)})]}),(0,v.jsxs)(Ce,{children:[(0,v.jsx)(ke,{icon:"ant-design:windows-filled"}),(0,v.jsx)(Z.Z,{variant:"body2",children:(0,f.v1)(t.windows)})]}),(0,v.jsxs)(Ce,{sx:{minWidth:88},children:[(0,v.jsx)(ke,{icon:"ant-design:apple-filled"}),(0,v.jsx)(Z.Z,{variant:"body2",children:(0,f.v1)(t.windows)})]})]})}var Se=n(59479);function Ae(){var e=(0,c.E)().user,t=(0,l.Z)(),n=(0,u.K$)().themeStretch;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i.ql,{children:(0,v.jsx)("title",{children:" General: App | INTERNATIONAL JOURNAL INDEXING"})}),(0,v.jsx)(r.Z,{maxWidth:!n&&"xl",children:(0,v.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,v.jsx)(o.ZP,{item:!0,xs:12,md:8,children:(0,v.jsx)(R,{title:"Welcome back! \n ".concat(null===e||void 0===e?void 0:e.displayName),description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.",img:(0,v.jsx)(Se.XI,{sx:{p:3,width:360,margin:{xs:"auto",md:"inherit"}}}),action:(0,v.jsx)(s.Z,{variant:"contained",children:"Go Now"})})}),(0,v.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,v.jsx)(W,{list:d.$M})}),(0,v.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,v.jsx)(ve,{title:"Total Active Users",percent:2.6,total:18765,chart:{colors:[t.palette.primary.main],series:[5,18,12,51,68,11,39,37,27,20]}})}),(0,v.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,v.jsx)(ve,{title:"Total Installed",percent:.2,total:4876,chart:{colors:[t.palette.info.main],series:[20,41,63,33,28,35,50,46,11,26]}})}),(0,v.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,v.jsx)(ve,{title:"Total Downloads",percent:-.1,total:678,chart:{colors:[t.palette.warning.main],series:[8,9,31,8,16,37,8,33,46,31]}})}),(0,v.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,v.jsx)(ye,{title:"Current Download",chart:{colors:[t.palette.primary.main,t.palette.info.main,t.palette.error.main,t.palette.warning.main],series:[{label:"Mac",value:12244},{label:"Window",value:53345},{label:"iOS",value:44313},{label:"Android",value:78343}]}})}),(0,v.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,v.jsx)(me,{title:"Area Installed",subheader:"(+43%) than last year",chart:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],series:[{year:"2019",data:[{name:"Asia",data:[10,41,35,51,49,62,69,91,148]},{name:"America",data:[10,34,13,56,77,88,99,77,45]}]},{year:"2020",data:[{name:"Asia",data:[148,91,69,62,49,51,35,41,10]},{name:"America",data:[45,77,99,88,77,56,13,34,10]}]}]}})}),(0,v.jsx)(o.ZP,{item:!0,xs:12,lg:8,children:(0,v.jsx)(ie,{title:"New Invoice",tableData:d.fY,tableLabels:[{id:"id",label:"Invoice ID"},{id:"category",label:"Category"},{id:"price",label:"Price"},{id:"status",label:"Status"},{id:""}]})}),(0,v.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,v.jsx)(xe,{title:"Top Related Applications",list:d.Wc})}),(0,v.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,v.jsx)(Ie,{title:"Top Installed Countries",list:d.bt})}),(0,v.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,v.jsx)(ce,{title:"Top Authors",list:d.Id})}),(0,v.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,v.jsxs)(a.Z,{spacing:3,children:[(0,v.jsx)(b,{title:"Conversion",total:38566,icon:"eva:person-fill",chart:{series:48}}),(0,v.jsx)(b,{title:"Applications",total:55566,icon:"eva:email-fill",color:"info",chart:{series:75}})]})})]})})]})}},76221:function(e,t,n){n.d(t,{FK:function(){return o},e_:function(){return s},f2:function(){return a},oe:function(){return c},v1:function(){return l}});var i=n(31733),r=n.n(i);function o(e){return r()(e).format()}function s(e){return d(e?r()(e).format("$0,0.00"):"",".00")}function a(e){return d(e?r()(Number(e)/100).format("0.0%"):"",".0")}function l(e){return d(e?r()(e).format("0.00a"):"",".00")}function c(e){return d(e?r()(e).format("0.0 b"):"",".0")}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".00",n=e.includes(t);return n?e.replace(t,""):e}}}]);