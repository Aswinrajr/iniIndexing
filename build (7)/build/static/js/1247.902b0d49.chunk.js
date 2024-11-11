"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[1247],{48669:function(e,r,n){n.d(r,{Z:function(){return x}});var t=n(1413),s=n(45987),a=n(16157),o=n(62463),i=n(42669),c=n(80493),l=n(77449),u=n(2135),d=n(46417);function p(e){var r=e.link,n=e.activeLast,s=e.disabled,o=r.name,i=r.href,c=r.icon,p=(0,t.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},s&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),o]});return i?(0,d.jsx)(l.Z,{component:u.rU,to:i,sx:p,children:h}):(0,d.jsxs)(a.Z,{sx:p,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function x(e){var r=e.links,n=e.action,u=e.heading,x=e.moreLink,f=e.activeLast,Z=e.sx,v=(0,s.Z)(e,h),g=r[r.length-1].name;return(0,d.jsxs)(a.Z,{sx:(0,t.Z)({mb:5},Z),children:[(0,d.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(a.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:u}),!!r.length&&(0,d.jsx)(c.Z,(0,t.Z)((0,t.Z)({separator:(0,d.jsx)(m,{})},v),{},{children:r.map((function(e){return(0,d.jsx)(p,{link:e,activeLast:f,disabled:e.name===g},e.name||"")}))}))]}),n&&(0,d.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!x&&(0,d.jsx)(a.Z,{sx:{mt:2},children:x.map((function(e){return(0,d.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function m(){return(0,d.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},54950:function(e,r,n){n.d(r,{$F:function(){return f},$K:function(){return m},El:function(){return h},K6:function(){return d},dH:function(){return p},r$:function(){return Z},xb:function(){return x},yA:function(){return v}});var t=n(1413),s=n(74165),a=n(15861),o=n(90573),i=n(36797),c=n(36974),l="journals",u=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){var n,t,o,c=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"journal_covers",t=(0,i.cF)(),o=r.map(function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){var a,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,i.iH)(t,"".concat(n,"/").concat(r.name)),e.next=3,(0,i.KV)(a,r);case 3:return o=e.sent,e.abrupt("return",(0,i.Jt)(o.ref));case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(o));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){var n,a,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n={title:r.title,abbreviation:r.abbreviation||"",url:r.url||"",issnPrint:r.issnPrint||"",issnOnline:r.issnOnline||"",publisher:r.publisher||"",discipline:r.discipline||"",chiefEditor:r.chiefEditor||"",email:r.email||"",country:r.country||"",language:r.language||"",frequency:r.frequency||"",yearOfStarting:r.yearOfStarting||"",articleFormat:r.articleFormat||"",licenseType:r.licenseType||"",description:r.description||"",normalProcessing:r.normalProcessing||!0,fastTrackProcessing:r.fastTrackProcessing||!1},!(r.coverImage&&r.coverImage.length>0)){e.next=7;break}return e.next=5,u(r.coverImage,"journal_covers");case 5:a=e.sent,n.coverImage=a;case 7:return e.next=9,(0,o.ET)((0,o.hJ)(c.ZP,l),n);case 9:return i=e.sent,console.log("Document written with ID: ",i.id),e.abrupt("return",(0,t.Z)({id:i.id},n));case 14:throw e.prev=14,e.t0=e.catch(0),console.error("Error adding document: ",e.t0),new Error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r,n){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(0,o.JU)(c.ZP,l,r),!(n.coverImage&&n.coverImage.length>0)){e.next=7;break}return e.next=5,u(n.coverImage,"journal_covers");case 5:t=e.sent,n.coverImage=t;case 7:e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Error updating document: ",e.t0),new Error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r,n){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,o.JU)(c.ZP,l,r),e.next=4,(0,o.oe)(n);case 4:console.log("Document deleted with ID: ",r),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error deleting document: ",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var r,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.PL)((0,o.hJ)(c.ZP,l));case 3:return r=e.sent,n=r.docs.map((function(e){return(0,t.Z)({id:e.id},e.data())})),e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("Error getting documents: ",e.t0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){var n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,o.JU)(c.ZP,l,r),e.next=4,(0,o.QT)(n);case 4:if((a=e.sent).exists()){e.next=8;break}throw console.error("No such document with ID: ".concat(r)),new Error("No such document!");case 8:return e.abrupt("return",(0,t.Z)({id:a.id},a.data()));case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error getting document: ",e.t0),new Error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r,n){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"string"===typeof r){e.next=3;break}throw new Error("propertyId must be a string");case 3:if("boolean"===typeof n){e.next=5;break}throw new Error("featuredStatus must be a boolean");case 5:return console.log("Updating property ID: ".concat(r," with featured status: ").concat(n)),t=(0,o.JU)(c.ZP,l,r),e.next=9,(0,o.QT)(t);case 9:if(e.sent.exists()){e.next=12;break}throw new Error("No document found with ID: ".concat(r));case 12:return e.next=14,(0,o.r7)(t,{featuredStatus:n});case 14:console.log("Featured status updated to ".concat(n," for property ID: ").concat(r)),e.next=21;break;case 17:throw e.prev=17,e.t0=e.catch(0),console.error("Error updating featured status: ",e.t0),new Error(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(r,n){return e.apply(this,arguments)}}(),Z=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r,n){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,o.JU)(c.ZP,l,r),e.next=4,(0,o.r7)(t,{UserStatus:n});case 4:console.log("User status updated to ".concat(n," for User ID: ").concat(r)),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error updating User status: ",e.t0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,n){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r,n){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,o.JU)(c.ZP,l,r),e.next=4,(0,o.r7)(t,{BrowseStatus:n});case 4:console.log("User status updated to ".concat(n," for User ID: ").concat(r)),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error updating User status: ",e.t0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,n){return e.apply(this,arguments)}}()},61247:function(e,r,n){n.r(r),n.d(r,{default:function(){return w}});var t=n(74165),s=n(15861),a=n(29439),o=n(92484),i=n(16157),c=n(82937),l=n(42669),u=n(34940),d=n(10679),p=n(62111),h=n(47313),x=n(65964),m=n(58467),f=n(48669),Z=n(50152),v=n(54950),g=n(48175),j=n(46417),b=function(e){var r=e.journal;return(0,j.jsx)(o.Z,{children:(0,j.jsx)(i.Z,{sx:{p:3,border:"1px solid #e0e0e0",borderRadius:"8px"},children:(0,j.jsxs)(c.ZP,{container:!0,spacing:2,children:[r.coverImage&&(0,j.jsx)(c.ZP,{item:!0,xs:12,md:3,children:(0,j.jsx)(i.Z,{sx:{display:"flex",justifyContent:{xs:"center",md:"flex-start"},mb:{xs:2,md:0},p:1,border:"1px solid #e0e0e0",borderRadius:"8px"},children:(0,j.jsx)("img",{src:r.coverImage,alt:"Cover",style:{width:"100%",maxWidth:"200px",height:"auto"}})})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,md:9,children:(0,j.jsxs)(c.ZP,{container:!0,spacing:1,children:[r.title&&(0,j.jsx)(c.ZP,{item:!0,xs:12,children:(0,j.jsx)(l.Z,{variant:"h2",children:r.title})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,children:(0,j.jsx)(u.Z,{sx:{my:2}})}),r.abbreviation&&(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsxs)(l.Z,{children:[(0,j.jsx)("b",{children:"Abbreviation:"})," ",r.abbreviation]})}),r.url&&(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsxs)(l.Z,{style:{color:"#00000"},children:[(0,j.jsx)("b",{children:"URL:"})," ",(0,j.jsxs)("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",style:{color:"black"},children:[r.url," "]})]})}),r.issnPrint&&(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsxs)(l.Z,{children:[(0,j.jsx)("b",{children:"ISSN (Print):"})," ",r.issnPrint]})}),r.issnOnline&&(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsxs)(l.Z,{children:[(0,j.jsx)("b",{children:"ISSN (Online):"})," ",r.issnOnline]})}),r.publisher&&(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsxs)(l.Z,{children:[(0,j.jsx)("b",{children:"Publisher:"})," ",r.publisher]})}),r.discipline&&(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsxs)(l.Z,{children:[(0,j.jsx)("b",{children:"Discipline:"})," ",r.discipline]})}),r.email&&(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsxs)(l.Z,{children:[(0,j.jsx)("b",{children:"Email:"})," ",r.email]})}),r.country&&(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsxs)(l.Z,{children:[(0,j.jsx)("b",{children:"Country:"})," ",r.country]})}),r.language&&(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsxs)(l.Z,{children:[(0,j.jsx)("b",{children:"Language:"})," ",r.language]})}),r.frequency&&(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsxs)(l.Z,{children:[(0,j.jsx)("b",{children:"Frequency:"})," ",r.frequency]})}),r.yearOfStarting&&(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsxs)(l.Z,{children:[(0,j.jsx)("b",{children:"Year of Starting:"})," ",r.yearOfStarting]})}),r.licenseType&&(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsxs)(l.Z,{children:[(0,j.jsx)("b",{children:"License Type:"})," ",r.licenseType]})}),void 0!==r.normalProcessing&&(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsxs)(l.Z,{children:[(0,j.jsx)("b",{children:"Normal Processing:"})," ",r.normalProcessing?"Yes":"No"]})}),void 0!==r.fastTrackProcessing&&(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsxs)(l.Z,{children:[(0,j.jsx)("b",{children:"Fast Track Processing:"})," ",r.fastTrackProcessing?"Yes":"No"]})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,children:(0,j.jsx)(u.Z,{sx:{my:2}})}),r.description&&(0,j.jsx)(c.ZP,{item:!0,xs:12,children:(0,j.jsxs)(l.Z,{style:{textAlign:"justify"},children:[(0,j.jsx)("b",{children:"Description:"})," ",r.description]})})]})})]})})})};function w(){var e=(0,Z.K$)().themeStretch,r=(0,m.UO)().id,n=(0,h.useState)(null),o=(0,a.Z)(n,2),i=o[0],c=o[1],l=(0,h.useState)(!0),u=(0,a.Z)(l,2),w=u[0],y=u[1];(0,p.Z)();return(0,h.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.$K)(r);case 3:n=e.sent,c(n),y(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),y(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();r&&e()}),[r]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(x.ql,{children:(0,j.jsx)("title",{children:"Journal: ".concat((null===i||void 0===i?void 0:i.title)||""," | INTERNATIONAL JOURNAL INDEXING")})}),(0,j.jsxs)(d.Z,{maxWidth:!e&&"lg",style:{backgroundImage:'url("https://w0.peakpx.com/wallpaper/855/63/HD-wallpaper-light-purple-plain-background-purple.jpg")',height:"300px"},children:[(0,j.jsx)(f.Z,{heading:"Journal Details",className:"breadcrumb breadcrumb-link",style:{color:"white"},links:[{name:"Dashboard",href:g.vB.root,style:{color:"white"}},{name:"Journal",href:g.vB.eCommerce.root,style:{color:"white"}},{name:"Details",href:g.vB.eCommerce.shop,style:{color:"white"}},{name:null===i||void 0===i?void 0:i.title,style:{color:"white"}}]}),!w&&i&&(0,j.jsx)(b,{journal:i})]})]})}},80493:function(e,r,n){n.d(r,{Z:function(){return R}});var t=n(93433),s=n(29439),a=n(4942),o=n(87462),i=n(63366),c=n(47313),l=(n(96214),n(83061)),u=n(21921),d=n(64164),p=n(11236),h=n(42669),x=n(17551),m=n(46095),f=n(46417),Z=(0,m.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),v=n(56456),g=(0,d.ZP)(v.Z)((function(e){var r=e.theme;return(0,o.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,o.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,o.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,x._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,x._4)(r.palette.grey[600],.12)})})})),j=(0,d.ZP)(Z)({width:24,height:16});var b=function(e){var r=e;return(0,f.jsx)("li",{children:(0,f.jsx)(g,(0,o.Z)({focusRipple:!0},e,{ownerState:r,children:(0,f.jsx)(j,{ownerState:r})}))})},w=n(77430),y=n(32298);function k(e){return(0,y.Z)("MuiBreadcrumbs",e)}var P=(0,w.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),I=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],S=(0,d.ZP)(h.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,a.Z)({},"& .".concat(P.li),r.li),r.root]}})({}),E=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),C=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function N(e,r,n,t){return e.reduce((function(s,a,o){return o<e.length-1?s=s.concat(a,(0,f.jsx)(C,{"aria-hidden":!0,className:r,ownerState:t,children:n},"separator-".concat(o))):s.push(a),s}),[])}var R=c.forwardRef((function(e,r){var n=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),a=n.children,d=n.className,h=n.component,x=void 0===h?"nav":h,m=n.expandText,Z=void 0===m?"Show path":m,v=n.itemsAfterCollapse,g=void 0===v?1:v,j=n.itemsBeforeCollapse,w=void 0===j?1:j,y=n.maxItems,P=void 0===y?8:y,C=n.separator,R=void 0===C?"/":C,T=(0,i.Z)(n,I),U=c.useState(!1),D=(0,s.Z)(U,2),M=D[0],_=D[1],B=(0,o.Z)({},n,{component:x,expanded:M,expandText:Z,itemsAfterCollapse:g,itemsBeforeCollapse:w,maxItems:P,separator:R}),L=function(e){var r=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,r)}(B),J=c.useRef(null),O=c.Children.toArray(a).filter((function(e){return c.isValidElement(e)})).map((function(e,r){return(0,f.jsx)("li",{className:L.li,children:e},"child-".concat(r))}));return(0,f.jsx)(S,(0,o.Z)({ref:r,component:x,color:"text.secondary",className:(0,l.Z)(L.root,d),ownerState:B},T,{children:(0,f.jsx)(E,{className:L.ol,ref:J,ownerState:B,children:N(M||P&&O.length<=P?O:function(e){return w+g>=e.length?e:[].concat((0,t.Z)(e.slice(0,w)),[(0,f.jsx)(b,{"aria-label":Z,onClick:function(){_(!0);var e=J.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,t.Z)(e.slice(e.length-g,e.length)))}(O),L.separator,R,B)})}))}))},92484:function(e,r,n){n.d(r,{Z:function(){return Z}});var t=n(87462),s=n(63366),a=n(47313),o=n(83061),i=n(21921),c=n(64164),l=n(11236),u=n(80654),d=n(77430),p=n(32298);function h(e){return(0,p.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var x=n(46417),m=["className","raised"],f=(0,c.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),Z=a.forwardRef((function(e,r){var n=(0,l.Z)({props:e,name:"MuiCard"}),a=n.className,c=n.raised,u=void 0!==c&&c,d=(0,s.Z)(n,m),p=(0,t.Z)({},n,{raised:u}),Z=function(e){var r=e.classes;return(0,i.Z)({root:["root"]},h,r)}(p);return(0,x.jsx)(f,(0,t.Z)({className:(0,o.Z)(Z.root,a),elevation:u?8:void 0,ref:r,ownerState:p},d))}))}}]);