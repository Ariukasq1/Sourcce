(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769],{7603:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1413),s=t(7294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},o=t(5636),a=function(e,n){return s.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};a.displayName="ArrowRightOutlined";var c=s.forwardRef(a)},1090:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news/[news]",function(){return t(1907)}])},1907:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var r=t(4051),s=t.n(r),i=t(5893),o=(t(7294),t(4751)),a=t.n(o),c=t(1838),l=t(5891),u=t(5675),d=function(e){var n=e.post||{},t=n.title,r=n.content,s=n._embedded,o=(0,l.Yu)(s,"image");return(0,i.jsx)("div",{className:"news-detail",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"news-tag",children:(0,l.__)("#News")}),o&&(0,i.jsx)("div",{className:"news-image",children:(0,i.jsx)(u.default,{loader:function(){return o},src:o,layout:"fill",objectFit:"cover",objectPosition:"center"})}),(0,i.jsx)("div",{className:"blue-title",dangerouslySetInnerHTML:{__html:(t||{}).rendered}}),(0,i.jsx)("div",{className:"news-content",dangerouslySetInnerHTML:{__html:(r||{}).rendered}})]})})},f=t(6066),w=t(1664),v=t(7603);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}var p=function(e){var n=e.data,t=(e.slug,{dots:!1,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,rows:2,nextArrow:(0,i.jsx)(l.F8,{}),prevArrow:(0,i.jsx)(l.Kf,{}),responsive:[{breakpoint:1199,settings:{slidesToShow:3,slidesToScroll:1,rows:2}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2,rows:2}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,rows:2}}]});return(0,i.jsx)("div",{className:"newsRelated",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"blue-title",children:(0,l.__)("News Related")}),(0,i.jsx)(f.Z,m({},t,{className:"two-row-slider",children:n.map((function(e,n){var t=(0,l.Yu)(e._embedded,"image");return(0,i.jsx)(w.default,{href:"/news/[news]",as:(0,c.Cw)("/news/".concat(e.slug)),children:(0,i.jsxs)("div",{className:"slider-image-back",children:[t&&(0,i.jsx)(u.default,{loader:function(){return t},src:t,layout:"fill",objectFit:"cover",objectPosition:"center"}),(0,i.jsx)("div",{className:"news-title",dangerouslySetInnerHTML:{__html:e.title.rendered}}),(0,i.jsxs)("div",{className:"read-more-project",children:[(0,l.__)("Read-more")," ",(0,i.jsx)(v.Z,{})]})]})},n)}))}))]})})};function j(e,n,t,r,s,i,o){try{var a=e[i](o),c=a.value}catch(l){return void t(l)}a.done?n(c):Promise.resolve(c).then(r,s)}var b=function(e){var n=e.post,t=e.data;return(0,i.jsxs)("div",{className:"top",children:[(0,i.jsx)(d,{post:n}),(0,i.jsx)(p,{data:t,slug:"news"})]})};b.getInitialProps=function(){var e,n=(e=s().mark((function e(n){var t,r,i,o,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new(a())({endpoint:(0,c.ZP)(n).apiUrl}),r=n.query.news,e.next=4,t.categories().slug("news").embed().then((function(e){return e[0]}));case 4:return i=e.sent,e.next=7,t.posts().categories((i||{}).id).embed();case 7:return o=e.sent,e.next=10,t.posts().slug("".concat(r)).embed().then((function(e){return e[0]}));case 10:return l=e.sent,e.abrupt("return",{post:l,data:o});case 12:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,s){var i=e.apply(n,t);function o(e){j(i,r,s,o,a,"next",e)}function a(e){j(i,r,s,o,a,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}();var g=b},4654:function(){}},function(e){e.O(0,[751,675,66,774,888,179],(function(){return n=1090,e(e.s=n);var n}));var n=e.O();_N_E=n}]);