(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,o){"use strict";o.r(n);var e=o(3),c=o.n(e),r=o(4),i=o(1),a=(o(9),o(0)),s=function(t){var n=t.goods;return Object(a.jsx)("ul",{children:n.map((function(t){var n=t.id,o=t.name,e=t.color;return Object(a.jsx)("li",{"data-cy":"good",style:{color:"".concat(e)},children:o},n)}))})};function u(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var d=function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),o=n[0],e=n[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Dynamic list of Goods"}),Object(a.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){u().then(e)},children:"Load all goods"}),Object(a.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){u().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then(e)},children:"Load 5 first goods"}),Object(a.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){u().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then(e)},children:"Load red goods"}),Object(a.jsx)(s,{goods:o})]})};c.a.render(Object(a.jsx)(d,{}),document.getElementById("root"))},9:function(t,n,o){}},[[11,1,2]]]);
//# sourceMappingURL=main.018cf345.chunk.js.map