(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-good_detail-good_detail"],{"16e8":function(t,e,n){t.exports=n.p+"static/fonts/uni.75745d34.ttf"},"1c40":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={uniGoodsNav:n("bd49").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"gooddetail"},[n("v-uni-swiper",{attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3}},t._l(t.swiper,(function(t,e){return n("v-uni-swiper-item",{key:e},[n("v-uni-image",{attrs:{src:t.src,mode:""}})],1)})),1),t._l(t.info,(function(e,r){return n("v-uni-view",{staticClass:"info"},[n("v-uni-view",{staticClass:"price"},[n("v-uni-text",[t._v("$"+t._s(e.sell_price))]),n("v-uni-text",[t._v("$"+t._s(e.market_price))])],1),n("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))])],1)})),n("v-uni-view",{staticClass:"line"}),t._l(t.info,(function(e,r){return n("v-uni-view",{staticClass:"info2"},[n("v-uni-view",[t._v("货号:"+t._s(e.goods_no))]),n("v-uni-view",[t._v("库存:"+t._s(e.stock_quantity))])],1)})),n("v-uni-view",{staticClass:"line"}),n("v-uni-text",{staticClass:"text1"},[t._v("详细信息")]),n("v-uni-view",{staticClass:"line2"}),t._l(t.desc,(function(t,e){return n("v-uni-view",{staticClass:"desc"},[n("v-uni-rich-text",{attrs:{nodes:t.content}})],1)})),n("v-uni-view",{staticClass:"goodnav"},[n("uni-goods-nav",{attrs:{fill:!0,options:t.options,buttonGroup:t.buttonGroup},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)},buttonClick:function(e){arguments[0]=e=t.$handleEvent(e),t.buttonClick.apply(void 0,arguments)}}})],1)],2)},o=[]},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,i,o,a){try{var c=t[o](a),l=c.value}catch(u){return void n(u)}c.done?e(l):Promise.resolve(l).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function c(t){r(a,i,o,c,l,"next",t)}function l(t){r(a,i,o,c,l,"throw",t)}c(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},2469:function(t,e,n){"use strict";var r=n("4621"),i=n.n(r);i.a},"24c9":function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("1da1")),o=r(n("bd49")),a={components:{uniGoodsNav:o.default},data:function(){return{id:0,swiper:[],info:[],desc:[],options:[{icon:"../../static/icon/kefu.png",text:"客服"},{icon:"../../static/icon/dianpu.png",text:"店铺",info:1,infoBackgroundColor:"#ff0000",infoColor:"#fff"},{icon:"../../static/icon/carts.png",text:"购物车",info:2}],buttonGroup:[{text:"加入购物车",backgroundColor:"#ff0000",color:"#fff"},{text:"立即购买",backgroundColor:"#ffa200",color:"#fff"}]}},methods:{onClick:function(t){uni.showToast({title:"点击".concat(t.content.text),icon:"none"})},buttonClick:function(t){console.log(t),alert("所选商品id为:"+this.id),this.options[2].info++},getgoodsdetail:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRuquest({url:"/api/goods/getdesc/"+t.id});case 2:n=e.sent,t.desc=n.data.message;case 4:case"end":return e.stop()}}),e)})))()},getswiper:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRuquest({url:"/api/getthumimages/"+t.id});case 2:n=e.sent,t.swiper=n.data.message;case 4:case"end":return e.stop()}}),e)})))()},getinfo:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRuquest({url:"/api/goods/getinfo/"+t.id});case 2:n=e.sent,t.info=n.data.message;case 4:case"end":return e.stop()}}),e)})))()}},onLoad:function(t){this.id=t.id,this.getgoodsdetail(),this.getswiper(),this.getinfo(),console.log(this.desc)}};e.default=a},"2cca":function(t,e,n){"use strict";n.r(e);var r=n("1c40"),i=n("cabe");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("70b2");var a,c=n("f0c5"),l=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"d86907bc",null,!1,r["a"],a);e["default"]=l.exports},4621:function(t,e,n){var r=n("f0c6");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("3216a9f3",r,!0,{sourceMap:!1,shadowMode:!1})},"4db6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"UniGoodsNav",props:{options:{type:Array,default:function(){return[{icon:"shop",text:"店铺"},{icon:"cart",text:"购物车"}]}},buttonGroup:{type:Array,default:function(){return[{text:"加入购物车",backgroundColor:"#ffa200",color:"#fff"},{text:"立即购买",backgroundColor:"#ff0000",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(t,e){this.$emit("click",{index:t,content:e})},buttonClick:function(t,e){uni.report&&uni.report(e.text,e.text),this.$emit("buttonClick",{index:t,content:e})}}};e.default=r},"5ae0":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={uniIcons:n("bbbb").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-goods-nav"},[n("v-uni-view",{staticClass:"uni-tab__seat"}),n("v-uni-view",{staticClass:"uni-tab__cart-box flex"},[n("v-uni-view",{staticClass:"flex uni-tab__cart-sub-left"},t._l(t.options,(function(e,r){return n("v-uni-view",{key:r,staticClass:"flex uni-tab__cart-button-left uni-tab__shop-cart",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick(r,e)}}},[n("v-uni-view",{staticClass:"uni-tab__icon"},[n("uni-icons",{attrs:{type:e.icon,size:"20",color:"#646566"}})],1),n("v-uni-text",{staticClass:"uni-tab__text"},[t._v(t._s(e.text))]),n("v-uni-view",{staticClass:"flex uni-tab__dot-box"},[e.info?n("v-uni-text",{staticClass:"uni-tab__dot ",class:{"uni-tab__dots":e.info>9},style:{backgroundColor:e.infoBackgroundColor?e.infoBackgroundColor:"#ff0000",color:e.infoColor?e.infoColor:"#fff"}},[t._v(t._s(e.info))]):t._e()],1)],1)})),1),n("v-uni-view",{staticClass:"flex uni-tab__cart-sub-right ",class:{"uni-tab__right":t.fill}},t._l(t.buttonGroup,(function(e,r){return n("v-uni-view",{key:r,staticClass:"flex uni-tab__cart-button-right",style:{backgroundColor:e.backgroundColor,color:e.color},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.buttonClick(r,e)}}},[n("v-uni-text",{staticClass:"uni-tab__cart-button-right-text",style:{color:e.color}},[t._v(t._s(e.text))])],1)})),1)],1)],1)},o=[]},"60ce":function(t,e,n){var r=n("9103");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("2ebf1db4",r,!0,{sourceMap:!1,shadowMode:!1})},"614d":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-text",{staticClass:"uni-icons",class:[t.customIcons,t.customIcons?t.type:""],style:{color:t.color,"font-size":t.size+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._v(t._s(t.icons[t.type]))])},o=[]},"63c5":function(t,e,n){"use strict";var r=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("774e")),o={name:"UniIcons",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:i.default}},methods:{_onClick:function(){this.$emit("click")}}};e.default=o},"6d24":function(t,e,n){"use strict";n.r(e);var r=n("63c5"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"70b2":function(t,e,n){"use strict";var r=n("c6ba"),i=n.n(r);i.a},"774e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};e.default=r},9103:function(t,e,n){var r=n("24fb"),i=n("1de5"),o=n("16e8");e=r(!1);var a=i(o);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@font-face{font-family:uniicons;src:url('+a+') format("truetype")}.uni-icons[data-v-4b3e2b55]{font-family:uniicons;text-decoration:none;text-align:center}',""]),t.exports=e},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",u="object"===typeof t,s=e.regeneratorRuntime;if(s)u&&(t.exports=s);else{s=e.regeneratorRuntime=u?t.exports:{},s.wrap=m;var f="suspendedStart",d="suspendedYield",p="executing",b="completed",h={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,x=g&&g(g(P([])));x&&x!==r&&i.call(x,a)&&(v=x);var w=C.prototype=_.prototype=Object.create(v);k.prototype=w.constructor=C,C.constructor=k,C[l]=k.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(w),t},s.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[c]=function(){return this},s.AsyncIterator=L,s.async=function(t,e,n,r){var i=new L(m(t,e,n,r));return s.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(w),w[l]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},s.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},s.values=P,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return c.type="throw",c.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),$(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;$(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),h}}}function m(t,e,n,r){var i=e&&e.prototype instanceof _?e:_,o=Object.create(i.prototype),a=new z(r||[]);return o._invoke=j(t,n,a),o}function y(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function _(){}function k(){}function C(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){function e(n,r,o,a){var c=y(t[n],t,r);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(u).then((function(t){l.value=t,o(l)}),(function(t){return e("throw",t,o,a)}))}a(c.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function j(t,e,n){var r=f;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===b){if("throw"===i)throw o;return R()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=b,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var l=y(t,e,n);if("normal"===l.type){if(r=n.done?b:d,l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=b,n.method="throw",n.arg=l.arg)}}}function O(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var i=y(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function G(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:R}}function R(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},bbbb:function(t,e,n){"use strict";n.r(e);var r=n("614d"),i=n("6d24");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("d4b5");var a,c=n("f0c5"),l=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"4b3e2b55",null,!1,r["a"],a);e["default"]=l.exports},bd49:function(t,e,n){"use strict";n.r(e);var r=n("5ae0"),i=n("fc36");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("2469");var a,c=n("f0c5"),l=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"05b2cb78",null,!1,r["a"],a);e["default"]=l.exports},c6ba:function(t,e,n){var r=n("f754");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("471f981c",r,!0,{sourceMap:!1,shadowMode:!1})},cabe:function(t,e,n){"use strict";n.r(e);var r=n("24c9"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},d4b5:function(t,e,n){"use strict";var r=n("60ce"),i=n.n(r);i.a},f0c6:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.flex[data-v-05b2cb78]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-goods-nav[data-v-05b2cb78]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-tab__cart-box[data-v-05b2cb78]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:50px;background-color:#fff;z-index:900}.uni-tab__cart-sub-left[data-v-05b2cb78]{padding:0 5px}.uni-tab__cart-sub-right[data-v-05b2cb78]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-tab__right[data-v-05b2cb78]{margin:5px 0;margin-right:10px;border-radius:100px;overflow:hidden}.uni-tab__cart-button-left[data-v-05b2cb78]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:0 10px;cursor:pointer}.uni-tab__icon[data-v-05b2cb78]{width:18px;height:18px}.image[data-v-05b2cb78]{width:18px;height:18px}.uni-tab__text[data-v-05b2cb78]{margin-top:3px;font-size:%?24?%;color:#646566}.uni-tab__cart-button-right[data-v-05b2cb78]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;cursor:pointer}.uni-tab__cart-button-right-text[data-v-05b2cb78]{font-size:%?28?%;color:#fff}.uni-tab__cart-button-right[data-v-05b2cb78]:active{opacity:.7}.uni-tab__dot-box[data-v-05b2cb78]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:absolute;right:-2px;top:2px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-tab__dot[data-v-05b2cb78]{padding:0 4px;line-height:15px;color:#fff;text-align:center;font-size:12px;background-color:red;border-radius:15px}.uni-tab__dots[data-v-05b2cb78]{padding:0 4px;border-radius:15px}.uni-tab__color-y[data-v-05b2cb78]{background-color:#ffa200}.uni-tab__color-r[data-v-05b2cb78]{background-color:red}',""]),t.exports=e},f754:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.goodnav[data-v-d86907bc]{position:fixed;bottom:0;width:100%}.text1[data-v-d86907bc]{font-size:%?36?%;padding-left:%?30?%}.line[data-v-d86907bc]{width:%?750?%;background-color:#eee;height:%?8?%;margin:%?15?% auto}.line2[data-v-d86907bc]{width:%?750?%;background-color:#eee;height:%?4?%;margin:%?15?% auto}.gooddetail uni-swiper[data-v-d86907bc]{height:%?500?%;background-color:#fff}.gooddetail uni-swiper uni-image[data-v-d86907bc]{height:100%;width:100%}.gooddetail .info[data-v-d86907bc]{background-color:#fff;padding-left:%?30?%}.gooddetail .info .price uni-text[data-v-d86907bc]{font-size:%?40?%;color:#e50e02}.gooddetail .info .price uni-text[data-v-d86907bc]:nth-child(2){font-size:%?36?%;margin-left:%?50?%;color:#d1d1d1;text-decoration:line-through}.gooddetail .info2[data-v-d86907bc]{padding-left:%?30?%}.gooddetail .desc[data-v-d86907bc]{padding-left:%?30?%}.gooddetail .desc uni-text[data-v-d86907bc]{font-size:%?36?%}.gooddetail .desc uni-rich-text[data-v-d86907bc]{line-height:%?50?%;padding-bottom:%?50?%}.gooddetail .desc .gomeImgLoad[data-v-d86907bc]{width:%?750?%;height:auto}',""]),t.exports=e},fc36:function(t,e,n){"use strict";n.r(e);var r=n("4db6"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a}}]);