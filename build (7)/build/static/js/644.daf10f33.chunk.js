"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[644],{48669:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(1413),a=t(45987),i=t(16157),o=t(62463),s=t(42669),c=t(80493),l=t(77449),u=t(2135),d=t(46417);function f(e){var r=e.link,t=e.activeLast,a=e.disabled,o=r.name,s=r.href,c=r.icon,f=(0,n.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},a&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),o]});return s?(0,d.jsx)(l.Z,{component:u.rU,to:s,sx:f,children:m}):(0,d.jsxs)(i.Z,{sx:f,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function p(e){var r=e.links,t=e.action,u=e.heading,p=e.moreLink,x=e.activeLast,v=e.sx,Z=(0,a.Z)(e,m),g=r[r.length-1].name;return(0,d.jsxs)(i.Z,{sx:(0,n.Z)({mb:5},v),children:[(0,d.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(i.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:u}),!!r.length&&(0,d.jsx)(c.Z,(0,n.Z)((0,n.Z)({separator:(0,d.jsx)(h,{})},Z),{},{children:r.map((function(e){return(0,d.jsx)(f,{link:e,activeLast:x,disabled:e.name===g},e.name||"")}))}))]}),t&&(0,d.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!p&&(0,d.jsx)(i.Z,{sx:{mt:2},children:p.map((function(e){return(0,d.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function h(){return(0,d.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},72805:function(e,r,t){t.d(r,{Z:function(){return n.Z}});var n=t(48669)},30317:function(e,r,t){t.d(r,{Oq:function(){return f},bg:function(){return m},in:function(){return p},pl:function(){return h},sF:function(){return d}});var n=t(1413),a=t(74165),i=t(15861),o=t(90573),s=t(36797),c=t(36974),l="abstractsConference",u=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r){var t,n,i,o,c=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:"abstract_assets",n=(0,s.cF)(),i=(0,s.iH)(n,"".concat(t,"/").concat(r.name)),e.next=5,(0,s.KV)(i,r);case 5:return o=e.sent,e.abrupt("return",(0,s.Jt)(o.ref));case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r){var t,i,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t={conferenceName:r.conferenceName||"",title:r.title||"",affiliation:r.affiliation||"",authorName:r.authorName||"",abstract:r.abstract||"",linkDOI:r.linkDOI||""},!r.assetFile){e.next=7;break}return e.next=5,u(r.assetFile,"abstract_assets");case 5:i=e.sent,t.assetFile=i;case 7:return e.next=9,(0,o.ET)((0,o.hJ)(c.ZP,l),t);case 9:return s=e.sent,console.log("Abstract document written with ID: ",s.id),e.abrupt("return",(0,n.Z)({id:s.id},t));case 14:throw e.prev=14,e.t0=e.catch(0),console.error("Error adding abstract document: ",e.t0),new Error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r,t){var i,s,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i=(0,o.JU)(c.ZP,l,r),!t.assetFile){e.next=7;break}return e.next=5,u(t.assetFile,"abstract_assets");case 5:s=e.sent,t.assetFile=s;case 7:return d={},Object.keys(t).forEach((function(e){var r=t[e];if(void 0!==r){var n=e.replace(/[~*/[\]]/g,"_").replace(/\s+/g,"_");d[n]=r}})),e.next=11,(0,o.r7)(i,d);case 11:return console.log("Abstract document updated with ID: ",r),e.abrupt("return",(0,n.Z)({id:r},d));case 15:throw e.prev=15,e.t0=e.catch(0),console.error("Error updating abstract document: ",e.t0),new Error(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(r,t){return e.apply(this,arguments)}}(),m=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,o.JU)(c.ZP,l,r),e.next=4,(0,o.oe)(t);case 4:console.log("Abstract document deleted with ID: ",r),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error deleting abstract document: ",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var r,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.PL)((0,o.hJ)(c.ZP,l));case 3:return r=e.sent,t=r.docs.map((function(e){var r=e.data();return{id:e.id,conferenceName:r.conferenceName||"",title:r.title||"",affiliation:r.affiliation||"",authorName:r.authorName||"",abstract:r.abstract||"",linkDOI:r.linkDOI||"",assetFile:r.assetFile||null}})),e.abrupt("return",t);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("Error getting abstract documents: ",e.t0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r){var t,n,i,s,u,d,f,m,p,h;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,o.JU)(c.ZP,l,r),e.next=4,(0,o.QT)(t);case 4:if((n=e.sent).exists()){e.next=8;break}throw console.error("No such abstract document with ID: ".concat(r)),new Error("No such document!");case 8:return i=n.data(),s=i.conferenceName,i.issn,i.publisher,u=i.title,d=i.affiliation,f=i.authorName,m=i.abstract,p=i.linkDOI,i.articleType,h=i.assetFile,e.abrupt("return",{id:n.id,conferenceName:s||"",title:u||"",affiliation:d||"",authorName:f||"",abstract:m||"",linkDOI:p||"",assetFile:h||null});case 12:throw e.prev=12,e.t0=e.catch(0),console.error("Error getting abstract document: ",e.t0),new Error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(r){return e.apply(this,arguments)}}()},36290:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(73709),a=t(47313),i=t(65964),o=t(58467),s=t(10679),c=t(42785),l=t(5239),u=t(48175),d=t(72805),f=t(50152),m=t(63258),p=t(46417);function h(){var e=(0,f.K$)().themeStretch,r=(0,l.I0)(),t=(0,o.UO)().name,h=(0,l.v9)((function(e){return e.product.products.find((function(e){return(0,n.o)(e.name)===t}))}));return(0,a.useEffect)((function(){r((0,c.Xp)())}),[r]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.ql,{children:(0,p.jsx)("title",{children:" Abstract Conference: Edit Conference | IndexingJournal"})}),(0,p.jsxs)(s.Z,{maxWidth:!e&&"lg",children:[(0,p.jsx)(d.Z,{heading:"Edit Conference",links:[{name:"Dashboard",href:u.vB.root},{name:"Journal",href:u.vB.conference.root},{name:null===h||void 0===h?void 0:h.name}]}),(0,p.jsx)(m.Z,{isEdit:!0,currentProduct:h})]})]})}},63258:function(e,r,t){t.d(r,{Z:function(){return w}});var n=t(74165),a=t(15861),i=t(47313),o=t(58467),s=t(3463),c=t(62563),l=t(75627),u=t(32703),d=t(82937),f=t(92484),m=t(16157),p=t(34940),h=t(42669),x=t(62463),v=t(50734),Z=t(41034),g=t(48175),b=t(30317),j=t(46417);function w(e){var r=e.isEdit,t=e.currentConference,w=(0,o.s0)(),k=(0,Z.Ds)().enqueueSnackbar,y=(0,o.UO)().id,N=s.Ry().shape({conferenceName:s.Z_().required("Title of conference/symposium is required"),title:s.Z_().required("Date of conference/symposium is required").nullable(),affiliation:s.Z_().required("Name of Contact person is required"),authorName:s.Z_().required("authorName is required"),abstract:s.Z_().required("Country is required"),linkDOI:s.Z_().required("Language is required")}),C=(0,i.useMemo)((function(){return{conferenceName:(null===t||void 0===t?void 0:t.conferenceName)||"",title:(null===t||void 0===t?void 0:t.title)||"",affiliation:(null===t||void 0===t?void 0:t.affiliation)||"",authorName:(null===t||void 0===t?void 0:t.authorName)||"",abstract:(null===t||void 0===t?void 0:t.abstract)||"",linkDOI:(null===t||void 0===t?void 0:t.linkDOI)||""}}),[t]),I=(0,l.cI)({resolver:(0,c.X)(N),defaultValues:C}),P=I.reset,S=I.handleSubmit,E=I.formState.isSubmitting;(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=12;break}return e.prev=1,e.next=4,(0,b.pl)(y);case 4:(t=e.sent)?(null!==(a=t.date)&&void 0!==a&&a.toDate?t.date.toDate():"",P({conferenceName:t.conferenceName||"",title:t.title||"",affiliation:t.affiliation||"",authorName:t.authorName||"",abstract:t.abstract||"",linkDOI:t.linkDOI||""})):(k("Conference not found",{variant:"error"}),w(g.vB.conference.list)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Error fetching conference:",e.t0),k("An error occurred while fetching conference details",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[r,y,P,w,k]),(0,i.useEffect)((function(){P(C)}),[r,t,P,C]);var D=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!r){e.next=6;break}return e.next=4,(0,b.Oq)(y,t);case 4:e.next=8;break;case 6:return e.next=8,(0,b.sF)(t);case 8:P(),k(r?"Update success!":"Create success!"),w("/"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Submission error:",e.t0),k("An error occurred. Please try again.",{variant:"error"});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(r){return e.apply(this,arguments)}}();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v.ZP,{methods:I,onSubmit:S(D),children:(0,j.jsx)(d.ZP,{container:!0,spacing:3,children:(0,j.jsx)(d.ZP,{item:!0,xs:12,md:12,children:(0,j.jsxs)(f.Z,{sx:{p:3},children:[(0,j.jsxs)(m.Z,{display:"flex",alignItems:"center",children:[(0,j.jsx)(p.Z,{style:{flexGrow:1}}),(0,j.jsx)(h.Z,{variant:"h4",style:{margin:"0 16px",whiteSpace:"nowrap"},children:"Abstract / Articles Conference-Symposium Submission"}),(0,j.jsx)(p.Z,{style:{flexGrow:1}})]}),(0,j.jsx)(x.Z,{spacing:3,style:{marginTop:"30px"},children:(0,j.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,j.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,j.jsx)(v.au,{name:"conferenceName",label:"Conference-Symposium"})}),(0,j.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,j.jsx)(v.au,{name:"title",label:"Title"})}),(0,j.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,j.jsx)(v.au,{name:"affiliation",label:"Affiliation"})}),(0,j.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,j.jsx)(v.au,{name:"authorName",label:"Author's Name"})}),(0,j.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,j.jsx)(v.au,{name:"abstract",label:"Abstract/Keywords",multiline:!0,rows:3})}),(0,j.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,j.jsx)(v.au,{name:"linkDOI",label:"Link/DOI"})}),(0,j.jsx)("br",{}),(0,j.jsxs)(d.ZP,{container:!0,spacing:2,justifyContent:"flex-end",style:{marginTop:"30px"},children:[(0,j.jsx)(d.ZP,{item:!0,children:(0,j.jsx)(u.Z,{type:"submit",variant:"contained",size:"large",loading:E,children:r?"Save Changes":"Create Conference"})}),(0,j.jsx)(d.ZP,{item:!0,children:(0,j.jsx)(u.Z,{type:"button",variant:"outlined",size:"large",onClick:function(){return P()},children:"Reset"})})]})]})})]})})})}),(0,j.jsx)("br",{})]})}},80493:function(e,r,t){t.d(r,{Z:function(){return D}});var n=t(93433),a=t(29439),i=t(4942),o=t(87462),s=t(63366),c=t(47313),l=(t(96214),t(83061)),u=t(21921),d=t(64164),f=t(11236),m=t(42669),p=t(17551),h=t(46095),x=t(46417),v=(0,h.Z)((0,x.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=t(56456),g=(0,d.ZP)(Z.Z)((function(e){var r=e.theme;return(0,o.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,o.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,o.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,p._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(r.palette.grey[600],.12)})})})),b=(0,d.ZP)(v)({width:24,height:16});var j=function(e){var r=e;return(0,x.jsx)("li",{children:(0,x.jsx)(g,(0,o.Z)({focusRipple:!0},e,{ownerState:r,children:(0,x.jsx)(b,{ownerState:r})}))})},w=t(77430),k=t(32298);function y(e){return(0,k.Z)("MuiBreadcrumbs",e)}var N=(0,w.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),C=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],I=(0,d.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,i.Z)({},"& .".concat(N.li),r.li),r.root]}})({}),P=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),S=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function E(e,r,t,n){return e.reduce((function(a,i,o){return o<e.length-1?a=a.concat(i,(0,x.jsx)(S,{"aria-hidden":!0,className:r,ownerState:n,children:t},"separator-".concat(o))):a.push(i),a}),[])}var D=c.forwardRef((function(e,r){var t=(0,f.Z)({props:e,name:"MuiBreadcrumbs"}),i=t.children,d=t.className,m=t.component,p=void 0===m?"nav":m,h=t.expandText,v=void 0===h?"Show path":h,Z=t.itemsAfterCollapse,g=void 0===Z?1:Z,b=t.itemsBeforeCollapse,w=void 0===b?1:b,k=t.maxItems,N=void 0===k?8:k,S=t.separator,D=void 0===S?"/":S,_=(0,s.Z)(t,C),A=c.useState(!1),O=(0,a.Z)(A,2),R=O[0],q=O[1],M=(0,o.Z)({},t,{component:p,expanded:R,expandText:v,itemsAfterCollapse:g,itemsBeforeCollapse:w,maxItems:N,separator:D}),F=function(e){var r=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,r)}(M),B=c.useRef(null),L=c.Children.toArray(i).filter((function(e){return c.isValidElement(e)})).map((function(e,r){return(0,x.jsx)("li",{className:F.li,children:e},"child-".concat(r))}));return(0,x.jsx)(I,(0,o.Z)({ref:r,component:p,color:"text.secondary",className:(0,l.Z)(F.root,d),ownerState:M},_,{children:(0,x.jsx)(P,{className:F.ol,ref:B,ownerState:M,children:E(R||N&&L.length<=N?L:function(e){return w+g>=e.length?e:[].concat((0,n.Z)(e.slice(0,w)),[(0,x.jsx)(j,{"aria-label":v,onClick:function(){q(!0);var e=B.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,n.Z)(e.slice(e.length-g,e.length)))}(L),F.separator,D,M)})}))}))},92484:function(e,r,t){t.d(r,{Z:function(){return v}});var n=t(87462),a=t(63366),i=t(47313),o=t(83061),s=t(21921),c=t(64164),l=t(11236),u=t(80654),d=t(77430),f=t(32298);function m(e){return(0,f.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var p=t(46417),h=["className","raised"],x=(0,c.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),v=i.forwardRef((function(e,r){var t=(0,l.Z)({props:e,name:"MuiCard"}),i=t.className,c=t.raised,u=void 0!==c&&c,d=(0,a.Z)(t,h),f=(0,n.Z)({},t,{raised:u}),v=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},m,r)}(f);return(0,p.jsx)(x,(0,n.Z)({className:(0,o.Z)(v.root,i),elevation:u?8:void 0,ref:r,ownerState:f},d))}))},59023:function(e,r,t){t.d(r,{$:function(){return i}});var n=t(66797),a=t(26675);function i(e,r){return void 0===r&&(r={}),(0,a.B)(e,(0,n.pi)({delimiter:"."},r))}},26675:function(e,r,t){t.d(r,{B:function(){return o}});function n(e){return e.toLowerCase()}var a=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],i=/[^A-Z0-9]+/gi;function o(e,r){void 0===r&&(r={});for(var t=r.splitRegexp,o=void 0===t?a:t,c=r.stripRegexp,l=void 0===c?i:c,u=r.transform,d=void 0===u?n:u,f=r.delimiter,m=void 0===f?" ":f,p=s(s(e,o,"$1\0$2"),l,"\0"),h=0,x=p.length;"\0"===p.charAt(h);)h++;for(;"\0"===p.charAt(x-1);)x--;return p.slice(h,x).split("\0").map(d).join(m)}function s(e,r,t){return r instanceof RegExp?e.replace(r,t):r.reduce((function(e,r){return e.replace(r,t)}),e)}},73709:function(e,r,t){t.d(r,{o:function(){return i}});var n=t(66797),a=t(59023);function i(e,r){return void 0===r&&(r={}),(0,a.$)(e,(0,n.pi)({delimiter:"-"},r))}}}]);