!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=13)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var u=t[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],t))}else{for(var u=[],i=0;i<r.parts.length;i++)u.push(f(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:u}}}}function r(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],u=o[1],a=o[2],f=o[3],c={css:u,media:a,sourceMap:f};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function o(e,t){var n=g(),r=h[h.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),h.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=h.indexOf(e);t>=0&&h.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function a(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function f(e,t){var n,r,o;if(t.singleton){var f=v++;n=b||(b=u(t)),r=c.bind(null,n,f,!1),o=c.bind(null,n,f,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(t),r=l.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=s.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function c(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(i,u[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function l(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},A=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=p(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,v=0,h=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=A()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=r(e);return n(o,t),function(e){for(var i=[],u=0;u<o.length;u++){var a=o[u],f=d[a.id];f.refs--,i.push(f)}if(e){var c=r(e);n(c,t)}for(var u=0;u<i.length;u++){var f=i[u];if(0===f.refs){for(var s=0;s<f.parts.length;s++)f.parts[s]();delete d[f.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),a=r(u),f=n(7),c=r(f);n(9);var s=function(){function e(){o(this,e)}return i(e,[{key:"mount",value:function(e){document.title="bar",e.innerHTML=c.default,e.querySelector(".bar__gofoo").addEventListener("click",function(){a.default.router.go("/foo")})}}]),e}();t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),a=r(u),f=n(8),c=r(f);n(10);var s=function(){function e(){o(this,e)}return i(e,[{key:"mount",value:function(e){document.title="foo",e.innerHTML=c.default,e.querySelector(".foo__gobar").addEventListener("click",function(){a.default.router.go("/bar")})}}]),e}();t.default=s},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".bar{color:blue}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".foo{color:red}",""])},function(e,t){e.exports="<div class=bar> <h1>Page Bar</h1> <a href=javascript: class=bar__gofoo>goto foo</a> </div> "},function(e,t,n){e.exports="<div class=foo> <h1>Page Foo</h1> <a href=javascript: class=foo__gobar>goto bar</a> <p> <img src="+n(12)+"> </p> <p> <img src="+n(11)+"> </p> </div> "},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){e.exports=n.p+"ef0a98bc9f035710483a5ccebcfbc783.png"},function(e,t){e.exports="data:image/png;base64,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"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),a=r(u),f=n(4),c=r(f),s=n(3),l=r(s),d={"/foo":c.default,"/bar":l.default},p=function(){function e(){o(this,e)}return i(e,[{key:"start",value:function(){var e=this;window.addEventListener("popstate",function(){e.load(location.pathname)}),this.load(location.pathname)}},{key:"go",value:function(e){history.pushState({},"",e),this.load(e)}},{key:"load",value:function(e){var t=new d[e];t.mount(document.body)}}]),e}();a.default.router=new p,a.default.router.start()}]);