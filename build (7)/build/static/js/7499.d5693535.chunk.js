"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[7499],{95183:function(e,r,t){t.d(r,{Oq:function(){return f},bg:function(){return m},in:function(){return p},pl:function(){return h},sF:function(){return d}});var n=t(1413),a=t(74165),i=t(15861),s=t(90573),c=t(36797),o=t(36974),u="abstracts",l=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r){var t,n,i,s,o=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"abstract_assets",n=(0,c.cF)(),i=(0,c.iH)(n,"".concat(t,"/").concat(r.name)),e.next=5,(0,c.KV)(i,r);case 5:return s=e.sent,e.abrupt("return",(0,c.Jt)(s.ref));case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r){var t,i,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t={journalName:r.journalName||"",issn:r.issn||"",publisher:r.publisher||"",title:r.title||"",affiliation:r.affiliation||"",authorName:r.authorName||"",abstract:r.abstract||"",linkDOI:r.linkDOI||"",articleType:r.articleType||""},!r.assetFile){e.next=7;break}return e.next=5,l(r.assetFile,"abstract_assets");case 5:i=e.sent,t.assetFile=i;case 7:return e.next=9,(0,s.ET)((0,s.hJ)(o.ZP,u),t);case 9:return c=e.sent,console.log("Abstract document written with ID: ",c.id),e.abrupt("return",(0,n.Z)({id:c.id},t));case 14:throw e.prev=14,e.t0=e.catch(0),console.error("Error adding abstract document: ",e.t0),new Error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r,t){var i,c,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i=(0,s.JU)(o.ZP,u,r),!t.assetFile){e.next=7;break}return e.next=5,l(t.assetFile,"abstract_assets");case 5:c=e.sent,t.assetFile=c;case 7:return d={},Object.keys(t).forEach((function(e){var r=t[e];if(void 0!==r){var n=e.replace(/[~*/[\]]/g,"_").replace(/\s+/g,"_");d[n]=r}})),e.next=11,(0,s.r7)(i,d);case 11:return console.log("Abstract document updated with ID: ",r),e.abrupt("return",(0,n.Z)({id:r},d));case 15:throw e.prev=15,e.t0=e.catch(0),console.error("Error updating abstract document: ",e.t0),new Error(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(r,t){return e.apply(this,arguments)}}(),m=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,s.JU)(o.ZP,u,r),e.next=4,(0,s.oe)(t);case 4:console.log("Abstract document deleted with ID: ",r),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error deleting abstract document: ",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var r,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.PL)((0,s.hJ)(o.ZP,u));case 3:return r=e.sent,t=r.docs.map((function(e){var r=e.data();return{id:e.id,journalName:r.journalName||"",issn:r.issn||"",publisher:r.publisher||"",title:r.title||"",affiliation:r.affiliation||"",authorName:r.authorName||"",abstract:r.abstract||"",linkDOI:r.linkDOI||"",articleType:r.articleType||"",assetFile:r.assetFile||null}})),e.abrupt("return",t);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("Error getting abstract documents: ",e.t0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r){var t,n,i,c,l,d,f,m,p,h,x,v,b;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,s.JU)(o.ZP,u,r),e.next=4,(0,s.QT)(t);case 4:if((n=e.sent).exists()){e.next=8;break}throw console.error("No such abstract document with ID: ".concat(r)),new Error("No such document!");case 8:return i=n.data(),c=i.journalName,l=i.issn,d=i.publisher,f=i.title,m=i.affiliation,p=i.authorName,h=i.abstract,x=i.linkDOI,v=i.articleType,b=i.assetFile,e.abrupt("return",{id:n.id,journalName:c||"",issn:l||"",publisher:d||"",title:f||"",affiliation:m||"",authorName:p||"",abstract:h||"",linkDOI:x||"",articleType:v||"",assetFile:b||null});case 12:throw e.prev=12,e.t0=e.catch(0),console.error("Error getting abstract document: ",e.t0),new Error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(r){return e.apply(this,arguments)}}()},39719:function(e,r,t){t.r(r),t.d(r,{default:function(){return o}});var n=t(65964),a=t(10679),i=t(50152),s=t(85652),c=t(46417);function o(){var e=(0,i.K$)().themeStretch;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.ql,{children:(0,c.jsx)("title",{children:" Ecommerce: Create a new product | INTERNATIONAL JOURNAL INDEXING"})}),(0,c.jsx)(a.Z,{maxWidth:!e&&"lg",children:(0,c.jsx)(s.Z,{})})]})}},85652:function(e,r,t){t.d(r,{Z:function(){return g}});var n=t(74165),a=t(15861),i=t(47313),s=t(58467),c=t(3463),o=t(62563),u=t(75627),l=t(32703),d=t(82937),f=t(92484),m=t(16157),p=t(34940),h=t(42669),x=t(62463),v=t(50734),b=t(41034),Z=t(48175),j=t(95183),w=t(46417);function g(e){var r=e.isEdit,t=e.currentConference,g=(0,s.s0)(),N=(0,b.Ds)().enqueueSnackbar,k=(0,s.UO)().id,y=c.Ry().shape({journalName:c.Z_().required("Title of conference/symposium is required"),issn:c.Z_().required("Organizer is required"),publisher:c.Z_().required("Venue is required"),title:c.Z_().required("Date of conference/symposium is required").nullable(),affiliation:c.Z_().required("Name of Contact person is required"),authorName:c.Z_().required("authorName is required"),abstract:c.Z_().required("Country is required"),linkDOI:c.Z_().required("Language is required"),articleType:c.Z_().max(2e4,"Description must not exceed 200 words")}),P=(0,i.useMemo)((function(){return{journalName:(null===t||void 0===t?void 0:t.journalName)||"",issn:(null===t||void 0===t?void 0:t.issn)||"",publisher:(null===t||void 0===t?void 0:t.publisher)||"",title:(null===t||void 0===t?void 0:t.title)||"",affiliation:(null===t||void 0===t?void 0:t.affiliation)||"",authorName:(null===t||void 0===t?void 0:t.authorName)||"",abstract:(null===t||void 0===t?void 0:t.abstract)||"",linkDOI:(null===t||void 0===t?void 0:t.linkDOI)||"",articleType:(null===t||void 0===t?void 0:t.articleType)||""}}),[t]),I=(0,u.cI)({resolver:(0,o.X)(y),defaultValues:P}),D=I.reset,_=I.handleSubmit,T=I.formState.isSubmitting;(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=12;break}return e.prev=1,e.next=4,(0,j.pl)(k);case 4:(t=e.sent)?(null!==(a=t.date)&&void 0!==a&&a.toDate?t.date.toDate():"",D({journalName:t.journalName||"",issn:t.issn||"",publisher:t.publisher||"",title:t.title||"",affiliation:t.affiliation||"",authorName:t.authorName||"",abstract:t.abstract||"",linkDOI:t.linkDOI||"",articleType:t.articleType||""})):(N("Conference not found",{variant:"error"}),g("/")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Error fetching conference:",e.t0),N("An error occurred while fetching conference details",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[r,k,D,g,N]),(0,i.useEffect)((function(){D(P)}),[r,t,D,P]);var q=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!r){e.next=6;break}return e.next=4,(0,j.Oq)(k,t);case 4:e.next=8;break;case 6:return e.next=8,(0,j.sF)(t);case 8:D(),N(r?"Update success!":"Create success!"),g(Z.vB.conference.list),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Submission error:",e.t0),N("An error occurred. Please try again.",{variant:"error"});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(r){return e.apply(this,arguments)}}();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(v.ZP,{methods:I,onSubmit:_(q),children:(0,w.jsx)(d.ZP,{container:!0,spacing:3,children:(0,w.jsx)(d.ZP,{item:!0,xs:12,md:12,children:(0,w.jsxs)(f.Z,{sx:{p:3},children:[(0,w.jsxs)(m.Z,{display:"flex",alignItems:"center",children:[(0,w.jsx)(p.Z,{style:{flexGrow:1}}),(0,w.jsx)(h.Z,{variant:"h4",style:{margin:"0 16px",whiteSpace:"nowrap"},children:"Abstract / Articles Journal Submission"}),(0,w.jsx)(p.Z,{style:{flexGrow:1}})]}),(0,w.jsx)(x.Z,{spacing:3,style:{marginTop:"30px"},children:(0,w.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,w.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(v.au,{name:"journalName",label:"Journal Name"})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(v.au,{name:"issn",label:"ISSN"})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(v.au,{name:"publisher",label:"Publisher"})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(v.au,{name:"title",label:"Title"})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(v.au,{name:"affiliation",label:"Affiliation"})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(v.au,{name:"authorName",label:"Author's Name"})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(v.au,{name:"abstract",label:"Abstract/Keywords",multiline:!0,rows:3})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(v.au,{name:"linkDOI",label:"Link/DOI"})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,md:6,children:(0,w.jsx)(v.au,{name:"articleType",label:"Article Type"})}),(0,w.jsx)("br",{}),(0,w.jsxs)(d.ZP,{container:!0,spacing:2,justifyContent:"flex-end",style:{marginTop:"30px"},children:[(0,w.jsx)(d.ZP,{item:!0,children:(0,w.jsx)(l.Z,{type:"submit",variant:"contained",size:"large",loading:T,children:r?"Save Changes":"Create Conference"})}),(0,w.jsx)(d.ZP,{item:!0,children:(0,w.jsx)(l.Z,{type:"button",variant:"outlined",size:"large",onClick:function(){return D()},children:"Reset"})})]})]})})]})})})}),(0,w.jsx)("br",{})]})}},92484:function(e,r,t){t.d(r,{Z:function(){return v}});var n=t(87462),a=t(63366),i=t(47313),s=t(83061),c=t(21921),o=t(64164),u=t(11236),l=t(80654),d=t(77430),f=t(32298);function m(e){return(0,f.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var p=t(46417),h=["className","raised"],x=(0,o.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),v=i.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiCard"}),i=t.className,o=t.raised,l=void 0!==o&&o,d=(0,a.Z)(t,h),f=(0,n.Z)({},t,{raised:l}),v=function(e){var r=e.classes;return(0,c.Z)({root:["root"]},m,r)}(f);return(0,p.jsx)(x,(0,n.Z)({className:(0,s.Z)(v.root,i),elevation:l?8:void 0,ref:r,ownerState:f},d))}))}}]);