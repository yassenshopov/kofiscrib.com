(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function r(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;da(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},na;
if("function"==typeof Object.setPrototypeOf)na=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},ra={};try{ra.__proto__=pa;oa=ra.a;break a}catch(a){}oa=!1}na=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=na;
function u(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function ta(){this.v=!1;this.m=null;this.j=void 0;this.i=1;this.o=this.A=0;this.J=this.l=null}
function va(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
ta.prototype.C=function(a){this.j=a};
function wa(a,b){a.l={Na:b,Sa:!0};a.i=a.A||a.o}
ta.prototype.return=function(a){this.l={return:a};this.i=this.o};
function v(a,b,c){a.i=c;return{value:b}}
ta.prototype.s=function(a){this.i=a};
function xa(a,b,c){a.A=b;void 0!=c&&(a.o=c)}
function ya(a,b){a.i=b;a.A=0}
function za(a){a.A=0;var b=a.l.Na;a.l=null;return b}
function Aa(a){a.J=[a.l];a.A=0;a.o=0}
function Ba(a){var b=a.J.splice(0)[0];(b=a.l=a.l||b)?b.Sa?a.i=a.A||a.o:void 0!=b.s&&a.o<b.s?(a.i=b.s,a.l=null):a.i=a.o:a.i=0}
function Ca(a){this.i=new ta;this.j=a}
function Da(a,b){va(a.i);var c=a.i.m;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.v=!1,e;var f=e.value}catch(g){return a.i.m=null,wa(a.i,g),Fa(a)}a.i.m=null;d.call(a.i,f);return Fa(a)}
function Fa(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.v=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,wa(a.i,c)}a.i.v=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Sa)throw b.Na;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){va(a.i);a.i.m?b=Ea(a,a.i.m.next,b,a.i.C):(a.i.C(b),b=Fa(a));return b};
this.throw=function(b){va(a.i);a.i.m?b=Ea(a,a.i.m["throw"],b,a.i.C):(wa(a.i,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ja(new Ga(new Ca(a)))}
function Ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.v=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.o()})}this.i.push(g)};
var e=fa.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.o=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.xa),reject:g(this.o)}};
b.prototype.xa=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.eb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ma(g):this.A(g)}};
b.prototype.ma=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.fb(h,g):this.A(g)};
b.prototype.o=function(g){this.C(2,g)};
b.prototype.A=function(g){this.C(1,g)};
b.prototype.C=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.cb();this.J()};
b.prototype.cb=function(){var g=this;e(function(){if(g.P()){var h=fa.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.P=function(){if(this.v)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.J=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.eb=function(g){var h=this.m();g.oa(h.resolve,h.reject)};
b.prototype.fb=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(w,p){return"function"==typeof w?function(y){try{l(w(y))}catch(z){m(z)}}:p}
var l,m,q=new b(function(w,p){l=w;m=p});
this.oa(k(g,l),k(h,m));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.oa=function(g,h){function k(){switch(l.i){case 1:g(l.l);break;case 2:h(l.l);break;default:throw Error("Unexpected state: "+l.i);}}
var l=this;null==this.j?f.j(k):this.j.push(k);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=t(g),m=l.next();!m.done;m=l.next())d(m.value).oa(h,k)})};
b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,m){function q(y){return function(z){w[y]=z;p--;0==p&&l(w)}}
var w=[],p=0;do w.push(void 0),p++,d(k.value).oa(q(w.length-1),m),k=h.next();while(!k.done)})};
return b});
r("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;da(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)?delete k[g][this.i]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.i;return ha(function(){if(l){for(;l.head!=h.i;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&ja(h.data_,l))for(h=0;h<m.length;h++){var q=m[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:h,entry:q}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},l.list.push(l.entry),this.i.previous.next=l.entry,this.i.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
r("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
r("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Object.setPrototypeOf",function(a){return a||sa});
r("Set",function(a){function b(c){this.i=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
var A=this||self;function B(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wa=Ta:Wa=Va;return Wa.apply(null,arguments)}
function C(a,b){a=a.split(".");var c=A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ob=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.hb=b)}
Xa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},db=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function eb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function gb(a){return Array.prototype.concat.apply([],arguments)}
function hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function rb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=sb(a[c]);return b}
var tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<tb.length;f++)c=tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var vb;function wb(){}
function xb(a){return new wb(yb,a)}
var yb={};xb("");var zb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ab=/&/g,Bb=/</g,Cb=/>/g,Db=/"/g,Eb=/'/g,Fb=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a,b){this.i=b===Ib?a:""}
Hb.prototype.toString=function(){return this.i.toString()};
var Ib={};function Jb(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
function E(a){return-1!=Jb().indexOf(a)}
;function Kb(){return(E("Chrome")||E("CriOS"))&&!E("Edge")||E("Silk")}
;var Lb={};function Qb(a){this.i=Lb===Lb?a:""}
Qb.prototype.toString=function(){return this.i.toString()};var Rb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sb(a){return a?decodeURI(a):a}
function Tb(a){return Sb(a.match(Rb)[3]||null)}
function Ub(a){var b=a.match(Rb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Vb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Vb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Wb(a){var b=[],c;for(c in a)Vb(c,a[c],b);return b.join("&")}
var Xb=/#|$/;function Yb(a,b){var c=a.search(Xb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function Zb(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function $b(a){$b[" "](a);return a}
$b[" "]=function(){};var ac=E("Opera"),bc=E("Trident")||E("MSIE"),cc=E("Edge"),dc=E("Gecko")&&!(-1!=Jb().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),ec=-1!=Jb().toLowerCase().indexOf("webkit")&&!E("Edge");function fc(){var a=A.document;return a?a.documentMode:void 0}
var gc;a:{var ic="",jc=function(){var a=Jb();if(dc)return/rv:([^\);]+)(\)|;)/.exec(a);if(cc)return/Edge\/([\d\.]+)/.exec(a);if(bc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ec)return/WebKit\/(\S+)/.exec(a);if(ac)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
jc&&(ic=jc?jc[1]:"");if(bc){var kc=fc();if(null!=kc&&kc>parseFloat(ic)){gc=String(kc);break a}}gc=ic}var lc=gc,mc;if(A.document&&bc){var nc=fc();mc=nc?nc:parseInt(lc,10)||void 0}else mc=void 0;var oc=mc;var pc=Zb()||E("iPod"),qc=E("iPad");!E("Android")||Kb();Kb();var rc=E("Safari")&&!(Kb()||E("Coast")||E("Opera")||E("Edge")||E("Edg/")||E("OPR")||E("Firefox")||E("FxiOS")||E("Silk")||E("Android"))&&!(Zb()||E("iPad")||E("iPod"));var vc={},wc=null;
function xc(a,b){Oa(a);void 0===b&&(b=0);if(!wc){wc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));vc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===wc[h]&&(wc[h]=g)}}}b=vc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var yc="undefined"!==typeof Uint8Array;var zc={};var Ac="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Bc(a,b){Object.isFrozen(a)||(Ac?a[Ac]|=b:void 0!==a.sa?a.sa|=b:Object.defineProperties(a,{sa:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Cc(a){var b;Ac?b=a[Ac]:b=a.sa;return null==b?0:b}
function Dc(a){Bc(a,1);return a}
function Ec(a){return Array.isArray(a)?!!(Cc(a)&2):!1}
function Fc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Bc(a,2)}
;function Gc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Hc,Ic=Object.freeze(Dc([]));function Jc(a){if(Ec(a.D))throw Error("Cannot mutate an immutable Message");}
var Kc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Lc(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Mc(a){A.setTimeout(function(){throw a;},0)}
;function Nc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&yc&&null!=a&&a instanceof Uint8Array)return xc(a)}return a}
;function Oc(a,b){b=void 0===b?Pc:b;return Qc(a,b)}
function Rc(a,b){if(null!=a){if(Array.isArray(a))a=Qc(a,b);else if(Gc(a)){var c={},d;for(d in a)c[d]=Rc(a[d],b);a=c}else a=b(a);return a}}
function Qc(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Rc(c[d],b);Array.isArray(a)&&Cc(a)&1&&Dc(c);return c}
function Sc(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Nc(a);return Array.isArray(a)?Oc(a,Sc):a}
function Pc(a){return yc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function Tc(a,b,c){return-1===b?null:b>=a.m?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.D[b+a.l]}
function G(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Jc(a);b<a.m&&!d?a.D[b+a.l]=c:(a.j||(a.j=a.D[a.m+a.l]={}))[b]=c;return a}
function Uc(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?!1:d;var e=Tc(a,b,d);null==e&&(e=Ic);if(Ec(a.D))c&&(Fc(e),Object.freeze(e));else if(e===Ic||Ec(e))e=Dc(e.slice()),G(a,b,e,d);return e}
function Vc(a,b,c,d){Jc(a);(c=Wc(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),G(a,c));return G(a,b,d)}
function Wc(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Tc(a,e)&&(0!==c&&G(a,c,void 0,!1,!0),c=e)}return c}
function Xc(a,b,c,d,e){if(-1===c)return null;a.i||(a.i={});var f=a.i[c];if(f)return f;e=Tc(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);Ec(a.D)&&Fc(b.D);return a.i[c]=b}
function Yc(a,b,c,d){d=void 0===d?!1:d;a.i||(a.i={});var e=Ec(a.D),f=a.i[c];if(!f){d=Uc(a,c,!0,d);f=[];e=e||Ec(d);for(var g=0;g<d.length;g++)f[g]=new b(d[g]),e&&Fc(f[g].D);e&&(Fc(f),Object.freeze(f));a.i[c]=f}return f}
function H(a,b,c){var d=void 0===d?!1:d;Jc(a);a.i||(a.i={});var e=null!=c?c.D:c;a.i[b]=c;return G(a,b,e,d)}
function Zc(a,b,c,d){Jc(a);a.i||(a.i={});var e=null!=d?d.D:d;a.i[b]=d;Vc(a,b,c,e)}
function $c(a,b,c,d){var e=void 0===e?!1:e;Jc(a);e=Yc(a,c,b,e);c=null!=d?d:new c;a=Uc(a,b);e.push(c);a.push(c.D)}
function ad(a,b){a=Tc(a,b);return null==a?"":a}
;function bd(a,b,c){a||(a=cd);cd=null;var d=this.constructor.j;a||(a=d?[d]:[]);this.l=(d?0:-1)-(this.constructor.i||0);this.i=void 0;this.D=a;a:{d=this.D.length;a=d-1;if(d&&(d=this.D[a],Gc(d))){this.m=a-this.l;this.j=d;break a}void 0!==b&&-1<b?(this.m=Math.max(b,a+1-this.l),this.j=void 0):this.m=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.m)a+=this.l,(d=this.D[a])?Array.isArray(d)&&Dc(d):this.D[a]=Ic;else{d=this.j||(this.j=this.D[this.m+this.l]={});var e=d[a];e?Array.isArray(e)&&
Dc(e):d[a]=Ic}}
bd.prototype.toJSON=function(){var a=this.D;return Hc?a:Oc(a,Sc)};
function dd(a){Hc=!0;try{return JSON.stringify(a.toJSON(),ed)}finally{Hc=!1}}
bd.prototype.clone=function(){var a=Oc(this.D);cd=a;a=new this.constructor(a);cd=null;fd(a,this);return a};
bd.prototype.isMutable=function(a){if(a!==zc)throw Error("requires a valid immutable API token");return!Ec(this.D)};
bd.prototype.toString=function(){return this.D.toString()};
function ed(a,b){return Nc(b)}
function fd(a,b){b.o&&(a.o=b.o.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=Yc(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)fd(f[g],e[g])}else(f=Xc(a,e.constructor,g,void 0,f))&&fd(f,e)}}}}
var cd;function gd(){bd.apply(this,arguments)}
u(gd,bd);if(Kc){var hd={};Object.defineProperties(gd,(hd[Symbol.hasInstance]=Lc(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),hd))};function I(){gd.apply(this,arguments)}
u(I,gd);if(Kc){var id={};Object.defineProperties(I,(id[Symbol.hasInstance]=Lc(Object[Symbol.hasInstance]),id))};var jd=window;xb("csi.gstatic.com");xb("googleads.g.doubleclick.net");xb("partner.googleadservices.com");xb("pubads.g.doubleclick.net");xb("securepubads.g.doubleclick.net");xb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var kd={};function ld(){}
function md(a){this.i=a}
u(md,ld);md.prototype.toString=function(){return this.i};
var nd=new md("about:invalid#zTSz",kd);function od(a){if(a instanceof ld)if(a instanceof md)a=a.i;else throw Error("");else a instanceof Hb&&a.constructor===Hb?a=a.i:(Na(a),a="type_error:SafeUrl");return a}
;function pd(a,b){a.removeAttribute("srcdoc");a.src=od(b);for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(var c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function qd(a,b){this.width=a;this.height=b}
n=qd.prototype;n.clone=function(){return new qd(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function rd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function sd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function td(a){var b=wd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function xd(){var a=[];td(function(b){a.push(b)});
return a}
var wd={wb:"allow-forms",xb:"allow-modals",yb:"allow-orientation-lock",zb:"allow-pointer-lock",Ab:"allow-popups",Bb:"allow-popups-to-escape-sandbox",Cb:"allow-presentation",Db:"allow-same-origin",Eb:"allow-scripts",Fb:"allow-top-navigation",Gb:"allow-top-navigation-by-user-activation"},yd=bb(function(){return xd()});
function zd(){var a=Ad(),b={};D(yd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Ad(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Bd(a){this.isValid=a}
function Cd(a){return new Bd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Dd=[Cd("data"),Cd("http"),Cd("https"),Cd("mailto"),Cd("ftp"),new Bd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Ed(a,b){b=void 0===b?Dd:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Bd&&d.isValid(a))return new md(a,kd)}}
function Fd(a){var b=void 0===b?Dd:b;return Ed(a,b)||nd}
;var Gd=(new Date).getTime();var Hd=new function(a,b){this.flag=a;this.defaultValue=void 0===b?!1:b}(434462125,!0);function Id(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Jd="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Jd);function Kd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(q){for(var w=g,p=0;64>p;p+=4)w[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=w[p-3]^w[p-8]^w[p-14]^w[p-16],w[p]=(q<<1|q>>>31)&4294967295;q=e[0];var y=e[1],z=e[2],F=e[3],K=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var M=F^y&(z^F);var O=1518500249}else M=y^z^F,O=1859775393;else 60>p?(M=y&z|F&(y|z),O=2400959708):(M=y^z^F,O=3395469782);M=((q<<5|q>>>27)&4294967295)+M+K+O+w[p]&4294967295;K=F;F=z;z=(y<<30|y>>>2)&4294967295;y=q;q=M}e[0]=e[0]+q&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+K&4294967295}
function c(q,w){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],y=0,z=q.length;y<z;++y)p.push(q.charCodeAt(y));q=p}w||(w=q.length);p=0;if(0==l)for(;p+64<w;)b(q.slice(p,p+64)),p+=64,m+=64;for(;p<w;)if(f[l++]=q[p++],m++,64==l)for(l=0,b(f);p+64<w;)b(q.slice(p,p+64)),p+=64,m+=64}
function d(){var q=[],w=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=w&255,w>>>=8;b(f);for(p=w=0;5>p;p++)for(var y=24;0<=y;y-=8)q[w++]=e[p]>>y&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,jb:function(){for(var q=d(),w="",p=0;p<q.length;p++)w+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return w}}}
;function Ld(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,Md(Id(d),a,c||null)].join(" "):null}
function Md(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),Nd(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=Nd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Nd(a){var b=Kd();b.update(a);return b.jb().toLowerCase()}
;var Od={};function Pd(a){this.i=a||{cookie:""}}
n=Pd.prototype;n.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ca:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Sb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ca}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=zb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ca:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.i.cookie};
n.clear=function(){for(var a=(this.i.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=zb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Qd=new Pd("undefined"==typeof document?null:document);function Rd(a){return!!Od.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Sd(a,b,c,d){(a=A[a])||(a=(new Pd(document)).get(b));return a?Ld(a,c,d):null}
function Td(a){var b=void 0===b?!1:b;var c=Id(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;Rd(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new Pd(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Rd(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new Pd(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Ld(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Rd(b)&&((b=Sd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Sd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Ud(){this.m=this.m;this.A=this.A}
Ud.prototype.m=!1;Ud.prototype.dispose=function(){this.m||(this.m=!0,this.ga())};
Ud.prototype.ga=function(){if(this.A)for(;this.A.length;)this.A.shift()()};function Vd(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
Vd.prototype.stopPropagation=function(){this.l=!0};
Vd.prototype.preventDefault=function(){this.defaultPrevented=!0};function Wd(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Xd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Yd[c])c=Yd[c];else{c=String(c);if(!Yd[c]){var f=/function\s+([^\(]+)/m.exec(c);Yd[c]=f?f[1]:"[Anonymous]"}c=Yd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Xd(a,b){b||(b={});b[Zd(a)]=!0;var c=a.stack||"";(a=a.hb)&&!b[Zd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Xd(a,b));return c}
function Zd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Yd={};var $d=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",function(){},b),A.removeEventListener("test",function(){},b)}catch(c){}return a}();function ae(a,b){Vd.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Xa(ae,Vd);var be={2:"touch",3:"pen",4:"mouse"};
ae.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(dc){a:{try{$b(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:be[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&ae.O.preventDefault.call(this)};
ae.prototype.stopPropagation=function(){ae.O.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
ae.prototype.preventDefault=function(){ae.O.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var ce="closure_listenable_"+(1E6*Math.random()|0);var de=0;function ee(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ra=e;this.key=++de;this.ia=this.na=!1}
function fe(a){a.ia=!0;a.listener=null;a.proxy=null;a.src=null;a.ra=null}
;function ge(a){this.src=a;this.listeners={};this.i=0}
ge.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=he(a,b,d,e);-1<g?(b=a[g],c||(b.na=!1)):(b=new ee(b,this.src,f,!!d,e),b.na=c,a.push(b));return b};
ge.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=he(e,b,c,d);return-1<b?(fe(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function ie(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(fe(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function he(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ia&&f.listener==b&&f.capture==!!c&&f.ra==d)return e}return-1}
;var je="closure_lm_"+(1E6*Math.random()|0),ke={},le=0;function me(a,b,c,d,e){if(d&&d.once)ne(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)me(a,b[f],c,d,e);else c=oe(c),a&&a[ce]?a.S(b,c,Pa(d)?!!d.capture:!!d,e):pe(a,b,c,!1,d,e)}
function pe(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=qe(a);h||(a[je]=h=new ge(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=re();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)$d||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(se(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");le++}}
function re(){function a(c){return b.call(a.src,a.listener,c)}
var b=te;return a}
function ne(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ne(a,b[f],c,d,e);else c=oe(c),a&&a[ce]?a.l.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):pe(a,b,c,!0,d,e)}
function ue(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ue(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=oe(c),a&&a[ce])?a.l.remove(String(b),c,d,e):a&&(a=qe(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=he(b,c,d,e)),(c=-1<a?b[a]:null)&&ve(c))}
function ve(a){if("number"!==typeof a&&a&&!a.ia){var b=a.src;if(b&&b[ce])ie(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(se(c),d):b.addListener&&b.removeListener&&b.removeListener(d);le--;(c=qe(b))?(ie(c,a),0==c.i&&(c.src=null,b[je]=null)):fe(a)}}}
function se(a){return a in ke?ke[a]:ke[a]="on"+a}
function te(a,b){if(a.ia)a=!0;else{b=new ae(b,this);var c=a.listener,d=a.ra||a.src;a.na&&ve(a);a=c.call(d,b)}return a}
function qe(a){a=a[je];return a instanceof ge?a:null}
var we="__closure_events_fn_"+(1E9*Math.random()>>>0);function oe(a){if("function"===typeof a)return a;a[we]||(a[we]=function(b){return a.handleEvent(b)});
return a[we]}
;function J(){Ud.call(this);this.l=new ge(this);this.xa=this;this.J=null}
Xa(J,Ud);J.prototype[ce]=!0;J.prototype.addEventListener=function(a,b,c,d){me(this,a,b,c,d)};
J.prototype.removeEventListener=function(a,b,c,d){ue(this,a,b,c,d)};
function xe(a,b){var c=a.J;if(c){var d=[];for(var e=1;c;c=c.J)d.push(c),++e}a=a.xa;c=b.type||b;"string"===typeof b?b=new Vd(b,a):b instanceof Vd?b.target=b.target||a:(e=b,b=new Vd(c,a),ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=ye(g,c,!0,b)&&e}b.l||(g=b.i=a,e=ye(g,c,!0,b)&&e,b.l||(e=ye(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=ye(g,c,!1,b)&&e}
J.prototype.ga=function(){J.O.ga.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,fe(d[e]);delete a.listeners[c];a.i--}}this.J=null};
J.prototype.S=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function ye(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ia&&g.capture==c){var h=g.listener,k=g.ra||g.src;g.na&&ie(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function ze(a){J.call(this);var b=this;this.C=this.j=0;this.K=null!=a?a:{M:function(e,f){return setTimeout(e,f)},
Z:clearTimeout};var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return x(function(e){return v(e,Ae(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.C||Be(this)}
u(ze,J);function Ce(){var a=De;ze.i||(ze.i=new ze(a));return ze.i}
ze.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.K.Z(this.C);delete ze.i};
ze.prototype.G=function(){return this.i};
function Be(a){a.C=a.K.M(function(){var b;return x(function(c){if(1==c.i)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.s(3):v(c,Ae(a),3):v(c,Ae(a),3);Be(a);c.i=0})},3E4)}
function Ae(a,b){return a.v?a.v:a.v=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,xa(h,2,3),d&&(a.j=a.K.M(function(){d.abort()},b||2E4)),v(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Aa(h);a.v=void 0;a.j&&(a.K.Z(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?xe(a,"networkstatus-online"):xe(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:za(h),g=!1,h.s(3)}})})}
;function Ee(){this.data_=[];this.i=-1}
Ee.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
Ee.prototype.get=function(a){return!!this.data_[a]};
function Fe(a){-1===a.i&&(a.i=db(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function Ge(){var a=He,b="Ba";if(a.Ba&&a.hasOwnProperty(b))return a.Ba;var c=new a;a.Ba=c;a.hasOwnProperty(b);return c}
;function He(){var a={};this.B=function(b,c){return null!=a[b]?a[b]:c}}
;function Ie(a){I.call(this,a,-1,Je)}
u(Ie,I);function Ke(a,b){return G(a,2,b)}
function Le(a,b){return G(a,3,b)}
function Me(a,b){return G(a,4,b)}
function Ne(a,b){return G(a,5,b)}
function Oe(a,b){return G(a,9,b)}
function Pe(a,b){var c=void 0===c?!1:c;Jc(a);if(b){var d=Dc([]);for(var e=0;e<b.length;e++)d[e]=b[e].D;a.i||(a.i={});a.i[10]=b}else a.i&&(a.i[10]=void 0),d=Ic;return G(a,10,d,c)}
function Qe(a,b){return G(a,11,b)}
function Re(a,b){return G(a,1,b)}
function Se(a){I.call(this,a)}
u(Se,I);var Je=[10,6];var Te="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Ue(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Ve(a){var b,c;if("function"!==typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues))return null;var d=Ue(a);if(d.uach_promise)return d.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Te).then(function(e){null!=d.uach||(d.uach=e);return e});
return d.uach_promise=a}
function We(a){var b;return Qe(Pe(Oe(Ne(Me(Le(Ke(Re(new Ie,a.platform||""),a.platformVersion||""),a.architecture||""),a.model||""),a.uaFullVersion||""),a.bitness||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Se;d=G(d,1,c.brand);return G(d,2,c.version)}))||[]),a.wow64||!1)}
function Xe(){var a=window;if(Ge().B(Hd.flag,Hd.defaultValue)){var b,c;return null!=(c=null==(b=Ve(a))?void 0:b.then(function(g){return We(g)}))?c:null}var d,e;
if("function"!==typeof(null==(d=a.navigator)?void 0:null==(e=d.userAgentData)?void 0:e.getHighEntropyValues))return null;var f;return null!=(f=a.navigator.userAgentData.getHighEntropyValues(Te).then(function(g){return We(g)}))?f:null}
;function Ye(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
Ye.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function Ze(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;var $e;function af(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=rd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ka;c.Ka=null;e()}};
return function(e){d.next={Ka:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function bf(){this.j=this.i=null}
bf.prototype.add=function(a,b){var c=cf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
bf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var cf=new Ye(function(){return new df},function(a){return a.reset()});
function df(){this.next=this.scope=this.i=null}
df.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
df.prototype.reset=function(){this.next=this.scope=this.i=null};function ef(a,b){ff||gf();hf||(ff(),hf=!0);jf.add(a,b)}
var ff;function gf(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);ff=function(){a.then(kf)}}else ff=function(){var b=kf;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!E("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?($e||($e=af()),$e(b)):A.setImmediate(b)}}
var hf=!1,jf=new bf;function kf(){for(var a;a=jf.remove();){try{a.i.call(a.scope)}catch(b){Mc(b)}Ze(cf,a)}hf=!1}
;function If(a,b){this.i=a[A.Symbol.iterator]();this.j=b}
If.prototype[Symbol.iterator]=function(){return this};
If.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function Jf(a,b){return new If(a,b)}
;function Kf(){this.blockSize=-1}
;function Lf(){this.blockSize=-1;this.blockSize=64;this.i=[];this.o=[];this.A=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
Xa(Lf,Kf);Lf.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function Mf(a,b,c){c||(c=0);var d=a.A;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
Lf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)Mf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Mf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Mf(this,e);f=0;break}}this.j=f;this.m+=b}};
Lf.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;Mf(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function Nf(){}
Nf.prototype.next=function(){return Of};
var Of={done:!0,value:void 0};function Pf(a){return{value:a,done:!1}}
Nf.prototype.L=function(){return this};function Qf(a){if(a instanceof Rf||a instanceof Sf||a instanceof Tf)return a;if("function"==typeof a.next)return new Rf(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Rf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.L)return new Rf(function(){return a.L()});
throw Error("Not an iterator or iterable.");}
function Rf(a){this.j=a}
Rf.prototype.L=function(){return new Sf(this.j())};
Rf.prototype[Symbol.iterator]=function(){return new Tf(this.j())};
Rf.prototype.i=function(){return new Tf(this.j())};
function Sf(a){this.j=a}
u(Sf,Nf);Sf.prototype.next=function(){return this.j.next()};
Sf.prototype[Symbol.iterator]=function(){return new Tf(this.j)};
Sf.prototype.i=function(){return new Tf(this.j)};
function Tf(a){Rf.call(this,function(){return a});
this.l=a}
u(Tf,Rf);Tf.prototype.next=function(){return this.l.next()};function Uf(a,b){this.j={};this.i=[];this.l=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Uf)for(c=Vf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Vf(a){Wf(a);return a.i.concat()}
n=Uf.prototype;n.has=function(a){return Xf(this.j,a)};
n.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Yf;Wf(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Yf(a,b){return a===b}
n.isEmpty=function(){return 0==this.size};
n.clear=function(){this.j={};this.l=this.size=this.i.length=0};
n.remove=function(a){return this.delete(a)};
n.delete=function(a){return Xf(this.j,a)?(delete this.j[a],--this.size,this.l++,this.i.length>2*this.size&&Wf(this),!0):!1};
function Wf(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];Xf(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],Xf(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
n.get=function(a,b){return Xf(this.j,a)?this.j[a]:b};
n.set=function(a,b){Xf(this.j,a)||(this.size+=1,this.i.push(a),this.l++);this.j[a]=b};
n.forEach=function(a,b){for(var c=Vf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Uf(this)};
n.keys=function(){return Qf(this.L(!0)).i()};
n.values=function(){return Qf(this.L(!1)).i()};
n.entries=function(){var a=this;return Jf(this.keys(),function(b){return[b,a.get(b)]})};
n.L=function(a){Wf(this);var b=0,c=this.l,d=this,e=new Nf;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return Of;var f=d.i[b++];return Pf(a?f:d.j[f])};
return e};
function Xf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Zf=A.JSON.stringify;function $f(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function ag(a){this.i=0;this.v=void 0;this.m=this.j=this.l=null;this.o=this.A=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){bg(b,2,c)},function(c){bg(b,3,c)})}catch(c){bg(this,3,c)}}
function cg(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
cg.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var dg=new Ye(function(){return new cg},function(a){a.reset()});
function eg(a,b,c){var d=dg.get();d.j=a;d.onRejected=b;d.context=c;return d}
ag.prototype.then=function(a,b,c){return fg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
ag.prototype.$goog_Thenable=!0;ag.prototype.cancel=function(a){if(0==this.i){var b=new gg(a);ef(function(){hg(this,b)},this)}};
function hg(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?hg(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):ig(c),jg(c,e,3,b)))}a.l=null}else bg(a,3,b)}
function kg(a,b){a.j||2!=a.i&&3!=a.i||lg(a);a.m?a.m.next=b:a.j=b;a.m=b}
function fg(a,b,c,d){var e=eg(null,null,null);e.i=new ag(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof gg?g(h):f(k)}catch(l){g(l)}}:g});
e.i.l=a;kg(a,e);return e.i}
ag.prototype.J=function(a){this.i=0;bg(this,2,a)};
ag.prototype.P=function(a){this.i=0;bg(this,3,a)};
function bg(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.J,f=a.P;if(d instanceof ag){kg(d,eg(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){mg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.v=c,a.i=b,a.l=null,lg(a),3!=b||c instanceof gg||ng(a,c))}}
function mg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function lg(a){a.A||(a.A=!0,ef(a.C,a))}
function ig(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
ag.prototype.C=function(){for(var a;a=ig(this);)jg(this,a,this.i,this.v);this.A=!1};
function jg(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.o;a=a.l)a.o=!1;if(b.i)b.i.l=null,og(b,c,d);else try{b.l?b.j.call(b.context):og(b,c,d)}catch(e){pg.call(null,e)}Ze(dg,b)}
function og(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function ng(a,b){a.o=!0;ef(function(){a.o&&pg.call(null,b)})}
var pg=Mc;function gg(a){Za.call(this,a)}
Xa(gg,Za);gg.prototype.name="cancel";function L(a){Ud.call(this);this.v=1;this.l=[];this.o=0;this.i=[];this.j={};this.C=!!a}
Xa(L,Ud);n=L.prototype;n.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.v;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.v=e+3;d.push(e);return e};
function qg(a,b,c){var d=rg;if(a=d.j[a]){var e=d.i;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.la(a)}}
n.la=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.o?(this.l.push(a),this.i[a+1]=function(){}):(c&&eb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
n.da=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.C)for(e=0;e<c.length;e++){var g=c[e];sg(this.i[g+1],this.i[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.m;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.la(c)}}return 0!=e}return!1};
function sg(a,b,c){ef(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.la,this),delete this.j[a])}else this.i.length=0,this.j={}};
n.ga=function(){L.O.ga.call(this);this.clear();this.l.length=0};function tg(a){this.i=a}
tg.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,Zf(b))};
tg.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
tg.prototype.remove=function(a){this.i.remove(a)};function ug(a){this.i=a}
Xa(ug,tg);function vg(a){this.data=a}
function wg(a){return void 0===a||a instanceof vg?a:new vg(a)}
ug.prototype.set=function(a,b){ug.O.set.call(this,a,wg(b))};
ug.prototype.j=function(a){a=ug.O.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ug.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function xg(a){this.i=a}
Xa(xg,ug);xg.prototype.set=function(a,b,c){if(b=wg(b)){if(c){if(c<Date.now()){xg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}xg.O.set.call(this,a,b)};
xg.prototype.j=function(a){var b=xg.O.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())xg.prototype.remove.call(this,a);else return b}};function yg(){}
;function zg(){}
Xa(zg,yg);zg.prototype[Symbol.iterator]=function(){return Qf(this.L(!0)).i()};
zg.prototype.clear=function(){var a=Array.from(this);a=t(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ag(a){this.i=a}
Xa(Ag,zg);n=Ag.prototype;n.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeItem(a)};
n.L=function(a){var b=0,c=this.i,d=new Nf;d.next=function(){if(b>=c.length)return Of;var e=c.key(b++);if(a)return Pf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Pf(e)};
return d};
n.clear=function(){this.i.clear()};
n.key=function(a){return this.i.key(a)};function Bg(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
Xa(Bg,Ag);function Cg(a,b){this.j=a;this.i=null;var c;if(c=bc)c=!(9<=Number(oc));if(c){Dg||(Dg=new Uf);this.i=Dg.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Dg.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
Xa(Cg,zg);var Eg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Dg=null;function Fg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Eg[b]})}
n=Cg.prototype;n.isAvailable=function(){return!!this.i};
n.set=function(a,b){this.i.setAttribute(Fg(a),b);Gg(this)};
n.get=function(a){a=this.i.getAttribute(Fg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeAttribute(Fg(a));Gg(this)};
n.L=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new Nf;d.next=function(){if(b>=c.length)return Of;var e=c[b++];if(a)return Pf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Pf(e)};
return d};
n.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Gg(this)};
function Gg(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Hg(a,b){this.j=a;this.i=b+"::"}
Xa(Hg,zg);Hg.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Hg.prototype.get=function(a){return this.j.get(this.i+a)};
Hg.prototype.remove=function(a){this.j.remove(this.i+a)};
Hg.prototype.L=function(a){var b=this.j[Symbol.iterator](),c=this,d=new Nf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return Pf(a?e.slice(c.i.length):c.j.get(e))};
return d};function Ig(a){I.call(this,a)}
u(Ig,I);Ig.prototype.getKey=function(){return Tc(this,1)};
Ig.prototype.X=function(){return Tc(this,2===Wc(this,Jg)?2:-1)};
Ig.prototype.setValue=function(a){return Vc(this,2,Jg,a)};
var Jg=[2,3,4,5,6];function Kg(a){I.call(this,a)}
u(Kg,I);function Lg(a){I.call(this,a)}
u(Lg,I);function Mg(a){I.call(this,a,-1,Ng)}
u(Mg,I);Mg.prototype.getPlayerType=function(){return Tc(this,36)};
Mg.prototype.setHomeGroupInfo=function(a){return H(this,81,a)};
var Ng=[9,66,24,32,86,100,101];function Og(a){I.call(this,a,-1,Pg)}
u(Og,I);var Pg=[15,26,28];function Qg(a){I.call(this,a)}
u(Qg,I);Qg.prototype.setToken=function(a){return G(this,2,a)};function Rg(a){I.call(this,a,-1,Sg)}
u(Rg,I);Rg.prototype.setSafetyMode=function(a){return G(this,5,a)};
var Sg=[12];function Tg(a){I.call(this,a,-1,Ug)}
u(Tg,I);var Ug=[12];function Vg(a){I.call(this,a,-1,Wg)}
u(Vg,I);function Xg(a){I.call(this,a)}
u(Xg,I);Xg.prototype.getKey=function(){return ad(this,1)};
Xg.prototype.X=function(){return ad(this,2)};
Xg.prototype.setValue=function(a){return G(this,2,a)};
var Wg=[4,5];function Yg(a){I.call(this,a)}
u(Yg,I);function Zg(a){I.call(this,a)}
u(Zg,I);var $g=[2,3,4];function ah(a){I.call(this,a)}
u(ah,I);function bh(a){I.call(this,a)}
u(bh,I);function ch(a){I.call(this,a)}
u(ch,I);function dh(a){I.call(this,a,-1,eh)}
u(dh,I);var eh=[10,17];function fh(a){I.call(this,a)}
u(fh,I);function gh(a){I.call(this,a)}
u(gh,I);function hh(a){I.call(this,a)}
u(hh,I);function ih(a){I.call(this,a,432)}
u(ih,I);
var jh=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117];function kh(a){I.call(this,a)}
u(kh,I);function lh(a){I.call(this,a)}
u(lh,I);lh.prototype.setVideoId=function(a){return Vc(this,1,mh,a)};
lh.prototype.getPlaylistId=function(){return Tc(this,2===Wc(this,mh)?2:-1)};
var mh=[1,2];function nh(a){I.call(this,a,-1,oh)}
u(nh,I);var oh=[3];var ph=A.window,qh,rh,sh=(null==ph?void 0:null==(qh=ph.yt)?void 0:qh.config_)||(null==ph?void 0:null==(rh=ph.ytcfg)?void 0:rh.data_)||{};C("yt.config_",sh);function th(){var a=arguments;1<a.length?sh[a[0]]=a[1]:1===a.length&&Object.assign(sh,a[0])}
function N(a,b){return a in sh?sh[a]:b}
function uh(){return N("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function vh(){var a=sh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var wh=[];function xh(a){wh.forEach(function(b){return b(a)})}
function yh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){zh(b)}}:a}
function zh(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=N("ERRORS",[]),e.push([a,"ERROR",b,c,d]),th("ERRORS",e));xh(a)}
function Ah(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=N("ERRORS",[]),e.push([a,"WARNING",b,c,d]),th("ERRORS",e))}
;var Bh=0;C("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Bh});var Ch={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Dh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Ch||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Dh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Dh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Dh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=A.ytEventsEventsListeners||{};C("ytEventsEventsListeners",lb);var Eh=A.ytEventsEventsCounter||{count:0};C("ytEventsEventsCounter",Eh);
function Fh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&rb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Gh(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Hh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
var Hh=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Ih(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Fh(a,b,c,d);if(!e){e=++Eh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Dh(h);if(!sd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Dh(h);
h.currentTarget=a;return c.call(a,h)};
g=yh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Hh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d]}}}
;function Jh(a,b){"function"===typeof a&&(a=yh(a));return window.setTimeout(a,b)}
function Kh(a){"function"===typeof a&&(a=yh(a));return window.setInterval(a,250)}
;var Lh=/^[\w.]*$/,Mh={q:!0,search_query:!0};function Nh(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Oh(f[0]||""),h=Oh(f[1]||"");g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var k=q,l=f[0],m=String(Nh);k.args=[{key:l,value:f[1],query:a,method:Ph==m?"unchanged":m}];Mh.hasOwnProperty(l)||Ah(k)}}return c}
var Ph=String(Nh);function Qh(a){var b=[];jb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Rh(a){"?"==a.charAt(0)&&(a=a.substr(1));return Nh(a,"&")}
function Sh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Rh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Wb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Th(a){if(!b)var b=window.location.href;var c=a.match(Rb)[1]||null,d=Tb(a);c&&d?(a=a.match(Rb),b=b.match(Rb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Tb(b)==d&&(Number(b.match(Rb)[4]||null)||null)==(Number(a.match(Rb)[4]||null)||null):!0;return a}
function Oh(a){return a&&a.match(Lh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function P(a){a=Uh(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Vh(a,b){a=Uh(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Uh(a){var b=N("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:N("EXPERIMENT_FLAGS",{})[a]}
function Wh(){var a=[],b=N("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=N("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function Xh(a){var b=Yh;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Gd;e.flash="0";a:{try{var f=b.i.top.location.href}catch(X){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?jd:g;try{var h=g.history.length}catch(X){h=0}e.u_his=h;var k;e.u_h=null==(k=jd.screen)?void 0:k.height;var l;e.u_w=null==(l=jd.screen)?void 0:l.width;var m;e.u_ah=null==(m=jd.screen)?void 0:m.availHeight;var q;e.u_aw=null==
(q=jd.screen)?void 0:q.availWidth;var w;e.u_cd=null==(w=jd.screen)?void 0:w.colorDepth}catch(X){}h=b.i;try{var p=h.screenX;var y=h.screenY}catch(X){}try{var z=h.outerWidth;var F=h.outerHeight}catch(X){}try{var K=h.innerWidth;var M=h.innerHeight}catch(X){}try{var O=h.screenLeft;var fb=h.screenTop}catch(X){}try{K=h.innerWidth,M=h.innerHeight}catch(X){}try{var hc=h.screen.availWidth;var ua=h.screen.availTop}catch(X){}p=[O,fb,p,y,hc,ua,z,F,K,M];y=b.i.top;try{var ma=(y||window).document,Y="CSS1Compat"==
ma.compatMode?ma.documentElement:ma.body;var ba=(new qd(Y.clientWidth,Y.clientHeight)).round()}catch(X){ba=new qd(-12245933,-12245933)}ma=ba;ba={};var ca=void 0===ca?A:ca;Y=new Ee;ca.SVGElement&&ca.document.createElementNS&&Y.set(0);y=zd();y["allow-top-navigation-by-user-activation"]&&Y.set(1);y["allow-popups-to-escape-sandbox"]&&Y.set(2);ca.crypto&&ca.crypto.subtle&&Y.set(3);ca.TextDecoder&&ca.TextEncoder&&Y.set(4);ca=Fe(Y);ba.bc=ca;ba.bih=ma.height;ba.biw=ma.width;ba.brdim=p.join();b=b.j;b=(ba.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ba.wgl=!!jd.WebGLRenderingContext,ba);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Yh=new function(){var a=window.document;this.i=window;this.j=a};
C("yt.ads_.signals_.getAdSignalsString",function(a){return Qh(Xh(a))});Date.now();var Zh="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function $h(){if(!Zh)return null;var a=Zh();return"open"in a?a:null}
;var ai={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},bi="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Jd)),ci=!1;
function di(a,b){b=void 0===b?{}:b;var c=Th(a),d=P("web_ajax_ignore_global_headers_if_set"),e;for(e in ai){var f=N(ai[e]);P("enable_visitor_header_for_vss")&&"X-Goog-Visitor-Id"===e&&!f&&(f=N("VISITOR_DATA"));!f||!c&&Tb(a)||d&&void 0!==b[e]||!P("enable_web_eom_visitor_data")&&"X-Goog-EOM-Visitor-Id"===e||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Tb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Tb(a)){try{var g=
(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Tb(a))b["X-YouTube-Ad-Signals"]=Qh(Xh());return b}
function ei(a){var b=window.location.search,c=Tb(a);P("debug_handle_relative_url_for_query_forward_killswitch")||c||!Th(a)||(c=document.location.hostname);var d=Sb(a.match(Rb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Rh(b),f={};D(bi,function(g){e[g]&&(f[g]=e[g])});
return Sh(a,f||{},!1)}
function fi(a,b){var c=b.format||"JSON";a=gi(a,b);var d=hi(a,b),e=!1,f=ii(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,q=400<=k.status&&500>k.status,w=500<=k.status&&600>k.status;if(l||q||w)m=ji(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};q=b.context||A;l?b.onSuccess&&b.onSuccess.call(q,k,m):b.onError&&b.onError.call(q,k,m);b.onFinish&&b.onFinish.call(q,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Jh(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},d)}}
function gi(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=N("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Sh(a,b||{},!0);return a}
function hi(a,b){var c=N("XSRF_FIELD_NAME"),d=N("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=N("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Tb(a)&&!b.withCredentials&&Tb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Rh(e),ub(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Wb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;
break a}f=!0}a=!f}!ci&&a&&"POST"!=b.method&&(ci=!0,zh(Error("AJAX request with postData should use POST")));return e}
function ji(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ah(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?ki(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=li(g)})}d&&mi(e);
return e}
function mi(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;xb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b];if(void 0===vb){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(g){A.console&&A.console.error(g.message)}vb=e}else vb=e}d=(e=vb)?e.createHTML(d):d;a[c]=new Qb(d)}else mi(a[b])}}
function ki(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function li(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ii(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&yh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=$h();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=ei(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=di(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var ni={Lb:"WEB_DISPLAY_MODE_UNKNOWN",Hb:"WEB_DISPLAY_MODE_BROWSER",Jb:"WEB_DISPLAY_MODE_MINIMAL_UI",Kb:"WEB_DISPLAY_MODE_STANDALONE",Ib:"WEB_DISPLAY_MODE_FULLSCREEN"};function oi(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;C("ytglobal.prefsUserPrefsPrefs_",B("ytglobal.prefsUserPrefsPrefs_")||{});var pi={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},qi={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},ri={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},si={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function ti(){var a=A.navigator;return a?a.connection:void 0}
;function ui(){return"INNERTUBE_API_KEY"in sh&&"INNERTUBE_API_VERSION"in sh}
function vi(){return{innertubeApiKey:N("INNERTUBE_API_KEY"),innertubeApiVersion:N("INNERTUBE_API_VERSION"),Aa:N("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Pa:N("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),mb:N("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:N("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ra:N("INNERTUBE_CONTEXT_HL"),Qa:N("INNERTUBE_CONTEXT_GL"),nb:N("INNERTUBE_HOST_OVERRIDE")||"",pb:!!N("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ob:!!N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:N("SERIALIZED_CLIENT_CONFIG_DATA")}}
function wi(a){var b={client:{hl:a.Ra,gl:a.Qa,clientName:a.Pa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Aa}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=N("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Wh();0<c.length&&(b.request={internalExperimentFlags:c});xi(a,void 0,b);yi(void 0,b);zi(a,void 0,b);Ai(void 0,b);N("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&
(b.user={onBehalfOfUser:N("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=t(Object.entries(Rh(N("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=t(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Bi(a){var b=new Tg,c=new Mg;G(c,1,a.Ra);G(c,2,a.Qa);G(c,16,a.mb);G(c,17,a.innertubeContextClientVersion);if(a.Aa){var d=a.Aa,e=new Kg;d.coldConfigData&&G(e,1,d.coldConfigData);d.appInstallData&&G(e,6,d.appInstallData);d.coldHashData&&G(e,3,d.coldHashData);d.hotHashData&&G(e,5,d.hotHashData);H(c,62,e)}(d=A.devicePixelRatio)&&1!=d&&G(c,65,d);d=N("EXPERIMENTS_TOKEN","");""!==d&&G(c,54,d);d=Wh();if(0<d.length){e=new Og;for(var f=0;f<d.length;f++){var g=new Ig;G(g,1,d[f].key);g.setValue(d[f].value);
$c(e,15,Ig,g)}H(b,5,e)}xi(a,c);yi(c);zi(a,c);Ai(c);N("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(a=new Rg,G(a,3,N("DELEGATED_SESSION_ID")));a=t(Object.entries(Rh(N("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=t(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?G(c,12,e):"cmodel"===d?G(c,13,e):"cbr"===d?G(c,87,e):"cbrver"===d?G(c,88,e):"cos"===d?G(c,18,e):"cosver"===d?G(c,19,e):"cplatform"===d&&G(c,42,e);H(b,1,c);return b}
function xi(a,b,c){a=a.Pa;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Xc(b,Lg,96)||new Lg;var d=oi();d=Object.keys(ni).indexOf(d);d=-1===d?null:d;null!==d&&G(c,3,d);H(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=oi())}
function yi(a,b){var c;if(P("web_log_memory_total_kbytes")&&(null==(c=A.navigator)?0:c.deviceMemory)){var d;c=null==(d=A.navigator)?void 0:d.deviceMemory;a?G(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function zi(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Xc(b,Kg,62))?d:new Kg;G(c,6,a.appInstallData);H(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Ai(a,b){a:{var c=ti();if(c){var d=pi[c.type||"unknown"]||"CONN_UNKNOWN";c=pi[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?G(a,61,qi[d]):b&&(b.client.connectionType=d));P("web_log_effective_connection_type")&&(d=ti(),d=null!=d&&d.effectiveType?si.hasOwnProperty(d.effectiveType)?si[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?G(a,94,ri[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Ci(a,b,c){c=void 0===c?{}:c;var d={};P("enable_web_eom_visitor_data")&&N("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":N("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||N("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Nb||N("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Mb:b=Td([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=N("SESSION_INDEX",0),P("pageid_as_header_web")&&(d["X-Goog-PageId"]=N("DELEGATED_SESSION_ID")));return d}
;function Di(a){a=Object.assign({},a);delete a.Authorization;var b=Td();if(b){var c=new Lf;c.update(N("INNERTUBE_API_KEY"));c.update(b);a.hash=xc(c.digest(),3)}return a}
;function Ei(a){var b=new Bg;(b=b.isAvailable()?a?new Hg(b,a):b:null)||(a=new Cg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new xg(a):null;this.j=document.domain||window.location.hostname}
Ei.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Zf(b))}catch(f){return}else e=escape(b);b=this.j;Qd.set(""+a,e,{Ca:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Ei.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=Qd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ei.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;Qd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Fi=window,R=Fi.ytcsi&&Fi.ytcsi.now?Fi.ytcsi.now:Fi.performance&&Fi.performance.timing&&Fi.performance.now&&Fi.performance.timing.navigationStart?function(){return Fi.performance.timing.navigationStart+Fi.performance.now()}:function(){return(new Date).getTime()};var Gi;function Hi(){Gi||(Gi=new Ei("yt.innertube"));return Gi}
function Ii(a,b,c,d){if(d)return null;d=Hi().get("nextId",!0)||1;var e=Hi().get("requests",!0)||{};e[d]={method:a,request:b,authState:Di(c),requestTime:Math.round(R())};Hi().set("nextId",d+1,86400,!0);Hi().set("requests",e,86400,!0);return d}
function Ji(a){var b=Hi().get("requests",!0)||{};delete b[a];Hi().set("requests",b,86400,!0)}
function Ki(a){var b=Hi().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(R())-d.requestTime)){var e=d.authState,f=Di(Ci(!1));rb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(R())),Li(a,d.method,e,{}));delete b[c]}}Hi().set("requests",b,86400,!0)}}
;function Mi(){}
function Ni(a,b){return Oi(a,0,b)}
Mi.prototype.M=function(a,b){return Oi(a,1,b)};
function Pi(a,b){Oi(a,2,b)}
;function Qi(){Mi.apply(this,arguments)}
u(Qi,Mi);function Ri(){Qi.i||(Qi.i=new Qi);return Qi.i}
function Oi(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Jh(a,c||0)}
Qi.prototype.Z=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Qi.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};var De=Ri();var Si=pc||qc;var Ti=function(){var a;return function(){a||(a=new Ei("ytidb"));return a}}();
function Ui(){var a;return null==(a=Ti())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Vi=[],Wi=!1;function Xi(a){Wi||(Vi.push({type:"ERROR",payload:a}),10<Vi.length&&Vi.shift())}
function Yi(a,b){Wi||(Vi.push({type:"EVENT",eventType:a,payload:b}),10<Vi.length&&Vi.shift())}
;function Zi(a){var b=Ka.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
u(Zi,Error);function $i(){try{return aj(),!0}catch(a){return!1}}
function aj(){if(void 0!==N("DATASYNC_ID"))return N("DATASYNC_ID");throw new Zi("Datasync ID not set","unknown");}
;function bj(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function cj(a){return a.substr(0,a.indexOf(":"))||a}
;var dj={},ej=(dj.AUTH_INVALID="No user identifier specified.",dj.EXPLICIT_ABORT="Transaction was explicitly aborted.",dj.IDB_NOT_SUPPORTED="IndexedDB is not supported.",dj.MISSING_INDEX="Index not created.",dj.MISSING_OBJECT_STORES="Object stores not created.",dj.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",dj.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",dj.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
dj.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",dj.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",dj.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",dj.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",dj),fj={},gj=(fj.AUTH_INVALID="ERROR",fj.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",fj.EXPLICIT_ABORT="IGNORED",fj.IDB_NOT_SUPPORTED="ERROR",fj.MISSING_INDEX=
"WARNING",fj.MISSING_OBJECT_STORES="ERROR",fj.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",fj.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",fj.QUOTA_EXCEEDED="WARNING",fj.QUOTA_MAYBE_EXCEEDED="WARNING",fj.UNKNOWN_ABORT="WARNING",fj.INCOMPATIBLE_DB_VERSION="WARNING",fj),hj={},ij=(hj.AUTH_INVALID=!1,hj.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,hj.EXPLICIT_ABORT=!1,hj.IDB_NOT_SUPPORTED=!1,hj.MISSING_INDEX=!1,hj.MISSING_OBJECT_STORES=!1,hj.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,hj.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,hj.QUOTA_EXCEEDED=!1,hj.QUOTA_MAYBE_EXCEEDED=!0,hj.UNKNOWN_ABORT=!0,hj.INCOMPATIBLE_DB_VERSION=!1,hj);function T(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?ej[a]:c;d=void 0===d?gj[a]:d;e=void 0===e?ij[a]:e;Zi.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,T.prototype)}
u(T,Zi);function jj(a,b){T.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},ej.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,jj.prototype)}
u(jj,T);function kj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,kj.prototype)}
u(kj,Error);var lj=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function mj(a,b,c,d){b=cj(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof T)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new T("QUOTA_EXCEEDED",a);if(rc&&"UnknownError"===e.name)return new T("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof kj)return new T("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&lj.some(function(f){return e.message.includes(f)}))return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new T("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Rb:e.name})];e.level="WARNING";return e}
function nj(a,b,c){var d=Ui();return new T("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function oj(a){if(!a)throw Error();throw a;}
function pj(a){return a}
function qj(a){this.i=a}
function U(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=t(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=t(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
U.all=function(a){return new U(new qj(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={aa:0};f.aa<a.length;f={aa:f.aa},++f.aa)rj(U.resolve(a[f.aa]).then(function(g){return function(h){d[g.aa]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
U.resolve=function(a){return new U(new qj(function(b,c){a instanceof U?a.then(b,c):b(a)}))};
U.reject=function(a){return new U(new qj(function(b,c){c(a)}))};
U.prototype.then=function(a,b){var c=this,d=null!=a?a:pj,e=null!=b?b:oj;return new U(new qj(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){sj(c,c,d,f,g)}),c.onRejected.push(function(){tj(c,c,e,f,g)})):"FULFILLED"===c.state.status?sj(c,c,d,f,g):"REJECTED"===c.state.status&&tj(c,c,e,f,g)}))};
function rj(a,b){a.then(void 0,b)}
function sj(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof U?uj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function tj(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof U?uj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function uj(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof U?uj(a,b,f,d,e):d(f)},function(f){e(f)})}
;function vj(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function wj(a){return new Promise(function(b,c){vj(a,b,c)})}
function V(a){return new U(new qj(function(b,c){vj(a,b,c)}))}
;function xj(a,b){return new U(new qj(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function mk(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(R());this.j=!1}
n=mk.prototype;n.add=function(a,b,c){return nk(this,[a],{mode:"readwrite",I:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return nk(this,[a],{mode:"readwrite",I:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return nk(this,[a],{mode:"readonly",I:!0},function(c){return c.objectStore(a).count(b)})};
function ok(a,b,c){a=a.i.createObjectStore(b,c);return new pk(a)}
n.delete=function(a,b){return nk(this,[a],{mode:"readwrite",I:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return nk(this,[a],{mode:"readonly",I:!0},function(c){return c.objectStore(a).get(b)})};
function qk(a,b){return nk(a,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(c){c=c.objectStore("LogsRequestsStore");return V(c.i.put(b,void 0))})}
n.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function nk(a,b,c,d){var e,f,g,h,k,l,m,q,w,p,y,z;return x(function(F){switch(F.i){case 1:var K={mode:"readonly",I:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?K.mode=c:Object.assign(K,c);e=K;a.transactionCount++;f=e.I?3:1;g=0;case 2:if(h){F.s(3);break}g++;k=Math.round(R());xa(F,4);l=a.i.transaction(b,e.mode);K=new rk(l);K=sk(K,d);return v(F,K,6);case 6:return m=F.j,q=Math.round(R()),tk(a,k,q,g,void 0,b.join(),e),F.return(m);case 4:w=za(F);p=Math.round(R());y=mj(w,a.i.name,b.join(),a.i.version);
if((z=y instanceof T&&!y.i)||g>=f)tk(a,k,p,g,y,b.join(),e),h=y;F.s(2);break;case 3:return F.return(Promise.reject(h))}})}
function tk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof T&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Yi("QUOTA_EXCEEDED",{dbName:cj(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof T&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),Yi("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),uk(a,!1,d,f,b,g.tag),Xi(e)):uk(a,!0,d,f,b,g.tag)}
function uk(a,b,c,d,e,f){Yi("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.i.name};
function pk(a){this.i=a}
n=pk.prototype;n.add=function(a,b){return V(this.i.add(a,b))};
n.autoIncrement=function(){return this.i.autoIncrement};
n.clear=function(){return V(this.i.clear()).then(function(){})};
n.count=function(a){return V(this.i.count(a))};
function vk(a,b){return wk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?vk(this,a):V(this.i.delete(a))};
n.get=function(a){return V(this.i.get(a))};
n.index=function(a){try{return new xk(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new kj(a,this.i.name);throw b;}};
n.getName=function(){return this.i.name};
n.keyPath=function(){return this.i.keyPath};
function wk(a,b,c){a=a.i.openCursor(b.query,b.direction);return yk(a).then(function(d){return xj(d,c)})}
function rk(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=T;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function sk(a,b){var c=new Promise(function(d,e){try{rj(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return t(d).next().value})}
rk.prototype.abort=function(){this.i.abort();this.j=!0;throw new T("EXPLICIT_ABORT");};
rk.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new pk(a),this.l.set(a,b));return b};
function xk(a){this.i=a}
n=xk.prototype;n.count=function(a){return V(this.i.count(a))};
n.delete=function(a){return zk(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
n.get=function(a){return V(this.i.get(a))};
n.getKey=function(a){return V(this.i.getKey(a))};
n.keyPath=function(){return this.i.keyPath};
n.unique=function(){return this.i.unique};
function zk(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return yk(a).then(function(d){return xj(d,c)})}
function Ak(a,b){this.request=a;this.cursor=b}
function yk(a){return V(a).then(function(b){return b?new Ak(a,b):null})}
n=Ak.prototype;n.advance=function(a){this.cursor.advance(a);return yk(this.request)};
n.continue=function(a){this.cursor.continue(a);return yk(this.request)};
n.delete=function(){return V(this.cursor.delete()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.X=function(){return this.cursor.value};
n.update=function(a){return V(this.cursor.update(a))};function Bk(a,b,c){return new Promise(function(d,e){function f(){w||(w=new mk(g.result,{closed:q}));return w}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.ub,m=c.upgrade,q=c.closed,w;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&Yi("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:cj(a)});var y=f(),z=new rk(g.transaction);
m&&m(y,function(F){return p.oldVersion<F&&p.newVersion>=F},z);
z.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){Yi("IDB_UNEXPECTEDLY_CLOSED",{dbName:cj(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Ck(a,b,c){c=void 0===c?{}:c;return Bk(a,b,c)}
function Dk(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.i)return xa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),v(g,wj(c),4);
if(2!=g.i)return ya(g,0);f=za(g);throw mj(f,a,"",-1);})}
;function Ek(a){return new Promise(function(b){Pi(function(){b()},a)})}
function Fk(a,b){this.name=a;this.options=b;this.m=!0;this.A=this.o=0;this.j=500}
Fk.prototype.l=function(a,b,c){c=void 0===c?{}:c;return Ck(a,b,c)};
Fk.prototype.delete=function(a){a=void 0===a?{}:a;return Dk(this.name,a)};
function Gk(a,b){return new T("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Hk(a,b){if(!b)throw nj("openWithToken",cj(a.name));return Ik(a)}
function Ik(a){function b(){var f,g,h,k,l,m,q,w,p,y;return x(function(z){switch(z.i){case 1:return g=null!=(f=Error().stack)?f:"",xa(z,2),v(z,a.l(a.name,a.options.version,d),4);case 4:h=z.j;for(var F=a.options,K=[],M=t(Object.keys(F.ha)),O=M.next();!O.done;O=M.next()){O=O.value;var fb=F.ha[O],hc=void 0===fb.sb?Number.MAX_VALUE:fb.sb;!(h.i.version>=fb.ya)||h.i.version>=hc||h.i.objectStoreNames.contains(O)||K.push(O)}k=K;if(0===k.length){z.s(5);break}l=Object.keys(a.options.ha);m=h.objectStoreNames();
if(a.A<Vh("ytidb_reopen_db_retries",0))return a.A++,h.close(),Xi(new T("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());if(!(a.o<Vh("ytidb_remake_db_retries",1))){z.s(6);break}a.o++;if(!P("ytidb_remake_db_enable_backoff_delay")){z.s(7);break}return v(z,Ek(a.j),8);case 8:a.j*=2;case 7:return v(z,a.delete(),9);case 9:return Xi(new T("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());
case 6:throw new jj(m,l);case 5:return z.return(h);case 2:q=za(z);if(q instanceof DOMException?"VersionError"!==q.name:"DOMError"in self&&q instanceof DOMError?"VersionError"!==q.name:!(q instanceof Object&&"message"in q)||"An attempt was made to open a database using a lower version than the existing version."!==q.message){z.s(10);break}return v(z,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:w=z.j;p=w.i.version;if(void 0!==a.options.version&&p>a.options.version+1)throw w.close(),
a.m=!1,Gk(a,p);return z.return(w);case 10:throw c(),q instanceof Error&&!P("ytidb_async_stack_killswitch")&&(q.stack=q.stack+"\n"+g.substring(g.indexOf("\n")+1)),mj(q,a.name,"",null!=(y=a.options.version)?y:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.m)throw Gk(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,ub:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var Jk=new Fk("YtIdbMeta",{ha:{databases:{ya:1}},upgrade:function(a,b){b(1)&&ok(a,"databases",{keyPath:"actualName"})}});
function Kk(a,b){var c;return x(function(d){if(1==d.i)return v(d,Hk(Jk,b),2);c=d.j;return d.return(nk(c,["databases"],{I:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return V(f.i.put(a,void 0)).then(function(){})})}))})}
function Lk(a,b){var c;return x(function(d){if(1==d.i)return a?v(d,Hk(Jk,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function Mk(a,b){var c,d;return x(function(e){return 1==e.i?(c=[],v(e,Hk(Jk,b),2)):3!=e.i?(d=e.j,v(e,nk(d,["databases"],{I:!0,mode:"readonly"},function(f){c.length=0;return wk(f.objectStore("databases"),{},function(g){a(g.X())&&c.push(g.X());return g.continue()})}),3)):e.return(c)})}
function Nk(a){return Mk(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Ok,Pk=new function(){}(new function(){});
function Qk(){var a,b,c,d;return x(function(e){switch(e.i){case 1:a=Ui();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Si)f=/WebKit\/([0-9]+)/.exec(Jb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Jb()),f=!(f&&602<=parseInt(f[1],10)));if(f||cc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
xa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return v(e,Kk(d,Pk),4);case 4:return v(e,Lk("yt-idb-test-do-not-use",Pk),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function Rk(){if(void 0!==Ok)return Ok;Wi=!0;return Ok=Qk().then(function(a){Wi=!1;var b;if(null!=(b=Ti())&&b.i){var c;b={hasSucceededOnce:(null==(c=Ui())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Ti())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Sk(){return B("ytglobal.idbToken_")||void 0}
function Tk(){var a=Sk();return a?Promise.resolve(a):Rk().then(function(b){(b=b?Pk:void 0)&&C("ytglobal.idbToken_",b);return b})}
;new $f;function Uk(a){if(!$i())throw a=new T("AUTH_INVALID",{dbName:a}),Xi(a),a;var b=aj();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Vk(a,b,c,d){var e,f,g,h,k,l;return x(function(m){switch(m.i){case 1:return f=null!=(e=Error().stack)?e:"",v(m,Tk(),2);case 2:g=m.j;if(!g)throw h=nj("openDbImpl",a,b),P("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Xi(h),h;bj(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Uk(a);xa(m,3);return v(m,Kk(k,g),5);case 5:return v(m,Ck(k.actualName,b,d),6);case 6:return m.return(m.j);case 3:return l=za(m),xa(m,7),v(m,Lk(k.actualName,g),9);case 9:ya(m,
8);break;case 7:za(m);case 8:throw l;}})}
function Wk(a,b,c){c=void 0===c?{}:c;return Vk(a,b,!1,c)}
function Xk(a,b,c){c=void 0===c?{}:c;return Vk(a,b,!0,c)}
function Yk(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.i)return v(e,Tk(),2);if(3!=e.i){c=e.j;if(!c)return e.return();bj(a);d=Uk(a);return v(e,Dk(d.actualName,b),3)}return v(e,Lk(d.actualName,c),0)})}
function Zk(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.i?v(e,Dk(d.actualName,b),2):v(e,Lk(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function $k(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.i)return v(d,Tk(),2);if(3!=d.i){b=d.j;if(!b)return d.return();bj("LogsDatabaseV2");return v(d,Nk(b),3)}c=d.j;return v(d,Zk(c,a,b),0)})}
function al(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.i)return v(d,Tk(),2);if(3!=d.i){c=d.j;if(!c)return d.return();bj(a);return v(d,Dk(a,b),3)}return v(d,Lk(a,c),0)})}
;function bl(a){this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.ca=function(){};
this.now=Date.now;this.fa=!1;var b;this.ab=null!=(b=a.ab)?b:100;var c;this.Za=null!=(c=a.Za)?c:1;var d;this.Xa=null!=(d=a.Xa)?d:2592E6;var e;this.Wa=null!=(e=a.Wa)?e:12E4;var f;this.Ya=null!=(f=a.Ya)?f:5E3;var g;this.u=null!=(g=a.u)?g:void 0;this.qa=!!a.qa;var h;this.pa=null!=(h=a.pa)?h:.1;var k;this.va=null!=(k=a.va)?k:10;a.handleError&&(this.handleError=a.handleError);a.ca&&(this.ca=a.ca);a.fa&&(this.fa=a.fa);this.B=a.B;this.K=a.K;this.F=a.F;this.H=a.H;this.U=a.U;this.Fa=a.Fa;this.Ea=a.Ea;this.u&&
(!this.B||this.B("networkless_logging"))&&cl(this)}
function cl(a){a.u&&!a.fa&&(a.i=!0,a.qa&&Math.random()<=a.pa&&a.F.ib(a.u),dl(a),a.H.G()&&a.ka(),a.H.S(a.Fa,a.ka.bind(a)),a.H.S(a.Ea,a.Ja.bind(a)))}
n=bl.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.u&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.F.set(d,this.u).then(function(e){d.id=e;c.H.G()&&el(c,d)}).catch(function(e){el(c,d);
fl(c,e)})}else this.U(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.u&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.B&&this.B("nwl_skip_retry")&&(e.skipRetry=c);if(this.H.G()||this.B&&this.B("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.i)return v(k,d.F.set(e,d.u).catch(function(l){fl(d,l)}),2);
f(g,h);k.i=0})}}this.U(a,b,e.skipRetry)}else this.F.set(e,this.u).catch(function(g){d.U(a,b,e.skipRetry);
fl(d,g)})}else this.U(a,b,this.B&&this.B("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.u&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.F.ba(d.id,c.u):e=!0;c.H.T&&c.B&&c.B("vss_network_hint")&&c.H.T(!0);f(g,h)};
this.U(d.url,d.options);this.F.set(d,this.u).then(function(g){d.id=g;e&&c.F.ba(d.id,c.u)}).catch(function(g){fl(c,g)})}else this.U(a,b)};
n.ka=function(){var a=this;if(!this.u)throw nj("throttleSend");this.j||(this.j=this.K.M(function(){var b;return x(function(c){if(1==c.i)return v(c,a.F.Oa("NEW",a.u),2);if(3!=c.i)return b=c.j,b?v(c,el(a,b),3):(a.Ja(),c.return());a.j&&(a.j=0,a.ka());c.i=0})},this.ab))};
n.Ja=function(){this.K.Z(this.j);this.j=0};
function el(a,b){var c,d;return x(function(e){switch(e.i){case 1:if(!a.u)throw c=nj("immediateSend"),c;if(void 0===b.id){e.s(2);break}return v(e,a.F.qb(b.id,a.u),3);case 3:(d=e.j)?b=d:a.ca(Error("The request cannot be found in the database."));case 2:if(gl(a,b,a.Xa)){e.s(4);break}a.ca(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.s(5);break}return v(e,a.F.ba(b.id,a.u),5);case 5:return e.return();case 4:b.skipRetry||(b=hl(a,b));if(!b){e.s(0);break}if(!b.skipRetry||
void 0===b.id){e.s(8);break}return v(e,a.F.ba(b.id,a.u),8);case 8:a.U(b.url,b.options,!!b.skipRetry),e.i=0}})}
function hl(a,b){if(!a.u)throw nj("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.i){case 1:g=il(f);if(!(a.B&&a.B("nwl_consider_error_code")&&g||a.B&&!a.B("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.va)){l.s(2);break}if(!a.H.V){l.s(3);break}return v(l,a.H.V(),3);case 3:if(a.H.G()){l.s(2);break}c(e,f);if(!a.B||!a.B("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){l.s(6);break}return v(l,a.F.Ga(b.id,a.u,!1),6);case 6:return l.return();case 2:if(a.B&&a.B("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.va)return l.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){l.s(8);break}return b.sendCount<a.Za?v(l,a.F.Ga(b.id,a.u),12):v(l,a.F.ba(b.id,a.u),8);case 12:a.K.M(function(){a.H.G()&&a.ka()},a.Ya);
case 8:c(e,f),l.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.s(2):v(h,a.F.ba(b.id,a.u),2);a.H.T&&a.B&&a.B("vss_network_hint")&&a.H.T(!0);d(e,f);h.i=0})};
return b}
function gl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function dl(a){if(!a.u)throw nj("retryQueuedRequests");a.F.Oa("QUEUED",a.u).then(function(b){b&&!gl(a,b,a.Wa)?a.K.M(function(){return x(function(c){if(1==c.i)return void 0===b.id?c.s(2):v(c,a.F.Ga(b.id,a.u),2);dl(a);c.i=0})}):a.H.G()&&a.ka()})}
function fl(a,b){a.bb&&!a.H.G()?a.bb(b):a.handleError(b)}
function il(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var jl=B("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.la;L.prototype.publish=L.prototype.da;L.prototype.clear=L.prototype.clear;C("ytPubsub2Pubsub2Instance",jl);C("ytPubsub2Pubsub2SubscribedKeys",B("ytPubsub2Pubsub2SubscribedKeys")||{});C("ytPubsub2Pubsub2TopicToKeys",B("ytPubsub2Pubsub2TopicToKeys")||{});C("ytPubsub2Pubsub2IsAsync",B("ytPubsub2Pubsub2IsAsync")||{});C("ytPubsub2Pubsub2SkipSubKey",null);function kl(a,b){Fk.call(this,a,b);this.options=b;bj(a)}
u(kl,Fk);function ll(a,b){var c;return function(){c||(c=new kl(a,b));return c}}
kl.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ha?Xk:Wk)(a,b,Object.assign({},c))};
kl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ha?al:Yk)(this.name,a)};
function ml(a,b){return ll(a,b)}
;var nl;
function ol(){if(nl)return nl();var a={};nl=ml("LogsDatabaseV2",{ha:(a.LogsRequestsStore={ya:2},a),Ha:!1,upgrade:function(b,c,d){c(2)&&ok(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return nl()}
;function pl(a){return Hk(ol(),a)}
function ql(a,b){var c,d,e,f;return x(function(g){if(1==g.i)return c={startTime:R(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},v(g,pl(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:N("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),v(g,qk(d,e),3);f=g.j;c.vb=R();rl(c);return g.return(f)})}
function sl(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.i)return c={startTime:R(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},v(l,pl(b),2);if(3!=l.i)return d=l.j,e=N("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,R()],h=IDBKeyRange.bound(f,g),k=void 0,v(l,nk(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(m){return zk(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(q){q.X()&&(k=q.X(),"NEW"===a&&(k.status="QUEUED",q.update(k)))})}),
3);
c.vb=R();rl(c);return l.return(k)})}
function tl(a,b){var c;return x(function(d){if(1==d.i)return v(d,pl(b),2);c=d.j;return d.return(nk(c,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",V(f.i.put(g,void 0)).then(function(){return g})})}))})}
function ul(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.i)return v(e,pl(b),2);d=e.j;return e.return(nk(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),V(g.i.put(h,void 0)).then(function(){return h})):U.resolve(void 0)})}))})}
function vl(a,b){var c;return x(function(d){if(1==d.i)return v(d,pl(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function wl(a){var b,c;return x(function(d){if(1==d.i)return v(d,pl(a),2);b=d.j;c=R()-2592E6;return v(d,nk(b,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(e){return wk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.X().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function xl(){x(function(a){return v(a,$k(),0)})}
function rl(a){if(!P("nwl_csi_killswitch")&&.01>=Math.random()){var b=B("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var yl={},zl=ml("ServiceWorkerLogsDatabase",{ha:(yl.SWHealthLog={ya:1},yl),Ha:!0,upgrade:function(a,b){b(1)&&ok(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Al(a){return Hk(zl(),a)}
function Bl(a){var b,c;x(function(d){if(1==d.i)return v(d,Al(a),2);b=d.j;c=R()-2592E6;return v(d,nk(b,["SWHealthLog"],{mode:"readwrite",I:!0},function(e){return wk(e.objectStore("SWHealthLog"),{},function(f){if(f.X().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Cl(a){var b;return x(function(c){if(1==c.i)return v(c,Al(a),2);b=c.j;return v(c,b.clear("SWHealthLog"),0)})}
;var Dl={},El=0;
function Fl(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)ii(a,void 0,"POST",b);else if(N("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ii(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new $a({url:a});if(d.l&&d.j||d.m){var e=Sb(a.match(Rb)[5]||null);var f=!(!e||!e.endsWith("/aclk")||"1"!==Yb(a,"ri"));break b}}catch(h){}f=!1}if(f){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var g=!0;break b}}catch(h){}g=!1}b=g?!0:!1}else b=!1;b||Gl(a)}}
function Gl(a){var b=new Image,c=""+El++;Dl[c]=b;b.onload=b.onerror=function(){delete Dl[c]};
b.src=a}
;function W(){this.i=new Map;this.j=!1}
function Hl(){if(!W.i){var a=B("yt.networkRequestMonitor.instance")||new W;C("yt.networkRequestMonitor.instance",a);W.i=a}return W.i}
W.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
W.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
W.prototype.removeParams=function(a){return a.split("?")[0]};
W.prototype.removeParams=W.prototype.removeParams;W.prototype.isEndpointCFR=W.prototype.isEndpointCFR;W.prototype.requestComplete=W.prototype.requestComplete;W.getInstance=Hl;var Il;function Jl(){Il||(Il=new Ei("yt.offline"));return Il}
function Kl(a){if(P("offline_error_handling")){var b=Jl().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Jl().set("errors",b,2592E3,!0)}}
function Ll(){if(P("offline_error_handling")){var a=Jl().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new Zi(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;zh(c)}Jl().set("errors",{},2592E3,!0)}}}
;var Ml=Vh("network_polling_interval",3E4);function Z(){J.call(this);var a=this;this.ma=0;this.C=this.o=!1;this.j=this.za();P("use_shared_nsm")?(this.i=Ce(),P("use_shared_nsm_and_keep_yt_online_updated")&&(this.i.S("networkstatus-online",function(){a.j=!0;a.C&&Ll()}),this.i.S("networkstatus-offline",function(){a.j=!1}))):(Nl(this),Ol(this))}
u(Z,J);function Pl(){if(!Z.i){var a=B("yt.networkStatusManager.instance")||new Z;C("yt.networkStatusManager.instance",a);Z.i=a}return Z.i}
n=Z.prototype;n.G=function(){if(P("use_shared_nsm")&&this.i){var a;return null==(a=this.i)?void 0:a.G()}return this.j};
n.T=function(a){if(P("use_shared_nsm")&&this.i){var b;null!=(b=this.i)&&(b.i=a)}else a!==this.j&&(this.j=a)};
n.rb=function(a){!P("use_shared_nsm")&&(this.o=!0,void 0===a?0:a)&&(this.ma||Ql(this))};
n.za=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.kb=function(){this.C=!0};
n.S=function(a,b){return P("use_shared_nsm")&&this.i?this.i.S(a,b):J.prototype.S.call(this,a,b)};
function Ol(a){window.addEventListener("online",function(){return x(function(b){if(1==b.i)return v(b,a.V(),2);a.C&&Ll();b.i=0})})}
function Nl(a){window.addEventListener("offline",function(){return x(function(b){return v(b,a.V(),0)})})}
function Ql(a){a.ma=Ni(function(){return x(function(b){if(1==b.i)return a.j?a.za()||!a.o?b.s(3):v(b,a.V(),3):v(b,a.V(),3);Ql(a);b.i=0})},Ml)}
n.V=function(a){var b=this;if(P("use_shared_nsm")&&this.i){var c=Ae(this.i,a);c.then(function(d){P("use_cfr_monitor")&&Hl().requestComplete("generate_204",d)});
return c}return this.v?this.v:this.v=new Promise(function(d){var e,f,g,h;return x(function(k){switch(k.i){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,xa(k,2,3),e&&(b.P=De.M(function(){e.abort()},a||2E4)),v(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:Aa(k);P("use_cfr_monitor")&&Hl().requestComplete("generate_204",h);b.v=void 0;b.P&&De.Z(b.P);h!==b.j&&(b.j=h,b.j&&b.o?xe(b,"ytnetworkstatus-online"):b.o&&xe(b,"ytnetworkstatus-offline"));d(h);Ba(k);break;case 2:za(k),h=!1,k.s(3)}})})};
Z.prototype.sendNetworkCheckRequest=Z.prototype.V;Z.prototype.listen=Z.prototype.S;Z.prototype.enableErrorFlushing=Z.prototype.kb;Z.prototype.getWindowStatus=Z.prototype.za;Z.prototype.monitorNetworkStatusChange=Z.prototype.rb;Z.prototype.networkStatusHint=Z.prototype.T;Z.prototype.isNetworkAvailable=Z.prototype.G;Z.getInstance=Pl;function Rl(a){a=void 0===a?{}:a;J.call(this);var b=this;this.j=this.P=0;this.o="ytnetworkstatus-offline";this.v="ytnetworkstatus-online";P("use_shared_nsm")&&(this.o="networkstatus-offline",this.v="networkstatus-online");this.i=Pl();var c=B("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.Ma);a.Ta&&(c=B("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=B("yt.networkStatusManager.instance.listen").bind(this.i))a.wa?(this.wa=a.wa,c(this.v,
function(){Sl(b,"publicytnetworkstatus-online")}),c(this.o,function(){Sl(b,"publicytnetworkstatus-offline")})):(c(this.v,function(){xe(b,"publicytnetworkstatus-online")}),c(this.o,function(){xe(b,"publicytnetworkstatus-offline")}))}
u(Rl,J);Rl.prototype.G=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Rl.prototype.T=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Rl.prototype.V=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return P("skip_network_check_if_cfr")&&Hl().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.T((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.G())})):c?d.return(c(a)):d.return(!0)})};
function Sl(a,b){a.wa?a.j?(De.Z(a.P),a.P=De.M(function(){a.C!==b&&(xe(a,b),a.C=b,a.j=R())},a.wa-(R()-a.j))):(xe(a,b),a.C=b,a.j=R()):xe(a,b)}
;var Tl;function Ul(){bl.call(this,{F:{ib:wl,ba:vl,Oa:sl,qb:tl,Ga:ul,set:ql},H:Vl(),handleError:zh,ca:Ah,U:Wl,now:R,bb:Kl,K:Ri(),Fa:"publicytnetworkstatus-online",Ea:"publicytnetworkstatus-offline",qa:!0,pa:.1,va:Vh("potential_esf_error_limit",10),B:P,fa:!($i()&&(P("embeds_web_nwl_disable_nocookie")?"www.youtube-nocookie.com"!==Tb(document.location.toString()):1))});this.l=new $f;P("networkless_immediately_drop_all_requests")&&xl();al("LogsDatabaseV2")}
u(Ul,bl);function Xl(){var a=B("yt.networklessRequestController.instance");a||(a=new Ul,C("yt.networklessRequestController.instance",a),P("networkless_logging")&&Tk().then(function(b){a.u=b;cl(a);a.l.resolve();a.qa&&Math.random()<=a.pa&&a.u&&Bl(a.u);P("networkless_immediately_drop_sw_health_store")&&Yl(a)}));
return a}
Ul.prototype.writeThenSend=function(a,b){b||(b={});$i()||(this.i=!1);bl.prototype.writeThenSend.call(this,a,b)};
Ul.prototype.sendThenWrite=function(a,b,c){b||(b={});$i()||(this.i=!1);bl.prototype.sendThenWrite.call(this,a,b,c)};
Ul.prototype.sendAndWrite=function(a,b){b||(b={});$i()||(this.i=!1);bl.prototype.sendAndWrite.call(this,a,b)};
Ul.prototype.awaitInitialization=function(){return this.l.promise};
function Yl(a){var b;x(function(c){if(!a.u)throw b=nj("clearSWHealthLogsDb"),b;return c.return(Cl(a.u).catch(function(d){a.handleError(d)}))})}
function Wl(a,b,c){P("use_cfr_monitor")&&Zl(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(R());c&&0===Object.keys(b).length?Fl(a):fi(a,b)}
function Vl(){Tl||(Tl=new Rl({Ta:!0,Ma:!0}));return Tl}
function Zl(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Hl().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Hl().requestComplete(a,!0);d(e,f)}}
;var $l=0,am=0,bm,cm=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,potentialEsfErrorCounter:am};C("ytNetworklessLoggingInitializationOptions",cm);function dm(a,b){function c(d){var e=em().G();if(!fm()||!d||e&&P("vss_networkless_bypass_write"))gm(a,b);else{var f={url:a,options:b,timestamp:R(),status:"NEW",sendCount:0};ql(f,d).then(function(g){f.id=g;em().G()&&hm(f)}).catch(function(g){hm(f);
em().G()?zh(g):Kl(g)})}}
b=void 0===b?{}:b;P("skip_is_supported_killswitch")?Tk().then(function(d){c(d)}):c(Sk())}
function im(a,b){function c(d){if(fm()&&d){var e={url:a,options:b,timestamp:R(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,l){P("use_cfr_monitor")&&Hl().requestComplete(e.url,!0);void 0!==e.id?vl(e.id,d):f=!0;P("vss_network_hint")&&em().T(!0);g(k,l)};
if(P("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,l){Hl().requestComplete(e.url,!1);h(k,l)}}gm(e.url,e.options);
ql(e,d).then(function(k){e.id=k;f&&vl(e.id,d)}).catch(function(k){em().G()?zh(k):Kl(k)})}else gm(a,b)}
b=void 0===b?{}:b;P("skip_is_supported_killswitch")?Tk().then(function(d){c(d)}):c(Sk())}
function jm(){var a=Sk();if(!a)throw nj("throttleSend");$l||($l=De.M(function(){var b;return x(function(c){if(1==c.i)return v(c,sl("NEW",a),2);if(3!=c.i)return b=c.j,b?v(c,hm(b),3):(De.Z($l),$l=0,c.return());$l&&($l=0,jm());c.i=0})},100))}
function hm(a){var b,c,d;return x(function(e){switch(e.i){case 1:b=Sk();if(!b)throw c=nj("immediateSend"),c;if(void 0===a.id){e.s(2);break}return v(e,tl(a.id,b),3);case 3:(d=e.j)?a=d:Ah(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=R()-f)){e.s(4);break}Ah(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.s(5);break}return v(e,vl(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=km(a));f=a;var g,h;if(null==
f?0:null==(g=f.options)?0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(R());a=f;if(!a){e.s(0);break}if(!a.skipRetry||void 0===a.id){e.s(8);break}return v(e,vl(a.id,b),8);case 8:gm(a.url,a.options,!!a.skipRetry),e.i=0}})}
function km(a){var b=Sk();if(!b)throw nj("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.i){case 1:P("use_cfr_monitor")&&Hl().requestComplete(a.url,!1);g=il(f);if(!(P("nwl_consider_error_code")&&g||!P("nwl_consider_error_code")&&lm()<=Vh("potential_esf_error_limit",10))){l.s(2);break}if(P("skip_checking_network_on_cfr_failure")&&(!P("skip_checking_network_on_cfr_failure")||Hl().isEndpointCFR(a.url))){l.s(3);break}return v(l,em().V(),3);case 3:if(em().G()){l.s(2);break}c(e,f);if(!P("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){l.s(6);break}return v(l,ul(a.id,b,!1),6);case 6:return l.return();case 2:if(P("nwl_consider_error_code")&&!g&&lm()>Vh("potential_esf_error_limit",10))return l.return();B("ytNetworklessLoggingInitializationOptions")&&cm.potentialEsfErrorCounter++;am++;if(void 0===(null==(k=a)?void 0:k.id)){l.s(8);break}return 1>a.sendCount?v(l,ul(a.id,b),12):v(l,vl(a.id,b),8);case 12:De.M(function(){em().G()&&jm()},5E3);
case 8:c(e,f),l.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return P("use_cfr_monitor")&&Hl().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.s(2):v(h,vl(a.id,b),2);P("vss_network_hint")&&em().T(!0);d(e,f);h.i=0})};
return a}
function em(){if(P("use_new_nwl"))return Vl();bm||(bm=new Rl({Ta:!0,Ma:!0}));return bm}
function gm(a,b,c){c&&0===Object.keys(b).length?Fl(a):fi(a,b)}
function fm(){return B("ytNetworklessLoggingInitializationOptions")?cm.isNwlInitialized:!1}
function lm(){return B("ytNetworklessLoggingInitializationOptions")?cm.potentialEsfErrorCounter:am}
;function mm(a){var b=this;this.config_=null;a?this.config_=a:ui()&&(this.config_=vi());Ni(function(){Ki(b)},5E3)}
mm.prototype.isReady=function(){!this.config_&&ui()&&(this.config_=vi());return!!this.config_};
function Li(a,b,c,d){function e(y){y=void 0===y?!1:y;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||P("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=Ii(b,c,l,k)),z)){var F=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(M,O){Ji(z);F(M,O)};
c.onFetchSuccess=function(M,O){Ji(z);K(M,O)}}try{y&&d.retry&&!d.Ua.bypassNetworkless?(g.method="POST",d.Ua.writeThenSend?P("use_new_nwl_wts")?Xl().writeThenSend(p,g):dm(p,g):P("use_new_nwl_saw")?Xl().sendAndWrite(p,g):im(p,g)):(g.method="POST",g.postParams||(g.postParams={}),fi(p,g))}catch(M){if("InvalidAccessError"==M.name)z&&(Ji(z),z=0),Ah(Error("An extension is blocking network request."));
else throw M;}z&&Ni(function(){Ki(a)},5E3)}
!N("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ah(new Zi("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Zi("innertube xhrclient not ready",b,c,d);zh(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,z){if(d.onError)d.onError(z)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.nb)&&(h=f);var k=a.config_.pb||!1,l=Ci(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,q={alt:"json"},w=a.config_.ob&&f;w=w&&f.startsWith("Bearer");w||(q.key=a.config_.innertubeApiKey);var p=Sh(""+h+m,q||{},!0);P("use_new_nwl")&&Xl().i||!P("use_new_nwl")&&
fm()?Rk().then(function(y){e(y)}):e(!1)}
;var nm={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},om={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};function pm(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var qm=A.ytPubsubPubsubInstance||new L,rm=A.ytPubsubPubsubSubscribedKeys||{},sm=A.ytPubsubPubsubTopicToKeys||{},tm=A.ytPubsubPubsubIsSynchronous||{};L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.la;L.prototype.publish=L.prototype.da;L.prototype.clear=L.prototype.clear;C("ytPubsubPubsubInstance",qm);C("ytPubsubPubsubTopicToKeys",sm);C("ytPubsubPubsubIsSynchronous",tm);C("ytPubsubPubsubSubscribedKeys",rm);var um=Vh("initial_gel_batch_timeout",2E3),vm=Math.pow(2,16)-1,wm=void 0;function xm(){this.l=this.i=this.j=0}
var ym=new xm,zm=new xm,Am=!0,Bm=A.ytLoggingTransportGELQueue_||new Map;C("ytLoggingTransportGELQueue_",Bm);var Cm=A.ytLoggingTransportGELProtoQueue_||new Map;C("ytLoggingTransportGELProtoQueue_",Cm);var Dm=A.ytLoggingTransportTokensToCttTargetIds_||{};C("ytLoggingTransportTokensToCttTargetIds_",Dm);var Em=A.ytLoggingTransportTokensToJspbCttTargetIds_||{};C("ytLoggingTransportTokensToJspbCttTargetIds_",Em);
function Fm(a,b){if("log_event"===a.endpoint){var c=Gm(a),d=Bm.get(c)||[];Bm.set(c,d);d.push(a.payload);Hm(b,d,c)}}
function Im(a,b){if("log_event"===a.endpoint){var c=Gm(a,!0),d=Cm.get(c)||[];Cm.set(c,d);a=a.payload.toJSON();d.push(a);Hm(b,d,c,!0)}}
function Hm(a,b,c,d){d=void 0===d?!1:d;a&&(wm=new a);a=Vh("tvhtml5_logging_max_batch")||Vh("web_logging_max_batch")||100;var e=R(),f=d?zm.l:ym.l;b.length>=a?Jm({writeThenSend:!0},P("flush_only_full_queue")?c:void 0,d):10<=e-f&&(Km(d),d?zm.l=e:ym.l=e)}
function Lm(a,b){if("log_event"===a.endpoint){var c=Gm(a),d=new Map;d.set(c,[a.payload]);b&&(wm=new b);return new ag(function(e,f){wm&&wm.isReady()?Mm(d,e,f,{bypassNetworkless:!0},!0):e()})}}
function Nm(a,b){if("log_event"===a.endpoint){var c=Gm(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(wm=new b);return new ag(function(e){wm&&wm.isReady()?Om(d,e,{bypassNetworkless:!0},!0):e()})}}
function Gm(a,b){var c="";if(a.ea)c="visitorOnlyApprovedKey";else if(a.R){if(void 0===b?0:b){b=a.R.token;c=a.R;var d=new lh;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Vc(d,2,mh,c.playlistId);Em[b]=d}else b=a.R,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Dm[a.R.token]=c;c=a.R.token}return c}
function Jm(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new ag(function(d,e){c?(window.clearTimeout(zm.j),window.clearTimeout(zm.i),zm.i=0):(window.clearTimeout(ym.j),window.clearTimeout(ym.i),ym.i=0);if(wm&&wm.isReady())if(void 0!==b)if(c){e=new Map;var f=Cm.get(b)||[];e.set(b,f);Om(e,d,a);Cm.delete(b)}else{f=new Map;var g=Bm.get(b)||[];f.set(b,g);Mm(f,d,e,a);Bm.delete(b)}else c?(Om(Cm,d,a),Cm.clear()):(Mm(Bm,d,e,a),Bm.clear());else Km(c),d()})}
function Km(a){a=void 0===a?!1:a;if(P("web_gel_timeout_cap")&&(!a&&!ym.i||a&&!zm.i)){var b=Jh(function(){Jm({writeThenSend:!0},void 0,a)},6E4);
a?zm.i=b:ym.i=b}window.clearTimeout(a?zm.j:ym.j);b=N("LOGGING_BATCH_TIMEOUT",Vh("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&Am&&(b=um);b=Jh(function(){Jm({writeThenSend:!0},void 0,a)},b);
a?zm.j=b:ym.j=b}
function Mm(a,b,c,d,e){var f=wm;d=void 0===d?{}:d;var g=Math.round(R()),h=a.size;a=t(a);for(var k=a.next();!k.done;k=a.next()){var l=t(k.value);k=l.next().value;var m=l.next().value;l=k;k=sb({context:wi(f.config_||vi())});k.events=m;(m=Dm[l])&&Pm(k,l,m);delete Dm[l];l="visitorOnlyApprovedKey"===l;Qm(k,g,l);Rm(d);m=function(){h--;h||b()};
var q=function(){h--;h||b()};
try{Li(f,"log_event",k,Sm(d,l,m,q,e)),Am=!1}catch(w){zh(w),c()}}}
function Om(a,b,c,d){var e=wm;c=void 0===c?{}:c;var f=Math.round(R()),g=a.size;a=t(a);for(var h=a.next();!h.done;h=a.next()){var k=t(h.value);h=k.next().value;var l=k=k.next().value;k=new nh;var m=Bi(e.config_||vi());H(k,1,m);l=Tm(l);for(m=0;m<l.length;m++)$c(k,3,ih,l[m]);(l=Em[h])&&Um(k,h,l);delete Em[h];h="visitorOnlyApprovedKey"===h;Vm(k,f,h);Rm(c);k=dd(k);h=Sm(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;Li(e,"log_event","",h);Am=!1}}
function Rm(a){P("always_send_and_write")&&(a.writeThenSend=!1)}
function Sm(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Ua:a,ea:b,Pb:!!e,headers:{},postBodyFormat:"",postBody:""}}
function Qm(a,b,c){a.requestTimeMs=String(b);P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=N("EVENT_ID"))&&(c=Wm(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Vm(a,b,c){G(a,2,b);if(!c&&(b=N("EVENT_ID"))){c=Wm();var d=new kh;G(d,1,b);G(d,2,c);H(a,5,d)}}
function Wm(){var a=N("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*vm/2));a++;a>vm&&(a=1);th("BATCH_CLIENT_COUNTER",a);return a}
function Pm(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Um(a,b,c){if(Tc(c,1===Wc(c,mh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;H(a,4,c);a=Xc(a,Tg,1)||new Tg;c=Xc(a,Rg,3)||new Rg;var e=new Qg;e.setToken(b);G(e,1,d);$c(c,12,Qg,e);H(a,3,c)}
function Tm(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new ih(a[c]))}catch(d){zh(new Zi("Transport failed to deserialize "+String(a[c])))}return b}
;var Xm=A.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",Xm);function Ym(a){Jm(void 0,void 0,void 0===a?!1:a)}
function Zm(a){Xm[a]=a in Xm?Xm[a]+1:0;return Xm[a]}
;function $m(a,b){var c=void 0===c?{}:c;var d=mm;N("ytLoggingEventsDefaultDisabled",!1)&&mm==mm&&(d=null);a:{c=void 0===c?{}:c;if(P("lr_drop_other_and_business_payloads")){if(om[a]||nm[a])break a}else if(P("lr_drop_other_payloads")&&om[a])break a;var e={},f=Math.round(c.timestamp||R());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=pm();e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};P("log_sequence_info_on_gel_web")&&c.ja&&(a=e.context,b=c.ja,b={index:Zm(b),groupKey:b},a.sequence=
b,c.lb&&delete Xm[c.ja]);(c.tb?Lm:Fm)({endpoint:"log_event",payload:e,R:c.R,ea:c.ea},d)}}
;var an=[{Da:function(a){return"Cannot read property '"+a.key+"'"},
ta:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Da:function(a){return"Cannot call '"+a.key+"'"},
ta:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Da:function(a){return a.key+" is not defined"},
ta:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var cn={Y:[],W:[{gb:bn,weight:500}]};function bn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function dn(){this.W=[];this.Y=[]}
var en;function fn(){if(!en){var a=en=new dn;a.Y.length=0;a.W.length=0;cn.Y&&a.Y.push.apply(a.Y,cn.Y);cn.W&&a.W.push.apply(a.W,cn.W)}return en}
;var gn=new L;function hn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=jn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=jn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=jn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function jn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function kn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=ln(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=hn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?ln(e+".ve",f,g,h):0;d+=g;d+=ln(e,a[e],b,c);if(500<d)break}}else c[b]=mn(a),d+=c[b].length;else c[b]=mn(a),d+=c[b].length;return d}
function ln(a,b,c,d){c+="."+a;a=mn(b);d[c]=a;return c.length+a.length}
function mn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var nn=A.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",nn);function on(a){var b=void 0;b=void 0===b?{}:b;var c=!1;N("ytLoggingEventsDefaultDisabled",!1)&&mm===mm&&(c=!0);c=c?null:mm;b=void 0===b?{}:b;var d=Math.round(b.timestamp||R());G(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=pm();d=new hh;G(d,1,b.timestamp||!isFinite(e)?-1:e);if(P("log_sequence_info_on_gel_web")&&b.ja){e=b.ja;var f=Zm(e),g=new gh;G(g,2,f);G(g,1,e);H(d,3,g);b.lb&&delete nn[b.ja]}H(a,33,d);(b.tb?Nm:Im)({endpoint:"log_event",payload:a,R:b.R,ea:b.ea},c)}
;var pn=new Set,qn=0,rn=0,sn=0,tn=[],un=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function vn(){for(var a=t(un),b=a.next();!b.done;b=a.next()){var c=Jb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;function wn(){var a;return x(function(b){return(a=Xe())?b.return(a.then(function(c){c=dd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return xc(d,3)})):b.return(Promise.resolve(null))})}
;var xn={};function yn(a){return xn[a]||(xn[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var zn={},An=[],rg=new L,Bn={};function Cn(){for(var a=t(An),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Dn(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[yn(b)]:a.getAttribute("data-"+b):null;return c}
function En(a){rg.da.apply(rg,arguments)}
;function Fn(a){this.i=a||{};a=[this.i,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Gn(a,b){a=[a.i,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Hn(a,b,c){In||(In={},Ih(window,"message",function(d){a:{if(d.origin===Gn(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=In[e.id])d.v=!0,d.v&&(D(d.A,d.sendMessage,d),d.A.length=0),d.Ia(e)}e=void 0}return e}));
In[c]=b}
var In=null;var Jn=window;function Kn(a,b,c){this.o=this.i=this.j=null;this.l=0;this.v=!1;this.A=[];this.m=null;this.J={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.C=c;this.setup(a,b)}
n=Kn.prototype;n.setSize=function(a,b){this.i.width=a.toString();this.i.height=b.toString();return this};
n.getIframe=function(){return this.i};
n.Ia=function(a){Ln(this,a.event,a)};
n.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.m.subscribe(a,c);Mn(this,a);return this};
function Nn(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.C===b[0]&&Mn(a,c)}}
n.destroy=function(){this.i&&this.i.id&&(zn[this.i.id]=null);var a=this.m;a&&"function"==typeof a.dispose&&a.dispose();if(this.o){a=this.i;var b=a.parentNode;b&&b.replaceChild(this.o,a)}else(a=this.i)&&a.parentNode&&a.parentNode.removeChild(a);In&&(In[this.id]=null);this.j=null;a=this.i;for(var c in lb)lb[c][0]==a&&Gh(c);this.o=this.i=null};
n.La=function(){return{}};
function On(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.v?a.sendMessage(b):a.A.push(b)}
function Ln(a,b,c){a.m.m||(c={target:a,data:c},a.m.da(b,c),En(a.C+"."+b,c))}
function Pn(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Gn(a.j,"title"));(b=Gn(a.j,"width"))&&c.setAttribute("width",b.toString());(b=Gn(a.j,"height"))&&c.setAttribute("height",
b.toString());var g=a.La();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&D(["debugjs","debugcss"],function(k){var l=Yb(window.location.href,k);null!==l&&(g[k]=l)});
Jn.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(Jn.yt_embedsTokenValue),delete Jn.yt_embedsTokenValue);var h=""+Gn(a.j,"host")+("/embed/"+Gn(a.j,"videoId"))+"?"+Wb(g);Jn.yt_embedsEnableUaChProbe?wn().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Ed(l.href).toString();pd(c,Fd(k));return k}):
Jn.yt_embedsEnableIframeSrcWithIntent?pd(c,Fd(h)):c.src=h;
return c}
n.Va=function(){this.i&&this.i.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.l)};
function Qn(a){Hn(a.j,a,a.id);a.l=Kh(a.Va.bind(a));Ih(a.i,"load",function(){window.clearInterval(a.l);a.l=Kh(a.Va.bind(a))})}
n.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Ub(a.src):"https://www.youtube.com"),this.j=new Fn(b),c||(b=Pn(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.i=a,this.i.id||(this.i.id="widget"+Qa(this.i)),zn[this.i.id]=this,window.postMessage){this.m=new L;Qn(this);b=Gn(this.j,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Bn)Bn.hasOwnProperty(e)&&
Nn(this,e)}};
function Mn(a,b){a.J[b]||(a.J[b]=!0,On(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=Zf(a),c=[Ub(this.i.src||"").replace("http:","https:")];if(this.i.contentWindow)for(var d=0;d<c.length;d++)try{this.i.contentWindow.postMessage(b,c[d])}catch(Mb){if(Mb.name&&"SyntaxError"===Mb.name){if(!(Mb.message&&0<Mb.message.indexOf("target origin ''"))){var e=void 0,f=Mb;e=void 0===e?{}:e;e.name=N("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=N("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=e||{},h="WARNING";h=void 0===h?"ERROR":h;if(f){f.hasOwnProperty("level")&&
f.level&&(h=f.level);if(P("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=qn)){var m=void 0,q=void 0,w=f,p=g,y=Wd(w),z=y.message||"Unknown Error",F=y.name||"UnknownError",K=y.stack||w.j||"Not available";
if(K.startsWith(F+": "+z)){var M=K.split("\n");M.shift();K=M.join("\n")}var O=y.lineNumber||"Not available",fb=y.fileName||"Not available",hc=K,ua=0;if(w.hasOwnProperty("args")&&w.args&&w.args.length)for(var ma=0;ma<w.args.length&&!(ua=kn(w.args[ma],"params."+ma,p,ua),500<=ua);ma++);else if(w.hasOwnProperty("params")&&w.params){var Y=w.params;if("object"===typeof w.params)for(q in Y){if(Y[q]){var ba="params."+q,ca=mn(Y[q]);p[ba]=ca;ua+=ba.length+ca.length;if(500<ua)break}}else p.params=mn(Y)}if(tn.length)for(var X=
0;X<tn.length&&!(ua=kn(tn[X],"params.context."+X,p,ua),500<=ua);X++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var S={message:z,name:F,lineNumber:O,fileName:fb,stack:hc,params:p,sampleWeight:1},yj=Number(w.columnNumber);isNaN(yj)||(S.lineNumber=S.lineNumber+":"+yj);if("IGNORED"===w.level)m=0;else a:{for(var zj=fn(),Aj=t(zj.Y),lf=Aj.next();!lf.done;lf=Aj.next()){var Bj=lf.value;if(S.message&&S.message.match(Bj.Qb)){m=Bj.weight;break a}}for(var Cj=t(zj.W),
mf=Cj.next();!mf.done;mf=Cj.next()){var Dj=mf.value;if(Dj.gb(S)){m=Dj.weight;break a}}m=1}S.sampleWeight=m;for(var Ej=t(an),nf=Ej.next();!nf.done;nf=Ej.next()){var of=nf.value;if(of.ta[S.name])for(var Fj=t(of.ta[S.name]),pf=Fj.next();!pf.done;pf=Fj.next()){var Gj=pf.value,ud=S.message.match(Gj.regexp);if(ud){S.params["params.error.original"]=ud[0];for(var qf=Gj.groups,Hj={},Nb=0;Nb<qf.length;Nb++)Hj[qf[Nb]]=ud[Nb+1],S.params["params.error."+qf[Nb]]=ud[Nb+1];S.message=of.Da(Hj);break}}}S.params||(S.params=
{});var Ij=fn();S.params["params.errorServiceSignature"]="msg="+Ij.Y.length+"&cb="+Ij.W.length;S.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&(S.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));xb("sample").constructor!==wb&&(S.params["params.fconst"]="true");var qa=S;window.yterr&&"function"===typeof window.yterr&&window.yterr(qa);if(0!==qa.sampleWeight&&!pn.has(qa.message)){if("ERROR"===h){gn.da("handleError",qa);if(P("record_app_crashed_web")&&
0===sn&&1===qa.sampleWeight)if(sn++,P("errors_via_jspb")){var rf=new fh;G(rf,1,1);if(!P("report_client_error_with_app_crash_ks")){var Jj=new ah;G(Jj,1,qa.message);var Kj=new bh;H(Kj,3,Jj);var Lj=new ch;H(Lj,5,Kj);var Mj=new dh;H(Mj,9,Lj);H(rf,4,Mj)}var Wn=rf,Nj=new ih;Zc(Nj,20,jh,Wn);on(Nj)}else{var Oj={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};P("report_client_error_with_app_crash_ks")||(Oj.systemHealth={crashData:{clientError:{logMessage:{message:qa.message}}}});$m("appCrashed",Oj)}rn++}else"WARNING"===
h&&gn.da("handleWarning",qa);if(P("kevlar_gel_error_routing"))a:{var sf=void 0,tf=void 0,sc=h,Q=qa;if(P("errors_via_jspb")){if(vn())tf=void 0;else{var Ob=new Yg;G(Ob,1,Q.stack);Q.fileName&&G(Ob,4,Q.fileName);var Ha=Q.lineNumber&&Q.lineNumber.split?Q.lineNumber.split(":"):[];0!==Ha.length&&(1!==Ha.length||isNaN(Number(Ha[0]))?2!==Ha.length||isNaN(Number(Ha[0]))||isNaN(Number(Ha[1]))||(G(Ob,2,Number(Ha[0])),G(Ob,3,Number(Ha[1]))):G(Ob,2,Number(Ha[0])));var mb=new ah;G(mb,1,Q.message);G(mb,3,Q.name);
G(mb,6,Q.sampleWeight);"ERROR"===sc?G(mb,2,2):"WARNING"===sc?G(mb,2,1):G(mb,2,0);var uf=new Zg;G(uf,1,!0);Zc(uf,3,$g,Ob);var nb=new Vg;G(nb,3,window.location.href);for(var Pj=N("FEXP_EXPERIMENTS",[]),vf=0;vf<Pj.length;vf++){var Qj=nb,Xn=Pj[vf];Jc(Qj);Uc(Qj,5).push(Xn)}var wf=uh();if(!vh()&&wf)for(var Rj=t(Object.keys(wf)),ob=Rj.next();!ob.done;ob=Rj.next()){var Sj=ob.value,xf=new Xg;G(xf,1,Sj);xf.setValue(String(wf[Sj]));$c(nb,4,Xg,xf)}var yf=Q.params;if(yf){var Tj=t(Object.keys(yf));for(ob=Tj.next();!ob.done;ob=
Tj.next()){var Uj=ob.value,zf=new Xg;G(zf,1,"client."+Uj);zf.setValue(String(yf[Uj]));$c(nb,4,Xg,zf)}}var Vj=N("SERVER_NAME"),Wj=N("SERVER_VERSION");if(Vj&&Wj){var Af=new Xg;G(Af,1,"server.name");Af.setValue(Vj);$c(nb,4,Xg,Af);var Bf=new Xg;G(Bf,1,"server.version");Bf.setValue(Wj);$c(nb,4,Xg,Bf)}var vd=new bh;H(vd,1,nb);H(vd,2,uf);H(vd,3,mb);tf=vd}var Xj=tf;if(!Xj)break a;var Yj=new ih;Zc(Yj,163,jh,Xj);on(Yj)}else{if(vn())sf=void 0;else{var tc={stackTrace:Q.stack};Q.fileName&&(tc.filename=Q.fileName);
var Ia=Q.lineNumber&&Q.lineNumber.split?Q.lineNumber.split(":"):[];0!==Ia.length&&(1!==Ia.length||isNaN(Number(Ia[0]))?2!==Ia.length||isNaN(Number(Ia[0]))||isNaN(Number(Ia[1]))||(tc.lineNumber=Number(Ia[0]),tc.columnNumber=Number(Ia[1])):tc.lineNumber=Number(Ia[0]));var Cf={level:"ERROR_LEVEL_UNKNOWN",message:Q.message,errorClassName:Q.name,sampleWeight:Q.sampleWeight};"ERROR"===sc?Cf.level="ERROR_LEVEL_ERROR":"WARNING"===sc&&(Cf.level="ERROR_LEVEL_WARNNING");var Yn={isObfuscated:!0,browserStackInfo:tc},
Pb={pageUrl:window.location.href,kvPairs:[]};N("FEXP_EXPERIMENTS")&&(Pb.experimentIds=N("FEXP_EXPERIMENTS"));var Df=uh();if(!vh()&&Df)for(var Zj=t(Object.keys(Df)),pb=Zj.next();!pb.done;pb=Zj.next()){var ak=pb.value;Pb.kvPairs.push({key:ak,value:String(Df[ak])})}var Ef=Q.params;if(Ef){var bk=t(Object.keys(Ef));for(pb=bk.next();!pb.done;pb=bk.next()){var ck=pb.value;Pb.kvPairs.push({key:"client."+ck,value:String(Ef[ck])})}}var dk=N("SERVER_NAME"),ek=N("SERVER_VERSION");dk&&ek&&(Pb.kvPairs.push({key:"server.name",
value:dk}),Pb.kvPairs.push({key:"server.version",value:ek}));sf={errorMetadata:Pb,stackTrace:Yn,logMessage:Cf}}var fk=sf;if(!fk)break a;$m("clientError",fk)}if("ERROR"===sc||P("errors_flush_gel_always_killswitch"))P("web_fp_via_jspb")&&Ym(!0),Ym()}if(!P("suppress_error_204_logging")){var qb=qa,uc=qb.params||{},Ua={urlParams:{a:"logerror",t:"jserror",type:qb.name,msg:qb.message.substr(0,250),line:qb.lineNumber,level:h,"client.name":uc.name},postParams:{url:N("PAGE_NAME",window.location.href),file:qb.fileName},
method:"POST"};uc.version&&(Ua["client.version"]=uc.version);if(Ua.postParams){qb.stack&&(Ua.postParams.stack=qb.stack);for(var gk=t(Object.keys(uc)),Ff=gk.next();!Ff.done;Ff=gk.next()){var hk=Ff.value;Ua.postParams["client."+hk]=uc[hk]}var Gf=uh();if(Gf)for(var ik=t(Object.keys(Gf)),Hf=ik.next();!Hf.done;Hf=ik.next()){var jk=Hf.value;Ua.postParams[jk]=Gf[jk]}var kk=N("SERVER_NAME"),lk=N("SERVER_VERSION");kk&&lk&&(Ua.postParams["server.name"]=kk,Ua.postParams["server.version"]=lk)}fi(N("ECATCHER_REPORT_HOST",
"")+"/error_204",Ua)}try{pn.add(qa.message)}catch(co){}qn++}}}}}else throw Mb;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Rn(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Sn(a){return 0===a.search("get")||0===a.search("is")}
;function Tn(a,b){Kn.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.N={};this.playerInfo={}}
u(Tn,Kn);n=Tn.prototype;n.La=function(){var a=Gn(this.j,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Gn(this.j,"embedConfig")){if(Pa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
n.Ia=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Pa(a))for(var c in a)a.hasOwnProperty(c)&&(this.N[c]=a[c]);break;case "infoDelivery":Un(this,a);break;case "initialDelivery":Pa(a)&&(window.clearInterval(this.l),this.playerInfo={},this.N={},Vn(this,a.apiInterface),Un(this,a));break;default:Ln(this,b,a)}};
function Un(a,b){if(Pa(b))for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c])}
function Vn(a,b){D(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Rn(c)?this[c]=function(){this.playerInfo={};
this.N={};On(this,c,arguments);return this}:Sn(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){On(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=Gn(this.j,"host")+("/embed/"+Gn(this.j,"videoId")),b=Number(Gn(this.j,"width")),c=Number(Gn(this.j,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);Gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Eb,"&#39;")),-1!=a.indexOf("\x00")&&
(a=a.replace(Fb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
n.getOptions=function(a){return this.N.namespaces?a?this.N[a]?this.N[a].options||[]:[]:this.N.namespaces||[]:[]};
n.getOption=function(a,b){if(this.N.namespaces&&a&&b&&this.N[a])return this.N[a][b]};
function Zn(a){if("iframe"!==a.tagName.toLowerCase()){var b=Dn(a,"videoid");b&&(b={videoId:b,width:Dn(a,"width"),height:Dn(a,"height")},new Tn(a,b))}}
;C("YT.PlayerState.UNSTARTED",-1);C("YT.PlayerState.ENDED",0);C("YT.PlayerState.PLAYING",1);C("YT.PlayerState.PAUSED",2);C("YT.PlayerState.BUFFERING",3);C("YT.PlayerState.CUED",5);C("YT.get",function(a){return zn[a]});
C("YT.scan",Cn);C("YT.subscribe",function(a,b,c){rg.subscribe(a,b,c);Bn[a]=!0;for(var d in zn)zn.hasOwnProperty(d)&&Nn(zn[d],a)});
C("YT.unsubscribe",function(a,b,c){qg(a,b,c)});
C("YT.Player",Tn);Kn.prototype.destroy=Kn.prototype.destroy;Kn.prototype.setSize=Kn.prototype.setSize;Kn.prototype.getIframe=Kn.prototype.getIframe;Kn.prototype.addEventListener=Kn.prototype.addEventListener;Tn.prototype.getVideoEmbedCode=Tn.prototype.getVideoEmbedCode;Tn.prototype.getOptions=Tn.prototype.getOptions;Tn.prototype.getOption=Tn.prototype.getOption;
An.push(function(a){var b=a;b||(b=document);a=hb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=cb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=hb(b);D(gb(a,b),Zn)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Cn();var $n=A.onYTReady;$n&&$n();var ao=A.onYouTubeIframeAPIReady;ao&&ao();var bo=A.onYouTubePlayerAPIReady;bo&&bo();}).call(this);
