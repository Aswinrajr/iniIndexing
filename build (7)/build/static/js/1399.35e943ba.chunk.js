"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[1399],{58772:function(e,r,n){n.d(r,{Z:function(){return d}});var t=n(1413),s=n(45987),o=n(57631),i=n(5448),c=n(71235),a=n(66382),u=n(605),l=n(46417),h=["title","content","action","open","onClose"];function d(e){var r=e.title,n=e.content,d=e.action,p=e.open,f=e.onClose,x=(0,s.Z)(e,h);return(0,l.jsxs)(o.Z,(0,t.Z)((0,t.Z)({fullWidth:!0,maxWidth:"xs",open:p,onClose:f},x),{},{children:[(0,l.jsx)(i.Z,{sx:{pb:2},children:r}),n&&(0,l.jsxs)(c.Z,{sx:{typography:"body2"},children:[" ",n," "]}),(0,l.jsxs)(a.Z,{children:[d,(0,l.jsx)(u.Z,{variant:"outlined",color:"inherit",onClick:f,children:"Cancel"})]})]}))}},48669:function(e,r,n){n.d(r,{Z:function(){return f}});var t=n(1413),s=n(45987),o=n(16157),i=n(62463),c=n(42669),a=n(80493),u=n(77449),l=n(2135),h=n(46417);function d(e){var r=e.link,n=e.activeLast,s=e.disabled,i=r.name,c=r.href,a=r.icon,d=(0,t.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},s&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),p=(0,h.jsxs)(h.Fragment,{children:[a&&(0,h.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:a}),i]});return c?(0,h.jsx)(u.Z,{component:l.rU,to:c,sx:d,children:p}):(0,h.jsxs)(o.Z,{sx:d,children:[" ",p," "]})}var p=["links","action","heading","moreLink","activeLast","sx"];function f(e){var r=e.links,n=e.action,l=e.heading,f=e.moreLink,Z=e.activeLast,v=e.sx,m=(0,s.Z)(e,p),g=r[r.length-1].name;return(0,h.jsxs)(o.Z,{sx:(0,t.Z)({mb:5},v),children:[(0,h.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,h.jsxs)(o.Z,{sx:{flexGrow:1},children:[l&&(0,h.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:l}),!!r.length&&(0,h.jsx)(a.Z,(0,t.Z)((0,t.Z)({separator:(0,h.jsx)(x,{})},m),{},{children:r.map((function(e){return(0,h.jsx)(d,{link:e,activeLast:Z,disabled:e.name===g},e.name||"")}))}))]}),n&&(0,h.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!f&&(0,h.jsx)(o.Z,{sx:{mt:2},children:f.map((function(e){return(0,h.jsx)(u.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,h.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},72805:function(e,r,n){n.d(r,{Z:function(){return t.Z}});var t=n(48669)},52456:function(e,r,n){n.d(r,{Nd:function(){return f},Y:function(){return Z},_$:function(){return m},fR:function(){return p},mo:function(){return v},r$:function(){return g},wI:function(){return x}});var t=n(1413),s=n(74165),o=n(15861),i=n(90573),c=n(36797),a=n(36974),u="thesis",l=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(r){var n,t,i,a=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"thesis_files",t=(0,c.cF)(),i=r.map(function(){var e=(0,o.Z)((0,s.Z)().mark((function e(r){var o,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(0,c.iH)(t,"".concat(n,"/").concat(r.name)),e.next=3,(0,c.KV)(o,r);case 3:return i=e.sent,e.abrupt("return",(0,c.Jt)(i.ref));case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(i));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var r,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.PL)((0,i.hJ)(a.ZP,u));case 2:return r=e.sent,n=r.size+1,e.abrupt("return","IJI".concat(n.toString().padStart(7,"0")));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(new Date).getFullYear();return{volume:e-2023,year:e}},p=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(r){var n,o,c,p,f,x,Z,v;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h();case 3:if(n=e.sent,o=d(),c=o.volume,p=o.year,f={thesisId:n,title:r.title,collegeUniversity:r.collegeUniversity||"",author:r.author||"",volume:c,year:p},!(r.photoId&&r.photoId.length>0)){e.next=11;break}return e.next=9,l(r.photoId,"thesis_photos");case 9:x=e.sent,f.photoId=x;case 11:if(!(r.fullPdf&&r.fullPdf.length>0)){e.next=16;break}return e.next=14,l(r.fullPdf,"thesis_pdfs");case 14:Z=e.sent,f.fullPdf=Z;case 16:return e.next=18,(0,i.ET)((0,i.hJ)(a.ZP,u),f);case 18:return v=e.sent,console.log("Thesis document written with ID: ",v.id),e.abrupt("return",(0,t.Z)({id:v.id},f));case 23:throw e.prev=23,e.t0=e.catch(0),console.error("Error adding thesis: ",e.t0),new Error(e.t0.message);case 27:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(r,n){var t,o,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=(0,i.JU)(a.ZP,u,r),!(n.photoId&&n.photoId.length>0)){e.next=7;break}return e.next=5,l(n.photoId,"thesis_photos");case 5:o=e.sent,n.photoId=o;case 7:if(!(n.fullPdf&&n.fullPdf.length>0)){e.next=12;break}return e.next=10,l(n.fullPdf,"thesis_pdfs");case 10:c=e.sent,n.fullPdf=c;case 12:return e.next=14,(0,i.r7)(t,n);case 14:console.log("Thesis updated with ID: ",r),e.next=21;break;case 17:throw e.prev=17,e.t0=e.catch(0),console.error("Error updating thesis: ",e.t0),new Error(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(r,n){return e.apply(this,arguments)}}(),x=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(r){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,i.JU)(a.ZP,u,r),e.next=4,(0,i.oe)(n);case 4:console.log("Thesis deleted with ID: ",r),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error deleting thesis: ",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),Z=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var r,n,o,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.PL)((0,i.hJ)(a.ZP,"thesis"));case 3:return r=e.sent,n=r.docs.map((function(e){return(0,t.Z)({id:e.id},e.data())})),o=n.reduce((function(e,r){var n=r.volume;return e[n]||(e[n]=[]),e[n].push(r),e}),{}),c=Object.keys(o).map((function(e){return{volume:e,theses:o[e]}})),e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error getting theses: ",e.t0),new Error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(r){var n,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,i.JU)(a.ZP,u,r),e.next=4,(0,i.QT)(n);case 4:if((o=e.sent).exists()){e.next=8;break}throw console.error("No such thesis with ID: ".concat(r)),new Error("No such document!");case 8:return e.abrupt("return",(0,t.Z)({id:o.id},o.data()));case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error getting thesis: ",e.t0),new Error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(r){var n,o,c,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"undefined"!==typeof r&&null!==r){e.next=3;break}throw new Error("Volume is undefined or null");case 3:return console.log("Fetching theses for volume:",r),n=(0,i.hJ)(a.ZP,"thesis"),o=(0,i.IO)(n,(0,i.ar)("volume","==",r)),e.next=8,(0,i.PL)(o);case 8:if(!(c=e.sent).empty){e.next=12;break}throw console.error("No theses found for volume: ".concat(r)),new Error("No documents found!");case 12:return u=[],c.forEach((function(e){u.push((0,t.Z)({id:e.id},e.data()))})),e.abrupt("return",{volume:r,theses:u});case 17:throw e.prev=17,e.t0=e.catch(0),console.error("Error getting theses: ",e.t0),new Error(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(r){return e.apply(this,arguments)}}(),g=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(r,n){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,i.JU)(a.ZP,u,r),e.next=4,(0,i.r7)(t,{UserStatus:n});case 4:console.log("User status updated to ".concat(n," for User ID: ").concat(r)),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error updating User status: ",e.t0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,n){return e.apply(this,arguments)}}()},81399:function(e,r,n){n.r(r);var t=n(1413),s=n(74165),o=n(15861),i=n(29439),c=n(605),a=n(39874),u=n(80654),l=n(44874),h=n(90495),d=n(59629),p=n(37982),f=n(53805),x=n(62463),Z=n(49316),v=n(42669),m=n(18104),g=n(16157),j=n(81962),w=n(73803),k=(n(36797),n(47313)),b=n(58467),y=n(2135),I=n(58772),P=n(72805),E=n(8730),S=n(22608),C=n(41034),_=n(52456),U=n(46417);r.default=function(){var e=(0,k.useState)([]),r=(0,i.Z)(e,2),n=r[0],D=r[1],L=(0,k.useState)(0),T=(0,i.Z)(L,2),J=T[0],N=T[1],A=(0,k.useState)(5),F=(0,i.Z)(A,2),R=F[0],W=F[1],M=(0,k.useState)([]),$=(0,i.Z)(M,2),O=($[0],$[1],(0,k.useState)(null)),V=(0,i.Z)(O,2),Y=(V[0],V[1],(0,k.useState)(null)),q=(0,i.Z)(Y,2),z=(q[0],q[1],(0,k.useState)(!1)),B=(0,i.Z)(z,2),G=(B[0],B[1],(0,k.useState)(!1)),H=(0,i.Z)(G,2),K=H[0],Q=H[1],X=(0,k.useState)(null),ee=(0,i.Z)(X,2),re=ee[0],ne=ee[1],te=(0,k.useState)([]),se=(0,i.Z)(te,2),oe=se[0],ie=se[1],ce=(0,k.useState)(null),ae=(0,i.Z)(ce,2),ue=(ae[0],ae[1]),le=(0,k.useState)(null),he=(0,i.Z)(le,2),de=he[0],pe=he[1],fe=(0,k.useState)(null),xe=(0,i.Z)(fe,2),Ze=xe[0],ve=xe[1],me=(0,C.Ds)().enqueueSnackbar,ge=(0,b.s0)();(0,k.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,1,e.next=4,(0,_._$)(1);case 4:r=e.sent,D(r.theses),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching properties:",e.t0),me("Error fetching properties",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[me]);var je=function(){Q(!1)},we=function(){ue(null),pe(null)},ke=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!re){e.next=16;break}return e.prev=1,e.next=4,(0,_.wI)(re);case 4:console.log("Property deleted successfully"),me("Property deleted successfully",{variant:"success"}),D(n.filter((function(e){return e.id!==re}))),je(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.error("Error deleting property:",e.t0),me("Error deleting property",{variant:"error"});case 14:e.next=18;break;case 16:console.error("No property ID selected for deletion"),me("No property ID selected for deletion",{variant:"warning"});case 18:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(r,n){var o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.r$)(n,r);case 3:me(" status updated successfully"),o=oe.map((function(e){return e.id===n?(0,t.Z)((0,t.Z)({},e),{},{UserStatus:r}):e})),ie(o),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error updating  status:",e.t0),me("Error updating  status",{variant:"error"});case 12:return e.prev=12,we(),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(r,n){return e.apply(this,arguments)}}();return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(P.Z,{heading:"Thesis List",links:[{name:"Dashboard"},{name:"Thesis"},{name:"List"}],action:(0,U.jsx)(c.Z,{component:y.rU,to:"/dashboard/thesis/new",variant:"contained",startIcon:(0,U.jsx)(E.Z,{icon:"eva:plus-fill"}),children:"New"})}),(0,U.jsxs)(a.Z,{component:u.Z,sx:{margin:"2%",width:"90%"},children:[(0,U.jsxs)(l.Z,{sx:{minWidth:650},"aria-label":"property table",children:[(0,U.jsx)(h.Z,{children:(0,U.jsxs)(d.Z,{children:[(0,U.jsx)(p.Z,{children:"Thesis ID"}),(0,U.jsx)(p.Z,{children:"Title"}),(0,U.jsx)(p.Z,{children:"College/University"}),(0,U.jsx)(p.Z,{children:"Author"}),(0,U.jsx)(p.Z,{children:"Status Action"}),(0,U.jsx)(p.Z,{align:"center",children:"Actions"}),(0,U.jsx)(p.Z,{align:"center",children:"Edit"})]})}),(0,U.jsx)(f.Z,{children:n.slice(J*R,J*R+R).map((function(e){return(0,U.jsxs)(d.Z,{children:[(0,U.jsx)(p.Z,{children:e.thesisId}),(0,U.jsxs)(x.Z,{direction:"row",alignItems:"center",spacing:2,sx:{marginTop:"15px"},children:[(0,U.jsx)(Z.Z,{alt:e.title,src:e.photoId}),(0,U.jsx)(v.Z,{variant:"subtitle2",noWrap:!0,children:e.title})]}),(0,U.jsx)(p.Z,{children:e.collegeUniversity}),(0,U.jsx)(p.Z,{children:e.author}),(0,U.jsxs)(p.Z,{children:[(0,U.jsx)(m.Z,{color:de?"primary":"default",onClick:function(r){return function(e,r){ve(r),pe(e.currentTarget)}(r,e.id)},children:(0,U.jsx)(E.Z,{icon:"eva:more-vertical-fill"})}),e.UserStatus]}),(0,U.jsx)(p.Z,{align:"center",children:(0,U.jsxs)(g.Z,{sx:{display:"flex",justifyContent:"center",gap:1},children:[(0,U.jsx)(m.Z,{component:"a",href:e.fullPdf,target:"_blank",rel:"noopener noreferrer",children:(0,U.jsx)(E.Z,{icon:"eva:eye-outline"})}),(0,U.jsx)(m.Z,{component:"a",href:e.fullPdf,download:"".concat(e.title,".pdf"),children:(0,U.jsx)(E.Z,{icon:"eva:download-fill"})})]})}),(0,U.jsxs)(p.Z,{children:[(0,U.jsx)(m.Z,{onClick:function(){ne(e.id),Q(!0)},sx:{color:"error.main"},children:(0,U.jsx)(E.Z,{icon:"eva:trash-2-outline"})}),(0,U.jsx)(m.Z,{onClick:function(r){return n=e.id,void ge("/dashboard/thesis/".concat(n,"/edit"));var n},children:(0,U.jsx)(E.Z,{icon:"eva:edit-fill"})})]})]},e.id)}))})]}),(0,U.jsx)(I.Z,{open:K,onClose:je,title:"Delete",content:"Are you sure want to delete?",action:(0,U.jsx)(c.Z,{variant:"contained",color:"error",onClick:ke,children:"Delete"})}),(0,U.jsxs)(S.Z,{open:de,onClose:we,arrow:"right-top",sx:{width:140},children:[(0,U.jsxs)(j.Z,{onClick:function(){be("Approve",Ze),we()},children:[(0,U.jsx)(E.Z,{icon:"eva:checkmark-circle-2-fill",style:{color:"rgb(59, 130, 246)"}}),(0,U.jsx)(v.Z,{variant:"inherit",style:{color:"rgb(59, 130, 246)"},children:"Approve"})]}),(0,U.jsxs)(j.Z,{onClick:function(){be("Rejected",Ze),we()},children:[(0,U.jsx)(E.Z,{icon:"bi:circle",style:{color:"rgb(202, 138, 4)"}}),(0,U.jsx)(v.Z,{variant:"inherit",style:{color:"rgb(202, 138, 4)"},children:"Rejected"})]}),(0,U.jsxs)(j.Z,{onClick:function(){be("Disabled",Ze),we()},children:[(0,U.jsx)(E.Z,{icon:"carbon:close-outline",style:{color:"red"}}),(0,U.jsx)(v.Z,{variant:"inherit",style:{color:"rgb(239, 68, 68)"},children:"Disabled"})]})]}),(0,U.jsx)(w.Z,{component:"div",count:n.length,page:J,onPageChange:function(e,r){N(r)},rowsPerPage:R,onRowsPerPageChange:function(e){W(parseInt(e.target.value,10)),N(0)}})]})]})}}}]);