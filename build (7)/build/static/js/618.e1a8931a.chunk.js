(self.webpackChunk_Minimall_Minimall_kit_react=self.webpackChunk_Minimall_Minimall_kit_react||[]).push([[618],{80493:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var r=n(93433),o=n(29439),a=n(4942),i=n(87462),l=n(63366),c=n(47313),s=(n(96214),n(83061)),u=n(21921),m=n(64164),p=n(11236),f=n(42669),d=n(17551),h=n(46095),g=n(46417),y=(0,h.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),T=n(56456),v=(0,m.ZP)(T.Z)((function(e){var t=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,d._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,d._4)(t.palette.grey[600],.12)})})})),E=(0,m.ZP)(y)({width:24,height:16});var _=function(e){var t=e;return(0,g.jsx)("li",{children:(0,g.jsx)(v,(0,i.Z)({focusRipple:!0},e,{ownerState:t,children:(0,g.jsx)(E,{ownerState:t})}))})},b=n(77430),A=n(32298);function N(e){return(0,A.Z)("MuiBreadcrumbs",e)}var S=(0,b.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),R=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],x=(0,m.ZP)(f.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,a.Z)({},"& .".concat(S.li),t.li),t.root]}})({}),w=(0,m.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),C=(0,m.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function k(e,t,n,r){return e.reduce((function(o,a,i){return i<e.length-1?o=o.concat(a,(0,g.jsx)(C,{"aria-hidden":!0,className:t,ownerState:r,children:n},"separator-".concat(i))):o.push(a),o}),[])}var L=c.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),a=n.children,m=n.className,f=n.component,d=void 0===f?"nav":f,h=n.expandText,y=void 0===h?"Show path":h,T=n.itemsAfterCollapse,v=void 0===T?1:T,E=n.itemsBeforeCollapse,b=void 0===E?1:E,A=n.maxItems,S=void 0===A?8:A,C=n.separator,L=void 0===C?"/":C,O=(0,l.Z)(n,R),M=c.useState(!1),D=(0,o.Z)(M,2),I=D[0],P=D[1],U=(0,i.Z)({},n,{component:d,expanded:I,expandText:y,itemsAfterCollapse:v,itemsBeforeCollapse:b,maxItems:S,separator:L}),F=function(e){var t=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},N,t)}(U),H=c.useRef(null),z=c.Children.toArray(a).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return(0,g.jsx)("li",{className:F.li,children:e},"child-".concat(t))}));return(0,g.jsx)(x,(0,i.Z)({ref:t,component:d,color:"text.secondary",className:(0,s.Z)(F.root,m),ownerState:U},O,{children:(0,g.jsx)(w,{className:F.ol,ref:H,ownerState:U,children:k(I||S&&z.length<=S?z:function(e){return b+v>=e.length?e:[].concat((0,r.Z)(e.slice(0,b)),[(0,g.jsx)(_,{"aria-label":y,onClick:function(){P(!0);var e=H.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-v,e.length)))}(z),F.separator,L,U)})}))}))},92484:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(87462),o=n(63366),a=n(47313),i=n(83061),l=n(21921),c=n(64164),s=n(11236),u=n(80654),m=n(77430),p=n(32298);function f(e){return(0,p.Z)("MuiCard",e)}(0,m.Z)("MuiCard",["root"]);var d=n(46417),h=["className","raised"],g=(0,c.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),y=a.forwardRef((function(e,t){var n=(0,s.Z)({props:e,name:"MuiCard"}),a=n.className,c=n.raised,u=void 0!==c&&c,m=(0,o.Z)(n,h),p=(0,r.Z)({},n,{raised:u}),y=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},f,t)}(p);return(0,d.jsx)(g,(0,r.Z)({className:(0,i.Z)(y.root,a),elevation:u?8:void 0,ref:t,ownerState:p},m))}))},313:function(e,t,n){var r=n(27424).default,o=n(74704).default,a=n(3515).default,i=n(861).default;e.exports=function(){"use strict";var e=Object.entries,t=Object.setPrototypeOf,n=Object.isFrozen,l=Object.getPrototypeOf,c=Object.getOwnPropertyDescriptor,s=Object.freeze,u=Object.seal,m=Object.create,p="undefined"!==typeof Reflect&&Reflect,f=p.apply,d=p.construct;s||(s=function(e){return e}),u||(u=function(e){return e}),f||(f=function(e,t,n){return e.apply(t,n)}),d||(d=function(e,t){return a(e,i(t))});var h=x(Array.prototype.forEach),g=x(Array.prototype.pop),y=x(Array.prototype.push),T=x(String.prototype.toLowerCase),v=x(String.prototype.toString),E=x(String.prototype.match),_=x(String.prototype.replace),b=x(String.prototype.indexOf),A=x(String.prototype.trim),N=x(Object.prototype.hasOwnProperty),S=x(RegExp.prototype.test),R=w(TypeError);function x(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return f(e,t,r)}}function w(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return d(e,n)}}function C(e,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:T;t&&t(e,null);for(var a=r.length;a--;){var i=r[a];if("string"===typeof i){var l=o(i);l!==i&&(n(r)||(r[a]=l),i=l)}e[i]=!0}return e}function k(e){for(var t=0;t<e.length;t++)N(e,t)||(e[t]=null);return e}function L(t){var n,a=m(null),i=o(e(t));try{for(i.s();!(n=i.n()).done;){var l=r(n.value,2),c=l[0],s=l[1];N(t,c)&&(Array.isArray(s)?a[c]=k(s):s&&"object"===typeof s&&s.constructor===Object?a[c]=L(s):a[c]=s)}}catch(u){i.e(u)}finally{i.f()}return a}function O(e,t){for(;null!==e;){var n=c(e,t);if(n){if(n.get)return x(n.get);if("function"===typeof n.value)return x(n.value)}e=l(e)}function r(){return null}return r}var M=s(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),D=s(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),I=s(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),P=s(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),U=s(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),F=s(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=s(["#text"]),z=s(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Z=s(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),B=s(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),j=s(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),W=u(/\{\{[\w\W]*|[\w\W]*\}\}/gm),G=u(/<%[\w\W]*|[\w\W]*%>/gm),Y=u(/\${[\w\W]*}/gm),q=u(/^data-[\-\w.\u00B7-\uFFFF]/),X=u(/^aria-[\-\w]+$/),V=u(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),$=u(/^(?:\w+script|data):/i),K=u(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),J=u(/^html$/i),Q=u(/^[a-z][.\w]*(-[.\w]+)+$/i),ee=Object.freeze({__proto__:null,MUSTACHE_EXPR:W,ERB_EXPR:G,TMPLIT_EXPR:Y,DATA_ATTR:q,ARIA_ATTR:X,IS_ALLOWED_URI:V,IS_SCRIPT_OR_DATA:$,ATTR_WHITESPACE:K,DOCTYPE_NAME:J,CUSTOM_ELEMENT:Q}),te={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},ne=function(){return"undefined"===typeof window?null:window},re=function(e,t){if("object"!==typeof e||"function"!==typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(a){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function oe(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne(),n=function(e){return oe(e)};if(n.version="3.1.6",n.removed=[],!t||!t.document||t.document.nodeType!==te.document)return n.isSupported=!1,n;var r,o=t.document,a=o,l=a.currentScript,c=t.DocumentFragment,u=t.HTMLTemplateElement,p=t.Node,f=t.Element,d=t.NodeFilter,x=t.NamedNodeMap,w=void 0===x?t.NamedNodeMap||t.MozNamedAttrMap:x,k=t.HTMLFormElement,W=t.DOMParser,G=t.trustedTypes,Y=f.prototype,q=O(Y,"cloneNode"),X=O(Y,"remove"),$=O(Y,"nextSibling"),K=O(Y,"childNodes"),Q=O(Y,"parentNode");if("function"===typeof u){var ae=o.createElement("template");ae.content&&ae.content.ownerDocument&&(o=ae.content.ownerDocument)}var ie="",le=o,ce=le.implementation,se=le.createNodeIterator,ue=le.createDocumentFragment,me=le.getElementsByTagName,pe=a.importNode,fe={};n.isSupported="function"===typeof e&&"function"===typeof Q&&ce&&void 0!==ce.createHTMLDocument;var de=ee.MUSTACHE_EXPR,he=ee.ERB_EXPR,ge=ee.TMPLIT_EXPR,ye=ee.DATA_ATTR,Te=ee.ARIA_ATTR,ve=ee.IS_SCRIPT_OR_DATA,Ee=ee.ATTR_WHITESPACE,_e=ee.CUSTOM_ELEMENT,be=ee.IS_ALLOWED_URI,Ae=null,Ne=C({},[].concat(i(M),i(D),i(I),i(U),i(H))),Se=null,Re=C({},[].concat(i(z),i(Z),i(B),i(j))),xe=Object.seal(m(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),we=null,Ce=null,ke=!0,Le=!0,Oe=!1,Me=!0,De=!1,Ie=!0,Pe=!1,Ue=!1,Fe=!1,He=!1,ze=!1,Ze=!1,Be=!0,je=!1,We="user-content-",Ge=!0,Ye=!1,qe={},Xe=null,Ve=C({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),$e=null,Ke=C({},["audio","video","img","source","image","track"]),Je=null,Qe=C({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),et="http://www.w3.org/1998/Math/MathML",tt="http://www.w3.org/2000/svg",nt="http://www.w3.org/1999/xhtml",rt=nt,ot=!1,at=null,it=C({},[et,tt,nt],v),lt=null,ct=["application/xhtml+xml","text/html"],st="text/html",ut=null,mt=null,pt=o.createElement("form"),ft=function(e){return e instanceof RegExp||e instanceof Function},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!mt||mt!==e){if(e&&"object"===typeof e||(e={}),e=L(e),lt=-1===ct.indexOf(e.PARSER_MEDIA_TYPE)?st:e.PARSER_MEDIA_TYPE,ut="application/xhtml+xml"===lt?v:T,Ae=N(e,"ALLOWED_TAGS")?C({},e.ALLOWED_TAGS,ut):Ne,Se=N(e,"ALLOWED_ATTR")?C({},e.ALLOWED_ATTR,ut):Re,at=N(e,"ALLOWED_NAMESPACES")?C({},e.ALLOWED_NAMESPACES,v):it,Je=N(e,"ADD_URI_SAFE_ATTR")?C(L(Qe),e.ADD_URI_SAFE_ATTR,ut):Qe,$e=N(e,"ADD_DATA_URI_TAGS")?C(L(Ke),e.ADD_DATA_URI_TAGS,ut):Ke,Xe=N(e,"FORBID_CONTENTS")?C({},e.FORBID_CONTENTS,ut):Ve,we=N(e,"FORBID_TAGS")?C({},e.FORBID_TAGS,ut):{},Ce=N(e,"FORBID_ATTR")?C({},e.FORBID_ATTR,ut):{},qe=!!N(e,"USE_PROFILES")&&e.USE_PROFILES,ke=!1!==e.ALLOW_ARIA_ATTR,Le=!1!==e.ALLOW_DATA_ATTR,Oe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Me=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,De=e.SAFE_FOR_TEMPLATES||!1,Ie=!1!==e.SAFE_FOR_XML,Pe=e.WHOLE_DOCUMENT||!1,He=e.RETURN_DOM||!1,ze=e.RETURN_DOM_FRAGMENT||!1,Ze=e.RETURN_TRUSTED_TYPE||!1,Fe=e.FORCE_BODY||!1,Be=!1!==e.SANITIZE_DOM,je=e.SANITIZE_NAMED_PROPS||!1,Ge=!1!==e.KEEP_CONTENT,Ye=e.IN_PLACE||!1,be=e.ALLOWED_URI_REGEXP||V,rt=e.NAMESPACE||nt,xe=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&ft(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(xe.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ft(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(xe.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"===typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(xe.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),De&&(Le=!1),ze&&(He=!0),qe&&(Ae=C({},H),Se=[],!0===qe.html&&(C(Ae,M),C(Se,z)),!0===qe.svg&&(C(Ae,D),C(Se,Z),C(Se,j)),!0===qe.svgFilters&&(C(Ae,I),C(Se,Z),C(Se,j)),!0===qe.mathMl&&(C(Ae,U),C(Se,B),C(Se,j))),e.ADD_TAGS&&(Ae===Ne&&(Ae=L(Ae)),C(Ae,e.ADD_TAGS,ut)),e.ADD_ATTR&&(Se===Re&&(Se=L(Se)),C(Se,e.ADD_ATTR,ut)),e.ADD_URI_SAFE_ATTR&&C(Je,e.ADD_URI_SAFE_ATTR,ut),e.FORBID_CONTENTS&&(Xe===Ve&&(Xe=L(Xe)),C(Xe,e.FORBID_CONTENTS,ut)),Ge&&(Ae["#text"]=!0),Pe&&C(Ae,["html","head","body"]),Ae.table&&(C(Ae,["tbody"]),delete we.tbody),e.TRUSTED_TYPES_POLICY){if("function"!==typeof e.TRUSTED_TYPES_POLICY.createHTML)throw R('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!==typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw R('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');r=e.TRUSTED_TYPES_POLICY,ie=r.createHTML("")}else void 0===r&&(r=re(G,l)),null!==r&&"string"===typeof ie&&(ie=r.createHTML(""));s&&s(e),mt=e}},ht=C({},["mi","mo","mn","ms","mtext"]),gt=C({},["foreignobject","annotation-xml"]),yt=C({},["title","style","font","a","script"]),Tt=C({},[].concat(i(D),i(I),i(P))),vt=C({},[].concat(i(U),i(F))),Et=function(e){var t=Q(e);t&&t.tagName||(t={namespaceURI:rt,tagName:"template"});var n=T(e.tagName),r=T(t.tagName);return!!at[e.namespaceURI]&&(e.namespaceURI===tt?t.namespaceURI===nt?"svg"===n:t.namespaceURI===et?"svg"===n&&("annotation-xml"===r||ht[r]):Boolean(Tt[n]):e.namespaceURI===et?t.namespaceURI===nt?"math"===n:t.namespaceURI===tt?"math"===n&&gt[r]:Boolean(vt[n]):e.namespaceURI===nt?!(t.namespaceURI===tt&&!gt[r])&&!(t.namespaceURI===et&&!ht[r])&&!vt[n]&&(yt[n]||!Tt[n]):!("application/xhtml+xml"!==lt||!at[e.namespaceURI]))},_t=function(e){y(n.removed,{element:e});try{Q(e).removeChild(e)}catch(t){X(e)}},bt=function(e,t){try{y(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(r){y(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Se[e])if(He||ze)try{_t(t)}catch(r){}else try{t.setAttribute(e,"")}catch(r){}},At=function(e){var t=null,n=null;if(Fe)e="<remove></remove>"+e;else{var a=E(e,/^[\r\n\t ]+/);n=a&&a[0]}"application/xhtml+xml"===lt&&rt===nt&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=r?r.createHTML(e):e;if(rt===nt)try{t=(new W).parseFromString(i,lt)}catch(c){}if(!t||!t.documentElement){t=ce.createDocument(rt,"template",null);try{t.documentElement.innerHTML=ot?ie:i}catch(c){}}var l=t.body||t.documentElement;return e&&n&&l.insertBefore(o.createTextNode(n),l.childNodes[0]||null),rt===nt?me.call(t,Pe?"html":"body")[0]:Pe?t.documentElement:l},Nt=function(e){return se.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},St=function(e){return e instanceof k&&("string"!==typeof e.nodeName||"string"!==typeof e.textContent||"function"!==typeof e.removeChild||!(e.attributes instanceof w)||"function"!==typeof e.removeAttribute||"function"!==typeof e.setAttribute||"string"!==typeof e.namespaceURI||"function"!==typeof e.insertBefore||"function"!==typeof e.hasChildNodes)},Rt=function(e){return"function"===typeof p&&e instanceof p},xt=function(e,t,r){fe[e]&&h(fe[e],(function(e){e.call(n,t,r,mt)}))},wt=function(e){var t=null;if(xt("beforeSanitizeElements",e,null),St(e))return _t(e),!0;var r=ut(e.nodeName);if(xt("uponSanitizeElement",e,{tagName:r,allowedTags:Ae}),e.hasChildNodes()&&!Rt(e.firstElementChild)&&S(/<[/\w]/g,e.innerHTML)&&S(/<[/\w]/g,e.textContent))return _t(e),!0;if(e.nodeType===te.progressingInstruction)return _t(e),!0;if(Ie&&e.nodeType===te.comment&&S(/<[/\w]/g,e.data))return _t(e),!0;if(!Ae[r]||we[r]){if(!we[r]&&kt(r)){if(xe.tagNameCheck instanceof RegExp&&S(xe.tagNameCheck,r))return!1;if(xe.tagNameCheck instanceof Function&&xe.tagNameCheck(r))return!1}if(Ge&&!Xe[r]){var o=Q(e)||e.parentNode,a=K(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i){var l=q(a[i],!0);l.__removalCount=(e.__removalCount||0)+1,o.insertBefore(l,$(e))}}return _t(e),!0}return e instanceof f&&!Et(e)?(_t(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!S(/<\/no(script|embed|frames)/i,e.innerHTML)?(De&&e.nodeType===te.text&&(t=e.textContent,h([de,he,ge],(function(e){t=_(t,e," ")})),e.textContent!==t&&(y(n.removed,{element:e.cloneNode()}),e.textContent=t)),xt("afterSanitizeElements",e,null),!1):(_t(e),!0)},Ct=function(e,t,n){if(Be&&("id"===t||"name"===t)&&(n in o||n in pt))return!1;if(Le&&!Ce[t]&&S(ye,t));else if(ke&&S(Te,t));else if(!Se[t]||Ce[t]){if(!(kt(e)&&(xe.tagNameCheck instanceof RegExp&&S(xe.tagNameCheck,e)||xe.tagNameCheck instanceof Function&&xe.tagNameCheck(e))&&(xe.attributeNameCheck instanceof RegExp&&S(xe.attributeNameCheck,t)||xe.attributeNameCheck instanceof Function&&xe.attributeNameCheck(t))||"is"===t&&xe.allowCustomizedBuiltInElements&&(xe.tagNameCheck instanceof RegExp&&S(xe.tagNameCheck,n)||xe.tagNameCheck instanceof Function&&xe.tagNameCheck(n))))return!1}else if(Je[t]);else if(S(be,_(n,Ee,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==b(n,"data:")||!$e[e])if(Oe&&!S(ve,_(n,Ee,"")));else if(n)return!1;return!0},kt=function(e){return"annotation-xml"!==e&&E(e,_e)},Lt=function(e){xt("beforeSanitizeAttributes",e,null);var t=e.attributes;if(t){for(var o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Se},a=t.length,i=function(){var i=t[a],l=i.name,c=i.namespaceURI,s=i.value,u=ut(l),m="value"===l?s:A(s);if(o.attrName=u,o.attrValue=m,o.keepAttr=!0,o.forceKeepAttr=void 0,xt("uponSanitizeAttribute",e,o),m=o.attrValue,Ie&&S(/((--!?|])>)|<\/(style|title)/i,m))return bt(l,e),"continue";if(o.forceKeepAttr)return"continue";if(bt(l,e),!o.keepAttr)return"continue";if(!Me&&S(/\/>/i,m))return bt(l,e),"continue";De&&h([de,he,ge],(function(e){m=_(m,e," ")}));var p=ut(e.nodeName);if(!Ct(p,u,m))return"continue";if(!je||"id"!==u&&"name"!==u||(bt(l,e),m=We+m),r&&"object"===typeof G&&"function"===typeof G.getAttributeType)if(c);else switch(G.getAttributeType(p,u)){case"TrustedHTML":m=r.createHTML(m);break;case"TrustedScriptURL":m=r.createScriptURL(m)}try{c?e.setAttributeNS(c,l,m):e.setAttribute(l,m),St(e)?_t(e):g(n.removed)}catch(f){}};a--;)i();xt("afterSanitizeAttributes",e,null)}},Ot=function e(t){var n=null,r=Nt(t);for(xt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)xt("uponSanitizeShadowNode",n,null),wt(n)||(n.content instanceof c&&e(n.content),Lt(n));xt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=null,i=null,l=null,s=null;if((ot=!e)&&(e="\x3c!--\x3e"),"string"!==typeof e&&!Rt(e)){if("function"!==typeof e.toString)throw R("toString is not a function");if("string"!==typeof(e=e.toString()))throw R("dirty is not a string, aborting")}if(!n.isSupported)return e;if(Ue||dt(t),n.removed=[],"string"===typeof e&&(Ye=!1),Ye){if(e.nodeName){var u=ut(e.nodeName);if(!Ae[u]||we[u])throw R("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof p)(i=(o=At("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType===te.element&&"BODY"===i.nodeName||"HTML"===i.nodeName?o=i:o.appendChild(i);else{if(!He&&!De&&!Pe&&-1===e.indexOf("<"))return r&&Ze?r.createHTML(e):e;if(!(o=At(e)))return He?null:Ze?ie:""}o&&Fe&&_t(o.firstChild);for(var m=Nt(Ye?e:o);l=m.nextNode();)wt(l)||(l.content instanceof c&&Ot(l.content),Lt(l));if(Ye)return e;if(He){if(ze)for(s=ue.call(o.ownerDocument);o.firstChild;)s.appendChild(o.firstChild);else s=o;return(Se.shadowroot||Se.shadowrootmode)&&(s=pe.call(a,s,!0)),s}var f=Pe?o.outerHTML:o.innerHTML;return Pe&&Ae["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&S(J,o.ownerDocument.doctype.name)&&(f="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+f),De&&h([de,he,ge],(function(e){f=_(f,e," ")})),r&&Ze?r.createHTML(f):f},n.setConfig=function(){dt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Ue=!0},n.clearConfig=function(){mt=null,Ue=!1},n.isValidAttribute=function(e,t,n){mt||dt({});var r=ut(e),o=ut(t);return Ct(r,o,n)},n.addHook=function(e,t){"function"===typeof t&&(fe[e]=fe[e]||[],y(fe[e],t))},n.removeHook=function(e){if(fe[e])return g(fe[e])},n.removeHooks=function(e){fe[e]&&(fe[e]=[])},n.removeAllHooks=function(){fe={}},n}return oe()}()}}]);