/* Copyright 2016 © Adobe Systems */
/*{"k":"0.1.19","auto_updating":true,"last_published":"2016-11-22 10:40:32 UTC"}*/
(function(config){(function(){'use strict';var f=[];function g(a){f.push(a);1===f.length&&l()}function m(){for(;f.length;)f[0](),f.shift()}if(window.MutationObserver){var n=document.createElement("div");(new MutationObserver(m)).observe(n,{attributes:!0});var l=function(){n.setAttribute("x",0)}}else l=function(){setTimeout(m)};function p(a){this.a=q;this.b=void 0;this.f=[];var b=this;try{a(function(a){r(b,a)},function(a){t(b,a)})}catch(c){t(b,c)}}var q=2;function u(a){return new p(function(b,c){c(a)})}function v(a){return new p(function(b){b(a)})}
function r(a,b){if(a.a===q){if(b===a)throw new TypeError("Promise settled with itself.");var c=!1;try{var d=b&&b.then;if(null!==b&&"object"===typeof b&&"function"===typeof d){d.call(b,function(b){c||r(a,b);c=!0},function(b){c||t(a,b);c=!0});return}}catch(e){c||t(a,e);return}a.a=0;a.b=b;w(a)}}function t(a,b){if(a.a===q){if(b===a)throw new TypeError("Promise settled with itself.");a.a=1;a.b=b;w(a)}}
function w(a){g(function(){if(a.a!==q)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0===a.a?"function"===typeof c?e(c.call(void 0,a.b)):e(a.b):1===a.a&&("function"===typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}p.prototype.g=function(a){return this.c(void 0,a)};p.prototype.c=function(a,b){var c=this;return new p(function(d,e){c.f.push([a,b,d,e]);w(c)})};
function x(a){return new p(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e===a.length&&b(h)}}var e=0,h=[];0===a.length&&b(h);for(var k=0;k<a.length;k+=1)v(a[k]).c(d(k),c)})}function y(a){return new p(function(b,c){for(var d=0;d<a.length;d+=1)v(a[d]).c(b,c)})};window.Promise||(window.Promise=p,window.Promise.resolve=v,window.Promise.reject=u,window.Promise.race=y,window.Promise.all=x,window.Promise.prototype.then=p.prototype.c,window.Promise.prototype["catch"]=p.prototype.g);}());

(function(){function aa(){var a=this;this.B=new Promise(function(b,c){a.resolve=b;a.b=c})}aa.prototype.then=function(a,b){return this.B.then(a,b)};aa.prototype["catch"]=function(a){return this.B["catch"](a)};function ba(){this.g=[];this.b=[];var a=0,b=2,c;a:for(;64>a;b++){for(c=2;c*c<=b;c++)if(0===b%c)continue a;8>a&&(this.b[a]=ca(Math.pow(b,.5)));this.g[a]=ca(Math.pow(b,1/3));a++}}function p(a,b){return b>>>a|b<<32-a}function ca(a){return 4294967296*(a-Math.floor(a))|0}function r(a){for(var b="",c,d=7;0<=d;d--)c=a>>>4*d&15,b+=c.toString(16);return b};function da(a,b){this.b=a;this.o=b;this.i=null;ea&&(this.i=new MutationObserver(function(a){for(var d=[],e=0;e<a.length;e++)if(a[e].addedNodes.length||"characterData"===a[e].type||"attributes"===a[e].type){var f=a[e].target;3===f.nodeType&&(f=f.parentNode);f&&d.push(f)}d.length&&b(d)}))}var ea=!!window.MutationObserver;da.prototype.g=function(a){a.target&&(a=a.target,3===a.nodeType&&(a=a.parentNode),this.o([a]))};function fa(a){this.b=a}function t(a,b){return a.b.replace(/\{([^\{\}]+)\}/g,function(a,d){if("?"==d.charAt(0)){for(var e=d.slice(1).split(","),f=[],h=0;h<e.length;h++)b[e[h]]&&f.push(e[h]+"="+encodeURIComponent(b[e[h]]));return f.length?"?"+f.join("&"):""}return encodeURIComponent(b[d]||"")})};function ga(a){this.o=a.p;this.i=a.h;this.g=a.a;this.A=a.t;this.version=a.j;this.w=window.location.hostname;this.app=a.l||"";this.b=[];var b=this;setInterval(function(){b.b.length&&(u(t(ha,{s:b.o,k:b.A,ht:b.i,h:b.w,f:b.b.join("."),a:b.g,js:b.version,app:b.app,_:Date.now()})),b.b=[])},300)}var ha=new fa("https://p.typekit.net/p.gif{?s,k,ht,h,f,a,js,app,_}");function ja(a,b){b.length&&(a.b=a.b.concat(b))};function ka(a){a=(a||"").split(/\s*,\s*/);for(var b={},c=0;c<a.length;c++){var d=/^"([\u0020-\u007e]{4})"(?:\s+(\d+|on|off))?$/i.exec(a[c]);if(d)if(d[2]){var e=d[2].replace("on","1").replace("off","0");b[d[1]]=parseInt(e,10)}else b[d[1]]=1}return b};function la(a){this.b=a||{}}function v(a){var b=[];Object.keys(a.b).forEach(function(c){0!==a.b[c]&&b.push(c)});return b};var w=document.createElement("div");
function ma(a){w.style.cssText="font:"+a;if(w.style.fontFamily){a:{a=w.style.fontFamily;for(var b="",c=[],d=0;d<a.length;d++){var e=a.charAt(d);if("'"===e||'"'===e){b=d+1;do if(b=a.indexOf(e,b)+1,!b){a=null;break a}while("\\"===a.charAt(b-2));c.push(a.slice(d+1,b-1));d=b-1;b=""}else","===e?(b=b.trim(),""!==b&&(c.push(b),b="")):b+=e}b=b.trim();""!==b&&c.push(b);a=c}if(a)return{size:w.style.fontSize,lineHeight:w.style.lineHeight||"normal",style:w.style.fontStyle||"normal",variant:w.style.fontVariant||
"normal",weight:w.style.fontWeight||"normal",stretch:w.style.fontStretch||"normal",family:a}}return null};function na(a){for(var b=/\burl\((\'|\"|)([^\'\"]+?)\1\)( format\((\'|\"|)([^\'\"]+?)\4\))?/g,c=null,d=[];c=b.exec(a);)c[2]&&d.push({url:c[2],format:c[5]});return d};function oa(a){return a.map(function(a){return"U+"+a.toString(16)}).join(",")}function z(a){a=a.split(/\s*,\s*/);for(var b=[],c=0;c<a.length;c++){var d=/^(u\+([0-9a-f?]{1,6})(?:-([0-9a-f]{1,6}))?)$/i.exec(a[c]),e=null,f=null;if(d)if(-1!==d[2].indexOf("?")?(e=parseInt(d[2].replace("?","0"),16),f=parseInt(d[2].replace("?","f"),16)):(e=parseInt(d[2],16),f=d[3]?parseInt(d[3],16):e),e!==f)for(d=e;d<=f;d++)b.push(d);else b.push(e)}return b};function A(a){this.b=a||[]}function B(a){for(var b={},c=0;c<a.b.length;c++)b[a.b[c]]=a.b[c];return Object.keys(b).map(function(a){return b[a]}).sort(function(a,b){return a-b})}function pa(a,b){for(var c={},d=new A,e=0;e<a.b.length;e++)c[a.b[e]]=!0;for(e=0;e<b.b.length;e++)c[b.b[e]]||d.b.push(b.b[e]);return d}function C(a,b){var c=new A;c.b=a.b.concat(b.b);return c};function qa(a){var b=document.createTreeWalker(a,NodeFilter.SHOW_TEXT,null,!1);for(a=[];b.nextNode();){var c=b.currentNode.parentNode;c&&"SCRIPT"!==c.nodeName&&"STYLE"!==c.nodeName&&"NOSCRIPT"!==c.nodeName&&"TEMPLATE"!==c.nodeName&&"LINK"!==c.nodeName&&"TITLE"!==c.nodeName&&!/^\s*$/.test(b.currentNode.nodeValue)&&a.push(b.currentNode)}b="";for(c=0;c<a.length;c++)b+=a[c].nodeValue;a=b;b=new A;for(c=0;c<a.length;c++){var d=a.charCodeAt(c);if(55296===(d&63488)&&c<a.length){var e=a.charCodeAt(c+1);56320===
(e&64512)?b.b.push(((d&1023)<<10)+(e&1023)+65536):b.b.push(d);c++}else b.b.push(d)}return B(b)};function ra(a){this.g=new A;this.b=new A(z("U+20-7E"));a&&(this.b=C(this.b,a))}ra.prototype.set=function(a){this.g=C(this.g,a)};ra.prototype.get=function(){return C(this.b,this.g)};function sa(a,b){this.status=b.status;this.ok=200<=b.status&&300>b.status||0===b.status;this.statusText=b.statusText;this.body=a}sa.prototype.arrayBuffer=function(){return Promise.resolve(this.body)};var ta=!(window.XDomainRequest&&!("responseType"in XMLHttpRequest.prototype));
function u(a,b){var c=b||{method:"GET",headers:{},body:null};return new Promise(function(b,e){if(ta){var f=new XMLHttpRequest;f.onload=function(){b(new sa(f.response,{status:f.status,statusText:f.statusText}))};f.onerror=function(){e(new TypeError("Network request failed"))};f.open(c.method,a);f.responseType="arraybuffer";c.headers&&Object.keys(c.headers).forEach(function(a){f.setRequestHeader(a,c.headers[a])});f.send(c.body)}else f=new XDomainRequest,f.open(c.method,a.replace(/^http(s)?:/i,window.location.protocol)),
f.ontimeout=function(){return!0},f.onprogress=function(){return!0},f.onload=function(){b(new sa(f.responseText,{status:f.status,statusText:f.statusText}))},f.onerror=function(){e(new TypeError("Network request failed"))},setTimeout(function(){f.send(c.body)},0)})};function D(a,b,c){this.unicode=a;this.i=b||[];this.b=c||null;this.g=null}var ua={};function E(a){var b=F(a);ua[b]||(ua[b]=u("https://primer.typekit.net/primer/"+F(a),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:va(a)}).then(function(){return b}));return ua[b]}function wa(a){var b="";a=new Uint8Array(a.b.buffer,a.b.byteOffset,a.b.byteLength);for(var c=0;c<a.byteLength;c++)b+=String.fromCharCode(a[c]);return btoa(b)}
function xa(a){return a.i.length?a.i.map(function(a){return a.trim()}).join(","):"NONE"}function va(a){var b="version=1.0&unicode="+encodeURIComponent(a.unicode.join(","));return b=a.b?b+("&dyna="+encodeURIComponent(wa(a))):b+("&features="+encodeURIComponent(xa(a)))}
function F(a){if(null===a.g){var b={version:"1.0",unicode:a.unicode.join(",")};a.b?b.dyna=wa(a):b.features=xa(a);for(var c=new ba,d=JSON.stringify(b),b=c.g.slice(0),c=c.b.slice(0),d=d+String.fromCharCode(128),e=Math.ceil((d.length/4+2)/16),f=Array(e),h=0;h<e;h++){f[h]=Array(16);for(var g=0;16>g;g++)f[h][g]=d.charCodeAt(64*h+4*g)<<24|d.charCodeAt(64*h+4*g+1)<<16|d.charCodeAt(64*h+4*g+2)<<8|d.charCodeAt(64*h+4*g+3)}f[e-1][14]=8*(d.length-1)/Math.pow(2,32);f[e-1][14]=Math.floor(f[e-1][14]);f[e-1][15]=
8*(d.length-1)&4294967295;for(var d=Array(64),l,m,k,q,n,H,x,y,h=0;h<e;h++){for(g=0;16>g;g++)d[g]=f[h][g];for(g=16;64>g;g++)l=d[g-15],m=d[g-2],d[g]=(p(17,m)^p(19,m)^m>>>10)+d[g-7]+(p(7,l)^p(18,l)^l>>>3)+d[g-16]&4294967295;l=c[0];m=c[1];k=c[2];q=c[3];n=c[4];H=c[5];x=c[6];y=c[7];for(g=0;64>g;g++){var Ba=y+(p(6,n)^p(11,n)^p(25,n))+(n&H^~n&x)+b[g]+d[g],ia=(p(2,l)^p(13,l)^p(22,l))+(l&m^l&k^m&k);y=x;x=H;H=n;n=q+Ba&4294967295;q=k;k=m;m=l;l=Ba+ia&4294967295}c[0]=c[0]+l&4294967295;c[1]=c[1]+m&4294967295;c[2]=
c[2]+k&4294967295;c[3]=c[3]+q&4294967295;c[4]=c[4]+n&4294967295;c[5]=c[5]+H&4294967295;c[6]=c[6]+x&4294967295;c[7]=c[7]+y&4294967295}a.g=r(c[0])+r(c[1])+r(c[2])+r(c[3])+r(c[4])+r(c[5])+r(c[6])+r(c[7])}return a.g};function ya(){var a=za;-1===a.className.split(/\s+/).indexOf("wf-loading")&&(a.className+=" wf-loading")}function Aa(a){var b=za;if(-1!==b.className.split(/\s+/).indexOf("wf-loading")){var c=b.className.split(/\s+/);c[c.indexOf("wf-loading")]=a;b.className=c.join(" ")}}function Ca(a){document.body?a():document.addEventListener("DOMContentLoaded",a)};function Da(a,b){this.tag=a;this.length=b;this.H=[]};function G(a,b){this.g=a;this.b=b||0}G.prototype.read=function(a,b){var c=a.read(this.g,b||this.b);b||(this.b+=a.u);return c};function Ea(a,b,c){for(var d=a.b,e=[],f=0;f<c;f+=1)e.push(b.read(a.g,d)),d+=b.u;a.b+=b.u*c;return e};var Fa={u:1,read:function(a,b){return a.getUint8(b||0)}},I={u:2,read:function(a,b){return a.getUint16(b||0)}},J={u:4,read:function(a,b){return a.getUint32(b||0)}},Ga={u:4,read:function(a,b){return a.getUint32(b||0)}};function K(a){return 0===a%4?a:a+(4-a%4)}function L(a,b){var c=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);(new Uint8Array(b.buffer,b.byteOffset,b.byteLength)).set(c,0)}function M(a){var b=0,c;for(c in a)b+=a[c].u;return{u:b,read:function(b,c){var f=c||0,h={},g;for(g in a)h[g]=a[g].read(b,f),f+=a[g].u;return h}}}function Ha(a){for(var b=new Uint32Array(4),c=0;c<a.byteLength;c+=4)b[0]+=a.getUint32(c);return b[0]};function Ia(a,b,c){this.type=a;this.offset=b;this.b=c}var Ja=M({offset:J,G:J,L:J});
Ia.prototype.apply=function(a){if(1===this.type||2===this.type)L(this.b,new DataView(a.buffer,a.byteOffset+this.offset,this.b.byteLength));else if(3===this.type){var b=this.b.getUint32(0),c=new DataView(a.buffer,a.byteOffset+this.offset,a.byteLength-this.offset),d=new DataView(a.buffer,a.byteOffset+this.offset-b,a.byteLength-this.offset);L(c,d)}else if(4===this.type)for(var c=new G(this.b),e=Ea(c,Ja,this.b.byteLength/Ja.u),b=0;b<e.length;b++)c=new DataView(a.buffer,a.byteOffset+e[b].offset,e[b].G),
d=new DataView(a.buffer,a.byteOffset+e[b].offset+e[b].L,e[b].G),L(c,d);else if(5===this.type)for(c=new G(this.b);c.b<this.b.byteLength;)for(d=c.read(I),e=c.read(I),b=0;b<e;b++)for(var f=c.read(J),h=c.read(J);f<h;)a.setUint16(f,a.getUint16(f)+d),f+=2};function Ka(a){this.buffer=new G(new DataView(a));this.b={};this.g=[];this.status=this.buffer.read(Fa);if(0===this.status){this.buffer.b=10;for(var b=Ea(this.buffer,La,this.buffer.read(I)),c=0;c<b.length;c++){var d=new Da(b[c].tag,b[c].length);this.g.push(d);this.b[b[c].tag]=d}b=this.buffer.read(I);for(c=0;c<b;c++)for(var e=this.buffer.read(Ma),d=this.b[e.tag],f=0;f<e.J;f++){var h=this.buffer.read(Na),g=new DataView(a,this.buffer.b,h.length);d.H.push(new Ia(h.type,h.offset,g));this.buffer.b+=h.length}}}
var La=M({tag:Ga,g:J,offset:J,length:J}),Ma=M({tag:Ga,M:Fa,o:J,J:I}),Na=M({type:Fa,offset:J,length:J});var N=M({type:J,K:I,A:I,i:I,w:I}),O=M({tag:Ga,b:J,offset:J,length:J});function Oa(a){this.arrayBuffer=a;this.buffer=new G(new DataView(a));this.g=[];this.o=[];this.i=[];this.b={};this.g=[];this.b={};a=this.buffer.read(N);if(1330926671==a.type||65536==a.type){a=Ea(this.buffer,O,a.K);for(var b=0;b<a.length;b++){var c=a[b];this.g.push(c.tag);this.b[c.tag]=new DataView(this.arrayBuffer,c.offset,K(c.length));this.o[b]=c.length;this.i[b]=c.offset}}else throw Error("Font data is invalid");}
function Pa(a,b){for(var c=[],d=N.u+O.u*a.g.length,e=0;e<a.g.length;e++){var f=a.g[e],h=b.b[f]||null;if(null!==h){for(var f=K(h.length)-K(a.o[e]),g=0;g<a.g.length;g++)e!==g&&a.i[g]>a.i[e]&&(a.i[g]+=f);a.o[e]=h.length}d+=K(a.o[e])}d=new ArrayBuffer(d);L(new DataView(a.arrayBuffer,0,N.u),new DataView(d,0,N.u));for(e=0;e<a.g.length;e++){f=a.g[e];h=b.b[f]||null;if(null!==h)for(1668112752!==f&&1195661646!==f&&L(a.b[f],new DataView(d,a.i[e],K(a.o[e]))),a.b[f]=new DataView(d,a.i[e],K(a.o[e])),h=h.H,g=0;g<
h.length;g++)h[g].apply(a.b[f]);else L(a.b[f],new DataView(d,a.i[e],K(a.o[e]))),a.b[f]=new DataView(d,a.i[e],K(a.o[e]));1751474532===f&&a.b[f].setUint32(8,0);1330851634===f&&a.b[f].setUint16(8,0);c[e]=Ha(a.b[f])}g=new DataView(d,N.u,O.u*a.g.length);for(e=0;e<a.g.length;e++)f=a.g[e],g.setUint32(e*O.u+0,f),g.setUint32(e*O.u+4,c[e]),g.setUint32(e*O.u+8,a.i[e]),g.setUint32(e*O.u+12,a.o[e]);c=2981146554-Ha(new DataView(d));a.b[1751474532].setUint32(8,c);a.arrayBuffer=d};function P(){this.b=document.createElement("div");this.b.setAttribute("aria-hidden","true");this.b.appendChild(document.createTextNode("@"));this.g=document.createElement("span");this.i=document.createElement("span");this.A=document.createElement("span");this.w=document.createElement("span");this.o=-1;this.g.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.i.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.w.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.A.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;";this.g.appendChild(this.A);this.i.appendChild(this.w);this.b.appendChild(this.g);this.b.appendChild(this.i)}
function Q(a,b,c){a.b.style.cssText="min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-size:100px;font-family:"+b+";"+c}function Qa(a){var b=a.b.offsetWidth,c=b+100;a.w.style.width=c+"px";a.i.scrollLeft=c;a.g.scrollLeft=a.g.scrollWidth+100;return a.o!==b?(a.o=b,!0):!1}
function Ra(a,b){a.g.addEventListener("scroll",function(){Qa(a)&&null!==a.b.parentNode&&b(a.o)},!1);a.i.addEventListener("scroll",function(){Qa(a)&&null!==a.b.parentNode&&b(a.o)},!1);Qa(a)};function Sa(){var a={};this.family="_fff_";this.style=a.style||"normal";this.variant=a.variant||"normal";this.weight=a.weight||"normal";this.stretch=a.stretch||"stretch";this.featureSettings=a.featureSettings||"normal"}var Ta=null;
function Ua(){var a=new Sa,b="font-style:"+a.style+";font-variant:"+a.variant+";font-weight:"+a.weight+";font-stretch:"+a.stretch+";font-feature-settings:"+a.featureSettings+";-moz-font-feature-settings:"+a.featureSettings+";-webkit-font-feature-settings:"+a.featureSettings+";",c=document.createElement("div"),d=new P,e=new P,f=new P,h=-1,g=-1,l=-1,m=-1,k=-1,q=-1;return new Promise(function(n,H){function x(){null!==c.parentNode&&c.parentNode.removeChild(c)}function y(){if(-1!==h&&-1!==g||-1!==h&&-1!==
l||-1!==g&&-1!==l)if(h===g||h===l||g===l){if(null===Ta){var b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);Ta=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))}Ta?h===m&&g===m&&l===m||h===k&&g===k&&l===k||h===q&&g===q&&l===q||(x(),n(a)):(x(),n(a))}}Ca(function(){function n(){if(5E3<=Date.now()-ia)x(),H(a);else{var b=document.hidden;if(!0===b||void 0===b)h=d.b.offsetWidth,g=e.b.offsetWidth,l=f.b.offsetWidth,y();setTimeout(n,50)}}var ia=Date.now();
Q(d,"sans-serif",b);Q(e,"serif",b);Q(f,"monospace",b);c.appendChild(d.b);c.appendChild(e.b);c.appendChild(f.b);document.body.appendChild(c);m=d.b.offsetWidth;k=e.b.offsetWidth;q=f.b.offsetWidth;n();Ra(d,function(a){h=a;y()});Q(d,'"'+a.family+'",sans-serif',b);Ra(e,function(a){g=a;y()});Q(e,'"'+a.family+'",serif',b);Ra(f,function(a){l=a;y()});Q(f,'"'+a.family+'",monospace',b)})})};function R(){this.fonts=[];this.m="loaded";Object.defineProperties(this,{status:{get:function(){return this.m}},size:{get:function(){return this.fonts.length}}})}
R.prototype.add=function(a){if(!this.has(a)){S||(S=document.createElement("style"),document.head.appendChild(S));var b=null;if("loaded"===a.m){for(var b=new Uint8Array(a.buffer),c="",d=0;d<b.length;d++)c+=String.fromCharCode(b[d]);b="url(data:font/opentype;base64,"+btoa(c)+")"}else b=a.source;S.sheet.insertRule('@font-face{font-family:"'+a.family+'";font-style:'+a.style+";font-weight:"+a.weight+";src:"+b+";}",0);a.D=S.sheet.cssRules[0];this.fonts.push(a)}};
R.prototype["delete"]=function(a){var b=this.fonts.indexOf(a);return-1!==b?(a.remove(),this.fonts.splice(b,1),!0):!1};R.prototype.clear=function(){this.fonts=[]};R.prototype.has=function(a){return-1!==this.fonts.indexOf(a)};R.prototype.forEach=function(a){var b=this;this.fonts.forEach(function(c,d){a(c,d,b)})};
function Va(a,b){function c(a){return"bold"===a?700:"normal"===a?400:a}var d=ma(b);return null===d?null:a.fonts.filter(function(a){for(var b=d.family,h=0;h<b.length;h++)if(a.family===b[h]&&a.style===d.style&&a.stretch===d.stretch&&c(a.weight)===c(d.weight))return!0;return!1})}
R.prototype.load=function(a){var b=this,c=Va(this,a);return null===c?Promise.reject([]):c.length?(b.m="loading",Promise.all(c.map(function(a){return a.load()})).then(function(){b.m="loaded";return c})["catch"](function(){b.m="loaded";return c})):Promise.resolve([])};R.prototype.check=function(a){a=Va(this,a);if(0===a.length)return!1;for(var b=0;b<a.length;b++)if("loaded"!==a[b].status)return!1;return!0};var Wa=null;
function Xa(){if(!Wa){var a=document.createElement("style"),b=document.getElementsByTagName("head")[0];a.appendChild(document.createTextNode('@font-face{font-family:"_fff_";src:url(data:font/woff2;base64,d09GMgABAAAAAADcAAoAAAAAAggAAACWAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABk4ALAoUNAE2AiQDCAsGAAQgBSAHIBtvAciuMTaGVo8IaqBbcKPeB3CyAAIO4unr9nb72QE3p00iGQQIZcAAcAMEJOztBx7zdWVWn//BAPW1l0BN429cPrCPE75MA637gPs0DjavNxzHtWeXXErKIV3AF9TbHqCTOATL2BgjeIH30lQwSAonU1LabV8Iz12wDvgd/obV5QVxXDKvUhW1QfWNrS6HzEQJaP4tBA==) format("woff2"),url(data:application/font-woff;base64,d09GRgABAAAAAAHgAAoAAAAAAggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABUAAAABcAAABOBIQEIWNtYXAAAAFwAAAAJgAAACwADABzZ2x5ZgAAAaAAAAAUAAAAFAwBPQJoZWFkAAAA9AAAAC0AAAA2CHEB92hoZWEAAAEkAAAAFgAAACQMAQgDaG10eAAAAWgAAAAIAAAACAgAAABsb2NhAAABmAAAAAYAAAAGAAoAAG1heHAAAAE8AAAAEwAAACAABAACbmFtZQAAAbQAAAAeAAAAIAAjCF5wb3N0AAAB1AAAAAwAAAAgAAMAAHgBY2BkYABhb81vuvH8Nl8ZmFgYQOBCWvVrMP3VURxEczBAxBmYQAQAAFIIBgAAAHgBY2BkYGBhAAEOKAkUQQVMAAJKABkAAHgBY2BkYGBgAkIgjQ0AAAC+AAcAeAFjAIEUBkYGcoECgwILmAEiASBRAK4AAAAAAAgAAAB4AWNgYGBkYAZiBgYeBhYGBSDNAoQgvsP//xDy/0EwnwEATX4GfAAAAAAAAAAKAAAAAQAAAAAIAAQAAAEAADEBCAAEAHgBY2BgYGKQY2BmYGThZGAEshmgbCYw2wEABjMAigAAeAFjYGbACwAAfQAE) format("woff")}'));b.appendChild(a);
Wa=Ua().then(function(){var c=new P,d=["opentype","truetype"];Q(c,"_fff_","");document.body.appendChild(c.b);var e=c.b.offsetWidth;200<=e&&d.unshift("woff");300==e&&d.unshift("woff2");b.removeChild(a);document.body.removeChild(c.b);return d},function(){return["opentype","truetype"]})}return Wa};function T(a,b,c){var d=this,e=c||{};this.source=b;this.buffer=null;this.C=[];this.B=new Promise(function(a,b){d.I=a;d.F=b});this.m="unloaded";this.D=null;Object.defineProperties(this,{family:{get:function(){return a}},style:{get:function(){return e.style||"normal"}},weight:{get:function(){return e.weight||"normal"}},stretch:{get:function(){return e.stretch||"normal"}},unicodeRange:{get:function(){return e.unicodeRange||"U+0-10FFFF"}},variant:{get:function(){return e.variant||"normal"}},featureSettings:{get:function(){return e.featureSettings||
"normal"}},status:{get:function(){return this.m}},loaded:{get:function(){return this.B}}});"string"===typeof b?this.C=na(b):(this.buffer=b,this.m="loaded",this.I(d))}var S=null;T.prototype.remove=function(){if(S&&this.D)for(var a=0;a<S.sheet.cssRules.length;a++)if(this.D===S.sheet.cssRules[a]){S.sheet.deleteRule(a);this.D=null;break}};
function Ya(a,b){for(var c=null,d=0;d<b.length;d++)for(var e=0;e<a.C.length;e++)if(b[d]===a.C[e].format&&null===c){c=a.C[e].url;break}c||0===b.length||(c=a.C[0].url);return c}
T.prototype.load=function(){var a=this;"unloaded"===a.m&&(a.m="loading",Xa().then(function(b){(b=Ya(a,b))?u(b).then(function(a){if(a.ok)return a.arrayBuffer();throw a;}).then(function(b){a.buffer=b;a.m="loaded";a.I(a)})["catch"](function(){a.m="error";a.F(a)}):(a.m="error",a.F(a))})["catch"](function(){a.m="error";a.F(a)}));return this.B};T.prototype.load=T.prototype.load;var U=new R;var Za=!!window.ArrayBuffer;
function V(a,b,c,d){c=c||{};this.id=null;/use\.typekit\.net\/dp\//.test(b)?(b=b.replace("use.typekit.net/dp/","use.typekit.net/pf/").replace("{subset}.{format}?","{format}{?primer,unicode,gdyn,features}&v=2&"),this.id=/\pf\/tk\/([a-z]{4})\//.exec(b)[1]):b=b+="&v=2";this.url=new fa(b);this.unicode=new A(z(c.unicodeRange||""));this.o=new la(ka(c.featureSettings||""));this.subset=c.subset||F(new D(B(this.unicode),v(this.o)));this.source=$a(this,this.subset);this.v=new T(a,this.source,c);this.m="unloaded";
Object.defineProperties(this,{family:{get:function(){return this.v.family}},style:{get:function(){return this.v.style}},weight:{get:function(){return this.v.weight}},stretch:{get:function(){return this.v.stretch}},unicodeRange:{get:function(){return oa(B(this.unicode))}},featureSettings:{get:function(){return this.v.featureSettings}},status:{get:function(){return this.m}},dynamic:{get:function(){return d||!1}}});this.b=Promise.resolve(this);this.g=[]}
function ab(a){return{style:a.style,weight:a.weight,stretch:a.stretch,unicodeRange:a.unicodeRange}}function $a(a,b){return"url("+t(a.url,{format:"l",primer:b})+') format("woff2"),url('+t(a.url,{format:"d",primer:b})+') format("woff"),url('+t(a.url,{format:"m",primer:b})+') format("opentype")'}V.prototype.w=function(a){return u(t(this.url,{format:"m",primer:a})).then(function(a){if(a.ok)return a.arrayBuffer();throw a;})};
V.prototype.load=function(){var a=this;a.i||(a.i=new Promise(function(b,c){Za?a.dynamic&&"unloaded"===a.m?(a.m="loading",a.w(a.subset).then(function(b){a.source=new Oa(b);b=a.source;var c;c=new Uint8Array(new ArrayBuffer(1));c[0]=1;c=new Ka(c.buffer);Pa(b,c);a.v=new T(a.family,(new DataView(a.source.arrayBuffer)).buffer,ab(a));return a.v.load()}).then(function(){a.m="loaded";b(a)})["catch"](function(){a.m="error";c(a)})):a.v.load().then(function(){a.m="loaded";b(a)})["catch"](function(){a.m="error";
c(a)}):b(a)}));return a.i};
V.prototype.A=function(a){var b=this;b.g.push(a);b.b=b.b.then(function(){if(!b.dynamic)return Promise.reject(b);var a=new A(z(b.g.join("")));b.g=[];var d=pa(b.unicode,a);if(0===d.b.length)return Promise.resolve(b);b.unicode=C(b.unicode,d);return b.load().then(function(){if(Za){if(b.source instanceof Oa){var a=b.source,c=new D(B(d),null,a.b[1146703425]);return E(c).then(b.w.bind(b)).then(function(d){d=new Ka(d);if(0===d.status)return Pa(a,d),b.subset=F(c),b.source=a,b.v=new T(b.family,(new DataView(b.source.arrayBuffer)).buffer,
ab(b)),b.v.load().then(function(){U.add(b.v);return b});b.subset=F(c);return b})}throw b;}var h=C(b.unicode,d),c=new D(B(h),v(b.o));b.unicode=h;return E(c).then(function(a){b.subset=a;b.source=$a(b,a);b.v=new T(b.family,b.source,ab(b));U.add(b.v);return b})})});return b.b};function W(){this.fonts=[];Object.defineProperties(this,{status:{get:function(){for(var a=0;a<this.fonts.length;a++)if("loading"===this.fonts[a].status)return"loading";return"loaded"}},count:{get:function(){return this.fonts.length}}})}W.prototype.add=function(a){U.add(a.v);this.fonts.push(a);return this};W.prototype["delete"]=function(a){var b=this.fonts.indexOf(a);-1!==b&&this.fonts.splice(b,1);return U["delete"](a.v)};
W.prototype.forEach=function(a){var b=this;this.fonts.forEach(function(c,d){a(c,d,b)})};window.Typekit={};window.Typekit.kit=config.f;window.Typekit.fonts=new W;window.Typekit.Font=V;window.Typekit.Font.prototype.load=V.prototype.load;window.Typekit.Font.prototype.update=V.prototype.A;window.Typekit.subset=function(a,b){return E(new D(B(new A(z(a))),v(new la(ka(b||"")))))};var bb=new ga(config),cb=new ga({p:"3",a:config.a,h:config.h,t:config.t,j:config.j,f:null,c:null}),za=document.documentElement,db=new ra(new A(qa(document.documentElement))),X=0,eb=0;
function fb(){Typekit.fonts.forEach(function(a){a.dynamic&&a.update(oa(B(db.get())))})}function Y(){X+eb===Typekit.kit.length&&(0!==X?Aa("wf-active"):Aa("wf-inactive"))}var Z=(new function(a){var b=document.documentElement,c=this;this.b={};this.g=new da(b,function(b){var e=[];b.forEach(function(a){qa(a).forEach(function(a){c.b[a]||(e.push(a),c.b[a]=!0)})});e.length&&a(e)})}(function(a){db.set(new A(a));fb()})).g;
ea?Z.i.observe(Z.b,{attributes:!0,characterData:!0,subtree:!0,childList:!0}):(Z.b.addEventListener("DOMAttrModified",Z.g.bind(Z),!1),Z.b.addEventListener("DOMNodeInserted",Z.g.bind(Z),!1),Z.b.addEventListener("DOMCharacterDataModified",Z.g.bind(Z),!1));var gb=window.Typekit.fonts.add;window.Typekit.fonts.add=function(a){gb.bind(window.Typekit.fonts)(a);a.id&&ja(cb,[a.id]);fb()};var hb=!1;
window.Typekit.load=function(){if(!1===hb){hb=!0;var a={},b={};ya();Typekit.kit.forEach(function(c){a[c.family]||(a[c.family]=[],b[c.family]=new aa);a[c.family].push(c)});Object.keys(a).forEach(function(b){b=a[b];for(var c=["normal",400,300,200,100,500,600,"bold",700,800,900],d=["normal","bold","italic"],e=0;e<c.length;e++)for(var m=0;m<d.length;m++)for(var k=0;k<b.length;k++){var q=b[k].descriptors||{},n=q.style||"normal";if(c[e]===(q.weight||"normal")&&d[m]===n){b[k].primary=!0;return}}});Typekit.kit.forEach(function(a){var c=
a.descriptors||{};if(a.dynamic&&!c.subset){var d=oa(B(db.get())),e=new D(B(db.get()),v(new la(ka(c.featureSettings||"")))),m=F(e);c.subset=m;c.unicodeRange=d;var k=new Typekit.Font(a.family,a.source,c,!0);k.load().then(function(){a.primary?(X++,Y(),Typekit.fonts.add(k),b[k.family].resolve()):b[k.family].then(function(){X++;Y();Typekit.fonts.add(k)})})["catch"](function(){E(e).then(function(){k=new Typekit.Font(a.family,a.source,c,!0);k.load().then(function(){a.primary?(X++,Y(),Typekit.fonts.add(k),
b[k.family].resolve()):b[k.family].then(function(){X++;Y();Typekit.fonts.add(k)})})["catch"](function(){eb++;Y()})})})}else k=new Typekit.Font(a.family,a.source,c,a.dynamic),k.load().then(function(){a.primary?(X++,Y(),Typekit.fonts.add(k),b[k.family].resolve()):b[k.family].then(function(){X++;Y();Typekit.fonts.add(k)})})["catch"](function(){eb++;Y()})});if(config.c&&config.c.length){for(var c=document.createElement("style"),d="",e=0;e<config.c.length;e+=2)d+=config.c[e]+"{font-family:"+config.c[e+
1]+";}";c.textContent=d;document.head.appendChild(c)}ja(bb,config.f.map(function(a){return a.id}))}};}());
}({"a":"5688934","h":"tk","t":"ths5mzr","p":1,"j":"0.1.19","c":[".tk-stevie-sans","\"stevie-sans\",sans-serif",".tk-a-otf-gothic-bbb-pr6n","\"a-otf-gothic-bbb-pr6n\",sans-serif"],"l":"typekit","type":"dynamic","preview":"https://use.typekit.net/pf/{user}/{font_alias}/{fvd}/{format}{?subset_id,primer,token,unicode,features,gdyn}","ping":"https://p.typekit.net/p.gif{?s,k,ht,h,f,a,js,app,_}","dl":"AAAALAAAAApnOVh2AAAPZQ","token":"TCnTWWShwwPWvaxvkbNekFp0OxBcjNkZcKWvUKSS8LKWntpVRPsP6bkD5+ob3zP0WAPXfAV4Nn5KcHh50rr7Nw==","f":[{"source":"https://use.typekit.net/af/1ab757/000000000000000000017383/27/{format}{?primer,unicode,gdyn,features}","id":25496,"dynamic":false,"family":"stevie-sans","descriptors":{"weight":700,"unicodeRange":"U+20-7E,U+A1-AC,U+AE-B1,U+B4-B8,U+BA-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122","featureSettings":"\"ALL \"","subset":"7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"}},{"source":"https://use.typekit.net/af/85c9c4/000000000000000000017384/27/{format}{?primer,unicode,gdyn,features}","id":25497,"dynamic":false,"family":"stevie-sans","descriptors":{"unicodeRange":"U+20-7E,U+A1-AC,U+AE-B1,U+B4-B8,U+BA-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122","featureSettings":"\"ALL \"","subset":"7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"}},{"source":"https://use.typekit.net/af/5d1f38/00000000000000003b9acbc2/27/{format}{?primer,unicode,gdyn,features}","id":26148,"dynamic":true,"family":"a-otf-gothic-bbb-pr6n","descriptors":{"unicodeRange":"U+20-7E,U+A0-FF,U+152-153,U+178,U+2BC,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122","featureSettings":"\"ALL \"","subset":"","dynamic":true}}]}))