"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{854:function(n,t,e){e.d(t,{a:function(){return o}});var r=e(3430),a=e(184),o=function(){return(0,a.jsx)(r.g4,{height:"100",width:"100",radius:"9",color:"#3fc9ff",ariaLabel:"loading"})}},4324:function(n,t,e){e.d(t,{e:function(){return f}});e(2791);var r,a=e(7689),o=e(1087),c=e(184),i=function(n){var t=n.title,e=n.poster_path,r=n.id,i=(0,a.TH)();return(0,c.jsx)("li",{children:(0,c.jsxs)(o.rU,{to:"/movies/".concat(r),state:{from:i},children:[(0,c.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200/").concat(e),alt:t}),t&&t.substring(0,20)]})},r)},u=e(168),s=e(5867).styled.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n\n  li {\n    width: 200px;\n    text-align: center;\n    list-style: none;\n  }\n  li > a {\n    color: #fff;\n    &:hover,\n    &:focus,\n    &:active {\n      color: #3fc9ff;\n      transition: all 400ms ease-in-out;\n    }\n  }\n"]))),f=function(n){var t=n.movies;n.id;return(0,c.jsx)(s,{children:t.map((function(n){var t=n.title,e=n.id,r=n.poster_path;return(0,c.jsx)(i,{title:t,poster_path:r,id:e},e)}))})}},2906:function(n,t,e){e.d(t,{$0:function(){return f},W2:function(){return p},h4:function(){return s},px:function(){return l}});var r,a,o,c,i=e(168),u=e(5867),s=u.styled.header(r||(r=(0,i.Z)(["\n  padding: 20px;\n  font-size: 16px;\n  display: flex;\n  justify-content: space-between;\n  background-color: #000;\n  a {\n    text-decoration: none;\n  }\n\n  nav {\n    display: flex;\n    gap: 20px;\n\n    ","\n  }\n  nav > a {\n    color: #fff;\n    text-decoration: none;\n\n    font-weight: 400;\n    font-size: 16px;\n    &:hover,\n    &:focus,\n    &:active {\n      color: #3fc9ff;\n      transition: all 400ms ease-in-out;\n    }\n  }\n\n  span {\n    font-weight: 600;\n    font-size: 20px;\n    color: #fff;\n    cursor: pointer;\n\n    &:hover,\n    &:focus,\n    &:active {\n      color: #3fc9ff;\n      transition: all 400ms ease-in-out;\n    }\n  }\n"])),""),f=u.styled.section(a||(a=(0,i.Z)(["\n  padding-top: 20px;\n"]))),p=u.styled.div(o||(o=(0,i.Z)(["\n  padding: 0px 20px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1440px;\n  overflow: hidden;\n\n  h1 {\n    color: #fff;\n    font-size: 28px;\n  }\n"]))),l=u.styled.div(c||(c=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 30px;\n"])))},5415:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),o=e(7757),c=e.n(o),i=e(4324),u=e(854),s=e(2906),f=e(2791),p=e(409),l=e(184);t.default=function(){var n=(0,f.useState)([]),t=(0,a.Z)(n,2),e=t[0],o=t[1],d=(0,f.useState)(!1),v=(0,a.Z)(d,2),h=v[0],x=v[1];return(0,f.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return x(!0),n.prev=1,n.next=4,(0,p._k)();case 4:t=n.sent,e=t.results,o(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.message);case 12:return n.prev=12,x(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,l.jsx)(s.$0,{children:(0,l.jsxs)(s.W2,{children:[(0,l.jsx)("h1",{children:"Popular movies of the day!"}),h&&(0,l.jsx)(u.a,{}),(0,l.jsx)(i.e,{movies:e})]})})}},409:function(n,t,e){e.d(t,{Bt:function(){return p},ED:function(){return s},NA:function(){return u},Wn:function(){return f},_k:function(){return i}});var r=e(5861),a=e(7757),o=e.n(a),c=e(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e61641c86f787a123ab79c28a2fcf6ec"}}),i=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie",{params:{query:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.7374bb88.chunk.js.map