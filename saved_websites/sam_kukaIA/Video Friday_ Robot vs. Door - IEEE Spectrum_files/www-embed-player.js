(function(){'use strict';var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return ja(a,a)}
function ja(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function v(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ka(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ma});
var oa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},pa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=oa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),qa;
if(typeof Object.setPrototypeOf=="function")qa=Object.setPrototypeOf;else{var ra;a:{var sa={a:!0},ta={};try{ta.__proto__=sa;ra=ta.a;break a}catch(a){}ra=!1}qa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ua=qa;
function z(a,b){a.prototype=oa(b.prototype);a.prototype.constructor=a;if(ua)ua(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.za=b.prototype}
function wa(){this.B=!1;this.u=null;this.i=void 0;this.h=1;this.D=this.o=0;this.R=this.j=null}
function xa(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
wa.prototype.H=function(a){this.i=a};
function ya(a,b){a.j={exception:b,ed:!0};a.h=a.o||a.D}
wa.prototype.return=function(a){this.j={return:a};this.h=this.D};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.F=function(a){this.h=a};
function za(a,b,c){a.o=b;c!=void 0&&(a.D=c)}
function Aa(a){a.o=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){var b=a.R.splice(0)[0];(b=a.j=a.j||b)?b.ed?a.h=a.o||a.D:b.F!=void 0&&a.D<b.F?(a.h=b.F,a.j=null):a.h=a.D:a.h=0}
function Ca(a){this.h=new wa;this.i=a}
function Da(a,b){xa(a.h);var c=a.h.u;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.B=!1,e;var f=e.value}catch(g){return a.h.u=null,ya(a.h,g),Fa(a)}a.h.u=null;d.call(a.h,f);return Fa(a)}
function Fa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.B=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.B=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.ed)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){xa(a.h);a.h.u?b=Ea(a,a.h.u.next,b,a.h.H):(a.h.H(b),b=Fa(a));return b};
this.throw=function(b){xa(a.h);a.h.u?b=Ea(a,a.h.u["throw"],b,a.h.H):(ya(a.h,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ha(new Ga(new Ca(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return pa});
u("Reflect.setPrototypeOf",function(a){return a?a:ua?function(b,c){try{return ua(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.B=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.D()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.D=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Z),reject:g(this.D)}};
b.prototype.Z=function(g){if(g===this)this.D(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.la(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.Y(g):this.u(g)}};
b.prototype.Y=function(g){var h=void 0;try{h=g.then}catch(k){this.D(k);return}typeof h=="function"?this.Aa(h,g):this.u(g)};
b.prototype.D=function(g){this.H(2,g)};
b.prototype.u=function(g){this.H(1,g)};
b.prototype.H=function(g,h){if(this.h!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;this.h===2&&this.ga();this.R()};
b.prototype.ga=function(){var g=this;e(function(){if(g.U()){var h=da.console;typeof h!=="undefined"&&h.error(g.j)}},1)};
b.prototype.U=function(){if(this.B)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.R=function(){if(this.i!=null){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.la=function(g){var h=this.o();g.Wb(h.resolve,h.reject)};
b.prototype.Aa=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return typeof r=="function"?function(w){try{l(r(w))}catch(x){m(x)}}:t}
var l,m,n=new b(function(r,t){l=r;m=t});
this.Wb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Wb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.i==null?f.i(k):this.i.push(k);this.B=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),m=l.next();!m.done;m=l.next())d(m.value).Wb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(w){return function(x){r[w]=x;t--;t==0&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Wb(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||ua});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("globalThis",function(a){return a||da});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!la(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return fa(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&la(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
function Ja(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ja(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
u("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
u("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});
u("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ka=Ka||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function La(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Oa(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Qa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(Math.random()*1E9>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Wa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ua:Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ya(){return Date.now()}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.za=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
Za($a,Error);$a.prototype.name="CustomError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var bb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var cb=globalThis.trustedTypes,db;function eb(){var a=null;if(!cb)return a;try{var b=function(c){return c};
a=cb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function fb(){db===void 0&&(db=eb());return db}
;function gb(a){this.h=a}
gb.prototype.toString=function(){return this.h+""};
function hb(a){var b=fb();return new gb(b?b.createScriptURL(a):a)}
function ib(a){if(a instanceof gb)return a.h;throw Error("");}
;var jb=ha([""]),kb=ja(["\x00"],["\\0"]),lb=ja(["\n"],["\\n"]),mb=ja(["\x00"],["\\u0000"]);function nb(a){return a.toString().indexOf("`")===-1}
nb(function(a){return a(jb)})||nb(function(a){return a(kb)})||nb(function(a){return a(lb)})||nb(function(a){return a(mb)});function ob(a){this.h=a}
ob.prototype.toString=function(){return this.h};
var pb=new ob("about:invalid#zClosurez");function qb(a){this.ue=a}
function rb(a){return new qb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var sb=[rb("data"),rb("http"),rb("https"),rb("mailto"),rb("ftp"),new qb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],tb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function ub(a){if(a instanceof ob)if(a instanceof ob)a=a.h;else throw Error("");else a=tb.test(a)?a:void 0;return a}
;function wb(a,b){b=ub(b);b!==void 0&&(a.href=b)}
;function xb(){this.h=yb[0].toLowerCase()}
xb.prototype.toString=function(){return this.h};function zb(a){this.h=a}
zb.prototype.toString=function(){return this.h+""};function Ab(a){var b="true".toString(),c=[new xb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof xb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Bb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;var Cb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Db(a,b){if(b instanceof gb)a.href=ib(b).toString(),a.rel="stylesheet";else{if(Cb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=ub(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;function Eb(a){a=a===void 0?document:a;var b,c;a=(c=(b="document"in a?a.document:a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Fb(a){this.h=a}
Fb.prototype.toString=function(){return this.h+""};function Gb(a){var b=Eb(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function Hb(a,b){if(b instanceof Fb)b=b.h;else throw Error("");a.textContent=b;Gb(a)}
function Ib(a,b){a.src=ib(b);Gb(a)}
;var Jb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Kb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Lb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Mb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Nb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Kb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ob(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Pb(a,b){b=Jb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Qb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Rb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Sb(a){var b=E("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Tb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ub[c])c=Ub[c];else{c=String(c);if(!Ub[c]){var f=/function\s+([^\(]+)/m.exec(c);Ub[c]=f?f[1]:"[Anonymous]"}c=Ub[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Tb(a,b){b||(b={});b[Vb(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[Vb(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Tb(d,b));a=a.errors;if(Array.isArray(a)){d=1;for(var e=0;e<a.length&&!(d>4);e++)b[Vb(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Tb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Vb(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Ub={};function Wb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Xb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yb(a){return a?decodeURI(a):a}
function Zb(a,b){return b.match(Xb)[a]||null}
function $b(a){return Yb(Zb(3,a))}
function ac(a){var b=a.match(Xb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function bc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function cc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)cc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function dc(a){var b=[],c;for(c in a)cc(c,a[c],b);return b.join("&")}
function ec(a,b){b=dc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function fc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var hc=/#|$/,ic=/[?&]($|#)/;function jc(a,b){for(var c=a.search(hc),d=0,e,f=[];(e=fc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(ic,"$1")}
;function kc(a){var b=b===void 0?Number("33"):b;for(var c=[],d=0;d<lc(a,mc,1).length;d++){var e=lc(a,mc,1)[d];nc(e,2)<=b&&c.push(Number(nc(e,1)))}return c}
function oc(a){var b=b===void 0?Number("33"):b;for(var c=[],d=0;d<lc(a,mc,1).length;d++){var e=lc(a,mc,1)[d];nc(e,2)>b&&c.push(Number(nc(e,1)))}return c}
;function pc(a){return{fieldType:2,fieldName:a}}
function F(a){return{fieldType:3,fieldName:a}}
;function qc(a){this.h=a;a.Na("/client_streamz/bg/fic",F("ke"))}
function rc(a){this.h=a;a.Na("/client_streamz/bg/fiec",F("ke"),pc("ec"))}
function sc(a){this.h=a;a.ib("/client_streamz/bg/fil",F("ke"))}
sc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function tc(a){this.h=a;a.Na("/client_streamz/bg/fcc",pc("ph"),F("ke"))}
function uc(a){this.h=a;a.ib("/client_streamz/bg/fcd",pc("ph"),F("ke"))}
uc.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function vc(a){this.h=a;a.Na("/client_streamz/bg/fsc",F("ke"))}
function wc(a){this.h=a;a.ib("/client_streamz/bg/fsl",F("ke"))}
wc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};
function xc(a){this.h=a;a.ib("/client_streamz/bg/frs",F("ke"))}
xc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function yc(a){this.h=a;a.ib("/client_streamz/bg/wrl",F("mn"),pc("ac"),pc("sc"),F("rk"),F("mk"))}
yc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function zc(a){this.h=a;a.ib("/client_streamz/bg/el",F("en"),F("rk"),F("mk"))}
zc.prototype.record=function(a,b,c,d){this.h.record("/client_streamz/bg/el",a,b,c,d)};
function Ac(a){this.h=a;a.Na("/client_streamz/bg/cec",pc("ec"),F("rk"),F("mk"))}
function Bc(a){a.Na("/client_streamz/bg/po/csc",pc("cs"),F("rk"),F("mk"))}
function Cc(a){a.Na("/client_streamz/bg/po/ctav",F("av"),F("rk"),F("mk"))}
function Dc(a){a.Na("/client_streamz/bg/po/cwsc",F("su"),F("rk"),F("mk"))}
;function Ec(a){C.setTimeout(function(){throw a;},0)}
;var Fc=La(610401301,!1),Gc=La(653718497,La(1,!0));function Hc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Ic,Jc=C.navigator;Ic=Jc?Jc.userAgentData||null:null;function Kc(a){return Fc?Ic?Ic.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function G(a){return Hc().indexOf(a)!=-1}
;function Lc(){return Fc?!!Ic&&Ic.brands.length>0:!1}
function Mc(){return Lc()?!1:G("Opera")}
function Nc(){return G("Firefox")||G("FxiOS")}
function Oc(){return Lc()?Kc("Chromium"):(G("Chrome")||G("CriOS"))&&!(Lc()?0:G("Edge"))||G("Silk")}
;function Pc(){return Fc?!!Ic&&!!Ic.platform:!1}
function Qc(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;var Rc=Mc(),Sc=Lc()?!1:G("Trident")||G("MSIE"),Tc=G("Edge"),Uc=G("Gecko")&&!(Hc().toLowerCase().indexOf("webkit")!=-1&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),Vc=Hc().toLowerCase().indexOf("webkit")!=-1&&!G("Edge");Vc&&G("Mobile");Pc()||G("Macintosh");Pc()||G("Windows");(Pc()?Ic.platform==="Linux":G("Linux"))||Pc()||G("CrOS");var Wc=Pc()?Ic.platform==="Android":G("Android");Qc();G("iPad");G("iPod");Qc()||G("iPad")||G("iPod");Hc().toLowerCase().indexOf("kaios");Nc();var Xc=Qc()||G("iPod"),Yc=G("iPad");!G("Android")||Oc()||Nc()||Mc()||G("Silk");Oc();var Zc=G("Safari")&&!(Oc()||(Lc()?0:G("Coast"))||Mc()||(Lc()?0:G("Edge"))||(Lc()?Kc("Microsoft Edge"):G("Edg/"))||(Lc()?Kc("Opera"):G("OPR"))||Nc()||G("Silk")||G("Android"))&&!(Qc()||G("iPad")||G("iPod"));var $c={},ad=null;function bd(a,b){Pa(a);b===void 0&&(b=0);cd();b=$c[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function dd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;ed(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function ed(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=ad[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
cd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function cd(){if(!ad){ad={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));$c[c]=d;for(var e=0;e<d.length;e++){var f=d[e];ad[f]===void 0&&(ad[f]=e)}}}}
;var fd=typeof Uint8Array!=="undefined",gd=!Sc&&typeof btoa==="function";function hd(a){if(!gd)return bd(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var id=/[-_.]/g,jd={"-":"+",_:"/",".":"="};function kd(a){return jd[a]||""}
function ld(a){return fd&&a!=null&&a instanceof Uint8Array}
var md={};function nd(a,b){od(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
nd.prototype.sizeBytes=function(){od(md);var a=this.h;if(a!=null&&!ld(a))if(typeof a==="string")if(gd){id.test(a)&&(a=a.replace(id,kd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=dd(a);else Oa(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var pd;function od(a){if(a!==md)throw Error("illegal external caller");}
;var qd;function rd(){var a=Error();Rb(a,"incident");Ec(a)}
function sd(a){a=Error(a);Rb(a,"warning");return a}
;function td(){return typeof BigInt==="function"}
;function ud(a){return Array.prototype.slice.call(a)}
;var vd=typeof Symbol==="function"&&typeof Symbol()==="symbol";function wd(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var xd=wd(),yd=wd("2ex"),zd=wd("1oa");Math.max.apply(Math,ka(Object.values({bh:1,Zg:2,Yg:4,fh:8,eh:16,dh:32,Gf:64,hh:128,Xg:256,Wg:512,ah:1024,Mf:2048,gh:4096,Nf:8192,Hf:16384})));var Ad=vd?function(a,b){a[xd]|=b}:function(a,b){a.Qa!==void 0?a.Qa|=b:Object.defineProperties(a,{Qa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},Bd=vd?function(a){return a[xd]|0}:function(a){return a.Qa|0},Cd=vd?function(a){return a[xd]}:function(a){return a.Qa},Dd=vd?function(a,b){a[xd]=b}:function(a,b){a.Qa!==void 0?a.Qa=b:Object.defineProperties(a,{Qa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Ed(a,b){Dd(b,(a|0)&-30975)}
function Fd(a,b){Dd(b,(a|34)&-30941)}
;var Gd={},Hd={};function Id(a){return!(!a||typeof a!=="object"||a.h!==Hd)}
function Jd(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Kd(a){return!Array.isArray(a)||a.length?!1:Bd(a)&1?!0:!1}
var Ld,Md=[];Dd(Md,55);Ld=Object.freeze(Md);function Nd(a){if(a&2)throw Error();}
var Od=Object.freeze({}),Pd=Object.freeze({}),Qd=Object.freeze({});function Rd(a){a.th=!0;return a}
;var Sd=Rd(function(a){return typeof a==="number"}),Td=Rd(function(a){return typeof a==="string"}),Ud=Rd(function(a){return typeof a==="boolean"});
function Vd(){var a=Wd;return Rd(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
;var Xd=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function Yd(a){var b=a;if(Td(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Sd(b)&&!Number.isSafeInteger(b))throw Error(String(b));return Xd?BigInt(a):a=Ud(a)?a?"1":"0":Td(a)?a.trim()||"0":String(a)}
var de=Rd(function(a){return Xd?a>=Zd&&a<=$d:a[0]==="-"?ae(a,be):ae(a,ce)}),be=Number.MIN_SAFE_INTEGER.toString(),Zd=Xd?BigInt(Number.MIN_SAFE_INTEGER):void 0,ce=Number.MAX_SAFE_INTEGER.toString(),$d=Xd?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function ae(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var ee=0,fe=0;function ge(a){var b=a>>>0;ee=b;fe=(a-b)/4294967296>>>0}
function he(a){if(a<0){ge(0-a);var b=v(ie(ee,fe));a=b.next().value;b=b.next().value;ee=a>>>0;fe=b>>>0}else ge(a)}
function je(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else td()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+ke(c)+ke(a));return c}
function ke(a){a=String(a);return"0000000".slice(a.length)+a}
function le(){var a=ee,b=fe;b&2147483648?td()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=v(ie(a,b)),a=b.next().value,b=b.next().value,a="-"+je(a,b)):a=je(a,b);return a}
function ie(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function me(a){return a.displayName||a.name||"unknown type name"}
function ne(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Oa(a)+": "+a);return a}
var oe=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function pe(a){var b=typeof a;switch(b){case "bigint":return!0;case "number":return Number.isFinite(a)}return b!=="string"?!1:oe.test(a)}
function qe(a){if(typeof a!=="number")throw sd("int32");if(!Number.isFinite(a))throw sd("int32");return a|0}
function re(a){return a==null?a:qe(a)}
function se(a){if(a==null)return a;if(typeof a==="string"){if(!a)return;a=+a}if(typeof a==="number")return Number.isFinite(a)?a|0:void 0}
function te(a){var b=0;b=b===void 0?0:b;if(!pe(a))throw sd("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return ue(a);case "bigint":return String(BigInt.asIntN(64,a));default:return ve(a)}case 8192:switch(c){case "string":return b=Math.trunc(Number(a)),Number.isSafeInteger(b)?a=Yd(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=td()?Yd(BigInt.asIntN(64,BigInt(a))):Yd(we(a))),a;case "bigint":return Yd(BigInt.asIntN(64,a));default:return Number.isSafeInteger(a)?Yd(xe(a)):Yd(ve(a))}case 0:switch(c){case "string":return ue(a);
case "bigint":return Yd(BigInt.asIntN(64,a));default:return xe(a)}default:return Bb(b,"Unknown format requested type for int64")}}
function ye(a){return a==null?a:te(a)}
function ze(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function we(a){a.indexOf(".");if(ze(a))return a;if(a.length<16)he(Number(a));else if(td())a=BigInt(a),ee=Number(a&BigInt(4294967295))>>>0,fe=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");fe=ee=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),fe*=1E6,ee=ee*1E6+d,ee>=4294967296&&(fe+=Math.trunc(ee/4294967296),fe>>>=0,ee>>>=0);b&&(b=v(ie(ee,fe)),a=b.next().value,b=b.next().value,ee=a,fe=b)}return le()}
function xe(a){pe(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){he(a);var b=ee,c=fe;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}
function ve(a){pe(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);ze(b)?a=b:(he(a),a=le())}return a}
function ue(a){pe(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return we(a)}
function Ae(a){if(a==null)return a;if(typeof a==="bigint")return de(a)?a=Number(a):(a=BigInt.asIntN(64,a),a=de(a)?Number(a):String(a)),a;if(pe(a))return typeof a==="number"?xe(a):ue(a)}
function Be(a){if(typeof a!=="string")throw Error();return a}
function Ce(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function De(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+me(b)+" but got "+(a&&me(a.constructor)));}
function Ee(a,b,c){if(a!=null&&typeof a==="object"&&a.Dc===Gd)return a;if(Array.isArray(a)){var d=Bd(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Dd(a,e);return new b(a)}}
;function Fe(a){Ge===void 0&&(Ge=typeof Proxy==="function"?He(Proxy):null);if(!Ge||!Ie())return a;var b=Je(a);if(b)return b;if(Math.random()>.01)return a;Ke(a);b=new Ge(a,{set:function(c,d,e){Le();c[d]=e;return!0}});
Me(a,b);return b}
function Le(){rd()}
var Ne=void 0,Oe=void 0;function Je(a){var b;return(b=Ne)==null?void 0:b.get(a)}
function Pe(a){var b;return((b=Oe)==null?void 0:b.get(a))||a}
function Me(a,b){(Ne||(Ne=new Qe)).set(a,b);(Oe||(Oe=new Qe)).set(b,a)}
var Ge=void 0,Qe=void 0;function Ie(){Qe===void 0&&(Qe=typeof WeakMap==="function"?He(WeakMap):null);return Qe}
function He(a){try{return a.toString().indexOf("[native code]")!==-1?a:null}catch(b){return null}}
var Re=void 0;function Ke(a){if(Re===void 0){var b=new Ge([],{});Re=Array.prototype.concat.call([],b).length===1}Re&&typeof Symbol==="function"&&Symbol.isConcatSpreadable&&(a[Symbol.isConcatSpreadable]=!0)}
function Se(a,b,c){if(Ie()){if(Te(a,b)){if(c)return}else if(Math.random()>.01)return;var d=a.length;c={length:d};for(var e=0;e<Math.min(d,10);e++){if(d<=10)var f=e;else{f=d/10;var g=Math.floor(e*f);f=g+Math.floor(Math.random()*(Math.floor((e+1)*f)-g))}c[f]=a[f]}Ue(a,c)?(d=Ve||(Ve=new Qe),e=d.get(b),e||(e=new Qe,d.set(b,e)),e.set(a,c)):(rd(),We(a,b))}}
function Xe(a,b){var c=Te(a,b);c&&!Ue(a,c)&&(Ye(),We(a,b))}
function Ue(a,b){if(a.length!==b.length)return!1;for(var c in b){var d=Number(c),e;if(e=Number.isInteger(d))e=a[d],d=b[d],e=!(Number.isNaN(e)?Number.isNaN(d):e===d);if(e)return!1}return!0}
function Ze(a){var b;if(a&&(b=Ve)!=null&&b.has(a)&&(b=a.G))for(var c=0;c<b.length;c++){var d=b[c];if(c===b.length-1&&Jd(d))for(var e in d){var f=d[e];Array.isArray(f)&&Xe(f,a)}else Array.isArray(d)&&Xe(d,a)}}
function Ye(){rd()}
var Ve=void 0;function Te(a,b){var c,d;return(c=Ve)==null?void 0:(d=c.get(b))==null?void 0:d.get(a)}
function We(a,b){var c,d;(c=Ve)==null||(d=c.get(b))==null||d.delete(a)}
;var $e;function af(a,b){Bd(b);$e=b;a=new a(b);$e=void 0;return a}
function I(a,b,c){var d=d!=null?d:0;a==null&&(a=$e);$e=void 0;if(a==null){var e=96;c?(a=[c],e|=512):a=[];b&&(e=e&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");e=Bd(a);if(e&2048)throw Error("farr");if(e&64)return a;d===1||d===2||(e|=64);if(c&&(e|=512,c!==a[0]))throw Error("mid");a:{c=a;if(d=c.length){var f=d-1;if(Jd(c[f])){e|=256;b=f-(+!!(e&512)-1);if(b>=1024)throw Error("pvtlmt");e=e&-33521665|(b&1023)<<15;break a}}if(b){b=Math.max(b,d-(+!!(e&512)-1));if(b>1024)throw Error("spvt");
e=e&-33521665|(b&1023)<<15}}}Dd(a,e);return a}
;function bf(a,b){return cf(b)}
function cf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return de(a)?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Kd(a))return}else{if(ld(a))return hd(a);if(a instanceof nd){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=hd(b)}}}return a}
;function df(a,b,c){a=ud(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function ef(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Kd(a)?void 0:e&&Bd(a)&2?a:ff(a,b,c,d!==void 0,e);else if(Jd(a)){var f={},g;for(g in a)f[g]=ef(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function ff(a,b,c,d,e){var f=d||c?Bd(a):0;d=d?!!(f&32):void 0;a=ud(a);for(var g=0;g<a.length;g++)a[g]=ef(a[g],b,c,d,e);c&&c(f,a);return a}
function gf(a){return a.Dc===Gd?a.toJSON():cf(a)}
;function hf(a,b,c){c=c===void 0?Fd:c;if(a!=null){if(fd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Bd(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(Dd(a,(d|34)&-12293),a):ff(a,hf,d&4?Fd:c,!0,!0)}a.Dc===Gd&&(c=a.G,d=Cd(c),a=d&2?a:jf(a,c,d,!0));return a}}
function jf(a,b,c,d){Ze(a);return af(a.constructor,kf(b,c,d))}
function kf(a,b,c){var d=c||b&2?Fd:Ed,e=!!(b&32);a=df(a,b,function(f){return hf(f,e,d)});
Ad(a,32|(c?2:0));return a}
function lf(a){var b=a.G,c=Cd(b);return c&2?jf(a,b,c,!1):a}
;function mf(a,b){a=a.G;return nf(a,Cd(a),b)}
function of(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function nf(a,b,c,d){if(c===-1)return null;var e=b>>15&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(of(a,b,e,c)&&yd!=null){var g;a=(g=qd)!=null?g:qd={};g=a[yd]||0;g>=4||(a[yd]=g+1,rd())}return d}return of(a,b,e,c)}}
function pf(a,b,c){var d=a.G,e=Cd(d);Nd(e);qf(d,e,b,c);return a}
function qf(a,b,c,d){Jd(d);var e=b>>15&1023||536870912;if(c>=e){var f=b;if(b&256)var g=a[a.length-1];else{if(d==null)return f;g=a[e+(+!!(b&512)-1)]={};f|=256}g[c]=d;c<e&&(a[c+(+!!(b&512)-1)]=void 0);f!==b&&Dd(a,f);return f}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function rf(a){return sf(a,tf,11,!1)!==void 0}
function uf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function vf(a,b,c){var d=a.G,e=Cd(d);Nd(e);if(b==null)return qf(d,e,3),a;b=Pe(b);if(!Array.isArray(b))throw sd();var f=Bd(b),g=f,h=!!(2&f)||Object.isFrozen(b),k;if(k=!h)(k=void 0===Qd)||(k=(Gc||!1)&&void 0!==Pd);if(!(4&f)){f=21;h&&(b=ud(b),g=0,f=wf(f,e),f=xf(f,e,!0));for(var l=0;l<b.length;l++)b[l]=c(b[l])}k?(b=ud(b),g=0,f=wf(f,e),f=xf(f,e,!0)):h||Se(b,a);f!==g&&Dd(b,f);qf(d,e,3,b);return a}
function yf(a,b,c,d){a=a.G;var e=Cd(a);Nd(e);if(d==null){var f=zf(a);if(Af(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=zf(a);var g=Af(f,a,e,c);g!==b&&(g&&(e=qf(a,e,g)),f.set(c,b))}qf(a,e,b,d)}
function zf(a){if(vd){var b;return(b=a[zd])!=null?b:a[zd]=new Map}if(zd in a)return a[zd];b=new Map;Object.defineProperty(a,zd,{value:b});return b}
function Af(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];nf(b,c,g)!=null&&(e!==0&&(c=qf(b,c,e)),e=g)}a.set(d,e);return e}
function sf(a,b,c,d){a=a.G;var e=Cd(a);d=nf(a,e,c,d);b=Ee(d,b,e);b!==d&&b!=null&&qf(a,e,c,b);return b}
function Bf(a,b,c,d){b=sf(a,b,c,d===void 0?!1:d);if(b==null)return b;a=a.G;d=Cd(a);if(!(d&2)){var e=lf(b);e!==b&&(b=e,qf(a,d,c,b))}return b}
function lc(a,b,c){var d=void 0===Od?2:5;var e=Cd(a.G),f=e,g=!(2&e);e=a.G;var h=!!(2&f);d=h?1:d;g&&(g=!h);h=nf(e,f,c);h=Array.isArray(h)?h:Ld;var k=Bd(h),l=h;Xe(l,a);d!==2&&d!==1||We(l,a);l=!!(4&k);if(!l){var m=k;m===0&&(m=wf(m,f));k=h;m|=1;var n=f,r=!!(2&m);r&&(n|=2);for(var t=!r,w=!0,x=0,y=0;x<k.length;x++){var H=Ee(k[x],b,n);if(H instanceof b){if(!r){var J=!!(Bd(H.G)&2);t&&(t=!J);w&&(w=J)}k[y++]=H}}y<x&&(k.length=y);m|=4;m=w?m|16:m&-17;m=t?m|8:m&-9;Dd(k,m);r&&Object.freeze(k);k=m}if(g&&!(8&k||
!h.length&&(d===1||d===4&&32&k))){uf(k)?(h=ud(h),k=wf(k,f),f=qf(e,f,c,h)):We(h,a);b=h;g=k;for(k=0;k<b.length;k++)m=b[k],n=lf(m),m!==n&&(b[k]=n);g|=8;g=b.length?g&-17:g|16;Dd(b,g);k=g}if(d===1||d===4&&32&k)uf(k)||(a=k,f=!!(32&k),k|=!h.length||16&k&&(!l||f)?2:2048,k!==a&&Dd(h,k),Object.freeze(h));else if(l=d!==5?!1:!!(32&k)||uf(k)||!!Je(h),(d===2||l)&&uf(k)&&(h=ud(h),k=wf(k,f),k=xf(k,f,!1),Dd(h,k),f=qf(e,f,c,h)),uf(k)||(c=k,k=xf(k,f,!1),k!==c&&Dd(h,k)),l){var N=Fe(h);Se(h,a,!0)}else if(d===2){var P;
(P=Ne)==null||P.delete(h)}return N||h}
function Cf(a,b,c,d){d!=null?De(d,b):d=void 0;return pf(a,c,d)}
function Df(a,b,c,d){var e=a.G,f=Cd(e);Nd(f);if(d==null)return qf(e,f,c),a;d=Pe(d);if(!Array.isArray(d))throw sd();for(var g=Bd(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),m=!l&&(void 0===Qd||(Gc||!1)&&void 0!==Pd),n=!0,r=!0,t=0;t<d.length;t++){var w=d[t];De(w,b);k||(w=!!(Bd(w.G)&2),n&&(n=!w),r&&(r=w))}k||(g|=5,g=n?g|8:g&-9,g=r?g|16:g&-17);m||l&&g!==h?(d=ud(d),h=0,g=wf(g,f),g=xf(g,f,!0)):l||Se(d,a);g!==h&&Dd(d,g);qf(e,f,c,d);return a}
function wf(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function xf(a,b,c){32&b&&c||(a&=-33);return a}
function Ef(a){a=mf(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(BigInt.asIntN(64,a)):pe(a)?c==="string"?ue(a):b?ve(a):xe(a):void 0;return b}
function Ff(a,b){return a!=null?a:b}
function Gf(a){var b=b===void 0?!1:b;a=mf(a,4);return Ff(a==null||typeof a==="boolean"?a:typeof a==="number"?!!a:void 0,b)}
function nc(a,b,c){c=c===void 0?0:c;return Ff(se(mf(a,b)),c)}
function Hf(a,b){var c=c===void 0?"":c;a=mf(a,b);return Ff(a==null||typeof a==="string"?a:void 0,c)}
function If(a){var b=0;b=b===void 0?0:b;a=mf(a,1);a=a==null?a:Number.isFinite(a)?a|0:void 0;return Ff(a,b)}
function Jf(a,b,c){return pf(a,b,Ce(c))}
function Kf(a,b,c){if(c!=null){if(!Number.isFinite(c))throw sd("enum");c|=0}return pf(a,b,c)}
;function Lf(a){return a}
function Mf(a){return a}
function Nf(a,b,c,d){return Of(a,b,c,d,Pf,Qf)}
function Rf(a,b,c,d){return Of(a,b,c,d,Sf,Tf)}
function Of(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var r=c[n];d&&n===c.length-1&&r===d||(l++,r!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=Uf(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;r=g;for(var w=m,x=c.length-1;x>=0;x--){var y=c[x];if(!(y==null||d&&x===c.length-1&&y===d)){y=x-b;var H=e(y,t)+f(n,r,w);H<l&&(a=1+y,l=H);n++;t--;w+=Uf(y);r=Math.max(r,y)}}b=e(0,0)+f(n,r,w);b<l&&(a=0,l=b);if(d){n=h;r=g;w=m;t=k;for(var J in d)d=+J,isNaN(d)||d>=
1024||(n--,t++,w-=J.length,g=e(d,t)+f(n,r,w),g<l&&(a=1+d,l=g))}return a}
function Tf(a,b,c){return c+a*3+(a>1?a-1:0)}
function Sf(a,b){return(a>1?a-1:0)+(a-b)*4}
function Qf(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function Pf(a){return 40+4*a}
function Uf(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var Vf,Wf;function K(a,b,c){this.G=I(a,b,c)}
p=K.prototype;p.toJSON=function(){return Xf(this)};
p.serialize=function(a){try{return Wf=!0,a&&(Vf=a===Mf||a!==Lf&&a!==Nf&&a!==Rf?Mf:a),JSON.stringify(Xf(this),bf)}finally{a&&(Vf=void 0),Wf=!1}};
function Yf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Ad(b,32);return af(a,b)}
p.clone=function(){var a=this.G;return jf(this,a,Cd(a),!1)};
p.Dc=Gd;p.toString=function(){try{return Wf=!0,Xf(this).toString()}finally{Wf=!1}};
function Xf(a){Ze(a);var b;Wf?b=a.G:b=ff(a.G,gf,void 0,void 0,!1);var c=!Wf,d=Cd(c?a.G:b);if(a=b.length){var e=b[a-1],f=Jd(e);f?a--:e=void 0;var g=+!!(d&512)-1,h=a-g;d=!!Vf&&!(d&512);var k,l=(k=Vf)!=null?k:Mf;k=d?l(h,g,b,e):h;d=(h=d&&h!==k)?Array.prototype.slice.call(b,0,a):b;if(f||h){b:{var m=d;var n=e;var r;f=!1;if(h)for(l=Math.max(0,k+g);l<m.length;l++){var t=m[l],w=l-g;t==null||Kd(t)||Id(t)&&t.size===0||(f=m[l]=void 0,((f=r)!=null?f:r={})[w]=t,f=!0)}if(n)for(var x in n)if(l=+x,isNaN(l))l=void 0,
((l=r)!=null?l:r={})[x]=n[x];else if(t=n[x],Array.isArray(t)&&(Kd(t)||Id(t)&&t.size===0)&&(t=null),t==null&&(f=!0),h&&l<k){f=!0;t=l+g;for(w=m.length;w<=t;w++)m.push(void 0);m[t]=n[l]}else t!=null&&(l=void 0,((l=r)!=null?l:r={})[x]=t);f||(r=n);if(r)for(var y in r){n=r;break b}n=null}m=n==null?e!=null:n!==e}h&&(a=d.length);for(;a>0;a--){r=d[a-1];if(!(r==null||Kd(r)||Id(r)&&r.size===0))break;var H=!0}if(d!==b||m||H){if(!h&&!c)d=Array.prototype.slice.call(d,0,a);else if(H||m||n)d.length=a;n&&d.push(n)}H=
d}else H=b;return H}
;function Zf(a){return function(b){return Yf(a,b)}}
;function $f(a){this.G=I(a)}
z($f,K);function ag(a,b){return vf(a,b,qe)}
;function bg(a){this.G=I(a)}
z(bg,K);var cg=[1,2,3];function dg(a){this.G=I(a)}
z(dg,K);var eg=[1,2,3];function fg(a){this.G=I(a)}
z(fg,K);function gg(a){this.G=I(a)}
z(gg,K);function hg(a){this.G=I(a)}
z(hg,K);function ig(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function jg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,t=0;t<64;t+=4)r[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(n<<1|n>>>31)&4294967295;n=e[0];var w=e[1],x=e[2],y=e[3],H=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var J=y^w&(x^y);var N=1518500249}else J=w^x^y,N=1859775393;else t<60?(J=w&x|y&(w|x),N=2400959708):(J=w^x^y,N=3395469782);J=((n<<5|n>>>27)&4294967295)+J+H+N+r[t]&4294967295;H=y;y=x;x=(w<<30|w>>>2)&4294967295;w=n;n=J}e[0]=e[0]+n&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+H&4294967295}
function c(n,r){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],w=0,x=n.length;w<x;++w)t.push(n.charCodeAt(w));n=t}r||(r=n.length);t=0;if(l==0)for(;t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<r;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;t<5;t++)for(var w=24;w>=0;w-=8)n[r++]=e[t]>>w&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Td:function(){for(var n=d(),r="",t=0;t<n.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return r}}}
;function kg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,lg(ig(d),a,c||null)].join(" "):null}
function lg(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Kb(d,function(h){e.push(h)}),mg(e.join(" "));
var f=[],g=[];Kb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Kb(d,function(h){e.push(h)});
a=mg(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function mg(a){var b=jg();b.update(a);return b.Td().toLowerCase()}
;var ng={};function og(a){this.h=a||{cookie:""}}
p=og.prototype;p.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Jb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
p.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.Pe;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Jb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=bb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Jb:0,path:b,domain:c});return d};
p.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=bb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var pg=new og(typeof document=="undefined"?null:document);function qg(a){return!!ng.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function rg(a){a=a===void 0?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;qg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new og(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");qg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function sg(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new og(document)).get(b));return a?kg(a,c,d):null}
function tg(a,b){b=b===void 0?!1:b;var c=ig(String(C.location.href)),d=[];if(rg(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("chrome-untrusted://new-tab-page")==0||c.indexOf("moz-extension:")==0;var e=c?C.__SAPISID:C.__APISID;e||typeof document==="undefined"||(e=new og(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?kg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&qg(b)&&((b=sg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),
(a=sg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;function ug(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function vg(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?vg.apply(null,d):ug(d)}}
;function L(){this.ea=this.ea;this.D=this.D}
L.prototype.ea=!1;L.prototype.dispose=function(){this.ea||(this.ea=!0,this.aa())};
L.prototype[Symbol.dispose]=function(){this.dispose()};
function wg(a,b){a.addOnDisposeCallback(Xa(ug,b))}
L.prototype.addOnDisposeCallback=function(a,b){this.ea?b!==void 0?a.call(b):a():(this.D||(this.D=[]),b&&(a=a.bind(b)),this.D.push(a))};
L.prototype.aa=function(){if(this.D)for(;this.D.length;)this.D.shift()()};function xg(a){this.G=I(a)}
z(xg,K);function yg(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Ya()};
this.i=this.h()}
yg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
yg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
yg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
yg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function zg(a){this.G=I(a)}
z(zg,K);function Ag(a){this.G=I(a)}
z(Ag,K);function Bg(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
p=Bg.prototype;p.clone=function(){return new Bg(this.x,this.y)};
p.equals=function(a){return a instanceof Bg&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
p.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
p.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
p.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
p.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function Cg(a,b){this.width=a;this.height=b}
p=Cg.prototype;p.clone=function(){return new Cg(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
p.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function Dg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Eg(a){var b=Fg,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Gg(a){for(var b in a)return!1;return!0}
function Hg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ig(a){return a!==null&&"privembed"in a?a.privembed:!1}
function Jg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Kg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Lg(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Lg(a[c]);return b}
var Mg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ng(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Mg.length;f++)c=Mg[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Og(a,b){this.h=a===Pg&&b||""}
Og.prototype.toString=function(){return this.h};
var Pg={};new Og(Pg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Qg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Rg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Sg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Tg=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Ug(a){this.h=this.i=this.j=a}
Ug.prototype.reset=function(){this.h=this.i=this.j};
Ug.prototype.getValue=function(){return this.i};function Vg(a){this.G=I(a)}
z(Vg,K);Vg.prototype.ac=function(){return If(this)};function Wg(a){this.G=I(a)}
z(Wg,K);function Xg(a){this.G=I(a)}
z(Xg,K);function Yg(a,b){Df(a,Wg,1,b)}
;function tf(a){this.G=I(a)}
z(tf,K);var Zg=["platform","platformVersion","architecture","model","uaFullVersion"],bh=new Xg,ch=null;function dh(a,b){b=b===void 0?Zg:b;if(!ch){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Wg;f=Jf(f,1,e.brand);return Jf(f,2,e.version)});
Yg(pf(bh,2,ne(a.mobile)),c);ch=a.getHighEntropyValues(b)}var d=new Set(b);return ch.then(function(e){var f=bh.clone();d.has("platform")&&Jf(f,3,e.platform);d.has("platformVersion")&&Jf(f,4,e.platformVersion);d.has("architecture")&&Jf(f,5,e.architecture);d.has("model")&&Jf(f,6,e.model);d.has("uaFullVersion")&&Jf(f,7,e.uaFullVersion);return f}).catch(function(){return bh.clone()})}
;function eh(a){this.G=I(a)}
z(eh,K);function fh(a){this.G=I(a,4)}
z(fh,K);function gh(a){this.G=I(a,35)}
z(gh,K);function hh(a){this.G=I(a,19)}
z(hh,K);hh.prototype.Mb=function(a){return Kf(this,2,a)};function ih(a){this.G=I(a,8)}
z(ih,K);var jh=Zf(ih);function kh(a){this.G=I(a)}
z(kh,K);var lh=new function(){this.ctor=kh;this.isRepeated=0;this.h=Bf;this.defaultValue=void 0};function mh(a){L.call(this);var b=this;this.componentId="";this.j=[];this.Z="";this.pageId=null;this.ga=this.U=-1;this.experimentIds=null;this.R=this.u=0;this.la=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Fb=a.Fb||function(){};
this.i=new nh(a.logSource,a.Ya);this.network=a.network;this.ub=a.ub||null;this.bufferSize=1E3;this.B=a.sf||null;this.sessionIndex=a.sessionIndex||null;this.Db=a.Db||!1;this.logger=null;this.withCredentials=!a.Vc;this.Ya=a.Ya||!1;this.H=typeof URLSearchParams!=="undefined"&&!!(new URL(oh())).searchParams&&!!(new URL(oh())).searchParams.set;var c=Kf(new eh,1,1);ph(this.i,c);this.o=new Ug(1E4);a=qh(this,a.Qc);this.h=new yg(this.o.getValue(),a);this.Y=new yg(6E5,a);this.Db||this.Y.start();this.Ya||(document.addEventListener("visibilitychange",
function(){document.visibilityState==="hidden"&&b.uc()}),document.addEventListener("pagehide",this.uc.bind(this)))}
z(mh,L);function qh(a,b){return a.H?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
p=mh.prototype;p.aa=function(){this.uc();this.h.stop();this.Y.stop();L.prototype.aa.call(this)};
p.log=function(a){if(this.H){a=a.clone();var b=this.la++;a=pf(a,21,ye(b));this.componentId&&Jf(a,26,this.componentId);if(Ef(a)==null){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";pf(b,1,ye(c))}Ae(mf(a,15))==null&&pf(a,15,ye((new Date).getTimezoneOffset()*60));this.experimentIds&&(b=a,c=this.experimentIds.clone(),Cf(b,xg,16,c));b=this.j.length-this.bufferSize+1;b>0&&(this.j.splice(0,b),this.u+=b);this.j.push(a);this.Db||this.h.enabled||this.h.start()}};
p.flush=function(a,b){var c=this;if(this.j.length===0)a&&a();else{var d=Date.now();if(this.ga>d&&this.U<d)b&&b("throttled");else{this.network&&(typeof this.network.ac==="function"?rh(this.i,this.network.ac()):rh(this.i,0));var e=sh(this.i,this.j,this.u,this.R,this.ub);d={};var f=this.Fb();f&&(d.Authorization=f);this.B||(this.B=oh());try{var g=(new URL(this.B)).toString()}catch(k){g=(new URL(this.B,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.Z===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.u=0;var h=e.serialize();d={url:g.toString(),body:h,kh:1,qd:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis};g=function(k){c.o.reset();c.h.setInterval(c.o.getValue());if(k){var l=null;try{var m=JSON.stringify(JSON.parse(k.replace(")]}'\n",
"")));l=jh(m)}catch(n){}l&&(k=Number,m="-1",m=m===void 0?"0":m,m=Ff(Ef(l),m),k=k(m),k>0&&(c.U=Date.now(),c.ga=c.U+k),l=lh.ctor?lh.h(l,lh.ctor,175237375,!0):lh.h(l,175237375,null,!0),l=l===null?void 0:l)&&(l=nc(l,1,-1),l!==-1&&(c.o=new Ug(l<1?1:l),c.h.setInterval(c.o.getValue())))}a&&a();c.R=0};
h=function(k,l){var m=lc(e,gh,3);var n=Ae(mf(e,14));n=n==null?void 0:n;var r=c.o;r.h=Math.min(3E5,r.h*2);r.i=Math.min(3E5,r.h+Math.round(.1*(Math.random()-.5)*2*r.h));c.h.setInterval(c.o.getValue());k===401&&f&&(c.Z=f);n&&(c.u+=n);l===void 0&&(l=c.isRetryable(k));l&&(c.j=m.concat(c.j),c.Db||c.h.enabled||c.h.start());b&&b("net-send-failed",k);++c.R};
c.network&&c.network.send(d,g,h)}}}};
p.uc=function(){th(this.i,!0);this.flush();th(this.i,!1)};
p.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function oh(){return"https://play.google.com/log?format=json&hasfast=true"}
function nh(a,b){this.Ya=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new hh;Number.isInteger(a)&&this.h.Mb(a);b||(this.locale=document.documentElement.getAttribute("lang"));ph(this,new eh)}
nh.prototype.Mb=function(a){this.h.Mb(a);return this};
function ph(a,b){Cf(a.h,eh,1,b);If(b)||Kf(b,1,1);a.Ya||(b=uh(a),Hf(b,5)||Jf(b,5,a.locale));a.i&&(b=uh(a),Bf(b,Xg,9)||Cf(b,Xg,9,a.i))}
function rh(a,b){rf(vh(a))&&(a=wh(a),Kf(a,1,b))}
function th(a,b){rf(vh(a))&&(a=wh(a),pf(a,2,ne(b)))}
function vh(a){return Bf(a.h,eh,1)}
function xh(a){var b=b===void 0?Zg:b;var c=a.Ya?void 0:window;c?dh(c,b).then(function(d){a.i=d;d=uh(a);Cf(d,Xg,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function uh(a){a=vh(a);var b=Bf(a,tf,11);b||(b=new tf,Cf(a,tf,11,b));return b}
function wh(a){a=uh(a);var b=Bf(a,Vg,10);b||(b=new Vg,pf(b,2,ne(!1)),Cf(a,Vg,10,b));return b}
function sh(a,b,c,d,e){var f=0,g=0;c=c===void 0?0:c;f=f===void 0?0:f;g=g===void 0?0:g;d=d===void 0?0:d;if(rf(vh(a))){var h=wh(a);pf(h,3,re(d))}rf(vh(a))&&(d=wh(a),pf(d,4,re(f)));rf(vh(a))&&(f=wh(a),pf(f,5,re(g)));a=a.h.clone();g=Date.now().toString();a=pf(a,4,ye(g));b=b.slice();b=Df(a,gh,3,b);e&&(a=new zg,e=pf(a,13,re(e)),a=new Ag,e=Cf(a,zg,2,e),a=new fh,e=Cf(a,Ag,1,e),e=Kf(e,2,9),Cf(b,fh,18,e));c&&pf(b,14,ye(c));return b}
;function yh(){this.Hd=typeof AbortController!=="undefined"}
yh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,r,t;return A(function(w){switch(w.h){case 1:return f=(e=d.Hd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,za(w,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.qd)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),w.yield(fetch(a.url,g),5);case 5:h=w.i;if(h.status!==200){(k=c)==null||k(h.status);w.F(3);break}if((l=b)==null){w.F(7);break}return w.yield(h.text(),8);case 8:l(w.i);case 7:case 3:w.R=[w.j];w.o=0;w.D=0;clearTimeout(f);Ba(w);break;case 2:m=Aa(w);switch((n=m)==null?void 0:n.name){case "AbortError":(r=c)==null||r(408);break;default:(t=c)==null||t(400)}w.F(3)}})};
yh.prototype.ac=function(){return 4};function zh(a,b){L.call(this);this.logSource=a;this.sessionIndex=b;this.j="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.pageId=this.h=this.ub=null}
z(zh,L);function Ah(a,b){a.i=b;return a}
function Bh(a,b){a.network=b;return a}
function Ch(a,b){a.h=b}
zh.prototype.Vc=function(){this.u=!0;return this};
function Dh(a){a.network||(a.network=new yh);var b=new mh({logSource:a.logSource,Fb:a.Fb?a.Fb:tg,sessionIndex:a.sessionIndex,sf:a.j,Ya:a.o,Db:!1,Vc:a.u,Qc:a.Qc,network:a.network});wg(a,b);if(a.i){var c=a.i,d=uh(b.i);Jf(d,7,c)}a.componentId&&(b.componentId=a.componentId);a.ub&&(b.ub=a.ub);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new xg),c=b.experimentIds,d=d.serialize(),Jf(c,4,d)):b.experimentIds&&pf(b.experimentIds,4));xh(b.i);a.network.Mb&&a.network.Mb(a.logSource);
a.network.af&&a.network.af(b);return b}
;function Eh(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;L.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new zh(a,"0"),a.componentId=b,wg(this,a),c!==""&&(a.j=c),d&&(a.o=!0),e&&Ah(a,e),g&&Bh(a,g),b=Dh(a));this.h=b}
z(Eh,L);
Eh.prototype.flush=function(a){var b=a||[];if(b.length){a=new hg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new gg;f=Jf(f,1,e.i);var g=Fh(e);f=vf(f,g,Be);g=[];var h=[];for(var k=v(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.vc(l)||[],r=[],t=0;t<n.length;t++){var w=n[t],x=w&&w.h;w=new dg;switch(m){case 3:x=Number(x);Number.isFinite(x)&&yf(w,1,eg,ye(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);yf(w,2,eg,x)}r.push(w)}m=r;for(n=0;n<m.length;n++){r=m[n];t=new fg;r=Cf(t,dg,2,r);t=l;w=[];x=Gh(e);for(var y=0;y<x.length;y++){var H=x[y],J=t[y],N=new bg;switch(H){case 3:yf(N,1,cg,Ce(String(J)));break;case 2:H=Number(J);Number.isFinite(H)&&yf(N,2,cg,re(H));break;case 1:yf(N,3,cg,ne(J==="true"))}w.push(N)}Df(r,bg,1,w);g.push(r)}}Df(f,fg,4,g);c.push(f);e.clear()}Df(a,gg,1,c);b=this.h;b.H&&(a instanceof gh?b.log(a):(c=new gh,a=a.serialize(),a=Jf(c,8,a),b.log(a)));this.h.flush()}};function Hh(a){this.h=a}
;function Ih(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function Gh(a){return a.fields.map(function(b){return b.fieldType})}
function Fh(a){return a.fields.map(function(b){return b.fieldName})}
p=Ih.prototype;p.Id=function(a){var b=B.apply(1,arguments),c=this.vc(b);c?c.push(new Hh(a)):this.td(a,b)};
p.td=function(a){var b=this.Pc(B.apply(1,arguments));this.h.set(b,[new Hh(a)])};
p.vc=function(){var a=this.Pc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
p.de=function(){var a=this.vc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
p.clear=function(){this.h.clear()};
p.Pc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Jh(a,b){Ih.call(this,a,3,b)}
z(Jh,Ih);Jh.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.de(b);d&&(c=d.h);this.td(c+a,b)};function Kh(a,b){Ih.call(this,a,2,b)}
z(Kh,Ih);Kh.prototype.record=function(a){this.Id(a,B.apply(1,arguments))};function Lh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Lh.prototype.stopPropagation=function(){this.j=!0};
Lh.prototype.preventDefault=function(){this.defaultPrevented=!0};function Mh(a,b){Lh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Za(Mh,Lh);
Mh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Mh.za.preventDefault.call(this)};
Mh.prototype.stopPropagation=function(){Mh.za.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Mh.prototype.preventDefault=function(){Mh.za.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Nh="closure_listenable_"+(Math.random()*1E6|0);var Oh=0;function Ph(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.cc=e;this.key=++Oh;this.Lb=this.Vb=!1}
function Qh(a){a.Lb=!0;a.listener=null;a.proxy=null;a.src=null;a.cc=null}
;function Rh(a){this.src=a;this.listeners={};this.h=0}
Rh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Sh(a,b,d,e);g>-1?(b=a[g],c||(b.Vb=!1)):(b=new Ph(b,this.src,f,!!d,e),b.Vb=c,a.push(b));return b};
Rh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Sh(e,b,c,d);return b>-1?(Qh(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Th(a,b){var c=b.type;c in a.listeners&&Pb(a.listeners[c],b)&&(Qh(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Sh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Lb&&f.listener==b&&f.capture==!!c&&f.cc==d)return e}return-1}
;var Uh="closure_lm_"+(Math.random()*1E6|0),Vh={},Wh=0;function Xh(a,b,c,d,e){if(d&&d.once)Yh(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Xh(a,b[f],c,d,e);else c=Zh(c),a&&a[Nh]?a.listen(b,c,Qa(d)?!!d.capture:!!d,e):$h(a,b,c,!1,d,e)}
function $h(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=ai(a);h||(a[Uh]=h=new Rh(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=bi();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Tg||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ci(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Wh++}}
function bi(){function a(c){return b.call(a.src,a.listener,c)}
var b=di;return a}
function Yh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Yh(a,b[f],c,d,e);else c=Zh(c),a&&a[Nh]?a.h.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):$h(a,b,c,!0,d,e)}
function ei(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ei(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Zh(c),a&&a[Nh])?a.h.remove(String(b),c,d,e):a&&(a=ai(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Sh(b,c,d,e)),(c=a>-1?b[a]:null)&&fi(c))}
function fi(a){if(typeof a!=="number"&&a&&!a.Lb){var b=a.src;if(b&&b[Nh])Th(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ci(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Wh--;(c=ai(b))?(Th(c,a),c.h==0&&(c.src=null,b[Uh]=null)):Qh(a)}}}
function ci(a){return a in Vh?Vh[a]:Vh[a]="on"+a}
function di(a,b){if(a.Lb)a=!0;else{b=new Mh(b,this);var c=a.listener,d=a.cc||a.src;a.Vb&&fi(a);a=c.call(d,b)}return a}
function ai(a){a=a[Uh];return a instanceof Rh?a:null}
var gi="__closure_events_fn_"+(Math.random()*1E9>>>0);function Zh(a){if(typeof a==="function")return a;a[gi]||(a[gi]=function(b){return a.handleEvent(b)});
return a[gi]}
;function hi(){L.call(this);this.h=new Rh(this);this.Aa=this;this.Z=null}
Za(hi,L);hi.prototype[Nh]=!0;p=hi.prototype;p.addEventListener=function(a,b,c,d){Xh(this,a,b,c,d)};
p.removeEventListener=function(a,b,c,d){ei(this,a,b,c,d)};
function ii(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.Aa;c=b.type||b;typeof b==="string"?b=new Lh(b,a):b instanceof Lh?b.target=b.target||a:(e=b,b=new Lh(c,a),Ng(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=ji(g,c,!0,b)&&e}b.j||(g=b.h=a,e=ji(g,c,!0,b)&&e,b.j||(e=ji(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=ji(g,c,!1,b)&&e}
p.aa=function(){hi.za.aa.call(this);this.removeAllListeners();this.Z=null};
p.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
p.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Qh(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function ji(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Lb&&g.capture==c){var h=g.listener,k=g.cc||g.src;g.Vb&&Th(a.h,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function ki(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
ki.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function li(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function mi(){this.i=this.h=null}
mi.prototype.add=function(a,b){var c=ni.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
mi.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var ni=new ki(function(){return new oi},function(a){return a.reset()});
function oi(){this.next=this.scope=this.h=null}
oi.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
oi.prototype.reset=function(){this.next=this.scope=this.h=null};var pi,qi=!1,ri=new mi;function si(a,b){pi||ti();qi||(pi(),qi=!0);ri.add(a,b)}
function ti(){var a=Promise.resolve(void 0);pi=function(){a.then(ui)}}
function ui(){for(var a;a=ri.remove();){try{a.h.call(a.scope)}catch(b){Ec(b)}li(ni,a)}qi=!1}
;function vi(){}
function wi(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function xi(a){this.h=0;this.B=void 0;this.o=this.i=this.j=null;this.D=this.u=!1;if(a!=vi)try{var b=this;a.call(void 0,function(c){yi(b,2,c)},function(c){yi(b,3,c)})}catch(c){yi(this,3,c)}}
function zi(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
zi.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Ai=new ki(function(){return new zi},function(a){a.reset()});
function Bi(a,b,c){var d=Ai.get();d.i=a;d.h=b;d.context=c;return d}
function Ci(a){return new xi(function(b,c){c(a)})}
xi.prototype.then=function(a,b,c){return Di(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
xi.prototype.$goog_Thenable=!0;p=xi.prototype;p.nc=function(a,b){return Di(this,null,a,b)};
p.catch=xi.prototype.nc;p.cancel=function(a){if(this.h==0){var b=new Ei(a);si(function(){Fi(this,b)},this)}};
function Fi(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?Fi(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):Gi(c),Hi(c,e,3,b)))}a.j=null}else yi(a,3,b)}
function Ii(a,b){a.i||a.h!=2&&a.h!=3||Ji(a);a.o?a.o.next=b:a.i=b;a.o=b}
function Di(a,b,c,d){var e=Bi(null,null,null);e.child=new xi(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof Ei?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;Ii(a,e);return e.child}
p.qf=function(a){this.h=0;yi(this,2,a)};
p.rf=function(a){this.h=0;yi(this,3,a)};
function yi(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.qf,f=a.rf;if(d instanceof xi){Ii(d,Bi(e||vi,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if(typeof k==="function"){Ki(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.B=c,a.h=b,a.j=null,Ji(a),b!=3||c instanceof Ei||Li(a,c))}}
function Ki(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ji(a){a.u||(a.u=!0,si(a.Yd,a))}
function Gi(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.o=null);return b}
p.Yd=function(){for(var a;a=Gi(this);)Hi(this,a,this.h,this.B);this.u=!1};
function Hi(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.D;a=a.j)a.D=!1;if(b.child)b.child.j=null,Mi(b,c,d);else try{b.j?b.i.call(b.context):Mi(b,c,d)}catch(e){Ni.call(null,e)}li(Ai,b)}
function Mi(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Li(a,b){a.D=!0;si(function(){a.D&&Ni.call(null,b)})}
var Ni=Ec;function Ei(a){$a.call(this,a)}
Za(Ei,$a);Ei.prototype.name="cancel";function Oi(a,b){hi.call(this);this.j=a||1;this.i=b||C;this.o=Wa(this.mf,this);this.u=Ya()}
Za(Oi,hi);p=Oi.prototype;p.enabled=!1;p.Da=null;p.setInterval=function(a){this.j=a;this.Da&&this.enabled?(this.stop(),this.start()):this.Da&&this.stop()};
p.mf=function(){if(this.enabled){var a=Ya()-this.u;a>0&&a<this.j*.8?this.Da=this.i.setTimeout(this.o,this.j-a):(this.Da&&(this.i.clearTimeout(this.Da),this.Da=null),ii(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
p.start=function(){this.enabled=!0;this.Da||(this.Da=this.i.setTimeout(this.o,this.j),this.u=Ya())};
p.stop=function(){this.enabled=!1;this.Da&&(this.i.clearTimeout(this.Da),this.Da=null)};
p.aa=function(){Oi.za.aa.call(this);this.stop();delete this.i};function Pi(a){L.call(this);this.H=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.B=new Set;this.flushInterval=3E4;this.h=new Oi(this.flushInterval);this.h.listen("tick",this.xb,!1,this);wg(this,this.h)}
z(Pi,L);p=Pi.prototype;p.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Qi(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.xb()}
p.xb=function(){var a=this.i.values();a=[].concat(ka(a)).filter(function(b){return b.h.size});
a.length&&this.H.flush(a,this.u);Ri(a);this.j=0;this.h.enabled&&this.h.stop()};
p.Na=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Jh(a,b))};
p.ib=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Kh(a,b))};
function Si(a,b){return a.B.has(b)?void 0:a.i.get(b)}
p.wb=function(a){this.Gd(a,1,B.apply(1,arguments))};
p.Gd=function(a,b){var c=B.apply(2,arguments),d=Si(this,a);d&&d instanceof Jh&&(d.j(b,c),Qi(this))};
p.record=function(a,b){var c=B.apply(2,arguments),d=Si(this,a);d&&d instanceof Kh&&(d.record(b,c),Qi(this))};
function Ri(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Ti(){}
Ti.prototype.serialize=function(a){var b=[];Ui(this,a,b);return b.join("")};
function Ui(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ui(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Vi(d,c),c.push(":"),Ui(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Vi(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Wi={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Xi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Vi(a,b){b.push('"',a.replace(Xi,function(c){var d=Wi[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Wi[c]=d);return d}),'"')}
;function Yi(){hi.call(this);this.headers=new Map;this.i=!1;this.K=null;this.o=this.Y="";this.j=this.U=this.B=this.R=!1;this.H=0;this.u=null;this.la="";this.ga=!1}
Za(Yi,hi);var Zi=/^https?$/i,$i=["POST","PUT"],aj=[];function bj(a,b,c,d,e,f,g){var h=new Yi;aj.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Pd,!0,void 0,void 0);f&&(h.H=Math.max(0,f));g&&(h.ga=g);h.send(a,c,d,e)}
p=Yi.prototype;p.Pd=function(){this.dispose();Pb(aj,this)};
p.send=function(a,b,c,d){if(this.K)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.R=!1;this.i=!0;this.K=new XMLHttpRequest;this.K.onreadystatechange=Wa(this.ld,this);try{this.getStatus(),this.U=!0,this.K.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();cj(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Jb($i,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.K.setRequestHeader(d,c);this.la&&(this.K.responseType=this.la);"withCredentials"in this.K&&this.K.withCredentials!==this.ga&&(this.K.withCredentials=this.ga);try{this.u&&(clearTimeout(this.u),this.u=null),this.H>0&&(this.getStatus(),this.u=setTimeout(this.pf.bind(this),this.H)),
this.getStatus(),this.B=!0,this.K.send(a),this.B=!1}catch(g){this.getStatus(),cj(this,g)}};
p.pf=function(){typeof Ka!="undefined"&&this.K&&(this.o="Timed out after "+this.H+"ms, aborting",this.getStatus(),ii(this,"timeout"),this.abort(8))};
function cj(a,b){a.i=!1;a.K&&(a.j=!0,a.K.abort(),a.j=!1);a.o=b;dj(a);ej(a)}
function dj(a){a.R||(a.R=!0,ii(a,"complete"),ii(a,"error"))}
p.abort=function(){this.K&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.K.abort(),this.j=!1,ii(this,"complete"),ii(this,"abort"),ej(this))};
p.aa=function(){this.K&&(this.i&&(this.i=!1,this.j=!0,this.K.abort(),this.j=!1),ej(this,!0));Yi.za.aa.call(this)};
p.ld=function(){this.ea||(this.U||this.B||this.j?fj(this):this.De())};
p.De=function(){fj(this)};
function fj(a){if(a.i&&typeof Ka!="undefined")if(a.B&&(a.K?a.K.readyState:0)==4)setTimeout(a.ld.bind(a),0);else if(ii(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(gj(a))ii(a,"complete"),ii(a,"success");else{try{var b=(a.K?a.K.readyState:0)>2?a.K.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";dj(a)}}finally{ej(a)}}}
function ej(a,b){if(a.K){a.u&&(clearTimeout(a.u),a.u=null);var c=a.K;a.K=null;b||ii(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
p.isActive=function(){return!!this.K};
p.isComplete=function(){return(this.K?this.K.readyState:0)==4};
function gj(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=Zb(1,String(a.Y)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Zi.test(a?a.toLowerCase():"");c=b}return c}
p.getStatus=function(){try{return(this.K?this.K.readyState:0)>2?this.K.status:-1}catch(a){return-1}};
p.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function hj(){}
hj.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
bj(a.url,function(d){d=d.target;if(gj(d)){try{var e=d.K?d.K.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.qd,a.timeoutMillis,a.withCredentials)};
hj.prototype.ac=function(){return 1};var ij={va:"_",oc:"",Xc:[],gd:0};function jj(a,b){this.logger=a;this.event=b;this.startTime=kj()}
jj.prototype.done=function(){this.logger.Ib(this.event,kj()-this.startTime)};
function lj(){L.apply(this,arguments)}
z(lj,L);function mj(a,b){var c=kj();b=b();a.Ib("n",kj()-c);return b}
function nj(){lj.apply(this,arguments)}
z(nj,lj);p=nj.prototype;p.hd=function(){};
p.zc=function(){};
p.Ac=function(){};
p.Ib=function(){};
p.Ea=function(){};
p.Qb=function(){};
p.yd=function(){};
function oj(a){return{ke:new qc(a),ne:new sc(a),le:new rc(a),gf:new vc(a),hf:new wc(a),jf:new xc(a),Md:new tc(a),Nd:new uc(a),errorCount:new Ac(a),Xd:new zc(a),Lh:new yc(a),Nh:new Bc(a),mh:new Cc(a),Mh:new Dc(a)}}
function pj(a){var b=Bh(Ah(new zh(1828,"0"),"33"),new hj);(a==null?0:a.length)&&Ch(b,ag(new $f,a));a=new Eh(1828,"","",!1,"",Dh(b));wg(a,b);var c=new Pi(a);c.addOnDisposeCallback(function(){return void c.xb()});
wg(c,a);c.o=1E5;c.flushInterval=3E4;c.h.setInterval(3E4);return c}
function qj(a,b){L.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;b&&this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
z(qj,L);function rj(a){if(a.timer===void 0){var b=kj(),c=a.h+a.i-b;c>0?a.timer=setTimeout(function(){a.timer=void 0;rj(a)},c):(a.h=b,a.callback())}}
function sj(a,b,c){lj.call(this);this.metrics=a;this.va=b;this.oc=c;this.i=new Map;this.h=new Map;this.i.set("h",1);this.i.set("u",2);this.i.set("k",3);this.h.set(25,1);this.h.set(26,2);this.h.set(27,3);this.h.set(28,4)}
z(sj,lj);p=sj.prototype;p.hd=function(){this.metrics.ke.h.wb("/client_streamz/bg/fic",this.va)};
p.zc=function(){this.metrics.gf.h.wb("/client_streamz/bg/fsc",this.va)};
p.Ac=function(a){this.metrics.jf.record(a,this.va)};
p.Ib=function(a,b){if(a==="t")this.metrics.ne.record(b,this.va);else if(a==="n")this.metrics.hf.record(b,this.va);else if(a==="h"||a==="u"||a==="k"){if(a=this.i.get(a))this.metrics.Md.h.wb("/client_streamz/bg/fcc",a,this.va),this.metrics.Nd.record(b,a,this.va)}else this.metrics.Xd.record(b,a,this.oc,this.va)};
p.Ea=function(a){var b=this.h.get(a);b?this.metrics.le.h.wb("/client_streamz/bg/fiec",this.va,b):this.metrics.errorCount.h.wb("/client_streamz/bg/cec",a,this.oc,this.va)};
function tj(a,b){b=b===void 0?[]:b;a=Object.assign({},ij,a);b=pj(a.Xc.concat(b));sj.call(this,oj(b),a.va,a.oc);var c=this;this.options=a;this.service=b;this.j=new qj(function(){return void c.service.xb()},a.gd);
this.addOnDisposeCallback(function(){c.j.dispose();c.service.dispose()})}
z(tj,sj);tj.prototype.yd=function(a){var b=this;this.j.dispose();this.service.dispose();this.service=pj(this.options.Xc.concat(a));this.j=new qj(function(){return void b.service.xb()},this.options.gd);
this.metrics=oj(this.service)};
tj.prototype.Qb=function(){rj(this.j)};
function kj(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function mc(a){this.G=I(a)}
z(mc,K);function uj(a){this.G=I(a)}
z(uj,K);var vj=Zf(uj);function wj(a){this.G=I(a,0,"bfkj")}
z(wj,K);var xj=function(a){return Rd(function(b){return b instanceof a&&!(Bd(b.G)&2)})}(wj);function yj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function zj(a){function b(y,H,J,N){Promise.resolve().then(function(){m.done();d.logger.Qb();l.resolve({Kd:y,df:H,Ah:J,oh:N})})}
function c(y,H,J,N){if(!d.logger.ea){var P="k";H?P="h":J&&(P="u");P!=="k"?N!==0&&d.logger.Ib(P,y):d.j<=0?(d.logger.Ib(P,y),d.j=Math.floor(Math.random()*200)):d.j--}}
L.call(this);var d=this;this.j=Math.floor(Math.random()*200);this.i=[];if("challenge"in a&&xj(a.challenge)){var e=Hf(a.challenge,4);var f=Hf(a.challenge,5);Hf(a.challenge,7).length?this.h=vj(Hf(a.challenge,7)):this.h=Bf(a.challenge,uj,6)}else e=a.program,f=a.ge;var g=new L;this.addOnDisposeCallback(function(){var y,H,J;return A(function(N){if(N.h==1)return N.yield(d.o,2);if(N.h!=3)return y=N.i,H=y.df,N.yield(Promise.all(d.i),3);d.i=[];(J=H)==null||J();g.dispose();N.h=0})});
if(a.Je!==!1){var h,k=((h=this.h)==null?0:Gf(h))?kc(this.h):[];a.Qd?(this.logger=a.Qd,k.length&&this.logger.yd(k)):wg(g,this.logger=new tj(a.Be||{},k))}else wg(g,this.logger=new nj);var l=new yj;this.o=l.promise;var m=new jj(this.logger,"t");this.logger.hd();if(!C[f])throw this.logger.Ea(25),Error("EGOU");if(!C[f].a)throw this.logger.Ea(26),Error("ELIU");try{var n=C[f].a;f=[];h=[];var r;if((r=this.h)==null?0:Gf(r)){var t=kc(this.h);for(r=0;r<t.length;r++)f.push(t[r]),h.push(1);var w=oc(this.h);for(t=
0;t<w.length;t++)f.push(w[t]),h.push(2)}var x;this.u=v(n(e,b,!0,a.Kh,c,[f,h],(x=this.h)==null?void 0:Hf(x,5))).next().value;this.cf=l.promise.then(function(){})}catch(y){throw this.logger.Ea(28),y;
}}
z(zj,L);zj.prototype.snapshot=function(a){var b=this;if(this.ea)throw Error("Already disposed");var c=new yj;this.i.push(c.promise);this.logger.zc();return this.o.then(function(d){var e=d.Kd;return new Promise(function(f){var g=new jj(b.logger,"n");e(function(h){g.done();b.logger.Ac(h.length);b.logger.Qb();f(h)},[a.Uc,
a.ef,a.uf,a.ff])})}).finally(function(){return void c.resolve()})};
zj.prototype.vd=function(a){var b=this;if(this.ea)throw Error("Already disposed");this.logger.zc();var c=mj(this.logger,function(){return b.u([a.Uc,a.ef,a.uf,a.ff])});
this.logger.Ac(c.length);this.logger.Qb();return c};
zj.prototype.getLogger=function(){return this.logger};var Aj=window;function Bj(a){var b=Cj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Dj(){var a=[];Bj(function(b){a.push(b)});
return a}
var Cj={vf:"allow-forms",wf:"allow-modals",xf:"allow-orientation-lock",yf:"allow-pointer-lock",zf:"allow-popups",Af:"allow-popups-to-escape-sandbox",Bf:"allow-presentation",Cf:"allow-same-origin",Df:"allow-scripts",Ef:"allow-top-navigation",Ff:"allow-top-navigation-by-user-activation"},Ej=wi(function(){return Dj()});
function Fj(){var a=Gj(),b={};Kb(Ej(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Gj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Hj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Ij=(new Date).getTime();function Jj(a){hi.call(this);var b=this;this.B=this.j=0;this.Ca=a!=null?a:{oa:function(e,f){return setTimeout(e,f)},
pa:function(e){clearTimeout(e)}};
var c,d;this.i=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return A(function(e){return e.yield(Kj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.B||Lj(this)}
z(Jj,hi);function Mj(){var a=Nj;Jj.h||(Jj.h=new Jj(a));return Jj.h}
Jj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.pa(this.B);delete Jj.h};
Jj.prototype.ta=function(){return this.i};
function Lj(a){a.B=a.Ca.oa(function(){var b;return A(function(c){if(c.h==1)return a.i?((b=window.navigator)==null?0:b.onLine)?c.F(3):c.yield(Kj(a),3):c.yield(Kj(a),3);Lj(a);c.h=0})},3E4)}
function Kj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Ca.oa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.R=[h.j];h.o=0;h.D=0;a.u=void 0;a.j&&(a.Ca.pa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?ii(a,"networkstatus-online"):ii(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:Aa(h),g=!1,h.F(3)}})})}
;function Oj(){this.data=[];this.h=-1}
Oj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Oj.prototype.get=function(a){return!!this.data[a]};
function Pj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Qj(){this.blockSize=-1}
;function Rj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.D=[];this.u=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
Za(Rj,Qj);Rj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Sj(a,b,c){c||(c=0);var d=a.u;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Rj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.D,f=this.i;d<b;){if(f==0)for(;d<=c;)Sj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Sj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Sj(this,e);f=0;break}}this.i=f;this.o+=b}};
Rj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.D[c]=b&255,b/=256;Sj(this,this.D);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Tj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Uj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Vj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Tj(a).match(/\S+/g)||[],b=Jb(a,b)>=0);return b}
function Wj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Vj(a,"inverted-hdpi")&&Uj(a,Array.prototype.filter.call(a.classList?a.classList:Tj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Xj(){}
Xj.prototype.next=function(){return Yj};
var Yj={done:!0,value:void 0};Xj.prototype.hb=function(){return this};function Zj(a){if(a instanceof ak||a instanceof bk||a instanceof ck)return a;if(typeof a.next=="function")return new ak(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new ak(function(){return a[Symbol.iterator]()});
if(typeof a.hb=="function")return new ak(function(){return a.hb()});
throw Error("Not an iterator or iterable.");}
function ak(a){this.h=a}
ak.prototype.hb=function(){return new bk(this.h())};
ak.prototype[Symbol.iterator]=function(){return new ck(this.h())};
ak.prototype.i=function(){return new ck(this.h())};
function bk(a){this.h=a}
z(bk,Xj);bk.prototype.next=function(){return this.h.next()};
bk.prototype[Symbol.iterator]=function(){return new ck(this.h)};
bk.prototype.i=function(){return new ck(this.h)};
function ck(a){ak.call(this,function(){return a});
this.j=a}
z(ck,ak);ck.prototype.next=function(){return this.j.next()};function M(a){L.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.B=!!a}
Za(M,L);p=M.prototype;p.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
p.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Pb(a)}return!1};
p.Pb=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Pb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
p.gb=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];dk(this.h[g+1],this.h[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.ea;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.Pb(c)}}return e!=0}return!1};
function dk(a,b,c){si(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Pb,this),delete this.i[a])}else this.h.length=0,this.i={}};
p.aa=function(){M.za.aa.call(this);this.clear();this.j.length=0};function ek(a){this.h=a}
ek.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Ti).serialize(b))};
ek.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ek.prototype.remove=function(a){this.h.remove(a)};function fk(a){this.h=a}
Za(fk,ek);function gk(a){this.data=a}
function hk(a){return a===void 0||a instanceof gk?a:new gk(a)}
fk.prototype.set=function(a,b){fk.za.set.call(this,a,hk(b))};
fk.prototype.i=function(a){a=fk.za.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
fk.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ik(a){this.h=a}
Za(ik,fk);ik.prototype.set=function(a,b,c){if(b=hk(b)){if(c){if(c<Ya()){ik.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ya()}ik.za.set.call(this,a,b)};
ik.prototype.i=function(a){var b=ik.za.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ya()||c&&c>Ya())ik.prototype.remove.call(this,a);else return b}};function jk(){}
;function kk(){}
Za(kk,jk);kk.prototype[Symbol.iterator]=function(){return Zj(this.hb(!0)).i()};
kk.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function lk(a){this.h=a;this.i=null}
Za(lk,kk);p=lk.prototype;p.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
p.set=function(a,b){mk(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){mk(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){mk(this);this.h.removeItem(a)};
p.hb=function(a){mk(this);var b=0,c=this.h,d=new Xj;d.next=function(){if(b>=c.length)return Yj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
p.clear=function(){mk(this);this.h.clear()};
p.key=function(a){mk(this);return this.h.key(a)};
function mk(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Ec(Error("Storage mechanism: Storage unavailable"))}
;function nk(){var a=null;try{a=C.localStorage||null}catch(b){}lk.call(this,a)}
Za(nk,lk);function ok(a,b){this.i=a;this.h=b+"::"}
Za(ok,kk);ok.prototype.set=function(a,b){this.i.set(this.h+a,b)};
ok.prototype.get=function(a){return this.i.get(this.h+a)};
ok.prototype.remove=function(a){this.i.remove(this.h+a)};
ok.prototype.hb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Xj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},pk=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.Lc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var qk={jb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Yc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},rk={jb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Yc:function(a){return[].concat.apply([],a)}};
O.bf=function(){pk?(O.fb=Uint8Array,O.Ga=Uint16Array,O.Fd=Int32Array,O.assign(O,qk)):(O.fb=Array,O.Ga=Array,O.Fd=Array,O.assign(O,rk))};
O.bf();var sk=!0;try{new Uint8Array(1)}catch(a){sk=!1}
function tk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new O.fb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var uk={};uk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var vk={},wk,xk=[],yk=0;yk<256;yk++){wk=yk;for(var zk=0;zk<8;zk++)wk=wk&1?3988292384^wk>>>1:wk>>>1;xk[yk]=wk}vk=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^xk[(a^b[d])&255];return a^-1};var Ak={};Ak={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Bk(a){for(var b=a.length;--b>=0;)a[b]=0}
var Ck=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Dk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Ek=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Fk=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Gk=Array(576);Bk(Gk);var Hk=Array(60);Bk(Hk);var Ik=Array(512);Bk(Ik);var Jk=Array(256);Bk(Jk);var Kk=Array(29);Bk(Kk);var Lk=Array(30);Bk(Lk);function Mk(a,b,c,d,e){this.wd=a;this.be=b;this.ae=c;this.Ud=d;this.Ae=e;this.cd=a&&a.length}
var Nk,Ok,Pk;function Qk(a,b){this.Wc=a;this.rb=0;this.Sa=b}
function Rk(a,b){a.X[a.pending++]=b&255;a.X[a.pending++]=b>>>8&255}
function Sk(a,b,c){a.ha>16-c?(a.na|=b<<a.ha&65535,Rk(a,a.na),a.na=b>>16-a.ha,a.ha+=c-16):(a.na|=b<<a.ha&65535,a.ha+=c)}
function Tk(a,b,c){Sk(a,c[b*2],c[b*2+1])}
function Uk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Vk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Uk(d[e]++,e))}
function Wk(a){var b;for(b=0;b<286;b++)a.qa[b*2]=0;for(b=0;b<30;b++)a.Wa[b*2]=0;for(b=0;b<19;b++)a.ia[b*2]=0;a.qa[512]=1;a.Ma=a.vb=0;a.xa=a.matches=0}
function Xk(a){a.ha>8?Rk(a,a.na):a.ha>0&&(a.X[a.pending++]=a.na);a.na=0;a.ha=0}
function Yk(a,b,c){Xk(a);Rk(a,c);Rk(a,~c);O.jb(a.X,a.window,b,c,a.pending);a.pending+=c}
function Zk(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function $k(a,b,c){for(var d=a.ba[c],e=c<<1;e<=a.Ka;){e<a.Ka&&Zk(b,a.ba[e+1],a.ba[e],a.depth)&&e++;if(Zk(b,d,a.ba[e],a.depth))break;a.ba[c]=a.ba[e];c=e;e<<=1}a.ba[c]=d}
function al(a,b,c){var d=0;if(a.xa!==0){do{var e=a.X[a.Cb+d*2]<<8|a.X[a.Cb+d*2+1];var f=a.X[a.yc+d];d++;if(e===0)Tk(a,f,b);else{var g=Jk[f];Tk(a,g+256+1,b);var h=Ck[g];h!==0&&(f-=Kk[g],Sk(a,f,h));e--;g=e<256?Ik[e]:Ik[256+(e>>>7)];Tk(a,g,c);h=Dk[g];h!==0&&(e-=Lk[g],Sk(a,e,h))}}while(d<a.xa)}Tk(a,256,b)}
function bl(a,b){var c=b.Wc,d=b.Sa.wd,e=b.Sa.cd,f=b.Sa.Ud,g,h=-1;a.Ka=0;a.mb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ba[++a.Ka]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Ka<2;){var k=a.ba[++a.Ka]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Ma--;e&&(a.vb-=d[k*2+1])}b.rb=h;for(g=a.Ka>>1;g>=1;g--)$k(a,c,g);k=f;do g=a.ba[1],a.ba[1]=a.ba[a.Ka--],$k(a,c,1),d=a.ba[1],a.ba[--a.mb]=g,a.ba[--a.mb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ba[1]=k++,$k(a,c,1);while(a.Ka>=
2);a.ba[--a.mb]=a.ba[1];g=b.Wc;k=b.rb;d=b.Sa.wd;e=b.Sa.cd;f=b.Sa.be;var l=b.Sa.ae,m=b.Sa.Ae,n,r=0;for(n=0;n<=15;n++)a.Ha[n]=0;g[a.ba[a.mb]*2+1]=0;for(b=a.mb+1;b<573;b++){var t=a.ba[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,r++);g[t*2+1]=n;if(!(t>k)){a.Ha[n]++;var w=0;t>=l&&(w=f[t-l]);var x=g[t*2];a.Ma+=x*(n+w);e&&(a.vb+=x*(d[t*2+1]+w))}}if(r!==0){do{for(n=m-1;a.Ha[n]===0;)n--;a.Ha[n]--;a.Ha[n+1]+=2;a.Ha[m]--;r-=2}while(r>0);for(n=m;n!==0;n--)for(t=a.Ha[n];t!==0;)d=a.ba[--b],d>k||(g[d*2+1]!==n&&(a.Ma+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Vk(c,h,a.Ha)}
function cl(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ia[l*2]+=g:l!==0?(l!==e&&a.ia[l*2]++,a.ia[32]++):g<=10?a.ia[34]++:a.ia[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function dl(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Tk(a,l,a.ia);while(--g!==0)}else l!==0?(l!==e&&(Tk(a,l,a.ia),g--),Tk(a,16,a.ia),Sk(a,g-3,2)):g<=10?(Tk(a,17,a.ia),Sk(a,g-3,3)):(Tk(a,18,a.ia),Sk(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function el(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.qa[c*2]!==0)return 0;if(a.qa[18]!==0||a.qa[20]!==0||a.qa[26]!==0)return 1;for(c=32;c<256;c++)if(a.qa[c*2]!==0)return 1;return 0}
var fl=!1;function gl(a,b,c){a.X[a.Cb+a.xa*2]=b>>>8&255;a.X[a.Cb+a.xa*2+1]=b&255;a.X[a.yc+a.xa]=c&255;a.xa++;b===0?a.qa[c*2]++:(a.matches++,b--,a.qa[(Jk[c]+256+1)*2]++,a.Wa[(b<256?Ik[b]:Ik[256+(b>>>7)])*2]++);return a.xa===a.Hb-1}
;function hl(a,b){a.msg=Ak[b];return b}
function il(a){for(var b=a.length;--b>=0;)a[b]=0}
function jl(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(O.jb(a.output,b.X,b.Kb,c,a.sb),a.sb+=c,b.Kb+=c,a.Mc+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Kb=0))}
function kl(a,b){var c=a.sa>=0?a.sa:-1,d=a.v-a.sa,e=0;if(a.level>0){a.M.sc===2&&(a.M.sc=el(a));bl(a,a.ec);bl(a,a.Yb);cl(a,a.qa,a.ec.rb);cl(a,a.Wa,a.Yb.rb);bl(a,a.Rc);for(e=18;e>=3&&a.ia[Fk[e]*2+1]===0;e--);a.Ma+=3*(e+1)+5+5+4;var f=a.Ma+3+7>>>3;var g=a.vb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Sk(a,b?1:0,3),Yk(a,c,d);else if(a.strategy===4||g===f)Sk(a,2+(b?1:0),3),al(a,Gk,Hk);else{Sk(a,4+(b?1:0),3);c=a.ec.rb+1;d=a.Yb.rb+1;e+=1;Sk(a,c-257,5);Sk(a,d-1,5);Sk(a,e-4,4);for(f=0;f<e;f++)Sk(a,
a.ia[Fk[f]*2+1],3);dl(a,a.qa,c-1);dl(a,a.Wa,d-1);al(a,a.qa,a.Wa)}Wk(a);b&&Xk(a);a.sa=a.v;jl(a.M)}
function R(a,b){a.X[a.pending++]=b}
function ll(a,b){a.X[a.pending++]=b>>>8&255;a.X[a.pending++]=b&255}
function ml(a,b){var c=a.jd,d=a.v,e=a.wa,f=a.kd,g=a.v>a.ka-262?a.v-(a.ka-262):0,h=a.window,k=a.Ta,l=a.Fa,m=a.v+258,n=h[d+e-1],r=h[d+e];a.wa>=a.bd&&(c>>=2);f>a.A&&(f=a.A);do{var t=b;if(h[t+e]===r&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.qb=b;e=t;if(t>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.A?e:a.A}
function nl(a){var b=a.ka,c;do{var d=a.Dd-a.A-a.v;if(a.v>=b+(b-262)){O.jb(a.window,a.window,b,b,0);a.qb-=b;a.v-=b;a.sa-=b;var e=c=a.dc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Fa[--e],a.Fa[e]=f>=b?f-b:0;while(--c);d+=b}if(a.M.ma===0)break;e=a.M;c=a.window;f=a.v+a.A;var g=e.ma;g>d&&(g=d);g===0?c=0:(e.ma-=g,O.jb(c,e.input,e.bb,g,f),e.state.wrap===1?e.J=uk(e.J,c,g,f):e.state.wrap===2&&(e.J=vk(e.J,c,g,f)),e.bb+=g,e.eb+=g,c=g);a.A+=c;if(a.A+a.ra>=3)for(d=a.v-a.ra,a.P=a.window[d],
a.P=(a.P<<a.Ja^a.window[d+1])&a.Ia;a.ra&&!(a.P=(a.P<<a.Ja^a.window[d+3-1])&a.Ia,a.Fa[d&a.Ta]=a.head[a.P],a.head[a.P]=d,d++,a.ra--,a.A+a.ra<3););}while(a.A<262&&a.M.ma!==0)}
function ol(a,b){for(var c;;){if(a.A<262){nl(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.P=(a.P<<a.Ja^a.window[a.v+3-1])&a.Ia,c=a.Fa[a.v&a.Ta]=a.head[a.P],a.head[a.P]=a.v);c!==0&&a.v-c<=a.ka-262&&(a.T=ml(a,c));if(a.T>=3)if(c=gl(a,a.v-a.qb,a.T-3),a.A-=a.T,a.T<=a.Bc&&a.A>=3){a.T--;do a.v++,a.P=(a.P<<a.Ja^a.window[a.v+3-1])&a.Ia,a.Fa[a.v&a.Ta]=a.head[a.P],a.head[a.P]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.P=a.window[a.v],a.P=(a.P<<a.Ja^a.window[a.v+1])&a.Ia;else c=gl(a,0,
a.window[a.v]),a.A--,a.v++;if(c&&(kl(a,!1),a.M.S===0))return 1}a.ra=a.v<2?a.v:2;return b===4?(kl(a,!0),a.M.S===0?3:4):a.xa&&(kl(a,!1),a.M.S===0)?1:2}
function pl(a,b){for(var c,d;;){if(a.A<262){nl(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.P=(a.P<<a.Ja^a.window[a.v+3-1])&a.Ia,c=a.Fa[a.v&a.Ta]=a.head[a.P],a.head[a.P]=a.v);a.wa=a.T;a.nd=a.qb;a.T=2;c!==0&&a.wa<a.Bc&&a.v-c<=a.ka-262&&(a.T=ml(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.qb>4096)&&(a.T=2));if(a.wa>=3&&a.T<=a.wa){d=a.v+a.A-3;c=gl(a,a.v-1-a.nd,a.wa-3);a.A-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.P=(a.P<<a.Ja^a.window[a.v+3-1])&a.Ia,a.Fa[a.v&a.Ta]=a.head[a.P],a.head[a.P]=a.v);
while(--a.wa!==0);a.Za=0;a.T=2;a.v++;if(c&&(kl(a,!1),a.M.S===0))return 1}else if(a.Za){if((c=gl(a,0,a.window[a.v-1]))&&kl(a,!1),a.v++,a.A--,a.M.S===0)return 1}else a.Za=1,a.v++,a.A--}a.Za&&(gl(a,0,a.window[a.v-1]),a.Za=0);a.ra=a.v<2?a.v:2;return b===4?(kl(a,!0),a.M.S===0?3:4):a.xa&&(kl(a,!1),a.M.S===0)?1:2}
function ql(a,b){for(var c,d,e,f=a.window;;){if(a.A<=258){nl(a);if(a.A<=258&&b===0)return 1;if(a.A===0)break}a.T=0;if(a.A>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.A&&(a.T=a.A)}a.T>=3?(c=gl(a,1,a.T-3),a.A-=a.T,a.v+=a.T,a.T=0):(c=gl(a,0,a.window[a.v]),a.A--,a.v++);if(c&&(kl(a,!1),a.M.S===0))return 1}a.ra=0;return b===4?(kl(a,!0),a.M.S===0?3:4):
a.xa&&(kl(a,!1),a.M.S===0)?1:2}
function rl(a,b){for(var c;;){if(a.A===0&&(nl(a),a.A===0)){if(b===0)return 1;break}a.T=0;c=gl(a,0,a.window[a.v]);a.A--;a.v++;if(c&&(kl(a,!1),a.M.S===0))return 1}a.ra=0;return b===4?(kl(a,!0),a.M.S===0?3:4):a.xa&&(kl(a,!1),a.M.S===0)?1:2}
function sl(a,b,c,d,e){this.he=a;this.ze=b;this.Ce=c;this.ye=d;this.ce=e}
var tl;tl=[new sl(0,0,0,0,function(a,b){var c=65535;for(c>a.ya-5&&(c=a.ya-5);;){if(a.A<=1){nl(a);if(a.A===0&&b===0)return 1;if(a.A===0)break}a.v+=a.A;a.A=0;var d=a.sa+c;if(a.v===0||a.v>=d)if(a.A=a.v-d,a.v=d,kl(a,!1),a.M.S===0)return 1;if(a.v-a.sa>=a.ka-262&&(kl(a,!1),a.M.S===0))return 1}a.ra=0;if(b===4)return kl(a,!0),a.M.S===0?3:4;a.v>a.sa&&kl(a,!1);return 1}),
new sl(4,4,8,4,ol),new sl(4,5,16,8,ol),new sl(4,6,32,32,ol),new sl(4,4,16,16,pl),new sl(8,16,32,32,pl),new sl(8,16,128,128,pl),new sl(8,32,128,256,pl),new sl(32,128,258,1024,pl),new sl(32,258,258,4096,pl)];
function ul(){this.M=null;this.status=0;this.X=null;this.wrap=this.pending=this.Kb=this.ya=0;this.I=null;this.Ba=0;this.method=8;this.ob=-1;this.Ta=this.Oc=this.ka=0;this.window=null;this.Dd=0;this.head=this.Fa=null;this.kd=this.bd=this.strategy=this.level=this.Bc=this.jd=this.wa=this.A=this.qb=this.v=this.Za=this.nd=this.T=this.sa=this.Ja=this.Ia=this.wc=this.dc=this.P=0;this.qa=new O.Ga(1146);this.Wa=new O.Ga(122);this.ia=new O.Ga(78);il(this.qa);il(this.Wa);il(this.ia);this.Rc=this.Yb=this.ec=
null;this.Ha=new O.Ga(16);this.ba=new O.Ga(573);il(this.ba);this.mb=this.Ka=0;this.depth=new O.Ga(573);il(this.depth);this.ha=this.na=this.ra=this.matches=this.vb=this.Ma=this.Cb=this.xa=this.Hb=this.yc=0}
function vl(a,b){if(!a||!a.state||b>5||b<0)return a?hl(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.ma!==0||c.status===666&&b!==4)return hl(a,a.S===0?-5:-2);c.M=a;var d=c.ob;c.ob=b;if(c.status===42)if(c.wrap===2)a.J=0,R(c,31),R(c,139),R(c,8),c.I?(R(c,(c.I.text?1:0)+(c.I.Pa?2:0)+(c.I.extra?4:0)+(c.I.name?8:0)+(c.I.comment?16:0)),R(c,c.I.time&255),R(c,c.I.time>>8&255),R(c,c.I.time>>16&255),R(c,c.I.time>>24&255),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,c.I.os&255),c.I.extra&&c.I.extra.length&&
(R(c,c.I.extra.length&255),R(c,c.I.extra.length>>8&255)),c.I.Pa&&(a.J=vk(a.J,c.X,c.pending,0)),c.Ba=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,3),c.status=113);else{var e=8+(c.Oc-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;ll(c,e+(31-e%31));c.v!==0&&(ll(c,a.J>>>16),ll(c,a.J&65535));a.J=1}if(c.status===69)if(c.I.extra){for(e=c.pending;c.Ba<(c.I.extra.length&65535)&&(c.pending!==c.ya||
(c.I.Pa&&c.pending>e&&(a.J=vk(a.J,c.X,c.pending-e,e)),jl(a),e=c.pending,c.pending!==c.ya));)R(c,c.I.extra[c.Ba]&255),c.Ba++;c.I.Pa&&c.pending>e&&(a.J=vk(a.J,c.X,c.pending-e,e));c.Ba===c.I.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.I.name){e=c.pending;do{if(c.pending===c.ya&&(c.I.Pa&&c.pending>e&&(a.J=vk(a.J,c.X,c.pending-e,e)),jl(a),e=c.pending,c.pending===c.ya)){var f=1;break}f=c.Ba<c.I.name.length?c.I.name.charCodeAt(c.Ba++)&255:0;R(c,f)}while(f!==0);c.I.Pa&&c.pending>
e&&(a.J=vk(a.J,c.X,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.I.comment){e=c.pending;do{if(c.pending===c.ya&&(c.I.Pa&&c.pending>e&&(a.J=vk(a.J,c.X,c.pending-e,e)),jl(a),e=c.pending,c.pending===c.ya)){f=1;break}f=c.Ba<c.I.comment.length?c.I.comment.charCodeAt(c.Ba++)&255:0;R(c,f)}while(f!==0);c.I.Pa&&c.pending>e&&(a.J=vk(a.J,c.X,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.I.Pa?(c.pending+2>c.ya&&jl(a),c.pending+2<=c.ya&&(R(c,a.J&
255),R(c,a.J>>8&255),a.J=0,c.status=113)):c.status=113);if(c.pending!==0){if(jl(a),a.S===0)return c.ob=-1,0}else if(a.ma===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return hl(a,-5);if(c.status===666&&a.ma!==0)return hl(a,-5);if(a.ma!==0||c.A!==0||b!==0&&c.status!==666){d=c.strategy===2?rl(c,b):c.strategy===3?ql(c,b):tl[c.level].ce(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.ob=-1),0;if(d===2&&(b===1?(Sk(c,2,3),Tk(c,256,Gk),c.ha===16?(Rk(c,c.na),c.na=0,c.ha=0):c.ha>=8&&
(c.X[c.pending++]=c.na&255,c.na>>=8,c.ha-=8)):b!==5&&(Sk(c,0,3),Yk(c,0,0),b===3&&(il(c.head),c.A===0&&(c.v=0,c.sa=0,c.ra=0))),jl(a),a.S===0))return c.ob=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(R(c,a.J&255),R(c,a.J>>8&255),R(c,a.J>>16&255),R(c,a.J>>24&255),R(c,a.eb&255),R(c,a.eb>>8&255),R(c,a.eb>>16&255),R(c,a.eb>>24&255)):(ll(c,a.J>>>16),ll(c,a.J&65535));jl(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var wl={};wl=function(){this.input=null;this.eb=this.ma=this.bb=0;this.output=null;this.Mc=this.S=this.sb=0;this.msg="";this.state=null;this.sc=2;this.J=0};var xl=Object.prototype.toString;
function yl(a){if(!(this instanceof yl))return new yl(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.M=new wl;this.M.S=0;var b=this.M;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=hl(b,-2);else{e===8&&(e=9);var k=new ul;b.state=k;k.M=b;k.wrap=h;k.I=null;k.Oc=e;k.ka=1<<k.Oc;k.Ta=k.ka-1;k.wc=f+7;k.dc=1<<k.wc;k.Ia=k.dc-1;k.Ja=~~((k.wc+3-1)/3);k.window=new O.fb(k.ka*2);k.head=new O.Ga(k.dc);k.Fa=new O.Ga(k.ka);k.Hb=1<<f+6;k.ya=k.Hb*4;k.X=new O.fb(k.ya);k.Cb=1*k.Hb;k.yc=3*k.Hb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.eb=b.Mc=0;b.sc=2;c=b.state;c.pending=0;c.Kb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.J=c.wrap===2?
0:1;c.ob=0;if(!fl){d=Array(16);for(f=g=0;f<28;f++)for(Kk[f]=g,e=0;e<1<<Ck[f];e++)Jk[g++]=f;Jk[g-1]=f;for(f=g=0;f<16;f++)for(Lk[f]=g,e=0;e<1<<Dk[f];e++)Ik[g++]=f;for(g>>=7;f<30;f++)for(Lk[f]=g<<7,e=0;e<1<<Dk[f]-7;e++)Ik[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Gk[e*2+1]=8,e++,d[8]++;for(;e<=255;)Gk[e*2+1]=9,e++,d[9]++;for(;e<=279;)Gk[e*2+1]=7,e++,d[7]++;for(;e<=287;)Gk[e*2+1]=8,e++,d[8]++;Vk(Gk,287,d);for(e=0;e<30;e++)Hk[e*2+1]=5,Hk[e*2]=Uk(e,5);Nk=new Mk(Gk,Ck,257,286,15);Ok=new Mk(Hk,
Dk,0,30,15);Pk=new Mk([],Ek,0,19,7);fl=!0}c.ec=new Qk(c.qa,Nk);c.Yb=new Qk(c.Wa,Ok);c.Rc=new Qk(c.ia,Pk);c.na=0;c.ha=0;Wk(c);c=0}else c=hl(b,-2);c===0&&(b=b.state,b.Dd=2*b.ka,il(b.head),b.Bc=tl[b.level].ze,b.bd=tl[b.level].he,b.kd=tl[b.level].Ce,b.jd=tl[b.level].ye,b.v=0,b.sa=0,b.A=0,b.ra=0,b.T=b.wa=2,b.Za=0,b.P=0);b=c}}else b=-2;if(b!==0)throw Error(Ak[b]);a.header&&(b=this.M)&&b.state&&b.state.wrap===2&&(b.state.I=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=tk(a.dictionary):
xl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.M;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.A)b=-2;else{b===1&&(a.J=uk(a.J,f,g,0));l.wrap=0;g>=l.ka&&(b===0&&(il(l.head),l.v=0,l.sa=0,l.ra=0),c=new O.fb(l.ka),O.jb(c,f,g-l.ka,l.ka,0),f=c,g=l.ka);c=a.ma;d=a.bb;e=a.input;a.ma=g;a.bb=0;a.input=f;for(nl(l);l.A>=3;){f=l.v;g=l.A-2;do l.P=(l.P<<l.Ja^l.window[f+3-1])&l.Ia,l.Fa[f&l.Ta]=l.head[l.P],l.head[l.P]=f,f++;while(--g);
l.v=f;l.A=2;nl(l)}l.v+=l.A;l.sa=l.v;l.ra=l.A;l.A=0;l.T=l.wa=2;l.Za=0;a.bb=d;a.input=e;a.ma=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Ak[b]);this.ih=!0}}
yl.prototype.push=function(a,b){var c=this.M,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=tk(a):xl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.bb=0;c.ma=c.input.length;do{c.S===0&&(c.output=new O.fb(d),c.sb=0,c.S=d);a=vl(c,e);if(a!==1&&a!==0)return zl(this,a),this.ended=!0,!1;if(c.S===0||c.ma===0&&(e===4||e===2))if(this.options.to==="string"){var f=O.Lc(c.output,c.sb);b=f;f=f.length;if(f<65537&&(b.subarray&&sk||!b.subarray))b=
String.fromCharCode.apply(null,O.Lc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.Lc(c.output,c.sb),this.chunks.push(b)}while((c.ma>0||c.S===0)&&a!==1);if(e===4)return(c=this.M)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=hl(c,-2):(c.state=null,a=d===113?hl(c,-3):0)):a=-2,zl(this,a),this.ended=!0,a===0;e===2&&(zl(this,0),c.S=0);return!0};
function zl(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):O.Yc(a.chunks));a.chunks=[];a.err=b;a.msg=a.M.msg}
function Al(a,b){b=b||{};b.gzip=!0;b=new yl(b);b.push(a,!0);if(b.err)throw b.msg||Ak[b.err];return b.result}
;function Bl(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=hb(a):b=null;return b}
;function Cl(a){return hb(a===null?"null":a===void 0?"undefined":a)}
;function Dl(a){this.name=a}
;var El=new Dl("rawColdConfigGroup");var Fl=new Dl("rawHotConfigGroup");function Gl(a){this.G=I(a)}
z(Gl,K);function Hl(a){this.G=I(a)}
z(Hl,K);Hl.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new nd(a,md):pd||(pd=new nd(null,md));else if(a.constructor!==nd)if(ld(a))a=a.length?new nd(new Uint8Array(a),md):pd||(pd=new nd(null,md));else throw Error();return pf(this,1,a)};var Il=new Dl("continuationCommand");var Jl=new Dl("webCommandMetadata");var Kl=new Dl("signalServiceEndpoint");var Ll={Lf:"EMBEDDED_PLAYER_MODE_UNKNOWN",If:"EMBEDDED_PLAYER_MODE_DEFAULT",Kf:"EMBEDDED_PLAYER_MODE_PFP",Jf:"EMBEDDED_PLAYER_MODE_PFL"};var Ml=new Dl("feedbackEndpoint");var Wd={Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Pf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Of:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Qf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Rf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",Tf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Sf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED"};var Nl=new Dl("shareEndpoint"),Ol=new Dl("shareEntityEndpoint"),Pl=new Dl("shareEntityServiceEndpoint"),Ql=new Dl("webPlayerShareEntityServiceEndpoint");var Rl=new Dl("playlistEditEndpoint");var Sl=new Dl("modifyChannelNotificationPreferenceEndpoint");var Tl=new Dl("unsubscribeEndpoint");var Ul=new Dl("subscribeEndpoint");function Vl(){var a=Wl;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Xl(a){D("yt.ads.biscotti.lastId_",a)}
;function Yl(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Zl=C.window,$l,am,bm=(Zl==null?void 0:($l=Zl.yt)==null?void 0:$l.config_)||(Zl==null?void 0:(am=Zl.ytcfg)==null?void 0:am.data_)||{};D("yt.config_",bm);function cm(){Yl(bm,arguments)}
function S(a,b){return a in bm?bm[a]:b}
function dm(a){var b=bm.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var em=[];function fm(a){em.forEach(function(b){return b(a)})}
function gm(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){hm(b)}}:a}
function hm(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),cm("ERRORS",b));fm(a)}
function im(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),cm("ERRORS",f))}
;var jm=/^[\w.]*$/,km={q:!0,search_query:!0};function lm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=mm(f[0]||""),h=mm(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Qb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],n=String(lm);l.args=[{key:m,value:f[1],query:a,method:nm===n?"unchanged":n}];km.hasOwnProperty(m)||im(l)}}return c}
var nm=String(lm);function om(a){var b=[];Dg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Kb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function pm(a){a.charAt(0)==="?"&&(a=a.substring(1));return lm(a,"&")}
function qm(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),pm(a.length>1?a[1]:a[0])):{}}
function rm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=pm(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return ec(a,e)+d}
function sm(a){if(!b)var b=window.location.href;var c=Zb(1,a),d=$b(a);c&&d?(a=a.match(Xb),b=b.match(Xb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?$b(b)===d&&(Number(Zb(4,b))||null)===(Number(Zb(4,a))||null):!0;return a}
function mm(a){return a&&a.match(jm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function tm(a){var b=um;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Ij;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ma){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?Aj:g;try{var h=g.history.length}catch(Ma){h=0}e.u_his=h;var k;e.u_h=(k=Aj.screen)==null?void 0:k.height;var l;e.u_w=(l=Aj.screen)==null?void 0:l.width;var m;e.u_ah=(m=Aj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=Aj.screen)==null?void 0:n.availWidth;var r;e.u_cd=(r=Aj.screen)==null?void 0:r.colorDepth}catch(Ma){}h=b.h;try{var t=h.screenX;var w=h.screenY}catch(Ma){}try{var x=h.outerWidth;var y=h.outerHeight}catch(Ma){}try{var H=h.innerWidth;var J=h.innerHeight}catch(Ma){}try{var N=h.screenLeft;var P=h.screenTop}catch(Ma){}try{H=h.innerWidth,J=h.innerHeight}catch(Ma){}try{var va=h.screen.availWidth;var vb=h.screen.availTop}catch(Ma){}t=[N,P,t,w,va,vb,x,y,H,J];try{var ea=(b.h.top||window).document,Z=ea.compatMode==
"CSS1Compat"?ea.documentElement:ea.body;var na=(new Cg(Z.clientWidth,Z.clientHeight)).round()}catch(Ma){na=new Cg(-12245933,-12245933)}ea=na;na={};var Na=Na===void 0?C:Na;Z=new Oj;"SVGElement"in Na&&"createElementNS"in Na.document&&Z.set(0);w=Fj();w["allow-top-navigation-by-user-activation"]&&Z.set(1);w["allow-popups-to-escape-sandbox"]&&Z.set(2);Na.crypto&&Na.crypto.subtle&&Z.set(3);"TextDecoder"in Na&&"TextEncoder"in Na&&Z.set(4);Na=Pj(Z);na.bc=Na;na.bih=ea.height;na.biw=ea.width;na.brdim=t.join();
b=b.i;b=(na.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,na.wgl=!!Aj.WebGLRenderingContext,na);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var um=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return om(tm(a))});Ya();navigator.userAgent.indexOf(" (CrKey ");var wm="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function xm(){if(!wm)return null;var a=wm();return"open"in a?a:null}
function ym(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function zm(a,b){typeof a==="function"&&(a=gm(a));return window.setTimeout(a,b)}
;var Am="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ka(Am),["client_dev_set_cookie"]);function T(a){a=Bm(a);return typeof a==="string"&&a==="false"?!1:!!a}
function Cm(a,b){a=Bm(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Bm(a){return S("EXPERIMENT_FLAGS",{})[a]}
function Dm(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=v(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Em={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Fm="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ka(Am)),Gm=!1;function Hm(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&gm(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=xm();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;T("debug_forward_web_query_parameters")&&(a=Im(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Jm(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){im(n)}}l.send(d);return l}
function Jm(a,b){b=b===void 0?{}:b;var c=sm(a),d=S("INNERTUBE_CLIENT_NAME"),e=T("web_ajax_ignore_global_headers_if_set"),f;for(f in Em){var g=S(Em[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=S("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||($b(a)?!1:!0))){k=a;var l;if(l=T("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=$b(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=Yb(Zb(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!$b(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!$b(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&$b(a)||(b["X-YouTube-Ad-Signals"]=om(tm()));return b}
function Km(a,b){b.method="POST";b.postParams||(b.postParams={});return Lm(a,b)}
function Lm(a,b){var c=b.format||"JSON";a=Mm(a,b);var d=Nm(a,b),e=!1,f=Om(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=ym(k),m=null,n=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||n||r)m=Pm(a,c,k,b.convertToSafeHtml);l&&(l=Qm(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=zm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Mm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=rm(a,b||{},!0);return a}
function Nm(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||$b(a)&&!b.withCredentials&&$b(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=pm(e),Ng(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):dc(e));f=e||f&&!Gg(f);!Gm&&f&&b.method!=="POST"&&(Gm=!0,hm(Error("AJAX request with postData should use POST")));return e}
function Pm(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,im(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Rm(a):null)e={},Kb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Sm(g)})}d&&Tm(e);
return e}
function Tm(a){if(Qa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=fb();d=new zb(e?e.createHTML(d):d);a[c]=d}else Tm(a[b])}}
function Qm(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Rm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Sm(a){var b="";Kb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Im(a){var b=window.location.search,c=$b(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&sm(a)&&(c=document.location.hostname);var d=Yb(Zb(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=pm(b),f={};Kb(Fm,function(g){e[g]&&(f[g]=e[g])});
return rm(a,f||{},!1)}
var Om=Hm;var Um=[{Cc:function(a){return"Cannot read property '"+a.key+"'"},
fc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Cc:function(a){return"Cannot call '"+a.key+"'"},
fc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Cc:function(a){return a.key+" is not defined"},
fc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Wm={Ra:[],Oa:[{callback:Vm,weight:500}]};function Vm(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Xm(){this.Oa=[];this.Ra=[]}
var Ym;function Zm(){if(!Ym){var a=Ym=new Xm;a.Ra.length=0;a.Oa.length=0;Wm.Ra&&a.Ra.push.apply(a.Ra,Wm.Ra);Wm.Oa&&a.Oa.push.apply(a.Oa,Wm.Oa)}return Ym}
;var $m=new M;function an(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=bn(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=bn(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=bn(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function bn(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function cn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=dn(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=an(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?dn(f+".ve",g,h,k):0;d+=f;d+=dn(e,a[e],b,c);if(d>500)break}}else c[b]=en(a),d+=c[b].length;else c[b]=en(a),d+=c[b].length;return d}
function dn(a,b,c,d){c+="."+a;a=en(b);d[c]=a;return c.length+a.length}
function en(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function fn(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function gn(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function hn(){this.kf=!0}
function jn(){hn.h||(hn.h=new hn);return hn.h}
function kn(a,b){a={};var c=[],d=T("enable_first_party_auth_v2");"USER_SESSION_ID"in bm&&d&&c.push({key:"u",value:S("USER_SESSION_ID")});if(c=tg(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in bm||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in bm&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));return a}
;var ln={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function mn(a,b,c,d,e){pg.set(""+a,b,{Jb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function nn(a){return pg.get(""+a,void 0)}
function on(a,b,c){pg.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function pn(){if(T("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!pg.isEnabled())return!1;if(pg.h.cookie)return!0;T("embeds_web_enable_cookie_detection_fix")?pg.set("TESTCOOKIESENABLED","1",{Jb:60,Pe:"none",secure:!0}):pg.set("TESTCOOKIESENABLED","1",{Jb:60});if(pg.get("TESTCOOKIESENABLED")!=="1")return!1;pg.remove("TESTCOOKIESENABLED");return!0}
;var qn=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",qn);function rn(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=nn(this.h);a&&this.parse(a)}
var sn;function tn(){sn||(sn=new rn);return sn}
p=rn.prototype;p.get=function(a,b){un(a);vn(a);a=qn[a]!==void 0?qn[a].toString():null;return a!=null?a:b?b:""};
p.set=function(a,b){un(a);vn(a);if(b==null)throw Error("ExpectedNotNull");qn[a]=b.toString()};
function wn(a){return!!((xn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
p.remove=function(a){un(a);vn(a);delete qn[a]};
p.clear=function(){for(var a in qn)delete qn[a]};
function vn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function un(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function xn(a){a=qn[a]!==void 0?qn[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
p.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(qn[d]=c.toString())}};var yn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},zn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function An(){var a=C.navigator;return a?a.connection:void 0}
function Bn(){var a=An();if(a){var b=yn[a.type||"unknown"]||"CONN_UNKNOWN";a=yn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Cn(){var a=An();if(a!=null&&a.effectiveType)return zn.hasOwnProperty(a.effectiveType)?zn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ka(b))}
z(U,Error);function Dn(){try{return En(),!0}catch(a){return!1}}
function En(a){if(S("DATASYNC_ID")!==void 0)return S("DATASYNC_ID");throw new U("Datasync ID not set",a===void 0?"unknown":a);}
;function Fn(){}
function Gn(a,b){return Nj.Va(a,0,b)}
Fn.prototype.oa=function(a,b){return this.Va(a,1,b)};
Fn.prototype.Ab=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Hn=Cm("web_emulated_idle_callback_delay",300),In=1E3/60-3,Jn=[8,5,4,3,2,1,0];
function Kn(a){a=a===void 0?{}:a;L.call(this);this.i=[];this.j={};this.Z=this.h=0;this.Y=this.u=!1;this.R=[];this.U=this.ga=!1;for(var b=v(Jn),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.qc=a.timeout||1;this.H=In;this.B=0;this.Aa=this.Ee.bind(this);this.pc=this.nf.bind(this);this.yb=this.Jd.bind(this);this.zb=this.je.bind(this);this.Rb=this.Ie.bind(this);this.Ua=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.la=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.Aa)}
z(Kn,L);p=Kn.prototype;p.Ab=function(a){var b=Ya();Ln(this,a);a=Ya()-b;this.u||(this.H-=a)};
p.Va=function(a,b,c){++this.Z;if(b===10)return this.Ab(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.R.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&Mn(this)!==this.B&&this.stop(),this.start()));return d};
p.pa=function(a){delete this.j[a]};
function Nn(a){a.R.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
p.isHidden=function(){return!!document.hidden||!1};
function On(a){return!a.isHidden()&&a.la}
function Mn(a){if(a.i[8].length){if(a.U)return 4;if(On(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?On(a)?3:2:1;return 0}
p.Ea=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Ln(a,b){try{b()}catch(c){a.Ea(c)}}
function Pn(a){for(var b=v(Jn),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
p.je=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ga=!0;Qn(this,b);this.ga=!1};
p.nf=function(){Qn(this)};
p.Jd=function(){Rn(this)};
p.Ie=function(a){this.U=!0;var b=Mn(this);b===4&&b!==this.B&&(this.stop(),this.start());Qn(this,void 0,a);this.U=!1};
p.Ee=function(){this.isHidden()||Rn(this);this.h&&(this.stop(),this.start())};
function Rn(a){a.stop();a.u=!0;for(var b=Ya(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Ln(a,e)}Sn(a);a.u=!1;Pn(a)&&a.start();b=Ya()-b;a.H-=b}
function Sn(a){for(var b=0,c=a.R.length;b<c;b++){var d=a.R[b];a.i[d.priority].push(d.id)}a.R.length=0}
function Qn(a,b,c){a.U&&a.B===4&&a.h||a.stop();a.u=!0;b=Ya()+(b||a.H);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ea(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Ln(a,f);d=a.ga?0:1;d=a.o>d?a.o:d;if(!(Ya()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Ln(a,c)}while(c&&Ya()<b)}a.u=!1;Sn(a);a.H=In;Pn(a)&&a.start()}
p.start=function(){this.Y=!1;if(this.h===0)switch(this.B=Mn(this),this.B){case 1:var a=this.zb;this.h=this.Ua?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Hn);break;case 2:this.h=window.setTimeout(this.pc,this.qc);break;case 3:this.h=window.requestAnimationFrame(this.Rb);break;case 4:this.h=window.setTimeout(this.yb,0)}};
p.pause=function(){this.stop();this.Y=!0};
p.stop=function(){if(this.h){switch(this.B){case 1:var a=this.h;this.Ua?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
p.aa=function(){Nn(this);this.stop();this.la&&document.removeEventListener("visibilitychange",this.Aa);L.prototype.aa.call(this)};var Tn=E("yt.scheduler.instance.timerIdMap_")||{},Un=Cm("kevlar_tuner_scheduler_soft_state_timer_ms",800),Vn=0,Wn=0;function Xn(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.ea)a=new Kn(S("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Yn(){Zn();var a=E("ytglobal.schedulerInstanceInstance_");a&&(ug(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Zn(){Nn(Xn());for(var a in Tn)Tn.hasOwnProperty(a)&&delete Tn[Number(a)]}
function $n(a,b,c){if(!c)return c=c===void 0,-Xn().Va(a,b,c);var d=window.setTimeout(function(){var e=Xn().Va(a,b);Tn[d]=e},c);
return d}
function ao(a){Xn().Ab(a)}
function bo(a){var b=Xn();if(a<0)b.pa(-a);else{var c=Tn[a];c?(b.pa(c),delete Tn[a]):window.clearTimeout(a)}}
function co(){eo()}
function eo(){window.clearTimeout(Vn);Xn().start()}
function fo(){Xn().pause();window.clearTimeout(Vn);Vn=window.setTimeout(co,Un)}
function go(){window.clearTimeout(Wn);Wn=window.setTimeout(function(){ho(0)},Un)}
function ho(a){go();var b=Xn();b.o=a;b.start()}
function io(a){go();var b=Xn();b.o>a&&(b.o=a,b.start())}
function jo(){window.clearTimeout(Wn);var a=Xn();a.o=0;a.start()}
;function ko(){Fn.apply(this,arguments)}
z(ko,Fn);function lo(){ko.h||(ko.h=new ko);return ko.h}
ko.prototype.Va=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):zm(a,c||0)};
ko.prototype.pa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
ko.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
ko.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Nj=lo();
T("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",Yn),D("yt.scheduler.instance.addJob",$n),D("yt.scheduler.instance.addImmediateJob",ao),D("yt.scheduler.instance.cancelJob",bo),D("yt.scheduler.instance.cancelAllJobs",Zn),D("yt.scheduler.instance.start",eo),D("yt.scheduler.instance.pause",fo),D("yt.scheduler.instance.setPriorityThreshold",ho),D("yt.scheduler.instance.enablePriorityThreshold",io),D("yt.scheduler.instance.clearPriorityThreshold",jo),D("yt.scheduler.initialized",
!0));function mo(a){var b=new nk;this.h=(a=b.isAvailable()?a?new ok(b,a):b:null)?new ik(a):null;this.i=document.domain||window.location.hostname}
mo.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Ti).serialize(b))}catch(f){return}else e=escape(b);mn(a,e,c,this.i)};
mo.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=nn(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
mo.prototype.remove=function(a){this.h&&this.h.remove(a);on(a,"/",this.i)};var no=function(){var a;return function(){a||(a=new mo("ytidb"));return a}}();
function oo(){var a;return(a=no())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var po=[],qo,ro=!1;function so(){var a={};for(qo=new to(a.handleError===void 0?uo:a.handleError,a.logEvent===void 0?vo:a.logEvent);po.length>0;)switch(a=po.shift(),a.type){case "ERROR":qo.Ea(a.payload);break;case "EVENT":qo.logEvent(a.eventType,a.payload)}}
function wo(a){ro||(qo?qo.Ea(a):(po.push({type:"ERROR",payload:a}),po.length>10&&po.shift()))}
function xo(a,b){ro||(qo?qo.logEvent(a,b):(po.push({type:"EVENT",eventType:a,payload:b}),po.length>10&&po.shift()))}
;function yo(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function zo(a){return a.substr(0,a.indexOf(":"))||a}
;var Ao=Xc||Yc;function Bo(a){var b=Hc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Co={},Do=(Co.AUTH_INVALID="No user identifier specified.",Co.EXPLICIT_ABORT="Transaction was explicitly aborted.",Co.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Co.MISSING_INDEX="Index not created.",Co.MISSING_OBJECT_STORES="Object stores not created.",Co.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Co.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Co.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Co.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Co.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Co.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Co.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Co),Eo={},Fo=(Eo.AUTH_INVALID="ERROR",Eo.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Eo.EXPLICIT_ABORT="IGNORED",Eo.IDB_NOT_SUPPORTED="ERROR",Eo.MISSING_INDEX=
"WARNING",Eo.MISSING_OBJECT_STORES="ERROR",Eo.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Eo.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Eo.QUOTA_EXCEEDED="WARNING",Eo.QUOTA_MAYBE_EXCEEDED="WARNING",Eo.UNKNOWN_ABORT="WARNING",Eo.INCOMPATIBLE_DB_VERSION="WARNING",Eo),Go={},Ho=(Go.AUTH_INVALID=!1,Go.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Go.EXPLICIT_ABORT=!1,Go.IDB_NOT_SUPPORTED=!1,Go.MISSING_INDEX=!1,Go.MISSING_OBJECT_STORES=!1,Go.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Go.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Go.QUOTA_EXCEEDED=!1,Go.QUOTA_MAYBE_EXCEEDED=!0,Go.UNKNOWN_ABORT=!0,Go.INCOMPATIBLE_DB_VERSION=!1,Go);function Io(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Do[a]:c;d=d===void 0?Fo[a]:d;e=e===void 0?Ho[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Io.prototype)}
z(Io,U);function Jo(a,b){Io.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Do.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Jo.prototype)}
z(Jo,Io);function Ko(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Ko.prototype)}
z(Ko,Error);var Lo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Mo(a,b,c,d){b=zo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Io)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Io("QUOTA_EXCEEDED",a);if(Zc&&e.name==="UnknownError")return new Io("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Ko)return new Io("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Lo.some(function(f){return e.message.includes(f)}))return new Io("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Io("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",md:e.name})];e.level="WARNING";return e}
function No(a,b,c){var d=oo();return new Io("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Oo(a){if(!a)throw Error();throw a;}
function Po(a){return a}
function Qo(a){this.h=a}
function Ro(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Ro.all=function(a){return new Ro(new Qo(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={nb:0};f.nb<a.length;f={nb:f.nb},++f.nb)Ro.resolve(a[f.nb]).then(function(g){return function(h){d[g.nb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Ro.resolve=function(a){return new Ro(new Qo(function(b,c){a instanceof Ro?a.then(b,c):b(a)}))};
Ro.reject=function(a){return new Ro(new Qo(function(b,c){c(a)}))};
Ro.prototype.then=function(a,b){var c=this,d=a!=null?a:Po,e=b!=null?b:Oo;return new Ro(new Qo(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){So(c,c,d,f,g)}),c.i.push(function(){To(c,c,e,f,g)})):c.state.status==="FULFILLED"?So(c,c,d,f,g):c.state.status==="REJECTED"&&To(c,c,e,f,g)}))};
Ro.prototype.catch=function(a){return this.then(void 0,a)};
function So(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Ro?Uo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function To(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Ro?Uo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Uo(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Ro?Uo(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Vo(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Wo(a){return new Promise(function(b,c){Vo(a,b,c)})}
function Xo(a){return new Ro(new Qo(function(b,c){Vo(a,b,c)}))}
;function Yo(a,b){return new Ro(new Qo(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Zo=window,V=Zo.ytcsi&&Zo.ytcsi.now?Zo.ytcsi.now:Zo.performance&&Zo.performance.timing&&Zo.performance.now&&Zo.performance.timing.navigationStart?function(){return Zo.performance.timing.navigationStart+Zo.performance.now()}:function(){return(new Date).getTime()};function $o(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(V());this.i=!1}
p=$o.prototype;p.add=function(a,b,c){return ap(this,[a],{mode:"readwrite",ja:!0},function(d){return d.objectStore(a).add(b,c)})};
p.clear=function(a){return ap(this,[a],{mode:"readwrite",ja:!0},function(b){return b.objectStore(a).clear()})};
p.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return ap(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).count(b)})};
function bp(a,b,c){a=a.h.createObjectStore(b,c);return new cp(a)}
p.delete=function(a,b){return ap(this,[a],{mode:"readwrite",ja:!0},function(c){return c.objectStore(a).delete(b)})};
p.get=function(a,b){return ap(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).get(b)})};
function dp(a,b,c){return ap(a,[b],{mode:"readwrite",ja:!0},function(d){d=d.objectStore(b);return Xo(d.h.put(c,void 0))})}
p.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function ap(a,b,c,d){var e,f,g,h,k,l,m,n,r,t,w,x;return A(function(y){switch(y.h){case 1:var H={mode:"readonly",ja:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ja?3:1;g=0;case 2:if(h){y.F(4);break}g++;k=Math.round(V());za(y,5);l=a.h.transaction(b,e.mode);H=y.yield;var J=new ep(l);J=fp(J,d);return H.call(y,J,7);case 7:return m=y.i,n=Math.round(V()),gp(a,k,n,g,void 0,b.join(),e),y.return(m);case 5:r=Aa(y);t=Math.round(V());w=Mo(r,
a.h.name,b.join(),a.h.version);if((x=w instanceof Io&&!w.h)||g>=f)gp(a,k,t,g,w,b.join(),e),h=w;y.F(2);break;case 4:return y.return(Promise.reject(h))}})}
function gp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Io&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&xo("QUOTA_EXCEEDED",{dbName:zo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Io&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),xo("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),hp(a,!1,d,f,b,g.tag),wo(e)):hp(a,!0,d,f,b,g.tag)}
function hp(a,b,c,d,e,f){xo("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
p.getName=function(){return this.h.name};
function cp(a){this.h=a}
p=cp.prototype;p.add=function(a,b){return Xo(this.h.add(a,b))};
p.autoIncrement=function(){return this.h.autoIncrement};
p.clear=function(){return Xo(this.h.clear()).then(function(){})};
function ip(a,b,c){a.h.createIndex(b,c,{unique:!1})}
p.count=function(a){return Xo(this.h.count(a))};
function jp(a,b){return kp(a,{query:b},function(c){return c.delete().then(function(){return lp(c)})}).then(function(){})}
p.delete=function(a){return a instanceof IDBKeyRange?jp(this,a):Xo(this.h.delete(a))};
p.get=function(a){return Xo(this.h.get(a))};
p.index=function(a){try{return new mp(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Ko(a,this.h.name);throw b;}};
p.getName=function(){return this.h.name};
p.keyPath=function(){return this.h.keyPath};
function kp(a,b,c){a=a.h.openCursor(b.query,b.direction);return np(a).then(function(d){return Yo(d,c)})}
function ep(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Io;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function fp(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
ep.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Io("EXPLICIT_ABORT");};
ep.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new cp(a),this.i.set(a,b));return b};
function mp(a){this.h=a}
p=mp.prototype;p.count=function(a){return Xo(this.h.count(a))};
p.delete=function(a){return op(this,{query:a},function(b){return b.delete().then(function(){return lp(b)})})};
p.get=function(a){return Xo(this.h.get(a))};
p.keyPath=function(){return this.h.keyPath};
p.unique=function(){return this.h.unique};
function op(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return np(a).then(function(d){return Yo(d,c)})}
function pp(a,b){this.request=a;this.cursor=b}
function np(a){return Xo(a).then(function(b){return b?new pp(a,b):null})}
function lp(a){a.cursor.continue(void 0);return np(a.request)}
pp.prototype.delete=function(){return Xo(this.cursor.delete()).then(function(){})};
pp.prototype.getValue=function(){return this.cursor.value};
pp.prototype.update=function(a){return Xo(this.cursor.update(a))};function qp(a,b,c){return new Promise(function(d,e){function f(){r||(r=new $o(g.result,{closed:n}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Ld,k=c.blocking,l=c.lf,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&xo("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:zo(a)});var w=f(),x=new ep(g.transaction);
m&&m(w,function(y){return t.oldVersion<y&&t.newVersion>=y},x);
x.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){xo("IDB_UNEXPECTEDLY_CLOSED",{dbName:zo(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function rp(a,b,c){c=c===void 0?{}:c;return qp(a,b,c)}
function sp(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Ld)&&c.addEventListener("blocked",function(){e()}),g.yield(Wo(c),4);
if(g.h!=2)g.h=0,g.o=0;else throw f=Aa(g),Mo(f,a,"",-1);})}
;function tp(a,b){this.name=a;this.options=b;this.j=!0;this.D=this.o=0}
tp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return rp(a,b,c)};
tp.prototype.delete=function(a){a=a===void 0?{}:a;return sp(this.name,a)};
function up(a,b){return new Io("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function vp(a,b){if(!b)throw No("openWithToken",zo(a.name));return a.open()}
tp.prototype.open=function(){function a(){var f,g,h,k,l,m,n,r,t,w;return A(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",za(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var y=h=x.i,H=c.options,J=[],N=v(Object.keys(H.tb)),P=N.next();!P.done;P=N.next()){P=P.value;var va=H.tb[P],vb=va.Ke===void 0?Number.MAX_VALUE:va.Ke;!(y.h.version>=va.Bb)||y.h.version>=vb||y.h.objectStoreNames.contains(P)||J.push(P)}k=J;if(k.length===0){x.F(5);break}l=Object.keys(c.options.tb);
m=h.objectStoreNames();if(c.D<Cm("ytidb_reopen_db_retries",0))return c.D++,h.close(),wo(new Io("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<Cm("ytidb_remake_db_retries",1))){x.F(6);break}c.o++;return x.yield(c.delete(),7);case 7:return wo(new Io("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new Jo(m,l);case 5:return x.return(h);case 2:n=Aa(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.F(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=x.i;t=r.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw r.close(),c.j=!1,up(c,t);return x.return(r);case 8:throw b(),n instanceof
Error&&!T("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Mo(n,c.name,"",(w=c.options.version)!=null?w:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw up(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,lf:b,upgrade:this.options.upgrade};return this.h=d=a()};var wp=new tp("YtIdbMeta",{tb:{databases:{Bb:1}},upgrade:function(a,b){b(1)&&bp(a,"databases",{keyPath:"actualName"})}});
function xp(a,b){var c;return A(function(d){if(d.h==1)return d.yield(vp(wp,b),2);c=d.i;return d.return(ap(c,["databases"],{ja:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Xo(f.h.put(a,void 0)).then(function(){})})}))})}
function yp(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(vp(wp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function zp(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(vp(wp,b),2)):e.h!=3?(d=e.i,e.yield(ap(d,["databases"],{ja:!0,mode:"readonly"},function(f){c.length=0;return kp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return lp(g)})}),3)):e.return(c)})}
function Ap(a){return zp(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Bp(a,b,c){return zp(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Cp(a){var b,c;return A(function(d){if(d.h==1)return b=En("YtIdbMeta hasAnyMeta other"),d.yield(zp(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Dp,Ep=new function(){}(new function(){});
function Fp(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=oo();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Ao)f=/WebKit\/([0-9]+)/.exec(Hc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Hc()),f=!(f&&parseInt(f[1],10)>=602));if(f||Tc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(xp(d,Ep),4);case 4:return e.yield(yp("yt-idb-test-do-not-use",Ep),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function Gp(){if(Dp!==void 0)return Dp;ro=!0;return Dp=Fp().then(function(a){ro=!1;var b;if((b=no())!=null&&b.h){var c;b={hasSucceededOnce:((c=oo())==null?void 0:c.hasSucceededOnce)||a};var d;(d=no())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Hp(){return E("ytglobal.idbToken_")||void 0}
function Ip(){var a=Hp();return a?Promise.resolve(a):Gp().then(function(b){(b=b?Ep:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Jp=0;function Kp(a,b){Jp||(Jp=Nj.oa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Ip(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(Bp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.F(6);break}f=e[0];return h.yield(sp(f.actualName),7);case 7:return h.yield(yp(f.actualName,c),6);case 6:h.h=4;h.o=0;break;case 3:g=Aa(h),wo(g),d=!1;case 4:Nj.pa(Jp),Jp=0,d&&Kp(a,b),h.h=0}})}))}
function Lp(){var a;return A(function(b){return b.h==1?b.yield(Ip(),2):(a=b.i)?b.return(Cp(a)):b.return(!1)})}
new yj;function Mp(a){if(!Dn())throw a=new Io("AUTH_INVALID",{dbName:a}),wo(a),a;var b=En();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Np(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Ip(),2);case 2:g=m.i;if(!g)throw h=No("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),wo(h),h;yo(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Mp(a);za(m,3);return m.yield(xp(k,g),5);case 5:return m.yield(rp(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Aa(m),za(m,7),m.yield(yp(k.actualName,
g),9);case 9:m.h=8;m.o=0;break;case 7:Aa(m);case 8:throw l;}})}
function Op(a,b,c){c=c===void 0?{}:c;return Np(a,b,!1,c)}
function Pp(a,b,c){c=c===void 0?{}:c;return Np(a,b,!0,c)}
function Qp(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(Ip(),2);if(e.h!=3){c=e.i;if(!c)return e.return();yo(a);d=Mp(a);return e.yield(sp(d.actualName,b),3)}return e.yield(yp(d.actualName,c),0)})}
function Rp(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(sp(d.actualName,b),2):e.yield(yp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Sp(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(Ip(),2);if(d.h!=3){b=d.i;if(!b)return d.return();yo("LogsDatabaseV2");return d.yield(Ap(b),3)}c=d.i;return d.yield(Rp(c,a,b),0)})}
function Tp(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(Ip(),2);if(d.h!=3){c=d.i;if(!c)return d.return();yo(a);return d.yield(sp(a,b),3)}return d.yield(yp(a,c),0)})}
;function Up(a,b){tp.call(this,a,b);this.options=b;yo(a)}
z(Up,tp);function Vp(a,b){var c;return function(){c||(c=new Up(a,b));return c}}
Up.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Pp:Op)(a,b,Object.assign({},c))};
Up.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Tp:Qp)(this.name,a)};
function Wp(a,b){return Vp(a,b)}
;var Xp={},Yp=Wp("ytGcfConfig",{tb:(Xp.coldConfigStore={Bb:1},Xp.hotConfigStore={Bb:1},Xp),shared:!1,upgrade:function(a,b){b(1)&&(ip(bp(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),ip(bp(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Zp(a){return vp(Yp(),a)}
function $p(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:V()},g.yield(Zp(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(dp(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function aq(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},h.yield(Zp(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(dp(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function bq(a){var b,c;return A(function(d){return d.h==1?d.yield(Zp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(ap(b,["coldConfigStore"],{mode:"readwrite",ja:!0},function(e){return op(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function cq(a){var b,c;return A(function(d){return d.h==1?d.yield(Zp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(ap(b,["hotConfigStore"],{mode:"readwrite",ja:!0},function(e){return op(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function dq(){L.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ka(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
z(dq,L);dq.prototype.aa=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;L.prototype.aa.call(this)};function eq(){this.h=0;this.i=new dq}
function fq(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:S("RAW_HOT_CONFIG_GROUP")}
function gq(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.F(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Hp();if(!d){g.F(3);break}if(c){g.F(4);break}return g.yield(cq(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield($p(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function hq(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!T("start_client_gcf"))return h.F(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Hp())?c?h.F(4):h.yield(bq(d),5):h.F(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.F(0);g=c.configData;return h.yield(aq(c,b,g,d),0)})}
function iq(){if(!eq.h){var a=new eq;eq.h=a}a=eq.h;var b=V()-a.h;if(!(a.h!==0&&b<Cm("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=V());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
eq.prototype.o=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function jq(){return"INNERTUBE_API_KEY"in bm&&"INNERTUBE_API_VERSION"in bm}
function kq(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),oe:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),dd:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),sh:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),qe:S("INNERTUBE_CONTEXT_HL"),pe:S("INNERTUBE_CONTEXT_GL"),re:S("INNERTUBE_HOST_OVERRIDE")||"",te:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),se:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function lq(a){var b={client:{hl:a.qe,gl:a.pe,clientName:a.dd,clientVersion:a.innertubeContextClientVersion,configInfo:a.oe}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Dm();c.length>0&&(b.request={internalExperimentFlags:c});c=a.dd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=gn()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Bn())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&
(a=Cn())&&b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=iq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=S("INNERTUBE_CONTEXT");var g;if(T("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=v(Object.entries(pm(S("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=v(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function mq(a,b,c){c=c===void 0?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().jh:(a=kn(jn()),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var nq=typeof TextEncoder!=="undefined"?new TextEncoder:null,oq=nq?function(a){return nq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function pq(a,b){this.version=a;this.args=b}
pq.prototype.serialize=function(){return{version:this.version,args:this.args}};function qq(a,b){this.topic=a;this.h=b}
qq.prototype.toString=function(){return this.topic};var rq=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Pb;M.prototype.publish=M.prototype.gb;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",rq);var sq=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",sq);var tq=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",tq);var uq=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",uq);
D("ytPubsub2Pubsub2SkipSubKey",null);function vq(a,b){var c=wq();c&&c.publish.call(c,a.toString(),a,b)}
function xq(a){var b=yq,c=wq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(sq[d])try{if(f&&b instanceof qq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Bd){var l=new h;h.Bd=l.version}var m=h.Bd}catch(y){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var r=k.args,t=r.length;if(t>0){var w=Array(t);for(k=0;k<t;k++)w[k]=r[k];var x=w}else x=[];f=n.call(m,h,x)}catch(y){throw y.message="yt.pubsub2.Data.deserialize(): "+y.message,y;}}catch(y){throw y.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+y.message,y;}a.call(window,f)}catch(y){hm(y)}},uq[b.toString()]?E("yt.scheduler.instance")?Nj.oa(g):zm(g,0):g())});
sq[d]=!0;tq[b.toString()]||(tq[b.toString()]=[]);tq[b.toString()].push(d);return d}
function zq(){var a=Aq,b=xq(function(c){a.apply(void 0,arguments);Bq(b)});
return b}
function Bq(a){var b=wq();b&&(typeof a==="number"&&(a=[a]),Kb(a,function(c){b.unsubscribeByKey(c);delete sq[c]}))}
function wq(){return E("ytPubsub2Pubsub2Instance")}
;function Cq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&vq("meta_logging_csi_event",{timerName:a,Jh:b})}
;var Dq=void 0,Eq=void 0;function Fq(){Eq||(Eq=Bl(S("WORKER_SERIALIZATION_URL")));return Eq||void 0}
function Gq(){var a=Fq();Dq||a===void 0||(Dq=new Worker(ib(a),void 0));return Dq}
;var Hq=Cm("max_body_size_to_compress",5E5),Iq=Cm("min_body_size_to_compress",500),Jq=!0,Kq=0,Lq=0,Mq=Cm("compression_performance_threshold_lr",250),Nq=Cm("slow_compressions_before_abandon_count",4),Oq=!1,Pq=new Map,Qq=1,Rq=!0;function Sq(){if(typeof Worker==="function"&&Fq()&&!Oq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Pq.get(c.key);d&&(Tq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Pq.delete(c.key))}},b=Gq();
b&&(b.addEventListener("message",a),b.onerror=function(){Pq.clear()},Oq=!0)}}
function Uq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:V(),ticks:{},infos:{}};if(Jq)try{var g=Vq(b);if(g!=null&&(g>Hq||g<Iq))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!Rq||!T("initial_gzip_use_main_thread"))){Oq||Sq();var h=Gq();if(h&&!e){Pq.set(Qq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Qq});Qq++;return}}var k=Al(oq(b));Tq(k,f,a,c,d)}}catch(l){im(l),d(a,c)}else d(a,c)}
function Tq(a,b,c,d,e){Rq=!1;var f=V();b.ticks.gelc=f;Lq++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Mq&&(Kq++,T("abandon_compression_after_N_slow_zips")?Lq===Cm("compression_disable_point")&&Kq>Nq&&(Jq=!1):Jq=!1);Wq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Xq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=V(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Jq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Vq(g);if(h!=null&&(h>Hq||h<Iq))return a;c=b?{level:1}:void 0;f=Al(oq(g),c);var k=V();e.ticks.gelc=k;if(b){Lq++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Mq)if(Kq++,T("abandon_compression_after_N_slow_zips")||T("abandon_compression_after_N_slow_zips_lr")){b=Kq/Lq;var l=Nq/Cm("compression_disable_point");Lq>0&&Lq%Cm("compression_disable_point")===0&&b>=l&&(Jq=!1)}else Jq=!1;Wq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return im(m),a}}else return a}
function Vq(a){try{return(new Blob(a.split(""))).size}catch(b){return im(b),null}}
function Wq(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||Cq("gel_compression",a,{sampleRate:.1})}
;function Yq(a){a=Object.assign({},a);delete a.Authorization;var b=tg();if(b){var c=new Rj;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=bd(c.digest(),3)}return a}
;var Zq;function $q(){Zq||(Zq=new mo("yt.innertube"));return Zq}
function ar(a,b,c,d){if(d)return null;d=$q().get("nextId",!0)||1;var e=$q().get("requests",!0)||{};e[d]={method:a,request:b,authState:Yq(c),requestTime:Math.round(V())};$q().set("nextId",d+1,86400,!0);$q().set("requests",e,86400,!0);return d}
function br(a){var b=$q().get("requests",!0)||{};delete b[a];$q().set("requests",b,86400,!0)}
function cr(a){var b=$q().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(V())-d.requestTime<6E4)){var e=d.authState,f=Yq(mq(!1));Jg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),dr(a,d.method,e,{}));delete b[c]}}$q().set("requests",b,86400,!0)}}
;function er(a){this.Ub=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.lb=function(){};
this.now=Date.now;this.Eb=!1;var b;this.xd=(b=a.xd)!=null?b:100;var c;this.sd=(c=a.sd)!=null?c:1;var d;this.pd=(d=a.pd)!=null?d:2592E6;var e;this.od=(e=a.od)!=null?e:12E4;var f;this.rd=(f=a.rd)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.Zb=!!a.Zb;var h;this.Xb=(h=a.Xb)!=null?h:.1;var k;this.ic=(k=a.ic)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.lb&&(this.lb=a.lb);a.Eb&&(this.Eb=a.Eb);a.Ub&&(this.Ub=a.Ub);this.W=a.W;this.Ca=a.Ca;this.fa=a.fa;this.da=a.da;this.sendFn=a.sendFn;
this.Ic=a.Ic;this.Fc=a.Fc;fr(this)&&(!this.W||this.W("networkless_logging"))&&gr(this)}
function gr(a){fr(a)&&!a.Eb&&(a.h=!0,a.Zb&&Math.random()<=a.Xb&&a.fa.Od(a.V),hr(a),a.da.ta()&&a.Ob(),a.da.listen(a.Ic,a.Ob.bind(a)),a.da.listen(a.Fc,a.Sc.bind(a)))}
p=er.prototype;p.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(fr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.V).then(function(e){d.id=e;c.da.ta()&&ir(c,d)}).catch(function(e){ir(c,d);
jr(c,e)})}else this.sendFn(a,b)};
p.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(fr(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.da.ta()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.fa.set(e,d.V).catch(function(l){jr(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
jr(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
p.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(fr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.fa.kb(d.id,c.V):e=!0;c.da.ab&&c.W&&c.W("vss_network_hint")&&c.da.ab(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.V).then(function(g){d.id=g;e&&c.fa.kb(d.id,c.V)}).catch(function(g){jr(c,g)})}else this.sendFn(a,b,void 0,!0)};
p.Ob=function(){var a=this;if(!fr(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.oa(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.fa.Zc("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(ir(a,b),3):(a.Sc(),c.return());a.i&&(a.i=0,a.Ob());c.h=0})},this.xd))};
p.Sc=function(){this.Ca.pa(this.i);this.i=0};
function ir(a,b){var c;return A(function(d){switch(d.h){case 1:if(!fr(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.F(2);break}return d.yield(a.fa.xe(b.id,a.V),3);case 3:(c=d.i)||a.lb(Error("The request cannot be found in the database."));case 2:if(kr(a,b,a.pd)){d.F(4);break}a.lb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.F(5);break}return d.yield(a.fa.kb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=lr(a,
b));if(!b){d.F(0);break}if(!b.skipRetry||b.id===void 0){d.F(8);break}return d.yield(a.fa.kb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function lr(a,b){if(!fr(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.h){case 1:g=mr(f);(h=nr(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.ic)){m.F(2);break}if(!a.da.lc){m.F(3);break}return m.yield(a.da.lc(),3);case 3:if(a.da.ta()){m.F(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.F(6);
break}return m.yield(a.fa.Jc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.ic)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.F(8);break}return b.sendCount<a.sd?m.yield(a.fa.Jc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.fa.kb(b.id,a.V),8);case 12:a.Ca.oa(function(){a.da.ta()&&a.Ob()},a.rd);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.F(2):h.yield(a.fa.kb(b.id,a.V),2);a.da.ab&&a.W&&a.W("vss_network_hint")&&a.da.ab(!0);d(e,f);h.h=0})};
return b}
function kr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function hr(a){if(!fr(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.Zc("QUEUED",a.V).then(function(b){b&&!kr(a,b,a.od)?a.Ca.oa(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.F(2):c.yield(a.fa.Jc(b.id,a.V),2);hr(a);c.h=0})}):a.da.ta()&&a.Ob()})}
function jr(a,b){a.Ed&&!a.da.ta()?a.Ed(b):a.handleError(b)}
function fr(a){return!!a.V||a.Ub}
function mr(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function nr(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var or;
function pr(){if(or)return or();var a={};or=Wp("LogsDatabaseV2",{tb:(a.LogsRequestsStore={Bb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&bp(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),ip(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return or()}
;function qr(a){return vp(pr(),a)}
function rr(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(qr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(dp(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=V();sr(c);return g.return(f)})}
function tr(a,b){var c,d,e,f,g,h,k,l;return A(function(m){if(m.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(qr(b),2);if(m.h!=3)return d=m.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),k="prev",T("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(ap(d,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(n){return op(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),a==="NEW"&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=V();sr(c);return m.return(l)})}
function ur(a,b){var c;return A(function(d){if(d.h==1)return d.yield(qr(b),2);c=d.i;return d.return(ap(c,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Xo(f.h.put(g,void 0)).then(function(){return g})})}))})}
function vr(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield(qr(b),2);e=f.i;return f.return(ap(e,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),Xo(h.h.put(k,void 0)).then(function(){return k})):Ro.resolve(void 0)})}))})}
function wr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(qr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function xr(a){var b,c;return A(function(d){if(d.h==1)return d.yield(qr(a),2);b=d.i;c=V()-2592E6;return d.yield(ap(b,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){return kp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return lp(f)})})}),0)})}
function yr(){A(function(a){return a.yield(Sp(),0)})}
function sr(a){T("nwl_csi_killswitch")||Cq("networkless_performance",a,{sampleRate:1})}
;var zr={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506};var Ar={},Br=Wp("ServiceWorkerLogsDatabase",{tb:(Ar.SWHealthLog={Bb:1},Ar),shared:!0,upgrade:function(a,b){b(1)&&ip(bp(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Cr(a){return vp(Br(),a)}
function Dr(a){var b,c;A(function(d){if(d.h==1)return d.yield(Cr(a),2);b=d.i;c=V()-2592E6;return d.yield(ap(b,["SWHealthLog"],{mode:"readwrite",ja:!0},function(e){return kp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return lp(f)})})}),0)})}
function Er(a){var b;return A(function(c){if(c.h==1)return c.yield(Cr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Fr={},Gr=0;function Hr(a){var b=new Image,c=""+Gr++;Fr[c]=b;b.onload=b.onerror=function(){delete Fr[c]};
b.src=a}
;var Ir;function Jr(){Ir||(Ir=new mo("yt.offline"));return Ir}
function Kr(a){if(T("offline_error_handling")){var b=Jr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Jr().set("errors",b,2592E3,!0)}}
;function Lr(){this.h=new Map;this.i=!1}
function Mr(){if(!Lr.h){var a=E("yt.networkRequestMonitor.instance")||new Lr;D("yt.networkRequestMonitor.instance",a);Lr.h=a}return Lr.h}
Lr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Lr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Lr.prototype.removeParams=function(a){return a.split("?")[0]};
Lr.prototype.removeParams=Lr.prototype.removeParams;Lr.prototype.isEndpointCFR=Lr.prototype.isEndpointCFR;Lr.prototype.requestComplete=Lr.prototype.requestComplete;Lr.getInstance=Mr;function Nr(){hi.call(this);var a=this;this.j=!1;this.i=Mj();this.i.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=Jr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;hm(d)}Jr().set("errors",{},2592E3,!0)}}})}
z(Nr,hi);function Or(){if(!Nr.h){var a=E("yt.networkStatusManager.instance")||new Nr;D("yt.networkStatusManager.instance",a);Nr.h=a}return Nr.h}
p=Nr.prototype;p.ta=function(){return this.i.ta()};
p.ab=function(a){this.i.i=a};
p.ee=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
p.Vd=function(){this.j=!0};
p.listen=function(a,b){return this.i.listen(a,b)};
p.lc=function(a){a=Kj(this.i,a);a.then(function(b){T("use_cfr_monitor")&&Mr().requestComplete("generate_204",b)});
return a};
Nr.prototype.sendNetworkCheckRequest=Nr.prototype.lc;Nr.prototype.listen=Nr.prototype.listen;Nr.prototype.enableErrorFlushing=Nr.prototype.Vd;Nr.prototype.getWindowStatus=Nr.prototype.ee;Nr.prototype.networkStatusHint=Nr.prototype.ab;Nr.prototype.isNetworkAvailable=Nr.prototype.ta;Nr.getInstance=Or;function Pr(a){a=a===void 0?{}:a;hi.call(this);var b=this;this.i=this.u=0;this.j=Or();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Qr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Qr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){ii(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ii(b,"publicytnetworkstatus-offline")})))}
z(Pr,hi);Pr.prototype.ta=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Pr.prototype.ab=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Pr.prototype.lc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&Mr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ab(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function Qr(a,b){a.rateLimit?a.i?(Nj.pa(a.u),a.u=Nj.oa(function(){a.o!==b&&(ii(a,b),a.o=b,a.i=V())},a.rateLimit-(V()-a.i))):(ii(a,b),a.o=b,a.i=V()):ii(a,b)}
;var Vr;function Wr(){var a=er.call;Vr||(Vr=new Pr({xh:!0,qh:!0}));a.call(er,this,{fa:{Od:xr,kb:wr,Zc:tr,xe:ur,Jc:vr,set:rr},da:Vr,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;im(new U(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else hm(b)},
lb:im,sendFn:Xr,now:V,Ed:Kr,Ca:lo(),Ic:"publicytnetworkstatus-online",Fc:"publicytnetworkstatus-offline",Zb:!0,Xb:.1,ic:Cm("potential_esf_error_limit",10),W:T,Eb:!(Dn()&&Yr())});this.j=new yj;T("networkless_immediately_drop_all_requests")&&yr();Tp("LogsDatabaseV2")}
z(Wr,er);function Zr(){var a=E("yt.networklessRequestController.instance");a||(a=new Wr,D("yt.networklessRequestController.instance",a),T("networkless_logging")&&Ip().then(function(b){a.V=b;gr(a);a.j.resolve();a.Zb&&Math.random()<=a.Xb&&a.V&&Dr(a.V);T("networkless_immediately_drop_sw_health_store")&&$r(a)}));
return a}
Wr.prototype.writeThenSend=function(a,b){b||(b={});b=as(a,b);Dn()||(this.h=!1);er.prototype.writeThenSend.call(this,a,b)};
Wr.prototype.sendThenWrite=function(a,b,c){b||(b={});b=as(a,b);Dn()||(this.h=!1);er.prototype.sendThenWrite.call(this,a,b,c)};
Wr.prototype.sendAndWrite=function(a,b){b||(b={});b=as(a,b);Dn()||(this.h=!1);er.prototype.sendAndWrite.call(this,a,b)};
Wr.prototype.awaitInitialization=function(){return this.j.promise};
function $r(a){var b;A(function(c){if(!a.V)throw b=No("clearSWHealthLogsDb"),b;return c.return(Er(a.V).catch(function(d){a.handleError(d)}))})}
function Xr(a,b,c,d){d=d===void 0?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&bs(a,b);if(T("use_request_time_ms_header"))b.headers&&sm(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Hm(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Hm(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new ab({url:a});if(k.j&&k.i||k.o){var l=Yb(Zb(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(hc),r=fc(a,0,"ri",n);if(r<0)var t=null;else{var w=a.indexOf("&",r);if(w<0||w>n)w=n;t=decodeURIComponent(a.slice(r+3,w!==-1?w:0).replace(/\+/g," "))}m=t!=="1"}var x=!m;break b}}catch(H){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(H){}y=!1}c=y?!0:!1}else c=
!1;c||Hr(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Uq(a,b.postBody,b,Lm,d)):Uq(a,JSON.stringify(b.postParams),b,Km,d):Lm(a,b)}
function as(a,b){T("use_event_time_ms_header")&&sm(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(V())));return b}
function bs(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Mr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Mr().requestComplete(a,!0);d(e,f)}}
function Yr(){return $b(document.location.toString())!=="www.youtube-nocookie.com"}
;var cs=!1,ds=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:cs};D("ytNetworklessLoggingInitializationOptions",ds);function es(){var a;A(function(b){if(b.h==1)return b.yield(Ip(),2);a=b.i;if(!a||!Dn()&&!T("nwl_init_require_datasync_id_killswitch")||!Yr())return b.F(0);cs=!0;ds.isNwlInitialized=cs;return b.yield(Zr().awaitInitialization(),0)})}
;function gs(a){var b=this;this.config_=null;a?this.config_=a:jq()&&(this.config_=kq());Gn(function(){cr(b)},5E3)}
gs.prototype.isReady=function(){!this.config_&&jq()&&(this.config_=kq());return!!this.config_};
function dr(a,b,c,d){function e(w){w=w===void 0?!1:w;var x;if(d.retry&&h!="www.youtube-nocookie.com"&&(w||T("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(x=ar(b,c,l,k)),x)){var y=g.onSuccess,H=g.onFetchSuccess;g.onSuccess=function(P,va){br(x);y(P,va)};
c.onFetchSuccess=function(P,va){br(x);H(P,va)}}try{if(w&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Zr().writeThenSend(t,g):Zr().sendAndWrite(t,g);
else if(d.compress){var J=!d.networklessOptions.writeThenSend;if(g.postBody){var N=g.postBody;typeof N!=="string"&&(N=JSON.stringify(g.postBody));Uq(t,N,g,Lm,J)}else Uq(t,JSON.stringify(g.postParams),g,Km,J)}else T("web_all_payloads_via_jspb")?Lm(t,g):Km(t,g)}catch(P){if(P.name==="InvalidAccessError")x&&(br(x),x=0),im(Error("An extension is blocking network request."));else throw P;}x&&Gn(function(){cr(a)},5E3)}
!S("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&im(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);hm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(w,x){if(d.onSuccess)d.onSuccess(x)},
onFetchSuccess:function(w){if(d.onSuccess)d.onSuccess(w)},
onError:function(w,x){if(d.onError)d.onError(x)},
onFetchError:function(w){if(d.onError)d.onError(w)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.re)&&(h=f);var k=a.config_.te||!1,l=mq(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,n={alt:"json"},r=!(!a.config_.se||!f);r=r&&f.startsWith("Bearer");T("web_yt_net_omit_api_key")&&(r=!0);r||(n.key=a.config_.innertubeApiKey);
var t=rm(""+h+m,n||{},!0);(E("ytNetworklessLoggingInitializationOptions")?ds.isNwlInitialized:cs)?Gp().then(function(w){e(w)}):e(!1)}
;var hs=0,is=Vc?"webkit":Uc?"moz":Sc?"ms":Rc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++hs});var js={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ks(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in js||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function ls(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
ks.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ks.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ks.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Fg=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",Fg);var ms=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",ms);
function ns(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Eg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&Jg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ps(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ns(a,b,c,d);if(e)return e;e=++ms.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new ks(h);if(!Sg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new ks(h);
h.currentTarget=a;return c.call(a,h)};
g=gm(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),qs()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Fg[e]=[a,b,c,g,d];return e}
function rs(a){a&&(typeof a=="string"&&(a=[a]),Kb(a,function(b){if(b in Fg){var c=Fg[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?qs()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Fg[b]}}))}
var qs=wi(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function ss(a){this.H=a;this.h=null;this.o=0;this.B=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=ps(window,"mousemove",Wa(this.Y,this));a=Wa(this.R,this);typeof a==="function"&&(a=gm(a));this.Z=window.setInterval(a,25)}
Za(ss,L);ss.prototype.Y=function(a){a.h===void 0&&ls(a);var b=a.h;a.i===void 0&&ls(a);this.h=new Bg(b,a.i)};
ss.prototype.R=function(){if(this.h){var a=V();if(this.o!=0){var b=this.B,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.H();this.u=d}this.o=a;this.B=this.h;this.j=(this.j+1)%4}};
ss.prototype.aa=function(){window.clearInterval(this.Z);rs(this.U)};var ts={};
function us(a){var b=a===void 0?{}:a;a=b.Ge===void 0?!1:b.Ge;b=b.Wd===void 0?!0:b.Wd;if(E("_lact",window)==null){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&vs();ps(document,"keydown",vs);ps(document,"keyup",vs);ps(document,"mousedown",vs);ps(document,"mouseup",vs);a?ps(window,"touchmove",function(){ws("touchmove",200)},{passive:!0}):(ps(window,"resize",function(){ws("resize",200)}),b&&ps(window,"scroll",function(){ws("scroll",200)}));
new ss(function(){ws("mouse",100)});
ps(document,"touchstart",vs,{passive:!0});ps(document,"touchend",vs,{passive:!0})}}
function ws(a,b){ts[a]||(ts[a]=!0,Nj.oa(function(){vs();ts[a]=!1},b))}
function vs(){E("_lact",window)==null&&us();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function xs(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var ys=C.ytPubsubPubsubInstance||new M,zs=C.ytPubsubPubsubSubscribedKeys||{},As=C.ytPubsubPubsubTopicToKeys||{},Bs=C.ytPubsubPubsubIsSynchronous||{};function Cs(a,b){var c=Ds();if(c&&b){var d=c.subscribe(a,function(){function e(){zs[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Bs[a]?e():zm(e,0)}catch(g){hm(g)}},void 0);
zs[d]=!0;As[a]||(As[a]=[]);As[a].push(d);return d}return 0}
function Es(a){var b=Ds();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Kb(a,function(c){b.unsubscribeByKey(c);delete zs[c]}))}
function Fs(a,b){var c=Ds();c&&c.publish.apply(c,arguments)}
function Gs(a){var b=Ds();if(b)if(b.clear(a),a)Hs(a);else for(var c in As)Hs(c)}
function Ds(){return C.ytPubsubPubsubInstance}
function Hs(a){As[a]&&(a=As[a],Kb(a,function(b){zs[b]&&delete zs[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Pb;M.prototype.publish=M.prototype.gb;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",ys);D("ytPubsubPubsubTopicToKeys",As);D("ytPubsubPubsubIsSynchronous",Bs);D("ytPubsubPubsubSubscribedKeys",zs);var Is=Symbol("injectionDeps");function Js(a){this.name=a}
Js.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Ks(a){this.key=a}
function Ls(){this.i=new Map;this.j=new Map;this.h=new Map}
function Ms(a,b){a.i.set(b.kc,b);var c=a.j.get(b.kc);if(c)try{c.Fh(a.resolve(b.kc))}catch(d){c.Dh(d)}}
Ls.prototype.resolve=function(a){return a instanceof Ks?Ns(this,a.key,[],!0):Ns(this,a,[])};
function Ns(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Ad!==void 0)var e=d.Ad;else if(d.tf)e=d[Is]?Os(a,d[Is],c):[],e=d.tf.apply(d,ka(e));else if(d.zd){e=d.zd;var f=e[Is]?Os(a,e[Is],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ka(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Ih||a.h.set(b,e);return e}
function Os(a,b,c){return b?b.map(function(d){return d instanceof Ks?Ns(a,d.key,c,!0):Ns(a,d,c)}):[]}
;var Ps;function Qs(){Ps||(Ps=new Ls);return Ps}
;var Rs=window;function Ss(){var a,b;return"h5vcc"in Rs&&((a=Rs.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Rs.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Rs&&Rs.performance.mark&&Rs.performance.measure?2:0}
function Ts(a){var b=Ss();switch(b){case 1:Rs.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Rs.performance.mark(a+"-start");break;case 0:break;default:Bb(b,"unknown trace type")}}
function Us(a){var b=Ss();switch(b){case 1:Rs.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Rs.performance.mark(c);Rs.performance.measure(a,b,c);break;case 0:break;default:Bb(b,"unknown trace type")}}
;var Vs=T("web_enable_lifecycle_monitoring")&&Ss()!==0,Ws=T("web_enable_lifecycle_monitoring");function Xs(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?lo():d;this.j=c;this.scheduler=d;this.i=new yj;this.h=a;for(a={Xa:0};a.Xa<this.h.length;a={hc:void 0,Xa:a.Xa},a.Xa++)a.hc=this.h[a.Xa],c=function(e){return function(){e.hc.xc();b.h[e.Xa].jc=!0;b.h.every(function(f){return f.jc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.hc),d=this.scheduler.Va(c,d),this.h[a.Xa]=Object.assign({},a.hc,{xc:c,
jobId:d})}
function Ys(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.jc||(a.scheduler.pa(c.jobId),a.scheduler.Va(c.xc,10))}
Xs.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.jc||this.scheduler.pa(b.jobId),b.jc=!0;this.i.resolve()};
Xs.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function Zs(a){this.state=a;this.plugins=[];this.o=void 0;this.B={};Vs&&Ts(this.state)}
p=Zs.prototype;p.install=function(a){this.plugins.push(a);return this};
p.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
p.transition=function(a,b){var c=this;Vs&&Us(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Ys(this.j),this.j=void 0);$s(this,a,b);this.state=a;Vs&&Ts(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(at(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function at(a,b){var c=b.filter(function(e){return bt(a,e)===10}),d=b.filter(function(e){return bt(a,e)!==10});
return a.B.Hh?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.Ne.apply(a,[c].concat(ka(e))),2);a.ud.apply(a,[d].concat(ka(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Oe.apply(a,[c].concat(ka(e)));a.ud.apply(a,[d].concat(ka(e)))}}
p.Oe=function(a){for(var b=B.apply(1,arguments),c=lo(),d=v(a),e=d.next(),f={};!e.done;f={Gb:void 0},e=d.next())f.Gb=e.value,c.Ab(function(g){return function(){ct(g.Gb.name);g.Gb.callback.apply(g.Gb,ka(b));dt(g.Gb.name)}}(f))};
p.Ne=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=lo(),d=v(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.F(0);f.pb=e.value;f.Sb=void 0;g=function(k){return function(){ct(k.pb.name);var l=k.pb.callback.apply(k.pb,ka(b));typeof(l==null?void 0:l.then)==="function"?k.Sb=l.then(function(){dt(k.pb.name)}):dt(k.pb.name)}}(f);
c.Ab(g);return f.Sb?h.yield(f.Sb,3):h.F(3)}f={pb:void 0,Sb:void 0};e=d.next();return h.F(2)})};
p.ud=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{xc:function(){ct(e.name);e.callback.apply(e,ka(b));dt(e.name)},
priority:bt(c,e)}});
d.length&&(this.j=new Xs(d))};
function bt(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function ct(a){Vs&&a&&Ts(a)}
function dt(a){Vs&&a&&Us(a)}
function $s(a,b,c){Ws&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(Zs.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function et(a){Zs.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.D},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var ft;z(et,Zs);et.prototype.i=function(a,b){var c=this;this.h=Gn(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
et.prototype.D=function(a,b){this.h&&(Nj.pa(this.h),this.h=null);a(b==null?void 0:b.event)};
function gt(){ft||(ft=new et);return ft}
;var ht=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return ht});function jt(){this.store={};this.h={}}
jt.prototype.storePayload=function(a,b){a=kt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);T("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
jt.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=lt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ka(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ka(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ka(this.smartExtractMatchingEntries(a))));return c};
jt.prototype.extractMatchingEntries=function(a){a=lt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ka(this.store[a[c]])),delete this.store[a[c]]);return b};
jt.prototype.getSequenceCount=function(a){a=lt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function lt(a,b){var c=kt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&kt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(mt(b.auth,g[0])){var h=b.isJspb;mt(h===void 0?"undefined":h?"true":"false",g[1])&&mt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),mt(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function mt(a,b){return a===void 0||a==="undefined"?!0:a===b}
jt.prototype.getSequenceCount=jt.prototype.getSequenceCount;jt.prototype.extractMatchingEntries=jt.prototype.extractMatchingEntries;jt.prototype.smartExtractMatchingEntries=jt.prototype.smartExtractMatchingEntries;jt.prototype.storePayload=jt.prototype.storePayload;function kt(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function nt(a,b){if(a)return a[b.name]}
;var ot=Cm("initial_gel_batch_timeout",2E3),pt=Cm("gel_queue_timeout_max_ms",6E4),qt=Cm("gel_min_batch_size",5),rt=void 0;function st(){this.o=this.h=this.i=0;this.j=!1}
var tt=new st,ut=new st,vt=new st,wt=new st,xt,zt=!0,At=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",At);var Bt={};function Ct(){var a=E("yt.logging.ims");a||(a=new jt,D("yt.logging.ims",a));return a}
function Dt(a,b){if(a.endpoint==="log_event"){Et();var c=Ft(a),d=Gt(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=zr[d||""];var f,g,h,k=Qs().resolve(new Ks(eq))==null?void 0:(f=fq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!T("web_payload_policy_disabled_killswitch"))return;k=Ht(e.tier);if(k===400){It(a,b);return}}Bt[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};Ct().storePayload(e,a.payload);Jt(b,c,e,d==="gelDebuggingEvent")}}
function Jt(a,b,c,d){function e(){Kt({writeThenSend:!0},T("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(rt=new a);a=Cm("tvhtml5_logging_max_batch_ads_fork")||Cm("tvhtml5_logging_max_batch")||Cm("web_logging_max_batch")||100;var g=V(),h=Lt(f,c.tier),k=h.o;d&&(h.j=!0);d=0;c&&(d=Ct().getSequenceCount(c));d>=1E3?e():d>=a?xt||(xt=Mt(function(){e();xt=void 0},0)):g-k>=10&&(Nt(f,c.tier),h.o=g)}
function It(a,b){if(a.endpoint==="log_event"){T("more_accurate_gel_parser")&&Ct().storePayload({isJspb:!1},a.payload);Et();var c=Ft(a),d=new Map;d.set(c,[a.payload]);var e=Gt(a.payload)||"";b&&(rt=new b);return new xi(function(f,g){rt&&rt.isReady()?Ot(d,rt,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Ft(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);At[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Kt(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new xi(function(e,f){var g=Lt(c,d),h=g.j;g.j=!1;Pt(g.i);Pt(g.h);g.h=0;rt&&rt.isReady()?d===void 0&&T("enable_web_tiered_gel")?Qt(e,f,a,b,c,300,h):Qt(e,f,a,b,c,d,h):(Nt(c,d),e())})}
function Qt(a,b,c,d,e,f,g){var h=rt;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=T("enable_web_tiered_gel")?Ct().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Ct().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(Bt)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?Ct().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Ct().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete Bt[l];Ot(k,h,a,b,c,!1,g)}
function Nt(a,b){function c(){Kt({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Lt(a,b),e=d===wt||d===vt?5E3:pt;T("web_gel_timeout_cap")&&!d.h&&(e=Mt(function(){c()},e),d.h=e);
Pt(d.i);e=S("LOGGING_BATCH_TIMEOUT",Cm("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&zt&&(e=ot);e=Mt(function(){Cm("gel_min_batch_size")>0?Ct().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=qt&&c():c()},e);
d.i=e}
function Ot(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(V()),k=a.size,l=(g===void 0?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var m=a.next();for(g={};!m.done;g={Ec:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Hc:void 0,Gc:void 0},m=a.next()){var n=v(m.value);m=n.next().value;n=n.next().value;g.batchRequest=Lg({context:lq(b.config_||kq())});if(!Pa(n)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=At[m])&&
Rt(g.batchRequest,m,n);delete At[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";St(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.Hc=function(r){T("start_client_gcf")&&Nj.oa(function(){return A(function(t){return t.yield(Tt(r),0)})});
k--;k||c()};
g.Ec=0;g.Gc=function(r){return function(){r.Ec++;if(e.bypassNetworkless&&r.Ec===1)try{dr(b,l,r.batchRequest,Ut({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Hc,r.Gc,f)),zt=!1}catch(t){hm(t),d()}k--;k||c()}}(g);
try{dr(b,l,g.batchRequest,Ut(e,g.dangerousLogToVisitorSession,g.Hc,g.Gc,f)),zt=!1}catch(r){hm(r),d()}}}
function Ut(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,lh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};Vt()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function St(a,b,c){Vt()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),cm("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Rt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Et(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=Bm("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(ht=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",ht),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Vt(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Mt(a,b){return T("transport_use_scheduler")===!1?zm(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?Gn(function(){if(gt().currentState==="none")a();else{var c={};gt().install((c.none={callback:a},c))}},b):Gn(a,b)}
function Pt(a){T("transport_use_scheduler")?Nj.pa(a):window.clearTimeout(a)}
function Tt(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=nt(d,Fl),g=(f=d)==null?void 0:f.hotHashData,h=nt(d,El),l=(k=d)==null?void 0:k.coldHashData,(m=Qs().resolve(new Ks(eq)))?g?e?n.yield(gq(m,g,e),2):n.yield(gq(m,g),2):n.F(2):n.return()):l?h?n.yield(hq(m,l,h),0):n.yield(hq(m,l),0):n.F(0)})}
function Lt(a,b){b=b===void 0?200:b;return a?b===300?wt:ut:b===300?vt:tt}
function Gt(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,zr[b])return b}
function Ht(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Wt=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Wt);
function Xt(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=xs();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Wt[b]=b in Wt?Wt[b]+1:0,a.sequence={index:Wt[b],groupKey:b},d.endOfSequence&&delete Wt[d.sequenceGroup]);(d.sendIsolatedPayload?It:Dt)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function vo(a,b,c){c=c===void 0?{}:c;var d=gs;S("ytLoggingEventsDefaultDisabled",!1)&&gs===gs&&(d=null);Xt(a,b,d,c)}
;function Yt(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var Zt=new Set,$t=0,au=0,bu=0,cu=[],du=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function uo(a){eu(a)}
function fu(a){eu(a,"WARNING")}
function gu(a){a instanceof Error?eu(a):(a=Qa(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",fu(a))}
function eu(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!($t>=5))){d=cu;var k=Sb(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(n=cn(a.args[r],"params."+r,c,n),
n>=500);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(r in t){if(t[r]){var w="params."+r,x=en(t[r]);c[w]=x;n+=w.length+x.length;if(n>500)break}}else c.params=en(t)}if(d.length)for(r=0;r<d.length&&!(n=cn(d[r],"params.context."+r,c,n),n>=500);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=
r.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=Zm();c=v(a.Ra);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.yh)){a=d.weight;break a}a=v(a.Oa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=v(Um);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.fc[r.name])for(e=v(c.fc[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};
for(m=0;m<e.length;m++)f[e[m]]=d[m+1],r.params["params.error."+e[m]]=d[m+1];r.message=c.Cc(f);break}r.params||(r.params={});a=Zm();r.params["params.errorServiceSignature"]="msg="+a.Ra.length+"&cb="+a.Oa.length;r.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Og(Pg,"sample")).constructor!==Og&&(r.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&
window.yterr(r);if(r.sampleWeight!==0&&!Zt.has(r.message)){if(g&&T("web_enable_error_204"))hu(b===void 0?"ERROR":b,r);else{b=b===void 0?"ERROR":b;b==="ERROR"?($m.gb("handleError",r),T("record_app_crashed_web")&&bu===0&&r.sampleWeight===1&&(bu++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),vo("appCrashed",g)),au++):b==="WARNING"&&$m.gb("handleWarning",r);if(T("kevlar_gel_error_routing")){g=
b;h=h===void 0?{}:h;b:{a=v(du);for(c=a.next();!c.done;c=a.next())if(Bo(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,
sampleWeight:r.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];S("FEXP_EXPERIMENTS")&&(h.experimentIds=S("FEXP_EXPERIMENTS"));d=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!dm("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=v(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=S("SERVER_NAME");e=S("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(vo("clientError",h),(g==="ERROR"||T("errors_flush_gel_always_killswitch"))&&Kt(void 0,void 0,!1))}T("suppress_error_204_logging")||hu(b,r)}try{Zt.add(r.message)}catch(y){}$t++}}}
function hu(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Lm(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function iu(a){var b=B.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ka(b))}
;function ju(){this.register=new Map}
function ku(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Ch("ABORTED")}
ju.prototype.clear=function(){ku(this);this.register.clear()};
var lu=new ju;var mu=Date.now().toString();
function nu(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(mu)for(a=1,b=0;b<mu.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^mu.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ou,pu=C.ytLoggingDocDocumentNonce_;pu||(pu=nu(),D("ytLoggingDocDocumentNonce_",pu));ou=pu;function qu(a){this.h=a}
p=qu.prototype;p.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
p.getAsJspb=function(){var a=new Hl;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&pf(a,2,re(this.h.veType)),this.h.veCounter!==void 0&&pf(a,6,re(this.h.veCounter)),this.h.elementIndex!==void 0&&pf(a,3,re(this.h.elementIndex)),this.h.isCounterfactual&&pf(a,5,ne(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();Cf(a,Hl,7,b)}this.h.youtubeData!==void 0&&Cf(a,Gl,8,this.h.jspbYoutubeData);return a};
p.toString=function(){return JSON.stringify(this.getAsJson())};
p.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
p.getLoggingDirectives=function(){return this.h.loggingDirectives};function ru(a){return S("client-screen-nonce-store",{})[a===void 0?0:a]}
function su(a,b){b=b===void 0?0:b;var c=S("client-screen-nonce-store");c||(c={},cm("client-screen-nonce-store",c));c[b]=a}
function tu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function uu(a){return S(tu(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",uu);function vu(){var a=S("csn-to-ctt-auth-info");a||(a={},cm("csn-to-ctt-auth-info",a));return a}
function wu(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function xu(a){a=ru(a===void 0?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",xu);function yu(a,b,c){var d=vu();(c=xu(c))&&delete d[c];b&&(d[a]=b)}
function zu(a){return vu()[a]}
D("yt_logging_screen.getCttAuthInfo",zu);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==ru(c)||b!==S(tu(c)))if(yu(a,d,c),su(a,c),cm(tu(c),b),b=function(){setTimeout(function(){a&&vo("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ou,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Au(){var a=Kg(Bu),b;return(new xi(function(c,d){a.onSuccess=function(e){ym(e)?c(new Cu(e)):d(new Du("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Du("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Du("Request timed out","net.timeout",e))};
b=Lm("//googleads.g.doubleclick.net/pagead/id",a)})).nc(function(c){if(c instanceof Ei){var d;
(d=b)==null||d.abort()}return Ci(c)})}
function Du(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
z(Du,$a);function Cu(a){this.xhr=a}
;function Eu(){this.h=0;this.i=null}
Eu.prototype.then=function(a,b,c){return this.h===1&&a?(a=a.call(c,this.i))&&typeof a.then==="function"?a:Fu(a):this.h===2&&b?(a=b.call(c,this.i))&&typeof a.then==="function"?a:Gu(a):this};
Eu.prototype.getValue=function(){return this.i};
Eu.prototype.isRejected=function(){return this.h==2};
Eu.prototype.$goog_Thenable=!0;function Gu(a){var b=new Eu;a=a===void 0?null:a;b.h=2;b.i=a===void 0?null:a;return b}
function Fu(a){var b=new Eu;a=a===void 0?null:a;b.h=1;b.i=a===void 0?null:a;return b}
;function Hu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:sm(a)?"same-origin":"cors",credentials:sm(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Iu(){return rg()||(Xc||Yc)&&Bo("applewebkit")&&!Bo("version")&&(!Bo("safari")||Bo("gsa/"))||Wc&&Bo("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function Ju(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Ll)if(Ll[d]==c.embeddedPlayerMode){b=Ll[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Ku(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Lu;this.isTimeout=a instanceof Du&&a.errorCode=="net.timeout";this.isCanceled=a instanceof Ei}
z(Ku,$a);Ku.prototype.name="BiscottiError";function Lu(){$a.call(this,"Biscotti ID is missing from server")}
z(Lu,$a);Lu.prototype.name="BiscottiMissingError";var Bu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Mu=null;function Nu(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Iu())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if(Ig(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Ju(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Wl(){var a=Nu();if(a!==void 0)return Ci(a);Mu||(Mu=Au().then(Ou).nc(function(b){return Pu(2,b)}));
return Mu}
function Ou(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Lu;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Lu;a=a.id;Xl(a);Mu=Fu(a);Qu(18E5,2);return a}
function Pu(a,b){b=new Ku(b);Xl("");Mu=Gu(b);a>0&&Qu(12E4,a-1);throw b;}
function Qu(a,b){zm(function(){Au().then(Ou,function(c){return Pu(b,c)}).nc(vi)},a)}
function Ru(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Wl()}catch(b){return Ci(b)}}
;var yb=ha(["data-"]);function Su(a){a&&(a.dataset?a.dataset[Tu()]="true":Ab(a))}
function Uu(a){return a?a.dataset?a.dataset[Tu()]:a.getAttribute("data-loaded"):null}
var Vu={};function Tu(){return Vu.loaded||(Vu.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Wu(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Kg(b);this.assets=a.assets||{};this.attrs=a.attrs||Kg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Wu.prototype.clone=function(){var a=new Wu,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Oa(c)=="object"?a[b]=Kg(c):a[b]=c}return a};var Xu=["share/get_share_panel"],Yu=["share/get_web_player_share_panel"],Zu=["feedback"],$u=["notification/modify_channel_preference"],av=["browse/edit_playlist"],bv=["subscription/subscribe"],cv=["subscription/unsubscribe"];var dv=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",dv);function ev(a){Yl(dv,arguments)}
;function fv(a,b,c){gv(a,b,c===void 0?null:c)}
function hv(a){a=iv(a);var b=document.getElementById(a);b&&(Gs(a),b.parentNode.removeChild(b))}
function jv(a,b){a&&b&&(a=""+Ra(b),(a=kv[a])&&Es(a))}
function gv(a,b,c){c=c===void 0?null:c;var d=iv(a),e=document.getElementById(d),f=e&&Uu(e),g=e&&!f;f?b&&b():(b&&(f=Cs(d,b),b=""+Ra(b),kv[b]=f),g||(e=lv(a,d,function(){Uu(e)||(Su(e),Fs(d),zm(function(){Gs(d)},0))},c)))}
function lv(a,b,c,d){d=d===void 0?null:d;var e=Rg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Ib(e,Cl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function iv(a){var b=document.createElement("a");wb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Wb(a)}
var kv={};function mv(a){var b=nv(a),c=document.getElementById(b),d=c&&Uu(c);d||c&&!d||(c=ov(a,b,function(){if(!Uu(c)){Su(c);Fs(b);var e=Xa(Gs,b);zm(e,0)}}))}
function ov(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Cl(a);Db(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function nv(a){var b=Rg("A");wb(b,new ob(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Wb(a)}
;function pv(a){var b=B.apply(1,arguments);if(!qv(a)||b.some(function(d){return!qv(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())rv(a,c.value)}
function rv(a,b){for(var c in b)if(qv(b[c])){if(c in a&&!qv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});rv(a[c],b[c])}else if(sv(b[c])){if(c in a&&!sv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);tv(a[c],b[c])}else a[c]=b[c];return a}
function tv(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,qv(c)?a.push(rv({},c)):sv(c)?a.push(tv([],c)):a.push(c);return a}
function qv(a){return typeof a==="object"&&!Array.isArray(a)}
function sv(a){return typeof a==="object"&&Array.isArray(a)}
;var uv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function vv(a,b){var c=c===void 0?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=$b(window.location.href);e&&d.push(e);e=$b(a);if(Jb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),wb(d,a),a=d.href)if(a=ac(a),a=bc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:xu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&wv(a,b,f)}else wv(a,b)}
function wv(a,b,c){a=xv(a);b=b?dc(b):"";c=c||5;Iu()&&mn(a,b,c)}
function xv(a){for(var b=v(uv),c=b.next();!c.done;c=b.next())a=jc(a,c.value);return"ST-"+Wb(a).toString(36)}
;function yv(a){pq.call(this,1,arguments);this.csn=a}
z(yv,pq);var yq=new qq("screen-created",yv),zv=[],Av=0,Bv=new Map,Cv=new Map,Dv=new Map;
function Ev(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Fv({cttAuthInfo:zu(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Gg(k)||!k.trackingParams&&!k.veType)&&fu(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=Gv(h,b);if(k.veType&&!Cv.has(l)&&!Dv.has(l)&&!e){if(!T("il_attach_cache_limit")||Bv.size<1E3){Bv.set(l,[a,b,c,h]);return}T("il_attach_cache_limit")&&Bv.size>1E3&&fu(new U("IL Attach cache exceeded limit"))}h=Gv(c,b);Bv.has(h)?
Hv(c,b):Dv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Mb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Iv("visualElementAttached",f,c):a?Xt("visualElementAttached",c,a,f):vo("visualElementAttached",c,f)}
function Iv(a,b,c){zv.push({Fe:a,payload:c,uh:void 0,options:b});Av||(Av=zq())}
function Aq(a){if(zv){for(var b=v(zv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,vo(c.Fe,c.payload,c.options));zv.length=0}Av=0}
function Gv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Hv(a,b){a=Gv(a,b);Bv.has(a)&&(b=Bv.get(a)||[],Ev(b[0],b[1],b[2],[b[3]],!0),Bv.delete(a))}
function Fv(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Jv(){try{return!!self.localStorage}catch(a){return!1}}
;function Kv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Lv(a){if(Jv()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Kv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Mv(){if(!Jv())return!1;var a=En(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Kv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Nv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(S("INNERTUBE_CLIENT_NAME")==="WEB"||S("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Ov(a){if(S("LOGGED_IN",!0)&&Nv()){var b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=$b(window.location.href);c&&b.push(c);c=$b(a);Jb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=ac(a),(b=bc(b))?(b=xv(b),b=(b=nn(b)||null)?pm(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Nv()?(d||(d=S("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&vv(a,b)}}
;function Pv(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&vv(a,b);if(c)return!1;Ov(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;a=ec(a,e);Ov(a);f=a+f;var h=h===void 0?sb:h;a:if(h=h===void 0?sb:h,f instanceof ob)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof qb&&b.ue(f)){h=new ob(f);break a}h=void 0}g=g.location;h=ub(h||pb);h!==void 0&&(g.href=h);return!0}
;function Qv(a){if(Ig(S("PLAYER_VARS",{}))!="1"){a&&Vl();try{Ru().then(function(){},function(){}),zm(Qv,18E5)}catch(b){hm(b)}}}
;var Rv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Sv(){var a=a===void 0?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;var b=Yb(Zb(5,a));if(T("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=qm(a).theme;return Rv.get(c)||null}catch(d){}return null}
;function Tv(){this.h={};if(this.i=pn()){var a=nn("CONSISTENCY");a&&Uv(this,{encryptedTokenJarContents:a})}}
Tv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.La.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Uv(this,a)}};
function Uv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&mn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Vv=window.location.hostname.split(".").slice(-2).join(".");function Wv(){this.j=-1;var a=S("LOCATION_PLAYABILITY_TOKEN");S("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=Xv(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Yv;function Zv(){Yv=E("yt.clientLocationService.instance");Yv||(Yv=new Wv,D("yt.clientLocationService.instance",Yv));return Yv}
p=Wv.prototype;
p.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
p.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,S("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=Xv(this))&&this.h.set("yt-location-playability-token",a,15552E3):mn("YT_CL",JSON.stringify({loctok:a}),15552E3,Vv,!0))};
function Xv(a){return a.h===void 0?new mo("yt-client-location"):a.h}
p.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=Xv(this))&&this.h.remove("yt-location-playability-token"):on("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
p.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;S("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
p.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
p.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function $v(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);S("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=S("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=S("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=S("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=S("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function aw(){this.h={}}
aw.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
aw.prototype.get=function(a){if(this.contains(a))return this.h[a]};
aw.prototype.set=function(a,b){this.h[a]=b};
aw.prototype.remove=function(a){delete this.h[a]};function bw(){this.mappings=new aw}
bw.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
bw.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Bb(b)}}return a};
new bw;function cw(a){return function(){return new a}}
;var dw={},ew=(dw.WEB_UNPLUGGED="^unplugged/",dw.WEB_UNPLUGGED_ONBOARDING="^unplugged/",dw.WEB_UNPLUGGED_OPS="^unplugged/",dw.WEB_UNPLUGGED_PUBLIC="^unplugged/",dw.WEB_CREATOR="^creator/",dw.WEB_KIDS="^kids/",dw.WEB_EXPERIMENTS="^experiments/",dw.WEB_MUSIC="^music/",dw.WEB_REMIX="^music/",dw.WEB_MUSIC_EMBEDDED_PLAYER="^music/",dw.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",dw);
function fw(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=ew[b];if(c){c=new RegExp(c);for(var d=v(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(ew).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=v(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function gw(){}
gw.prototype.D=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?ln:c;var d=a.clickTrackingParams,e=this.o,f=!1;f=f===void 0?!1:f;e=e===void 0?!1:e;var g=S("INNERTUBE_CONTEXT");if(g){g=Lg(g);T("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;h.clientName==="MWEB"&&h.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(h.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=k===void 0?!1:k;tn();var l="USER_INTERFACE_THEME_LIGHT";wn(165)?l="USER_INTERFACE_THEME_DARK":wn(174)?l="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Sv()||l;h.userInterfaceTheme=k;if(!f){if(k=Bn())h.connectionType=k;T("web_log_effective_connection_type")&&(k=Cn())&&(g.client.effectiveConnectionType=k)}var m;if(T("web_log_memory_total_kbytes")&&((m=C.navigator)==null?0:m.deviceMemory)){var n;m=(n=C.navigator)==null?void 0:n.deviceMemory;g.client.memoryTotalKbytes=""+m*1E6}T("web_gcf_hashes_innertube")&&(k=iq())&&(n=k.coldConfigData,m=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},n&&(g.client.configInfo.coldConfigData=
n),m&&(g.client.configInfo.coldHashData=m),k&&(g.client.configInfo.hotHashData=k));n=qm(C.location.href);!T("web_populate_internal_geo_killswitch")&&n.internalcountrycode&&(h.internalGeo=n.internalcountrycode);h.clientName==="MWEB"||h.clientName==="WEB"?(h.mainAppWebInfo={graftUrl:C.location.href},T("kevlar_woffle")&&fn.h&&(n=fn.h,h.mainAppWebInfo.pwaInstallabilityStatus=!n.h&&n.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=gn(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):h.clientName==="TVHTML5"&&(!T("web_lr_app_quality_killswitch")&&(n=S("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:n})),n=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:n}));if(!T("web_populate_time_zone_itc_killswitch")){b:{if(typeof Intl!=="undefined")try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(na){}r=
void 0}r&&(h.timeZone=r)}(r=S("EXPERIMENTS_TOKEN",""))?h.experimentsToken=r:delete h.experimentsToken;r=Dm();Tv.h||(Tv.h=new Tv);h=Tv.h.h;n=[];m=0;for(var t in h)n[m++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:n});!T("web_prequest_context_killswitch")&&(t=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);r=tn();t=wn(58);r=r.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);r&&(g.user.lockedSafetyMode=
!0);T("warm_op_csn_cleanup")?e&&(f=xu())&&(g.clientScreenNonce=f):!f&&(f=xu())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Zv().setLocationOnInnerTubeContext(g);try{var w=tm(),x=w.bid;delete w.bid;g.adSignalsInfo={params:[],bid:x};var y=v(Object.entries(w));for(var H=y.next();!H.done;H=y.next()){var J=v(H.value),N=J.next().value,P=J.next().value;w=N;x=P;d=void 0;(d=g.adSignalsInfo.params)==null||d.push({key:w,value:""+
x})}var va,vb;if(((va=g.client)==null?void 0:va.clientName)==="TVHTML5"||((vb=g.client)==null?void 0:vb.clientName)==="TVHTML5_UNPLUGGED"&&T("add_ifa_to_tvh5_requests")){var ea=S("INNERTUBE_CONTEXT");ea.adSignalsInfo&&(g.adSignalsInfo.advertisingId=ea.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=ea.adSignalsInfo.limitAdTracking)}}catch(na){eu(na)}y=g}else eu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
y={};y={context:y};if(H=this.i(a)){this.h(y,H,b);var Z;b="/youtubei/v1/"+fw(this.j());(H=(Z=nt(a.commandMetadata,Jl))==null?void 0:Z.apiUrl)&&(b=H);Z=b;(b=S("INNERTUBE_HOST_OVERRIDE"))&&(Z=String(b)+String(ac(Z)));b={};T("web_api_key_killswitch")&&(b.key=S("INNERTUBE_API_KEY"));T("json_condensed_response")&&(b.prettyPrint="false");Z=rm(Z,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:Z,cb:Hu(Z),La:y,config:a};a.config.Tb?a.config.Tb.identity=c:a.config.Tb={identity:c};return a}eu(new U("Error: Failed to create Request from Command.",
a))};
da.Object.defineProperties(gw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function hw(){}
z(hw,gw);function iw(){}
z(iw,hw);iw.prototype.D=function(){return{input:"/getDatasyncIdsEndpoint",cb:Hu("/getDatasyncIdsEndpoint","GET"),La:{}}};
iw.prototype.j=function(){return[]};
iw.prototype.i=function(){};
iw.prototype.h=function(){};var jw={},kw=(jw.GET_DATASYNC_IDS=cw(iw),jw);function lw(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function mw(){var a=lw();a.info||(a.info={});return a.info}
function nw(a){a=lw(a);a.metadata||(a.metadata={});return a.metadata}
function ow(a){a=lw(a);a.tick||(a.tick={});return a.tick}
function pw(a){a=lw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function qw(a){a=pw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function rw(a){var b=lw(a).nonce;b||(b=nu(),lw(a).nonce=b);return b}
;function sw(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function tw(a){a=a||"";var b=E("ytcsi.reference");b||(sw(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=sw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},uw=(W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]=
"LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",W["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]=
"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W["playlist.videos"]=
"LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",
W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]=
"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W),X={},vw=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X.app_startup="LATENCY_ACTION_APP_STARTUP",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",X.channels="LATENCY_ACTION_CHANNELS",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X.direct_playback=
"LATENCY_ACTION_DIRECT_PLAYBACK",X.editor="LATENCY_ACTION_EDITOR",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
X.management="LATENCY_ACTION_MANAGEMENT",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",
X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.projects="LATENCY_ACTION_PROJECTS",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",X.review="LATENCY_ACTION_REVIEW",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",
X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",
X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",
X);Object.assign(vw,uw);function ww(a,b){pq.call(this,1,arguments);this.timer=b}
z(ww,pq);var xw=new qq("aft-recorded",ww);D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var yw=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",yw);function zw(){this.h=0}
function Aw(){zw.h||(zw.h=new zw);return zw.h}
zw.prototype.tick=function(a,b,c,d){Bw(this,"tick_"+a+"_"+b)||vo("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
zw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Bw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,vo("latencyActionInfo",a,{cttAuthInfo:c}))};
zw.prototype.jspbInfo=function(){};
zw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Bw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,vo("latencyActionSpan",a,{cttAuthInfo:c}))};
function Bw(a,b){yw[b]=yw[b]||{count:0};var c=yw[b];c.count++;c.time=V();a.h||(a.h=Gn(function(){var d=V(),e;for(e in yw)yw[e]&&d-yw[e].time>6E4&&delete yw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||fu(c)),!0):!1}
;var Cw=window;function Dw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Ew(){var a;if(T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Fw(e.requestStart),e.responseEnd=Fw(e.responseEnd),e.redirectStart=Fw(e.redirectStart),e.redirectEnd=Fw(e.redirectEnd),e.domainLookupEnd=Fw(e.domainLookupEnd),e.connectStart=Fw(e.connectStart),e.connectEnd=
Fw(e.connectEnd),e.responseStart=Fw(e.responseStart),e.secureConnectionStart=Fw(e.secureConnectionStart),e.domainLookupStart=Fw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=T("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function Fw(a){return Math.round(Gw()+a)}
function Gw(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Cw.performance||Cw.mozPerformance||Cw.msPerformance||Cw.webkitPerformance||new Dw;var Hw=!1,Iw=!1,Jw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Wa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||vi,Y);function Kw(a,b){if(!T("web_csi_action_sampling_enabled")||!lw(b).actionDisabled){var c=tw(b||"");pv(c.info,a);a.loadType&&(c=a.loadType,nw(b).loadType=c);pv(qw(b),a);c=rw(b);b=lw(b).cttAuthInfo;Aw().info(a,c,b)}}
function Lw(){var a,b,c,d;return((d=Qs().resolve(new Ks(eq))==null?void 0:(a=fq())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Mw(a,b,c){if(!T("web_csi_action_sampling_enabled")||!lw(c).actionDisabled){var d=rw(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){(Qs().resolve(new Ks(eq))==null?0:fq())&&!Iw&&(Iw=!0,Mw("gcfl",V(),c));var f,g,h;e=(Qs().resolve(new Ks(eq))==null?void 0:(f=fq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Lw();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+
d.charCodeAt(g),g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;lw(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Kw(f,c));lw(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||T("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")?f-Y.timeOrigin:f-(Y.timeOrigin||Y.timing.navigationStart);
try{Y.mark(e,{startTime:f})}catch(k){}}e=tw(c||"");e.tick[a]=b||V();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=pw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=ow(c);e=b||V();T("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=lw(c).cttAuthInfo;a==="_start"?(a=Aw(),Bw(a,"baseline_"+d)||vo("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Aw().tick(a,d,b,f);Nw(c);return e}}}
function Ow(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=is+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Pw(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=v(Object.entries(S("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=v(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Qw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Eb(window)&&a.setAttribute("nonce",Eb(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Gw(),Mw("rsf_"+b,c+Math.round(a.fetchStart)),Mw("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function Rw(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Lb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Nb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Mw("wffs",Fw(b.startTime)),Mw("wffe",Fw(b.responseEnd)))}
function Sw(a){var b=Tw("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Tw(b[d],a);if(e)return e}return NaN}
function Tw(a,b){if(a=ow(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Nw(a){var b=Tw("_start",a),c=Sw(a),d=T("enable_cow_info_csi")||!Hw;b&&c&&d&&(vq(xw,new ww(Math.round(c-b),a)),Hw=!0)}
function Uw(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Ob(a,function(c){return c.name==="first-paint"}))return Fw(a.startTime)}var b;
T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.zh;return b?Math.max(0,b):0}
;function Vw(a,b){gm(function(){tw("").info.actionType=a;b&&cm("TIMING_AFT_KEYS",b);cm("TIMING_ACTION",a);var c=Pw();Object.keys(c).length>0&&Kw(c);c={isNavigation:!0,actionType:vw[S("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=S("PREVIOUS_ACTION");d&&(c.previousAction=vw[d]||"LATENCY_ACTION_UNKNOWN");if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=xu())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Ow();if(d===1||d===-1)c.isVisible=!0;nw();mw();
c.loadType="cold";d=mw();var e=Ew(),f=Gw(),g=S("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Mw("srt",e.responseStart),d.prerender!==1&&Mw("_start",f,void 0));d=Uw();d>0&&Mw("fpt",d);d=Ew();d.isPerformanceNavigationTiming&&Kw({performanceNavigationTiming:!0},void 0);Mw("nreqs",d.requestStart,void 0);Mw("nress",d.responseStart,void 0);Mw("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Mw("nrs",d.redirectStart,void 0),Mw("nre",
d.redirectEnd,void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Mw("ndnss",d.domainLookupStart,void 0),Mw("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Mw("ntcps",d.connectStart,void 0),Mw("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Gw()&&d.connectEnd-d.secureConnectionStart>0&&(Mw("nstcps",d.secureConnectionStart,void 0),Mw("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&Rw();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Jw)Jw.hasOwnProperty(h)&&
(e=Jw[h],Qw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Kw(c);c=pw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=qw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(nw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=ow();e=pw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Mw(k,Tw(k));else if(T("log_repeated_ytcsi_ticks"))for(f=
v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Mw(k.slice(1),g);k={};d=!1;h=v(h);for(e=h.next();!e.done;e=h.next())d=e.value,pv(c,d),pv(k,d),d=!0;d&&Kw(k)}D("ytglobal.timingready_",!0);k=S("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Ww()&&Sw()&&Nw()})()}
function Ww(){return gm(function(){return Xw()})()}
function Yw(a,b,c){gm(Kw)(a,b,c===void 0?!1:c)}
function Zw(a,b,c){return gm(Mw)(a,b,c)}
function Xw(){return gm(function(){return"_start"in ow()})()}
function $w(){gm(function(){var a=rw();requestAnimationFrame(function(){setTimeout(function(){a===rw()&&Zw("ol",void 0,void 0)},0)})})()}
var ax=window;ax.ytcsi&&(ax.ytcsi.infoGel=Yw,ax.ytcsi.tick=Zw);var bx="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),cx=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function dx(a,b,c,d){this.D=a;this.da=b;this.o=c;this.j=d;this.i=void 0;this.h=new Map;a.Nb||(a.Nb={});a.Nb=Object.assign({},kw,a.Nb)}
function ex(a,b,c,d){if(dx.h!==void 0){if(d=dx.h,a=[a!==d.D,b!==d.da,c!==d.o,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else dx.h=new dx(a,b,c,d)}
function fx(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?ln:c;var d=gx(a,b);return d?new xi(function(e,f){var g,h,k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.D(b,void 0,c);if(!h){f(new U("Error: Failed to build request for command.",b));n.F(0);break}Ov(h.input);l=((k=h.cb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.o.kf){var r=h.config,t;r=r==null?void 0:(t=r.Tb)==null?void 0:t.sessionIndex;t=kn(0,{sessionIndex:r});m=Object.assign({},
$v(l),t);n.F(4);break}return n.yield(hx(h.config,l),5);case 5:m=n.i;case 4:e(ix(a,h,m)),n.h=0}})}):Ci(new U("Error: No request builder found for command.",b))}
function jx(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.j){d=v(bx);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function ix(a,b,c){var d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,r,t,w,x,y,H,J,N,P,va,vb,ea,Z,na,Na,Ma,$g,ah,Rr,Sr,Tr,Ur;return A(function(ia){switch(ia.h){case 1:ia.F(2);break;case 3:if((e=ia.i)&&!e.isExpired())return ia.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.La)==null?0:g.context)){ia.F(4);break}h=b.La.context;ia.F(5);break;case 5:k=v([]),l=k.next();case 8:if(l.done){ia.F(4);break}m=l.value;return ia.yield(m.Bh(h),9);case 9:l=k.next();ia.F(8);break;case 4:if((n=a.i)==null||!n.Gh(b.input,b.La)){ia.F(12);break}return ia.yield(a.i.wh(b.input,
b.La),13);case 13:return r=ia.i,T("kevlar_process_local_innertube_responses_killswitch")||jx(a,r,b),ia.return(r);case 12:return(x=(w=b.config)==null?void 0:w.Eh)&&a.h.has(x)?t=a.h.get(x):(y=JSON.stringify(b.La),N=(J=(H=b.cb)==null?void 0:H.headers)!=null?J:{},b.cb=Object.assign({},b.cb,{headers:Object.assign({},N,c)}),P=Object.assign({},b.cb),b.cb.method==="POST"&&(P=Object.assign({},P,{body:y})),((va=b.config)==null?0:va.Le)&&Zw(b.config.Le),vb=function(){return a.da.fetch(b.input,P,b.config)},t=
vb(),x&&a.h.set(x,t)),ia.yield(t,14);
case 14:if((ea=ia.i)&&"error"in ea&&((Z=ea)==null?0:(na=Z.error)==null?0:na.details))for(Na=ea.error.details,Ma=v(Na),$g=Ma.next();!$g.done;$g=Ma.next())ah=$g.value,(Rr=ah["@type"])&&cx.indexOf(Rr)>-1&&(delete ah["@type"],ea=ah);x&&a.h.has(x)&&a.h.delete(x);((Sr=b.config)==null?0:Sr.Me)&&Zw(b.config.Me);if(ea||(Tr=a.i)==null||!Tr.nh(b.input,b.La)){ia.F(15);break}return ia.yield(a.i.vh(b.input,b.La),16);case 16:ea=ia.i;case 15:return jx(a,ea,b),((Ur=b.config)==null?0:Ur.He)&&Zw(b.config.He),d(),ia.return(ea||
void 0)}})}
function gx(a,b){a:{a=a.D;var c,d=(c=nt(b,Kl))==null?void 0:c.signal;if(d&&a.Nb&&(c=a.Nb[d])){var e=c();break a}var f;if((c=(f=nt(b,Il))==null?void 0:f.request)&&a.Sd&&(f=a.Sd[c])){e=f();break a}for(e in b)if(a.Tc[e]&&(b=a.Tc[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function hx(a,b){var c,d,e,f;return A(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Tb)==null?void 0:d.sessionIndex;var h=g.yield;var k=kn(0,{sessionIndex:e});if(!(k instanceof xi)){var l=new xi(vi);yi(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},$v(b),f)))})}
;var kx=new Js("INNERTUBE_TRANSPORT_TOKEN");function lx(){}
z(lx,hw);lx.prototype.j=function(){return bv};
lx.prototype.i=function(a){return nt(a,Ul)||void 0};
lx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(lx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function mx(){}
z(mx,hw);mx.prototype.j=function(){return cv};
mx.prototype.i=function(a){return nt(a,Tl)||void 0};
mx.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(mx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var nx=new Js("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function ox(a){this.u=a}
z(ox,hw);ox.prototype.j=function(){return Xu};
ox.prototype.i=function(a){return nt(a,Ol)||nt(a,Pl)||nt(a,Nl)};
ox.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.u)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.u.i(b.clientParamIdentifier)}};
ox[Is]=[nx];function px(){}
z(px,hw);px.prototype.j=function(){return Zu};
px.prototype.i=function(a){return nt(a,Ml)||void 0};
px.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(px.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function qx(){}
z(qx,hw);qx.prototype.j=function(){return $u};
qx.prototype.i=function(a){return nt(a,Sl)||void 0};
qx.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function rx(){}
z(rx,hw);rx.prototype.j=function(){return av};
rx.prototype.i=function(a){return nt(a,Rl)||void 0};
rx.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function sx(){}
z(sx,hw);sx.prototype.j=function(){return Yu};
sx.prototype.i=function(a){return nt(a,Ql)};
sx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var tx=new Js("FETCH_FN_TOKEN"),ux=new Js("PARSE_FN_TOKEN");function vx(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;U.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
z(vx,U);var wx=new Js("NETWORK_SLI_TOKEN");function xx(a,b,c){this.h=a;this.i=b;this.j=c}
xx.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){e=yx(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){fu(k);
if((c==null?0:c.Zd)&&k instanceof vx&&k.errorType===1)return Promise.reject(k)}))})};
function yx(a,b,c){if(a.h){var d=Yb(Zb(5,jc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;T("wug_networking_gzip_request")&&(a=Xq(c));return new window.Request(b,a)}
xx.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.we)&&a.ok)return Yf(b.we,e);e=e.replace(")]}'","");if((b==null?0:b.Zd)&&e)try{var f=d(e)}catch(h){throw new vx(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.rh(),c=c.then(function(e){fu(new U("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
xx[Is]=[new Ks(wx),new Ks(tx),new Ks(ux)];var zx=new Js("NETWORK_MANAGER_TOKEN");var Ax;function Bx(){var a,b,c;return A(function(d){if(d.h==1)return a=Qs().resolve(kx),a?d.yield(fx(a),2):(fu(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return fu(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.ph;return d.return(c)}fu(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function Cx(){var a;return(a=S("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var Dx=C.caches,Ex;function Fx(a){var b=a.indexOf(":");return b===-1?{md:a}:{md:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Gx(){return A(function(a){if(Ex!==void 0)return a.return(Ex);Ex=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return za(d,2),d.yield(Dx.open("test-only"),4);case 4:return d.yield(Dx.delete("test-only"),5);case 5:d.h=3;d.o=0;break;case 2:if(c=Aa(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Ex)})}
function Hx(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(Gx(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(Dx.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Fx(f),h=g.datasyncId,!h||a.includes(h)||b.push(Dx.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function Ix(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(Gx(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=En("cache contains other");return h.yield(Dx.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Fx(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Jx(){try{return!!self.sessionStorage}catch(a){return!1}}
;function Kx(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Lx(a){if(Jx()){var b=Object.keys(window.sessionStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Kx(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function Mx(){if(!Jx())return!1;var a=En(),b=Object.keys(window.sessionStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Kx(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Nx(){Bx().then(function(a){a&&(Kp(a),Hx(a),Lv(a),Lx(a))})}
function Ox(){var a=new Pr;Nj.oa(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){g.F(2);break}b=En("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Kp(h);Hx(h);Lv(h);Lx(h);return g.return()}c=Mv();d=Mx();return g.yield(Ix(),3);case 3:return e=g.i,g.yield(Lp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.ta()?Nx():a.h.add("publicytnetworkstatus-online",Nx,!0,void 0,void 0),g.h=0}})})}
;function Px(){this.state=1;this.h=null}
p=Px.prototype;p.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=fb(),f=new Fb(d?d.createScript(f):f)):f=null,d=f):d=null}else d=(f=a.interpreterScript)!=null?f:null;a.interpreterSafeUrl&&(e=Bl(a.interpreterSafeUrl).toString());Qx(this,d,e,a.program,b,c)}else fu(Error("Cannot initialize botguard without program"))};
function Qx(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,fv(c,function(){window[g]?Rx(a,d,g,e):(a.state=3,hv(c),fu(new U("Unable to load Botguard","from "+c)))},f)):b?(f=Rg("SCRIPT"),b instanceof Fb?Hb(f,b):f.textContent=b,f.nonce=Eb(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?Rx(a,d,g,e):(a.state=4,fu(new U("Unable to load Botguard from JS")))):fu(new U("Unable to load VM; no url or JS provided"))}
p.isLoading=function(){return this.state===2};
function Rx(a,b,c,d){a.state=5;try{var e=new zj({program:b,ge:c,Je:T("att_web_record_metrics"),Be:{va:"aGIf"}});e.cf.then(function(){a.state=6;d&&d(b)});
a.Kc(e)}catch(f){a.state=7,f instanceof Error&&fu(f)}}
p.invoke=function(a){a=a===void 0?{}:a;return this.Nc()?this.Cd({Uc:a}):null};
p.dispose=function(){this.Kc(null);this.state=8};
p.Nc=function(){return!!this.h};
p.Cd=function(a){return this.h.vd(a)};
p.Kc=function(a){ug(this.h);this.h=a};var Sx=[],Tx=!1;function Ux(){if(!T("disable_biscotti_fetch_for_ad_blocker_detection")&&!T("disable_biscotti_fetch_entirely_for_all_web_clients")&&Iu()){var a=S("PLAYER_VARS",{});if(Ig(a)!="1"&&!Ju(a)){var b=function(){Tx=!0;"google_ad_status"in window?cm("DCLKSTAT",1):cm("DCLKSTAT",2)};
try{fv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Sx.push(Nj.oa(function(){if(!(Tx||"google_ad_status"in window)){try{jv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Tx=!0;cm("DCLKSTAT",3)}},5E3))}}}
function Vx(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;function Wx(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Xx(){Px.apply(this,arguments)}
z(Xx,Px);Xx.prototype.Kc=function(a){var b;(b=Wx())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.vd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Xx.prototype.Nc=function(){return!!Wx()};
Xx.prototype.Cd=function(a){return Wx().bgvmc(a)};function Yx(a){Zs.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.H},{from:"document_active",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"flush_logs",action:this.u},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.u},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
z(Yx,Zs);Yx.prototype.H=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Yx.prototype.D=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Yx.prototype.u=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
Yx.prototype.i=function(){this.h=new Map};function Zx(a){Zs.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.u},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.D},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.u},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.u},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.D},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.D},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
z(Zx,Zs);Zx.prototype.i=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Zx.prototype.h=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Zx.prototype.D=function(a,b){a(b==null?void 0:b.event)};
Zx.prototype.u=function(a,b){a(b==null?void 0:b.event)};function $x(){this.o=new Yx;this.D=new Zx}
$x.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.D.install(c)})};function ay(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
ay.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=xu(c===void 0?0:c)){a=this.client;d=new qu({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=Gv(d,c);Cv.set(f,!0);Hv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Fv({cttAuthInfo:zu(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Iv("visualElementGestured",f,d):a?Xt("visualElementGestured",d,a,f):vo("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
ay.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new qu({trackingParams:a}),b,c===void 0?0:c)};
ay.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=xu(d);a||(a=(a=uu(d===void 0?0:d))?new qu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Fv({cttAuthInfo:zu(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Iv("visualElementStateChanged",d,b):a?Xt("visualElementStateChanged",b,a,d):vo("visualElementStateChanged",b,d))}};
function by(a,b){if(b===void 0)for(var c=wu(),d=0;d<c.length;d++)c[d]!==void 0&&by(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Ev(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function cy(){$x.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));T("web_log_cfg_cee_ks")||Gn(dy)}
z(cy,$x);cy.prototype.j=function(){vo("finalPayload",{csn:xu()})};
cy.prototype.h=function(){ku(lu)};
cy.prototype.i=function(){var a=by;ay.h||(ay.h=new ay);a(ay.h)};
function dy(){var a=S("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Vd();a=v(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&vo("genericClientExperimentEvent",{eventType:c});delete bm.CLIENT_EXPERIMENT_EVENTS}}
;function ey(){}
function fy(){var a=E("ytglobal.storage_");a||(a=new ey,D("ytglobal.storage_",a));return a}
ey.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(gy()):d.return()})};
function gy(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",ey);function to(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
to.prototype.Ea=function(a){this.handleError(a)};
to.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":hy(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function hy(a,b){fy().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:iy(c==null?void 0:c.usage),deviceStorageQuotaMbytes:iy(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function iy(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var jy={},ky=(jy["api.invalidparam"]=2,jy.auth=150,jy["drm.auth"]=150,jy["heartbeat.net"]=150,jy["heartbeat.servererror"]=150,jy["heartbeat.stop"]=150,jy["html5.unsupportedads"]=5,jy["fmt.noneavailable"]=5,jy["fmt.decode"]=5,jy["fmt.unplayable"]=5,jy["html5.missingapi"]=5,jy["html5.unsupportedlive"]=5,jy["drm.unavailable"]=5,jy["mrm.blocked"]=151,jy["embedder.identity.denied"]=152,jy);var ly=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function my(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function ny(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(ly);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function oy(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function py(a){L.call(this);var b=this;this.api=a;this.Y=this.u=!1;this.B=[];this.R={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=T("web_player_split_event_bus_iframe");this.o=S("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.H=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.Y=!0;b.u=!1;b.sendMessage("initialDelivery",qy(b));b.sendMessage("onReady");e=v(b.B);for(d=e.next();!d.done;d=e.next())ry(b,d.value);b.B=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.R[e]||e==="onReady"||
(c=sy(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.R[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&my(e)){var f=d;if(Qa(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=ny(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=ny(g);break;case "loadPlaylist":case "cuePlaylist":g=oy(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);my(e)&&ty(b,qy(b))}}}};
uy.addEventListener("message",this.H);if(a=S("WIDGET_ID"))this.sessionId=a;vy(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?ky[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
vy(this,"onVideoProgress",this.Xe.bind(this));vy(this,"onVolumeChange",this.Ye.bind(this));vy(this,"onApiChange",this.Qe.bind(this));vy(this,"onPlaybackQualityChange",this.Ue.bind(this));vy(this,"onPlaybackRateChange",this.Ve.bind(this));vy(this,"onStateChange",this.We.bind(this));vy(this,"onWebglSettingsChanged",this.Ze.bind(this));vy(this,"onCaptionsTrackListChanged",this.Re.bind(this));vy(this,"captionssettingschanged",this.Se.bind(this))}
z(py,L);function ty(a,b){a.sendMessage("infoDelivery",b)}
p=py.prototype;p.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.Y?ry(this,a):this.B.push(a)};
function sy(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function vy(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function qy(a){if(!a.api)return null;var b=a.api.getApiInterface();Pb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
p.We=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());ty(this,a)};
p.Ue=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());ty(this,a)};
p.Ve=function(a){ty(this,{playbackRate:a})};
p.Qe=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
p.Ye=function(){ty(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
p.Xe=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());ty(this,a)};
p.Ze=function(){ty(this,{sphericalProperties:this.api.getSphericalProperties()})};
p.Re=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};ty(this,a)}};
p.Se=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};ty(this,a)}};
function ry(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){fu(d)}}}
p.aa=function(){L.prototype.aa.call(this);uy.removeEventListener("message",this.H);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var uy=window;function wy(a,b,c){L.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=T("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ea){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=xy(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=yy(g,f))&&zy(d,g,f))}}}}}};
Ay.addEventListener("message",this.i);zy(this,"RECEIVING")}
z(wy,L);p=wy.prototype;p.addListener=function(a,b){if(!(a in this.h)){var c=this.Te.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
p.Te=function(a,b){this.ea||zy(this,a,By(a,b))};
p.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
p.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
p.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function xy(a,b){switch(a){case "loadVideoById":return[ny(b)];case "cueVideoById":return[ny(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[oy(b)];case "cuePlaylist":return[oy(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function yy(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function By(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function zy(a,b,c){a.ea||(b={id:a.id,command:b},c&&(b.data=c),Cy.postMessage(JSON.stringify(b),a.origin))}
p.aa=function(){Ay.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);L.prototype.aa.call(this)};
var Ay=window,Cy=window.parent;var Dy=new Xx;function Ey(){return Dy.Nc()}
function Fy(a){a=a===void 0?{}:a;return Dy.invoke(a)}
;function Gy(a,b,c,d,e){L.call(this);var f=this;this.B=b;this.webPlayerContextConfig=d;this.pc=e;this.yb=!1;this.api={};this.la=this.u=null;this.U=new M;this.h={};this.Z=this.Aa=this.elementId=this.zb=this.config=null;this.Y=!1;this.j=this.H=null;this.Ua={};this.qc=["onReady"];this.lastError=null;this.Rb=NaN;this.R={};this.ga=0;this.i=this.o=a;wg(this,this.U);Hy(this);c?this.ga=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(Iy(this),Jy(this))}
z(Gy,L);p=Gy.prototype;p.getId=function(){return this.B};
p.loadNewVideoConfig=function(a){if(!this.ea){this.ga&&(clearTimeout(this.ga),this.ga=0);var b=a||{};b instanceof Wu||(b=new Wu(b));this.config=b;this.setConfig(a);Jy(this);this.isReady()&&Ky(this)}};
function Iy(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.B,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.B:a.config.attrs.id=a.B);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
p.setConfig=function(a){this.zb=a;this.config=Ly(a);Iy(this);if(!this.Aa){var b;this.Aa=My(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Hj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Hj(Number(a)||a))};
function Ky(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Ny(a){var b=!0,c=Oy(a);c&&a.config&&(b=c.dataset.version===Py(a));return b&&!!E("yt.player.Application.create")}
function Jy(a){if(!a.ea&&!a.Y){var b=Ny(a);if(b&&(Oy(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||Qy(a);else if(Ry(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),Qy(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.H=function(){c=!0;var d=Sy(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?Ly(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.pc);Qy(a)};
a.Y=!0;b?a.H():(fv(Py(a),a.H),(b=Ty(a))&&mv(b||""),Uy(a)&&!c&&D("yt.player.Application.create",null))}}}
function Oy(a){var b=Qg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function Qy(a){if(!a.ea){var b=Oy(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!Sy(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}Vy(a)}else a.Rb=setTimeout(function(){Qy(a)},50)}}
function Vy(a){Hy(a);a.yb=!0;var b=Oy(a);if(b){a.u=Wy(a,b,"addEventListener");a.la=Wy(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Wy(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);Ky(a);a.Aa&&a.Aa(a.api);a.U.gb("onReady",a.api)}
function Wy(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.B}),e.level="WARNING",e;}}}
function Hy(a){a.yb=!1;if(a.la)for(var b in a.h)a.h.hasOwnProperty(b)&&a.la(b,a.h[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&clearTimeout(Number(c));a.R={};a.u=null;a.la=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.zb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
p.isReady=function(){return this.yb};
p.addEventListener=function(a,b){var c=this,d=My(this,b);d&&(Jb(this.qc,a)>=0||this.h[a]||(b=Xy(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
p.removeEventListener=function(a,b){this.ea||(b=My(this,b))&&this.U.unsubscribe(a,b)};
function My(a,b){var c=b;if(typeof b==="string"){if(a.Ua[b])return a.Ua[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Ua[b]=c}return c?c:null}
function Xy(a,b){function c(d){function e(){if(!a.ea)try{a.U.gb(b,d!=null?d:void 0)}catch(h){var g=new U("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.B,data:d,originalStack:h.stack,componentStack:h.Rd});g.level="WARNING";throw g;}}
if(Sy(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.R,h=String(f);h in g&&delete g[h]},0);
Hg(a.R,String(f))}}
return a.h[b]=c}
p.getPlayerType=function(){return this.Z||(Oy(this)?"html5":null)};
p.getLastError=function(){return this.lastError};
function Ry(a){a.cancel();Hy(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=Oy(a);b&&(Ny(a)||!Uy(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
p.cancel=function(){this.H&&jv(Py(this),this.H);clearTimeout(this.Rb);this.Y=!1};
p.aa=function(){Ry(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Ua=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.zb=this.config=this.api=null;delete this.o;delete this.i;L.prototype.aa.call(this)};
function Uy(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function Py(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Ty(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Sy(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function Ly(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?Kg(e):e}return b}
;var Yy={},Zy="player_uid_"+(Math.random()*1E9>>>0);function $y(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Qg(c):c;var e=Zy+"_"+Ra(c),f=Yy[e];if(f&&d)return az(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Gy(c,e,a,b,void 0);Yy[e]=f;f.addOnDisposeCallback(function(){delete Yy[f.getId()]});
return f.api}
function az(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var bz=null,cz=null;
function dz(){$w();var a=tn(),b=wn(119),c=window.devicePixelRatio>1;if(document.body&&Vj(document.body,"exp-invert-logo"))if(c&&!Vj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Vj(d,"inverted-hdpi")){var e=Tj(d);Uj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Vj(document.body,"inverted-hdpi")&&Wj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=xn(b)||0;d=c?d|67108864:d&-67108865;d===0?delete qn[b]:(c=d.toString(16),qn[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in qn)qn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(qn[f])));var f=d.join("&");mn(b,f,63072E3,a.i,c)}}
function ez(){fz()}
function gz(){Zw("ep_init_pr");fz()}
function fz(){var a=bz.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function hz(){bz&&bz.sendAbandonmentPing&&bz.sendAbandonmentPing();S("PL_ATT")&&Dy.dispose();for(var a=Nj,b=0,c=Sx.length;b<c;b++)a.pa(Sx[b]);Sx.length=0;hv("//static.doubleclick.net/instream/ad_status.js");Tx=!1;cm("DCLKSTAT",0);vg(cz);bz&&(bz.removeEventListener("onVideoDataChange",ez),bz.destroy())}
;D("yt.setConfig",cm);D("yt.config.set",cm);D("yt.setMsg",ev);D("yt.msgs.set",ev);D("yt.logging.errors.log",eu);
D("writeEmbed",function(){var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}Qv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=S("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Vw("embed",["ol"]);c=Cx();if(!c.serializedForcedExperimentIds){var d=qm(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&Vw("watch",["pbs","pbu","pbp"]);bz=$y(a,c);bz.addEventListener("onVideoDataChange",ez);bz.addEventListener("onReady",gz);a=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?cz=new py(bz):S("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(cz=new wy(bz,a,b));Ux();T("ytidb_create_logger_embed_killswitch")||so();a={};cy.h||(cy.h=new cy);cy.h.install((a.flush_logs={callback:function(){Kt()}},a));
es();T("ytidb_clear_embedded_player")&&Nj.oa(function(){var f,g;if(!Ax){var h=Qs();Ms(h,{kc:zx,zd:xx});var k={Tc:{feedbackEndpoint:cw(px),modifyChannelNotificationPreferenceEndpoint:cw(qx),playlistEditEndpoint:cw(rx),shareEntityEndpoint:cw(ox),subscribeEndpoint:cw(lx),unsubscribeEndpoint:cw(mx),webPlayerShareEntityServiceEndpoint:cw(sx)}},l=Zv(),m={};l&&(m.client_location=l);f===void 0&&(f=jn());g===void 0&&(g=h.resolve(zx));ex(k,g,f,m);Ms(h,{kc:kx,Ad:dx.h});Ax=h.resolve(kx)}Ox()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||Ey);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||Fy);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Vx);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Pv);D("yt.util.activity.init",E("yt.util.activity.init")||us);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||xs);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||vs);window.addEventListener("load",gm(function(){dz()}));
window.addEventListener("pageshow",gm(function(a){a.persisted||dz()}));
window.addEventListener("pagehide",gm(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?hz():a.persisted||hz()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=dm("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new U(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!T("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.Rd)f||(f={}),f.componentStack=Yt(m)}f&&iu(e,f);g?eu(e):fu(e)}};
Ni=gu;window.addEventListener("unhandledrejection",function(a){gu(a.reason)});
Kb(S("ERRORS")||[],function(a){eu.apply(null,a)});
cm("ERRORS",[]);}).call(this);
