(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{411:function(n,t,e){"use strict";e.r(t);var a=e(42),s=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[n._v("#")]),n._v(" Nginx")]),n._v(" "),e("blockquote",[e("p",[n._v("https://blog.csdn.net/tsummerb/article/details/79248015 对nginx 正向、反向带来写的比较好的文章")])]),n._v(" "),e("h2",{attrs:{id:"nginx-的正向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-的正向代理"}},[n._v("#")]),n._v(" nginx 的正向代理？")]),n._v(" "),e("blockquote",[e("p",[n._v("我忘记是2018年在哪一家公司面试了，面试官问我，你知道什么是nginx 正向代理？我楞了下，说不知道，后面想一直知道这个知识点。直到我直到这个知识点后，傻楞了，我一个前端知道个锤子nginx 正向代理啊，我去！ 算了，本着学习的心态，不想回忆起这个沙雕面试官了。")])]),n._v(" "),e("ul",[e("li",[n._v("正向代理最大的特点是客户端非常明确要访问的服务器地址；服务器只清楚请求来自哪个代理服务器，而不清楚来自哪个具体的客户端；正向代理模式屏蔽或者隐藏了真实客户端信息。")]),n._v(" "),e("li",[n._v("内网服务 主动要求请求外网的地址服务， 内网服务->访问->外网 。（(⊙_⊙)?，所以我ssh 到服务器 curl 百度 ，也算了）")]),n._v(" "),e("li",[n._v("("),e("code",[n._v("应该可以本来按着a 页面返回给用户，结果我让百度页面返回给用户？恩？")]),n._v(")")]),n._v(" "),e("li",[n._v("以 通过代理软件访问facebook 这样的例子，比较形象")])]),n._v(" "),e("div",{staticClass:"language-txt extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  server{\n    resolver 8.8.8.8\n  }\n")])])]),e("h2",{attrs:{id:"nginx-的反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-的反向代理"}},[n._v("#")]),n._v(" nginx 的反向代理？")]),n._v(" "),e("ul",[e("li",[n._v("proxy_pass")]),n._v(" "),e("li",[n._v("upstream")]),n._v(" "),e("li",[n._v("外网 主动请求内网服务， 外网->请求->内网服务")]),n._v(" "),e("li",[n._v("请求的来源也就是客户端是明确的，但是请求具体由哪台服务器处理的并不明确了，nginx扮演的就是一个反向代理角色")]),n._v(" "),e("li",[n._v("用户去访问淘宝，但返回给用户的内容的服务器，可能来自浙江，可能来自北京")])]),n._v(" "),e("h2",{attrs:{id:"nginx负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx负载均衡"}},[n._v("#")]),n._v(" nginx负载均衡")]),n._v(" "),e("ul",[e("li",[n._v("硬件负载均衡")]),n._v(" "),e("li",[n._v("软件负载均衡")])]),n._v(" "),e("blockquote",[e("p",[n._v("与硬件主机实现一种消息队列分发机智")])]),n._v(" "),e("ul",[e("li",[n._v("负载均衡调度算法\n"),e("ul",[e("li",[n._v("weight轮询")])]),n._v(" "),e("blockquote",[e("p",[n._v("皇帝翻牌子比较形象了！可以设定一些权重，来增加获得宠幸的几率，被打入冷宫的out 出局。。。")])]),n._v(" "),e("ul",[e("li",[n._v("ip_hash")])]),n._v(" "),e("blockquote",[e("p",[n._v("客户端ip的hash匹配，一个固定ip从会访问到同一个后端，一定程度解决了集群下，session共享问题")])]),n._v(" "),e("ul",[e("li",[n._v("fair")])]),n._v(" "),e("blockquote",[e("p",[n._v("智能调整算法调度？动态的 根据后端服务器的请求处理处理的响应时间，进行均衡的分配，响应时间短的，分配到的几率高，长的，分配的少！需要安装upstream_fair 模块")])]),n._v(" "),e("ul",[e("li",[n._v("url_hash")])]),n._v(" "),e("blockquote",[e("p",[n._v("根据url+hash 结果，每次请求的url都指定到后端固定服务器，nginx作为静态服务器下，提高缓存效率。需要安装hash 软件包")])])])]),n._v(" "),e("h2",{attrs:{id:"一段基于vue项目nginx-配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一段基于vue项目nginx-配置文件"}},[n._v("#")]),n._v(" 一段基于vue项目nginx 配置文件")]),n._v(" "),e("div",{staticClass:"language-txt extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("{\n  worker_processes  1;\n  events {\n      worker_connections  1024;\n  }\n  http {\n      include       mime.types;\n      default_type  application/octet-stream;\n      sendfile        on;\n      keepalive_timeout  65;\n      server {\n          listen       80;\n          server_name  localhost;\n        \n      location / {\n              root   F:\\baidu\\dist;\n              try_files $uri $uri/ @router;\n              index  index.html;\n      }\n    \n      location @router {\n              rewrite ^.*$ /index.html last;\n      }\n      location ^~/api/{\n        proxy_pass http://www.baidu.com/;\n        }\n      }\n  }\n}\n\n")])])]),e("h2",{attrs:{id:"一段基于nuxt项目的nginx-配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一段基于nuxt项目的nginx-配置文件"}},[n._v("#")]),n._v(" 一段基于nuxt项目的nginx 配置文件")])])}),[],!1,null,null,null);t.default=s.exports}}]);