"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[8283],{21365:function(e,n,r){r.d(n,{SA:function(){return i.SA},ZP:function(){return t.Z}});var i=r(10114),t=r(91245)},48669:function(e,n,r){r.d(n,{Z:function(){return f}});var i=r(1413),t=r(45987),a=r(16157),l=r(62463),o=r(42669),s=r(80493),c=r(77449),d=r(2135),u=r(46417);function m(e){var n=e.link,r=e.activeLast,t=e.disabled,l=n.name,o=n.href,s=n.icon,m=(0,i.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},t&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,u.jsxs)(u.Fragment,{children:[s&&(0,u.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),l]});return o?(0,u.jsx)(c.Z,{component:d.rU,to:o,sx:m,children:h}):(0,u.jsxs)(a.Z,{sx:m,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function f(e){var n=e.links,r=e.action,d=e.heading,f=e.moreLink,g=e.activeLast,p=e.sx,Z=(0,t.Z)(e,h),b=n[n.length-1].name;return(0,u.jsxs)(a.Z,{sx:(0,i.Z)({mb:5},p),children:[(0,u.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(a.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(s.Z,(0,i.Z)((0,i.Z)({separator:(0,u.jsx)(x,{})},Z),{},{children:n.map((function(e){return(0,u.jsx)(m,{link:e,activeLast:g,disabled:e.name===b},e.name||"")}))}))]}),r&&(0,u.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!f&&(0,u.jsx)(a.Z,{sx:{mt:2},children:f.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,u.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},72805:function(e,n,r){r.d(n,{Z:function(){return i.Z}});var i=r(48669)},88283:function(e,n,r){r.r(n),r.d(n,{_dataGrid:function(){return E},default:function(){return F}});var i=r(93433),t=r(65964),a=r(16157),l=r(10679),o=r(42669),s=r(77449),c=r(62463),d=r(92484),u=r(29700),m=r(48175),h=r(21365),f=r(72805),x=r(63130),g=r(18104),p=r(8730),Z=r(46417),b=[{field:"id",headerName:"ID",width:120},{field:"firstName",headerName:"First name",width:160,editable:!0},{field:"lastName",headerName:"Last name",width:160,editable:!0},{field:"age",headerName:"Age",type:"number",width:120,editable:!0,align:"center",headerAlign:"center"},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",flex:1,valueGetter:function(e){return"".concat(e.row.firstName||""," ").concat(e.row.lastName||"")}},{field:"action",headerName:" ",width:80,align:"right",sortable:!1,disableColumnMenu:!0,renderCell:function(){return(0,Z.jsx)(g.Z,{children:(0,Z.jsx)(p.Z,{icon:"eva:more-vertical-fill"})})}}];function j(e){var n=e.data;return(0,Z.jsx)(x._,{columns:b,rows:n,checkboxSelection:!0,disableSelectionOnClick:!0})}var v=r(1413),w=r(29439),N=r(47313),y=r(62111),k=r(29955),C=r(28566),A=r(30212),P=r(85833),I=r(76221),L=r(86259),_=r(14913),S=[{field:"id",hide:!0},{field:"avatar",headerName:"Avatar",align:"center",headerAlign:"center",width:64,sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:function(e){return(0,Z.jsx)(_.z,{name:e.row.name,sx:{width:36,height:36}})}},{field:"name",headerName:"Name",flex:1,editable:!0},{field:"email",headerName:"Email",flex:1,editable:!0,renderCell:function(e){return(0,Z.jsx)(o.Z,{variant:"body2",sx:{textDecoration:"underline"},noWrap:!0,children:e.row.email})}},{field:"lastLogin",type:"dateTime",headerName:"Last login",align:"right",headerAlign:"right",width:200},{field:"rating",type:"number",headerName:"Rating",width:160,disableColumnMenu:!0,renderCell:function(e){return(0,Z.jsx)(k.Z,{size:"small",value:e.row.rating,precision:.5,readOnly:!0})}},{field:"status",type:"singleSelect",headerName:"Status",valueOptions:["online","away","busy"],align:"center",headerAlign:"center",width:120,renderCell:function(e){return function(e){var n="light"===(0,y.Z)().palette.mode;return(0,Z.jsx)(L.Z,{variant:n?"soft":"filled",color:("busy"===e?"error":"away"===e&&"warning")||"success",sx:{mx:"auto"},children:e})}(e.row.status)}},{field:"isAdmin",type:"boolean",align:"center",headerAlign:"center",width:120,renderCell:function(e){return e.row.isAdmin?(0,Z.jsx)(p.Z,{icon:"eva:checkmark-circle-2-fill",sx:{color:"primary.main"}}):"-"}},{field:"performance",type:"number",headerName:"Performance",align:"center",headerAlign:"center",width:160,renderCell:function(e){return(0,Z.jsxs)(c.Z,{spacing:1,direction:"row",alignItems:"center",sx:{px:1,width:1,height:1},children:[(0,Z.jsx)(C.Z,{value:e.row.performance,variant:"determinate",color:(e.row.performance<30?"error":e.row.performance>30&&e.row.performance<70&&"warning")||"primary",sx:{width:1,height:6}}),(0,Z.jsx)(o.Z,{variant:"caption",sx:{width:80},children:(0,I.f2)(e.row.performance)})]})}},{field:"action",headerName:" ",align:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:function(e){return(0,Z.jsx)(g.Z,{onClick:function(){return console.log("ID",e.row.id)},children:(0,Z.jsx)(p.Z,{icon:"eva:more-vertical-fill"})})}}];function M(e){var n=e.data,r=(0,N.useState)([]),i=(0,w.Z)(r,2),t=i[0],a=i[1];if(S.length>0){var l=S.find((function(e){return"rating"===e.field})),o=S.findIndex((function(e){return"rating"===e.field})),s=(0,A.UY)().map((function(e){return(0,v.Z)((0,v.Z)({},e),{},{InputComponent:D})}));S[o]=(0,v.Z)((0,v.Z)({},l),{},{filterOperators:s})}var c=n.filter((function(e){return t.includes(e.id)}));return console.log("SELECTED",c),(0,Z.jsx)(x._,{checkboxSelection:!0,disableSelectionOnClick:!0,rows:n,columns:S,pagination:!0,onSelectionModelChange:function(e){a(e)},components:{Toolbar:P.n}})}function D(e){var n=e.item,r=e.applyValue;return(0,Z.jsx)(a.Z,{sx:{p:1,height:1,alignItems:"flex-end",display:"flex"},children:(0,Z.jsx)(k.Z,{size:"small",precision:.5,placeholder:"Filter value",value:Number(n.value),onChange:function(e,i){r((0,v.Z)((0,v.Z)({},n),{},{value:i}))}})})}var E=(0,i.Z)(Array(36)).map((function(e,n){return{id:h.ZP.id(n),name:h.ZP.name.fullName(n),email:h.ZP.email(n),lastLogin:h.ZP.time(n),performance:h.ZP.number.percent(n),rating:h.ZP.number.rating(n),status:(0,h.SA)(["online","away","busy"]),isAdmin:h.ZP.boolean(n),lastName:h.ZP.name.lastName(n),firstName:h.ZP.name.firstName(n),age:h.ZP.number.age(n)}}));function F(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(t.ql,{children:(0,Z.jsx)("title",{children:" MUI Components: DataGrid | INTERNATIONAL JOURNAL INDEXING"})}),(0,Z.jsx)(a.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,Z.jsxs)(l.Z,{children:[(0,Z.jsx)(f.Z,{heading:"DataGrid",links:[{name:"Components",href:m.ko.components},{name:"DataGrid"}],moreLink:["https://mui.com/x/react-data-grid/"],sx:{mb:0}}),(0,Z.jsxs)(o.Z,{variant:"body2",sx:{my:3},children:["This component includes 2 ",(0,Z.jsx)("strong",{children:"Free"})," and ",(0,Z.jsx)("strong",{children:"Paid"})," versions from MUI.",(0,Z.jsx)("br",{}),"Paid version will have more features. Please read more"," ",(0,Z.jsx)(s.Z,{href:"https://mui.com/x/react-data-grid/",target:"_blank",rel:"noopener",children:"here"})]})]})}),(0,Z.jsx)(l.Z,{sx:{my:10},children:(0,Z.jsxs)(c.Z,{spacing:5,children:[(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(u.Z,{title:"Basic",sx:{mb:2}}),(0,Z.jsx)(a.Z,{sx:{height:390},children:(0,Z.jsx)(j,{data:E})})]}),(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(u.Z,{title:"Custom",sx:{mb:2}}),(0,Z.jsx)(a.Z,{sx:{height:720},children:(0,Z.jsx)(M,{data:E})})]})]})})]})}},76221:function(e,n,r){r.d(n,{FK:function(){return a},e_:function(){return l},f2:function(){return o},oe:function(){return c},v1:function(){return s}});var i=r(31733),t=r.n(i);function a(e){return t()(e).format()}function l(e){return d(e?t()(e).format("$0,0.00"):"",".00")}function o(e){return d(e?t()(Number(e)/100).format("0.0%"):"",".0")}function s(e){return d(e?t()(e).format("0.00a"):"",".00")}function c(e){return d(e?t()(e).format("0.0 b"):"",".0")}function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".00",r=e.includes(n);return r?e.replace(n,""):e}}}]);