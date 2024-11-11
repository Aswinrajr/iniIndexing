"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[5019],{16035:function(e,t,n){n.d(t,{b8:function(){return v},ZQ:function(){return l},tR:function(){return b}});var r=n(17551),o=n(62463),i=n(16157),a=n(42669),c=n(46417);function l(e){var t=e.colors,n=e.limit,l=void 0===n?3:n,s=e.sx,d=t.slice(0,l),u=t.length-l;return(0,c.jsxs)(o.Z,{component:"span",direction:"row",alignItems:"center",justifyContent:"flex-end",sx:s,children:[d.map((function(e,t){return(0,c.jsx)(i.Z,{sx:{ml:-.75,width:16,height:16,borderRadius:"50%",border:function(e){return"solid 2px ".concat(e.palette.background.paper)},boxShadow:function(e){return"inset -1px 1px 2px ".concat((0,r.Fq)(e.palette.common.black,.24))},bgcolor:e}},e+t)})),t.length>l&&(0,c.jsx)(a.Z,{variant:"subtitle2",children:"+".concat(u)})]})}var s=n(1413),d=n(45987),u=n(41769),f=n(8730),h=["checked","whiteColor","sx"];function p(e){var t=e.checked,n=e.whiteColor,o=e.sx,a=(0,d.Z)(e,h),l=(0,c.jsx)(i.Z,{sx:{width:1,height:1,opacity:.48,borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"}}),u=(0,c.jsx)(f.Z,{icon:"eva:checkmark-fill",sx:(0,s.Z)({opacity:0},t&&(0,s.Z)({opacity:1,color:"common.white"},n&&{color:"common.black"}))});return(0,c.jsxs)(i.Z,(0,s.Z)((0,s.Z)({sx:(0,s.Z)((0,s.Z)((0,s.Z)({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(e){return e.transitions.create("all",{duration:e.transitions.duration.shortest})}},n&&{border:function(e){return"solid 1px ".concat(e.palette.divider)},boxShadow:function(e){return"4px 4px 8px 0 ".concat((0,r.Fq)(e.palette.grey[500],.24))}}),t&&{transform:"scale(1.4)"}),o)},a),{},{children:[t&&l,u]}))}var x=["colors","selected","onChangeColor","sx"];function v(e){var t=e.colors,n=e.selected,r=e.onChangeColor,o=e.sx,a=(0,d.Z)(e,x);return(0,c.jsx)(i.Z,{sx:o,children:t.map((function(e){var t="#FFFFFF"===e||"white"===e;return(0,c.jsx)(u.Z,(0,s.Z)({size:"small",value:e,color:"default",checked:n.includes(e),onChange:function(){return r(e)},icon:(0,c.jsx)(p,{whiteColor:t}),checkedIcon:(0,c.jsx)(p,{checked:!0,whiteColor:t}),sx:{color:e,"&:hover":{opacity:.72},"& svg":{width:12,height:12}}},a),e)}))})}var Z=n(47313),g=n(7481),y=n(32670),m=["colors"],b=(0,Z.forwardRef)((function(e,t){var n=e.colors,r=(0,d.Z)(e,m);return(0,c.jsx)(g.Z,(0,s.Z)((0,s.Z)({row:!0,ref:t},r),{},{children:n.map((function(e){var t="#FFFFFF"===e||"white"===e;return(0,c.jsx)(y.Z,{value:e,color:"default",icon:(0,c.jsx)(p,{whiteColor:t}),checkedIcon:(0,c.jsx)(p,{checked:!0,whiteColor:t}),sx:{color:e,"&:hover":{opacity:.72},"& svg":{width:12,height:12}}},e)}))}))}))},48669:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(1413),o=n(45987),i=n(16157),a=n(62463),c=n(42669),l=n(80493),s=n(77449),d=n(2135),u=n(46417);function f(e){var t=e.link,n=e.activeLast,o=e.disabled,a=t.name,c=t.href,l=t.icon,f=(0,r.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},o&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),a]});return c?(0,u.jsx)(s.Z,{component:d.rU,to:c,sx:f,children:h}):(0,u.jsxs)(i.Z,{sx:f,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function p(e){var t=e.links,n=e.action,d=e.heading,p=e.moreLink,v=e.activeLast,Z=e.sx,g=(0,o.Z)(e,h),y=t[t.length-1].name;return(0,u.jsxs)(i.Z,{sx:(0,r.Z)({mb:5},Z),children:[(0,u.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(i.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:d}),!!t.length&&(0,u.jsx)(l.Z,(0,r.Z)((0,r.Z)({separator:(0,u.jsx)(x,{})},g),{},{children:t.map((function(e){return(0,u.jsx)(f,{link:e,activeLast:v,disabled:e.name===y},e.name||"")}))}))]}),n&&(0,u.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!p&&(0,u.jsx)(i.Z,{sx:{mt:2},children:p.map((function(e){return(0,u.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,u.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},72805:function(e,t,n){n.d(t,{Z:function(){return r.Z}});var r=n(48669)},95873:function(e,t,n){n.d(t,{Z:function(){return D},w:function(){return d}});var r=n(29439),o=n(47313),i=n(33532),a=n(8121),c=n(3051),l=n(98789),s=n(75868);function d(e,t){var n=(0,o.useState)(!1),d=(0,r.Z)(n,2),u=d[0],f=d[1],h=(0,o.useState)(t),p=(0,r.Z)(h,2),x=p[0],v=p[1],Z=(0,o.useState)(e),g=(0,r.Z)(Z,2),y=g[0],m=g[1],b=y&&x&&(0,i.Z)(new Date(x),new Date(y))||!1,j=(new Date).getFullYear(),w=y?(0,a.Z)(y):null,C=x?(0,a.Z)(x):null,D=j===w&&j===C,M=!(!y||!x)&&(0,c.Z)(new Date(y),new Date(x)),k=!(!y||!x)&&(0,l.Z)(new Date(y),new Date(x)),S="".concat((0,s.Mu)(y)," - ").concat((0,s.Mu)(x));return{startDate:y,endDate:x,onChangeStartDate:function(e){m(e)},onChangeEndDate:function(e){b&&v(null),v(e)},open:u,onOpen:function(){return f(!0)},onClose:function(){return f(!1)},onReset:function(){m(null),v(null)},isSelected:!!y&&!!x,isError:b,label:S||"",shortLabel:(D?k?M?(0,s.Mu)(x,"dd MMM yy"):"".concat((0,s.Mu)(y,"dd")," - ").concat((0,s.Mu)(x,"dd MMM yy")):"".concat((0,s.Mu)(y,"dd MMM")," - ").concat((0,s.Mu)(x,"dd MMM yy")):"".concat((0,s.Mu)(y,"dd MMM yy")," - ").concat((0,s.Mu)(x,"dd MMM yy")))||"",setStartDate:m,setEndDate:v}}var u=n(1413),f=n(57631),h=n(5448),p=n(71235),x=n(62463),v=n(80654),Z=n(67881),g=n(48569),y=n(66382),m=n(605),b=n(35426),j=n(63686),w=n(66281),C=n(46417);function D(e){var t=e.title,n=void 0===t?"Select date range":t,r=e.variant,o=void 0===r?"input":r,i=e.startDate,a=e.endDate,c=e.onChangeStartDate,l=e.onChangeEndDate,s=e.open,d=e.onClose,D=e.isError,M=(0,w.Z)("up","md"),k="calendar"===o;return(0,C.jsxs)(f.Z,{fullWidth:!0,maxWidth:!k&&"xs",open:s,onClose:d,PaperProps:{sx:(0,u.Z)({},k&&{maxWidth:720})},children:[(0,C.jsx)(h.Z,{sx:{pb:2},children:n}),(0,C.jsxs)(p.Z,{sx:(0,u.Z)({},k&&M&&{overflow:"unset"}),children:[(0,C.jsx)(x.Z,{spacing:k?3:2,direction:k&&M?"row":"column",justifyContent:"center",sx:{pt:1,"& .MuiCalendarPicker-root":(0,u.Z)({},!M&&{width:"auto"})},children:k?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(v.Z,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:(0,C.jsx)(b.h,{date:i,onChange:c})}),(0,C.jsx)(v.Z,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:(0,C.jsx)(b.h,{date:a,onChange:l})})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(j.M,{label:"Start date",value:i,onChange:c,renderInput:function(e){return(0,C.jsx)(Z.Z,(0,u.Z)({},e))}}),(0,C.jsx)(j.M,{label:"End date",value:a,onChange:l,renderInput:function(e){return(0,C.jsx)(Z.Z,(0,u.Z)({},e))}})]})}),D&&(0,C.jsx)(g.Z,{error:!0,sx:{px:2},children:"End date must be later than start date"})]}),(0,C.jsxs)(y.Z,{children:[(0,C.jsx)(m.Z,{variant:"outlined",color:"inherit",onClick:d,children:"Cancel"}),(0,C.jsx)(m.Z,{disabled:D,variant:"contained",onClick:d,children:"Apply"})]})]})}},65019:function(e,t,n){n.r(t),n.d(t,{default:function(){return pe}});var r=n(93433),o=n(74165),i=n(15861),a=n(29439),c=n(18397),l=n(68105),s=n(18405),d=n(81485),u=n(95004),f=n(62822),h=n(47313),p=n(65964),x=n(10679),v=n(605),Z=n(92484),g=n(57631),y=n(5448),m=n(88705),b=n(5239),j=n(48175),w=n(75868),C=n(66281),D=n(72805),M=n(95873),k=n(8730),S=n(50152),E=n(41034),F=n(1413),I=n(64164),R=n(17551),W=(0,I.ZP)("div")((function(e){var t=e.theme;return{width:"calc(100% + 2px)",marginLeft:-1,marginBottom:-1,"& .fc":{"--fc-list-event-dot-width":"8px","--fc-border-color":t.palette.divider,"--fc-event-border-color":t.palette.info.light,"--fc-now-indicator-color":t.palette.error.main,"--fc-today-bg-color":t.palette.action.selected,"--fc-page-bg-color":t.palette.background.default,"--fc-neutral-bg-color":t.palette.background.neutral,"--fc-list-event-hover-bg-color":t.palette.action.hover,"--fc-highlight-color":(0,R.Fq)(t.palette.primary.main,.08)},"& .fc .fc-license-message":{display:"none"},"& .fc a":{color:t.palette.text.primary},"& .fc .fc-col-header ":{boxShadow:"inset 0 -1px 0 ".concat(t.palette.divider),"& th":{borderColor:"transparent"},"& .fc-col-header-cell-cushion":(0,F.Z)((0,F.Z)({},t.typography.subtitle2),{},{padding:"13px 0"})},"& .fc .fc-event":{borderColor:"transparent",backgroundColor:"transparent"},"& .fc .fc-event .fc-event-main":{padding:"2px 4px",borderRadius:4,backgroundColor:t.palette.common.white,transition:t.transitions.create("filter"),"&:hover":{filter:"brightness(0.92)"},"&:before,&:after":{top:0,left:0,width:"100%",height:"100%",content:"''",borderRadius:4,position:"absolute",boxSizing:"border-box"},"&:before":{zIndex:8,opacity:.32,border:"solid 1px currentColor"},"&:after":{zIndex:7,opacity:.24,backgroundColor:"currentColor"}},"& .fc .fc-event .fc-event-main-frame":{fontSize:13,lineHeight:"20px",filter:"brightness(0.24)"},"& .fc .fc-daygrid-event .fc-event-title":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},"& .fc .fc-event .fc-event-time":{padding:0,overflow:"unset",fontWeight:t.typography.fontWeightBold},"& .fc .fc-popover":{border:0,overflow:"hidden",boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.paper},"& .fc .fc-popover-header":(0,F.Z)((0,F.Z)({},t.typography.subtitle2),{},{padding:t.spacing(1),backgroundColor:(0,R.Fq)(t.palette.grey[500],.12),borderBottom:"solid 1px ".concat(t.palette.divider)}),"& .fc .fc-popover-close":{opacity:.48,transition:t.transitions.create("opacity"),"&:hover":{opacity:1}},"& .fc .fc-more-popover .fc-popover-body":{padding:t.spacing(1.5)},"& .fc .fc-popover-body":{"& .fc-daygrid-event.fc-event-start, & .fc-daygrid-event.fc-event-end":{margin:"2px 0"}},"& .fc .fc-day-other .fc-daygrid-day-top":{opacity:1,"& .fc-daygrid-day-number":{color:t.palette.text.disabled}},"& .fc .fc-daygrid-day-number":(0,F.Z)((0,F.Z)({},t.typography.body2),{},{padding:t.spacing(1,1,0)}),"& .fc .fc-daygrid-event":{marginTop:4},"& .fc .fc-daygrid-event.fc-event-start, & .fc .fc-daygrid-event.fc-event-end":{marginLeft:4,marginRight:4},"& .fc .fc-daygrid-more-link":(0,F.Z)((0,F.Z)({},t.typography.caption),{},{color:t.palette.text.secondary}),"& .fc .fc-timegrid-axis-cushion":(0,F.Z)((0,F.Z)({},t.typography.body2),{},{color:t.palette.text.secondary}),"& .fc .fc-timegrid-slot-label-cushion":(0,F.Z)({},t.typography.body2),"& .fc-direction-ltr .fc-list-day-text, .fc-direction-rtl .fc-list-day-side-text, .fc-direction-ltr .fc-list-day-side-text, .fc-direction-rtl .fc-list-day-text":(0,F.Z)({},t.typography.subtitle2),"& .fc .fc-list-event":(0,F.Z)((0,F.Z)({},t.typography.body2),{},{"& .fc-list-event-time":{color:t.palette.text.secondary}}),"& .fc .fc-list-table":{"& th, td":{borderColor:"transparent"}}}})),z=n(3463),O=n(19118),A=n.n(O),P=n(33532),_=n(75627),L=n(62563),T=n(62463),B=n(67881),N=n(66382),q=n(83719),G=n(18104),V=n(16157),U=n(32703),J=n(74359),Q=n(16035),X=n(50734),Y=n(46417),$=function(e,t){var n={title:"",description:"",textColor:"#1890FF",allDay:!1,start:t?new Date(t.start).toISOString():(new Date).toISOString(),end:t?new Date(t.end).toISOString():(new Date).toISOString()};return e||t?A()({},n,e):n};function H(e){var t=e.event,n=e.range,r=e.colorOptions,a=e.onCreateUpdateEvent,c=e.onDeleteEvent,l=e.onCancel,s=!!t,d=z.Ry().shape({title:z.Z_().max(255).required("Title is required"),description:z.Z_().max(5e3)}),u=(0,_.cI)({resolver:(0,L.X)(d),defaultValues:$(t,n)}),f=u.reset,h=u.watch,p=u.control,x=u.handleSubmit,Z=u.formState.isSubmitting,g=h(),y=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n={title:t.title,description:t.description,textColor:t.textColor,allDay:t.allDay,start:t.start,end:t.end},a(n),l(),f()}catch(r){console.error(r)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=!(g.allDay||!g.start||!g.end)&&(0,P.Z)(new Date(g.end),new Date(g.start));return(0,Y.jsxs)(X.ZP,{methods:u,onSubmit:x(y),children:[(0,Y.jsxs)(T.Z,{spacing:3,sx:{px:3},children:[(0,Y.jsx)(X.au,{name:"title",label:"Title"}),(0,Y.jsx)(X.au,{name:"description",label:"Description",multiline:!0,rows:3}),(0,Y.jsx)(X._e,{name:"allDay",label:"All day"}),(0,Y.jsx)(_.Qr,{name:"start",control:p,render:function(e){var t=e.field;return(0,Y.jsx)(J.W,(0,F.Z)((0,F.Z)({},t),{},{onChange:function(e){return t.onChange(e)},label:"Start date",inputFormat:"dd/MM/yyyy hh:mm a",renderInput:function(e){return(0,Y.jsx)(B.Z,(0,F.Z)((0,F.Z)({},e),{},{fullWidth:!0}))}}))}}),(0,Y.jsx)(_.Qr,{name:"end",control:p,render:function(e){var t=e.field;return(0,Y.jsx)(J.W,(0,F.Z)((0,F.Z)({},t),{},{onChange:function(e){return t.onChange(e)},label:"End date",inputFormat:"dd/MM/yyyy hh:mm a",renderInput:function(e){return(0,Y.jsx)(B.Z,(0,F.Z)((0,F.Z)({},e),{},{fullWidth:!0,error:!!m,helperText:m&&"End date must be later than start date"}))}}))}}),(0,Y.jsx)(_.Qr,{name:"textColor",control:p,render:function(e){var t=e.field;return(0,Y.jsx)(Q.tR,{value:t.value,onChange:t.onChange,colors:r})}})]}),(0,Y.jsxs)(N.Z,{children:[s&&(0,Y.jsx)(q.Z,{title:"Delete Event",children:(0,Y.jsx)(G.Z,{onClick:c,children:(0,Y.jsx)(k.Z,{icon:"eva:trash-2-outline"})})}),(0,Y.jsx)(V.Z,{sx:{flexGrow:1}}),(0,Y.jsx)(v.Z,{variant:"outlined",color:"inherit",onClick:l,children:"Cancel"}),(0,Y.jsx)(U.Z,{type:"submit",variant:"contained",loading:Z,children:s?"Update":"Add"})]})]})}var K=n(68097),ee=n(42669),te=[{value:"dayGridMonth",label:"Month",icon:"ic:round-view-module"},{value:"timeGridWeek",label:"Week",icon:"ic:round-view-week"},{value:"timeGridDay",label:"Day",icon:"ic:round-view-day"},{value:"listWeek",label:"Agenda",icon:"ic:round-view-agenda"}];function ne(e){var t=e.date,n=e.view,r=e.onToday,o=e.onNextDate,i=e.onPrevDate,a=e.onChangeView,c=e.onOpenFilter,l=(0,C.Z)("up","sm");return(0,Y.jsxs)(T.Z,{alignItems:"center",justifyContent:"space-between",direction:{xs:"column",sm:"row"},sx:{p:2.5},children:[l&&(0,Y.jsx)(T.Z,{direction:"row",spacing:1,children:te.map((function(e){return(0,Y.jsx)(q.Z,{title:e.label,children:(0,Y.jsx)(K.Z,{size:"small",value:n,selected:e.value===n,onChange:function(){return a(e.value)},children:(0,Y.jsx)(k.Z,{icon:e.icon})})},e.value)}))}),(0,Y.jsxs)(T.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,Y.jsx)(G.Z,{onClick:i,children:(0,Y.jsx)(k.Z,{icon:"eva:arrow-ios-back-fill"})}),(0,Y.jsx)(ee.Z,{variant:"h5",children:(0,w.Mu)(t)}),(0,Y.jsx)(G.Z,{onClick:o,children:(0,Y.jsx)(k.Z,{icon:"eva:arrow-ios-forward-fill"})})]}),(0,Y.jsxs)(T.Z,{direction:"row",alignItems:"center",spacing:1,children:[l&&(0,Y.jsx)(v.Z,{size:"small",color:"error",variant:"contained",onClick:r,children:"Today"}),(0,Y.jsx)(G.Z,{onClick:c,children:(0,Y.jsx)(k.Z,{icon:"ic:round-filter-list"})})]})]})}var re=n(68520),oe=n.n(re),ie=n(63686),ae=n(86360),ce=n(34940),le=n(8224),se=n(25685),de=n(36974),ue=n(13280);function fe(e){var t=e.open,n=e.events,r=e.picker,o=e.onClose,i=e.onResetFilter,a=e.colorOptions,c=e.onSelectEvent,l=e.filterEventColor,s=e.onFilterEventColor;return(0,Y.jsxs)(ae.ZP,{anchor:"right",open:t,onClose:o,BackdropProps:{invisible:!0},PaperProps:{sx:{width:de.w$.W_BASE}},children:[(0,Y.jsxs)(T.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{pl:2,pr:1,py:2},children:[(0,Y.jsx)(ee.Z,{variant:"subtitle1",children:"Filters"}),(0,Y.jsx)(q.Z,{title:"Reset",children:(0,Y.jsx)(G.Z,{onClick:i,children:(0,Y.jsx)(k.Z,{icon:"eva:trash-2-outline"})})})]}),(0,Y.jsx)(ce.Z,{}),(0,Y.jsx)(ee.Z,{variant:"caption",sx:{color:"text.secondary",fontWeight:"fontWeightMedium",p:function(e){return e.spacing(2,2,1,2)}},children:"Colors"}),(0,Y.jsx)(Q.b8,{colors:a,selected:l,onChangeColor:s,sx:{maxWidth:144,mx:2}}),(0,Y.jsx)(ee.Z,{variant:"caption",sx:{p:2,color:"text.secondary",fontWeight:"fontWeightMedium"},children:"Range"}),(0,Y.jsxs)(T.Z,{spacing:2,sx:{px:2},children:[(0,Y.jsx)(ie.M,{label:"Start date",value:r.startDate,onChange:r.onChangeStartDate,renderInput:function(e){return(0,Y.jsx)(B.Z,(0,F.Z)({size:"small"},e))}}),(0,Y.jsx)(ie.M,{label:"End date",value:r.endDate,onChange:r.onChangeEndDate,renderInput:function(e){return(0,Y.jsx)(B.Z,(0,F.Z)({size:"small"},e))}})]}),(0,Y.jsxs)(ee.Z,{variant:"caption",sx:{p:2,color:"text.secondary",fontWeight:"fontWeightMedium"},children:["Events (",n.length,")"]}),(0,Y.jsx)(ue.Z,{sx:{height:1},children:oe()(n,["end"],["desc"]).map((function(e){return(0,Y.jsxs)(le.Z,{onClick:function(){return c(e.id)},children:[(0,Y.jsx)(V.Z,{sx:{top:0,left:0,width:0,height:0,position:"absolute",borderRight:"8px solid transparent",borderTop:"8px solid ".concat(e.textColor)}}),(0,Y.jsx)(se.Z,{disableTypography:!0,primary:(0,Y.jsx)(ee.Z,{variant:"subtitle2",sx:{fontSize:13,mt:.5},children:e.title}),secondary:(0,Y.jsx)(ee.Z,{variant:"caption",component:"div",sx:{fontSize:11,color:"text.disabled"},children:e.allDay?(0,w.zM)(e.start,"dd MMM yy"):(0,Y.jsxs)(Y.Fragment,{children:[(0,w.zM)(e.start,"dd MMM yy p")," "," - ",(0,w.zM)(e.end,"dd MMM yy p")]})}),sx:{display:"flex",flexDirection:"column-reverse"}})]},e.id)}))})]})}var he=["#00AB55","#1890FF","#54D62C","#FFC107","#FF4842","#04297A","#7A0C2E"];function pe(){var e=(0,E.Ds)().enqueueSnackbar,t=(0,S.K$)().themeStretch,n=(0,b.I0)(),F=(0,C.Z)("up","sm"),I=(0,h.useRef)(null),R=(0,b.v9)((function(e){return e.calendar})),z=R.events,O=R.openModal,A=R.selectedRange,P=R.selectedEventId,_=(0,b.v9)((function(){return P?z.find((function(e){return e.id===P})):null})),L=(0,M.w)(null,null),T=(0,h.useState)(new Date),B=(0,a.Z)(T,2),N=B[0],q=B[1],G=(0,h.useState)(!1),V=(0,a.Z)(G,2),U=V[0],J=V[1],Q=(0,h.useState)([]),X=(0,a.Z)(Q,2),$=X[0],K=X[1],ee=(0,h.useState)(F?"dayGridMonth":"listWeek"),te=(0,a.Z)(ee,2),re=te[0],oe=te[1];(0,h.useEffect)((function(){n((0,m.vw)())}),[n]),(0,h.useEffect)((function(){var e=I.current;if(e){var t=e.getApi(),n=F?"dayGridMonth":"listWeek";t.changeView(n),oe(n)}}),[F]);var ie=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.event;try{n((0,m.eJ)(r.id,{allDay:r.allDay,start:r.start,end:r.end}))}catch(o){console.error(o)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.event;try{n((0,m.eJ)(r.id,{allDay:r.allDay,start:r.start,end:r.end}))}catch(o){console.error(o)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){n((0,m.rV)())},le=function(){n((0,m.vm)())},se=function(){var t=(0,i.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{P&&(n((0,m.Bt)(P)),le(),e("Delete success!"))}catch(r){console.error(r)}case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),de=function(e){var t=e.inputData,n=e.filterEventColor,r=e.filterStartDate,o=e.filterEndDate,i=e.isError,a=t.map((function(e,t){return[e,t]}));t=a.map((function(e){return e[0]})),n.length&&(t=t.filter((function(e){return n.includes(e.textColor)})));r&&o&&!i&&(t=t.filter((function(e){return(0,w.IO)(e.start)>=(0,w.IO)(r)&&(0,w.IO)(e.end)<=(0,w.IO)(o)})));return t}({inputData:z,filterEventColor:$,filterStartDate:L.startDate,filterEndDate:L.endDate,isError:!!L.isError});return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(p.ql,{children:(0,Y.jsx)("title",{children:" Calendar | INTERNATIONAL JOURNAL INDEXING"})}),(0,Y.jsxs)(x.Z,{maxWidth:!t&&"xl",children:[(0,Y.jsx)(D.Z,{heading:"Calendar",links:[{name:"Dashboard",href:j.vB.root},{name:"Calendar"}],moreLink:["https://fullcalendar.io/docs/react"],action:(0,Y.jsx)(v.Z,{variant:"contained",startIcon:(0,Y.jsx)(k.Z,{icon:"eva:plus-fill"}),onClick:ce,children:"New Event"})}),(0,Y.jsx)(Z.Z,{children:(0,Y.jsxs)(W,{children:[(0,Y.jsx)(ne,{date:N,view:re,onNextDate:function(){var e=I.current;if(e){var t=e.getApi();t.next(),q(t.getDate())}},onPrevDate:function(){var e=I.current;if(e){var t=e.getApi();t.prev(),q(t.getDate())}},onToday:function(){var e=I.current;if(e){var t=e.getApi();t.today(),q(t.getDate())}},onChangeView:function(e){var t=I.current;t&&(t.getApi().changeView(e),oe(e))},onOpenFilter:function(){J(!0)}}),(0,Y.jsx)(d.ZPm,{weekends:!0,editable:!0,droppable:!0,selectable:!0,allDayMaintainDuration:!0,eventResizableFromStart:!0,events:de,initialEvents:z,ref:I,initialDate:N,initialView:re,dayMaxEventRows:3,eventDisplay:"block",headerToolbar:!1,select:function(e){var t=I.current;t&&t.getApi().unselect();n((0,m.jh)({start:e.start,end:e.end}))},eventDrop:ae,eventClick:function(e){n((0,m.lz)(e.event.id))},eventResize:ie,height:F?720:"auto",plugins:[s.Z,c.ZP,f.ZP,u.ZP,l.ZP]})]})})]}),(0,Y.jsxs)(g.Z,{fullWidth:!0,maxWidth:"xs",open:O,onClose:le,children:[(0,Y.jsx)(y.Z,{children:_?"Edit Event":"Add Event"}),(0,Y.jsx)(H,{event:_,range:A,onCancel:le,onCreateUpdateEvent:function(t){P?(n((0,m.eJ)(P,t)),e("Update success!")):(n((0,m.yM)(t)),e("Create success!"))},onDeleteEvent:se,colorOptions:he})]}),(0,Y.jsx)(fe,{events:z,picker:L,open:U,onClose:function(){J(!1)},colorOptions:he,filterEventColor:$,onFilterEventColor:function(e){var t=$.includes(e)?$.filter((function(t){return t!==e})):[].concat((0,r.Z)($),[e]);K(t)},onResetFilter:function(){var e=L.setStartDate,t=L.setEndDate;K([]),e&&t&&(e(null),t(null))},onSelectEvent:function(e){e&&(ce(),n((0,m.lz)(e)))}})]})}},75868:function(e,t,n){n.d(t,{DY:function(){return s},IO:function(){return l},Mu:function(){return a},zM:function(){return c}});var r=n(89600),o=n(42026),i=n(98495);function a(e,t){var n=t||"dd MMM yyyy";return e?(0,r.Z)(new Date(e),n):""}function c(e,t){var n=t||"dd MMM yyyy p";return e?(0,r.Z)(new Date(e),n):""}function l(e){return e?(0,o.Z)(new Date(e)):""}function s(e){return e?(0,i.Z)(new Date(e),{addSuffix:!0}):""}}}]);