(window.webpackJsonp=window.webpackJsonp||[]).push([[22,6],{"09beb9661243cd83f54a":function(e,t,n){(e.exports=n("0e326f80368fd0b1333e")(!1)).push([e.i,"\r\n  \r\n  .Demo__some-network {\r\n    vertical-align: top;\r\n    /* display: inline; */\r\n    margin-right: 15px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .Demo__some-network__share-count {\r\n    margin-top: 3px;\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .Demo__some-network__share-button {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .Demo__some-network__share-button:hover:not(:active) {\r\n    opacity: 0.75;\r\n  }\r\n  \r\n  .Demo__some-network__custom-icon {\r\n    width:32px;\r\n    height:32px;\r\n  }\r\n  div.SocialMediaShareButton{\r\n    display:inline-flex !important ;\r\n}",""])},"0bf817924258aa08734c":function(e,t,n){"use strict";t.__esModule=!0;var r,o=n("3ab2e978f88fe5b3f2d5"),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},"15a19dcfba5dcb8e4289":function(e,t){var n=1e3,r=60*n,o=60*r,i=24*o,a=365.25*i;function c(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var u,s=typeof e;if("string"===s&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var c=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*a;case"days":case"day":case"d":return c*i;case"hours":case"hour":case"hrs":case"hr":case"h":return c*o;case"minutes":case"minute":case"mins":case"min":case"m":return c*r;case"seconds":case"second":case"secs":case"sec":case"s":return c*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===s&&!1===isNaN(e))return t.long?c(u=e,i,"day")||c(u,o,"hour")||c(u,r,"minute")||c(u,n,"second")||u+" ms":function(e){if(e>=i)return Math.round(e/i)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},"1cebed0f2cca7c4b504a":function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,i=o-(r||o);e.diff=i,e.prev=r,e.curr=o,r=o;for(var a=new Array(arguments.length),c=0;c<a.length;c++)a[c]=arguments[c];a[0]=t.coerce(a[0]),"string"!==typeof a[0]&&a.unshift("%O");var u=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;u++;var o=t.formatters[r];if("function"===typeof o){var i=a[u];n=o.call(e,i),a.splice(u,1),u--}return n}),t.formatArgs.call(e,a),(n.log||t.log||console.log.bind(console)).apply(e,a)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"===typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("15a19dcfba5dcb8e4289"),t.names=[],t.skips=[],t.formatters={}},"2e7455791fbd46a31510":function(e,t,n){var r=n("8acb04518390a10eba05")("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var a,c,u=t.prefix||"__jp",s=t.name||u+o++,f=t.param||"callback",l=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,p=document.getElementsByTagName("script")[0]||document.head;l&&(c=setTimeout(function(){b(),n&&n(new Error("Timeout"))},l));function b(){a.parentNode&&a.parentNode.removeChild(a),window[s]=i,c&&clearTimeout(c)}return window[s]=function(e){r("jsonp got",e),b(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+f+"="+d(s)).replace("?&","?"),r('jsonp req "%s"',e),(a=document.createElement("script")).src=e,p.parentNode.insertBefore(a,p),function(){window[s]&&b()}};var o=0;function i(){}},"3ab2e978f88fe5b3f2d5":function(e,t,n){e.exports={default:n("7e8454bd05879615f69a"),__esModule:!0}},"48d2f0c12c34837ccce6":function(e,t){e.exports=function(e){return e&&"object"===typeof e&&"function"===typeof e.copy&&"function"===typeof e.fill&&"function"===typeof e.readUInt8}},"5a45bbf323059c3eb8f7":function(e,t,n){e.exports={default:n("9bdb9fecb3f64860fc98"),__esModule:!0}},"7193edc345052a6197ac":function(e,t,n){var r=n("09beb9661243cd83f54a");"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("1e4534d1d62a11482e97")(r,o);r.locals&&(e.exports=r.locals)},"7474e09206d6df50164e":function(e,t,n){"use strict";t.__esModule=!0;var r,o=n("b365af20d4e02cb0aa22"),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},"8a4a7a62a26b8f064358":function(e,t,n){e.exports={default:n("3bab944770eec173c661"),__esModule:!0}},"8acb04518390a10eba05":function(e,t,n){(function(r){function o(){var e;try{e=t.storage.debug}catch(e){}return!e&&"undefined"!==typeof r&&"env"in r&&(e=r.env.DEBUG),e}(t=e.exports=n("1cebed0f2cca7c4b504a")).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,i=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(i=o))}),e.splice(i,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=o,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(o())}).call(this,n("26d59f808dff3e83c741"))},"97e544c2b5273ff09282":function(e,t,n){"use strict";(function(t){function r(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,o=0,i=Math.min(n,r);o<i;++o)if(e[o]!==t[o]){n=e[o],r=t[o];break}return n<r?-1:r<n?1:0}function o(e){return t.Buffer&&"function"===typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var i=n("f89589b25fe2f057e3ca"),a=Object.prototype.hasOwnProperty,c=Array.prototype.slice,u="foo"===function(){}.name;function s(e){return Object.prototype.toString.call(e)}function f(e){return!o(e)&&("function"===typeof t.ArrayBuffer&&("function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var l=e.exports=h,d=/\s*function\s+([^\(\s]*)\s*/;function p(e){if(i.isFunction(e)){if(u)return e.name;var t=e.toString().match(d);return t&&t[1]}}function b(e,t){return"string"===typeof e?e.length<t?e:e.slice(0,t):e}function m(e){if(u||!i.isFunction(e))return i.inspect(e);var t=p(e);return"[Function"+(t?": "+t:"")+"]"}function y(e,t,n,r,o){throw new l.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:o})}function h(e,t){e||y(e,!0,t,"==",l.ok)}function g(e,t,n,a){if(e===t)return!0;if(o(e)&&o(t))return 0===r(e,t);if(i.isDate(e)&&i.isDate(t))return e.getTime()===t.getTime();if(i.isRegExp(e)&&i.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"===typeof e||null!==t&&"object"===typeof t){if(f(e)&&f(t)&&s(e)===s(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===r(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(o(e)!==o(t))return!1;var u=(a=a||{actual:[],expected:[]}).actual.indexOf(e);return-1!==u&&u===a.expected.indexOf(t)||(a.actual.push(e),a.expected.push(t),function(e,t,n,r){if(null===e||void 0===e||null===t||void 0===t)return!1;if(i.isPrimitive(e)||i.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var o=v(e),a=v(t);if(o&&!a||!o&&a)return!1;if(o)return e=c.call(e),t=c.call(t),g(e,t,n);var u,s,f=j(e),l=j(t);if(f.length!==l.length)return!1;for(f.sort(),l.sort(),s=f.length-1;s>=0;s--)if(f[s]!==l[s])return!1;for(s=f.length-1;s>=0;s--)if(u=f[s],!g(e[u],t[u],n,r))return!1;return!0}(e,t,n,a))}return n?e===t:e==t}function v(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function w(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function _(e,t,n,r){var o;if("function"!==typeof t)throw new TypeError('"block" argument must be a function');"string"===typeof n&&(r=n,n=null),o=function(e){var t;try{e()}catch(e){t=e}return t}(t),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),e&&!o&&y(o,n,"Missing expected exception"+r);var a="string"===typeof r,c=!e&&o&&!n;if((!e&&i.isError(o)&&a&&w(o,n)||c)&&y(o,n,"Got unwanted exception"+r),e&&o&&n&&!w(o,n)||!e&&o)throw o}l.AssertionError=function(e){var t;this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=b(m((t=this).actual),128)+" "+t.operator+" "+b(m(t.expected),128),this.generatedMessage=!0);var n=e.stackStartFunction||y;if(Error.captureStackTrace)Error.captureStackTrace(this,n);else{var r=new Error;if(r.stack){var o=r.stack,i=p(n),a=o.indexOf("\n"+i);if(a>=0){var c=o.indexOf("\n",a+1);o=o.substring(c+1)}this.stack=o}}},i.inherits(l.AssertionError,Error),l.fail=y,l.ok=h,l.equal=function(e,t,n){e!=t&&y(e,t,n,"==",l.equal)},l.notEqual=function(e,t,n){e==t&&y(e,t,n,"!=",l.notEqual)},l.deepEqual=function(e,t,n){g(e,t,!1)||y(e,t,n,"deepEqual",l.deepEqual)},l.deepStrictEqual=function(e,t,n){g(e,t,!0)||y(e,t,n,"deepStrictEqual",l.deepStrictEqual)},l.notDeepEqual=function(e,t,n){g(e,t,!1)&&y(e,t,n,"notDeepEqual",l.notDeepEqual)},l.notDeepStrictEqual=function e(t,n,r){g(t,n,!0)&&y(t,n,r,"notDeepStrictEqual",e)},l.strictEqual=function(e,t,n){e!==t&&y(e,t,n,"===",l.strictEqual)},l.notStrictEqual=function(e,t,n){e===t&&y(e,t,n,"!==",l.notStrictEqual)},l.throws=function(e,t,n){_(!0,e,t,n)},l.doesNotThrow=function(e,t,n){_(!1,e,t,n)},l.ifError=function(e){if(e)throw e};var j=Object.keys||function(e){var t=[];for(var n in e)a.call(e,n)&&t.push(n);return t}}).call(this,n("698d75b157f24ae829cc"))},"9c5c51ea5124b85182b5":function(e,t,n){e.exports={default:n("585ae7ce1af001bfb32b"),__esModule:!0}},"9f0364ca4de56f579504":function(e,t,n){"use strict";t.__esModule=!0;var r=a(n("e84bc9238b9376d8a953")),o=a(n("9c5c51ea5124b85182b5")),i="function"===typeof o.default&&"symbol"===typeof r.default?function(e){return typeof e}:function(e){return e&&"function"===typeof o.default&&e.constructor===o.default&&e!==o.default.prototype?"symbol":typeof e};function a(e){return e&&e.__esModule?e:{default:e}}t.default="function"===typeof o.default&&"symbol"===i(r.default)?function(e){return"undefined"===typeof e?"undefined":i(e)}:function(e){return e&&"function"===typeof o.default&&e.constructor===o.default&&e!==o.default.prototype?"symbol":"undefined"===typeof e?"undefined":i(e)}},a27543e5c523971035dd:function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),i=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),a=n("ab039aecd4a1d4fedc0e"),c=n("a28fc3c963a1d4d1a2e5"),u=n("ab4cb61bcb2dc161defb"),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var f=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.call(this,n));return r.determineState=function(){var e=window.pageYOffset+window.innerHeight,t=document.body.clientHeight-r.props.bottomThreshold;!r.state.isAtBottom&&e>=t?(r.setState({isAtBottom:!0}),r.props.onFooterStateChange&&r.props.onFooterStateChange(!0)):r.state.isAtBottom&&e<t-t*r.props.stickAtMultiplier&&(r.setState({isAtBottom:!1}),r.props.onFooterStateChange&&r.props.onFooterStateChange(!1))},r.handleScroll=function(){r.determineState()},r.state={isAtBottom:!1},r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){var e=this;this.observer=new MutationObserver(function(t){var n=t[t.length-1].target.clientHeight;n+(document.body.clientHeight-n)>window.innerHeight?e.determineState():(e.setState({isAtBottom:!0}),e.props.onFooterStateChange&&e.props.onFooterStateChange(!0))}),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),window.addEventListener("scroll",this.handleScroll),this.determineState()},t.prototype.componentWillUnmount=function(){this.observer.disconnect(),window.removeEventListener("scroll",this.handleScroll)},t.prototype.render=function(){var e=s({},this.props.stickyStyles,{position:"fixed",bottom:0}),t=s({},this.props.normalStyles,{position:"static"});return o.a.createElement("div",null,o.a.createElement("div",{style:t},this.props.children),!this.state.isAtBottom&&o.a.createElement("div",{style:e},this.props.children))},t}(r.Component);f.propTypes={},f.defaultProps={bottomThreshold:0,stickAtMultiplier:.001,stickyStyles:{},normalStyles:{}};var l=n("adc20f99e57c573c589c"),d=n("d95b0cf107403b178365"),p=n("7edf83707012a871cdfb"),b={},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;return Object(p.a)(e,function(){t.type})},y=function(e){return e.customFooter||b},h=function(){return Object(c.a)(y,function(e){return e})},g=regeneratorRuntime.mark(v);function v(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},g)}Object(a.defineMessages)({header:{id:"".concat("app.containers.CustomFooter",".header"),defaultMessage:"This is the CustomFooter container!"}});var w,_=n("a94eb86da21a09c95b30");n("7193edc345052a6197ac");function j(e,t,n,r){w||(w="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:w,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function S(e){return(S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A,D=j("div",{className:"Demo__container"},void 0,j("div",{className:"Demo__some-network"},void 0,j(_.FacebookShareButton,{url:"https://www.facebook.com/",quote:"title",className:"Demo__some-network__share-button"},void 0,j(_.FacebookIcon,{size:32,round:!0})),j(_.TwitterShareButton,{url:"https://twitter.com/",quote:"title",className:"Demo__some-network__share-button"},void 0,j(_.TwitterIcon,{size:32,round:!0})),j(_.TelegramShareButton,{url:"https://telegram.org/",quote:"title",className:"Demo__some-network__share-button"},void 0,j(_.TelegramIcon,{size:32,round:!0})),j(_.WhatsappShareButton,{url:"https://www.whatsapp.com/",quote:"title",separator:":: ",className:"Demo__some-network__share-button"},void 0,j(_.WhatsappIcon,{size:32,round:!0})),j(_.LinkedinShareButton,{url:"https://www.linkedin.com/",quote:"title",windowWidth:750,windowHeight:600,className:"Demo__some-network__share-button"},void 0,j(_.LinkedinIcon,{size:32,round:!0})),j(_.TumblrShareButton,{url:"https://www.tumblr.com/",quote:"title",windowWidth:660,windowHeight:460,className:"Demo__some-network__share-button"},void 0,j(_.TumblrIcon,{size:32,round:!0})),j(_.LivejournalShareButton,{url:"https://www.livejournal.com/",quote:"title",description:"",className:"Demo__some-network__share-button"}),j(_.MailruShareButton,{url:"",quote:"title",className:"Demo__some-network__share-button"},void 0,j(_.MailruIcon,{size:32,round:!0})),j(_.EmailShareButton,{url:"https://accounts.google.com/",quote:"title",body:"body",className:"Demo__some-network__share-button"},void 0,j(_.EmailIcon,{size:32,round:!0})),j(_.WorkplaceShareButton,{url:"https://www.facebook.com/workplace",quote:"title",className:"Demo__some-network__share-button"},void 0,j(_.WorkplaceIcon,{size:32,round:!0})),j(_.PocketShareButton,{url:"https://getpocket.com/",quote:"title",className:"Demo__some-network__share-button"},void 0,j(_.PocketIcon,{size:32,round:!0})),j(_.InstapaperShareButton,{url:"https://www.instapaper.com/",quote:"title",className:"Demo__some-network__share-button"},void 0,j(_.InstapaperIcon,{size:32,round:!0})))),M=function(e){function t(){var e,n,r,o,i,a,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,s=new Array(u),f=0;f<u;f++)s[f]=arguments[f];return r=this,n=!(o=(e=x(t)).call.apply(e,[this].concat(s)))||"object"!==S(o)&&"function"!==typeof o?E(r):o,i=E(n),c={},(a="state")in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,n}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){return D}}])&&O(n.prototype,o),i&&O(n,i),t}();function P(e,t,n,r){A||(A="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:A,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}n.d(t,"CustomFooter",function(){return N});var T=P("div",{className:"container "},void 0,P("div",{className:"row justify-content-center"},void 0,P("div",{className:"col-12"},void 0,P(M,{}))));function N(){return Object(d.a)({key:"customFooter",reducer:m}),Object(l.a)({key:"customFooter",saga:v}),P(f,{bottomThreshold:50,normalStyles:{backgroundColor:"rgb(235, 235, 235)",boxShadow:"0 0.5rem 1rem rgba(0, 0, 0, 0.15)",padding:"2rem"},stickyStyles:{backgroundColor:"rgba(255,255,255,.8)",padding:"2rem"}},void 0,T)}var z=Object(c.b)({customFooter:h()});var B=Object(i.connect)(z,function(e){return{dispatch:e}});t.default=Object(u.compose)(B,r.memo)(N)},a988ef2f9d8cd3209da7:function(e,t,n){e.exports={default:n("2b5d31c2ccefb361b2c6"),__esModule:!0}},aa675f1299ad16c8424c:function(e,t,n){"use strict";t.__esModule=!0;var r=a(n("b29d6e159a515a3f9d2e")),o=a(n("a988ef2f9d8cd3209da7")),i=a(n("9f0364ca4de56f579504"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof t?"undefined":(0,i.default)(t)));e.prototype=(0,o.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(r.default?(0,r.default)(e,t):e.__proto__=t)}},acab2ae8d55fd58113d8:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},adc20f99e57c573c589c:function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),i=(n("5ef9de3df8d92ea0e41c"),n("d7dd51e1bf6bfc2c9c3d")),a=n("f2873ecf7390fe7d7c89"),c=n.n(a),u=n("5fa3f8487e09c6182715"),s=n.n(u),f=n("f3b0ff1628e56352bcbf"),l=n.n(f),d=n("a1cf5d6fa4ed65a6ddd5"),p=n.n(d),b=n("6a4f9c383785f9168266"),m=n.n(b),y=n("cc13decd9f9c09598c2f"),h="@@saga-injector/daemon",g="@@saga-injector/once-till-unmount";function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){w(e,t,n[t])})}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=["@@saga-injector/restart-on-remount",h,g],j=function(e){return m()(s()(e)&&!p()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},S=function(e){var t={saga:l.a,mode:function(e){return s()(e)&&_.includes(e)}};m()(c()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function O(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;t||Object(y.a)(e);var i=v({},r,{mode:r.mode||h}),a=i.saga,c=i.mode;j(n),S(i);var u=Reflect.has(e.injectedSagas,n);(!u||u&&c!==h&&c!==g)&&(e.injectedSagas[n]=v({},i,{task:e.runSaga(a,o)}))}}function x(e,t){return function(n){if(t||Object(y.a)(e),j(n),Reflect.has(e.injectedSagas,n)){var r=e.injectedSagas[n];r.mode&&r.mode!==h&&(r.task.cancel(),e.injectedSagas[n]="done")}}}function E(e){return Object(y.a)(e),{injectSaga:O(e,!0),ejectSaga:x(e,!0)}}n.d(t,"a",function(){return k});var k=function(e){var t=e.key,n=e.saga,r=e.mode,a=o.a.useContext(i.ReactReduxContext);o.a.useEffect(function(){var e=E(a.store);return e.injectSaga(t,{saga:n,mode:r}),function(){e.ejectSaga(t)}},[])}},b29d6e159a515a3f9d2e:function(e,t,n){e.exports={default:n("a776c97921435e9ced4f"),__esModule:!0}},b365af20d4e02cb0aa22:function(e,t,n){e.exports={default:n("dec6cd307b6ac1754da5"),__esModule:!0}},b912ecc4473ae8a2ff0b:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},cc13decd9f9c09598c2f:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n("d3a850c4000d77bccc89"),o=n.n(r),i=n("f3b0ff1628e56352bcbf"),a=n.n(i),c=n("f2873ecf7390fe7d7c89"),u=n.n(c),s=n("6a4f9c383785f9168266"),f=n.n(s);function l(e){var t={dispatch:a.a,subscribe:a.a,getState:a.a,replaceReducer:a.a,runSaga:a.a,injectedReducers:o.a,injectedSagas:o.a};f()(u()(e,t),"(app/utils...) injectors: Expected a valid redux store")}},d92eaf5c04f439fdc26b:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},d95b0cf107403b178365:function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),i=(n("5ef9de3df8d92ea0e41c"),n("d7dd51e1bf6bfc2c9c3d")),a=n("5fa3f8487e09c6182715"),c=n.n(a),u=n("f3b0ff1628e56352bcbf"),s=n.n(u),f=n("a1cf5d6fa4ed65a6ddd5"),l=n.n(f),d=n("6a4f9c383785f9168266"),p=n.n(d),b=n("cc13decd9f9c09598c2f"),m=n("491cc2e27aa2b4221847");function y(e,t){return function(n,r){t||Object(b.a)(e),p()(c()(n)&&!l()(n)&&s()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer(Object(m.a)(e.injectedReducers)))}}function h(e){return Object(b.a)(e),{injectReducer:y(e,!0)}}n.d(t,"a",function(){return g});var g=function(e){var t=e.key,n=e.reducer,r=o.a.useContext(i.ReactReduxContext);o.a.useEffect(function(){h(r.store).injectReducer(t,n)},[])}},de6bd889b0c636aa995b:function(e,t,n){"use strict";t.__esModule=!0;var r,o=n("9f0364ca4de56f579504"),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"===typeof t?"undefined":(0,i.default)(t))&&"function"!==typeof t?e:t}},e84bc9238b9376d8a953:function(e,t,n){e.exports={default:n("0ce41d6f7e9f87633664"),__esModule:!0}},f89589b25fe2f057e3ca:function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},o=/%[sdj%]/g;t.format=function(e){if(!h(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,a=String(e).replace(o,function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),u=r[n];n<i;u=r[++n])m(u)||!w(u)?a+=" "+u:a+=" "+c(u);return a},t.deprecate=function(n,r){if("undefined"!==typeof e&&!0===e.noDeprecation)return n;if("undefined"===typeof e)return function(){return t.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var i,a={};function c(e,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),b(n)?r.showHidden=n:n&&t._extend(r,n),g(r.showHidden)&&(r.showHidden=!1),g(r.depth)&&(r.depth=2),g(r.colors)&&(r.colors=!1),g(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),f(r,e,r.depth)}function u(e,t){var n=c.styles[t];return n?"\x1b["+c.colors[n][0]+"m"+e+"\x1b["+c.colors[n][1]+"m":e}function s(e,t){return e}function f(e,n,r){if(e.customInspect&&n&&S(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return h(o)||(o=f(e,o,r)),o}var i=function(e,t){if(g(t))return e.stylize("undefined","undefined");if(h(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(y(t))return e.stylize(""+t,"number");if(b(t))return e.stylize(""+t,"boolean");if(m(t))return e.stylize("null","null")}(e,n);if(i)return i;var a=Object.keys(n),c=function(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(n)),j(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return l(n);if(0===a.length){if(S(n)){var u=n.name?": "+n.name:"";return e.stylize("[Function"+u+"]","special")}if(v(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(_(n))return e.stylize(Date.prototype.toString.call(n),"date");if(j(n))return l(n)}var s,w="",O=!1,x=["{","}"];(p(n)&&(O=!0,x=["[","]"]),S(n))&&(w=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(w=" "+RegExp.prototype.toString.call(n)),_(n)&&(w=" "+Date.prototype.toUTCString.call(n)),j(n)&&(w=" "+l(n)),0!==a.length||O&&0!=n.length?r<0?v(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),s=O?function(e,t,n,r,o){for(var i=[],a=0,c=t.length;a<c;++a)k(t,String(a))?i.push(d(e,t,n,r,String(a),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(d(e,t,n,r,o,!0))}),i}(e,n,r,c,a):a.map(function(t){return d(e,n,r,c,t,O)}),e.seen.pop(),function(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(s,w,x)):x[0]+w+x[1]}function l(e){return"["+Error.prototype.toString.call(e)+"]"}function d(e,t,n,r,o,i){var a,c,u;if((u=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?c=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(c=e.stylize("[Setter]","special")),k(r,o)||(a="["+o+"]"),c||(e.seen.indexOf(u.value)<0?(c=m(n)?f(e,u.value,null):f(e,u.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+c.split("\n").map(function(e){return"   "+e}).join("\n")):c=e.stylize("[Circular]","special")),g(a)){if(i&&o.match(/^\d+$/))return c;(a=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+c}function p(e){return Array.isArray(e)}function b(e){return"boolean"===typeof e}function m(e){return null===e}function y(e){return"number"===typeof e}function h(e){return"string"===typeof e}function g(e){return void 0===e}function v(e){return w(e)&&"[object RegExp]"===O(e)}function w(e){return"object"===typeof e&&null!==e}function _(e){return w(e)&&"[object Date]"===O(e)}function j(e){return w(e)&&("[object Error]"===O(e)||e instanceof Error)}function S(e){return"function"===typeof e}function O(e){return Object.prototype.toString.call(e)}function x(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(g(i)&&(i=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!a[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=e.pid;a[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else a[n]=function(){};return a[n]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=b,t.isNull=m,t.isNullOrUndefined=function(e){return null==e},t.isNumber=y,t.isString=h,t.isSymbol=function(e){return"symbol"===typeof e},t.isUndefined=g,t.isRegExp=v,t.isObject=w,t.isDate=_,t.isError=j,t.isFunction=S,t.isPrimitive=function(e){return null===e||"boolean"===typeof e||"number"===typeof e||"string"===typeof e||"symbol"===typeof e||"undefined"===typeof e},t.isBuffer=n("48d2f0c12c34837ccce6");var E=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function k(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){var e,n;console.log("%s - %s",(e=new Date,n=[x(e.getHours()),x(e.getMinutes()),x(e.getSeconds())].join(":"),[e.getDate(),E[e.getMonth()],n].join(" ")),t.format.apply(t,arguments))},t.inherits=n("fe04f3dffedf971443f1"),t._extend=function(e,t){if(!t||!w(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var A="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function D(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');if(A&&e[A]){var t;if("function"!==typeof(t=e[A]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,A,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise(function(e,r){t=e,n=r}),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push(function(e,r){e?n(e):t(r)});try{e.apply(this,o)}catch(e){n(e)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),A&&Object.defineProperty(t,A,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=A,t.callbackify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!==typeof o)throw new TypeError("The last argument must be of type Function");var i=this,a=function(){return o.apply(i,arguments)};t.apply(this,n).then(function(t){e.nextTick(a,null,t)},function(t){e.nextTick(D,t,a)})}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}}).call(this,n("26d59f808dff3e83c741"))},fe04f3dffedf971443f1:function(e,t){"function"===typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}}]);