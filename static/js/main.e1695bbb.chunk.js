(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(2),c=n.n(a),u=n(3),s=n(4),i=n(6),l=n(5);n(12);function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var f=function(){return d().then((function(t){return t.slice(0,5).sort((function(t,e){return t.name.localeCompare(e.name)}))}))},m=function(){return d().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},b=function(t){var e=t.goods;return r.a.createElement("ul",null,e.map((function(t){return r.a.createElement("li",{key:t.id,style:{color:t.color}},t.name)})))},g=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={goods:[]},t.requestGoods=function(e){e().then((function(e){return t.setState({goods:e})}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.state.goods;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dynamic list of Goods"),r.a.createElement("button",{type:"button",className:"button",onClick:function(){t.requestGoods(d)}},"Load All goods"),r.a.createElement("button",{type:"button",className:"button",onClick:function(){t.requestGoods(f)}},"Load 5 first goods"),r.a.createElement("button",{type:"button",className:"button",onClick:function(){t.requestGoods(m)}},"Load red goods"),r.a.createElement(b,{goods:e}))}}]),n}(r.a.Component);c.a.render(r.a.createElement(g,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.e1695bbb.chunk.js.map