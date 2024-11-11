"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[9262],{48669:function(e,n,r){r.d(n,{Z:function(){return h}});var t=r(1413),l=r(45987),i=r(16157),a=r(62463),o=r(42669),s=r(80493),c=r(77449),d=r(2135),u=r(46417);function m(e){var n=e.link,r=e.activeLast,l=e.disabled,a=n.name,o=n.href,s=n.icon,m=(0,t.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},l&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),p=(0,u.jsxs)(u.Fragment,{children:[s&&(0,u.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),a]});return o?(0,u.jsx)(c.Z,{component:d.rU,to:o,sx:m,children:p}):(0,u.jsxs)(i.Z,{sx:m,children:[" ",p," "]})}var p=["links","action","heading","moreLink","activeLast","sx"];function h(e){var n=e.links,r=e.action,d=e.heading,h=e.moreLink,f=e.activeLast,b=e.sx,g=(0,l.Z)(e,p),j=n[n.length-1].name;return(0,u.jsxs)(i.Z,{sx:(0,t.Z)({mb:5},b),children:[(0,u.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(i.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(s.Z,(0,t.Z)((0,t.Z)({separator:(0,u.jsx)(x,{})},g),{},{children:n.map((function(e){return(0,u.jsx)(m,{link:e,activeLast:f,disabled:e.name===j},e.name||"")}))}))]}),r&&(0,u.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!h&&(0,u.jsx)(i.Z,{sx:{mt:2},children:h.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,u.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},72805:function(e,n,r){r.d(n,{Z:function(){return t.Z}});var t=r(48669)},92144:function(e,n,r){r.r(n),r.d(n,{default:function(){return G}});var t=r(29439),l=r(47313),i=r(65964),a=r(16157),o=r(10679),s=r(62463),c=r(42669),d=r(64558),u=r(11626),m=r(34940),p=r(48175),h=r(72805),x=r(1413),f=r(93433),b=r(74165),g=r(15861),j=r(62563),Z=r(75627),v=r(58921),w=r(34207),y=r(82937),k=r(67881),S=r(59017),R=r(18104),C=r(81962),q=r(32703),O=r(63686),U=r(8730),M=r(50734),F=r(3463),I=F.Ry().shape({fullName:F.Z_().required("Full name is required").min(6,"Mininum 6 characters").max(32,"Maximum 32 characters"),email:F.Z_().required("Email is required").email("Email must be a valid email address"),age:F.Rx().required("Age is required").moreThan(18,"Age must be between 18 and 100").lessThan(100,"Age must be between 18 and 100"),startDate:F.hT().nullable().required("Start date is required"),endDate:F.hT().required("End date is required").nullable().min(F.iH("startDate"),"End date must be later than start date"),password:F.Z_().required("Password is required").min(6,"Password should be of minimum 6 characters length"),confirmPassword:F.Z_().required("Confirm password is required").oneOf([F.iH("password")],"Password's not match"),slider:F.Rx().required("Slider is required").min(10,"Mininum value is >= 10"),sliderRange:F.nK().required("Slider range is is required").test("min","Range must be between 20 and 80",(function(e){return e[0]>=20})).test("max","Range must be between 20 and 80",(function(e){return e[1]<=80})),singleUpload:F.nK().required("Single upload is required").nullable(!0),multiUpload:F.IX().min(2,"Must have at least 2 items"),checkbox:F.O7().oneOf([!0],"Checkbox is required"),multiCheckbox:F.IX().min(1,"Choose at least one option"),singleSelect:F.Z_().required("Single select is required"),multiSelect:F.IX().min(2,"Must have at least 2 items"),switch:F.O7().oneOf([!0],"Switch is required"),radioGroup:F.Z_().required("Choose at least one option"),editor:F.Z_().required("Editor is required"),autocomplete:F.nK().required("Autocomplete is required").nullable(!0)}),N=r(62111),P=r(12871),A=r(50769),L=r(66281),_=r(34345),H=r(46417);function D(){var e=(0,N.Z)(),n=(0,L.Z)("up","md"),r=(0,Z.Gc)(),t=r.watch,l=r.formState.errors,i=t();return n?(0,H.jsx)(P.Z,{children:(0,H.jsxs)(s.Z,{sx:(0,x.Z)({p:3,top:0,right:0,height:1,width:280,position:"fixed",overflowX:"auto",color:"common.white",zIndex:e.zIndex.drawer},(0,A.Ls)({color:e.palette.grey[900]})),children:[(0,H.jsx)(c.Z,{variant:"overline",sx:{mb:2,color:"success.light"},children:"Values"}),Object.keys(i).map((function(e){return(0,H.jsxs)(s.Z,{sx:{typography:"caption",mt:.5},children:[(0,H.jsxs)(c.Z,{variant:"body2",sx:{color:"warning.main"},children:[e," :"]}),E(i,e)]},e)})),(0,H.jsx)(m.Z,{sx:{my:2}}),(0,H.jsx)(c.Z,{variant:"overline",sx:{mb:2,color:"error.light"},children:"Errors"}),(0,H.jsx)(c.Z,{variant:"caption",sx:{color:"error.light"},children:JSON.stringify(Object.keys(l),null,2)})]})}):null}function E(e,n){return"singleUpload"===n?JSON.stringify(e.singleUpload&&(0,_.ht)(e.singleUpload)):"multiUpload"===n?JSON.stringify(e.multiUpload.map((function(e){return(0,_.ht)(e)}))):JSON.stringify(e[n])||"---"}var T=[{value:"option 1",label:"Option 1"},{value:"option 2",label:"Option 2"},{value:"option 3",label:"Option 3"},{value:"option 4",label:"Option 4"},{value:"option 5",label:"Option 5"},{value:"option 6",label:"Option 6"},{value:"option 7",label:"Option 7"},{value:"option 8",label:"Option 8"}],V={age:0,email:"",fullName:"",editor:"",switch:!1,radioGroup:"",autocomplete:null,password:"",confirmPassword:"",startDate:new Date,endDate:null,singleUpload:null,multiUpload:[],singleSelect:"",multiSelect:[],checkbox:!1,multiCheckbox:[],slider:8,sliderRange:[15,80]};function z(e){var n=e.debug,r=(0,l.useState)(!1),i=(0,t.Z)(r,2),a=i[0],o=i[1],c=(0,Z.cI)({resolver:(0,j.X)(I),defaultValues:V}),d=c.watch,u=c.reset,p=c.control,h=c.setValue,F=c.handleSubmit,N=c.formState.isSubmitting,P=d(),A=function(){var e=(0,g.Z)((0,b.Z)().mark((function e(n){return(0,b.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,3e3)}));case 2:console.log("DATA",n),u();case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),L=(0,l.useCallback)((function(e){var n=e[0],r=Object.assign(n,{preview:URL.createObjectURL(n)});r&&h("singleUpload",r,{shouldValidate:!0})}),[h]),_=(0,l.useCallback)((function(e){var n=P.multiUpload||[],r=e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}));h("multiUpload",[].concat((0,f.Z)(n),(0,f.Z)(r)),{shouldValidate:!0})}),[h,P.multiUpload]);return(0,H.jsxs)(H.Fragment,{children:[N&&(0,H.jsx)(v.Z,{open:!0,sx:{zIndex:function(e){return e.zIndex.modal+1}},children:(0,H.jsx)(w.Z,{color:"primary"})}),(0,H.jsxs)(M.ZP,{methods:c,onSubmit:F(A),children:[(0,H.jsxs)(y.ZP,{container:!0,spacing:5,children:[(0,H.jsx)(y.ZP,{item:!0,xs:12,md:6,children:(0,H.jsxs)(s.Z,{spacing:2,children:[(0,H.jsx)(B,{children:(0,H.jsx)(M.au,{name:"fullName",label:"Full Name"})}),(0,H.jsx)(B,{children:(0,H.jsx)(M.au,{name:"email",label:"Email address"})}),(0,H.jsx)(B,{children:(0,H.jsx)(M.au,{name:"age",label:"Age",onChange:function(e){return h("age",Number(e.target.value),{shouldValidate:!0})},InputProps:{type:"number"}})}),(0,H.jsxs)(s.Z,{spacing:2,direction:{xs:"column",sm:"row"},children:[(0,H.jsx)(Z.Qr,{name:"startDate",control:p,render:function(e){var n=e.field,r=e.fieldState.error;return(0,H.jsx)(O.M,(0,x.Z)((0,x.Z)({},n),{},{label:"Start date",inputFormat:"dd/MM/yyyy",renderInput:function(e){return(0,H.jsx)(k.Z,(0,x.Z)((0,x.Z)({fullWidth:!0},e),{},{error:!!r,helperText:null===r||void 0===r?void 0:r.message}))}}))}}),(0,H.jsx)(Z.Qr,{name:"endDate",control:p,render:function(e){var n=e.field,r=e.fieldState.error;return(0,H.jsx)(O.M,(0,x.Z)((0,x.Z)({},n),{},{label:"End date",inputFormat:"dd/MM/yyyy",renderInput:function(e){return(0,H.jsx)(k.Z,(0,x.Z)((0,x.Z)({fullWidth:!0},e),{},{error:!!r,helperText:null===r||void 0===r?void 0:r.message}))}}))}})]}),(0,H.jsxs)(s.Z,{spacing:2,direction:{xs:"column",sm:"row"},children:[(0,H.jsx)(B,{children:(0,H.jsx)(M.au,{name:"password",label:"Password",type:a?"text":"password",InputProps:{endAdornment:(0,H.jsx)(S.Z,{position:"end",children:(0,H.jsx)(R.Z,{onClick:function(){return o(!a)},edge:"end",children:(0,H.jsx)(U.Z,{icon:a?"eva:eye-fill":"eva:eye-off-fill"})})})}})}),(0,H.jsx)(B,{children:(0,H.jsx)(M.au,{name:"confirmPassword",label:"Confirm Password",type:a?"text":"password",InputProps:{endAdornment:(0,H.jsx)(S.Z,{position:"end",children:(0,H.jsx)(R.Z,{onClick:function(){return o(!a)},edge:"end",children:(0,H.jsx)(U.Z,{icon:a?"eva:eye-fill":"eva:eye-off-fill"})})})}})})]}),(0,H.jsx)(B,{label:"RHFAutocomplete",children:(0,H.jsx)(M.Fl,{name:"autocomplete",label:"Autocomplete",options:T,getOptionLabel:function(e){return e.label},isOptionEqualToValue:function(e,n){return e.value===n.value}})}),(0,H.jsx)(B,{label:"RHFSelect",children:(0,H.jsxs)(M.Cc,{name:"singleSelect",label:"Single select",children:[(0,H.jsx)(C.Z,{value:"",children:"None"}),(0,H.jsx)(m.Z,{sx:{borderStyle:"dashed"}}),T.map((function(e){return(0,H.jsx)(C.Z,{value:e.label,children:e.label},e.value)}))]})}),(0,H.jsx)(B,{label:"RHFMultiSelect",children:(0,H.jsx)(M.vA,{chip:!0,checkbox:!0,name:"multiSelect",label:"Multi select",options:T})}),(0,H.jsx)(B,{label:"RHFEditor",children:(0,H.jsx)(M.LM,{simple:!0,name:"editor",sx:{height:200}})})]})}),(0,H.jsx)(y.ZP,{item:!0,xs:12,md:6,children:(0,H.jsxs)(s.Z,{spacing:2,children:[(0,H.jsx)(B,{label:"RHFUpload",children:(0,H.jsx)(M.rd,{name:"singleUpload",maxSize:3145728,onDrop:L,onDelete:function(){return h("singleUpload",null,{shouldValidate:!0})}})}),(0,H.jsx)(B,{label:"RHFUpload",children:(0,H.jsx)(M.rd,{multiple:!0,thumbnail:!0,name:"multiUpload",maxSize:3145728,onDrop:_,onRemove:function(e){var n;return h("multiUpload",P.multiUpload&&(null===(n=P.multiUpload)||void 0===n?void 0:n.filter((function(n){return n!==e}))),{shouldValidate:!0})},onRemoveAll:function(){return h("multiUpload",[],{shouldValidate:!0})},onUpload:function(){return console.log("ON UPLOAD")}})}),(0,H.jsx)(M.jb,{name:"checkbox",label:"RHFCheckbox"}),(0,H.jsx)(M._e,{name:"switch",label:"RHFSwitch"}),(0,H.jsx)(M.km,{row:!0,name:"radioGroup",label:"RHFRadioGroup",spacing:4,options:[{value:"option 1",label:"Radio 1"},{value:"option 2",label:"Radio 2"},{value:"option 3",label:"Radio 3"}]}),(0,H.jsx)(M.s2,{row:!0,name:"multiCheckbox",label:"RHFMultiCheckbox",spacing:4,options:[{value:"option 1",label:"Checkbox 1"},{value:"option 2",label:"Checkbox 2"},{value:"option 3",label:"Checkbox 3"}]}),(0,H.jsx)(B,{label:"RHFSlider",children:(0,H.jsx)(M.kk,{name:"slider"})}),(0,H.jsx)(B,{label:"RHFSlider",children:(0,H.jsx)(M.kk,{name:"sliderRange"})}),(0,H.jsx)(q.Z,{fullWidth:!0,color:"info",size:"large",type:"submit",variant:"contained",loading:N,children:"Submit to check"})]})})]}),n&&(0,H.jsx)(D,{})]})]})}function B(e){var n=e.label,r=void 0===n?"RHFTextField":n,t=e.sx,l=e.children;return(0,H.jsxs)(s.Z,{spacing:1,sx:(0,x.Z)({width:1},t),children:[(0,H.jsx)(c.Z,{variant:"caption",sx:{textAlign:"right",fontStyle:"italic",color:"text.disabled"},children:r}),l]})}function G(){var e=(0,l.useState)(!0),n=(0,t.Z)(e,2),r=n[0],x=n[1];return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(i.ql,{children:(0,H.jsx)("title",{children:" Extra Components: Form Validation | INTERNATIONAL JOURNAL INDEXING"})}),(0,H.jsx)(a.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,H.jsx)(o.Z,{children:(0,H.jsx)(h.Z,{heading:"Form Validation",links:[{name:"Components",href:p.ko.components},{name:"Form Validation"}],moreLink:["https://react-hook-form.com/","https://github.com/jquense/yup"]})})}),(0,H.jsxs)(o.Z,{sx:{my:10},children:[(0,H.jsxs)(s.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,H.jsx)(c.Z,{variant:"h4",children:" React Hook Form + Yup "}),(0,H.jsx)(d.Z,{control:(0,H.jsx)(u.Z,{checked:r,onChange:function(e){x(e.target.checked)}}),label:"Show Debug",labelPlacement:"start"})]}),(0,H.jsx)(m.Z,{sx:{my:5}}),(0,H.jsx)(z,{debug:r})]})]})}},80493:function(e,n,r){r.d(n,{Z:function(){return M}});var t=r(93433),l=r(29439),i=r(4942),a=r(87462),o=r(63366),s=r(47313),c=(r(96214),r(83061)),d=r(21921),u=r(64164),m=r(11236),p=r(42669),h=r(17551),x=r(46095),f=r(46417),b=(0,x.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),g=r(56456),j=(0,u.ZP)(g.Z)((function(e){var n=e.theme;return(0,a.Z)({display:"flex",marginLeft:"calc(".concat(n.spacing(1)," * 0.5)"),marginRight:"calc(".concat(n.spacing(1)," * 0.5)")},"light"===n.palette.mode?{backgroundColor:n.palette.grey[100],color:n.palette.grey[700]}:{backgroundColor:n.palette.grey[700],color:n.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,a.Z)({},"light"===n.palette.mode?{backgroundColor:n.palette.grey[200]}:{backgroundColor:n.palette.grey[600]}),"&:active":(0,a.Z)({boxShadow:n.shadows[0]},"light"===n.palette.mode?{backgroundColor:(0,h._4)(n.palette.grey[200],.12)}:{backgroundColor:(0,h._4)(n.palette.grey[600],.12)})})})),Z=(0,u.ZP)(b)({width:24,height:16});var v=function(e){var n=e;return(0,f.jsx)("li",{children:(0,f.jsx)(j,(0,a.Z)({focusRipple:!0},e,{ownerState:n,children:(0,f.jsx)(Z,{ownerState:n})}))})},w=r(77430),y=r(32298);function k(e){return(0,y.Z)("MuiBreadcrumbs",e)}var S=(0,w.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),R=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],C=(0,u.ZP)(p.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,n){return[(0,i.Z)({},"& .".concat(S.li),n.li),n.root]}})({}),q=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,n){return n.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),O=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,n){return n.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function U(e,n,r,t){return e.reduce((function(l,i,a){return a<e.length-1?l=l.concat(i,(0,f.jsx)(O,{"aria-hidden":!0,className:n,ownerState:t,children:r},"separator-".concat(a))):l.push(i),l}),[])}var M=s.forwardRef((function(e,n){var r=(0,m.Z)({props:e,name:"MuiBreadcrumbs"}),i=r.children,u=r.className,p=r.component,h=void 0===p?"nav":p,x=r.expandText,b=void 0===x?"Show path":x,g=r.itemsAfterCollapse,j=void 0===g?1:g,Z=r.itemsBeforeCollapse,w=void 0===Z?1:Z,y=r.maxItems,S=void 0===y?8:y,O=r.separator,M=void 0===O?"/":O,F=(0,o.Z)(r,R),I=s.useState(!1),N=(0,l.Z)(I,2),P=N[0],A=N[1],L=(0,a.Z)({},r,{component:h,expanded:P,expandText:b,itemsAfterCollapse:j,itemsBeforeCollapse:w,maxItems:S,separator:M}),_=function(e){var n=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,n)}(L),H=s.useRef(null),D=s.Children.toArray(i).filter((function(e){return s.isValidElement(e)})).map((function(e,n){return(0,f.jsx)("li",{className:_.li,children:e},"child-".concat(n))}));return(0,f.jsx)(C,(0,a.Z)({ref:n,component:h,color:"text.secondary",className:(0,c.Z)(_.root,u),ownerState:L},F,{children:(0,f.jsx)(q,{className:_.ol,ref:H,ownerState:L,children:U(P||S&&D.length<=S?D:function(e){return w+j>=e.length?e:[].concat((0,t.Z)(e.slice(0,w)),[(0,f.jsx)(v,{"aria-label":b,onClick:function(){A(!0);var e=H.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,t.Z)(e.slice(e.length-j,e.length)))}(D),_.separator,M,L)})}))}))}}]);