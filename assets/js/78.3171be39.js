(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{425:function(t,e,v){"use strict";v.r(e);var _=v(42),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"cookie"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),v("p",[t._v("有关 Cookie 安全的问题")]),t._v(" "),v("p",[t._v("有关 "),v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie/SameSite",target:"_blank",rel:"noopener noreferrer"}},[t._v("SameSite"),v("OutboundLink")],1),t._v(" 问题")]),t._v(" "),v("h2",{attrs:{id:"samesite"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#samesite"}},[t._v("#")]),t._v(" SameSite")]),t._v(" "),v("p",[t._v("三个属性：")]),t._v(" "),v("ul",[v("li",[v("p",[v("code",[t._v("Strict")]),t._v(" (严格)")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("Lax")]),t._v(" (松懈)")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("None")]),t._v(" (无)")])])]),t._v(" "),v("h3",{attrs:{id:"strict"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#strict"}},[t._v("#")]),t._v(" "),v("code",[t._v("Strict")])]),t._v(" "),v("p",[t._v("将完全禁止第三方 "),v("code",[t._v("Cookie")]),t._v("，跨站点时候，不会发送 "),v("code",[t._v("Cookie")]),t._v("，只有当前网页 URL 与请求目标一致时才会带上 "),v("code",[t._v("Cookie")]),t._v("。")]),t._v(" "),v("p",[t._v("也就是 "),v("strong",[v("code",[t._v("同站检查")])]),t._v(" 的意思。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Set-cookie:CookieName=CookieValue; SameSite=Strict\n")])])]),v("p",[t._v("这个 "),v("code",[t._v("Strict")]),t._v(" 过于严格，导致很多子链接跳转都被不带 "),v("code",[t._v("cookie")])]),t._v(" "),v("h3",{attrs:{id:"lax"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#lax"}},[t._v("#")]),t._v(" "),v("code",[t._v("Lax")])]),t._v(" "),v("p",[t._v("大多数是否，不发送第三方 "),v("code",[t._v("Cookie")]),t._v("，除了导航到目标网站的 "),v("code",[t._v("Get")]),t._v(" 请求。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v(" Set-cookie: CName=CValue; SameSite=Lax\n")])])]),v("p",[t._v("导航到目标的 "),v("code",[t._v("Get")]),t._v(" 请求，有三种情况，a 链接，预加载，get 表单。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("请求类型")]),t._v(" "),v("th",[t._v("实例")]),t._v(" "),v("th",[t._v("正常情况")]),t._v(" "),v("th",[t._v("Lax")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("a 标签连接")]),t._v(" "),v("td",[v("code",[t._v('<a href="">...</a>')])]),t._v(" "),v("td",[t._v("发送")]),t._v(" "),v("td",[t._v("发送")])]),t._v(" "),v("tr",[v("td",[t._v("预加载")]),t._v(" "),v("td",[v("code",[t._v('<link rel="prefetch" href="">/')])]),t._v(" "),v("td",[t._v("发送")]),t._v(" "),v("td",[t._v("发送")])]),t._v(" "),v("tr",[v("td",[t._v("GET 表单")]),t._v(" "),v("td",[v("code",[t._v('from method="GET" actions="">...</from>')])]),t._v(" "),v("td",[t._v("发送")]),t._v(" "),v("td",[t._v("发送")])]),t._v(" "),v("tr",[v("td",[t._v("POST 表单")]),t._v(" "),v("td",[v("code",[t._v('from method="POST" actions="">...</from>')])]),t._v(" "),v("td",[t._v("发送")]),t._v(" "),v("td",[t._v("不发送")])]),t._v(" "),v("tr",[v("td",[t._v("iframe")]),t._v(" "),v("td",[v("code",[t._v('<iframe src=""></iframe>')])]),t._v(" "),v("td",[t._v("发送")]),t._v(" "),v("td",[t._v("不发送")])]),t._v(" "),v("tr",[v("td",[t._v("AJAX")]),t._v(" "),v("td",[v("code",[t._v("$.get(...)")])]),t._v(" "),v("td",[t._v("发送")]),t._v(" "),v("td",[t._v("不发送")])]),t._v(" "),v("tr",[v("td",[t._v("Image")]),t._v(" "),v("td",[v("code",[t._v('<img src=""')])]),t._v(" "),v("td",[t._v("发送")]),t._v(" "),v("td",[t._v("不发送")])]),t._v(" "),v("tr",[v("td",[t._v("Svg")]),t._v(" "),v("td",[v("code",[t._v('<svg src=""')])]),t._v(" "),v("td",[t._v("（未知）")]),t._v(" "),v("td",[t._v("（未知）")])])])]),t._v(" "),v("p",[v("code",[t._v("Lax")]),t._v(" 或 "),v("code",[t._v("Strict")]),t._v(" 基本杜绝 "),v("code",[t._v("CSRF")]),t._v(" 攻击")]),t._v(" "),v("h3",{attrs:{id:"none"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#none"}},[t._v("#")]),t._v(" None")]),t._v(" "),v("p",[t._v("无效设置")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Set-Cookie: name=123;SameSite=None\n")])])]),v("p",[t._v("有效的设置，即 Cookie 只能通过 HTTPS 协议发送。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Set-Cookie: name=123;SameSite=None;Secure\n")])])]),v("h2",{attrs:{id:"引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[t._v("#")]),t._v(" 引用")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰：Cookie 的 SameSite 属性"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);