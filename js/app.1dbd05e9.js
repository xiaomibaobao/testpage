(function(t){function e(e){for(var a,s,l=e[0],r=e[1],d=e[2],g=0,u=[];g<l.length;g++)s=l[g],n[s]&&u.push(n[s][0]),n[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);c&&c(e);while(u.length)u.shift()();return o.push.apply(o,d||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,l=1;l<i.length;l++){var r=i[l];0!==n[r]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},n={app:0},o=[];function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/testpage/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var c=r;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"029e":function(t,e,i){},4386:function(t,e){var i=document.getElementsByTagName("audio"),a={};console.log(1111,i);for(var n=0;n<i.length;n++)a[i[n].className]=i[n];function o(){var t=document.createElement("video");return t.play(),t.paused}function s(){for(var t=0;t<i.length;t++)i[t].load();window.removeEventListener("keydown",s),window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",s)}function l(t){var e=document.getElementsByTagName("audio"),i={};console.log(1111,e);for(var a=0;a<e.length;a++)i[e[a].className]=e[a];for(var n in i)i[n].pause();console.log(i),i[t].load(),i[t].play()}o()&&(window.addEventListener("keydown",s),window.addEventListener("mousedown",s),window.addEventListener("touchstart",s)),t.exports={playSound:l}},"43d5":function(t,e,i){t.exports=i.p+"media/audio-1.2ae3d65f.mp3"},"443e":function(t,e,i){},"46c4":function(t,e,i){t.exports=i.p+"img/yushan.7d8e4289.png"},"4da2":function(t,e,i){t.exports=i.p+"media/chanming.a396efa9.mp3"},"4f9d":function(t,e,i){"use strict";var a=i("abe6"),n=i.n(a);n.a},"50b9":function(t,e,i){},"52a2":function(t,e,i){t.exports=i.p+"img/bx.5726924f.png"},5661:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),n=(i("5661"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("agile",{ref:"carousel",staticClass:"my-swipe",attrs:{"nav-buttons":!1,"initial-slide":t.initialSlide,"center-mode":!0,fade:!0,infinite:!1,speed:t.speed,timing:t.timing[3],"mobile-first":!0,"pause-on-hover":!1,unagile:t.unagile},on:{afterChange:t.afterChange,beforeChange:t.beforeChange}},[a("div",{staticClass:"slide slide1 bg bg1 btn-container"},[a("div",{staticClass:"btn-wrapper"},[a("div",{staticClass:"btn"}),a("div",{staticClass:"btn first-right right animated fadeInLeft infinite"},[a("img",{attrs:{src:i("c917"),alt:""}})])])]),a("div",{staticClass:"slide slide2 bg bg2  btn-container"},[a("div",{staticClass:"btn-wrapper"},[a("div",{staticClass:"btn"}),a("div",{staticClass:"btn first-right right animated fadeInLeft infinite"},[a("img",{attrs:{src:i("c917"),alt:""}})])]),0==t.currentSlide?a("audio",{staticClass:"music0",attrs:{id:"audio-1"}},[a("source",{attrs:{src:i("4da2")}})]):t._e()]),a("div",{staticClass:"slide slide3 bg bg3"}),a("div",{staticClass:"slide slide4 bg bg4"},[3===t.currentSlide?a("dialog4",{attrs:{dialogCurrent:t.dialogCurrent},on:{"move-next":t.moveNext}}):t._e()],1),a("div",{staticClass:"slide slide5 bg bg5 btn-container"},[a("div",{staticClass:"btn-wrapper"},[a("div",{staticClass:"btn"}),a("div",{staticClass:"btn right"})])]),a("div",{staticClass:"slide slide6 bg bg6 btn-container"},[a("div",{staticClass:"btn-wrapper"},[a("div",{staticClass:"btn left"}),a("div",{staticClass:"btn right"})])]),a("div",{staticClass:"slide slide7 bg bg7 btn-container"},[a("div",{staticClass:"btn-wrapper"},[a("div",{staticClass:"btn left"}),a("div",{staticClass:"btn right"})])]),a("div",{staticClass:"slide slide8 bg bg8 btn-container"},[a("div",{staticClass:"btn-wrapper"},[a("div",{staticClass:"btn left"}),a("div",{staticClass:"btn"})])]),a("div",{staticClass:"slide slide9 slide20 bg bg20"},[8===t.currentSlide?a("dialog20",{attrs:{dialogCurrent:t.dialogCurrent},on:{"move-next":t.moveNext}}):t._e()],1),a("div",{staticClass:"slide slide10 bg bg9 btn-container"},[a("div",{staticClass:"btn-wrapper"},[a("div",{staticClass:"btn"}),a("div",{staticClass:"btn right"})])]),a("div",{staticClass:"slide slide11 bg bg10 btn-container"},[a("div",{staticClass:"btn-wrapper"},[a("div",{staticClass:"btn left"}),a("div",{staticClass:"btn"})])]),a("div",{staticClass:"slide slide12 bg bg11"},[11==t.currentSlide?a("div",[a("audio",{staticClass:"music11",attrs:{id:"audio-1"}},[a("source",{attrs:{src:i("43d5")}})])]):t._e()]),a("div",{staticClass:"slide slide13 bg bg12"},[12===t.currentSlide?a("dialog12",{attrs:{dialogCurrent:t.dialogCurrent},on:{"move-next":t.moveNext}}):t._e()],1),a("div",{staticClass:"slide slide14 bg bg13"},[13===t.currentSlide?a("img",{staticClass:"bz animated daiyuFly",attrs:{src:i("cb94")}}):t._e(),13===t.currentSlide?a("img",{staticClass:"bx animated zoomIn",attrs:{src:i("52a2")}}):t._e()]),a("div",{staticClass:"slide slide15 bg bg14"}),a("div",{staticClass:"slide slide16 bg bg21"},[15===t.currentSlide?a("dialog21",{attrs:{dialogCurrent:t.dialogCurrent},on:{"move-next":t.moveNext}}):t._e(),15==t.currentSlide?a("div",[a("audio",{staticClass:"music15",attrs:{id:"audio-1"}},[a("source",{attrs:{src:i("8e7f")}})])]):t._e()],1),a("div",{staticClass:"slide slide17 bg bg15"}),a("div",{staticClass:"slide slide18 bg bg16"},[17===t.currentSlide?a("dialog22",{attrs:{dialogCurrent:t.dialogCurrent},on:{"move-next":t.moveNext}}):t._e()],1),a("div",{staticClass:"slide slide19 bg bg17"},[a("div",{staticClass:"smoke animated fadeInUp"},[a("img",{attrs:{src:i("91ca")}})]),a("div",{staticClass:"shuang"},[a("img",{attrs:{src:i("e483")}})]),a("div",{staticClass:"content"},[t._v("等不及了！快来大观园，体验爆一夏，爽一夏！")])])])],1)}),o=[],s=(i("ac6a"),i("6762"),i("2fdb"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dialog dialog-4 dialog-dom"},[i("div",{ref:"dialog4",staticClass:"dialogs",on:{touchstart:t.moveNext}},[t._l(t.dialogs.dialog4,function(e,a){return[t.dialogCurrent===a&&"dialog"===e.type?i("div",{key:a,staticClass:"animated fadeIn",class:e.class+" dialog"+(a+1)},[i("span",[t._v(t._s(e.content))])]):t.dialogCurrent===a&&"action"===e.type?i("div",{key:a,class:e.class+" dialog"+(a+1)},[t._m(0,!0)]):t._e()]})],2)])}),l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"animated shanzi"},[a("img",{attrs:{src:i("46c4"),alt:""}})])}],r=[{class:"dialogItem bottom-left",type:"dialog",content:"“今年这光景，比往年真真是更热了！”"},{class:"dialogItem  dialogItem-small bottom-left",type:"dialog",content:"“宝二爷莫慌，您看我手里拿的是什么？”"},{type:"action",class:"dialogItem  dialogItem-small bottom-right"},{type:"action"}],d=[{class:"dialogItem bottom-right",type:"dialog",content:"“宝哥哥，看看我准备的避暑“黑科技”吧，夏天跟冰块最配了！”"}],c=[{class:"dialogItem bottom-right",type:"dialog",content:"“姑娘们，前不久西域进贡了一奇物，名为爆珠，据说可以驱热解暑”"},{class:"dialogItem dialogItem-small bottom-left",type:"dialog",content:"“当真？”"}],g=[{class:"dialogItem dialogItem-small bottom-left",type:"dialog",content:"“好清凉！”"},{class:"dialogItem bottom-left",type:"dialog",content:"“好冰爽~”"},{class:"dialogItem dialogItem-small bottom-left",type:"dialog",content:"“好high哟~~”"},{class:"dialogItem dialogItem-small bottom-left",type:"dialog",content:"“感觉人生到达了人生巅峰”"}],u=[{class:"dialogItem bottom-left",type:"dialog",content:"“乾币是什么？”"},{class:"dialogItem dialogItem-small top_right",type:"dialog",content:"“宝哥哥，你out啦！关注公众号“钟山烟语”点击乾币商城，你就会发现家电数码、箱包饰品、食品饮料等等应有尽有！这些连贾府都没有的好物统统只有用乾币才能买到！”"},{class:"dialogItem dialogItem-small bottom-left",type:"dialog",content:"“别拦我，我要赶紧去扫！”"},{class:"dialogItem dialogItem-small top_right",type:"dialog",content:"“宝哥哥，别急啊~在活动期间，每月扫满4次还有更大的神秘奖励呢！同时，7月-9月，注册零售商推荐用户购买大观园爆冰反馈翻倍！”"}],m={dialog4:r,dialog20:d,dialog21:g,dialog12:c,dialog22:u},f={name:"HelloWorld",props:["dialogCurrent"],data:function(){return{dialogs:m}},watch:{dialogCurrent:function(t){var e=this;console.log("dialogCurrentWatch",t,m.dialog4.length),t>m.dialog4.length-2&&this.$emit("move-next"),t>m.dialog4.length-3&&setTimeout(function(){e.$emit("move-next")},2e3)}},methods:{moveNext:function(t){t.preventDefault(),console.log("moveNext"),this.$emit("move-next")}}},v=f,p=(i("ab1e"),i("2877")),b=Object(p["a"])(v,s,l,!1,null,"007e2ef1",null),C=b.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dialog dialog5"},[i("div",{ref:"dialog5",staticClass:"dialogs",nativeOn:{click:function(e){return t.moveNext(e)}}},[t._l(t.dialogs.dialog5,function(e,a){return[t.dialogCurrent===a&&"dialog"===e.type?i("div",{key:a,class:e.class+" dialog"+(a+1)},[i("span",[t._v(t._s(e.content))])]):t.dialogCurrent===a&&"action"===e.type?i("div",{key:a,class:e.class+" dialog"+(a+1)},[t._m(0,!0)]):t._e()]})],2)])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"animated infinite zoomIn"},[a("img",{attrs:{src:i("46c4"),alt:""}})])}],_={name:"HelloWorld",props:["dialogCurrent"],data:function(){return{dialogs:m}},watch:{dialogCurrent:function(t){t>m.dialog5.length-2&&this.$emit("move-next")}},methods:{moveNext:function(t){t.preventDefault(),console.log("moveNext"),this.$emit("move-next")}}},y=_,w=(i("bd4c"),Object(p["a"])(y,h,x,!1,null,"7985f230",null)),I=(w.exports,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dialog dialog12"},[i("div",{ref:"dialog12",staticClass:"dialogs",nativeOn:{click:function(e){return t.moveNext(e)}}},[t._l(t.dialogs.dialog12,function(e,a){return[t.dialogCurrent===a&&"dialog"===e.type?i("div",{key:a,staticClass:"animated fadeIn",class:e.class+" dialog"+(a+1)},[i("span",[t._v(t._s(e.content))])]):t.dialogCurrent===a&&"action"===e.type?i("div",{key:a,class:e.class+" dialog"+(a+1)},[t._m(0,!0)]):t._e()]})],2)])}),N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"animated infinite zoomIn"},[a("img",{attrs:{src:i("46c4"),alt:""}})])}],$={name:"HelloWorld",props:["dialogCurrent"],data:function(){return{dialogs:m}},watch:{dialogCurrent:function(t){t>m.dialog12.length-2&&this.$emit("move-next")}},methods:{moveNext:function(t){t.preventDefault(),console.log("moveNext"),this.$emit("move-next")}}},S=$,E=(i("c062"),Object(p["a"])(S,I,N,!1,null,"6d7561d9",null)),k=E.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dialog dialog20"},[i("div",{ref:"dialog20",staticClass:"dialogs",nativeOn:{click:function(e){return t.moveNext(e)}}},[t._l(t.dialogs.dialog20,function(e,a){return[t.dialogCurrent===a&&"dialog"===e.type?i("div",{key:a,staticClass:"animated fadeIn",class:e.class+" dialog"+(a+1)},[i("span",[t._v(t._s(e.content))])]):t.dialogCurrent===a&&"action"===e.type?i("div",{key:a,class:e.class+" dialog"+(a+1)},[t._m(0,!0)]):t._e()]})],2)])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"animated infinite zoomIn"},[a("img",{attrs:{src:i("46c4"),alt:""}})])}],L={name:"HelloWorld",props:["dialogCurrent"],data:function(){return{dialogs:m}},watch:{dialogCurrent:function(t){t>m.dialog20.length-2&&this.$emit("move-next")}},methods:{moveNext:function(t){t.preventDefault(),console.log("moveNext"),this.$emit("move-next")}}},P=L,T=(i("b050"),Object(p["a"])(P,O,j,!1,null,"630fe953",null)),W=T.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dialog dialog-21 dialog-dom"},[i("div",{ref:"dialog4",staticClass:"dialogs",nativeOn:{click:function(e){return t.moveNext(e)}}},[t._l(t.dialogs.dialog21,function(e,a){return[t.dialogCurrent===a&&"dialog"===e.type?i("div",{key:a,staticClass:"animated fadeIn",class:e.class+" dialog"+(a+1)},[i("span",[t._v(t._s(e.content))])]):t.dialogCurrent===a&&"action"===e.type?i("div",{key:a,class:e.class+" dialog"+(a+1)},[t._m(0,!0)]):t._e()]})],2)])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"animated infinite zoomIn"},[a("img",{attrs:{src:i("46c4"),alt:""}})])}],H={name:"HelloWorld",props:["dialogCurrent"],data:function(){return{dialogs:m}},watch:{dialogCurrent:function(t){console.log("dialogCurrentWatch",t,m.dialog21.length),t>m.dialog21.length-1&&this.$emit("move-next")}},methods:{moveNext:function(t){t.preventDefault(),console.log("moveNext"),this.$emit("move-next")}}},q=H,M=(i("ec1b"),Object(p["a"])(q,z,D,!1,null,"5e1362fa",null)),A=M.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dialog dialog-22 dialog-dom"},[i("div",{ref:"dialog4",staticClass:"dialogs",nativeOn:{click:function(e){return t.moveNext(e)}}},[t._l(t.dialogs.dialog22,function(e,a){return[t.dialogCurrent===a?i("div",{key:a,staticClass:"animated fadeIn",class:e.class+" dialog"+(a+1)},[i("span",[t._v(t._s(e.content))])]):t._e()]})],2)])},J=[],F={name:"HelloWorld",props:["dialogCurrent"],data:function(){return{dialogs:m}},watch:{dialogCurrent:function(t){console.log("dialogCurrentWatch",t,m.dialog22.length),t>m.dialog22.length-1&&this.$emit("move-next")}},methods:{moveNext:function(t){t.preventDefault(),console.log("moveNext"),this.$emit("move-next")}}},U=F,G=(i("8733"),Object(p["a"])(U,B,J,!1,null,"58dcddb4",null)),K=G.exports,Q={name:"app",components:{dialog4:C,dialog12:k,dialog20:W,dialog21:A,dialog22:K},data:function(){return{timing:["linear","ease","ease-in","ease-out","ease-in-out"],speed:1800,initialSlide:0,currentSlide:3,dialogCurrent:0,unagile:!1,bxShow:!0}},methods:{moveNext:function(){console.log("moveNext"),this.$refs.carousel.goToNext(),this.dialogCurrent=0,this.toggleCarousel(!1)},toggleCarousel:function(t){function e(t){return t.preventDefault(),t.stopPropagation(),!1}var i=document.body.querySelector(".dialog");t?i.addEventListener("touchmove",e):i.removeEventListener("touchmove",e)},afterChange:function(t){var e=this,a=t.currentSlide;console.log("afterChange",a),this.currentSlide=a,this.$nextTick(function(){if([3,15,17].includes(a)&&(document.body.querySelector(".dialog-dom").addEventListener("touchstart",function(t){t.preventDefault(),e.dialogCurrent++}),e.toggleCarousel(!0)),[0,11,15].includes(a)){var t=i("4386"),n="music"+a;console.log("music",n),t.playSound(n)}})},beforeChange:function(t){var e=t.currentSlide,i=t.nextSlide;console.log("beforeChange",e,i)}},mounted:function(){var t=this,e=document.body.querySelectorAll(".btn.right"),i=(e.length,document.body.querySelectorAll(".btn.left"));i.length;e.forEach(function(e){e.addEventListener("touchstart",function(e){console.log(e.target.dataset),e.stopPropagation(),t.$refs.carousel.goToNext()})}),i.forEach(function(e){e.addEventListener("touchstart",function(e){console.log(e.target.dataset),e.stopPropagation(),t.$refs.carousel.goToPrev()})})}},R=Q,V=(i("4f9d"),Object(p["a"])(R,n,o,!1,null,"92cda1d0",null)),X=V.exports,Y=i("f7ab");a["a"].use(Y["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(X)}}).$mount("#app")},8733:function(t,e,i){"use strict";var a=i("bab8"),n=i.n(a);n.a},"8e7f":function(t,e,i){t.exports=i.p+"media/audio-2.5e62c45a.mp3"},"91ca":function(t,e,i){t.exports=i.p+"img/smokelight@2x.253dda5e.png"},ab1e:function(t,e,i){"use strict";var a=i("443e"),n=i.n(a);n.a},abe6:function(t,e,i){},b050:function(t,e,i){"use strict";var a=i("029e"),n=i.n(a);n.a},bab8:function(t,e,i){},bb6c:function(t,e,i){},bd4c:function(t,e,i){"use strict";var a=i("bb6c"),n=i.n(a);n.a},c062:function(t,e,i){"use strict";var a=i("50b9"),n=i.n(a);n.a},c917:function(t,e,i){t.exports=i.p+"img/right.112a6f8f.svg"},cb94:function(t,e,i){t.exports=i.p+"img/bz.f0db99b4.png"},e483:function(t,e,i){t.exports=i.p+"img/shuang.2bb2b1eb.png"},ec1b:function(t,e,i){"use strict";var a=i("ed13"),n=i.n(a);n.a},ed13:function(t,e,i){}});
//# sourceMappingURL=app.1dbd05e9.js.map