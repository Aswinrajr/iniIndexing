"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[2328],{30317:function(e,r,t){t.d(r,{Oq:function(){return d},bg:function(){return m},in:function(){return p},pl:function(){return h},sF:function(){return f}});var n=t(1413),a=t(74165),i=t(15861),s=t(90573),c=t(36797),o=t(36974),u="abstractsConference",l=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r){var t,n,i,s,o=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"abstract_assets",n=(0,c.cF)(),i=(0,c.iH)(n,"".concat(t,"/").concat(r.name)),e.next=5,(0,c.KV)(i,r);case 5:return s=e.sent,e.abrupt("return",(0,c.Jt)(s.ref));case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r){var t,i,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t={conferenceName:r.conferenceName||"",title:r.title||"",affiliation:r.affiliation||"",authorName:r.authorName||"",abstract:r.abstract||"",linkDOI:r.linkDOI||""},!r.assetFile){e.next=7;break}return e.next=5,l(r.assetFile,"abstract_assets");case 5:i=e.sent,t.assetFile=i;case 7:return e.next=9,(0,s.ET)((0,s.hJ)(o.ZP,u),t);case 9:return c=e.sent,console.log("Abstract document written with ID: ",c.id),e.abrupt("return",(0,n.Z)({id:c.id},t));case 14:throw e.prev=14,e.t0=e.catch(0),console.error("Error adding abstract document: ",e.t0),new Error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r,t){var i,c,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i=(0,s.JU)(o.ZP,u,r),!t.assetFile){e.next=7;break}return e.next=5,l(t.assetFile,"abstract_assets");case 5:c=e.sent,t.assetFile=c;case 7:return f={},Object.keys(t).forEach((function(e){var r=t[e];if(void 0!==r){var n=e.replace(/[~*/[\]]/g,"_").replace(/\s+/g,"_");f[n]=r}})),e.next=11,(0,s.r7)(i,f);case 11:return console.log("Abstract document updated with ID: ",r),e.abrupt("return",(0,n.Z)({id:r},f));case 15:throw e.prev=15,e.t0=e.catch(0),console.error("Error updating abstract document: ",e.t0),new Error(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(r,t){return e.apply(this,arguments)}}(),m=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,s.JU)(o.ZP,u,r),e.next=4,(0,s.oe)(t);case 4:console.log("Abstract document deleted with ID: ",r),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error deleting abstract document: ",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var r,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.PL)((0,s.hJ)(o.ZP,u));case 3:return r=e.sent,t=r.docs.map((function(e){var r=e.data();return{id:e.id,conferenceName:r.conferenceName||"",title:r.title||"",affiliation:r.affiliation||"",authorName:r.authorName||"",abstract:r.abstract||"",linkDOI:r.linkDOI||"",assetFile:r.assetFile||null}})),e.abrupt("return",t);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("Error getting abstract documents: ",e.t0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r){var t,n,i,c,l,f,d,m,p,h;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,s.JU)(o.ZP,u,r),e.next=4,(0,s.QT)(t);case 4:if((n=e.sent).exists()){e.next=8;break}throw console.error("No such abstract document with ID: ".concat(r)),new Error("No such document!");case 8:return i=n.data(),c=i.conferenceName,i.issn,i.publisher,l=i.title,f=i.affiliation,d=i.authorName,m=i.abstract,p=i.linkDOI,i.articleType,h=i.assetFile,e.abrupt("return",{id:n.id,conferenceName:c||"",title:l||"",affiliation:f||"",authorName:d||"",abstract:m||"",linkDOI:p||"",assetFile:h||null});case 12:throw e.prev=12,e.t0=e.catch(0),console.error("Error getting abstract document: ",e.t0),new Error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(r){return e.apply(this,arguments)}}()},96211:function(e,r,t){t.r(r),t.d(r,{default:function(){return o}});var n=t(65964),a=t(10679),i=t(50152),s=t(63258),c=t(46417);function o(){var e=(0,i.K$)().themeStretch;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.ql,{children:(0,c.jsx)("title",{children:" Ecommerce: Create a new product | INTERNATIONAL JOURNAL INDEXING"})}),(0,c.jsx)(a.Z,{maxWidth:!e&&"lg",children:(0,c.jsx)(s.Z,{})})]})}},63258:function(e,r,t){t.d(r,{Z:function(){return k}});var n=t(74165),a=t(15861),i=t(47313),s=t(58467),c=t(3463),o=t(62563),u=t(75627),l=t(32703),f=t(82937),d=t(92484),m=t(16157),p=t(34940),h=t(42669),v=t(62463),x=t(50734),Z=t(41034),b=t(48175),w=t(30317),g=t(46417);function k(e){var r=e.isEdit,t=e.currentConference,k=(0,s.s0)(),j=(0,Z.Ds)().enqueueSnackbar,N=(0,s.UO)().id,y=c.Ry().shape({conferenceName:c.Z_().required("Title of conference/symposium is required"),title:c.Z_().required("Date of conference/symposium is required").nullable(),affiliation:c.Z_().required("Name of Contact person is required"),authorName:c.Z_().required("authorName is required"),abstract:c.Z_().required("Country is required"),linkDOI:c.Z_().required("Language is required")}),I=(0,i.useMemo)((function(){return{conferenceName:(null===t||void 0===t?void 0:t.conferenceName)||"",title:(null===t||void 0===t?void 0:t.title)||"",affiliation:(null===t||void 0===t?void 0:t.affiliation)||"",authorName:(null===t||void 0===t?void 0:t.authorName)||"",abstract:(null===t||void 0===t?void 0:t.abstract)||"",linkDOI:(null===t||void 0===t?void 0:t.linkDOI)||""}}),[t]),D=(0,u.cI)({resolver:(0,o.X)(y),defaultValues:I}),P=D.reset,C=D.handleSubmit,E=D.formState.isSubmitting;(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=12;break}return e.prev=1,e.next=4,(0,w.pl)(N);case 4:(t=e.sent)?(null!==(a=t.date)&&void 0!==a&&a.toDate?t.date.toDate():"",P({conferenceName:t.conferenceName||"",title:t.title||"",affiliation:t.affiliation||"",authorName:t.authorName||"",abstract:t.abstract||"",linkDOI:t.linkDOI||""})):(j("Conference not found",{variant:"error"}),k(b.vB.conference.list)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Error fetching conference:",e.t0),j("An error occurred while fetching conference details",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[r,N,P,k,j]),(0,i.useEffect)((function(){P(I)}),[r,t,P,I]);var O=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!r){e.next=6;break}return e.next=4,(0,w.Oq)(N,t);case 4:e.next=8;break;case 6:return e.next=8,(0,w.sF)(t);case 8:P(),j(r?"Update success!":"Create success!"),k("/"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Submission error:",e.t0),j("An error occurred. Please try again.",{variant:"error"});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(r){return e.apply(this,arguments)}}();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x.ZP,{methods:D,onSubmit:C(O),children:(0,g.jsx)(f.ZP,{container:!0,spacing:3,children:(0,g.jsx)(f.ZP,{item:!0,xs:12,md:12,children:(0,g.jsxs)(d.Z,{sx:{p:3},children:[(0,g.jsxs)(m.Z,{display:"flex",alignItems:"center",children:[(0,g.jsx)(p.Z,{style:{flexGrow:1}}),(0,g.jsx)(h.Z,{variant:"h4",style:{margin:"0 16px",whiteSpace:"nowrap"},children:"Abstract / Articles Conference-Symposium Submission"}),(0,g.jsx)(p.Z,{style:{flexGrow:1}})]}),(0,g.jsx)(v.Z,{spacing:3,style:{marginTop:"30px"},children:(0,g.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,g.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,g.jsx)(x.au,{name:"conferenceName",label:"Conference-Symposium"})}),(0,g.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,g.jsx)(x.au,{name:"title",label:"Title"})}),(0,g.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,g.jsx)(x.au,{name:"affiliation",label:"Affiliation"})}),(0,g.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,g.jsx)(x.au,{name:"authorName",label:"Author's Name"})}),(0,g.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,g.jsx)(x.au,{name:"abstract",label:"Abstract/Keywords",multiline:!0,rows:3})}),(0,g.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,g.jsx)(x.au,{name:"linkDOI",label:"Link/DOI"})}),(0,g.jsx)("br",{}),(0,g.jsxs)(f.ZP,{container:!0,spacing:2,justifyContent:"flex-end",style:{marginTop:"30px"},children:[(0,g.jsx)(f.ZP,{item:!0,children:(0,g.jsx)(l.Z,{type:"submit",variant:"contained",size:"large",loading:E,children:r?"Save Changes":"Create Conference"})}),(0,g.jsx)(f.ZP,{item:!0,children:(0,g.jsx)(l.Z,{type:"button",variant:"outlined",size:"large",onClick:function(){return P()},children:"Reset"})})]})]})})]})})})}),(0,g.jsx)("br",{})]})}},92484:function(e,r,t){t.d(r,{Z:function(){return x}});var n=t(87462),a=t(63366),i=t(47313),s=t(83061),c=t(21921),o=t(64164),u=t(11236),l=t(80654),f=t(77430),d=t(32298);function m(e){return(0,d.Z)("MuiCard",e)}(0,f.Z)("MuiCard",["root"]);var p=t(46417),h=["className","raised"],v=(0,o.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),x=i.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiCard"}),i=t.className,o=t.raised,l=void 0!==o&&o,f=(0,a.Z)(t,h),d=(0,n.Z)({},t,{raised:l}),x=function(e){var r=e.classes;return(0,c.Z)({root:["root"]},m,r)}(d);return(0,p.jsx)(v,(0,n.Z)({className:(0,s.Z)(x.root,i),elevation:l?8:void 0,ref:r,ownerState:d},f))}))}}]);