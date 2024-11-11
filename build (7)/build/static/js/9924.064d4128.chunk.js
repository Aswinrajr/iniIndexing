"use strict";(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[9924],{48669:function(e,n,i){i.d(n,{Z:function(){return m}});var t=i(1413),r=i(45987),l=i(16157),s=i(62463),o=i(42669),c=i(80493),a=i(77449),d=i(2135),x=i(46417);function h(e){var n=e.link,i=e.activeLast,r=e.disabled,s=n.name,o=n.href,c=n.icon,h=(0,t.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},r&&!i&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),u=(0,x.jsxs)(x.Fragment,{children:[c&&(0,x.jsx)(l.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),s]});return o?(0,x.jsx)(a.Z,{component:d.rU,to:o,sx:h,children:u}):(0,x.jsxs)(l.Z,{sx:h,children:[" ",u," "]})}var u=["links","action","heading","moreLink","activeLast","sx"];function m(e){var n=e.links,i=e.action,d=e.heading,m=e.moreLink,j=e.activeLast,p=e.sx,f=(0,r.Z)(e,u),g=n[n.length-1].name;return(0,x.jsxs)(l.Z,{sx:(0,t.Z)({mb:5},p),children:[(0,x.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,x.jsxs)(l.Z,{sx:{flexGrow:1},children:[d&&(0,x.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,x.jsx)(c.Z,(0,t.Z)((0,t.Z)({separator:(0,x.jsx)(Z,{})},f),{},{children:n.map((function(e){return(0,x.jsx)(h,{link:e,activeLast:j,disabled:e.name===g},e.name||"")}))}))]}),i&&(0,x.jsxs)(l.Z,{sx:{flexShrink:0},children:[" ",i," "]})]}),!!m&&(0,x.jsx)(l.Z,{sx:{mt:2},children:m.map((function(e){return(0,x.jsx)(a.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function Z(){return(0,x.jsx)(l.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},72805:function(e,n,i){i.d(n,{Z:function(){return t.Z}});var t=i(48669)},19924:function(e,n,i){i.r(n),i.d(n,{default:function(){return F}});var t=i(65964),r=i(82403),l=i(48571),s=i(25234),o=i(83922),c=i(61414),a=i(17945),d=i(88221),x=i(63366),h=i(87462),u=i(47313),m=i(83061),Z=i(64164),j=i(11236),p=i(28170),f=i(21921),g=i(42669),v=i(85452),y=i(95890),k=i(46417),b=["className"],w=(0,Z.ZP)(g.Z,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:function(e,n){var i=e.ownerState;return[n.root,n["position".concat((0,p.Z)(i.position))]]}})((function(e){var n=e.ownerState;return(0,h.Z)({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},"left"===n.position&&{textAlign:"left"})})),M=u.forwardRef((function(e,n){var i=(0,j.Z)({props:e,name:"MuiTimelineOppositeContent"}),t=i.className,r=(0,x.Z)(i,b),l=u.useContext(v.Z).position,s=(0,h.Z)({},i,{position:l||"left"}),o=function(e){var n=e.position,i=e.classes,t={root:["root","position".concat((0,p.Z)(n))]};return(0,f.Z)(t,y.W,i)}(s);return(0,k.jsx)(w,(0,h.Z)({component:"div",className:(0,m.Z)(o.root,t),ownerState:s,ref:n},r))}));M.muiName="TimelineOppositeContent";var N=M,_=i(16157),C=i(10679),L=i(80654),R=i(17551),I=i(48175),T=i(72805),O=i(8730),A=i(16769),S=[{key:1,title:"Default",des:"Morbi mattis ullamcorper",time:"09:30 am",icon:(0,k.jsx)(O.Z,{icon:"eva:folder-add-fill",width:24})},{key:2,title:"Primary",des:"Morbi mattis ullamcorper",time:"10:00 am",color:"primary",icon:(0,k.jsx)(O.Z,{icon:"eva:image-2-fill",width:24})},{key:3,title:"Secondary",des:"Morbi mattis ullamcorper",time:"10:00 am",color:"secondary",icon:(0,k.jsx)(O.Z,{icon:"eva:pantone-fill",width:24})},{key:4,title:"Info",des:"Morbi mattis ullamcorper",time:"10:30 am",color:"info",icon:(0,k.jsx)(O.Z,{icon:"eva:tv-fill",width:24})},{key:5,title:"Success",des:"Morbi mattis ullamcorper",time:"11:00 am",color:"success",icon:(0,k.jsx)(O.Z,{icon:"eva:activity-fill",width:24})},{key:6,title:"Warning",des:"Morbi mattis ullamcorper",time:"11:30 am",color:"warning",icon:(0,k.jsx)(O.Z,{icon:"eva:cube-fill",width:24})},{key:7,title:"Error",des:"Morbi mattis ullamcorper",time:"12:00 am",color:"error",icon:(0,k.jsx)(O.Z,{icon:"eva:film-fill",width:24})}];function F(){var e=S[S.length-1].key,n=S.slice(S.length-3);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(t.ql,{children:(0,k.jsx)("title",{children:" MUI Components: Timeline | INTERNATIONAL JOURNAL INDEXING"})}),(0,k.jsx)(_.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,k.jsx)(C.Z,{children:(0,k.jsx)(T.Z,{heading:"Timeline",links:[{name:"Components",href:I.ko.components},{name:"Timeline"}],moreLink:["https://mui.com/components/timeline"]})})}),(0,k.jsxs)(C.Z,{sx:{my:10},children:[(0,k.jsxs)(r.ZP,{columns:{xs:1,md:3},spacing:3,children:[(0,k.jsx)(A.g,{title:"Default",children:(0,k.jsx)(l.Z,{children:n.map((function(n){return(0,k.jsxs)(s.Z,{children:[(0,k.jsxs)(o.Z,{children:[(0,k.jsx)(c.Z,{}),e===n.key?null:(0,k.jsx)(a.Z,{})]}),(0,k.jsx)(d.Z,{children:n.title})]},n.key)}))})}),(0,k.jsx)(A.g,{title:"Right",children:(0,k.jsx)(l.Z,{position:"right",children:n.map((function(n){return(0,k.jsxs)(s.Z,{children:[(0,k.jsxs)(o.Z,{children:[(0,k.jsx)(c.Z,{}),e===n.key?null:(0,k.jsx)(a.Z,{})]}),(0,k.jsx)(d.Z,{children:n.title})]},n.key)}))})}),(0,k.jsx)(A.g,{title:"Alternating",children:(0,k.jsx)(l.Z,{position:"alternate",children:n.map((function(n){return(0,k.jsxs)(s.Z,{children:[(0,k.jsxs)(o.Z,{children:[(0,k.jsx)(c.Z,{}),e===n.key?null:(0,k.jsx)(a.Z,{})]}),(0,k.jsx)(d.Z,{children:n.title})]},n.key)}))})}),(0,k.jsx)(A.g,{title:"Filled",children:(0,k.jsx)(l.Z,{position:"alternate",children:S.map((function(n){return(0,k.jsxs)(s.Z,{children:[(0,k.jsxs)(o.Z,{children:[(0,k.jsx)(c.Z,{color:n.color}),e===n.key?null:(0,k.jsx)(a.Z,{})]}),(0,k.jsx)(d.Z,{children:n.title})]},n.key)}))})}),(0,k.jsx)(A.g,{title:"Outlined",children:(0,k.jsx)(l.Z,{position:"alternate",children:S.map((function(n){return(0,k.jsxs)(s.Z,{children:[(0,k.jsxs)(o.Z,{children:[(0,k.jsx)(c.Z,{variant:"outlined",color:n.color}),e===n.key?null:(0,k.jsx)(a.Z,{})]}),(0,k.jsx)(d.Z,{children:n.title})]},n.key)}))})}),(0,k.jsx)(A.g,{title:"Opposite content",children:(0,k.jsx)(l.Z,{position:"alternate",children:S.map((function(n){return(0,k.jsxs)(s.Z,{children:[(0,k.jsx)(N,{children:(0,k.jsx)(g.Z,{sx:{color:"text.secondary"},children:n.time})}),(0,k.jsxs)(o.Z,{children:[(0,k.jsx)(c.Z,{color:n.color}),e===n.key?null:(0,k.jsx)(a.Z,{})]}),(0,k.jsx)(d.Z,{children:(0,k.jsxs)(g.Z,{children:[" ",n.title]})})]},n.key)}))})})]}),(0,k.jsx)(A.g,{title:"Customized",children:(0,k.jsx)(l.Z,{position:"alternate",children:S.map((function(e){return(0,k.jsxs)(s.Z,{children:[(0,k.jsx)(N,{children:(0,k.jsx)(g.Z,{variant:"body2",sx:{color:"text.secondary"},children:e.time})}),(0,k.jsxs)(o.Z,{children:[(0,k.jsx)(c.Z,{color:e.color,children:e.icon}),(0,k.jsx)(a.Z,{})]}),(0,k.jsx)(d.Z,{children:(0,k.jsxs)(L.Z,{sx:{p:3,bgcolor:function(e){return(0,R.Fq)(e.palette.grey[500],.12)}},children:[(0,k.jsx)(g.Z,{variant:"subtitle2",children:e.title}),(0,k.jsx)(g.Z,{variant:"body2",sx:{color:"text.secondary"},children:e.des})]})})]},e.key)}))})})]})]})}},16769:function(e,n,i){i.d(n,{_:function(){return x},g:function(){return d}});var t=i(1413),r=i(17551),l=i(80654),s=i(29700),o=i(16157),c=i(42669),a=i(46417);function d(e){var n=e.title,i=e.sx,c=e.children;return(0,a.jsxs)(l.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,r.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,a.jsx)(s.Z,{title:n}),(0,a.jsx)(o.Z,{sx:(0,t.Z)({p:5,minHeight:180},i),children:c})]})}function x(e){var n=e.title;return(0,a.jsx)(c.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}}}]);