"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{288:function(t,n,r){r.d(n,{Z:function(){return f}});r(791);var e,a=r(689),u=r(87),c=r(184),s=function(t){var n=t.title,r=t.poster_path,e=t.id,s=(0,a.TH)();return(0,c.jsx)("li",{children:(0,c.jsxs)(u.rU,{to:"/movies/".concat(e),state:{from:s},children:[(0,c.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(r),alt:n}),n&&n.substring(0,20)]})},e)},i=r(168),o=r(867).styled.ul(e||(e=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n\n  li {\n    width: 200px;\n    text-align: center;\n    list-style: none;\n  }\n  li > a {\n    color: #fff;\n    &:hover,\n    &:focus,\n    &:active {\n      color: #3fc9ff;\n      transition: all 400ms ease-in-out;\n    }\n  }\n"]))),f=function(t){var n=t.movies;return(0,c.jsx)(o,{children:n.map((function(t){var n=t.title,r=t.id,e=t.poster_path;return(0,c.jsx)(s,{title:n,poster_path:e,id:r},r)}))})}},854:function(t,n,r){r.d(n,{a:function(){return u}});var e=r(430),a=r(184),u=function(){return(0,a.jsx)(e.g4,{height:"100",width:"100",radius:"9",color:"#3fc9ff",ariaLabel:"loading"})}},884:function(t,n,r){r.r(n);var e=r(861),a=r(439),u=r(757),c=r.n(u),s=r(288),i=r(854),o=r(791),f=r(689),p=r(409),l=r(184);n.default=function(){var t=(0,o.useState)(!1),n=(0,a.Z)(t,2),r=n[0],u=n[1],v=(0,o.useState)(null),h=(0,a.Z)(v,2),d=h[0],m=h[1],x=(0,f.UO)().movieId;return(0,o.useEffect)((function(){var t=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,(0,p.ED)(x);case 4:n=t.sent,r=n.results,m(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0.message);case 12:return t.prev=12,u(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[x]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:x}),r&&(0,l.jsx)(i.a,{}),r?(0,l.jsx)(s.Z,{movie:d}):(0,l.jsx)(i.a,{})]})}},409:function(t,n,r){r.d(n,{Bt:function(){return p},ED:function(){return o},NA:function(){return i},Wn:function(){return f},_k:function(){return s}});var e=r(861),a=r(757),u=r.n(a),c=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e61641c86f787a123ab79c28a2fcf6ec"}}),s=function(){var t=(0,e.Z)(u().mark((function t(){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/movie/day");case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/search/movie",{params:{query:n}});case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(n,"/credits"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(n,"/reviews"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=884.bc2f607e.chunk.js.map