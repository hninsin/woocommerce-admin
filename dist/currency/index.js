this.wc=this.wc||{},this.wc.currency=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=454)}({0:function(e,t){!function(){e.exports=this.wp.element}()},142:function(e,t){!function(){e.exports=this.wc.number}()},2:function(e,t){!function(){e.exports=this.wp.i18n}()},41:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},43:function(e,t){!function(){e.exports=this.wp.hooks}()},454:function(e,t,r){"use strict";r.r(t),r.d(t,"getCurrencyData",(function(){return m}));var o=r(5),n=r.n(o),i=r(0),a=r(41),c=r(2),s=r(142),u=r(87);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(){return Object(u.a)("getCurrencyData",{version:"3.1.0",alternative:"CurrencyFactory.getDataForCountry",plugin:"WooCommerce Admin",hint:"Pass in the country, locale data, and symbol info to use getDataForCountry"}),{US:{code:"USD",symbol:"$",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2},EU:{code:"EUR",symbol:"€",symbolPosition:"left",thousandSeparator:".",decimalSeparator:",",precision:2},IN:{code:"INR",symbol:"₹",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2},GB:{code:"GBP",symbol:"£",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2},BR:{code:"BRL",symbol:"R$",symbolPosition:"left",thousandSeparator:".",decimalSeparator:",",precision:2},VN:{code:"VND",symbol:"₫",symbolPosition:"right",thousandSeparator:".",decimalSeparator:",",precision:1},ID:{code:"IDR",symbol:"Rp",symbolPosition:"left",thousandSeparator:".",decimalSeparator:",",precision:0},BD:{code:"BDT",symbol:"৳",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:0},PK:{code:"PKR",symbol:"₨",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2},RU:{code:"RUB",symbol:"₽",symbolPosition:"right",thousandSeparator:" ",decimalSeparator:",",precision:2},TR:{code:"TRY",symbol:"₺",symbolPosition:"left",thousandSeparator:".",decimalSeparator:",",precision:2},MX:{code:"MXN",symbol:"$",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2},CA:{code:"CAD",symbol:"$",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2}}}t.default=function(e){var t;function r(e){var r=p(p({},{code:"USD",symbol:"$",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2}),e);t={code:r.code.toString(),symbol:r.symbol.toString(),symbolPosition:r.symbolPosition.toString(),decimalSeparator:r.decimalSeparator.toString(),priceFormat:n(r),thousandSeparator:r.thousandSeparator.toString(),precision:parseInt(r.precision,10)}}function o(e){var r=Object(s.numberFormat)(t,e);if(""===r)return r;var o=t,n=o.priceFormat,i=o.symbol;return Object(c.sprintf)(n,i,r)}function n(e){if(e.priceFormat)return t=e.priceFormat.toString(),(r=document.createElement("DIV")).innerHTML=t,r.textContent||r.innerText||"";var t,r;switch(e.symbolPosition){case"left":return"%1$s%2$s";case"right":return"%2$s%1$s";case"left_space":return"%1$s %2$s";case"right_space":return"%2$s %1$s"}return"%1$s%2$s"}return r(e),{getCurrencyConfig:function(){return p({},t)},getDataForCountry:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=t[e]||{},n=r[o.currency_code];return n?{code:o.currency_code,symbol:Object(a.decodeEntities)(n),symbolPosition:o.currency_pos,thousandSeparator:o.thousand_sep,decimalSeparator:o.decimal_sep,precision:o.num_decimals}:{}},setCurrency:r,formatAmount:o,formatCurrency:function(e){return Object(u.a)("Currency().formatCurrency",{version:"5.0.0",alternative:"Currency().formatAmount",plugin:"WooCommerce",hint:"`formatAmount` accepts the same arguments as formatCurrency"}),o(e)},getPriceFormat:n,formatDecimal:function(e){if("number"!=typeof e&&(e=parseFloat(e)),Number.isNaN(e))return 0;var r=t.precision;return Math.round(e*Math.pow(10,r))/Math.pow(10,r)},formatDecimalString:function(e){if("number"!=typeof e&&(e=parseFloat(e)),Number.isNaN(e))return"";var r=t.precision;return e.toFixed(r)},render:function(e){return"number"!=typeof e&&(e=parseFloat(e)),e<0?Object(i.createElement)("span",{className:"is-negative"},o(e)):o(e)}}}},5:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},87:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r(43),n=Object.create(null);function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.version,i=t.alternative,a=t.plugin,c=t.link,s=t.hint,u=a?" from ".concat(a):"",l=r?" and will be removed".concat(u," in version ").concat(r):"",p=i?" Please use ".concat(i," instead."):"",m=c?" See: ".concat(c):"",f=s?" Note: ".concat(s):"",d="".concat(e," is deprecated").concat(l,".").concat(p).concat(m).concat(f);d in n||(Object(o.doAction)("deprecated",e,t,d),console.warn(d),n[d]=!0)}}});