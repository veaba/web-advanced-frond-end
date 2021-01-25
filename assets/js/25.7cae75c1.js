(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{372:function(v,_,e){"use strict";e.r(_);var a=e(42),t=Object(a.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"http-缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存"}},[v._v("#")]),v._v(" HTTP 缓存")]),v._v(" "),e("ul",[e("li",[v._v("缓存的规则")]),v._v(" "),e("li",[v._v("缓存的方案")]),v._v(" "),e("li",[v._v("缓存的优点")]),v._v(" "),e("li",[v._v("不同刷新的的请求执行过程")])]),v._v(" "),e("h2",{attrs:{id:"缓存规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存规则"}},[v._v("#")]),v._v(" 缓存规则")]),v._v(" "),e("p",[v._v("用于缓存 JS、css、图片等资源，根据缓存阶段，分为两个"),e("strong",[v._v("强制缓存")]),v._v("、"),e("strong",[v._v("协商缓存")])]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("强缓存")]),v._v(" 和 "),e("code",[v._v("协商缓存")]),v._v(" 同时存在，强缓存优先级高于协商缓存")])]),v._v(" "),e("li",[e("p",[v._v("执行强缓存时，若命中，则直接使用缓存数据库数据 (即本地数据)，不在进行缓存协商。")])])]),v._v(" "),e("h3",{attrs:{id:"强制缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强制缓存"}},[v._v("#")]),v._v(" 强制缓存")]),v._v(" "),e("p",[v._v("强缓存下，命中规则")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("+------------+                             +------------+\n|  客户端     |  ------request----------\x3e   |  缓存数据库  |\n+------------+                             +------------+\n    |                                           |\n    |                                           |\n+------------+                             +------------+\n|  缓存数据库  |  <--有缓存，且为失效，返回数据  | 客户端      |\n+------------+                             +------------+\n")])])]),e("p",[v._v("问题：此时如何判断失效？")]),v._v(" "),e("p",[v._v("强缓存，为命中")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("+------------+                       +------------+  +------------+\n|  客户端     | ------ request ----\x3e  |  缓存数据库  |  |   服务器    |\n+------------+                       +------------+  +------------+\n      |                                     |               |\n      | <------------ invalid ------------  |               |\n      |                                                     |\n      | --------------------- request --------------------\x3e |\n      |                                                     |\n      | <-------- response Data and cache rule ------------ |\n      |                                                     |\n      | --------- saved cache rule to local db ------------ |\n\n")])])]),e("p",[v._v("问题：此时的 cache rule 是什么？")]),v._v(" "),e("h3",{attrs:{id:"协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[v._v("#")]),v._v(" 协商缓存")]),v._v(" "),e("p",[v._v("客户端，从缓存数据库中获得到缓存数据的标识，得到标识后发起 request 到服务器，询问是否最新的？")]),v._v(" "),e("p",[e("img",{attrs:{src:"/images/http/cache-304.png",alt:""}})]),v._v(" "),e("ul",[e("li",[v._v("如果没有失效，服务器，返回 "),e("code",[v._v("304")]),v._v("，客户端直接从缓存中获得所请求的的数据？\n"),e("ul",[e("li",[v._v("(比如不加后缀的，即哈希值，容易返回 "),e("code",[v._v("304")]),v._v(")")])])])]),v._v(" "),e("p",[v._v("问题：此时所说的 "),e("code",[v._v("客户端直接从缓存中获得所请求的的数据")]),v._v(" 是从浏览器的那个缓存数据库吗？那为什么有些 "),e("code",[v._v("304")]),v._v(" 显示 "),e("code",[v._v("memory cache")]),v._v(" 或 "),e("code",[v._v("disk cache")]),v._v("，有些 "),e("code",[v._v("304")]),v._v(" 则显示具体的 "),e("code",[v._v("size")]),v._v(" 大小呢？")]),v._v(" "),e("p",[v._v("协商缓存下，命中规则")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("+------------+                       +------------+  +------------+\n|  客户端     |                       |  缓存数据库  |  |   服务器    |\n+------------+                       +------------+  +------------+\n      |                                     |               |\n      | ---------- 获取缓存数据的标识 ------\x3e  |               |\n      |                                                     |\n      | <---------- 返回缓存数据的标识 ------  |\n      |                                                     |\n      | ----- 请求服务器验证缓存标识对应的数据是否已失效 --------\x3e |\n      |                                                     |\n      | <-------------- 通知客户端缓存还未失效 ---------------- |\n      |\n      | -------------- 获取缓存数据---------\x3e |\n")])])]),e("p",[v._v("协商缓存下，未命中规则")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("+------------+                       +------------+  +------------+\n|  客户端     |                       |  缓存数据库  |  |   服务器    |\n+------------+                       +------------+  +------------+\n      |                                     |               |\n      | ---------- 获取缓存数据的标识 ------\x3e  |               |\n      |                                                     |\n      | <---------- 返回缓存数据的标识 ------  |               |\n      |                                                     |\n      | ----- 请求服务器验证缓存标识对应的数据是否已失效 --------\x3e |\n      |                                                     |\n      | <-------------- 返回最新数据和缓存的规则 -------------- |\n      |                                                     |\n      | ----- 将数据和规则都存入到系统 -------\x3e |               |\n")])])]),e("h3",{attrs:{id:"缓存方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存方案"}},[v._v("#")]),v._v(" 缓存方案")]),v._v(" "),e("p",[e("strong",[v._v("在强缓存阶段")]),v._v("：\n客户端发起 HTTP 请求，主要是通过以下两个字段来与服务器获得缓存请求更换的。")]),v._v(" "),e("ul",[e("li",[e("p",[e("strong",[v._v("Cache-control")]),v._v("："),e("code",[v._v("cache-control: max-age=600")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("max-age=600")]),v._v("，表示缓存的内容在 600 秒后失效")]),v._v(" "),e("li",[e("code",[v._v("private")]),v._v("：客户端可以缓存")]),v._v(" "),e("li",[e("code",[v._v("public")]),v._v("：客户端和服务器都可以缓存")]),v._v(" "),e("li",[e("code",[v._v("max-age=t")]),v._v("：缓存的内容将在 "),e("code",[v._v("t")]),v._v(" 秒后失效")]),v._v(" "),e("li",[e("code",[v._v("no-cache")]),v._v("：需要使用协商缓存来验证缓存数据")]),v._v(" "),e("li",[e("code",[v._v("no-store")]),v._v("：所有内容都不缓存")]),v._v(" "),e("li",[e("code",[v._v("Cache-Control: no-store, no-cache, no-transform, must-revalidate, max-age=0")]),v._v("：比如 "),e("code",[v._v("sockjs-node/info?t=1610684159275")]),v._v(" 中的请求")])])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("Expires")]),v._v("："),e("code",[v._v("expires: Fri, 15 Jan 2021 03:04:40 GMT")])]),v._v(" "),e("ul",[e("li",[v._v("返回服务器返回的数据的到期时间")]),v._v(" "),e("li",[v._v("当再次请求时的请求时间小于返回的此时间，则直接使用缓存数据。(问题：此时的从什么地方使用缓存？服务器？客户端？)")]),v._v(" "),e("li",[v._v("旧时代产物，由于时间 BS 时间误差，现在用 "),e("code",[v._v("cache-control")]),v._v(" 替代")])])])]),v._v(" "),e("p",[e("strong",[v._v("在协商缓存阶段")]),v._v("：")]),v._v(" "),e("p",[v._v("协商缓存，即和服务器进行协商。浏览器发起 HTTP 请求后，服务器将缓存标识和数据一起给客户端。客户端备份至自己的缓存中。\n再次请求后，将带有的缓存标识也一并发给服务器，服务器据此作出判断，未失效则 "),e("code",[v._v("304")]),v._v("，客户端拿到该状态码直接使用缓存数据。")]),v._v(" "),e("ul",[e("li",[e("p",[e("strong",[v._v("ETag")]),v._v("："),e("code",[v._v('ETag: W/"5ffefa99-834c"')]),v._v("：服务器告诉浏览器当前资源在服务生成唯一标识。")]),v._v(" "),e("ul",[e("li",[v._v("ETag 比较昂贵，占用服务器资源。")]),v._v(" "),e("li",[e("strong",[v._v("If-None-Match")]),v._v("：\n"),e("ul",[e("li",[v._v("不同：说明资源被改动过，整体返回响应体，"),e("code",[v._v("200")])]),v._v(" "),e("li",[v._v("相同：资源 w 无心修改，直接读取客户端的缓存，响应 "),e("code",[v._v("304")])])])])])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("Last-modified")]),v._v("："),e("code",[v._v("Last-modified: Wed, 13 Jan 2021 13:50:17 GMT")])]),v._v(" "),e("ul",[e("li",[v._v("服务器在响应时，会告诉浏览器资源的最后修改时间。")]),v._v(" "),e("li",[v._v("(问题，这个时间如何判断？)")]),v._v(" "),e("li",[e("code",[v._v("If-Modified-since")]),v._v("：浏览器再次请求服务器的时候，请求头会包含此字段"),e("strong",[v._v("修改才下载")]),v._v(" "),e("ul",[e("li",[v._v("与最后修改时间对比，一致返回 "),e("code",[v._v("304")])]),v._v(" "),e("li",[v._v("从这个时间开始算起")]),v._v(" "),e("li",[v._v("被修改：传输响应整体，"),e("code",[v._v("200")]),v._v(" Ok")]),v._v(" "),e("li",[v._v("未修改：只传输响应 header，"),e("code",[v._v("304")]),v._v(" Not Modified")])])]),v._v(" "),e("li",[e("code",[v._v("If-Unmodified-Since")]),v._v("：从这个事件算起，是否文件没有被更改？"),e("strong",[v._v("属于未修改才下载")]),v._v(" "),e("ul",[e("li",[v._v("被修改：不传输，服务器返回，"),e("code",[v._v("412")]),v._v(" Precondition failed (预处理错误)")]),v._v(" "),e("li",[v._v("未修改：继续传输文件，"),e("code",[v._v("200")]),v._v(" Ok")])])])])])]),v._v(" "),e("p",[v._v("在强缓存阶段：服务器响应的 header 中 "),e("code",[v._v("Expires(逾期)")]),v._v("、"),e("code",[v._v("Cache-Control")]),v._v(" 表示。")]),v._v(" "),e("p",[e("img",{attrs:{src:"/images/http/baidu-cache.png",alt:""}})]),v._v(" "),e("p",[v._v("上图中，百度首页，有两个文件 ("),e("code",[v._v("cd37ed75a9387c5b.js")]),v._v("、"),e("code",[v._v("d")]),v._v(") 将 "),e("code",[v._v("Cache-control")]),v._v(" 设置为极低："),e("code",[v._v("max-age=3600")]),v._v(" 甚至不设置。")]),v._v(" "),e("p",[v._v("而其他则设置极高 "),e("code",[v._v("Cache-control: max-age=2592000")]),v._v("，测试则从 "),e("code",[v._v("memory-cache")]),v._v(" 中加载")]),v._v(" "),e("h2",{attrs:{id:"缓存优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存优点"}},[v._v("#")]),v._v(" 缓存优点")]),v._v(" "),e("ul",[e("li",[v._v("减少冗余的数据传输，节省宽带流量")]),v._v(" "),e("li",[v._v("减少服务器负担，提高网站性能")]),v._v(" "),e("li",[v._v("加快客户端加载网页的速度。")])]),v._v(" "),e("h2",{attrs:{id:"其他特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他特性"}},[v._v("#")]),v._v(" 其他特性")]),v._v(" "),e("ul",[e("li",[v._v("F5，去看看文件过期了没有？请求带上 "),e("code",[v._v("If-Modify-since")]),v._v("，但是现在很多网站的没有这个字段")]),v._v(" "),e("li",[v._v("CTRL+F5，先删除缓存文件，再去服务器请求完整资源文件，强迫客户端强制执行首次更新拉取最新的资源，不缓存")])]),v._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),e("ul",[e("li",[v._v("强缓存："),e("code",[v._v("Cache-control")]),v._v("、 "),e("code",[v._v("Expires")])]),v._v(" "),e("li",[v._v("协商缓存："),e("code",[v._v("last-modified")]),v._v("、 "),e("code",[v._v("eTag")])]),v._v(" "),e("li",[e("code",[v._v("Cache-Control:max-ege:600")]),v._v(": 在"),e("code",[v._v("600s")]),v._v("后，请求这个文件才重新请求服务器")]),v._v(" "),e("li",[e("code",[v._v("Expires")]),v._v(": "),e("code",[v._v("Expires")]),v._v("= max-age + 请求时间，需要与 "),e("code",[v._v("last-modified")]),v._v(" 配合\n"),e("ul",[e("li",[v._v("过期时间前，可以从浏览器缓存取数据，无需请求")])])])]),v._v(" "),e("h2",{attrs:{id:"todo-问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#todo-问题"}},[v._v("#")]),v._v(" TODO:问题")]),v._v(" "),e("ol",[e("li",[v._v("HTTP 的服务器是如何缓存数据的？")]),v._v(" "),e("li",[e("code",[v._v("cache-control:max-age=10")]),v._v("，"),e("code",[v._v("10s")]),v._v(" 后如何处理后续的缓存工作？")]),v._v(" "),e("li",[e("code",[v._v("协商缓存是什么？")])]),v._v(" "),e("li",[e("code",[v._v("强缓存是什么？")]),v._v("是怎么判断本地有缓存的？")]),v._v(" "),e("li",[v._v("Chrome 勾选了 "),e("code",[v._v("Disable Cache")]),v._v("，禁用缓存")])]),v._v(" "),e("ul",[e("li",[v._v("顺序： "),e("s",[v._v("强缓存("),e("code",[v._v("Cache-Control")]),v._v("、"),e("code",[v._v("Expires")]),v._v(")")]),v._v(" ——> 协商缓存("),e("code",[v._v("last-modified")]),v._v(" 、"),e("code",[v._v("ETag")]),v._v(")。 直接进入协商缓存")])]),v._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[v._v("Chrome 取消勾选了 "),e("code",[v._v("Disable Cache")])])]),v._v(" "),e("ul",[e("li",[v._v("顺序： 强缓存("),e("code",[v._v("Cache-Control")]),v._v("、"),e("code",[v._v("Expires")]),v._v(") ——> 协商缓存("),e("code",[v._v("last-modified")]),v._v(" 、"),e("code",[v._v("ETag")]),v._v(")")]),v._v(" "),e("li",[v._v("此时直接从"),e("code",[v._v("memory")]),v._v(" 或 "),e("code",[v._v("disk")]),v._v(" 中读取存储的缓存")])])])}),[],!1,null,null,null);_.default=t.exports}}]);