"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[203],{48669:function(n,e,t){t.d(e,{Z:function(){return Z}});var r=t(1413),a=t(45987),i=t(16157),o=t(62463),l=t(42669),s=t(80493),u=t(77449),d=t(2135),c=t(46417);function x(n){var e=n.link,t=n.activeLast,a=n.disabled,o=e.name,l=e.href,s=e.icon,x=(0,r.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},a&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,c.jsxs)(c.Fragment,{children:[s&&(0,c.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),o]});return l?(0,c.jsx)(u.Z,{component:d.rU,to:l,sx:x,children:h}):(0,c.jsxs)(i.Z,{sx:x,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function Z(n){var e=n.links,t=n.action,d=n.heading,Z=n.moreLink,p=n.activeLast,j=n.sx,f=(0,a.Z)(n,h),g=e[e.length-1].name;return(0,c.jsxs)(i.Z,{sx:(0,r.Z)({mb:5},j),children:[(0,c.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,c.jsxs)(i.Z,{sx:{flexGrow:1},children:[d&&(0,c.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!e.length&&(0,c.jsx)(s.Z,(0,r.Z)((0,r.Z)({separator:(0,c.jsx)(m,{})},f),{},{children:e.map((function(n){return(0,c.jsx)(x,{link:n,activeLast:p,disabled:n.name===g},n.name||"")}))}))]}),t&&(0,c.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!Z&&(0,c.jsx)(i.Z,{sx:{mt:2},children:Z.map((function(n){return(0,c.jsx)(u.Z,{noWrap:!0,href:n,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:n},n)}))})]})}function m(){return(0,c.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},72805:function(n,e,t){t.d(e,{Z:function(){return r.Z}});var r=t(48669)},95873:function(n,e,t){t.d(e,{Z:function(){return M},w:function(){return d}});var r=t(29439),a=t(47313),i=t(33532),o=t(8121),l=t(3051),s=t(98789),u=t(75868);function d(n,e){var t=(0,a.useState)(!1),d=(0,r.Z)(t,2),c=d[0],x=d[1],h=(0,a.useState)(e),Z=(0,r.Z)(h,2),m=Z[0],p=Z[1],j=(0,a.useState)(n),f=(0,r.Z)(j,2),g=f[0],v=f[1],D=g&&m&&(0,i.Z)(new Date(m),new Date(g))||!1,C=(new Date).getFullYear(),b=g?(0,o.Z)(g):null,y=m?(0,o.Z)(m):null,M=C===b&&C===y,w=!(!g||!m)&&(0,l.Z)(new Date(g),new Date(m)),k=!(!g||!m)&&(0,s.Z)(new Date(g),new Date(m)),I="".concat((0,u.Mu)(g)," - ").concat((0,u.Mu)(m));return{startDate:g,endDate:m,onChangeStartDate:function(n){v(n)},onChangeEndDate:function(n){D&&p(null),p(n)},open:c,onOpen:function(){return x(!0)},onClose:function(){return x(!1)},onReset:function(){v(null),p(null)},isSelected:!!g&&!!m,isError:D,label:I||"",shortLabel:(M?k?w?(0,u.Mu)(m,"dd MMM yy"):"".concat((0,u.Mu)(g,"dd")," - ").concat((0,u.Mu)(m,"dd MMM yy")):"".concat((0,u.Mu)(g,"dd MMM")," - ").concat((0,u.Mu)(m,"dd MMM yy")):"".concat((0,u.Mu)(g,"dd MMM yy")," - ").concat((0,u.Mu)(m,"dd MMM yy")))||"",setStartDate:v,setEndDate:p}}var c=t(1413),x=t(57631),h=t(5448),Z=t(71235),m=t(62463),p=t(80654),j=t(67881),f=t(48569),g=t(66382),v=t(605),D=t(35426),C=t(63686),b=t(66281),y=t(46417);function M(n){var e=n.title,t=void 0===e?"Select date range":e,r=n.variant,a=void 0===r?"input":r,i=n.startDate,o=n.endDate,l=n.onChangeStartDate,s=n.onChangeEndDate,u=n.open,d=n.onClose,M=n.isError,w=(0,b.Z)("up","md"),k="calendar"===a;return(0,y.jsxs)(x.Z,{fullWidth:!0,maxWidth:!k&&"xs",open:u,onClose:d,PaperProps:{sx:(0,c.Z)({},k&&{maxWidth:720})},children:[(0,y.jsx)(h.Z,{sx:{pb:2},children:t}),(0,y.jsxs)(Z.Z,{sx:(0,c.Z)({},k&&w&&{overflow:"unset"}),children:[(0,y.jsx)(m.Z,{spacing:k?3:2,direction:k&&w?"row":"column",justifyContent:"center",sx:{pt:1,"& .MuiCalendarPicker-root":(0,c.Z)({},!w&&{width:"auto"})},children:k?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p.Z,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:(0,y.jsx)(D.h,{date:i,onChange:l})}),(0,y.jsx)(p.Z,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:(0,y.jsx)(D.h,{date:o,onChange:s})})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(C.M,{label:"Start date",value:i,onChange:l,renderInput:function(n){return(0,y.jsx)(j.Z,(0,c.Z)({},n))}}),(0,y.jsx)(C.M,{label:"End date",value:o,onChange:s,renderInput:function(n){return(0,y.jsx)(j.Z,(0,c.Z)({},n))}})]})}),M&&(0,y.jsx)(f.Z,{error:!0,sx:{px:2},children:"End date must be later than start date"})]}),(0,y.jsxs)(g.Z,{children:[(0,y.jsx)(v.Z,{variant:"outlined",color:"inherit",onClick:d,children:"Cancel"}),(0,y.jsx)(v.Z,{disabled:M,variant:"contained",onClick:d,children:"Apply"})]})]})}},90203:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r=t(29439),a=t(47313),i=t(65964),o=t(16157),l=t(10679),s=t(49280),u=t(51987),d=t(48175),c=t(72805),x=t(1413),h=t(4441),Z=t(67881),m=t(82403),p=t(40662),j=t(58997),f=t(45023),g=t(63686),v=t(16769),D=t(46417);function C(){var n=(0,a.useState)(new Date),e=(0,r.Z)(n,2),t=e[0],i=e[1];return(0,D.jsxs)(m.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,D.jsxs)(v.g,{title:"Basic",children:[(0,D.jsx)(p.$,{label:"For desktop",value:t,minDate:new Date("2017-01-01"),onChange:function(n){i(n)},renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)((0,x.Z)({fullWidth:!0},n),{},{margin:"normal"}))}}),(0,D.jsx)(j.O,{orientation:"portrait",label:"For mobile",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)((0,x.Z)({fullWidth:!0},n),{},{margin:"normal"}))}})]}),(0,D.jsx)(v.g,{title:"Static mode",children:(0,D.jsx)(f.w,{orientation:"landscape",openTo:"day",value:t,shouldDisableDate:h.Z,onChange:function(n){i(n)},renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)({},n))}})}),(0,D.jsxs)(v.g,{title:"Views playground",children:[(0,D.jsx)(g.M,{views:["year"],label:"Year only",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)((0,x.Z)({},n),{},{fullWidth:!0,margin:"normal",helperText:null}))}}),(0,D.jsx)(g.M,{views:["year","month"],label:"Year and Month",minDate:new Date("2012-03-01"),maxDate:new Date("2023-06-01"),value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)((0,x.Z)({},n),{},{fullWidth:!0,margin:"normal",helperText:null}))}}),(0,D.jsx)(g.M,{openTo:"year",views:["year","month","day"],label:"Year, month and date",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)((0,x.Z)({},n),{},{fullWidth:!0,margin:"normal",helperText:null}))}}),(0,D.jsx)(g.M,{views:["day","month","year"],label:"Invert the order of views",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)((0,x.Z)({},n),{},{fullWidth:!0,margin:"normal",helperText:null}))}}),(0,D.jsx)(g.M,{views:["day"],label:"Just date",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)((0,x.Z)({},n),{},{fullWidth:!0,margin:"normal",helperText:null}))}})]})]})}var b=t(62463),y=t(77449),M=t(605),w=t(95873),k=t(75868);function I(){var n=(0,w.w)(new Date,new Date),e=(0,w.w)(new Date,null);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(b.Z,{sx:{typography:"body2",mb:3,color:"text.secondary"},children:[(0,D.jsx)("div",{children:"This is the custom component from Minimall."}),(0,D.jsx)("div",{children:"You can use more advanced components by MUI."}),(0,D.jsxs)(y.Z,{href:"https://mui.com/x/react-date-pickers/date-range-picker/",children:["https://mui.com/x/react-date-pickers/date-range-picker/"," "]})]}),(0,D.jsxs)(o.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[(0,D.jsxs)(v.g,{title:"Input",children:[(0,D.jsx)(M.Z,{variant:"contained",onClick:n.onOpen,children:"Click me!"}),(0,D.jsxs)(b.Z,{sx:{typography:"body2",mt:3},children:[(0,D.jsxs)("div",{children:[(0,D.jsx)("strong",{children:"Start:"})," ",(0,k.Mu)(n.startDate)]}),(0,D.jsxs)("div",{children:[(0,D.jsx)("strong",{children:"End:"})," ",(0,k.Mu)(n.endDate)]})]}),(0,D.jsx)(w.Z,{open:n.open,startDate:n.startDate,endDate:n.endDate,onChangeStartDate:n.onChangeStartDate,onChangeEndDate:n.onChangeEndDate,onClose:n.onClose,isError:n.isError})]}),(0,D.jsxs)(v.g,{title:"Calendar",children:[(0,D.jsx)(M.Z,{variant:"contained",onClick:e.onOpen,children:"Click me!"}),(0,D.jsxs)(b.Z,{sx:{typography:"body2",mt:3},children:[(0,D.jsxs)("div",{children:[(0,D.jsx)("strong",{children:"Start:"})," ",(0,k.Mu)(e.startDate)]}),(0,D.jsxs)("div",{children:[(0,D.jsx)("strong",{children:"End:"})," ",(0,k.Mu)(e.endDate)]})]}),(0,D.jsx)(w.Z,{variant:"calendar",open:e.open,startDate:e.startDate,endDate:e.endDate,onChangeStartDate:e.onChangeStartDate,onChangeEndDate:e.onChangeEndDate,onClose:e.onClose,isError:e.isError})]})]})]})}var S=t(66813),W=t(74359),E=t(59621);function T(){var n=(0,a.useState)(new Date),e=(0,r.Z)(n,2),t=e[0],i=e[1],o=(0,a.useState)(new Date("2018-01-01T00:00:00.000Z")),l=(0,r.Z)(o,2),s=l[0],u=l[1];return(0,D.jsxs)(b.Z,{spacing:3,direction:{xs:"column",md:"row"},children:[(0,D.jsx)(v.g,{title:"Basic",children:(0,D.jsx)(S.x,{renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)((0,x.Z)({},n),{},{fullWidth:!0}))},label:"DateTimePicker",value:t,onChange:i})}),(0,D.jsxs)(v.g,{title:"Responsiveness",children:[(0,D.jsx)(W.W,{value:s,onChange:function(n){u(n)},renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)((0,x.Z)({},n),{},{fullWidth:!0,margin:"normal"}))}}),(0,D.jsx)(E.h,{value:s,onChange:function(n){u(n)},renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)((0,x.Z)({},n),{},{margin:"normal",fullWidth:!0}))}}),(0,D.jsx)(S.x,{value:s,onChange:function(n){u(n)},renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)((0,x.Z)({},n),{},{margin:"normal",fullWidth:!0}))}})]})]})}var F=t(47410),L=t(12323),R=t(46065),_=t(92180);function O(){var n=(0,a.useState)(new Date),e=(0,r.Z)(n,2),t=e[0],i=e[1];return(0,D.jsxs)(m.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,D.jsxs)(v.g,{title:"Basic",children:[(0,D.jsx)(F.j,{label:"12 hours",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)((0,x.Z)({fullWidth:!0},n),{},{margin:"normal"}))}}),(0,D.jsx)(F.j,{ampm:!1,label:"24 hours",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)((0,x.Z)({fullWidth:!0},n),{},{margin:"normal"}))}})]}),(0,D.jsxs)(v.g,{title:"Responsiveness",children:[(0,D.jsx)(L.d,{orientation:"portrait",label:"For mobile",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)((0,x.Z)({},n),{},{fullWidth:!0,margin:"normal"}))}}),(0,D.jsx)(R.k,{label:"For desktop",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)((0,x.Z)({},n),{},{margin:"normal",fullWidth:!0}))}}),(0,D.jsx)(F.j,{value:t,onChange:i,renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)((0,x.Z)({},n),{},{margin:"normal",fullWidth:!0}))}})]}),(0,D.jsx)(v.g,{title:"Static mode",children:(0,D.jsxs)(b.Z,{spacing:3,children:[(0,D.jsx)(_.K,{orientation:"portrait",displayStaticWrapperAs:"mobile",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)({},n))}}),(0,D.jsx)(_.K,{ampm:!0,orientation:"landscape",openTo:"minutes",value:t,onChange:function(n){i(n)},renderInput:function(n){return(0,D.jsx)(Z.Z,(0,x.Z)({},n))}})]})})]})}var P=[{value:"date",label:"Date",component:(0,D.jsx)(C,{})},{value:"datetime",label:"DateTime",component:(0,D.jsx)(T,{})},{value:"time",label:"Time",component:(0,D.jsx)(O,{})},{value:"range",label:"Range",component:(0,D.jsx)(I,{})}];function N(){var n=(0,a.useState)("date"),e=(0,r.Z)(n,2),t=e[0],x=e[1];return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(i.ql,{children:(0,D.jsx)("title",{children:" MUI Components: Pickers | INTERNATIONAL JOURNAL INDEXING"})}),(0,D.jsx)(o.Z,{sx:{pt:6,pb:1,bgcolor:function(n){return"light"===n.palette.mode?"grey.200":"grey.800"}},children:(0,D.jsx)(l.Z,{children:(0,D.jsx)(c.Z,{heading:"Date / Time pickers",links:[{name:"Components",href:d.ko.components},{name:"Date / Time pickers"}],moreLink:["https://mui.com/components/pickers","https://mui.com/x/react-date-pickers/getting-started/"]})})}),(0,D.jsxs)(l.Z,{sx:{my:10},children:[(0,D.jsx)(s.Z,{value:t,onChange:function(n,e){return x(e)},children:P.map((function(n){return(0,D.jsx)(u.Z,{value:n.value,label:n.label},n.value)}))}),P.map((function(n){return n.value===t&&(0,D.jsx)(o.Z,{sx:{mt:5},children:n.component},n.value)}))]})]})}},16769:function(n,e,t){t.d(e,{_:function(){return c},g:function(){return d}});var r=t(1413),a=t(17551),i=t(80654),o=t(29700),l=t(16157),s=t(42669),u=t(46417);function d(n){var e=n.title,t=n.sx,s=n.children;return(0,u.jsxs)(i.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(n){return(0,a.Fq)(n.palette.grey[500],.04)}},children:[e&&(0,u.jsx)(o.Z,{title:e}),(0,u.jsx)(l.Z,{sx:(0,r.Z)({p:5,minHeight:180},t),children:s})]})}function c(n){var e=n.title;return(0,u.jsx)(s.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:e})}},75868:function(n,e,t){t.d(e,{DY:function(){return u},IO:function(){return s},Mu:function(){return o},zM:function(){return l}});var r=t(89600),a=t(42026),i=t(98495);function o(n,e){var t=e||"dd MMM yyyy";return n?(0,r.Z)(new Date(n),t):""}function l(n,e){var t=e||"dd MMM yyyy p";return n?(0,r.Z)(new Date(n),t):""}function s(n){return n?(0,a.Z)(new Date(n)):""}function u(n){return n?(0,i.Z)(new Date(n),{addSuffix:!0}):""}}}]);