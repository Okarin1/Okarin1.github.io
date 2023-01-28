(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{565:function(t,v,a){"use strict";a.r(v);var r=a(5),s=Object(r.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"javascript-在浏览器是如何被执行的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-在浏览器是如何被执行的"}},[t._v("#")]),t._v(" JavaScript 在浏览器是如何被执行的？")]),t._v(" "),a("h3",{attrs:{id:"浏览器下载资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器下载资源"}},[t._v("#")]),t._v(" 浏览器下载资源")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/12/02/e7HWC1xYyEBi4nU.png",alt:""}})]),t._v(" "),a("p",[t._v("域名经过解析变成ip地址（服务器地址），服务器就会返回一个index.html文件，浏览器解析html时会下载对应的资源。")]),t._v(" "),a("h3",{attrs:{id:"浏览器内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核"}},[t._v("#")]),t._v(" 浏览器内核")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/12/02/2tKqDLuvnU1SCxz.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("浏览器内核")]),t._v("指的是浏览器的"),a("strong",[t._v("排版引擎")]),t._v("（layout engine），又称"),a("strong",[t._v("浏览器引擎")]),t._v("，"),a("strong",[t._v("页面渲染引擎")]),t._v("，"),a("strong",[t._v("样版引擎")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"浏览器渲染过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染过程"}},[t._v("#")]),t._v(" 浏览器渲染过程")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/12/02/5WjPIVgvqtOsmhu.png",alt:""}})]),t._v(" "),a("p",[t._v("浏览器下载HTML文件之后进行解析，通过"),a("strong",[t._v("HTML解析器")]),t._v("（ HTML Parser） 和 "),a("strong",[t._v("CSS解析器")]),t._v("（ CSS Parser ）对 HTML 和 CSS 进行解析,形成 "),a("strong",[t._v("DOM树")]),t._v("（DOM Tree）和"),a("strong",[t._v("CSS规则")]),t._v(" （CSS Tree），结合在一起生成一棵 "),a("strong",[t._v("渲染树")]),t._v("（Render Tree）,再通过"),a("strong",[t._v("布局引擎")]),t._v("（Layout）对渲染树进行操作（比如不同设备的宽度问题）。有了最终的渲染树就会进行 "),a("strong",[t._v("绘制")]),t._v("（Painting）,最后进行展示（Display）。")]),t._v(" "),a("p",[t._v("在这个过程中，JS可以对DOM进行操作，会由"),a("strong",[t._v("JavaScript 引擎")]),t._v("来对JS代码进行解析。")]),t._v(" "),a("h3",{attrs:{id:"javascript-引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-引擎"}},[t._v("#")]),t._v(" JavaScript 引擎")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/12/02/MEHvufZnbq7Uroc.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("JavaScript引擎")]),t._v("会把JavaScript代码转换为机器可以执行的"),a("strong",[t._v("机器语言")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/12/02/Afkg5QqyTn6DUcL.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"浏览器引擎和-js-引擎的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器引擎和-js-引擎的关系"}},[t._v("#")]),t._v(" 浏览器引擎和 JS 引擎的关系")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/02/07/14jgMnamkviFTWf.png",alt:"image-20211202173611546"}})]),t._v(" "),a("h4",{attrs:{id:"v8引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v8引擎"}},[t._v("#")]),t._v(" V8引擎")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/12/02/GjsvhYmbrWuZAeN.png",alt:""}})]),t._v(" "),a("h5",{attrs:{id:"v8引擎架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v8引擎架构"}},[t._v("#")]),t._v(" V8引擎架构")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/111386872/",target:"_blank",rel:"noopener noreferrer"}},[t._v("V8引擎详细的解析执行过程"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/02/07/UyBgsbH1iVDhXkW.png",alt:"image-20211202174329105"}})]),t._v(" "),a("p",[a("strong",[t._v("V8引擎")]),t._v("对JavaScript源代码进行"),a("strong",[t._v("解析")]),t._v("，进行词法分析（生成tokens，包含type，value等）和语法分析，然后生成 "),a("strong",[t._v("抽象语法树")]),t._v("（AST）,然后通过 "),a("strong",[t._v("字节码解释器")]),t._v("（Ignition）将抽象语法树转换成 "),a("strong",[t._v("字节码")]),t._v("（bytecode）（因为JS运行环境是不一定的，不同的环境可能拥有不同的CPU，能执行的机器指令是有区别的，所以转换成能跨平台的字节码，然后转换成汇编语言，最后再转换成不同平台的机器码）。"),a("strong",[t._v("而对于多次执行的JS代码")]),t._v("，会通过"),a("strong",[t._v("优化编译器")]),t._v("（TurboFan）来生成 "),a("strong",[t._v("优化后的机器码")]),t._v("，直接进行执行，来提升性能。（而当函数执行操作不一致时，通过 "),a("strong",[t._v("动态反优化")]),t._v(" （ Deoptimization） 重新转换成字节码，所以对应参数传值性能更高，如TS）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/02/07/Pp9X83diNyvkFOQ.png",alt:"image-20211202181114208"}})]),t._v(" "),a("h5",{attrs:{id:"v8引擎的解析图-官方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v8引擎的解析图-官方"}},[t._v("#")]),t._v(" V8引擎的解析图（官方）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/12/03/EFZ6eqwcj4kf73n.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("内核")]),t._v("（Blink）遇到  "),a("strong",[t._v("JS")]),t._v(" 会下载下来传递给 JS 引擎，Stream获取到源码并进行编码转换，然后 "),a("strong",[t._v("扫描器")]),t._v("（Scanners）会进行词法分析和语法分析。")]),t._v(" "),a("p",[a("strong",[t._v("预解析")]),t._v("（PreParser）：有些代码不运行，没有必要转化成AST树，会简单对这些代码进行预解析。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/12/03/lKqg1YVX24nriUx.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"js执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js执行过程"}},[t._v("#")]),t._v(" JS执行过程")]),t._v(" "),a("h4",{attrs:{id:"globalobject-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#globalobject-go"}},[t._v("#")]),t._v(" GlobalObject (GO)")]),t._v(" "),a("p",[t._v("在执行JS代码时，进行解析生成"),a("strong",[t._v("AST")]),t._v("的阶段，会创建一个"),a("strong",[t._v("GlobalObject")]),t._v("（比如全局的String,Date,Number，setTimeout以及全局"),a("strong",[t._v("var")]),t._v("等）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/12/03/ZPXvhrWqT1dsnAb.png",alt:""}})]),t._v(" "),a("p",[t._v("在这个阶段，会把定义的全局对象进行赋值为"),a("strong",[t._v("undefined")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/12/03/b9yBY6VGMglFp4S.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"执行上下文栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文栈"}},[t._v("#")]),t._v(" 执行上下文栈")]),t._v(" "),a("p",[t._v("为了执行代码，V8引擎会有一个"),a("strong",[t._v("执行上下文栈")]),t._v("（Execution Context Stack ）（ECStack）(函数调用栈)，所有的函数执行都要被加载到ECStack里面进行执行。")]),t._v(" "),a("h4",{attrs:{id:"全局执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局执行上下文"}},[t._v("#")]),t._v(" 全局执行上下文")]),t._v(" "),a("p",[t._v("为了全局代码能够正常执行，需要创建"),a("strong",[t._v("全局执行上下文")]),t._v("（Global Execution Context ）(GEC)，会把全局执行上下文 放到 执行上下文栈 里面执行。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/12/03/T7g8uf1ViIsdl3Z.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/12/03/4UbM9vhZBeDIS1m.png",alt:""}})]),t._v(" "),a("h5",{attrs:{id:"variable-object-vo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variable-object-vo"}},[t._v("#")]),t._v(" Variable Object（VO）")]),t._v(" "),a("p",[t._v("VO可以看作指向GO对象，开始执行代码时会在VO中进行查找，会对应在GO中进行查找替换。")]),t._v(" "),a("h4",{attrs:{id:"全局代码执行过程-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局代码执行过程-函数"}},[t._v("#")]),t._v(" 全局代码执行过程（函数）")]),t._v(" "),a("p",[t._v("在编译过程中，在GO中普通的变量（如name）会赋值为"),a("code",[t._v("undefined")]),t._v("，而遇到"),a("strong",[t._v("函数")]),t._v("时，也会生成一个属性，但"),a("strong",[t._v("不会赋值")]),t._v("，而是另外创建一个"),a("strong",[t._v("内存空间")]),t._v("来存储函数，会创建一个对象（"),a("strong",[t._v("函数对象")]),t._v("），会保存一个"),a("strong",[t._v("父级作用域")]),t._v("以及"),a("strong",[t._v("函数的执行体")]),t._v("（代码块）。")]),t._v(" "),a("p",[a("strong",[t._v("所以，函数的作用域是在编译时就确定了，跟函数在哪里被调用无关")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/12/03/nmOihkMtfXube4Z.png",alt:""}})]),t._v(" "),a("p",[t._v("在执行遇到函数时，在VO中查询，对应在GO中找到这个函数，会找到对应的内存空间。会在 "),a("strong",[t._v("ECStack")]),t._v(" 里面创建一个 "),a("strong",[t._v("函数执行上下文")]),t._v(" （"),a("strong",[t._v("FEC")]),t._v("），在 FEC 里面存在一个 "),a("strong",[t._v("AO")]),t._v(" 活跃对象（Activation Object），会把函数里面的变量赋值为"),a("code",[t._v("undefined")])]),t._v(" "),a("p",[t._v("在函数执行时会在FEC里面的 "),a("strong",[t._v("VO")]),t._v("+"),a("strong",[t._v("父级作用域中")]),t._v(" 查询，对应在"),a("strong",[t._v("AO+父级作用域")]),t._v("中找到进行操作。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/12/03/K6xUYtRPO3Z2krC.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("同时")]),t._v("：当查找一个变量时，真实的查找路径时沿着作用域链来一层一层查找。")]),t._v(" "),a("p",[t._v("当函数完毕之后会函数执行上下文弹出栈，销毁掉FEC。")]),t._v(" "),a("h3",{attrs:{id:"环境变量和记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量和记录"}},[t._v("#")]),t._v(" 环境变量和记录")]),t._v(" "),a("h4",{attrs:{id:"早期版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#早期版本"}},[t._v("#")]),t._v(" 早期版本")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/12/03/qbYlESxjmOkdrJg.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"新版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新版"}},[t._v("#")]),t._v(" 新版")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/12/03/JwkZHaKWFISpNP5.png",alt:""}})]),t._v(" "),a("p",[t._v("VO => VE")])])}),[],!1,null,null,null);v.default=s.exports}}]);