(function(e){function t(t){for(var o,i,s=t[0],d=t[1],c=t[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var d=n[s];0!==a[d]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/JS30WithVue-01_DrumKit/sounds/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("3ebb"),a=n.n(o);a.a},"3ebb":function(e,t,n){var o=n("e31a");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=n("499e").default;a("517436b3",o,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"keys"},e._l(e.items,(function(t){return n("div",{key:t.keycode,staticClass:"key",attrs:{"data-key":t.keycode},on:{transitionend:function(n){return e.removePlaying(n,t)}}},[n("kbd",[e._v(e._s(t.alphabet))]),n("span",{staticClass:"sound"},[e._v(e._s(t.mode))]),n("audio",{attrs:{src:t.audio,"data-key":t.keycode}})])})),0)])},r=[],i={name:"App",data:function(){return{items:[{keycode:"65",alphabet:"a",mode:"clap",isPlaying:!1,audio:"../sounds/clap.wav"},{keycode:"83",alphabet:"s",mode:"hihat",isPlaying:!1,audio:"../sounds/hihat.wav"},{keycode:"68",alphabet:"d",mode:"kick",isPlaying:!1,audio:"../sounds/kick.wav"},{keycode:"70",alphabet:"f",mode:"openhat",isPlaying:!1,audio:"../sounds/openhat.wav"},{keycode:"71",alphabet:"g",mode:"boom",isPlaying:!1,audio:"../sounds/boom.wav"},{keycode:"72",alphabet:"h",mode:"ride",isPlaying:!1,audio:"../sounds/ride.wav"},{keycode:"74",alphabet:"j",mode:"snare",isPlaying:!1,audio:"../sounds/snare.wav"},{keycode:"75",alphabet:"k",mode:"tom",isPlaying:!1,audio:"../sounds/tom.wav"},{keycode:"76",alphabet:"l",mode:"tink",isPlaying:!1,audio:"../sounds/tink.wav"}]}},methods:{addSound:function(e){var t=document.querySelector('audio[data-key="'.concat(e.keyCode,'"]')),n=document.querySelector('.key[data-key="'.concat(e.keyCode,'"]'));t&&(t.currentTime=0,t.play(),n.classList.add("playing"))},removePlaying:function(e){"transform"===e.propertyName&&e.target.classList.remove("playing")},add:function(){this.counter++;var e=new Audio("tom.mp3");e.play()}},mounted:function(){window.addEventListener("keydown",this.addSound)}},s=i,d=(n("034f"),n("2877")),c=Object(d["a"])(s,a,r,!1,null,null,null),l=c.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(l)}}).$mount("#app")},e31a:function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,"html{font-size:10px;background:url(https://i.imgur.com/b9r5sEL.jpg) bottom;background-size:cover}body,html{margin:0;padding:0;font-family:sans-serif}.keys{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;min-height:100vh;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.key{border:.4rem solid #000;border-radius:.5rem;margin:1rem;font-size:1.5rem;padding:1rem .5rem;width:10rem;text-align:center;-webkit-transition:all .07s ease;transition:all .07s ease;background:rgba(0,0,0,.4);text-shadow:0 0 .5rem #000;color:#fff}kbd{display:block;font-size:4rem}kbd,span{text-transform:uppercase}span{font-size:1.2rem;color:#ffc600;letter-spacing:.1rem}.playing{border-color:#ffc600;-webkit-box-shadow:0 0 1rem #ffc600;box-shadow:0 0 1rem #ffc600;-webkit-transform:scale(1.1);transform:scale(1.1)}",""]),e.exports=t}});
//# sourceMappingURL=app.55a61c4e.js.map