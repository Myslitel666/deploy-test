import{t as ut,a as B,d as x}from"../chunks/DUoM3AZq.js";import{i as _t}from"../chunks/DFUtdag_.js";import{h as P,a9 as tt,as as mt,E as At,at as Ct,au as St,av as yt,b as wt,ao as Tt,p as Et,A as m,g as l,t as nt,m as Nt,aw as N,o as A,q as C,v as O,ax as rt,J as et}from"../chunks/D_OeMbQY.js";import{i as Mt,c as It,d as Lt,a as Ot,n as Rt,b as zt,l as Pt,r as jt,s as $}from"../chunks/MQEBLoyn.js";import{t as Vt,s as Xt}from"../chunks/BbWwtxhQ.js";import{l as Ut,p as T}from"../chunks/BvMOyvXf.js";import{o as $t}from"../chunks/qR3Z8fPt.js";import{w as qt,g as Bt}from"../chunks/Do6UeWNv.js";function ct(t){var r,e,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var a=t.length;for(r=0;r<a;r++)t[r]&&(e=ct(t[r]))&&(i&&(i+=" "),i+=e)}else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}function kt(){for(var t,r,e=0,i="",a=arguments.length;e<a;e++)(t=arguments[e])&&(r=ct(t))&&(i&&(i+=" "),i+=r);return i}function Gt(t){return typeof t=="object"?kt(t):t??""}const it=[...` 	
\r\f \v\uFEFF`];function Yt(t,r,e){var i=t==null?"":""+t;if(i=i?i+" "+r:r,e){for(var a in e)if(e[a])i=i?i+" "+a:a;else if(i.length)for(var s=a.length,u=0;(u=i.indexOf(a,u))>=0;){var n=u+s;(u===0||it.includes(i[u-1]))&&(n===i.length||it.includes(i[n]))?i=(u===0?"":i.substring(0,u))+i.substring(n+1):u=n}}return i===""?null:i}function at(t,r=!1){var e=r?" !important;":";",i="";for(var a in t){var s=t[a];s!=null&&s!==""&&(i+=" "+a+": "+s+e)}return i}function W(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Ft(t,r){if(r){var e="",i,a;if(Array.isArray(r)?(i=r[0],a=r[1]):i=r,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,u=0,n=!1,p=[];i&&p.push(...Object.keys(i).map(W)),a&&p.push(...Object.keys(a).map(W));var v=0,_=-1;const S=t.length;for(var h=0;h<S;h++){var b=t[h];if(n?b==="/"&&t[h-1]==="*"&&(n=!1):s?s===b&&(s=!1):b==="/"&&t[h+1]==="*"?n=!0:b==='"'||b==="'"?s=b:b==="("?u++:b===")"&&u--,!n&&s===!1&&u===0){if(b===":"&&_===-1)_=h;else if(b===";"||h===S-1){if(_!==-1){var R=W(t.substring(v,_).trim());if(!p.includes(R)){b!==";"&&h++;var E=t.substring(v,h).trim();e+=" "+E+";"}}v=h+1,_=-1}}}}return i&&(e+=at(i)),a&&(e+=at(a,!0)),e=e.trim(),e===""?null:e}return t==null?null:String(t)}function Ht(t,r,e,i,a,s){var u=t.__className;if(P||u!==e){var n=Yt(e,i,s);(!P||n!==t.getAttribute("class"))&&(n==null?t.removeAttribute("class"):r?t.className=n:t.setAttribute("class",n)),t.__className=e}else if(s&&a!==s)for(var p in s){var v=!!s[p];(a==null||v!==!!a[p])&&t.classList.toggle(p,v)}return s}function D(t,r={},e,i){for(var a in e){var s=e[a];r[a]!==s&&(e[a]==null?t.style.removeProperty(a):t.style.setProperty(a,s,i))}}function M(t,r,e,i){var a=t.__style;if(P||a!==r){var s=Ft(r,i);(!P||s!==t.getAttribute("style"))&&(s==null?t.removeAttribute("style"):t.style.cssText=s),t.__style=r}else i&&(Array.isArray(i)?(D(t,e==null?void 0:e[0],i[0]),D(t,e==null?void 0:e[1],i[1],"important")):D(t,e,i));return i}const q=Symbol("class"),X=Symbol("style"),dt=Symbol("is custom element"),vt=Symbol("is html");function Wt(t,r){r?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function st(t,r,e,i){var a=ht(t);P&&(a[r]=t.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&t.nodeName==="LINK")||a[r]!==(a[r]=e)&&(r==="loading"&&(t[Ct]=e),e==null?t.removeAttribute(r):typeof e!="string"&&bt(t).includes(r)?t[r]=e:t.setAttribute(r,e))}function Dt(t,r,e,i,a=!1){var s=ht(t),u=s[dt],n=!s[vt];let p=P&&u;p&&tt(!1);var v=r||{},_=t.tagName==="OPTION";for(var h in r)h in e||(e[h]=null);e.class?e.class=Gt(e.class):e.class=null,e[X]&&(e.style??(e.style=null));var b=bt(t);for(const o in e){let f=e[o];if(_&&o==="value"&&f==null){t.value=t.__value="",v[o]=f;continue}if(o==="class"){var R=t.namespaceURI==="http://www.w3.org/1999/xhtml";Ht(t,R,f,i,r==null?void 0:r[q],e[q]),v[o]=f,v[q]=e[q];continue}if(o==="style"){M(t,f,r==null?void 0:r[X],e[X]),v[o]=f,v[X]=e[X];continue}var E=v[o];if(f!==E){v[o]=f;var S=o[0]+o[1];if(S!=="$$")if(S==="on"){const g={},y="$$"+o;let d=o.slice(2);var I=zt(d);if(Mt(d)&&(d=d.slice(0,-7),g.capture=!0),!I&&E){if(f!=null)continue;t.removeEventListener(d,v[y],g),v[y]=null}if(f!=null)if(I)t[`__${d}`]=f,Lt([d]);else{let z=function(j){v[o].call(this,j)};v[y]=It(d,t,z,g)}else I&&(t[`__${d}`]=void 0)}else if(o==="style")st(t,o,f);else if(o==="autofocus")Ot(t,!!f);else if(!u&&(o==="__value"||o==="value"&&f!=null))t.value=t.__value=f;else if(o==="selected"&&_)Wt(t,f);else{var c=o;n||(c=Rt(c));var w=c==="defaultValue"||c==="defaultChecked";if(f==null&&!u&&!w)if(s[o]=null,c==="value"||c==="checked"){let g=t;const y=r===void 0;if(c==="value"){let d=g.defaultValue;g.removeAttribute(c),g.defaultValue=d,g.value=g.__value=y?d:null}else{let d=g.defaultChecked;g.removeAttribute(c),g.defaultChecked=d,g.checked=y?d:!1}}else t.removeAttribute(o);else w||b.includes(c)&&(u||typeof f!="string")?t[c]=f:typeof f!="function"&&st(t,c,f)}}}return p&&tt(!0),v}function ht(t){return t.__attributes??(t.__attributes={[dt]:t.nodeName.includes("-"),[vt]:t.namespaceURI===mt})}var lt=new Map;function bt(t){var r=lt.get(t.nodeName);if(r)return r;lt.set(t.nodeName,r=[]);for(var e,i=t,a=Element.prototype;a!==i;){e=St(i);for(var s in e)e[s].set&&r.push(s);i=At(i)}return r}function Jt(t,r,e=r){var i=yt();Pt(t,"input",a=>{var s=a?t.defaultValue:t.value;if(s=J(t)?K(s):s,e(s),i&&s!==(s=r())){var u=t.selectionStart,n=t.selectionEnd;t.value=s??"",n!==null&&(t.selectionStart=u,t.selectionEnd=Math.min(n,t.value.length))}}),(P&&t.defaultValue!==t.value||wt(r)==null&&t.value)&&e(J(t)?K(t.value):t.value),Tt(()=>{var a=r();J(t)&&a===K(t.value)||t.type==="date"&&!a&&!t.value||a!==t.value&&(t.value=a??"")})}function J(t){var r=t.type;return r==="number"||r==="range"}function K(t){return t===""?null:+t}const ot=qt(0),Kt=()=>(ot.update(r=>r+1),Bt(ot));var Qt=ut('<div class="input-container svelte-18mivu2"><button><!></button></div>');function ft(t,r){const e=Ut(r,["children","$$slots","$$events","$$legacy"]);Et(r,!1);let i=T(r,"variant",8,"Contained"),a=T(r,"id",12,""),s=T(r,"borderColor",8,""),u=T(r,"borderRadius",8,""),n=T(r,"boxShadow",8,""),p=T(r,"fontSize",8,""),v=T(r,"height",8,""),_=T(r,"minWidth",8,""),h=T(r,"primaryColor",12,""),b=T(r,"textColor",12,""),R=T(r,"width",8,""),E=b()!=="",S=h()!=="",I=N(""),c=N();Vt.subscribe(d=>{m(c,d),S||h(l(c).palette.primary),E||b(i()==="Contained"?l(c).palette.text.contrast:l(c).palette.primary),m(I,l(c).controls.button.filter)}),$t(()=>{a()||a(`button-${Kt()}`)}),_t();var w=Qt();let o;var f=A(w);let g;var y=A(f);Xt(y,r,"default",{}),C(f),C(w),nt(()=>{var d,z,j,V,U;o=M(w,"",o,{width:R()||((d=l(c))==null?void 0:d.controls.width)}),g=Dt(f,g,{id:a(),placeholder:"",...e,[X]:{border:i()==="Outlined"?`1px solid ${h()}`:"none","border-color":s(),"border-radius":u()||((z=l(c))==null?void 0:z.border.borderRadius.default),"box-shadow":n(),"font-size":p()||((j=l(c))==null?void 0:j.typography.fontSize),"min-width":_(),width:"100%","--Xl-color":i()==="Contained"?h():"","--Xl-effectsTimeCode":(V=l(c))==null?void 0:V.effectsTimeCode,"--Xl-height":v()||((U=l(c))==null?void 0:U.controls.height),"--Xl-hoverBorderColor":b(),"--Xl-textColor":b(),"--Xl-filter":l(I)}},"svelte-18mivu2")}),B(t,w),Nt()}const Zt=!0,fr=Object.freeze(Object.defineProperty({__proto__:null,prerender:Zt},Symbol.toStringTag,{value:"Module"}));var xt=ut(`<div><p>Are you ready to play?</p> <div class="mgn-top svelte-1lmbire"><!></div> <div class="mgn-top svelte-1lmbire"><span> </span> <span>Your Record: <span> </span></span></div> <div class="mgn-top svelte-1lmbire" id="sqnc"><p> </p> <p> </p></div> <div class="mgn-top svelte-1lmbire"><textarea>
	  </textarea></div> <div class="mgn-top svelte-1lmbire"><!></div></div>`);function ur(t){let r=N("hidden"),e=N("hidden"),i=N(!1),a=N(3),s=N(""),u=N(""),n=N(0),p=N(0);function v(){m(s,"");for(let L=0;L<l(a);L++){let F=Math.floor(Math.random()*9)+1;m(s,l(s)+F)}}function _(){v(),m(r,"visible"),setTimeout(()=>{m(r,"hidden")},1750)}var h=xt();M(h,"",{},{margin:"1rem"});var b=O(A(h),2),R=A(b);ft(R,{width:"11rem",onclick:()=>{m(e,"visible"),l(i)||_(),m(i,!0)},children:(L,F)=>{rt();var H=x("Ready to Go!");B(L,H)},$$slots:{default:!0}}),C(b);var E=O(b,2),S=A(E);let I;var c=A(S);C(S);var w=O(S,2);let o;var f=O(A(w));M(f,"",{},{color:"green"});var g=A(f,!0);C(f),C(w),C(E);var y=O(E,2),d=A(y);let z;var j=A(d,!0);C(d);var V=O(d,2);let U;var gt=A(V,!0);C(V),C(y);var k=O(y,2),G=A(k);jt(G);let Q;C(k);var Y=O(k,2);let Z;var pt=A(Y);ft(pt,{width:"11rem",onclick:()=>{l(u)===l(s)?(l(a)>l(p)&&m(p,l(a)),et(a),m(n,0)):(et(a,-1),m(n,1)),_(),m(u,"")},children:(L,F)=>{rt();var H=x("Check Result");B(L,H)},$$slots:{default:!0}}),C(Y),C(h),nt(()=>{I=M(S,"",I,{visibility:l(e)}),$(c,`Numb Count: ${l(a)??""}`),o=M(w,"",o,{visibility:l(e),"margin-left":"1.5rem"}),$(g,l(p)),z=M(d,"",z,{visibility:l(e)}),$(j,l(r)==="visible"?"Remember the number:":"Enter the number"),U=M(V,"",U,{visibility:l(r),color:l(n)?"red":"green","margin-top":"0.75rem"}),$(gt,l(s)),Q=M(G,"",Q,{visibility:l(e),border:"1px solid #d7d7d7",outline:"none","border-radius":"0.25rem",width:"15rem",height:"9rem",padding:"0.66rem","margin-top":"4rem","font-size":"16px"}),Z=M(Y,"",Z,{visibility:l(e)})}),Jt(G,()=>l(u),L=>m(u,L)),B(t,h)}export{ur as component,fr as universal};
