(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{7603:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(1413),s=t(7294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},a=t(5636),c=function(e,n){return s.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};c.displayName="ArrowRightOutlined";var o=s.forwardRef(c)},6631:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return t(1784)}])},1784:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r=t(4051),s=t.n(r),i=t(5893),a=t(7294),c=t(4751),o=t.n(c),u=t(1838),l=t(5891),d=t(1664),f=t(6066),v=t(5675),w=t(7603);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}var m=function(e){var n=e.data,t=e.cats,r=t[0].id,s=(0,a.useState)(r),c=s[0],o=s[1],h=(0,a.useState)(0),m=h[0],b=h[1],g=n.filter((function(e){return e.categories.includes(c)})),j={dots:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,rows:2,nextArrow:(0,i.jsx)(l.F8,{}),prevArrow:(0,i.jsx)(l.Kf,{}),responsive:[{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2,rows:2}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,rows:2}}]};return(0,i.jsxs)("div",{className:"newsList",children:[(0,i.jsx)("div",{className:"sub-title",children:(0,l.__)("Newsroom")}),(0,i.jsx)("div",{className:"catList",children:t.map((function(e,n){return(0,i.jsx)("div",{onClick:function(){return function(e,n){o(e),b(n)}(e.id,n)},className:n===m?"active":"inactive",children:e.name},n)}))}),(0,i.jsx)(f.Z,p({},j,{className:"two-row-slider",children:g.map((function(e,n){var t=(0,l.Yu)(e._embedded,"image");return(0,i.jsx)(d.default,{href:"/news/[news]",as:(0,u.Cw)("/news/".concat(e.slug)),children:(0,i.jsxs)("div",{className:"slider-image-back",children:[t&&(0,i.jsx)(v.default,{loader:function(){return t},src:t,layout:"fill",objectFit:"cover",objectPosition:"center"}),(0,i.jsx)("div",{className:"news-title",dangerouslySetInnerHTML:{__html:e.title.rendered}}),(0,i.jsxs)("div",{className:"read-more-project",children:[(0,l.__)("Read-more")," ",(0,i.jsx)(w.Z,{})]})]})},n)}))}))]})};function b(e,n,t,r,s,i,a){try{var c=e[i](a),o=c.value}catch(u){return void t(u)}c.done?n(o):Promise.resolve(o).then(r,s)}var g=function(e){var n=e.data,t=e.childCats;return(0,i.jsx)("div",{className:"page",children:(0,i.jsx)(m,{data:n,cats:t})})};g.getInitialProps=function(){var e,n=(e=s().mark((function e(n){var t,r,i,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new(o())({endpoint:(0,u.ZP)(n).apiUrl}),e.next=3,t.categories().slug("news").embed().then((function(e){return e[0]}));case 3:return r=e.sent,e.next=6,t.posts().categories((r||{}).id).embed();case 6:return i=e.sent,e.next=9,t.categories().parent((r||{}).id).embed();case 9:return a=e.sent,e.abrupt("return",{data:i,childCats:a});case 11:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,s){var i=e.apply(n,t);function a(e){b(i,r,s,a,c,"next",e)}function c(e){b(i,r,s,a,c,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}();var j=g},4654:function(){}},function(e){e.O(0,[751,675,66,774,888,179],(function(){return n=6631,e(e.s=n);var n}));var n=e.O();_N_E=n}]);