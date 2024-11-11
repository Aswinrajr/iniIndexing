"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[5684],{49372:function(e,t,n){n.d(t,{fY:function(){return l},yM:function(){return d},hN:function(){return b}});var i=n(1413),a=n(64164),o=n(17551),r=n(67881),s=n(46417),l=(0,a.ZP)((function(e){return(0,s.jsx)(r.Z,(0,i.Z)({select:!0,SelectProps:{native:!0}},e))}))((function(e){var t=e.theme;return{"& fieldset":{display:"none"},"& select":(0,i.Z)((0,i.Z)({},t.typography.subtitle2),{},{padding:t.spacing(.5,0,.5,1),paddingRight:"28px !important"}),"& .MuiOutlinedInput-root":{borderRadius:.75*Number(t.shape.borderRadius),backgroundColor:(0,o.Fq)(t.palette.grey[500],.08)}}})),c=n(4942),d=(0,a.ZP)(r.Z,{shouldForwardProp:function(e){return"width"!==e}})((function(e){var t=e.width,n=e.theme;return{"& fieldset":{display:"none"},"& .MuiOutlinedInput-root":{width:t,border:"solid 1px ".concat((0,o.Fq)(n.palette.grey[500],.32)),transition:n.transitions.create(["box-shadow","width"],{duration:n.transitions.duration.shorter}),"&.Mui-focused":(0,i.Z)({boxShadow:n.customShadows.z20},t&&(0,c.Z)({},n.breakpoints.up("sm"),{width:t+60}))}}})),u=n(45987),p=n(75192),x=n.n(p),h=n(47313),f=n(62463),Z=n(18104),m=n(8730),v=["quantity","onIncrease","onDecrease","disabledIncrease","disabledDecrease","sx"],g=(0,h.forwardRef)((function(e,t){var n=e.quantity,a=e.onIncrease,r=e.onDecrease,l=e.disabledIncrease,c=e.disabledDecrease,d=e.sx,p=(0,u.Z)(e,v);return(0,s.jsxs)(f.Z,(0,i.Z)((0,i.Z)({ref:t,flexShrink:0,direction:"row",alignItems:"center",justifyContent:"space-between",sx:(0,i.Z)({mb:.5,py:.5,px:.75,width:96,borderRadius:1,border:function(e){return"solid 1px ".concat((0,o.Fq)(e.palette.grey[500],.32))}},d)},p),{},{children:[(0,s.jsx)(Z.Z,{size:"small",color:"inherit",onClick:r,disabled:c,sx:{color:"text.secondary"},children:(0,s.jsx)(m.Z,{icon:"eva:minus-fill",width:16})}),n,(0,s.jsx)(Z.Z,{size:"small",color:"inherit",onClick:a,disabled:l,sx:{color:"text.secondary"},children:(0,s.jsx)(m.Z,{icon:"eva:plus-fill",width:16})})]}))}));g.propTypes={sx:x().object,onDecrease:x().func,onIncrease:x().func,quantity:x().number,disabledDecrease:x().bool,disabledIncrease:x().bool};var b=g},50414:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var i=n(1413),a=n(93433),o=n(29439),r=n(47313),s=n(65964),l=n(16157),c=n(10679),d=n(82937),u=n(62463),p=n(42669),x=n(62111),h=n(48175),f=n(66281),Z=n(69904),m=n(8730),v=n(13280),g=n(50152),b=n(31357),j=n(29433),y=n(45987),w=n(78179),S=n(49316),C=n(41769),k=n(18104),M=n(81962),D=n(34940),R=n(41530),N=n(76221),I=n(75868),P=n(41034),T=n(22608),O=n(34345),A=n(46417),F=["file","onDelete","sx"];function W(e){var t,n=e.file,a=e.onDelete,s=e.sx,c=(0,y.Z)(e,F),d=(0,P.Ds)().enqueueSnackbar,x=(0,R.Z)().copy,h=(0,f.Z)("up","sm"),Z=(0,r.useState)(""),v=(0,o.Z)(Z,2),g=v[0],b=v[1],W=(0,r.useState)(null),_=(0,o.Z)(W,2),E=_[0],L=_[1],z=(0,r.useState)(n.isFavorited),U=(0,o.Z)(z,2),q=U[0],H=U[1],Y=(0,r.useState)(!1),B=(0,o.Z)(Y,2),G=B[0],J=B[1],$=(0,r.useState)(!1),Q=(0,o.Z)($,2),K=Q[0],V=Q[1],X=function(){H(!q)},ee=function(){V(!1)},te=function(){L(null)},ne=function(){d("Copied!"),x(n.url)};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(u.Z,(0,i.Z)((0,i.Z)({spacing:h?1.5:2,direction:h?"row":"column",alignItems:h?"center":"flex-start",sx:(0,i.Z)((0,i.Z)({p:2.5,borderRadius:2,position:"relative",border:function(e){return"solid 1px ".concat(e.palette.divider)},"&:hover":{bgcolor:"background.paper",boxShadow:function(e){return e.customShadows.z20}}},h&&{p:1.5,borderRadius:1.5}),s)},c),{},{children:[(0,A.jsx)(O.ZP,{file:n.type}),(0,A.jsxs)(u.Z,{onClick:function(){V(!0)},sx:{width:1,flexGrow:{sm:1},minWidth:{sm:"1px"}},children:[(0,A.jsx)(p.Z,{variant:"subtitle2",noWrap:!0,children:n.name}),(0,A.jsxs)(u.Z,{spacing:.75,direction:"row",alignItems:"center",sx:{typography:"caption",color:"text.disabled",mt:.5},children:[(0,A.jsxs)(l.Z,{children:[" ",(0,N.oe)(n.size)," "]}),(0,A.jsx)(l.Z,{sx:{width:2,height:2,borderRadius:"50%",bgcolor:"currentColor"}}),(0,A.jsxs)(l.Z,{children:[" ",(0,I.zM)(n.dateModified)," "]})]})]}),h&&(0,A.jsx)(w.Z,{max:4,sx:{mx:1.5,"& .MuiAvatarGroup-avatar":{width:24,height:24,"&:first-of-type":{fontSize:12}}},children:null===n||void 0===n||null===(t=n.shared)||void 0===t?void 0:t.map((function(e){return(0,A.jsx)(S.Z,{alt:e.name,src:e.avatar},e.id)}))}),(0,A.jsxs)(l.Z,{sx:(0,i.Z)({top:8,right:8,flexShrink:0,position:"absolute"},h&&{position:"unset"}),children:[(0,A.jsx)(C.Z,{color:"warning",icon:(0,A.jsx)(m.Z,{icon:"eva:star-outline"}),checkedIcon:(0,A.jsx)(m.Z,{icon:"eva:star-fill"}),checked:q,onChange:X,sx:{p:.75}}),(0,A.jsx)(k.Z,{color:E?"inherit":"default",onClick:function(e){L(e.currentTarget)},children:(0,A.jsx)(m.Z,{icon:"eva:more-vertical-fill"})})]})]})),(0,A.jsxs)(T.Z,{open:E,onClose:te,arrow:"right-top",sx:{width:160},children:[(0,A.jsxs)(M.Z,{onClick:function(){te(),ne()},children:[(0,A.jsx)(m.Z,{icon:"eva:link-2-fill"}),"Copy Link"]}),(0,A.jsxs)(M.Z,{onClick:function(){te(),J(!0)},children:[(0,A.jsx)(m.Z,{icon:"eva:share-fill"}),"Share"]}),(0,A.jsx)(D.Z,{sx:{borderStyle:"dashed"}}),(0,A.jsxs)(M.Z,{onClick:function(){te(),a()},sx:{color:"error.main"},children:[(0,A.jsx)(m.Z,{icon:"eva:trash-2-outline"}),"Delete"]})]}),(0,A.jsx)(j.m$,{item:n,favorited:q,onFavorite:X,onCopyLink:ne,open:K,onClose:ee,onDelete:function(){ee(),a()}}),(0,A.jsx)(j.c0,{open:G,shared:n.shared,inviteEmail:g,onChangeInvite:function(e){b(e.target.value)},onCopyLink:ne,onClose:function(){J(!1),b("")}})]})}var _=n(92484),E=n(29700),L=n(49372),z=n(47284),U=["title","subheader","chart"];function q(e){var t=e.title,n=e.subheader,a=e.chart,s=(0,y.Z)(e,U),c=a.labels,d=a.colors,u=a.series,p=a.options,x=(0,r.useState)("Week"),h=(0,o.Z)(x,2),f=h[0],Z=h[1],m=(0,z.Q8)((0,i.Z)({chart:{stacked:!0},colors:d,stroke:{width:0},xaxis:{categories:"Week"===f&&c.week||"Month"===f&&c.month||c.year},tooltip:{y:{formatter:function(e){return(0,N.oe)(e)}}},plotOptions:{bar:{borderRadius:("Week"===f?8:"Month"===f&&6)||10,columnWidth:"20%"}}},p));return(0,A.jsxs)(_.Z,(0,i.Z)((0,i.Z)({},s),{},{children:[(0,A.jsx)(E.Z,{title:t,subheader:n,action:(0,A.jsx)(L.fY,{value:f,onChange:function(e){return Z(e.target.value)},children:u.map((function(e){return(0,A.jsx)("option",{value:e.type,children:e.type},e.type)}))})}),u.map((function(e){return(0,A.jsx)(l.Z,{sx:{mt:3,mx:3},dir:"ltr",children:e.type===f&&(0,A.jsx)(z.ZP,{type:"bar",series:e.data,options:m,height:364})},e.type)}))]}))}var H=n(28566),Y=["title","value","total","icon","sx"];function B(e){var t=e.title,n=e.value,a=e.total,o=e.icon,r=e.sx,s=(0,y.Z)(e,Y);return(0,A.jsxs)(_.Z,(0,i.Z)((0,i.Z)({sx:(0,i.Z)({p:3},r)},s),{},{children:[(0,A.jsx)(l.Z,{component:"img",src:o,sx:{width:48,height:48}}),(0,A.jsx)(p.Z,{variant:"h6",sx:{mt:3},children:t}),(0,A.jsx)(H.Z,{value:24,variant:"determinate",color:"inherit",sx:{my:2,height:6,"&::before":{bgcolor:"background.neutral",opacity:1}}}),(0,A.jsxs)(u.Z,{direction:"row",spacing:.5,justifyContent:"flex-end",children:[(0,A.jsx)(l.Z,{component:"span",sx:{typography:"body2",color:"text.disabled"},children:(0,N.oe)(n)}),(0,A.jsx)(l.Z,{component:"span",sx:{typography:"subtitle2"},children:(0,N.oe)(a)})]})]}))}var G=n(605),J=n(59479),$=["sx"];function Q(e){var t=e.sx,n=(0,y.Z)(e,$);return(0,A.jsxs)(u.Z,(0,i.Z)((0,i.Z)({alignItems:"center",sx:(0,i.Z)({p:5,borderRadius:2,bgcolor:"background.neutral"},t)},n),{},{children:[(0,A.jsx)(J.$n,{}),(0,A.jsx)(G.Z,{size:"large",color:"warning",variant:"contained",sx:{mt:5,mb:2},children:"Upgrade Plan"}),(0,A.jsx)(p.Z,{variant:"caption",sx:{color:"text.disabled",textAlign:"center"},children:"Upgrade your plan and get more space"})]}))}var K=["data","total","chart"];function V(e){var t=e.data,n=e.total,a=e.chart,o=(0,y.Z)(e,K),r=(0,x.Z)(),s=a.colors,l=a.series,c=a.options,d=s||[r.palette.primary.light,r.palette.primary.main],h=(0,z.Q8)((0,i.Z)({chart:{offsetY:-16,sparkline:{enabled:!0}},grid:{padding:{top:24,bottom:24}},legend:{show:!1},plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"56%"},dataLabels:{name:{offsetY:8},value:{offsetY:-40},total:{label:"Used of ".concat((0,N.oe)(n)),color:r.palette.text.disabled,fontSize:r.typography.body2.fontSize,fontWeight:r.typography.body2.fontWeight}}}},fill:{type:"gradient",gradient:{colorStops:[d].map((function(e){return[{offset:0,color:e[0]},{offset:100,color:e[1]}]}))}}},c));return(0,A.jsxs)(_.Z,(0,i.Z)((0,i.Z)({},o),{},{children:[(0,A.jsx)(z.ZP,{type:"radialBar",series:[l],options:h,height:360}),(0,A.jsx)(u.Z,{spacing:3,sx:{p:3},children:t.map((function(e){return(0,A.jsxs)(u.Z,{spacing:2,direction:"row",alignItems:"center",children:[(0,A.jsx)(S.Z,{variant:"rounded",sx:{bgcolor:"background.neutral",width:48,height:48,borderRadius:1.5},children:e.icon}),(0,A.jsxs)(u.Z,{spacing:.5,flexGrow:1,children:[(0,A.jsxs)(p.Z,{variant:"subtitle2",children:[" ",e.name," "]}),(0,A.jsxs)(p.Z,{variant:"caption",sx:{color:"text.disabled"},children:[e.filesCount," files"]})]}),(0,A.jsxs)(p.Z,{variant:"subtitle2",children:[" ",(0,N.oe)(e.usedStorage)," "]})]},e.name)}))})]}))}var X=24e9,ee={week:["Mon","Tue","Web","Thu","Fri","Sat","Sun"],month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],year:["2018","2019","2020","2021","2022"]};function te(){var e=(0,x.Z)(),t=(0,f.Z)("down","sm"),n=(0,g.K$)().themeStretch,y=(0,r.useState)(""),w=(0,o.Z)(y,2),S=w[0],C=w[1],k=(0,r.useState)([]),M=(0,o.Z)(k,2),D=M[0],R=M[1],N=(0,r.useState)(!1),I=(0,o.Z)(N,2),P=I[0],T=I[1],O=(0,r.useState)(!1),F=(0,o.Z)(O,2),_=F[0],E=F[1],L=function(){T(!1)},z=(0,r.useCallback)((function(e){var t=e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}));R([].concat((0,a.Z)(D),(0,a.Z)(t)))}),[D]),U=(0,A.jsx)(V,{total:X,chart:{series:76},data:[{name:"Images",usedStorage:X/2,filesCount:223,icon:(0,A.jsx)(l.Z,{component:"img",src:"/assets/icons/files/ic_img.svg"})},{name:"Media",usedStorage:X/5,filesCount:223,icon:(0,A.jsx)(l.Z,{component:"img",src:"/assets/icons/files/ic_video.svg"})},{name:"Documents",usedStorage:X/5,filesCount:223,icon:(0,A.jsx)(l.Z,{component:"img",src:"/assets/icons/files/ic_document.svg"})},{name:"Other",usedStorage:X/10,filesCount:223,icon:(0,A.jsx)(m.Z,{icon:"eva:file-fill",width:24,sx:{color:"text.disabled"}})}]});return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(s.ql,{children:(0,A.jsx)("title",{children:" General: File | INTERNATIONAL JOURNAL INDEXING"})}),(0,A.jsx)(c.Z,{maxWidth:!n&&"xl",children:(0,A.jsxs)(d.ZP,{container:!0,spacing:3,children:[t&&(0,A.jsx)(d.ZP,{item:!0,xs:12,children:U}),(0,A.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,A.jsx)(B,{title:"Dropbox",value:X/10,total:X,icon:"/assets/icons/apps/ic_dropbox.svg"})}),(0,A.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,A.jsx)(B,{title:"Drive",value:X/5,total:X,icon:"/assets/icons/apps/ic_drive.svg"})}),(0,A.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,A.jsx)(B,{title:"OneDrive",value:X/2,total:X,icon:"/assets/icons/apps/ic_onedrive.svg"})}),(0,A.jsxs)(d.ZP,{item:!0,xs:12,md:6,lg:8,children:[(0,A.jsx)(q,{title:"Data Activity",chart:{labels:ee,colors:[e.palette.primary.main,e.palette.error.main,e.palette.warning.main,e.palette.text.disabled],series:[{type:"Week",data:[{name:"Images",data:[20,34,48,65,37,48]},{name:"Media",data:[10,34,13,26,27,28]},{name:"Documents",data:[10,14,13,16,17,18]},{name:"Other",data:[5,12,6,7,8,9]}]},{type:"Month",data:[{name:"Images",data:[10,34,13,56,77,88,99,77,45,12,43,34]},{name:"Media",data:[10,34,13,56,77,88,99,77,45,12,43,34]},{name:"Documents",data:[10,34,13,56,77,88,99,77,45,12,43,34]},{name:"Other",data:[10,34,13,56,77,88,99,77,45,12,43,34]}]},{type:"Year",data:[{name:"Images",data:[10,34,13,56,77]},{name:"Media",data:[10,34,13,56,77]},{name:"Documents",data:[10,34,13,56,77]},{name:"Other",data:[10,34,13,56,77]}]}]}}),(0,A.jsxs)("div",{children:[(0,A.jsx)(j.WO,{title:"Folders",link:h.vB.fileManager,onOpen:function(){T(!0)},sx:{mt:5}}),(0,A.jsx)(v.Z,{children:(0,A.jsx)(u.Z,{direction:"row",spacing:3,sx:{pb:3},children:Z.vg.map((function(e){return(0,A.jsx)(j.Fe,{folder:e,onDelete:function(){return console.log("DELETE",e.id)},sx:(0,i.Z)({},Z.vg.length>3&&{minWidth:222})},e.id)}))})}),(0,A.jsx)(j.WO,{title:"Recent Files",link:h.vB.fileManager,onOpen:function(){E(!0)},sx:{mt:2}}),(0,A.jsx)(u.Z,{spacing:2,children:Z.Ve.slice(0,5).map((function(e){return(0,A.jsx)(W,{file:e,onDelete:function(){return console.log("DELETE",e.id)}},e.id)}))})]})]}),(0,A.jsxs)(d.ZP,{item:!0,xs:12,md:6,lg:4,children:[(0,A.jsx)(b.un,{onDrop:z,placeholder:(0,A.jsxs)(u.Z,{spacing:.5,alignItems:"center",sx:{color:"text.disabled"},children:[(0,A.jsx)(m.Z,{icon:"eva:cloud-upload-fill",width:40}),(0,A.jsx)(p.Z,{variant:"body2",children:"Upload file"})]}),sx:{mb:3,py:2.5,width:"auto",height:"auto",borderRadius:1.5}}),(0,A.jsx)(l.Z,{sx:{display:{xs:"none",sm:"block"}},children:U}),(0,A.jsx)(Q,{sx:{mt:3}})]})]})}),(0,A.jsx)(j.UC,{open:_,onClose:function(){E(!1)}}),(0,A.jsx)(j.UC,{open:P,onClose:L,title:"New Folder",folderName:S,onChangeFolderName:function(e){C(e.target.value)},onCreate:function(){L(),C(""),console.log("CREATE NEW FOLDER",S)}})]})}},29700:function(e,t,n){n.d(t,{Z:function(){return y}});var i=n(4942),a=n(63366),o=n(87462),r=n(47313),s=n(83061),l=n(21921),c=n(42669),d=n(11236),u=n(64164),p=n(77430),x=n(32298);function h(e){return(0,x.Z)("MuiCardHeader",e)}var f=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),Z=n(46417),m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var n;return(0,o.Z)((n={},(0,i.Z)(n,"& .".concat(f.title),t.title),(0,i.Z)(n,"& .".concat(f.subheader),t.subheader),n),t.root)}})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=r.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiCardHeader"}),i=n.action,r=n.avatar,u=n.className,p=n.component,x=void 0===p?"div":p,f=n.disableTypography,y=void 0!==f&&f,w=n.subheader,S=n.subheaderTypographyProps,C=n.title,k=n.titleTypographyProps,M=(0,a.Z)(n,m),D=(0,o.Z)({},n,{component:x,disableTypography:y}),R=function(e){var t=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)}(D),N=C;null==N||N.type===c.Z||y||(N=(0,Z.jsx)(c.Z,(0,o.Z)({variant:r?"body2":"h5",className:R.title,component:"span",display:"block"},k,{children:N})));var I=w;return null==I||I.type===c.Z||y||(I=(0,Z.jsx)(c.Z,(0,o.Z)({variant:r?"body2":"body1",className:R.subheader,color:"text.secondary",component:"span",display:"block"},S,{children:I}))),(0,Z.jsxs)(v,(0,o.Z)({className:(0,s.Z)(R.root,u),as:x,ref:t,ownerState:D},M,{children:[r&&(0,Z.jsx)(g,{className:R.avatar,ownerState:D,children:r}),(0,Z.jsxs)(j,{className:R.content,ownerState:D,children:[N,I]}),i&&(0,Z.jsx)(b,{className:R.action,ownerState:D,children:i})]}))}))},66382:function(e,t,n){n.d(t,{Z:function(){return Z}});var i=n(63366),a=n(87462),o=n(47313),r=n(83061),s=n(21921),l=n(64164),c=n(11236),d=n(77430),u=n(32298);function p(e){return(0,u.Z)("MuiDialogActions",e)}(0,d.Z)("MuiDialogActions",["root","spacing"]);var x=n(46417),h=["className","disableSpacing"],f=(0,l.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return(0,a.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),Z=o.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiDialogActions"}),o=n.className,l=n.disableSpacing,d=void 0!==l&&l,u=(0,i.Z)(n,h),Z=(0,a.Z)({},n,{disableSpacing:d}),m=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return(0,s.Z)(n,p,t)}(Z);return(0,x.jsx)(f,(0,a.Z)({className:(0,r.Z)(m.root,o),ownerState:Z,ref:t},u))}))},71235:function(e,t,n){n.d(t,{Z:function(){return v}});var i=n(4942),a=n(63366),o=n(87462),r=n(47313),s=n(83061),l=n(21921),c=n(64164),d=n(11236),u=n(77430),p=n(32298);function x(e){return(0,p.Z)("MuiDialogContent",e)}(0,u.Z)("MuiDialogContent",["root","dividers"]);var h=n(9757),f=n(46417),Z=["className","dividers"],m=(0,c.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dividers&&t.dividers]}})((function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},n.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((t.vars||t).palette.divider),borderBottom:"1px solid ".concat((t.vars||t).palette.divider)}:(0,i.Z)({},".".concat(h.Z.root," + &"),{paddingTop:0}))})),v=r.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiDialogContent"}),i=n.className,r=n.dividers,c=void 0!==r&&r,u=(0,a.Z)(n,Z),p=(0,o.Z)({},n,{dividers:c}),h=function(e){var t=e.classes,n={root:["root",e.dividers&&"dividers"]};return(0,l.Z)(n,x,t)}(p);return(0,f.jsx)(m,(0,o.Z)({className:(0,s.Z)(h.root,i),ownerState:p,ref:t},u))}))},9757:function(e,t,n){n.d(t,{a:function(){return o}});var i=n(77430),a=n(32298);function o(e){return(0,a.Z)("MuiDialogTitle",e)}var r=(0,i.Z)("MuiDialogTitle",["root"]);t.Z=r}}]);