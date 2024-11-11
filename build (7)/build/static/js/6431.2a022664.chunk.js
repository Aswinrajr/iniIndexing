"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[6431],{48669:function(e,r,n){n.d(r,{Z:function(){return m}});var t=n(1413),i=n(45987),a=n(16157),o=n(62463),l=n(42669),s=n(80493),c=n(77449),u=n(2135),d=n(46417);function p(e){var r=e.link,n=e.activeLast,i=e.disabled,o=r.name,l=r.href,s=r.icon,p=(0,t.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},i&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),v=(0,d.jsxs)(d.Fragment,{children:[s&&(0,d.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),o]});return l?(0,d.jsx)(c.Z,{component:u.rU,to:l,sx:p,children:v}):(0,d.jsxs)(a.Z,{sx:p,children:[" ",v," "]})}var v=["links","action","heading","moreLink","activeLast","sx"];function m(e){var r=e.links,n=e.action,u=e.heading,m=e.moreLink,x=e.activeLast,f=e.sx,g=(0,i.Z)(e,v),Z=r[r.length-1].name;return(0,d.jsxs)(a.Z,{sx:(0,t.Z)({mb:5},f),children:[(0,d.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(a.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:u}),!!r.length&&(0,d.jsx)(s.Z,(0,t.Z)((0,t.Z)({separator:(0,d.jsx)(h,{})},g),{},{children:r.map((function(e){return(0,d.jsx)(p,{link:e,activeLast:x,disabled:e.name===Z},e.name||"")}))}))]}),n&&(0,d.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!m&&(0,d.jsx)(a.Z,{sx:{mt:2},children:m.map((function(e){return(0,d.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function h(){return(0,d.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},72805:function(e,r,n){n.d(r,{Z:function(){return t.Z}});var t=n(48669)},54950:function(e,r,n){n.d(r,{$F:function(){return x},$K:function(){return h},El:function(){return v},K6:function(){return d},dH:function(){return p},r$:function(){return f},xb:function(){return m},yA:function(){return g}});var t=n(1413),i=n(74165),a=n(15861),o=n(90573),l=n(36797),s=n(36974),c="journals",u=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r){var n,t,o,s=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"journal_covers",t=(0,l.cF)(),o=r.map(function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r){var a,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,l.iH)(t,"".concat(n,"/").concat(r.name)),e.next=3,(0,l.KV)(a,r);case 3:return o=e.sent,e.abrupt("return",(0,l.Jt)(o.ref));case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(o));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r){var n,a,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n={title:r.title,abbreviation:r.abbreviation||"",url:r.url||"",issnPrint:r.issnPrint||"",issnOnline:r.issnOnline||"",publisher:r.publisher||"",discipline:r.discipline||"",chiefEditor:r.chiefEditor||"",email:r.email||"",country:r.country||"",language:r.language||"",frequency:r.frequency||"",yearOfStarting:r.yearOfStarting||"",articleFormat:r.articleFormat||"",licenseType:r.licenseType||"",description:r.description||"",normalProcessing:r.normalProcessing||!0,fastTrackProcessing:r.fastTrackProcessing||!1},!(r.coverImage&&r.coverImage.length>0)){e.next=7;break}return e.next=5,u(r.coverImage,"journal_covers");case 5:a=e.sent,n.coverImage=a;case 7:return e.next=9,(0,o.ET)((0,o.hJ)(s.ZP,c),n);case 9:return l=e.sent,console.log("Document written with ID: ",l.id),e.abrupt("return",(0,t.Z)({id:l.id},n));case 14:throw e.prev=14,e.t0=e.catch(0),console.error("Error adding document: ",e.t0),new Error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r,n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(0,o.JU)(s.ZP,c,r),!(n.coverImage&&n.coverImage.length>0)){e.next=7;break}return e.next=5,u(n.coverImage,"journal_covers");case 5:t=e.sent,n.coverImage=t;case 7:e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Error updating document: ",e.t0),new Error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r,n){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,o.JU)(s.ZP,c,r),e.next=4,(0,o.oe)(n);case 4:console.log("Document deleted with ID: ",r),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error deleting document: ",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var r,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.PL)((0,o.hJ)(s.ZP,c));case 3:return r=e.sent,n=r.docs.map((function(e){return(0,t.Z)({id:e.id},e.data())})),e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("Error getting documents: ",e.t0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r){var n,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,o.JU)(s.ZP,c,r),e.next=4,(0,o.QT)(n);case 4:if((a=e.sent).exists()){e.next=8;break}throw console.error("No such document with ID: ".concat(r)),new Error("No such document!");case 8:return e.abrupt("return",(0,t.Z)({id:a.id},a.data()));case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error getting document: ",e.t0),new Error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r,n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"string"===typeof r){e.next=3;break}throw new Error("propertyId must be a string");case 3:if("boolean"===typeof n){e.next=5;break}throw new Error("featuredStatus must be a boolean");case 5:return console.log("Updating property ID: ".concat(r," with featured status: ").concat(n)),t=(0,o.JU)(s.ZP,c,r),e.next=9,(0,o.QT)(t);case 9:if(e.sent.exists()){e.next=12;break}throw new Error("No document found with ID: ".concat(r));case 12:return e.next=14,(0,o.r7)(t,{featuredStatus:n});case 14:console.log("Featured status updated to ".concat(n," for property ID: ").concat(r)),e.next=21;break;case 17:throw e.prev=17,e.t0=e.catch(0),console.error("Error updating featured status: ",e.t0),new Error(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(r,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r,n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,o.JU)(s.ZP,c,r),e.next=4,(0,o.r7)(t,{UserStatus:n});case 4:console.log("User status updated to ".concat(n," for User ID: ").concat(r)),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error updating User status: ",e.t0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,n){return e.apply(this,arguments)}}(),g=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r,n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,o.JU)(s.ZP,c,r),e.next=4,(0,o.r7)(t,{BrowseStatus:n});case 4:console.log("User status updated to ".concat(n," for User ID: ").concat(r)),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error updating User status: ",e.t0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,n){return e.apply(this,arguments)}}()},2992:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var t=n(65964),i=n(10679),a=n(42669),o=n(16157),l=n(62463),s=n(11626),c=n(69904),u=n(1413),d=n(45987),p=n(92484),v=n(8730),m=n(42123),h=n(46417),x=["card","index","sx"];function f(e){var r=e.card,n=e.index,t=e.sx,i=(0,d.Z)(e,x),s=r.subscription,c=r.price,f=r.caption,g=r.lists;return(0,h.jsxs)(p.Z,(0,u.Z)((0,u.Z)({sx:(0,u.Z)((0,u.Z)({p:5,boxShadow:function(e){return e.customShadows.z24}},(0===n||2===n)&&{boxShadow:"none",bgcolor:"background.default",border:function(e){return"dashed 1px ".concat(e.palette.divider)}}),t)},i),{},{children:[(0,h.jsx)(a.Z,{variant:"overline",sx:{color:"text.secondary"},children:s}),(0,h.jsxs)(l.Z,{spacing:1,direction:"row",sx:{my:2},children:[(0===n||2===n)&&(0,h.jsx)(a.Z,{variant:"h5",children:"Rs."}),(1===n||3===n)&&(0,h.jsx)(a.Z,{variant:"h5",children:"$."}),(0,h.jsx)(a.Z,{variant:"h2",children:0===c?"Free":c}),(1===n||2===n)&&(0,h.jsx)(a.Z,{component:"span",sx:{alignSelf:"center",color:"text.secondary"},children:"/year"})]}),(0,h.jsx)(a.Z,{variant:"caption",sx:{color:"primary.main",textTransform:"capitalize"},children:f}),(0,h.jsx)(o.Z,{sx:{width:80,height:80,mt:5},children:"basic"===s&&(0,h.jsx)(m.OC,{})||"starter"===s&&(0,h.jsx)(m.Zk,{})||(0,h.jsx)(m.Ku,{})}),(0,h.jsx)(l.Z,{component:"ul",spacing:2,sx:{p:0,my:5},children:g.map((function(e){return(0,h.jsxs)(l.Z,{component:"li",direction:"row",alignItems:"center",spacing:1,sx:{typography:"body2",color:e.isAvailable?"text.primary":"text.disabled"},children:[(0,h.jsx)(v.Z,{icon:e.isAvailable?"eva:checkmark-fill":"eva:close-fill",width:16,sx:{color:e.isAvailable?"primary.main":"inherit"}}),(0,h.jsxs)(a.Z,{variant:"body2",children:[e.text,":"]}),(0,h.jsx)(a.Z,{variant:"body2",sx:{ml:"auto",color:"text.secondary"},children:e.cost})]},e.text)}))})]}))}function g(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.ql,{children:(0,h.jsx)("title",{children:" Pricing | INTERNATIONAL JOURNAL INDEXING"})}),(0,h.jsxs)(i.Z,{sx:{pt:15,pb:10,minHeight:1},children:[(0,h.jsxs)(a.Z,{variant:"h3",align:"center",paragraph:!0,children:["Flexible plans for your",(0,h.jsx)("br",{})," community's size and needs"]}),(0,h.jsx)(a.Z,{align:"center",sx:{color:"text.secondary"},children:"Choose your plan and make modern online conversation magic"}),(0,h.jsxs)(o.Z,{sx:{my:5},children:[(0,h.jsxs)(l.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",children:[(0,h.jsx)(a.Z,{variant:"overline",sx:{mr:1.5},children:"MONTHLY"}),(0,h.jsx)(s.Z,{}),(0,h.jsx)(a.Z,{variant:"overline",sx:{ml:1.5},children:"YEARLY (save 10%)"})]}),(0,h.jsx)(a.Z,{variant:"caption",align:"right",sx:{color:"text.secondary",display:"block"},children:"* Plus applicable taxes"})]}),(0,h.jsx)(o.Z,{gap:3,display:"grid",gridTemplateColumns:{md:"repeat(3, 1fr)"},children:c.Xp.map((function(e,r){return(0,h.jsx)(f,{card:e,index:r},e.subscription)}))})]})]})}},76516:function(e,r,n){n.d(r,{Z:function(){return S}});var t=n(93433),i=n(74165),a=n(15861),o=n(47313),l=n(58467),s=n(3463),c=n(62563),u=n(75627),d=n(32703),p=n(82937),v=n(92484),m=n(16157),h=n(34940),x=n(42669),f=n(62463),g=n(48175),Z=n(50734),b=n(41034),j=n(54950),y=n(2992),w=n(46417),P=[{code:"AD",label:"Andorra",phone:"376"},{code:"AI",label:"Anguilla",phone:"1-264"},{code:"AL",label:"Albania",phone:"355"},{code:"AM",label:"Armenia",phone:"374"},{code:"AO",label:"Angola",phone:"244"},{code:"AQ",label:"Antarctica",phone:"672"},{code:"AR",label:"Argentina",phone:"54"},{code:"AS",label:"American Samoa",phone:"1-684"},{code:"AT",label:"Austria",phone:"43"}],k=[{label:"English",value:"English"},{label:"Spanish",value:"Spanish"},{label:"French",value:"French"}],C=[{label:"Monthly",value:"Monthly"},{label:"Quarterly",value:"Quarterly"},{label:"Annually",value:"Annually"}],I=[{label:"CC BY-SA",value:"CC BY-SA"},{label:"CC BY-NC",value:"CC BY-NC"},{label:"CC BY-NC-SA",value:"CC BY-NC-SA"},{label:"CC BY-ND",value:"CC BY-ND"},{label:"CC BY-NC-ND",value:"CC BY-NC-ND"}];function S(e){var r=e.isEdit,n=e.currentJournal,S=(0,l.s0)(),A=(0,b.Ds)().enqueueSnackbar,E=(0,l.UO)().id,N=s.Ry().shape({title:s.Z_().required("Journal Title is required"),abbreviation:s.Z_(),url:s.Z_().url("Invalid URL format"),issnPrint:s.Z_(),issnOnline:s.Z_(),publisher:s.Z_(),discipline:s.Z_(),chiefEditor:s.Z_(),email:s.Z_().email("Invalid email format"),country:s.Z_().required("Country is required"),language:s.Z_().required("Language is required"),frequency:s.Z_().required("Frequency is required"),yearOfStarting:s.Rx().integer().min(1900,"Invalid year"),articleFormat:s.Z_(),licenseType:s.Z_().required("License Type is required"),coverImage:s.IX().min(1,"At least one image is required"),description:s.Z_().max(2e4,"Description must not exceed 200 words"),normalProcessing:s.O7(),fastTrackProcessing:s.O7()}),T=(0,o.useMemo)((function(){return{title:(null===n||void 0===n?void 0:n.title)||"",abbreviation:(null===n||void 0===n?void 0:n.abbreviation)||"",url:(null===n||void 0===n?void 0:n.url)||"",issnPrint:(null===n||void 0===n?void 0:n.issnPrint)||"",issnOnline:(null===n||void 0===n?void 0:n.issnOnline)||"",publisher:(null===n||void 0===n?void 0:n.publisher)||"",discipline:(null===n||void 0===n?void 0:n.discipline)||"",chiefEditor:(null===n||void 0===n?void 0:n.chiefEditor)||"",email:(null===n||void 0===n?void 0:n.email)||"",country:(null===n||void 0===n?void 0:n.country)||P[0].value,language:(null===n||void 0===n?void 0:n.language)||k[0].value,frequency:(null===n||void 0===n?void 0:n.frequency)||C[0].value,yearOfStarting:(null===n||void 0===n?void 0:n.yearOfStarting)||"",articleFormat:(null===n||void 0===n?void 0:n.articleFormat)||"",licenseType:(null===n||void 0===n?void 0:n.licenseType)||I[0].value,coverImage:[],description:(null===n||void 0===n?void 0:n.description)||"",normalProcessing:(null===n||void 0===n?void 0:n.normalProcessing)||!1,fastTrackProcessing:(null===n||void 0===n?void 0:n.fastTrackProcessing)||!1}}),[n]),_=(0,u.cI)({resolver:(0,c.X)(N),defaultValues:T}),O=_.reset,R=_.watch,F=_.setValue,q=_.handleSubmit,D=(_.control,_.formState.isSubmitting,R());(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=12;break}return e.prev=1,e.next=4,(0,j.$K)(E);case 4:(n=e.sent)?(console.log("Fetched Journal Data:",n),O({title:(null===n||void 0===n?void 0:n.title)||"",abbreviation:(null===n||void 0===n?void 0:n.abbreviation)||"",url:(null===n||void 0===n?void 0:n.url)||"",issnPrint:(null===n||void 0===n?void 0:n.issnPrint)||"",issnOnline:(null===n||void 0===n?void 0:n.issnOnline)||"",publisher:(null===n||void 0===n?void 0:n.publisher)||"",discipline:(null===n||void 0===n?void 0:n.discipline)||"",chiefEditor:(null===n||void 0===n?void 0:n.chiefEditor)||"",email:(null===n||void 0===n?void 0:n.email)||"",country:(null===n||void 0===n?void 0:n.country)||P[0].value,language:(null===n||void 0===n?void 0:n.language)||k[0].value,frequency:(null===n||void 0===n?void 0:n.frequency)||C[0].value,yearOfStarting:(null===n||void 0===n?void 0:n.yearOfStarting)||"",articleFormat:(null===n||void 0===n?void 0:n.articleFormat)||"",licenseType:(null===n||void 0===n?void 0:n.licenseType)||I[0].value,coverImage:(null===n||void 0===n?void 0:n.coverImage)||[],description:(null===n||void 0===n?void 0:n.description)||"",normalProcessing:(null===n||void 0===n?void 0:n.normalProcessing)||!1,fastTrackProcessing:(null===n||void 0===n?void 0:n.fastTrackProcessing)||!1}),console.log("Form has been reset with fetched journal data")):(A("Journal not found",{variant:"error"}),S(g.vB.eCommerce.list)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Error fetching journal:",e.t0),A("An error occurred while fetching journal details",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[E,r,O,A,S]),(0,o.useEffect)((function(){r&&n&&O(T),r||O(T)}),[r,n,O,T]);var L=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Submitting Data:",n),e.prev=1,!r){e.next=7;break}return e.next=5,(0,j.dH)(E,n);case 5:e.next=9;break;case 7:return e.next=9,(0,j.K6)(n);case 9:O(),A(r?"Update success!":"Create success!"),S(g.vB.eCommerce.list),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.error("Error during submission:",e.t0),A("An error occurred. Please try again.",{variant:"error"});case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(r){return e.apply(this,arguments)}}(),U=(0,o.useCallback)((function(e){console.log("Files dropped:",e);var r=D.coverImage||[],n=e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}));F("coverImage",[].concat((0,t.Z)(r),(0,t.Z)(n)),{shouldValidate:!0})}),[F,D.coverImage]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Z.ZP,{methods:_,onSubmit:q(L),children:(0,w.jsx)(p.ZP,{container:!0,spacing:3,children:(0,w.jsx)(p.ZP,{item:!0,xs:12,md:12,children:(0,w.jsxs)(v.Z,{sx:{p:3},children:[(0,w.jsxs)(m.Z,{display:"flex",alignItems:"center",children:[(0,w.jsx)(h.Z,{style:{flexGrow:1}}),(0,w.jsx)(x.Z,{variant:"h4",style:{margin:"0 16px",whiteSpace:"nowrap"},children:"Journal Submission"}),(0,w.jsx)(h.Z,{style:{flexGrow:1}})]}),(0,w.jsx)(f.Z,{spacing:3,style:{marginTop:"30px"},children:(0,w.jsxs)(p.ZP,{container:!0,spacing:2,children:[(0,w.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(Z.au,{name:"title",label:"Journal Title*",fullWidth:!0})}),(0,w.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(Z.au,{name:"abbreviation",label:"Abbreviation",fullWidth:!0})}),(0,w.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(Z.au,{name:"url",label:"Journal URL",fullWidth:!0})}),(0,w.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(Z.au,{name:"issnPrint",label:"ISSN (Print Version)",fullWidth:!0})}),(0,w.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(Z.au,{name:"issnOnline",label:"ISSN (Online Version)",fullWidth:!0})}),(0,w.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(Z.au,{name:"publisher",label:"Publisher / Co-Publisher",fullWidth:!0})}),(0,w.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(Z.au,{name:"discipline",label:"Discipline",fullWidth:!0})}),(0,w.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(Z.au,{name:"chiefEditor",label:"Chief Editor",fullWidth:!0})}),(0,w.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(Z.au,{name:"email",label:"Email Id",fullWidth:!0})}),(0,w.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsxs)(Z.Cc,{native:!0,name:"country",label:"Country",fullWidth:!0,children:[(0,w.jsx)("option",{value:""}),P.map((function(e){return(0,w.jsx)("option",{value:e.value,children:e.label},e.value)}))]})}),(0,w.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(Z.au,{name:"language",label:"Langauge",fullWidth:!0})}),(0,w.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsxs)(Z.Cc,{native:!0,name:"frequency",label:"Frequency",fullWidth:!0,children:[(0,w.jsx)("option",{value:""}),C.map((function(e){return(0,w.jsx)("option",{value:e.value,children:e.label},e.value)}))]})}),(0,w.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(Z.au,{name:"yearOfStarting",label:"Year of Starting",type:"number",fullWidth:!0})}),(0,w.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(Z.au,{name:"articleFormat",label:"Article Format",fullWidth:!0})}),(0,w.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsxs)(Z.Cc,{native:!0,name:"licenseType",label:"License Type",fullWidth:!0,children:[(0,w.jsx)("option",{value:""}),I.map((function(e){return(0,w.jsx)("option",{value:e.value,children:e.label},e.value)}))]})}),(0,w.jsxs)(p.ZP,{item:!0,xs:12,md:12,children:[(0,w.jsx)(x.Z,{variant:"title",style:{fontWeight:"bold"},children:"Cover Image"}),(0,w.jsx)(Z.rd,{multiple:!0,thumbnail:!0,name:"coverImage",maxSize:3145728,accept:"image/*",onDrop:U,onRemove:function(e){var r,n=D.images&&(null===(r=D.coverImage)||void 0===r?void 0:r.filter((function(r){return r!==e})));F("coverImage",n)},onRemoveAll:function(){F("coverImage",[])},onUpload:function(){return console.log("ON UPLOAD")}})]}),(0,w.jsxs)(p.ZP,{item:!0,xs:12,md:12,children:[(0,w.jsx)(x.Z,{variant:"title",style:{fontWeight:"bold"},children:"Description"}),(0,w.jsx)(Z.LM,{simple:!0,name:"description"})]}),(0,w.jsxs)(p.ZP,{item:!0,xs:12,sm:6,children:[(0,w.jsx)(Z._e,{name:"NormalProcessing",label:"Normal Processing"}),(0,w.jsx)(Z._e,{name:"Fast-track / Priority Processing",label:"Fast-track / Priority Processing"})]}),(0,w.jsxs)(p.ZP,{container:!0,spacing:2,justifyContent:"flex-end",children:[(0,w.jsx)(p.ZP,{item:!0,children:(0,w.jsx)(d.Z,{type:"submit",variant:"contained",size:"large",children:r?"Save Changes":"Create Journal"})}),(0,w.jsx)(p.ZP,{item:!0,children:(0,w.jsx)(d.Z,{type:"button",variant:"outlined",size:"large",onClick:function(){return O()},children:"Reset"})})]})]})})]})})})}),(0,w.jsx)("br",{}),(0,w.jsx)(y.default,{}),(0,w.jsx)(x.Z,{variant:"subtitle1",children:"If the journal is approved by the editorial committee of International Journal Indexing a confirmation email will be send to editor in chief. After fulfilled all formalities, journal will receives indexing / IJIN factor certificate."})]})}},80493:function(e,r,n){n.d(r,{Z:function(){return N}});var t=n(93433),i=n(29439),a=n(4942),o=n(87462),l=n(63366),s=n(47313),c=(n(96214),n(83061)),u=n(21921),d=n(64164),p=n(11236),v=n(42669),m=n(17551),h=n(46095),x=n(46417),f=(0,h.Z)((0,x.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),g=n(56456),Z=(0,d.ZP)(g.Z)((function(e){var r=e.theme;return(0,o.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,o.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,o.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,m._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,m._4)(r.palette.grey[600],.12)})})})),b=(0,d.ZP)(f)({width:24,height:16});var j=function(e){var r=e;return(0,x.jsx)("li",{children:(0,x.jsx)(Z,(0,o.Z)({focusRipple:!0},e,{ownerState:r,children:(0,x.jsx)(b,{ownerState:r})}))})},y=n(77430),w=n(32298);function P(e){return(0,w.Z)("MuiBreadcrumbs",e)}var k=(0,y.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),C=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],I=(0,d.ZP)(v.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,a.Z)({},"& .".concat(k.li),r.li),r.root]}})({}),S=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),A=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function E(e,r,n,t){return e.reduce((function(i,a,o){return o<e.length-1?i=i.concat(a,(0,x.jsx)(A,{"aria-hidden":!0,className:r,ownerState:t,children:n},"separator-".concat(o))):i.push(a),i}),[])}var N=s.forwardRef((function(e,r){var n=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),a=n.children,d=n.className,v=n.component,m=void 0===v?"nav":v,h=n.expandText,f=void 0===h?"Show path":h,g=n.itemsAfterCollapse,Z=void 0===g?1:g,b=n.itemsBeforeCollapse,y=void 0===b?1:b,w=n.maxItems,k=void 0===w?8:w,A=n.separator,N=void 0===A?"/":A,T=(0,l.Z)(n,C),_=s.useState(!1),O=(0,i.Z)(_,2),R=O[0],F=O[1],q=(0,o.Z)({},n,{component:m,expanded:R,expandText:f,itemsAfterCollapse:Z,itemsBeforeCollapse:y,maxItems:k,separator:N}),D=function(e){var r=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},P,r)}(q),L=s.useRef(null),U=s.Children.toArray(a).filter((function(e){return s.isValidElement(e)})).map((function(e,r){return(0,x.jsx)("li",{className:D.li,children:e},"child-".concat(r))}));return(0,x.jsx)(I,(0,o.Z)({ref:r,component:m,color:"text.secondary",className:(0,c.Z)(D.root,d),ownerState:q},T,{children:(0,x.jsx)(S,{className:D.ol,ref:L,ownerState:q,children:E(R||k&&U.length<=k?U:function(e){return y+Z>=e.length?e:[].concat((0,t.Z)(e.slice(0,y)),[(0,x.jsx)(j,{"aria-label":f,onClick:function(){F(!0);var e=L.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,t.Z)(e.slice(e.length-Z,e.length)))}(U),D.separator,N,q)})}))}))},92484:function(e,r,n){n.d(r,{Z:function(){return f}});var t=n(87462),i=n(63366),a=n(47313),o=n(83061),l=n(21921),s=n(64164),c=n(11236),u=n(80654),d=n(77430),p=n(32298);function v(e){return(0,p.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var m=n(46417),h=["className","raised"],x=(0,s.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),f=a.forwardRef((function(e,r){var n=(0,c.Z)({props:e,name:"MuiCard"}),a=n.className,s=n.raised,u=void 0!==s&&s,d=(0,i.Z)(n,h),p=(0,t.Z)({},n,{raised:u}),f=function(e){var r=e.classes;return(0,l.Z)({root:["root"]},v,r)}(p);return(0,m.jsx)(x,(0,t.Z)({className:(0,o.Z)(f.root,a),elevation:u?8:void 0,ref:r,ownerState:p},d))}))}}]);