(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/about"],{"420a":function(t,n,e){"use strict";var a=e("a9b2"),u=e.n(a);u.a},4993:function(t,n,e){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{message:{date:"",color:"",fan:"",like:""}}},onLoad:function(){this.begin1()},methods:{begin1:function(){var n=this;try{var a=t.getStorageSync("_id");a&&console.log(a),e.callFunction({name:"getu",data:{_id:a}}).then((function(t){n.message=t.result.data["0"].message}))}catch(u){}},jump:function(){t.redirectTo({url:"/pages/index/abouts"})}}};n.default=a}).call(this,e("543d")["default"],e("a9ff")["default"])},"6f4c":function(t,n,e){"use strict";(function(t){e("ad33");a(e("66fd"));var n=a(e("b3bf"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"81cd":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return a}));var u=function(){var t=this,n=t.$createElement;t._self._c},c=[]},"838e":function(t,n,e){"use strict";e.r(n);var a=e("4993"),u=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);n["default"]=u.a},a9b2:function(t,n,e){},b3bf:function(t,n,e){"use strict";e.r(n);var a=e("81cd"),u=e("838e");for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);e("420a");var o,r=e("f0c5"),i=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"3984e440",null,!1,a["a"],o);n["default"]=i.exports}},[["6f4c","common/runtime","common/vendor"]]]);