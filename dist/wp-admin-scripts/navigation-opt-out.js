this.wc=this.wc||{},this.wc.navigationOptOut=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=576)}({0:function(t,n){t.exports=window.wp.element},10:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},103:function(t,n,e){var r=e(11),o=e(86),i=e(33),u=e(17);t.exports=function(t,n){for(var e=o(n),c=u.f,f=i.f,a=0;a<e.length;a++){var s=e[a];r(t,s)||c(t,s,f(n,s))}}},104:function(t,n,e){var r=e(13),o=e(17),i=e(9),u=e(54);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=u(n),c=r.length,f=0;c>f;)o.f(t,e=r[f++],n[e]);return t}},106:function(t,n,e){var r=e(3),o=e(68),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},108:function(t,n){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e},11:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},12:function(t,n,e){var r=e(3),o=e(33).f,i=e(19),u=e(27),c=e(46),f=e(103),a=e(74);t.exports=function(t,n){var e,s,p,l,v,y=t.target,d=t.global,b=t.stat;if(e=d?r:b?r[y]||c(y,{}):(r[y]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!a(d?s:y+(b?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(e,s,l,t)}}},13:function(t,n,e){var r=e(6);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},14:function(t,n){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},17:function(t,n,e){var r=e(13),o=e(72),i=e(9),u=e(40),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},18:function(t,n){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},19:function(t,n,e){var r=e(13),o=e(17),i=e(39);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},2:function(t,n){t.exports=window.wp.i18n},204:function(t,n){function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},e(n,r)}t.exports=e},21:function(t,n,e){var r=e(71),o=e(32);t.exports=function(t){return r(o(t))}},212:function(t,n,e){"use strict";var r=e(70),o=e(10),i=[].slice,u={},c=function(t,n,e){if(!(n in u)){for(var r=[],o=0;o<n;o++)r[o]="a["+o+"]";u[n]=Function("C,a","return new C("+r.join(",")+")")}return u[n](t,e)};t.exports=Function.bind||function(t){var n=r(this),e=i.call(arguments,1),u=function(){var r=e.concat(i.call(arguments));return this instanceof u?c(n,r.length,r):n.apply(t,r)};return o(n.prototype)&&(u.prototype=n.prototype),u}},22:function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},23:function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},24:function(t,n,e){var r=e(204);t.exports=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}},25:function(t,n,e){var r=e(108),o=e(18);t.exports=function(t,n){return!n||"object"!==r(n)&&"function"!=typeof n?o(t):n}},27:function(t,n,e){var r=e(3),o=e(19),i=e(11),u=e(46),c=e(68),f=e(45),a=f.get,s=f.enforce,p=String(String).split("String");(t.exports=function(t,n,e,c){var f,a=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(f=s(e)).source||(f.source=p.join("string"==typeof n?n:""))),t!==r?(a?!v&&t[n]&&(l=!0):delete t[n],l?t[n]=e:o(t,n,e)):l?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},3:function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e(96))},30:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},31:function(t,n,e){var r=e(81),o=e(3),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},32:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},33:function(t,n,e){var r=e(13),o=e(76),i=e(39),u=e(21),c=e(40),f=e(11),a=e(72),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},34:function(t,n,e){var r=e(42),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},36:function(t,n){t.exports={}},39:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},4:function(t,n){t.exports=window.wp.components},40:function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},42:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},45:function(t,n,e){var r,o,i,u=e(106),c=e(3),f=e(10),a=e(19),s=e(11),p=e(47),l=e(51),v=e(36),y=c.WeakMap;if(u){var d=p.state||(p.state=new y),b=d.get,h=d.has,m=d.set;r=function(t,n){return n.facade=t,m.call(d,t,n),n},o=function(t){return b.call(d,t)||{}},i=function(t){return h.call(d,t)}}else{var w=l("state");v[w]=!0,r=function(t,n){return n.facade=t,a(t,w,n),n},o=function(t){return s(t,w)?t[w]:{}},i=function(t){return s(t,w)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},46:function(t,n,e){var r=e(3),o=e(19);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},47:function(t,n,e){var r=e(3),o=e(46),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},48:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},51:function(t,n,e){var r=e(58),o=e(55),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},54:function(t,n,e){var r=e(73),o=e(48);t.exports=Object.keys||function(t){return r(t,o)}},55:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},56:function(t,n,e){var r=e(73),o=e(48).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},563:function(t,n,e){},57:function(t,n){t.exports=!1},576:function(t,n,e){"use strict";e.r(n);var r=e(0),o=(e(64),e(22)),i=e.n(o),u=e(23),c=e.n(u),f=e(24),a=e.n(f),s=e(25),p=e.n(s),l=e(14),v=e.n(l),y=e(2),d=e(4);function b(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=v()(t);if(n){var o=v()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p()(this,e)}}var h=function(t){a()(e,t);var n=b(e);function e(t){var r;return i()(this,e),(r=n.call(this,t)).state={isModalOpen:!0},r}return c()(e,[{key:"render",value:function(){var t=this;return this.state.isModalOpen&&window.surveyData&&window.surveyData.url?Object(r.createElement)(d.Modal,{title:Object(y.__)("Help us improve","woocommerce-admin"),onRequestClose:function(){return t.setState({isModalOpen:!1})},className:"woocommerce-navigation-opt-out-modal"},Object(r.createElement)("p",null,Object(y.__)("Take this 2-minute survey to share why you're opting out of the new navigation","woocommerce-admin")),Object(r.createElement)("div",{className:"woocommerce-navigation-opt-out-modal__actions"},Object(r.createElement)(d.Button,{isDefault:!0,onClick:function(){return t.setState({isModalOpen:!1})}},Object(y.__)("No thanks","woocommerce-admin")),Object(r.createElement)(d.Button,{isPrimary:!0,target:"_blank",href:window.surveyData.url,onClick:function(){return t.setState({isModalOpen:!1})}},Object(y.__)("Share feedback","woocommerce-admin")))):null}}]),e}(r.Component),m=(e(563),document.createElement("div"));m.setAttribute("id","navigation-opt-out-root"),Object(r.render)(Object(r.createElement)(h,null),document.body.appendChild(m))},58:function(t,n,e){var r=e(57),o=e(47);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.9.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},64:function(t,n,e){var r=e(12),o=e(31),i=e(70),u=e(9),c=e(10),f=e(69),a=e(212),s=e(6),p=o("Reflect","construct"),l=s((function(){function t(){}return!(p((function(){}),[],t)instanceof t)})),v=!s((function(){p((function(){}))})),y=l||v;r({target:"Reflect",stat:!0,forced:y,sham:y},{construct:function(t,n){i(t),u(n);var e=arguments.length<3?t:i(arguments[2]);if(v&&!l)return p(t,n,e);if(t==e){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var r=[null];return r.push.apply(r,n),new(a.apply(t,r))}var o=e.prototype,s=f(c(o)?o:Object.prototype),y=Function.apply.call(t,s,n);return c(y)?y:s}})},67:function(t,n,e){var r=e(3),o=e(10),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},68:function(t,n,e){var r=e(47),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},69:function(t,n,e){var r,o=e(9),i=e(104),u=e(48),c=e(36),f=e(98),a=e(67),s=e(51),p=s("IE_PROTO"),l=function(){},v=function(t){return"<script>"+t+"<\/script>"},y=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;y=r?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=a("iframe")).style.display="none",f.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var e=u.length;e--;)delete y.prototype[u[e]];return y()};c[p]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(l.prototype=o(t),e=new l,l.prototype=null,e[p]=t):e=y(),void 0===n?e:i(e,n)}},70:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},71:function(t,n,e){var r=e(6),o=e(30),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},72:function(t,n,e){var r=e(13),o=e(6),i=e(67);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},73:function(t,n,e){var r=e(11),o=e(21),i=e(83).indexOf,u=e(36);t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)!r(u,e)&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},74:function(t,n,e){var r=e(6),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},76:function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},79:function(t,n){n.f=Object.getOwnPropertySymbols},81:function(t,n,e){var r=e(3);t.exports=r},83:function(t,n,e){var r=e(21),o=e(34),i=e(97),u=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},86:function(t,n,e){var r=e(31),o=e(56),i=e(79),u=e(9);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},9:function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},96:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},97:function(t,n,e){var r=e(42),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},98:function(t,n,e){var r=e(31);t.exports=r("document","documentElement")}});