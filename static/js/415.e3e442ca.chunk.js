"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{308:function(n,t,r){r.d(t,{Aj:function(){return p},IQ:function(){return h},Tn:function(){return m},XT:function(){return w},s_:function(){return l}});var e=r(861),u=r(757),a=r.n(u),i=r(243),s="https://api.themoviedb.org/3/",c="?api_key=66413c0c73bd8d6f9d602d8ba291e1c5",o="&language=en-US";function p(){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)(s+"trending/all/day"+c);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)(s+"movie/"+t+c+o);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)(s+"movie/"+t+"/credits"+c+o);case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)(s+"movie/"+t+"/reviews"+c+o);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)(s+"search/movie"+c+o+"/&query="+t+"&page=1&include_adult=false");case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},522:function(n,t,r){r.d(t,{Z:function(){return o}});var e,u=r(689),a=r(87),i=r(168),s=r(444).ZP.ol(e||(e=(0,i.Z)(["\n  padding: 20px;\n  li {\n    margin-bottom: 5px;\n  }\n  a {\n    text-decoration: none;\n    cursor: pointer;\n    font-weight: 600;\n    line-height: 2;\n  }\n"]))),c=r(184);var o=function(n){var t=n.list,r=(0,u.TH)();return(0,c.jsx)(s,{children:t&&t.map((function(n){var t=n.title,e=n.name,u=n.id;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/"+u,state:{from:r},children:t||e})},u)}))})}},415:function(n,t,r){r.r(t);var e=r(439),u=r(791),a=r(522),i=r(308),s=r(184);t.default=function(){var n=(0,u.useState)(null),t=(0,e.Z)(n,2),r=t[0],c=t[1];return(0,u.useEffect)((function(){(0,i.Aj)().then(c)}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:"Trading today"}),(0,s.jsx)(a.Z,{list:r})]})}}}]);
//# sourceMappingURL=415.e3e442ca.chunk.js.map