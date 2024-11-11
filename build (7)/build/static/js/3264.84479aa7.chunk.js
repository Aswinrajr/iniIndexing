"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[3264],{73493:function(e,n,r){r.d(n,{DV:function(){return v},LX:function(){return m},MU:function(){return p},dL:function(){return d},ku:function(){return f}});var t=r(1413),i=r(74165),a=r(15861),s=r(90573),o=r(36797),c=r(36974),l="ijins",u=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var r,t,s,c=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:"ijin_covers",t=(0,o.cF)(),s=n.map(function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,o.iH)(t,"".concat(r,"/").concat(n.name)),e.next=3,(0,o.KV)(a,n);case 3:return s=e.sent,e.abrupt("return",(0,o.Jt)(s.ref));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(s));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var r,a,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r={title:n.title,issnPrint:n.issnPrint||"",issnOnline:n.issnOnline||"",yearOfStarting:n.yearOfStarting||"",licenseType:n.licenseType||"",ijin:n.ijin||"",email:n.email||""},!(n.coverImage&&n.coverImage.length>0)){e.next=7;break}return e.next=5,u(n.coverImage,"ijin_covers");case 5:a=e.sent,r.coverImage=a;case 7:return e.next=9,(0,s.ET)((0,s.hJ)(c.ZP,l),r);case 9:return o=e.sent,console.log("Document written with ID: ",o.id),e.abrupt("return",(0,t.Z)({id:o.id},r));case 14:throw e.prev=14,e.t0=e.catch(0),console.error("Error adding document: ",e.t0),new Error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n,r){var a,o,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=(0,s.JU)(c.ZP,l,n),!(r.coverImage&&r.coverImage.length>0)){e.next=7;break}return e.next=5,u(r.coverImage,"journal_covers");case 5:o=e.sent,r.coverImage=o;case 7:return d={},Object.keys(r).forEach((function(e){var n=r[e];if(void 0!==n){var t=e.replace(/[~*/[\]]/g,"_").replace(/\s+/g,"_");d[t]=n}})),e.next=11,(0,s.r7)(a,d);case 11:return console.log("Ijin document updated with ID: ",n),e.abrupt("return",(0,t.Z)({id:n},d));case 15:throw e.prev=15,e.t0=e.catch(0),console.error("Error updating ijin document: ",e.t0),new Error(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(n,r){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=(0,s.JU)(c.ZP,l,n),e.next=4,(0,s.oe)(r);case 4:console.log("Ijin document deleted with ID: ",n),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error deleting ijin document: ",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var n,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.PL)((0,s.hJ)(c.ZP,l));case 3:return n=e.sent,r=n.docs.map((function(e){var n=e.data();return{id:e.id,title:n.title||"",issnPrint:n.issnPrint||"",issnOnline:n.issnOnline||"",yearOfStarting:n.yearOfStarting||"",licenseType:n.licenseType||"",ijin:n.ijin||"",email:n.email||"",coverImage:n.coverImage||""}})),e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("Error getting ijin documents: ",e.t0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var r,t,a,o,u,d,v,m,f,p,h;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=(0,s.JU)(c.ZP,l,n),e.next=4,(0,s.QT)(r);case 4:if((t=e.sent).exists()){e.next=8;break}throw console.error("No such ijin document with ID: ".concat(n)),new Error("No such document!");case 8:return a=t.data(),o=a.title,u=a.issnPrint,d=a.issnOnline,v=a.yearOfStarting,m=a.licenseType,f=a.ijin,p=a.email,h=a.coverImage,e.abrupt("return",{id:t.id,title:o||"",issnPrint:u||"",issnOnline:d||"",yearOfStarting:v||"",licenseType:m||"",ijin:f||"",email:p||"",coverImage:h||""});case 12:throw e.prev=12,e.t0=e.catch(0),console.error("Error fetching ijin by ID:",e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}()},83264:function(e,n,r){r.d(n,{Z:function(){return I}});var t=r(93433),i=r(74165),a=r(15861),s=r(47313),o=r(58467),c=r(3463),l=r(62563),u=r(75627),d=r(32703),v=r(82937),m=r(92484),f=r(16157),p=r(34940),h=r(42669),x=r(62463),g=r(48175),Z=r(50734),j=r(41034),y=r(73493),b=r(46417),w=[{label:"CC BY-SA",value:"CC BY-SA"},{label:"CC BY-NC",value:"CC BY-NC"},{label:"CC BY-NC-SA",value:"CC BY-NC-SA"},{label:"CC BY-ND",value:"CC BY-ND"},{label:"CC BY-NC-ND",value:"CC BY-NC-ND"}];function I(e){var n=e.isEdit,r=e.currentJournal,I=(0,o.s0)(),C=(0,j.Ds)().enqueueSnackbar,P=(0,o.UO)().id,S=c.Ry().shape({title:c.Z_().required("Journal Title is required"),ijin:c.Z_(),url:c.Z_().url("Invalid URL format"),issnPrint:c.Z_(),issnOnline:c.Z_(),email:c.Z_().email("Invalid email format"),yearOfStarting:c.Z_().required("Invalid year"),licenseType:c.Z_().required("License Type is required"),coverImage:c.IX().min(1,"At least one image is required")}),O=(0,s.useMemo)((function(){return{title:(null===r||void 0===r?void 0:r.title)||"",issnPrint:(null===r||void 0===r?void 0:r.issnPrint)||"",issnOnline:(null===r||void 0===r?void 0:r.issnOnline)||"",email:(null===r||void 0===r?void 0:r.email)||"",yearOfStarting:(null===r||void 0===r?void 0:r.yearOfStarting)||"",licenseType:(null===r||void 0===r?void 0:r.licenseType)||w[0].value,coverImage:(null===r||void 0===r?void 0:r.coverImage)||[],ijin:(null===r||void 0===r?void 0:r.ijin)||""}}),[r]),k=(0,u.cI)({resolver:(0,l.X)(S),defaultValues:O}),_=k.reset,N=k.watch,T=k.setValue,E=k.handleSubmit,D=(k.control,k.formState.isSubmitting,N());(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=12;break}return e.prev=1,e.next=4,(0,y.MU)(P);case 4:(r=e.sent)?(console.log("Fetched Journal Data:",r),_({title:(null===r||void 0===r?void 0:r.title)||"",issnPrint:(null===r||void 0===r?void 0:r.issnPrint)||"",issnOnline:(null===r||void 0===r?void 0:r.issnOnline)||"",email:(null===r||void 0===r?void 0:r.email)||"",yearOfStarting:(null===r||void 0===r?void 0:r.yearOfStarting)||"",licenseType:(null===r||void 0===r?void 0:r.licenseType)||w[0].value,coverImage:(null===r||void 0===r?void 0:r.coverImage)||[],ijin:(null===r||void 0===r?void 0:r.ijin)||""}),console.log("Form has been reset with fetched journal data")):(C("Journal not found",{variant:"error"}),I(g.vB.eCommerce.list)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Error fetching journal:",e.t0),C("An error occurred while fetching journal details",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[P,n,_,C,I]),(0,s.useEffect)((function(){n&&r&&_(O),n||_(O)}),[n,r,_,O]);var J=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Submitting Data:",r),e.prev=1,!n){e.next=7;break}return e.next=5,(0,y.DV)(P,r);case 5:e.next=9;break;case 7:return e.next=9,(0,y.dL)(r);case 9:_(),C(n?"Update success!":"Create success!"),I(g.vB.eCommerce.list),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.error("Error during submission:",e.t0),C("An error occurred. Please try again.",{variant:"error"});case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(n){return e.apply(this,arguments)}}(),B=(0,s.useCallback)((function(e){console.log("Files dropped:",e);var n=D.coverImage||[],r=e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}));T("coverImage",[].concat((0,t.Z)(n),(0,t.Z)(r)),{shouldValidate:!0})}),[T,D.coverImage]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Z.ZP,{methods:k,onSubmit:E(J),children:(0,b.jsx)(v.ZP,{container:!0,spacing:3,children:(0,b.jsx)(v.ZP,{item:!0,xs:12,md:12,children:(0,b.jsxs)(m.Z,{sx:{p:3},children:[(0,b.jsxs)(f.Z,{display:"flex",alignItems:"center",children:[(0,b.jsx)(p.Z,{style:{flexGrow:1}}),(0,b.jsx)(h.Z,{variant:"h4",style:{margin:"0 16px",whiteSpace:"nowrap"},children:"IJIN Submission"}),(0,b.jsx)(p.Z,{style:{flexGrow:1}})]}),(0,b.jsx)(x.Z,{spacing:3,style:{marginTop:"30px"},children:(0,b.jsxs)(v.ZP,{container:!0,spacing:2,children:[(0,b.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(Z.au,{name:"title",label:"Journal Title*",fullWidth:!0})}),(0,b.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(Z.au,{name:"issnPrint",label:"P- ISSN",fullWidth:!0})}),(0,b.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(Z.au,{name:"issnOnline",label:"E- ISSN ",fullWidth:!0})}),(0,b.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(Z.au,{name:"email",label:"Email Id",fullWidth:!0})}),(0,b.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(Z.au,{name:"yearOfStarting",label:"Indexed Since",type:"string",fullWidth:!0})}),(0,b.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsxs)(Z.Cc,{native:!0,name:"licenseType",label:"License Type",fullWidth:!0,children:[(0,b.jsx)("option",{value:""}),w.map((function(e){return(0,b.jsx)("option",{value:e.value,children:e.label},e.value)}))]})}),(0,b.jsxs)(v.ZP,{item:!0,xs:12,md:12,children:[(0,b.jsx)(h.Z,{variant:"title",style:{fontWeight:"bold"},children:"Cover Image"}),(0,b.jsx)(Z.rd,{multiple:!0,thumbnail:!0,name:"coverImage",maxSize:3145728,accept:"image/*",onDrop:B,onRemove:function(e){var n,r=D.images&&(null===(n=D.coverImage)||void 0===n?void 0:n.filter((function(n){return n!==e})));T("coverImage",r)},onRemoveAll:function(){T("coverImage",[])},onUpload:function(){return console.log("ON UPLOAD")}})]}),(0,b.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(Z.au,{name:"ijin",label:"IJIN Value",type:"string",fullWidth:!0})}),(0,b.jsxs)(v.ZP,{container:!0,spacing:2,justifyContent:"flex-end",children:[(0,b.jsx)(v.ZP,{item:!0,children:(0,b.jsx)(d.Z,{type:"submit",variant:"contained",size:"large",children:n?"Save Changes":"Create Journal"})}),(0,b.jsx)(v.ZP,{item:!0,children:(0,b.jsx)(d.Z,{type:"button",variant:"outlined",size:"large",onClick:function(){return _()},children:"Reset"})})]})]})})]})})})}),(0,b.jsx)("br",{})]})}},92484:function(e,n,r){r.d(n,{Z:function(){return x}});var t=r(87462),i=r(63366),a=r(47313),s=r(83061),o=r(21921),c=r(64164),l=r(11236),u=r(80654),d=r(77430),v=r(32298);function m(e){return(0,v.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var f=r(46417),p=["className","raised"],h=(0,c.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),x=a.forwardRef((function(e,n){var r=(0,l.Z)({props:e,name:"MuiCard"}),a=r.className,c=r.raised,u=void 0!==c&&c,d=(0,i.Z)(r,p),v=(0,t.Z)({},r,{raised:u}),x=function(e){var n=e.classes;return(0,o.Z)({root:["root"]},m,n)}(v);return(0,f.jsx)(h,(0,t.Z)({className:(0,s.Z)(x.root,a),elevation:u?8:void 0,ref:n,ownerState:v},d))}))}}]);