(function(e){function t(t){for(var o,r,a=t[0],i=t[1],s=t[2],l=0,d=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);b&&b(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,r=1;r<n.length;r++){var a=n[r];0!==c[a]&&(o=!1)}o&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c={app:0},u=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"695775bd","chunk-0297b78c":"383eea5e","chunk-2be642e6":"43441a94","chunk-d2680a66":"244b2ebe"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1,"chunk-0297b78c":1,"chunk-2be642e6":1,"chunk-d2680a66":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"88888ec7","chunk-0297b78c":"443d5482","chunk-2be642e6":"1da1a363","chunk-d2680a66":"06c55626"}[e]+".css",c=i.p+o,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var s=u[a],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===c))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){s=d[a],l=s.getAttribute("data-href");if(l===o||l===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var o=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[e],b.parentNode.removeChild(b),n(u)},b.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var u=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=a(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}c[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var b=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1c1b":function(e,t,n){},"28b4":function(e,t,n){"use strict";n("2b94")},"2b94":function(e,t,n){},4327:function(e,t,n){"use strict";n("6207")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");n("b107");function r(e,t,n,r,c,u){var a=Object(o["y"])("Navigation"),i=Object(o["y"])("router-view"),s=Object(o["y"])("Footer");return Object(o["r"])(),Object(o["e"])(o["a"],null,[Object(o["h"])(a),Object(o["f"])("main",null,[Object(o["h"])(i)]),Object(o["h"])(s)],64)}var c={class:"nav"},u={class:"nav__inner"},a={class:"d-none d-md-block nav__inner--left"},i=Object(o["g"])("[Stugor Logo]"),s={class:"nav__inner--right"},l=Object(o["g"])("Info"),d=Object(o["g"])("Stugor"),b=Object(o["g"])("Admin");function f(e,t,n,r,f,p){var h=Object(o["y"])("router-link");return Object(o["r"])(),Object(o["e"])("nav",c,[Object(o["f"])("div",u,[Object(o["f"])("div",a,[Object(o["h"])(h,{to:"/"},{default:Object(o["E"])((function(){return[i]})),_:1})]),Object(o["f"])("div",s,[Object(o["h"])(h,{to:"/about"},{default:Object(o["E"])((function(){return[l]})),_:1}),Object(o["h"])(h,{to:"/user"},{default:Object(o["E"])((function(){return[d]})),_:1}),Object(o["h"])(h,{to:"/admin"},{default:Object(o["E"])((function(){return[b]})),_:1})])])])}var p={components:{},props:{},setup:function(e){return console.log(e),{}}},h=(n("8174"),n("6b0d")),m=n.n(h);const v=m()(p,[["render",f]]);var g=v,O=function(e){return Object(o["u"])("data-v-2a202c79"),e=e(),Object(o["s"])(),e},j=O((function(){return Object(o["f"])("div",{class:"container"},[Object(o["f"])("div",{class:"row"},[Object(o["f"])("div",{class:"col"},[Object(o["f"])("p",null,"Footer")])])],-1)})),k=[j];function y(e,t,n,r,c,u){return Object(o["r"])(),Object(o["e"])("footer",null,k)}var _={components:{},props:{},setup:function(){return{}}};n("97bb");const w=m()(_,[["render",y],["__scopeId","data-v-2a202c79"]]);var S=w,B={components:{Navigation:g,Footer:S},props:{},setup:function(e){return console.log(e),{}}};n("4327");const E=m()(B,[["render",r]]);var x=E,P=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),A=function(e){return Object(o["u"])("data-v-23ff3af8"),e=e(),Object(o["s"])(),e},T={class:"home page-content"},C={class:"container"},L=A((function(){return Object(o["f"])("div",{class:"row home__start"},[Object(o["f"])("div",{class:"col-12 col-md-4 col-lg-6"},[Object(o["f"])("h1",{class:"home__start--heading"},"Stugor")])],-1)})),N={class:"row home__booking"},q={class:"col"},H=Object(o["g"])(" Boka ");function F(e,t,n,r,c,u){var a=Object(o["y"])("router-link");return Object(o["r"])(),Object(o["e"])("div",T,[Object(o["f"])("div",C,[L,Object(o["f"])("div",N,[Object(o["f"])("div",q,[Object(o["h"])(a,{to:"/user",class:"btn btn-success home__booking--btn"},{default:Object(o["E"])((function(){return[H]})),_:1})])])])])}var I={components:{},props:{},setup:function(){return{}}};n("28b4");const M=m()(I,[["render",F],["__scopeId","data-v-23ff3af8"]]);var D=M,U=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/user",name:"User",component:function(){return n.e("chunk-d2680a66").then(n.bind(null,"1511"))}},{path:"/admin",name:"Admin",component:function(){return n.e("chunk-0297b78c").then(n.bind(null,"3530"))}},{path:"/house/:id",name:"House",component:function(){return n.e("chunk-2be642e6").then(n.bind(null,"8b30"))}}],J=Object(P["a"])({history:Object(P["b"])(),routes:U,scrollBehavior:function(e,t,n){return n||(e.hash?{el:e.hash}:void window.scrollTo({top:0,left:0,behavior:"instant"}))}}),K=J,z=n("5502"),G=(n("a434"),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),Q={state:function(){return{houses:[{id:0,name:"Stugan i berget",description:G},{id:1,name:"Stugan i snön",description:G},{id:2,name:"Stugan på landet",description:G},{id:3,name:"Stugan vid sjön",description:G},{id:4,name:"Stugan som är röd",description:G},{id:5,name:"Stugan som är gammal",description:G}],housesBooked:[1,4]}},actions:{},mutations:{bookHouse:function(e,t){e.housesBooked.push(t),console.log("logging state housesBooked",e.housesBooked)},removeHouseBooking:function(e,t){console.log("data",t);var n=e.housesBooked.indexOf(t);e.housesBooked.splice(n,1),console.log(e.housesBooked)}},getters:{houses:function(e){return e.houses},bookedHouses:function(e){return e.housesBooked}}},R=Object(z["a"])({state:{},mutations:{},actions:{},modules:{houses:Q}});Object(o["c"])(x).use(R).use(K).mount("#app")},6207:function(e,t,n){},8174:function(e,t,n){"use strict";n("953b")},"953b":function(e,t,n){},"97bb":function(e,t,n){"use strict";n("1c1b")},b107:function(e,t,n){}});
//# sourceMappingURL=app.9dcbe5b4.js.map