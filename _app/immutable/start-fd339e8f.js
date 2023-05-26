import{n as Re,s as lt,S as ht,i as mt,a as _t,e as B,c as gt,b as H,g as me,t as F,d as _e,f as G,h as z,j as wt,o as Pe,k as yt,l as bt,m as vt,p as Se,q as V,r as Et,u as kt,v as Rt,w as x,x as X,y as De,z as Z,A as Q,B as fe}from"./chunks/index-355eb357.js";function St(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Lt(t){return t.split("%25").map(decodeURI).join("%25")}function At(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}const It=["href","pathname","search","searchParams","toString","toJSON"];function Ot(t,e){const n=new URL(t);for(const o of It){let r=n[o];Object.defineProperty(n,o,{get(){return e(),r},enumerable:!0,configurable:!0})}return Ut(n),n}function Ut(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Pt="/__data.json";function $t(t){return t.replace(/\/$/,"")+Pt}const W=[];function Ve(t,e=Re){let n;const o=new Set;function r(f){if(lt(t,f)&&(t=f,n)){const h=!W.length;for(const d of o)d[1](),W.push(d,t);if(h){for(let d=0;d<W.length;d+=2)W[d][0](W[d+1]);W.length=0}}}function u(f){r(f(t))}function a(f,h=Re){const d=[f,h];return o.add(d),o.size===1&&(n=e(r)||Re),f(t),()=>{o.delete(d),o.size===0&&(n(),n=null)}}return{set:r,update:u,subscribe:a}}let ct="",Ze="",ft="";function Nt(t){Ze=t.base,ct=t.assets||Ze}function Tt(t){ft=t}const ut="sveltekit:scroll",C="sveltekit:index",he={tap:1,hover:2,viewport:3,eager:4,off:-1};function Qe(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function pe(){return{x:pageXOffset,y:pageYOffset}}function ue(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const et={...he,"":he.hover};function dt(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function tt(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=dt(t)}}function Le(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const o=t instanceof SVGAElement?t.target.baseVal:t.target,r=!n||!!o||$e(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external")||t.hasAttribute("download");return{url:n,external:r,target:o}}function de(t){let e=null,n=null,o=null,r=null,u=t;for(;u&&u!==document.documentElement;)n===null&&(n=ue(u,"preload-code")),o===null&&(o=ue(u,"preload-data")),e===null&&(e=ue(u,"noscroll")),r===null&&(r=ue(u,"reload")),u=dt(u);return{preload_code:et[n??"off"],preload_data:et[o??"off"],noscroll:e==="off"?!1:e===""?!0:null,reload:r==="off"?!1:r===""?!0:null}}function nt(t){const e=Ve(t);let n=!0;function o(){n=!0,e.update(a=>a)}function r(a){n=!1,e.set(a)}function u(a){let f;return e.subscribe(h=>{(f===void 0||n&&h!==f)&&a(f=h)})}return{notify:o,set:r,subscribe:u}}function jt(){const{set:t,subscribe:e}=Ve(!1);let n;async function o(){clearTimeout(n);const r=await fetch(`${ct}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(r.ok){const a=(await r.json()).version!==ft;return a&&(t(!0),clearTimeout(n)),a}else throw new Error(`Version check failed: ${r.status}`)}return{subscribe:e,check:o}}function $e(t,e){return t.origin!==location.origin||!t.pathname.startsWith(e)}function Dt(t){let e=5381;if(typeof t=="string"){let n=t.length;for(;n;)e=e*33^t.charCodeAt(--n)}else if(ArrayBuffer.isView(t)){const n=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ge=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ae.delete(Ce(t)),ge(t,e));const ae=new Map;function Vt(t,e){const n=Ce(t,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:r,...u}=JSON.parse(o.textContent),a=o.getAttribute("data-ttl");return a&&ae.set(n,{body:r,init:u,ttl:1e3*Number(a)}),Promise.resolve(new Response(r,u))}return ge(t,e)}function Ct(t,e,n){if(ae.size>0){const o=Ce(t,n),r=ae.get(o);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);ae.delete(o)}}return ge(e,n)}function Ce(t,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${Dt(e.body)}"]`),o}const qt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Bt(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Gt(t).map(o=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const a=o.split(/\[(.+?)\](?!\])/);return"/"+a.map((h,d)=>{if(d%2){if(h.startsWith("x+"))return Ae(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return Ae(String.fromCharCode(...h.slice(2).split("-").map(U=>parseInt(U,16))));const g=qt.exec(h);if(!g)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,y,S,T,j]=g;return e.push({name:T,matcher:j,optional:!!y,rest:!!S,chained:S?d===1&&a[0]==="":!1}),S?"(.*?)":y?"([^/]*)?":"([^/]+?)"}return Ae(h)}).join("")}).join("")}/?$`),params:e}}function Ft(t){return!/^\([^)]+\)$/.test(t)}function Gt(t){return t.slice(1).split("/").filter(Ft)}function zt(t,e,n){const o={},r=t.slice(1);let u="";for(let a=0;a<e.length;a+=1){const f=e[a];let h=r[a];if(f.chained&&f.rest&&u&&(h=h?u+"/"+h:u),u="",h===void 0)f.rest&&(o[f.name]="");else{if(f.matcher&&!n[f.matcher](h)){if(f.optional&&f.chained){let d=r.indexOf(void 0,a);if(d===-1){const g=e[a+1];if(g!=null&&g.rest&&g.chained)u=h;else return}for(;d>=a;)r[d]=r[d-1],d-=1;continue}return}o[f.name]=h}}if(!u)return o}function Ae(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Mt(t,e,n,o){const r=new Set(e);return Object.entries(n).map(([f,[h,d,g]])=>{const{pattern:y,params:S}=Bt(f),T={id:f,exec:j=>{const U=y.exec(j);if(U)return zt(U,S,o)},errors:[1,...g||[]].map(j=>t[j]),layouts:[0,...d||[]].map(a),leaf:u(h)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function u(f){const h=f<0;return h&&(f=~f),[h,t[f]]}function a(f){return f===void 0?f:[r.has(f),t[f]]}}function Ht(t){let e,n,o;var r=t[0][0];function u(a){return{props:{data:a[2],form:a[1]}}}return r&&(e=x(r,u(t))),{c(){e&&X(e.$$.fragment),n=B()},l(a){e&&De(e.$$.fragment,a),n=B()},m(a,f){e&&Z(e,a,f),H(a,n,f),o=!0},p(a,f){const h={};if(f&4&&(h.data=a[2]),f&2&&(h.form=a[1]),r!==(r=a[0][0])){if(e){me();const d=e;F(d.$$.fragment,1,0,()=>{Q(d,1)}),_e()}r?(e=x(r,u(a)),X(e.$$.fragment),G(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else r&&e.$set(h)},i(a){o||(e&&G(e.$$.fragment,a),o=!0)},o(a){e&&F(e.$$.fragment,a),o=!1},d(a){a&&z(n),e&&Q(e,a)}}}function Jt(t){let e,n,o;var r=t[0][0];function u(a){return{props:{data:a[2],$$slots:{default:[Kt]},$$scope:{ctx:a}}}}return r&&(e=x(r,u(t))),{c(){e&&X(e.$$.fragment),n=B()},l(a){e&&De(e.$$.fragment,a),n=B()},m(a,f){e&&Z(e,a,f),H(a,n,f),o=!0},p(a,f){const h={};if(f&4&&(h.data=a[2]),f&523&&(h.$$scope={dirty:f,ctx:a}),r!==(r=a[0][0])){if(e){me();const d=e;F(d.$$.fragment,1,0,()=>{Q(d,1)}),_e()}r?(e=x(r,u(a)),X(e.$$.fragment),G(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else r&&e.$set(h)},i(a){o||(e&&G(e.$$.fragment,a),o=!0)},o(a){e&&F(e.$$.fragment,a),o=!1},d(a){a&&z(n),e&&Q(e,a)}}}function Kt(t){let e,n,o;var r=t[0][1];function u(a){return{props:{data:a[3],form:a[1]}}}return r&&(e=x(r,u(t))),{c(){e&&X(e.$$.fragment),n=B()},l(a){e&&De(e.$$.fragment,a),n=B()},m(a,f){e&&Z(e,a,f),H(a,n,f),o=!0},p(a,f){const h={};if(f&8&&(h.data=a[3]),f&2&&(h.form=a[1]),r!==(r=a[0][1])){if(e){me();const d=e;F(d.$$.fragment,1,0,()=>{Q(d,1)}),_e()}r?(e=x(r,u(a)),X(e.$$.fragment),G(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else r&&e.$set(h)},i(a){o||(e&&G(e.$$.fragment,a),o=!0)},o(a){e&&F(e.$$.fragment,a),o=!1},d(a){a&&z(n),e&&Q(e,a)}}}function at(t){let e,n=t[5]&&rt(t);return{c(){e=yt("div"),n&&n.c(),this.h()},l(o){e=bt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=vt(e);n&&n.l(r),r.forEach(z),this.h()},h(){Se(e,"id","svelte-announcer"),Se(e,"aria-live","assertive"),Se(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(o,r){H(o,e,r),n&&n.m(e,null)},p(o,r){o[5]?n?n.p(o,r):(n=rt(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&z(e),n&&n.d()}}}function rt(t){let e;return{c(){e=Et(t[6])},l(n){e=kt(n,t[6])},m(n,o){H(n,e,o)},p(n,o){o&64&&Rt(e,n[6])},d(n){n&&z(e)}}}function Wt(t){let e,n,o,r,u;const a=[Jt,Ht],f=[];function h(g,y){return g[0][1]?0:1}e=h(t),n=f[e]=a[e](t);let d=t[4]&&at(t);return{c(){n.c(),o=_t(),d&&d.c(),r=B()},l(g){n.l(g),o=gt(g),d&&d.l(g),r=B()},m(g,y){f[e].m(g,y),H(g,o,y),d&&d.m(g,y),H(g,r,y),u=!0},p(g,[y]){let S=e;e=h(g),e===S?f[e].p(g,y):(me(),F(f[S],1,1,()=>{f[S]=null}),_e(),n=f[e],n?n.p(g,y):(n=f[e]=a[e](g),n.c()),G(n,1),n.m(o.parentNode,o)),g[4]?d?d.p(g,y):(d=at(g),d.c(),d.m(r.parentNode,r)):d&&(d.d(1),d=null)},i(g){u||(G(n),u=!0)},o(g){F(n),u=!1},d(g){f[e].d(g),g&&z(o),d&&d.d(g),g&&z(r)}}}function Yt(t,e,n){let{stores:o}=e,{page:r}=e,{components:u}=e,{form:a}=e,{data_0:f=null}=e,{data_1:h=null}=e;wt(o.page.notify);let d=!1,g=!1,y=null;return Pe(()=>{const S=o.page.subscribe(()=>{d&&(n(5,g=!0),n(6,y=document.title||"untitled page"))});return n(4,d=!0),S}),t.$$set=S=>{"stores"in S&&n(7,o=S.stores),"page"in S&&n(8,r=S.page),"components"in S&&n(0,u=S.components),"form"in S&&n(1,a=S.form),"data_0"in S&&n(2,f=S.data_0),"data_1"in S&&n(3,h=S.data_1)},t.$$.update=()=>{t.$$.dirty&384&&o.page.set(r)},[u,a,f,h,d,g,y,o,r]}class xt extends ht{constructor(e){super(),mt(this,e,Yt,Wt,lt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Xt="modulepreload",Zt=function(t,e){return new URL(t,e).href},ot={},Y=function(e,n,o){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(u=>{if(u=Zt(u,o),u in ot)return;ot[u]=!0;const a=u.endsWith(".css"),f=a?'[rel="stylesheet"]':"";if(!!o)for(let g=r.length-1;g>=0;g--){const y=r[g];if(y.href===u&&(!a||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":Xt,a||(d.as="script",d.crossOrigin=""),d.href=u,document.head.appendChild(d),a)return new Promise((g,y)=>{d.addEventListener("load",g),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>e())},Qt={},we=[()=>Y(()=>import("./chunks/0-defd7707.js"),["./chunks\\0-defd7707.js","./chunks\\_layout-da46b06b.js","./components\\layout.svelte-f98cc3c8.js","./chunks\\index-355eb357.js"],import.meta.url),()=>Y(()=>import("./chunks/1-4481a157.js"),["./chunks\\1-4481a157.js","./components\\pages\\_error.svelte-8eb3a78c.js","./chunks\\index-355eb357.js","./chunks\\footer-af918e19.js","./assets\\footer-5c683034.css"],import.meta.url),()=>Y(()=>import("./chunks/2-d323fb23.js"),["./chunks\\2-d323fb23.js","./components\\pages\\_page.svelte-24a747e7.js","./chunks\\index-355eb357.js","./chunks\\footer-af918e19.js","./assets\\footer-5c683034.css","./chunks\\nav-f5da114f.js"],import.meta.url),()=>Y(()=>import("./chunks/3-71dcc929.js"),["./chunks\\3-71dcc929.js","./components\\pages\\403\\_page.svelte-54e9f9de.js","./chunks\\index-355eb357.js","./chunks\\footer-af918e19.js","./assets\\footer-5c683034.css"],import.meta.url),()=>Y(()=>import("./chunks/4-478afe5d.js"),["./chunks\\4-478afe5d.js","./components\\pages\\404\\_page.svelte-039faa8d.js","./chunks\\index-355eb357.js","./chunks\\footer-af918e19.js","./assets\\footer-5c683034.css"],import.meta.url),()=>Y(()=>import("./chunks/5-23c98f98.js"),["./chunks\\5-23c98f98.js","./components\\pages\\images\\_page.svelte-13dcd33c.js","./chunks\\index-355eb357.js","./chunks\\footer-af918e19.js","./assets\\footer-5c683034.css","./chunks\\nav-f5da114f.js"],import.meta.url)],en=[],tn={"/":[2],"/403":[3],"/404":[4],"/images":[5]},nn={handleError:({error:t})=>{console.error(t)}};let Ne=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},it=class{constructor(e,n){this.status=e,this.location=n}};function an(t){t.client}const q={url:nt({}),page:nt({}),navigating:Ve(null),updated:jt()};async function rn(t){var e;for(const n in t)if(typeof((e=t[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([o,r])=>[o,await r])));return t}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const on=-1,sn=-2,ln=-3,cn=-4,fn=-5,un=-6;function dn(t){if(typeof t=="number")return o(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,n=Array(e.length);function o(r,u=!1){if(r===on)return;if(r===ln)return NaN;if(r===cn)return 1/0;if(r===fn)return-1/0;if(r===un)return-0;if(u)throw new Error("Invalid input");if(r in n)return n[r];const a=e[r];if(!a||typeof a!="object")n[r]=a;else if(Array.isArray(a))if(typeof a[0]=="string")switch(a[0]){case"Date":n[r]=new Date(a[1]);break;case"Set":const h=new Set;n[r]=h;for(let y=1;y<a.length;y+=1)h.add(o(a[y]));break;case"Map":const d=new Map;n[r]=d;for(let y=1;y<a.length;y+=2)d.set(o(a[y]),o(a[y+1]));break;case"RegExp":n[r]=new RegExp(a[1],a[2]);break;case"Object":n[r]=Object(a[1]);break;case"BigInt":n[r]=BigInt(a[1]);break;case"null":const g=Object.create(null);n[r]=g;for(let y=1;y<a.length;y+=2)g[a[y]]=o(a[y+1]);break}else{const f=new Array(a.length);n[r]=f;for(let h=0;h<a.length;h+=1){const d=a[h];d!==sn&&(f[h]=o(d))}}else{const f={};n[r]=f;for(const h in a){const d=a[h];f[h]=o(d)}}return n[r]}return o(0)}function pn(t){return t.filter(e=>e!=null)}const Ie=Mt(we,en,tn,Qt),Te=we[0],je=we[1];Te();je();let re={};try{re=JSON.parse(sessionStorage[ut])}catch{}function Oe(t){re[t]=pe()}function hn({target:t,base:e}){var Ye;const n=document.documentElement,o=[];let r=null;const u={before_navigate:[],after_navigate:[]};let a={branch:[],error:null,url:null},f=!1,h=!1,d=!0,g=!1,y=!1,S=!1,T=!1,j,U=(Ye=history.state)==null?void 0:Ye[C];U||(U=Date.now(),history.replaceState({...history.state,[C]:U},"",location.href));const ye=re[U];ye&&(history.scrollRestoration="manual",scrollTo(ye.x,ye.y));let M,qe,oe;async function Be(){oe=oe||Promise.resolve(),await oe,oe=null;const i=new URL(location.href),s=le(i,!0);r=null,await Ge(s,i,[])}async function be(i,{noScroll:s=!1,replaceState:c=!1,keepFocus:l=!1,state:m={},invalidateAll:p=!1},_,v){return typeof i=="string"&&(i=new URL(i,Qe(document))),ce({url:i,scroll:s?pe():null,keepfocus:l,redirect_chain:_,details:{state:m,replaceState:c},nav_token:v,accepted:()=>{p&&(T=!0)},blocked:()=>{},type:"goto"})}async function Fe(i){const s=le(i,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);return r={id:s.id,promise:He(s).then(c=>(c.type==="loaded"&&c.state.error&&(r=null),c))},r.promise}async function ie(...i){const c=Ie.filter(l=>i.some(m=>l.exec(m))).map(l=>Promise.all([...l.layouts,l.leaf].map(m=>m==null?void 0:m[1]())));await Promise.all(c)}async function Ge(i,s,c,l,m={},p){var v,b;qe=m;let _=i&&await He(i);if(_||(_=await We(s,{id:null},await ne(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(i==null?void 0:i.url)||s,qe!==m)return!1;if(_.type==="redirect")if(c.length>10||c.includes(s.pathname))_=await se({status:500,error:await ne(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return be(new URL(_.location,s).href,{},[...c,s.pathname],m),!1;else((b=(v=_.props)==null?void 0:v.page)==null?void 0:b.status)>=400&&await q.updated.check()&&await te(s);if(o.length=0,T=!1,g=!0,l&&l.details){const{details:w}=l,k=w.replaceState?0:1;w.state[C]=U+=k,history[w.replaceState?"replaceState":"pushState"](w.state,"",s)}if(r=null,h?(a=_.state,_.props.page&&(_.props.page.url=s),j.$set(_.props)):ze(_),l){const{scroll:w,keepfocus:k}=l;if(k||Ue(),await fe(),d){const I=s.hash&&document.getElementById(s.hash.slice(1));w?scrollTo(w.x,w.y):I?I.scrollIntoView():scrollTo(0,0)}}else await fe();d=!0,_.props.page&&(M=_.props.page),p&&p(),g=!1}function ze(i){var l;a=i.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),M=i.props.page,j=new xt({target:t,props:{...i.props,stores:q},hydrate:!0});const c={from:null,to:{params:a.params,route:{id:((l=a.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(m=>m(c)),h=!0}async function ee({url:i,params:s,branch:c,status:l,error:m,route:p,form:_}){let v="never";for(const L of c)(L==null?void 0:L.slash)!==void 0&&(v=L.slash);i.pathname=St(i.pathname,v),i.search=i.search;const b={type:"loaded",state:{url:i,params:s,branch:c,error:m,route:p},props:{components:pn(c).map(L=>L.node.component)}};_!==void 0&&(b.props.form=_);let w={},k=!M,I=0;for(let L=0;L<Math.max(c.length,a.branch.length);L+=1){const E=c[L],P=a.branch[L];(E==null?void 0:E.data)!==(P==null?void 0:P.data)&&(k=!0),E&&(w={...w,...E.data},k&&(b.props[`data_${I}`]=w),I+=1)}return(!a.url||i.href!==a.url.href||a.error!==m||_!==void 0&&_!==M.form||k)&&(b.props.page={error:m,params:s,route:{id:(p==null?void 0:p.id)??null},status:l,url:new URL(i),form:_??null,data:k?w:M.data}),b}async function ve({loader:i,parent:s,url:c,params:l,route:m,server_data_node:p}){var w,k,I;let _=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await i();if((w=b.universal)!=null&&w.load){let D=function(...E){for(const P of E){const{href:N}=new URL(P,c);v.dependencies.add(N)}};const L={route:{get id(){return v.route=!0,m.id}},params:new Proxy(l,{get:(E,P)=>(v.params.add(P),E[P])}),data:(p==null?void 0:p.data)??null,url:Ot(c,()=>{v.url=!0}),async fetch(E,P){let N;E instanceof Request?(N=E.url,P={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...P}):N=E;const R=new URL(N,c).href;return D(R),h?Ct(N,R,P):Vt(N,P)},setHeaders:()=>{},depends:D,parent(){return v.parent=!0,s()}};_=await b.universal.load.call(null,L)??null,_=_?await rn(_):null}return{node:b,loader:i,server:p,universal:(k=b.universal)!=null&&k.load?{type:"data",data:_,uses:v}:null,data:_??(p==null?void 0:p.data)??null,slash:((I=b.universal)==null?void 0:I.trailingSlash)??(p==null?void 0:p.slash)}}function Me(i,s,c,l,m){if(T)return!0;if(!l)return!1;if(l.parent&&i||l.route&&s||l.url&&c)return!0;for(const p of l.params)if(m[p]!==a.params[p])return!0;for(const p of l.dependencies)if(o.some(_=>_(new URL(p))))return!0;return!1}function Ee(i,s){return(i==null?void 0:i.type)==="data"?{type:"data",data:i.data,uses:{dependencies:new Set(i.uses.dependencies??[]),params:new Set(i.uses.params??[]),parent:!!i.uses.parent,route:!!i.uses.route,url:!!i.uses.url},slash:i.slash}:(i==null?void 0:i.type)==="skip"?s??null:null}async function He({id:i,invalidating:s,url:c,params:l,route:m}){if((r==null?void 0:r.id)===i)return r.promise;const{errors:p,layouts:_,leaf:v}=m,b=[..._,v];p.forEach(R=>R==null?void 0:R().catch(()=>{})),b.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let w=null;const k=a.url?i!==a.url.pathname+a.url.search:!1,I=a.route?m.id!==a.route.id:!1,D=b.reduce((R,O,$)=>{var K;const A=a.branch[$],J=!!(O!=null&&O[0])&&((A==null?void 0:A.loader)!==O[1]||Me(R.some(Boolean),I,k,(K=A.server)==null?void 0:K.uses,l));return R.push(J),R},[]);if(D.some(Boolean)){try{w=await st(c,D)}catch(R){return se({status:500,error:await ne(R,{url:c,params:l,route:{id:m.id}}),url:c,route:m})}if(w.type==="redirect")return w}const L=w==null?void 0:w.nodes;let E=!1;const P=b.map(async(R,O)=>{var K;if(!R)return;const $=a.branch[O],A=L==null?void 0:L[O];if((!A||A.type==="skip")&&R[1]===($==null?void 0:$.loader)&&!Me(E,I,k,(K=$.universal)==null?void 0:K.uses,l))return $;if(E=!0,(A==null?void 0:A.type)==="error")throw A;return ve({loader:R[1],url:c,params:l,route:m,parent:async()=>{var Xe;const xe={};for(let ke=0;ke<O;ke+=1)Object.assign(xe,(Xe=await P[ke])==null?void 0:Xe.data);return xe},server_data_node:Ee(A===void 0&&R[0]?{type:"skip"}:A??null,$==null?void 0:$.server)})});for(const R of P)R.catch(()=>{});const N=[];for(let R=0;R<b.length;R+=1)if(b[R])try{N.push(await P[R])}catch(O){if(O instanceof it)return{type:"redirect",location:O.location};let $=500,A;if(L!=null&&L.includes(O))$=O.status??$,A=O.error;else if(O instanceof Ne)$=O.status,A=O.body;else{if(await q.updated.check())return await te(c);A=await ne(O,{params:l,url:c,route:{id:m.id}})}const J=await Je(R,N,p);return J?await ee({url:c,params:l,branch:N.slice(0,J.idx).concat(J.node),status:$,error:A,route:m}):await We(c,{id:m.id},A,$)}else N.push(void 0);return await ee({url:c,params:l,branch:N,status:200,error:null,route:m,form:s?void 0:null})}async function Je(i,s,c){for(;i--;)if(c[i]){let l=i;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await c[i](),loader:c[i],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:i,error:s,url:c,route:l}){const m={},p=await Te();let _=null;if(p.has_server_load)try{const w=await st(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;_=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await te(c)}const v=await ve({loader:Te,url:c,params:m,route:l,parent:()=>Promise.resolve({}),server_data_node:Ee(_)}),b={node:await je(),loader:je,universal:null,server:null,data:null};return await ee({url:c,params:m,branch:[v,b],status:i,error:s,route:null})}function le(i,s){if($e(i,e))return;const c=Lt(i.pathname.slice(e.length)||"/");for(const l of Ie){const m=l.exec(c);if(m)return{id:i.pathname+i.search,invalidating:s,route:l,params:At(m),url:i}}}function Ke({url:i,type:s,intent:c,delta:l}){var v,b;let m=!1;const p={from:{params:a.params,route:{id:((v=a.route)==null?void 0:v.id)??null},url:a.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((b=c==null?void 0:c.route)==null?void 0:b.id)??null},url:i},willUnload:!c,type:s};l!==void 0&&(p.delta=l);const _={...p,cancel:()=>{m=!0}};return y||u.before_navigate.forEach(w=>w(_)),m?null:p}async function ce({url:i,scroll:s,keepfocus:c,redirect_chain:l,details:m,type:p,delta:_,nav_token:v,accepted:b,blocked:w}){const k=le(i,!1),I=Ke({url:i,type:p,delta:_,intent:k});if(!I){w();return}Oe(U),b(),y=!0,h&&q.navigating.set(I),await Ge(k,i,l,{scroll:s,keepfocus:c,details:m},v,()=>{y=!1,u.after_navigate.forEach(D=>D(I)),q.navigating.set(null)})}async function We(i,s,c,l){return i.origin===location.origin&&i.pathname===location.pathname&&!f?await se({status:l,error:c,url:i,route:s}):await te(i)}function te(i){return location.href=i.href,new Promise(()=>{})}function pt(){let i;n.addEventListener("mousemove",p=>{const _=p.target;clearTimeout(i),i=setTimeout(()=>{l(_,2)},20)});function s(p){l(p.composedPath()[0],1)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s,{passive:!0});const c=new IntersectionObserver(p=>{for(const _ of p)_.isIntersecting&&(ie(new URL(_.target.href).pathname),c.unobserve(_.target))},{threshold:0});function l(p,_){const v=tt(p,n);if(!v)return;const{url:b,external:w}=Le(v,e);if(w)return;const k=de(v);k.reload||(_<=k.preload_data?Fe(b):_<=k.preload_code&&ie(b.pathname))}function m(){c.disconnect();for(const p of n.querySelectorAll("a")){const{url:_,external:v}=Le(p,e);if(v)continue;const b=de(p);b.reload||(b.preload_code===he.viewport&&c.observe(p),b.preload_code===he.eager&&ie(_.pathname))}}u.after_navigate.push(m),m()}return{after_navigate:i=>{Pe(()=>(u.after_navigate.push(i),()=>{const s=u.after_navigate.indexOf(i);u.after_navigate.splice(s,1)}))},before_navigate:i=>{Pe(()=>(u.before_navigate.push(i),()=>{const s=u.before_navigate.indexOf(i);u.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(g||!h)&&(d=!1)},goto:(i,s={})=>be(i,s,[]),invalidate:i=>{if(typeof i=="function")o.push(i);else{const{href:s}=new URL(i,location.href);o.push(c=>c.href===s)}return Be()},invalidateAll:()=>(T=!0,Be()),preload_data:async i=>{const s=new URL(i,Qe(document));await Fe(s)},preload_code:ie,apply_action:async i=>{if(i.type==="error"){const s=new URL(location.href),{branch:c,route:l}=a;if(!l)return;const m=await Je(a.branch.length,c,l.errors);if(m){const p=await ee({url:s,params:a.params,branch:c.slice(0,m.idx).concat(m.node),status:i.status??500,error:i.error,route:l});a=p.state,j.$set(p.props),fe().then(Ue)}}else if(i.type==="redirect")be(i.location,{invalidateAll:!0},[]);else{const s={form:i.data,page:{...M,form:i.data,status:i.status}};j.$set(s),i.type==="success"&&fe().then(Ue)}},_start_router:()=>{var i;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let c=!1;if(!y){const m={from:{params:a.params,route:{id:((l=a.route)==null?void 0:l.id)??null},url:a.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};u.before_navigate.forEach(p=>p(m))}c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Oe(U);try{sessionStorage[ut]=JSON.stringify(re)}catch{}}}),(i=navigator.connection)!=null&&i.saveData||pt(),n.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const c=tt(s.composedPath()[0],n);if(!c)return;const{url:l,external:m,target:p}=Le(c,e);if(!l)return;if(p==="_parent"||p==="_top"){if(window.parent!==window)return}else if(p&&p!=="_self")return;const _=de(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(m||_.reload){Ke({url:l,type:"link"})||s.preventDefault(),y=!0;return}const[b,w]=l.href.split("#");if(w!==void 0&&b===location.href.split("#")[0]){S=!0,Oe(U),a.url=l,q.page.set({...M,url:l}),q.page.notify();return}ce({url:l,scroll:_.noscroll?pe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),n.addEventListener("submit",s=>{if(s.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const p=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if($e(p,e))return;const _=s.target,{noscroll:v,reload:b}=de(_);if(b)return;s.preventDefault(),s.stopPropagation();const w=new FormData(_),k=l==null?void 0:l.getAttribute("name");k&&w.append(k,(l==null?void 0:l.getAttribute("value"))??""),p.search=new URLSearchParams(w).toString(),ce({url:p,scroll:v?pe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",s=>{var c;if((c=s.state)!=null&&c[C]){if(s.state[C]===U)return;const l=s.state[C]-U;ce({url:new URL(location.href),scroll:re[s.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=s.state[C]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[C]:++U},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&q.navigating.set(null)})},_hydrate:async({status:i=200,error:s,node_ids:c,params:l,route:m,data:p,form:_})=>{f=!0;const v=new URL(location.href);({params:l={},route:m={id:null}}=le(v,!1)||{});let b;try{const w=c.map(async(k,I)=>{const D=p[I];return ve({loader:we[k],url:v,params:l,route:m,parent:async()=>{const L={};for(let E=0;E<I;E+=1)Object.assign(L,(await w[E]).data);return L},server_data_node:Ee(D)})});b=await ee({url:v,params:l,branch:await Promise.all(w),status:i,error:s,form:_,route:Ie.find(({id:k})=>k===m.id)??null})}catch(w){if(w instanceof it){await te(new URL(w.location,location.href));return}b=await se({status:w instanceof Ne?w.status:500,error:await ne(w,{url:v,params:l,route:m}),url:v,route:m})}ze(b)}}}async function st(t,e){var u;const n=new URL(t);n.pathname=$t(t.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(a=>a?"1":"").join("_"));const o=await ge(n.href),r=await o.json();if(!o.ok)throw new Error(r);return(u=r.nodes)==null||u.forEach(a=>{(a==null?void 0:a.type)==="data"&&(a.data=dn(a.data),a.uses={dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url})}),r}function ne(t,e){return t instanceof Ne?t.body:nn.handleError({error:t,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ue(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function wn({env:t,hydrate:e,paths:n,target:o,version:r}){Nt(n),Tt(r);const u=hn({target:o,base:n.base});an({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{wn as start};
