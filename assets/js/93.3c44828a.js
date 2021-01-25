(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{440:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-js-2-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-2-api"}},[t._v("#")]),t._v(" Vue.js 2 API")]),t._v(" "),a("ul",[a("li",[t._v("@vue API 文档 en https://vuejs.org/v2/api")]),t._v(" "),a("li",[t._v("@vue API 文档 cn https://cn.vuejs.org/v2/api")]),t._v(" "),a("li",[t._v("@desc 以下内容为@veaba 根据自己的理解和参考文档整理")]),t._v(" "),a("li",[t._v("@疑问 为什么有了en 和cn api文档，我还这么抄一遍人家官方的大纲？")])]),t._v(" "),a("blockquote",[a("p",[t._v("答：里面会掺杂 我过去两年使用vue作为企业级开发框架的实践化经验，会以demo的形式加以解释，以便加深记忆。整理出来的原因是以为，本人记忆力日渐衰减，我必须以文本形式整理出来加以记忆，不然等于没学没做过项目一样，vue还是有很多我还没用过的地方，有些理解比较薄弱或者新增加的特性，还没实践到实际的企业项目开发中，毕竟还在学习中。如果有理解不对的地方，麻烦提issue，一起进步，一起学习")])]),t._v(" "),a("ul",[a("li",[t._v("@version vue v2 对应2019年2月15日 官方en版本")]),t._v(" "),a("li",[t._v("@TODO 后续如果内容比较多的话，可能会拆为子 仓库。")]),t._v(" "),a("li",[t._v("@TODO 翻写 一个vue框架！2020 Flag")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"从prototype角度-去看vue函数的结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从prototype角度-去看vue函数的结构"}},[t._v("#")]),t._v(" 从prototype角度 去看"),a("code",[t._v("vue函数")]),t._v("的结构")]),t._v(" "),a("blockquote",[a("p",[t._v("在用vue开发的网站上，在console 里输入 Vue.prototype 去看 这个vue 构造函数，vue.version 2.6.6")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/vue-prototype.png",alt:"vue-prototype"}})]),t._v(" "),a("ul",[a("li",[a("code",[t._v("$delete")]),t._v(": function del(target,key)")]),t._v(" "),a("li",[a("code",[t._v("$destroy")]),t._v(": funcion()")]),t._v(" "),a("li",[a("code",[t._v("$emit")]),t._v(": function(event)")]),t._v(" "),a("li",[a("code",[t._v("$forceUpdate")]),t._v(":function()")]),t._v(" "),a("li",[a("code",[t._v("$inspect")]),t._v(":function()")]),t._v(" "),a("li",[a("code",[t._v("$mount")]),t._v(":function(el,hydrating)")]),t._v(" "),a("li",[a("code",[t._v("$nextTick")]),t._v(":function(fn)")]),t._v(" "),a("li",[a("code",[t._v("$off")]),t._v(":function(event,fn)")]),t._v(" "),a("li",[a("code",[t._v("$on")]),t._v(":function(event,fn)")]),t._v(" "),a("li",[a("code",[t._v("$once")]),t._v(":function(event,fn)")]),t._v(" "),a("li",[a("code",[t._v("$set")]),t._v(":funtion(target,key,val)")]),t._v(" "),a("li",[a("code",[t._v("$watch")]),t._v(":function(expOrFn,cb,options)")]),t._v(" "),a("li",[a("code",[t._v("__patch__")]),t._v(":patch(oldVnode,vnode,hydrating,removeOnly)")]),t._v(" "),a("li",[a("code",[t._v("_b")]),t._v(":function bindObjectProps(data,tag,value,asProp, isSync)")]),t._v(" "),a("li",[a("code",[t._v("_d")]),t._v(":function bindDynamicKeys(baseObj,values)")]),t._v(" "),a("li",[a("code",[t._v("_e")]),t._v(":function (text)")]),t._v(" "),a("li",[a("code",[t._v("_f")]),t._v(":funtion resolveFilter(id)")]),t._v(" "),a("li",[a("code",[t._v("_g")]),t._v(":bindObjectListeners(data,value)")]),t._v(" "),a("li",[a("code",[t._v("_i")]),t._v(":function looseIndexOf(val,render)")]),t._v(" "),a("li",[a("code",[t._v("_init")]),t._v(":function options()")]),t._v(" "),a("li",[a("code",[t._v("_k")]),t._v(":checkKeyCodes(eventKeyCode,key,builtKeyCode,eventKeyName,builtKeyName)")]),t._v(" "),a("li",[a("code",[t._v("_l")]),t._v(":function renderList(val,render)")]),t._v(" "),a("li",[a("code",[t._v("_m")]),t._v(":function renderStatic(index,isInFor)")]),t._v(" "),a("li",[a("code",[t._v("_n")]),t._v(":function toNumber(val)")]),t._v(" "),a("li",[a("code",[t._v("_o")]),t._v(":function markOnce(tree,index,key)")]),t._v(" "),a("li",[a("code",[t._v("_p")]),t._v(":function prependModifier(value,symbol)")]),t._v(" "),a("li",[a("code",[t._v("_q")]),t._v(":function looseEqual(a,b)")]),t._v(" "),a("li",[a("code",[t._v("_render")]),t._v(":function()")]),t._v(" "),a("li",[a("code",[t._v("_s")]),t._v(":function toString(val)")]),t._v(" "),a("li",[a("code",[t._v("_t")]),t._v(":function renderSlot(name,fallback,props,bindObject)")]),t._v(" "),a("li",[a("code",[t._v("_u")]),t._v(":function resolveScopedSlots(fns,res)")]),t._v(" "),a("li",[a("code",[t._v("_update")]),t._v(":function (vnode,hydrating)")]),t._v(" "),a("li",[a("code",[t._v("_v")]),t._v(":createTextVNode(val)")]),t._v(" "),a("li",[a("code",[t._v("$data")]),t._v(":undefined")]),t._v(" "),a("li",[a("code",[t._v("$isServer")]),t._v(":false")]),t._v(" "),a("li",[a("code",[t._v("$props")]),t._v(":undefined")]),t._v(" "),a("li",[a("code",[t._v("$ssrContent")]),t._v(":undefined")])]),t._v(" "),a("h2",{attrs:{id:"从函数对象角度去看-vue-内部属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从函数对象角度去看-vue-内部属性"}},[t._v("#")]),t._v(" 从函数对象角度去看，"),a("code",[t._v("vue")]),t._v(" 内部属性")]),t._v(" "),a("blockquote",[a("p",[t._v("因为"),a("code",[t._v("Vue")]),t._v("实质上，就是一个函数对象，这时候，我们通过"),a("code",[t._v("Object.keys(Vue)")]),t._v("去打印出来它本身可枚举属性组成的数组，这和for... in 一样。"),a("code",[t._v("Object.keys(Vue)")]),t._v("只能打印属性，无法打印方法，如果是打印Vue的方法呢？")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("util")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("defineReactive")])]),t._v(" "),a("li",[a("code",[t._v("extend")])]),t._v(" "),a("li",[a("code",[t._v("mergeOptions")])]),t._v(" "),a("li",[a("code",[t._v("warn")])])])]),t._v(" "),a("li",[a("code",[t._v("set")]),t._v(": fn")]),t._v(" "),a("li",[a("code",[t._v("delete")]),t._v(": fn")]),t._v(" "),a("li",[a("code",[t._v("nextTick")]),t._v(": fn")]),t._v(" "),a("li",[a("code",[t._v("observable")]),t._v(": fn")]),t._v(" "),a("li",[a("code",[t._v("options")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("components")])]),t._v(" "),a("li",[a("code",[t._v("directives")])]),t._v(" "),a("li",[a("code",[t._v("filters")])]),t._v(" "),a("li",[a("code",[t._v("_base")])])])]),t._v(" "),a("li",[a("code",[t._v("use")]),t._v(": fn")]),t._v(" "),a("li",[a("code",[t._v("mixin")]),t._v(": fn")]),t._v(" "),a("li",[a("code",[t._v("cid")]),t._v(": 0")]),t._v(" "),a("li",[a("code",[t._v("extend")]),t._v(": fn")]),t._v(" "),a("li",[a("code",[t._v("component")]),t._v(": fn")]),t._v(" "),a("li",[a("code",[t._v("directive")]),t._v(": fn")]),t._v(" "),a("li",[a("code",[t._v("filter")]),t._v(": fn")]),t._v(" "),a("li",[a("code",[t._v("version")]),t._v(':"2.6.6"')]),t._v(" "),a("li",[a("code",[t._v("compile")]),t._v(": fn")])]),t._v(" "),a("h2",{attrs:{id:"基础概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[t._v("#")]),t._v(" 基础概念")]),t._v(" "),a("h2",{attrs:{id:"疑问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#疑问"}},[t._v("#")]),t._v(" 疑问")]),t._v(" "),a("ul",[a("li",[t._v("如果把vue 看做一种设计模式，那么 实例化  "),a("code",[t._v("const vue = new Vue()")]),t._v("这个过程中，vue 是什么设计模式 的呢？")])]),t._v(" "),a("blockquote",[a("p",[t._v("应该是构造函数+原型继承方法，组合继承/伪经典继承。")])]),t._v(" "),a("p",[t._v("这意味着，如果让你去写Vue，其实应该是这样写的[*待确认]：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delete"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("opitions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delete\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototyoe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello emit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("ul",[a("li",[a("p",[t._v("从main.js中看到。vue")])]),t._v(" "),a("li",[a("p",[t._v("[疑问]为什么在"),a("code",[t._v("vue.prototype")]),t._v(" 找不到"),a("code",[t._v("config")]),t._v("呢？")])])]),t._v(" "),a("h2",{attrs:{id:"重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重点"}},[t._v("#")]),t._v(" 重点")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"global-config-为什么有这个-vue函数里面找不到-或者说应该怎么找-如果不看文档情况下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-config-为什么有这个-vue函数里面找不到-或者说应该怎么找-如果不看文档情况下"}},[t._v("#")]),t._v(" Global config "),a("code",[t._v("为什么有这个，Vue函数里面找不到，或者说应该怎么找，如果不看文档情况下~")])]),t._v(" "),a("h3",{attrs:{id:"config-silent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-silent"}},[t._v("#")]),t._v(" "),a("code",[t._v("config.silent")])]),t._v(" "),a("h3",{attrs:{id:"config-optionmergestrategies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-optionmergestrategies"}},[t._v("#")]),t._v(" "),a("code",[t._v("config.optionMergeStrategies")])]),t._v(" "),a("h3",{attrs:{id:"config-devtools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-devtools"}},[t._v("#")]),t._v(" "),a("code",[t._v("config.devtools")])]),t._v(" "),a("h3",{attrs:{id:"config-errorhandler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-errorhandler"}},[t._v("#")]),t._v(" "),a("code",[t._v("config.errorHandler")])]),t._v(" "),a("h3",{attrs:{id:"config-warnhangdler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-warnhangdler"}},[t._v("#")]),t._v(" "),a("code",[t._v("config.warnHangdler")])]),t._v(" "),a("h3",{attrs:{id:"config-ignoreelements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-ignoreelements"}},[t._v("#")]),t._v(" "),a("code",[t._v("config.ignoreElements")])]),t._v(" "),a("h3",{attrs:{id:"config-keycodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-keycodes"}},[t._v("#")]),t._v(" "),a("code",[t._v("config.keyCodes")])]),t._v(" "),a("h3",{attrs:{id:"config-preformance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-preformance"}},[t._v("#")]),t._v(" "),a("code",[t._v("config.preformance")])]),t._v(" "),a("h3",{attrs:{id:"config-productiontip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-productiontip"}},[t._v("#")]),t._v(" "),a("code",[t._v("config.productionTip")])]),t._v(" "),a("h2",{attrs:{id:"global-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-api"}},[t._v("#")]),t._v(" Global API")]),t._v(" "),a("h3",{attrs:{id:"vue-extend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-extend"}},[t._v("#")]),t._v(" "),a("code",[t._v("Vue.extend")])]),t._v(" "),a("h3",{attrs:{id:"vue-nexttick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-nexttick"}},[t._v("#")]),t._v(" "),a("code",[t._v("Vue.nextTick")])]),t._v(" "),a("h3",{attrs:{id:"vue-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-set"}},[t._v("#")]),t._v(" "),a("code",[t._v("Vue.set")])]),t._v(" "),a("h3",{attrs:{id:"vue-delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-delete"}},[t._v("#")]),t._v(" "),a("code",[t._v("Vue.delete")])]),t._v(" "),a("h3",{attrs:{id:"vue-directive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-directive"}},[t._v("#")]),t._v(" "),a("code",[t._v("Vue.directive")])]),t._v(" "),a("h3",{attrs:{id:"vue-filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-filter"}},[t._v("#")]),t._v(" "),a("code",[t._v("Vue.filter")])]),t._v(" "),a("h3",{attrs:{id:"vue-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-component"}},[t._v("#")]),t._v(" "),a("code",[t._v("Vue.component")])]),t._v(" "),a("h3",{attrs:{id:"vue-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-use"}},[t._v("#")]),t._v(" "),a("code",[t._v("Vue.use")])]),t._v(" "),a("h3",{attrs:{id:"vue-mixin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-mixin"}},[t._v("#")]),t._v(" "),a("code",[t._v("Vue.mixin")])]),t._v(" "),a("h3",{attrs:{id:"vue-compile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-compile"}},[t._v("#")]),t._v(" "),a("code",[t._v("Vue.compile")])]),t._v(" "),a("h3",{attrs:{id:"vue-observable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-observable"}},[t._v("#")]),t._v(" "),a("code",[t._v("Vue.observable")])]),t._v(" "),a("h3",{attrs:{id:"vue-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-version"}},[t._v("#")]),t._v(" "),a("code",[t._v("Vue.version")])]),t._v(" "),a("h2",{attrs:{id:"options-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-data"}},[t._v("#")]),t._v(" Options/Data")]),t._v(" "),a("h3",{attrs:{id:"data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" "),a("code",[t._v("data")])]),t._v(" "),a("h3",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" "),a("code",[t._v("props")])]),t._v(" "),a("h3",{attrs:{id:"propsdata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#propsdata"}},[t._v("#")]),t._v(" "),a("code",[t._v("propsData")])]),t._v(" "),a("h3",{attrs:{id:"computed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed"}},[t._v("#")]),t._v(" "),a("code",[t._v("computed")])]),t._v(" "),a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" "),a("code",[t._v("methods")])]),t._v(" "),a("h3",{attrs:{id:"watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" "),a("code",[t._v("watch")])]),t._v(" "),a("h2",{attrs:{id:"options-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-dom"}},[t._v("#")]),t._v(" Options/DOM")]),t._v(" "),a("h3",{attrs:{id:"el"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#el"}},[t._v("#")]),t._v(" "),a("code",[t._v("el")])]),t._v(" "),a("h3",{attrs:{id:"template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template"}},[t._v("#")]),t._v(" "),a("code",[t._v("template")])]),t._v(" "),a("h3",{attrs:{id:"render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[t._v("#")]),t._v(" "),a("code",[t._v("render")])]),t._v(" "),a("h3",{attrs:{id:"rendererror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rendererror"}},[t._v("#")]),t._v(" "),a("code",[t._v("renderError")])]),t._v(" "),a("h2",{attrs:{id:"options-lifecycle-hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-lifecycle-hooks"}},[t._v("#")]),t._v(" Options/Lifecycle Hooks")]),t._v(" "),a("h3",{attrs:{id:"beforecreate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate"}},[t._v("#")]),t._v(" beforeCreate")]),t._v(" "),a("h3",{attrs:{id:"created"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#created"}},[t._v("#")]),t._v(" created")]),t._v(" "),a("h3",{attrs:{id:"beforemount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforemount"}},[t._v("#")]),t._v(" beforeMount")]),t._v(" "),a("h3",{attrs:{id:"mounted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mounted"}},[t._v("#")]),t._v(" mounted")]),t._v(" "),a("h3",{attrs:{id:"beforeupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforeupdate"}},[t._v("#")]),t._v(" beforeUpdate")]),t._v(" "),a("h3",{attrs:{id:"updated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updated"}},[t._v("#")]),t._v(" updated")]),t._v(" "),a("h3",{attrs:{id:"activated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activated"}},[t._v("#")]),t._v(" activated")]),t._v(" "),a("h3",{attrs:{id:"deactivated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deactivated"}},[t._v("#")]),t._v(" deactivated")]),t._v(" "),a("h3",{attrs:{id:"beforedestroy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforedestroy"}},[t._v("#")]),t._v(" beforeDestroy")]),t._v(" "),a("h3",{attrs:{id:"destroyed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destroyed"}},[t._v("#")]),t._v(" destroyed")]),t._v(" "),a("h3",{attrs:{id:"errorcaptured"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errorcaptured"}},[t._v("#")]),t._v(" errorCaptured")]),t._v(" "),a("h2",{attrs:{id:"options-assets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-assets"}},[t._v("#")]),t._v(" Options/Assets")]),t._v(" "),a("h3",{attrs:{id:"directives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directives"}},[t._v("#")]),t._v(" directives")]),t._v(" "),a("h3",{attrs:{id:"filters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filters"}},[t._v("#")]),t._v(" filters")]),t._v(" "),a("h3",{attrs:{id:"components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[t._v("#")]),t._v(" components")]),t._v(" "),a("h2",{attrs:{id:"options-composition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-composition"}},[t._v("#")]),t._v(" Options/Composition")]),t._v(" "),a("h3",{attrs:{id:"parent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parent"}},[t._v("#")]),t._v(" parent")]),t._v(" "),a("h3",{attrs:{id:"mixins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mixins"}},[t._v("#")]),t._v(" mixins")]),t._v(" "),a("h3",{attrs:{id:"extends"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extends"}},[t._v("#")]),t._v(" extends")]),t._v(" "),a("h3",{attrs:{id:"provide-inject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provide-inject"}},[t._v("#")]),t._v(" provide/inject")]),t._v(" "),a("h2",{attrs:{id:"options-mics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-mics"}},[t._v("#")]),t._v(" Options/Mics")]),t._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" name")]),t._v(" "),a("h3",{attrs:{id:"delimiters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delimiters"}},[t._v("#")]),t._v(" delimiters")]),t._v(" "),a("h3",{attrs:{id:"functional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functional"}},[t._v("#")]),t._v(" functional")]),t._v(" "),a("h3",{attrs:{id:"model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#model"}},[t._v("#")]),t._v(" model")]),t._v(" "),a("h3",{attrs:{id:"inheriattrs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inheriattrs"}},[t._v("#")]),t._v(" inheriAttrs")]),t._v(" "),a("h3",{attrs:{id:"comments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comments"}},[t._v("#")]),t._v(" comments")]),t._v(" "),a("h2",{attrs:{id:"instance-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instance-properties"}},[t._v("#")]),t._v(" Instance Properties")]),t._v(" "),a("h3",{attrs:{id:"vm-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-data"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$data")])]),t._v(" "),a("h3",{attrs:{id:"vm-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-props"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$props")])]),t._v(" "),a("h3",{attrs:{id:"vm-el"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-el"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$el")])]),t._v(" "),a("h3",{attrs:{id:"vm-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-options"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$options")])]),t._v(" "),a("h3",{attrs:{id:"vm-parent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-parent"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$parent")])]),t._v(" "),a("h3",{attrs:{id:"vm-root"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-root"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$root")])]),t._v(" "),a("h3",{attrs:{id:"vm-children"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-children"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$children")])]),t._v(" "),a("h3",{attrs:{id:"vm-slots"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-slots"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$slots")])]),t._v(" "),a("h3",{attrs:{id:"vm-copedslots"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-copedslots"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$copedSlots")])]),t._v(" "),a("h3",{attrs:{id:"vm-refs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-refs"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$refs")])]),t._v(" "),a("h3",{attrs:{id:"vm-isserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-isserver"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$isServer")])]),t._v(" "),a("h3",{attrs:{id:"vm-attrs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-attrs"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$attrs")])]),t._v(" "),a("h3",{attrs:{id:"vm-listeners"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-listeners"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$listeners")])]),t._v(" "),a("h2",{attrs:{id:"instance-methods-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instance-methods-data"}},[t._v("#")]),t._v(" Instance Methods/Data")]),t._v(" "),a("h3",{attrs:{id:"vm-watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-watch"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$watch")])]),t._v(" "),a("h3",{attrs:{id:"vm-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-set"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$set")])]),t._v(" "),a("h3",{attrs:{id:"vm-delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-delete"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$delete")])]),t._v(" "),a("h2",{attrs:{id:"instance-methods-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instance-methods-events"}},[t._v("#")]),t._v(" Instance Methods/Events")]),t._v(" "),a("h3",{attrs:{id:"vm-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-on"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$on")])]),t._v(" "),a("h3",{attrs:{id:"vm-once"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-once"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$once")])]),t._v(" "),a("h3",{attrs:{id:"vm-off"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-off"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$off")])]),t._v(" "),a("h3",{attrs:{id:"vm-emit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-emit"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$emit")])]),t._v(" "),a("h2",{attrs:{id:"instance-methods-lifecle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instance-methods-lifecle"}},[t._v("#")]),t._v(" Instance Methods/Lifecle")]),t._v(" "),a("h3",{attrs:{id:"vm-mount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-mount"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$mount")])]),t._v(" "),a("h3",{attrs:{id:"vm-forceupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-forceupdate"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$forceUpdate")])]),t._v(" "),a("h3",{attrs:{id:"vm-nexttick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-nexttick"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$nextTick")])]),t._v(" "),a("h3",{attrs:{id:"vm-destroy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-destroy"}},[t._v("#")]),t._v(" "),a("code",[t._v("vm.$destroy")])]),t._v(" "),a("h2",{attrs:{id:"directives-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directives-2"}},[t._v("#")]),t._v(" Directives")]),t._v(" "),a("h3",{attrs:{id:"v-text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-text"}},[t._v("#")]),t._v(" "),a("code",[t._v("v-text")])]),t._v(" "),a("h3",{attrs:{id:"v-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-html"}},[t._v("#")]),t._v(" "),a("code",[t._v("v-html")])]),t._v(" "),a("h3",{attrs:{id:"v-show"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-show"}},[t._v("#")]),t._v(" "),a("code",[t._v("v-show")])]),t._v(" "),a("h3",{attrs:{id:"v-if"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-if"}},[t._v("#")]),t._v(" "),a("code",[t._v("v-if")])]),t._v(" "),a("h3",{attrs:{id:"v-else"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-else"}},[t._v("#")]),t._v(" "),a("code",[t._v("v-else")])]),t._v(" "),a("h3",{attrs:{id:"v-else-if"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-else-if"}},[t._v("#")]),t._v(" "),a("code",[t._v("v-else-if")])]),t._v(" "),a("h3",{attrs:{id:"v-for"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-for"}},[t._v("#")]),t._v(" "),a("code",[t._v("v-for")])]),t._v(" "),a("h3",{attrs:{id:"v-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-on"}},[t._v("#")]),t._v(" "),a("code",[t._v("v-on")])]),t._v(" "),a("h3",{attrs:{id:"v-bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-bind"}},[t._v("#")]),t._v(" "),a("code",[t._v("v-bind")])]),t._v(" "),a("h3",{attrs:{id:"v-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-model"}},[t._v("#")]),t._v(" "),a("code",[t._v("v-model")])]),t._v(" "),a("h3",{attrs:{id:"v-slot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-slot"}},[t._v("#")]),t._v(" "),a("code",[t._v("v-slot")])]),t._v(" "),a("h3",{attrs:{id:"v-pre"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-pre"}},[t._v("#")]),t._v(" "),a("code",[t._v("v-pre")])]),t._v(" "),a("h3",{attrs:{id:"v-cloak"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-cloak"}},[t._v("#")]),t._v(" "),a("code",[t._v("v-cloak")])]),t._v(" "),a("h3",{attrs:{id:"v-once"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-once"}},[t._v("#")]),t._v(" "),a("code",[t._v("v-once")])]),t._v(" "),a("h2",{attrs:{id:"special-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#special-attributes"}},[t._v("#")]),t._v(" Special Attributes")]),t._v(" "),a("h3",{attrs:{id:"key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[t._v("#")]),t._v(" key")]),t._v(" "),a("h3",{attrs:{id:"ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" ref")]),t._v(" "),a("h3",{attrs:{id:"is"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#is"}},[t._v("#")]),t._v(" is")]),t._v(" "),a("h3",{attrs:{id:"slot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slot"}},[t._v("#")]),t._v(" slot")]),t._v(" "),a("h3",{attrs:{id:"slot-scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slot-scope"}},[t._v("#")]),t._v(" slot-scope")]),t._v(" "),a("h3",{attrs:{id:"scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[t._v("#")]),t._v(" scope")]),t._v(" "),a("h2",{attrs:{id:"built-ln-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-ln-components"}},[t._v("#")]),t._v(" Built-ln Components")]),t._v(" "),a("h3",{attrs:{id:"component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#component"}},[t._v("#")]),t._v(" component")]),t._v(" "),a("h3",{attrs:{id:"transtion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transtion"}},[t._v("#")]),t._v(" transtion")]),t._v(" "),a("h3",{attrs:{id:"transtion-group"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transtion-group"}},[t._v("#")]),t._v(" transtion-group")]),t._v(" "),a("h3",{attrs:{id:"keep-alive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive"}},[t._v("#")]),t._v(" keep-alive")]),t._v(" "),a("h3",{attrs:{id:"slot-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slot-2"}},[t._v("#")]),t._v(" slot")]),t._v(" "),a("h2",{attrs:{id:"vnode-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vnode-interface"}},[t._v("#")]),t._v(" VNode-Interface")]),t._v(" "),a("h2",{attrs:{id:"server-side-rendering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-side-rendering"}},[t._v("#")]),t._v(" Server-Side Rendering")]),t._v(" "),a("h2",{attrs:{id:"根据vue的打印数据-其他应该是这样的-见-https-github-com-veaba-web-advanced-frond-end-blob-master-demos-js-avue-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据vue的打印数据-其他应该是这样的-见-https-github-com-veaba-web-advanced-frond-end-blob-master-demos-js-avue-js"}},[t._v("#")]),t._v(" 根据vue的打印数据，其他应该是这样的 见 https://github.com/veaba/web-advanced-frond-end/blob/master/demos/js/aVue.js")])])}),[],!1,null,null,null);e.default=r.exports}}]);