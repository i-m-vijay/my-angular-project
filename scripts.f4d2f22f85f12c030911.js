function mouseHover(){$(document).ready(function(){$(".hoverable-btn").mouseover(function(){$(".sticky").addClass("custom-coloration")})})}function mouseOut(){$(document).ready(function(){$(".hoverable-btn").mouseout(function(){$(".sticky").removeClass("custom-coloration")})})}!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a=(n(o(1)),o(6)),i=n(a),c=n(o(7)),s=n(o(8)),u=n(o(9)),d=n(o(10)),l=n(o(11)),f=n(o(14)),p=[],m=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(m=!0),m)return p=(0,l.default)(p,b),(0,d.default)(p,b.once),p},h=function(){p=(0,f.default)(),v()};e.exports={init:function(e){b=r(b,e),p=(0,f.default)();var t=document.all&&!window.atob;return function(e){return!0===e||"mobile"===e&&u.default.mobile()||"phone"===e&&u.default.phone()||"tablet"===e&&u.default.tablet()||"function"==typeof e&&!0===e()}(b.disable)||t?void p.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}):(b.disableMutationObserver||s.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,function(){v(!0)}):document.addEventListener(b.startEvent,function(){v(!0)}),window.addEventListener("resize",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,i.default)(function(){(0,d.default)(p,b.once)},b.throttleDelay)),b.disableMutationObserver||s.default.ready("[data-aos]",h),p)},refresh:v,refreshHard:h}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function o(e,t,o){function r(t){var o=f,n=p;return f=p=void 0,y=t,b=e.apply(n,o)}function i(e){return y=e,v=setTimeout(u,t),x?r(e):b}function s(e){var o=e-h;return void 0===h||o>=t||o<0||j&&e-y>=m}function u(){var e=k();return s(e)?d(e):void(v=setTimeout(u,function(e){var o=t-(e-h);return j?w(o,m-(e-y)):o}(e)))}function d(e){return v=void 0,$&&f?r(e):(f=p=void 0,b)}function l(){var e=k(),o=s(e);if(f=arguments,p=this,h=e,o){if(void 0===v)return i(h);if(j)return v=setTimeout(u,t),r(h)}return void 0===v&&(v=setTimeout(u,t)),b}var f,p,m,b,v,h,y=0,x=!1,j=!1,$=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,n(o)&&(x=!!o.leading,m=(j="maxWait"in o)?g(a(o.maxWait)||0,t):m,$="trailing"in o?!!o.trailing:$),l.cancel=function(){void 0!==v&&clearTimeout(v),y=0,f=h=p=v=void 0},l.flush=function(){return void 0===v?b:d(k())},l}function n(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function r(e){return"symbol"==(void 0===e?"undefined":i(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":i(e))}(e)&&y.call(e)==u}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var o=f.test(e);return o||p.test(e)?m(e.slice(2),o?2:8):l.test(e)?s:+e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,u="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,p=/^0o[0-7]+$/i,m=parseInt,b="object"==(void 0===t?"undefined":i(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,h=b||v||Function("return this")(),y=Object.prototype.toString,g=Math.max,w=Math.min,k=function(){return h.Date.now()};e.exports=function(e,t,r){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError(c);return n(r)&&(a="leading"in r?!!r.leading:a,i="trailing"in r?!!r.trailing:i),o(e,t,{leading:a,maxWait:t,trailing:i})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function o(e){var t=void 0===e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}function n(e){return"symbol"==(void 0===e?"undefined":a(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":a(e))}(e)&&h.call(e)==s}function r(e){if("number"==typeof e)return e;if(n(e))return c;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var r=l.test(e);return r||f.test(e)?p(e.slice(2),r?2:8):d.test(e)?c:+e}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i="Expected a function",c=NaN,s="[object Symbol]",u=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,p=parseInt,m="object"==(void 0===t?"undefined":a(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,v=m||b||Function("return this")(),h=Object.prototype.toString,y=Math.max,g=Math.min,w=function(){return v.Date.now()};e.exports=function(e,t,n){function a(t){var o=f,n=p;return f=p=void 0,k=t,b=e.apply(n,o)}function c(e){return k=e,v=setTimeout(u,t),x?a(e):b}function s(e){var o=e-h;return void 0===h||o>=t||o<0||j&&e-k>=m}function u(){var e=w();return s(e)?d(e):void(v=setTimeout(u,function(e){var o=t-(e-h);return j?g(o,m-(e-k)):o}(e)))}function d(e){return v=void 0,$&&f?a(e):(f=p=void 0,b)}function l(){var e=w(),o=s(e);if(f=arguments,p=this,h=e,o){if(void 0===v)return c(h);if(j)return v=setTimeout(u,t),a(h)}return void 0===v&&(v=setTimeout(u,t)),b}var f,p,m,b,v,h,k=0,x=!1,j=!1,$=!0;if("function"!=typeof e)throw new TypeError(i);return t=r(t)||0,o(n)&&(x=!!n.leading,m=(j="maxWait"in n)?y(r(n.maxWait)||0,t):m,$="trailing"in n?!!n.trailing:$),l.cancel=function(){void 0!==v&&clearTimeout(v),k=0,f=h=p=v=void 0},l.flush=function(){return void 0===v?b:d(w())},l}}).call(t,function(){return this}())},function(e,t){"use strict";function o(e){var t=void 0,n=void 0;for(t=0;t<e.length;t+=1){if((n=e[t]).dataset&&n.dataset.aos)return!0;if(n.children&&o(n.children))return!0}return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function r(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(o(t.concat(n)))return a()})}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){};t.default={isSupported:function(){return!!n()},ready:function(e,t){var o=window.document,i=new(n())(r);a=t,i.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!i.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){var o=window.pageYOffset,n=window.innerHeight;e.forEach(function(e,r){!function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==n&&("false"===n||!o&&"true"!==n)&&e.node.classList.remove("aos-animate")}(e,n+o,t)})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(o(12));t.default=function(e,t){return e.forEach(function(e,o){e.node.classList.add("aos-init"),e.position=(0,n.default)(e.node,t.offset)}),e}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(o(13));t.default=function(e,t){var o=0,r=0,a=window.innerHeight,i={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(i.offset&&!isNaN(i.offset)&&(r=parseInt(i.offset)),i.anchor&&document.querySelectorAll(i.anchor)&&(e=document.querySelectorAll(i.anchor)[0]),o=(0,n.default)(e).top,i.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=a/2;break;case"bottom-center":o+=a/2+e.offsetHeight;break;case"center-center":o+=a/2+e.offsetHeight/2;break;case"top-top":o+=a;break;case"bottom-top":o+=e.offsetHeight+a;break;case"center-top":o+=e.offsetHeight/2+a}return i.anchorPlacement||i.offset||isNaN(t)||(r=t),o+r}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})}}])}),$(window).scroll(function(){var e=$(".sticky");$(window).scrollTop()>=147?e.addClass("fixed"):e.removeClass("fixed")});var headerHeight=$(".headerIntro").css({"padding-top":"0%",height:"100vh"}).outerHeight();$(".headerIntro").css({paddingTop:0,height:headerHeight}),$(window).scroll(function(e){$(".headerIntro h4").css("opacity",1-$(window).scrollTop()/180),$(".headerIntro h1").css("opacity",1-$(window).scrollTop()/290),$(".headerIntro p").css("opacity",1-$(window).scrollTop()/450),$(".headerIntro .js-to-Scroll").css("opacity",1-$(window).scrollTop()/550);var t=$(this).scrollTop(),o=1-Math.min(t/100,2);$(".headerIntro .header__title__img__wrapper").css({transform:"translate(0px, -"+t/1+"%)",opacity:o}),headerFade2=$(".headerIntro h4"),headerFade1=$(".headerIntro h1"),headerFadep=$(".headerIntro p"),headerFadesvg=$(".headerIntro .js-to-Scroll"),headerFade2.css({transform:"translate(0px, -"+t/2.3+"%)"}),headerFade1.css({transform:"translate(0px, -"+t/4.3+"%)"}),headerFadep.css({transform:"translate(0px, -"+t/2.8+"%)"}),headerFadesvg.css({transform:"translate(0px, -"+t/1.5+"%)"});var n="rgba(0, 0, 0, "+(.2+Math.min(t/950,1))+")";$(".header__overlay").css({backgroundColor:n})}),$(document).ready(function(){$(".headerIntro h4").delay(1400).animate({top:"0px",opacity:"1"},600),$(".headerIntro h1").delay(1400).animate({top:"0px",opacity:"1"},600),$(".headerIntro .header__title__paragraph").delay(1400).animate({top:"0px",opacity:"1"},600),$(".headerIntro .js-to-Scroll").delay(1200).animate({opacity:"1"},600),$(".headerIntro").addClass("scaling"),$("html,body").delay(100).fadeIn("slow",function(){$(".headerIntro").css("transform","matrix(1, 0, 0, 1, 0, 0)").fadeIn(500)})}),$(".scroll__icon").on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:$(this.hash).offset().top},200)});