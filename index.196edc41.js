function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,a="object"==typeof self&&self&&self.Object===Object&&self,l=c||a||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o,r,i,u,f,c,a=0,l=!1,s=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,i=r;return o=r=void 0,a=e,u=t.apply(i,n)}function h(t){return a=t,f=setTimeout(T,e),l?g(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-a>=i}function T(){var t=p();if(j(t))return w(t);f=setTimeout(T,function(t){var n=e-(t-c);return s?v(n,i-(t-a)):n}(t))}function w(t){return f=void 0,m&&o?g(t):(o=r=void 0,u)}function O(){var t=p(),n=j(t);if(o=arguments,r=this,c=t,n){if(void 0===f)return h(c);if(s)return f=setTimeout(T,e),g(c)}return void 0===f&&(f=setTimeout(T,e)),u}return e=b(e)||0,y(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,e):i,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=r=f=void 0},O.flush=function(){return void 0===f?u:w(p())},O};const m=document.getElementById("search-box");document.querySelector(".country-list"),document.querySelector(".country-info");m.addEventListener("input",t(e)((function(t){const e=t.target.value.trim();""!==e&&(n=e,fetch(`https://restcountries.com/v2/name/${n}`).then((t=>t.json())).then((t=>console.log(t))));var n}),300));
//# sourceMappingURL=index.196edc41.js.map
