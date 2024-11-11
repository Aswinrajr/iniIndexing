"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[3456],{48669:function(e,n,r){r.d(n,{Z:function(){return p}});var t=r(1413),c=r(45987),s=r(16157),a=r(62463),i=r(42669),o=r(80493),l=r(77449),u=r(2135),d=r(46417);function h(e){var n=e.link,r=e.activeLast,c=e.disabled,a=n.name,i=n.href,o=n.icon,h=(0,t.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},c&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,d.jsxs)(d.Fragment,{children:[o&&(0,d.jsx)(s.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:o}),a]});return i?(0,d.jsx)(l.Z,{component:u.rU,to:i,sx:h,children:x}):(0,d.jsxs)(s.Z,{sx:h,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function p(e){var n=e.links,r=e.action,u=e.heading,p=e.moreLink,m=e.activeLast,Z=e.sx,g=(0,c.Z)(e,x),v=n[n.length-1].name;return(0,d.jsxs)(s.Z,{sx:(0,t.Z)({mb:5},Z),children:[(0,d.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(s.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:u}),!!n.length&&(0,d.jsx)(o.Z,(0,t.Z)((0,t.Z)({separator:(0,d.jsx)(f,{})},g),{},{children:n.map((function(e){return(0,d.jsx)(h,{link:e,activeLast:m,disabled:e.name===v},e.name||"")}))}))]}),r&&(0,d.jsxs)(s.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!p&&(0,d.jsx)(s.Z,{sx:{mt:2},children:p.map((function(e){return(0,d.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function f(){return(0,d.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},45876:function(e,n,r){r.d(n,{Dc:function(){return d},Fn:function(){return h},N7:function(){return p},Q8:function(){return x},pb:function(){return m},r$:function(){return f}});var t=r(1413),c=r(74165),s=r(15861),a=r(90573),i=r(36797),o=r(36974),l="conferences",u=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(n){var r,t,s,a,o=arguments;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:"conference_assets",t=(0,i.cF)(),s=(0,i.iH)(t,"".concat(r,"/").concat(n.name)),e.next=5,(0,i.KV)(s,n);case 5:return a=e.sent,e.abrupt("return",(0,i.Jt)(a.ref));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(n){var r,s,i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r={title:n.title,organizer:n.organizer||"",venue:n.venue||"",date:n.date||"",contactPerson:n.contactPerson||"",email:n.email||"",country:n.country||"",language:n.language||"",description:n.description||""},!n.assetFile){e.next=7;break}return e.next=5,u(n.assetFile,"conference_assets");case 5:s=e.sent,r.assetFile=s;case 7:return e.next=9,(0,a.ET)((0,a.hJ)(o.ZP,l),r);case 9:return i=e.sent,console.log("Conference document written with ID: ",i.id),e.abrupt("return",(0,t.Z)({id:i.id},r));case 14:throw e.prev=14,e.t0=e.catch(0),console.error("Error adding conference document: ",e.t0),new Error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(n,r){var s,i,d;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s=(0,a.JU)(o.ZP,l,n),!r.assetFile){e.next=7;break}return e.next=5,u(r.assetFile,"conference_assets");case 5:i=e.sent,r.assetFile=i;case 7:return d={},Object.keys(r).forEach((function(e){var n=r[e];if(void 0!==n){var t=e.replace(/[~*/[\]]/g,"_").replace(/\s+/g,"_");d[t]=n}})),e.next=11,(0,a.r7)(s,d);case 11:return console.log("Conference document updated with ID: ",n),e.abrupt("return",(0,t.Z)({id:n},d));case 15:throw e.prev=15,e.t0=e.catch(0),console.error("Error updating conference document: ",e.t0),new Error(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(n,r){return e.apply(this,arguments)}}(),x=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(n){var r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=(0,a.JU)(o.ZP,l,n),e.next=4,(0,a.oe)(r);case 4:console.log("Conference document deleted with ID: ",n),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error deleting conference document: ",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(){var n,r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.PL)((0,a.hJ)(o.ZP,l));case 3:return n=e.sent,r=n.docs.map((function(e){var n=e.data();return{id:e.id,title:n.title||"",organizer:n.organizer||"",venue:n.venue||"",date:n.date||"",contactPerson:n.contactPerson||"",email:n.email||"",country:n.country||"",language:n.language||"",description:n.description||"",assetFile:n.assetFile||null}})),e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("Error getting conference documents: ",e.t0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(n,r){var t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,a.JU)(o.ZP,l,n),e.next=4,(0,a.r7)(t,{UserStatus:r});case 4:console.log("User status updated to ".concat(r," for User ID: ").concat(n)),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error updating User status: ",e.t0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,r){return e.apply(this,arguments)}}(),m=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(n){var r,t,s,i,u,d,h,x,p,f,m,Z,g;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=(0,a.JU)(o.ZP,l,n),e.next=4,(0,a.QT)(r);case 4:if((t=e.sent).exists()){e.next=8;break}throw console.error("No such conference document with ID: ".concat(n)),new Error("No such document!");case 8:return s=t.data(),i=s.title,u=s.organizer,d=s.venue,h=s.date,x=s.contactPerson,p=s.email,f=s.country,m=s.language,Z=s.description,g=s.assetFile,e.abrupt("return",{id:t.id,title:i||"",organizer:u||"",venue:d||"",date:h||"",contactPerson:x||"",email:p||"",country:f||"",language:m||"",description:Z||"",assetFile:g||null});case 12:throw e.prev=12,e.t0=e.catch(0),console.error("Error getting conference document: ",e.t0),new Error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}()},3456:function(e,n,r){r.r(n),r.d(n,{default:function(){return E}});var t=r(74165),c=r(15861),s=r(29439),a=r(92484),i=r(16157),o=r(82937),l=r(42669),u=r(34940),d=r(10679),h=r(62111),x=r(89600),p=r(313),f=r.n(p),m=r(47313),Z=r(65964),g=r(58467),v=r(48669),j=r(50152),w=r(48175),b=r(45876),y=r(46417),k=function(e){if(!e||!e.seconds)return"";var n=new Date(1e3*e.seconds);return(0,x.Z)(n,"dd-MM-yyyy")},P=function(e){var n,r=e.conference;return(0,y.jsx)(a.Z,{children:(0,y.jsx)(i.Z,{sx:{p:3,border:"1px solid #e0e0e0",borderRadius:"8px"},children:(0,y.jsx)(o.ZP,{container:!0,spacing:1,children:(0,y.jsx)(o.ZP,{item:!0,xs:12,children:(0,y.jsxs)(o.ZP,{container:!0,spacing:1,children:[r.title&&(0,y.jsx)(o.ZP,{item:!0,xs:12,children:(0,y.jsx)(l.Z,{variant:"h2",children:r.title})}),(0,y.jsx)(o.ZP,{item:!0,xs:12,children:(0,y.jsx)(u.Z,{sx:{my:2}})}),r.organizer&&(0,y.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,y.jsxs)(l.Z,{children:[(0,y.jsx)("b",{children:"Organizer:"})," ",r.organizer]})}),r.venue&&(0,y.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,y.jsxs)(l.Z,{children:[(0,y.jsx)("b",{children:"Venue:"})," ",r.venue]})}),r.date&&(0,y.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,y.jsxs)(l.Z,{children:[(0,y.jsx)("b",{children:"Date:"})," ",k(r.date)]})}),r.contactPerson&&(0,y.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,y.jsxs)(l.Z,{children:[(0,y.jsx)("b",{children:"Contact Person:"})," ",r.contactPerson]})}),r.email&&(0,y.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,y.jsxs)(l.Z,{children:[(0,y.jsx)("b",{children:"Email:"})," ",r.email]})}),r.country&&(0,y.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,y.jsxs)(l.Z,{children:[(0,y.jsx)("b",{children:"Country:"})," ",r.country]})}),r.language&&(0,y.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,y.jsxs)(l.Z,{children:[(0,y.jsx)("b",{children:"Language:"})," ",r.language]})}),r&&r.Status&&(0,y.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,y.jsxs)(l.Z,{children:[(0,y.jsx)("b",{children:"Status:"})," ",r.Status]})}),(0,y.jsx)(o.ZP,{item:!0,xs:12,children:(0,y.jsx)(u.Z,{sx:{my:2}})}),r.description&&(0,y.jsx)(o.ZP,{item:!0,xs:12,children:(0,y.jsxs)(l.Z,{style:{textAlign:"justify"},children:[(0,y.jsx)("b",{children:"Description:"}),(0,y.jsx)("span",{dangerouslySetInnerHTML:{__html:(n=r.description,n?f().sanitize(n,{ALLOWED_TAGS:[]}).replace(/\n/g,"<br />"):"")}})]})})]})})})})})};function E(){var e=(0,j.K$)().themeStretch,n=(0,g.UO)().id,r=(0,m.useState)(null),a=(0,s.Z)(r,2),i=a[0],o=a[1],u=(0,m.useState)(!0),x=(0,s.Z)(u,2),p=x[0],f=x[1];(0,h.Z)();return(0,m.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.pb)(n);case 3:r=e.sent,o(r),f(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),f(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();n&&e()}),[n]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Z.ql,{children:(0,y.jsx)("title",{children:"Conference: ".concat((null===i||void 0===i?void 0:i.title)||"Loading..."," | INTERNATIONAL JOURNAL INDEXING")})}),(0,y.jsxs)(d.Z,{maxWidth:!e&&"lg",style:{backgroundImage:'url("https://w0.peakpx.com/wallpaper/855/63/HD-wallpaper-light-purple-plain-background-purple.jpg")',height:"300px"},children:[(0,y.jsx)(v.Z,{heading:"Conference Details",className:"breadcrumb breadcrumb-link",style:{color:"white"},links:[{name:"Dashboard",href:w.vB.root,style:{color:"white"}},{name:"Conference",href:w.vB.eCommerce.root,style:{color:"white"}},{name:"Details",href:w.vB.eCommerce.shop,style:{color:"white"}},{name:(null===i||void 0===i?void 0:i.title)||"Loading...",style:{color:"#451245"}}]}),!p&&i?(0,y.jsx)(P,{conference:i}):(0,y.jsx)(l.Z,{variant:"h6",align:"center",color:"textSecondary",children:"Loading conference details..."})]})]})}}}]);