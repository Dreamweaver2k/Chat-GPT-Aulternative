(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports={footer:"Footer_footer__24AtN",title:"Footer_title__1FLQb",description:"Footer_description__3LVMB",footerlink:"Footer_footerlink__WfOgR"}},37:function(e,t,n){e.exports={skipLink:"NavBar_skipLink__29d8Q"}},41:function(e,t,n){e.exports={warningPosition:"WarningMessage_warningPosition__1rgtT"}},42:function(e,t,n){e.exports=n.p+"static/media/GreyBox.4d3d89fb.svg"},44:function(e,t,n){e.exports=n(92)},49:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(36),i=n.n(o),c=n(1),l=(n(49),n(8)),s=n(37),u=n.n(s),m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:u.a.skipLink},r.a.createElement("a",{href:"#mainContent"},"Skip to Main Content")),r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light border-bottom justify-content-between"},r.a.createElement(l.b,{className:"navbar-brand",to:"/",role:"heading","aria-level":"1"},"Chat-GPT-Aulternative"),r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(l.b,{className:"nav-item nav-link active",to:"Chat-GPT-Aulternative"},"Home"),r.a.createElement(l.b,{className:"nav-item nav-link active",to:"Questions"},"Questions"))))},f=n(10),h=n.n(f),p=function(){return r.a.createElement("footer",{className:h.a.footer},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement("div",{className:"col-8 col-md-5"},r.a.createElement("h5",{className:h.a.title},"Chat-GPT-Aulternative"),r.a.createElement("p",{className:h.a.description},"Premium Chat-GPT for high volume times.")),r.a.createElement("div",{className:"col-2"},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{className:h.a.footerlink,href:"https://chat.openai.com/chat",target:"_blank"},"Chat-GPT")),r.a.createElement("li",null,r.a.createElement("a",{className:h.a.footerlink,href:"/Questions"},"Chat-GPT-Aulternative")))))))},d=function(){return r.a.createElement("main",{id:"mainContent"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center mt-5 p-0"},r.a.createElement("h3",null,"Chat-GPT-Aulternative")),r.a.createElement("div",null,r.a.createElement("p",null,"To access Chat-GPT functionality, go to the questions tab. There you will be prompted to ask questions. Please note that these questions will not be saved after your session is over."),r.a.createElement("b",null,"This is only intended to be used when a session cannot be accessed due to high traffic"))))},v=n(43),g=n(39),y=n(4),E=function(e){var t=e.item,n=e.deleteItem;return r.a.createElement("div",{className:"col-12 mb-3 border"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-11"},r.a.createElement("b",{className:"mt-3"},t.text)),r.a.createElement("div",{className:"col-11"},r.a.createElement("p",null,t.response.split("\n").map(function(e,t){return r.a.createElement(r.a.Fragment,{key:t},e,r.a.createElement("br",null))}))),r.a.createElement("div",{className:"col-1"},r.a.createElement("button",{type:"button",className:"close py-2","data-dismiss":"alert","aria-label":"delete",alt:"delete",onClick:function(){return n(t)}},r.a.createElement("div",{"aria-hidden":"true"},"\xd7")))))},b=["davinci","curie","babbage","jules","ada"];var w=function(e){var t=e.onModelChange,n=Object(a.useState)("davinci"),o=Object(y.a)(n,2),i=o[0],c=o[1];return r.a.createElement("select",{value:i,onChange:function(e){c(e.target.value),t(e.target.value)}},b.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))},x=function(e){var t=Object(a.useState)(""),n=Object(y.a)(t,2),o=n[0],i=n[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addItem(o),i("")},className:"input-group my-3"},r.a.createElement("input",{type:"text",onChange:function(e){i(e.target.value)},value:o,name:"textField",className:"form-control",placeholder:"Add text here...","aria-label":"Add text here..."}),r.a.createElement("button",{type:"submit",className:"btn btn-primary ml-2"},"Submit"))},N=n(40),O=n.n(N),j=n(41),k=n.n(j),L=function(e){var t=e.open,n=e.text,a=e.onWarningClose;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:O()("alert","alert-warning","ml-3",k.a.warningPosition),role:"alert"},n,r.a.createElement("button",{onClick:a,className:"close ml-2","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))},_="/api/grid",C="Please enter a valid message";var T=function(){var e=Object(a.useState)(0),t=Object(y.a)(e,2),n=t[0],o=t[1],i=Array.from({length:11},function(e,t){return 100*t}).map(function(e){return r.a.createElement("option",{key:e,value:e},e)});return r.a.createElement("select",{id:"token-select",value:n,onChange:function(e){o(e.target.value)}},i)};function P(){P=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new j(r||[]);return a(i,"_invoke",{value:w(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(_){return{type:"throw",arg:_}}}e.wrap=s;var m={};function f(){}function h(){}function p(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(k([])));g&&g!==t&&n.call(g,o)&&(d=g);var y=p.prototype=f.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var r;a(this,"_invoke",{value:function(a,o){function i(){return new t(function(r,i){!function a(r,o,i,c){var l=u(e[r],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){a("next",e,i,c)},function(e){a("throw",e,i,c)}):t.resolve(m).then(function(e){s.value=e,i(s)},function(e){return a("throw",e,i,c)})}c(l.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}})}function w(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return L()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=u(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function x(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=p,a(y,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:h,configurable:!0}),h.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(b.prototype),l(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new b(s(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=k,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}n(58).config();var G=n(63),M=G.Configuration,S=new(0,G.OpenAIApi)(new M({apiKey:"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"})),F=0,A=function(){var e=Object(a.useState)([]),t=Object(y.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)({warningMessageOpen:!1,warningMessageText:""}),c=Object(y.a)(i,2),l=c[0],s=c[1],u=Object(a.useState)("davinci"),m=Object(y.a)(u,2),f=(m[0],m[1]),h=Object(a.useState)(1e3),p=Object(y.a)(h,2),d=p[0],b=p[1];var N=function(e){console.log(e.text)},O=function(){var e=Object(g.a)(P().mark(function e(t){var a,r;return P().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return s({warningMessageOpen:!0,warningMessageText:C}),e.abrupt("return");case 3:return console.log("getting response"),e.next=6,S.createCompletion({model:"text-davinci-003",prompt:t,temperature:0,max_tokens:d});case 6:a=e.sent,console.log(a.data.choices[0].text),r={id:F,text:t,response:a.data.choices[0].text},F++,o([r].concat(Object(v.a)(n)));case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("main",{id:"mainContent",className:"container"},r.a.createElement("div",{className:"row justify-content-center py-5"},r.a.createElement("h3",null,"Question List")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 p-0"},r.a.createElement(x,{addItem:O})),r.a.createElement("div",{style:{marginBottom:"20px"}},r.a.createElement(w,{onModelChange:function(e){f(e)}}),r.a.createElement(T,{handleChange:function(e){b(e)}})),n.map(function(e){return r.a.createElement(E,{key:e.id,item:e,deleteItem:N})}),r.a.createElement(L,{open:l.warningMessageOpen,text:l.warningMessageText,onWarningClose:function(){s({warningMessageOpen:!1,warningMessageText:""})}})))},I=n(42),B=n.n(I),Q=function(e){var t=e.item;return r.a.createElement("div",{className:"col-md-4 col-sm-12 p-5"},r.a.createElement("img",{src:B.a,alt:"Default Grey Box",className:"mb-3"}),r.a.createElement("h3",null,t.header),r.a.createElement("p",null,t.shortDescription))},D=function(){var e=Object(a.useState)([]),t=Object(y.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)({warningMessageOpen:!1,warningMessageText:""}),c=Object(y.a)(i,2),l=c[0],s=c[1];return r.a.useEffect(function(){fetch(_).then(function(e){if(!e.ok)throw Error(e.statusText);return e.json()}).then(function(e){o(e)}).catch(function(e){return s({warningMessageOpen:!0,warningMessageText:"Request to get grid text failed: ".concat(e)})})},[]),r.a.createElement("main",{id:"mainContent"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center mt-5 p-0"},r.a.createElement("h3",null,"Grid")),r.a.createElement("div",{className:"row justify-content-around text-center pb-5"},n.map(function(e){return r.a.createElement(Q,{key:e.id,item:e})}))),r.a.createElement(L,{open:l.warningMessageOpen,text:l.warningMessageText,onWarningClose:function(){s({warningMessageOpen:!1,warningMessageText:""})}}))},W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/Chat-GPT-Aulternative",component:d}),r.a.createElement(c.a,{path:"/Chat-GPT-Aulternative/Questions",component:A}),r.a.createElement(c.a,{path:"/Chat-GPT-Aulternative/Grid",component:D})),r.a.createElement(p,null))},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)})};n(91);i.a.render(r.a.createElement(l.a,null,r.a.createElement(W,null)),document.getElementById("root")),q()}},[[44,1,2]]]);
//# sourceMappingURL=main.00c34ea4.chunk.js.map