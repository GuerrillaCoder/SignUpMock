(this.webpackJsonpsignup=this.webpackJsonpsignup||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(33)},,,,,function(e,t,a){},,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=29},function(e,t){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(4),o=a.n(l),r=a(1),m=(a(17),a(2));function s(e){return i.a.createElement("h3",{className:"font-medium text-xl text-center "+e.extraClasses},e.text)}var c=a(34);function d(e,t){var a=Object(n.useState)(!0),i=Object(r.a)(a,2),l=i[0],o=i[1],m=Object(n.useState)(null),s=Object(r.a)(m,2),c=s[0],d=s[1],u=Object(n.useState)(null),v=Object(r.a)(u,2),p=v[0],f=v[1];return{inProp:l,startMoveback:function(){d("prev"),o(!1)},startMoveNext:function(e=null){f(e),d("next"),o(!1)},move:function(){"prev"===c&&e(),"next"===c&&t(p)},moveDirection:c,moveValue:p}}function u({state:e,setState:t,moveNext:a,movePrev:l,entryDirection:o,prev:r,showPrev:u,showNext:v}){var p=Object(n.useRef)(null),f=Object(n.useRef)(null),x=d(l,a),b=x.inProp,g=(x.startMoveback,x.startMoveNext),h=x.move,w=(x.moveDirection,x.moveValue);function E(e){t(t=>Object(m.a)(Object(m.a)({},t),{},{accountType:e})),g(e)}return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{nodeRef:p,in:b,onExited:h,timeout:{appear:2e3,exit:750},appear:!0,classNames:{appearActive:"animate__animated animate__zoomIn",exitActive:"free"===w?"animate__animated animate__fadeOut":"animate__animated animate__fadeOutLeft"}},i.a.createElement("div",{ref:p},i.a.createElement(s,{text:"Free"}),i.a.createElement("div",{className:"w-8/12 mx-auto mt-4"},i.a.createElement("ul",{className:"list-disc"},i.a.createElement("li",{className:"mb-1"},"Verify domain ownership with Google Search Console (Required)"),i.a.createElement("li",{className:"mb-1"},"Track up to 3 domains for free"),i.a.createElement("li",{className:"mb-1"},"1,000 URLs per domain watched"),i.a.createElement("li",{className:"mb-1"},"Free Forever"))),i.a.createElement("button",{onClick:()=>E("free"),type:"submit",className:"mt-8 mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"},"Start Free",i.a.createElement("svg",{className:"ml-2 w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}))))),i.a.createElement(c.a,{nodeRef:f,in:b,onExited:h,timeout:{appear:800,exit:500},appear:!0,classNames:{appearActive:"animate__animated animate__zoomIn",exitActive:"pro"===w?"animate__animated animate__fadeOut":"animate__animated animate__fadeOutLeft"}},i.a.createElement("div",{ref:f,className:"mt-6"},i.a.createElement("div",{className:"relative mb-4"},i.a.createElement("div",{className:"absolute inset-0 flex items-center"},i.a.createElement("div",{className:"w-full border-t border-gray-300"})),i.a.createElement("div",{className:"relative flex justify-center text-sm leading-5"},i.a.createElement("span",{className:"px-2 bg-white text-gray-500"},"Or"))),i.a.createElement(s,{text:"Pro"}),i.a.createElement("div",{className:"w-8/12 mx-auto mt-4"},i.a.createElement("ul",{className:"list-disc"},i.a.createElement("li",{className:"mb-1"},"No verification required"),i.a.createElement("li",{className:"mb-1"},"Additional domains $7 each"),i.a.createElement("li",{className:"mb-1"},"10,000 links watched per domain"))),i.a.createElement("button",{type:"submit",className:"mt-8 mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",onClick:()=>E("pro")},"Choose Pro ($7)",i.a.createElement("svg",{className:"ml-2 w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}))))))}a(8);function v({moveNext:e,movePrev:t,back:a,next:n,showPrev:l=!0,showNext:o=!0}){return i.a.createElement("div",{className:"buttons mt-4"},l&&i.a.createElement("span",{className:"float-left rounded-md shadow-sm"},i.a.createElement("button",{onClick:function(){a&&t()},type:"button",className:!0===a?"inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150":"cursor-not-allowed  inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-400 bg-white  transition ease-in-out duration-150"},i.a.createElement("svg",{className:"mr-1 h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})),"Back")),o&&i.a.createElement("span",{className:"float-right rounded-md shadow-sm"},i.a.createElement("button",{type:"button",className:!0===n?"inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150":"cursor-not-allowed  inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-300 focus:outline-none  transition ease-in-out duration-150",onClick:function(){n&&e()}},"Next",i.a.createElement("svg",{className:"ml-2 -mr-1 h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})))),i.a.createElement("div",{className:"clear-both"}))}function p(e){var t,a,l,o=Object(n.useRef)(null);return i.a.createElement("div",null,e.label&&i.a.createElement("label",{htmlFor:"email",className:"block text-sm font-medium leading-5 text-gray-700"},e.label),i.a.createElement("div",{className:"mt-1 rounded-md shadow-sm z-10"},i.a.createElement("input",{onChange:e.onChange,id:e.id,type:null!==(t=e.type)&&void 0!==t?t:"text",className:"appearance-none z-10 relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5",placeholder:e.placeHolder,required:null!==(a=e.required)&&void 0!==a&&a,defaultValue:e.defaultValue,value:e.value})),i.a.createElement("div",{className:(e.hideValidation?"hidden":"")+" h-6"},i.a.createElement(c.a,{in:null!==(l=e.showValidation)&&void 0!==l&&l,mountOnEnter:!0,unmountOnExit:!0,timeout:{appear:0,enter:0,exit:800},appear:!0,nodeRef:o,classNames:{appear:"my-appear",appearActive:"animate__animated animate__fadeInDown",appearDone:"my-done-appear",enter:"my-enter",enterActive:"animate__animated animate__slideInDown",enterDone:"animate__animated animate__slideInDown",exit:"animate__animated animate__slideOutUp",exitActive:"animate__animated animate__slideOutUp",exitDone:"animate__animated animate__slideOutUp"}},i.a.createElement("div",{ref:o},i.a.createElement("p",{className:" validation text-sm mb-1 text-red-600 z-0 h-6"},e.valMessage)))))}a(31);function f(e){return!!/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(e)}function x(e){var t=Object(n.useState)("invisible"),a=Object(r.a)(t,2),l=(a[0],a[1],Object(n.useState)(e.prev)),o=Object(r.a)(l,2),s=(o[0],o[1],d(e.movePrev,e.moveNext)),u=s.inProp,x=s.startMoveback,b=s.startMoveNext,g=s.move,h=s.moveDirection,w=(s.moveValue,Object(n.useRef)(null));console.log(e.state.domains.length);var E=Object(n.useState)(e.state.domains.length>0?e.state.domains[0]:""),N=Object(r.a)(E,2),_=N[0],y=N[1],O=Object(n.useState)(f(_)),j=Object(r.a)(O,2),k=j[0],S=j[1],C=Object(n.useState)(!1),R=Object(r.a)(C,2),D=R[0],P=R[1];function M(t){var a=t.target.value;f(a)?(S(!0),e.setState(e=>Object(m.a)(Object(m.a)({},e),{},{domains:[a]}))):S(!1),y(a),clearTimeout(window.validateTimer),window.validateTimer=setTimeout(e=>{!function(e){f(e)||D||P(!0),f(e)&&D&&P(!1)}(e)},1e3,a)}return i.a.createElement(c.a,{nodeRef:w,in:u,onExited:g,timeout:{appear:2e3,exit:1e3},appear:!0,classNames:{appearActive:"next"===e.entryDirection?"animate__animated animate__slideInRight":"animate__animated animate__slideInLeft",exitActive:"next"===h?"animate__animated animate__fadeOutLeft":"animate__animated animate__fadeOutRight"}},i.a.createElement("div",{ref:w},i.a.createElement("h3",{className:"font-medium text-xl text-center mb-4"},"Enter Domain"),i.a.createElement("p",{className:"mb-4"},"Enter the domain that you want to monitor backlinks for (ownership verification with GSC is required for free accounts)"),i.a.createElement(p,{showValidation:D,valMessage:"Please enter a valid domain to continue",placeHolder:"https://example.com",label:"Domain",onChange:e=>M(e),value:_}),i.a.createElement("p",{className:"mb-8 text-sm italic"},"You will be able to add in more domains to track later"),i.a.createElement(v,{back:!0,next:k,movePrev:x,moveNext:b})))}var b=a(9);function g({state:e,setState:t,moveNext:a,movePrev:l,entryDirection:o,prev:u,showPrev:f,showNext:x}){var g=Object(n.useState)(!1),h=Object(r.a)(g,2),w=h[0],E=h[1],N=Object(n.useState)(!1),_=Object(r.a)(N,2),y=_[0],O=_[1],j=Object(n.useState)(null),k=Object(r.a)(j,2),S=k[0],C=k[1],R=Object(n.useState)(null),D=Object(r.a)(R,2),P=D[0],M=D[1],A=Object(n.useRef)(null),L=d(l,a),T=L.inProp,V=L.startMoveback,z=L.startMoveNext,I=L.move,B=L.moveDirection;L.moveValue;return i.a.createElement(c.a,{nodeRef:A,in:T,onExited:I,timeout:{appear:800,exit:500},appear:!0,classNames:{appearActive:"next"===o?"animate__animated animate__slideInRight":"animate__animated animate__slideInLeft",exitActive:"next"===B?"animate__animated animate__fadeOutLeft":"animate__animated animate__fadeOutRight"}},i.a.createElement("div",{ref:A},i.a.createElement(s,{text:"Create a login to add links to watch"}),i.a.createElement("div",{className:"mt-6"},i.a.createElement("form",{className:"mb-8",action:"#",method:"POST"},i.a.createElement("div",null,i.a.createElement(p,{showValidation:!1===w&&null!==S,valMessage:S,defaultValue:e.email,type:"email",id:"email",required:!0,label:"Email Address",onChange:e=>function(e){var a=e.target.value;t(e=>Object(m.a)(Object(m.a)({},e),{},{email:a}));var n=b.validate(a);E(n),clearTimeout(window.validateTimer),window.validateTimer=setTimeout(e=>{e||C("Please enter a valid email address")},1e3,n)}(e)})),i.a.createElement("div",{className:""},i.a.createElement(p,{showValidation:!1===y&&null!==P,valMessage:P,defaultValue:e.password,type:"password",id:"password",required:!0,label:"Password",onChange:a=>function(a){var n=a.target.value;console.log(Object(m.a)(Object(m.a)({},e),{},{password:n})),t(e=>Object(m.a)(Object(m.a)({},e),{},{password:n}));var i=n.length>=6;O(i),clearTimeout(window.validateTimer),window.validateTimer=setTimeout(e=>{e||M("Password must be 6 or more characters")},1e3,i)}(a)}))),i.a.createElement(v,{back:!0,next:w&&y,movePrev:()=>V(),moveNext:()=>z()}),i.a.createElement("div",{className:"mt-6"},i.a.createElement("div",{className:"relative"},i.a.createElement("div",{className:"absolute inset-0 flex items-center"},i.a.createElement("div",{className:"w-full border-t border-gray-300"})),i.a.createElement("div",{className:"relative flex justify-center text-sm leading-5"},i.a.createElement("span",{className:"px-2 bg-white text-gray-500"},"Or continue with"))),i.a.createElement("div",{className:"text-center w-3/4 mx-auto"},i.a.createElement("img",{onClick:()=>z(),className:"mx-auto h-14 mt-3",src:"img/google-signin.png",alt:""}),i.a.createElement("img",{onClick:()=>z(),className:"mx-auto h-12 mt-3",src:"img/facebook_login.png",alt:""}),i.a.createElement("img",{onClick:()=>z(),className:"mx-auto mt-3",src:"img/signin-button-linkedin.png",alt:""}),i.a.createElement("img",{onClick:()=>z(),className:"mx-auto mt-3",src:"img/sign-in-with-twitter.png",alt:""}))))))}function h({state:e,setState:t,moveNext:a,movePrev:l,entryDirection:o,prev:r,showPrev:m,showNext:u}){var v=d(l,a),p=v.inProp,f=(v.startMoveback,v.startMoveNext),x=v.move,b=(v.moveDirection,v.moveValue,Object(n.useRef)(null));return i.a.createElement(c.a,{nodeRef:b,in:p,onExited:x,timeout:{appear:800,exit:500},appear:!0,classNames:{appearActive:"animate__animated animate__fadeIn",exitActive:"animate__animated animate__bounceOutUp"}},i.a.createElement("div",{ref:b},i.a.createElement(s,{text:"You may import up to 3 domains from GSC for free."}),i.a.createElement("img",{className:"mx-auto w-1/2 m-8",src:"img/gsc.png",alt:""}),i.a.createElement("div",{className:"text-center"},i.a.createElement("button",{onClick:()=>f(),className:"mx-auto inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"},"Import",i.a.createElement("svg",{className:"ml-2 -mr-1 h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}))))))}function w({checked:e,disabled:t,key:a,label:n,selected:l,name:o,value:r,onChange:m,labelMaxChar:s}){return i.a.createElement("label",{key:a,className:""},i.a.createElement("input",{id:o,name:o,value:r,onChange:e=>{e.persist(),m(e)},type:"checkbox",className:"form-checkbox ml-2 h-5 w-5 text-gray-600",disabled:t,checked:e}),i.a.createElement("span",{className:"ml-2 "+(e?"font-semibold ":"")+(t?"text-gray-400":"text-gray-700"),title:n},function(e){var t;return null===(t=e.length>s)||void 0===t||t?e.slice(0,null!==s&&void 0!==s?s:20)+"...":e}(n)))}function E({state:e,setState:t,moveNext:a,movePrev:l,entryDirection:o,prev:r,showPrev:u,showNext:v}){var p=d(l,a),f=p.inProp,x=(p.startMoveback,p.startMoveNext),b=p.move,g=p.moveDirection,h=(p.moveValue,Object(n.useRef)(null));function E(e){console.log(e.target.name),console.log(e.target.value),console.log(e.target.checked),e.target.checked?t(t=>Object(m.a)(Object(m.a)({},t),{},{domains:[...t.domains,e.target.value]})):t(t=>Object(m.a)(Object(m.a)({},t),{},{domains:t.domains.filter(t=>t!==e.target.value)})),t(e=>Object(m.a)(Object(m.a)({},e),{},{urls:[]}))}var N=3-e.domains.length,_=e.domains.length>0?"inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150":"cursor-not-allowed  inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-300 focus:outline-none  transition ease-in-out duration-150",y=e.domains.length>=3?"":"opacity-0";return i.a.createElement(c.a,{nodeRef:h,in:f,onExited:b,timeout:{appear:800,exit:500},appear:!0,classNames:{appearActive:"next"===o?"animate__animated animate__slideInRight":"animate__animated animate__slideInLeft",exitActive:"next"===g?"animate__animated animate__fadeOutLeft":"animate__animated animate__fadeOutRight"}},i.a.createElement("div",{ref:h,className:""},i.a.createElement(s,{text:N+" Free domains remaining",extraClasses:"mb-4"}),i.a.createElement("div",{className:"p-4 border border-gray-300 max-h-300 scroll-y overflow-hidden overflow-y-auto"},["example1.com","exampleofaverylongdomainnamewhoevenhasadomainnamethislonglikeseriouslywtf.com","example3.com","example4.com","example5.com","example6.com","example7.com","example8.com","example9.com","example10.com","example11.com","example12.com","example13.com","example14.com","example15.com","example16.com"].map((t,a)=>{var n=e.domains.indexOf(t)>-1;return i.a.createElement("div",{key:a,className:"odd:bg-gray-200  p-2"},i.a.createElement(w,{checked:n,disabled:!n&&0===N,labelMaxChar:26,label:t,name:"checkbox_"+t,value:t,onChange:E}))})),i.a.createElement("p",{className:"italic mt-3 w-2/3 mx-auto transition-all duration-500 "+y},"Domain limit can be increased for $7 per domain after setup"),i.a.createElement("div",{className:"text-center mt-6"},i.a.createElement("button",{onClick:function(t){e.domains.length>0&&x()},className:_},"Add Domains",i.a.createElement("svg",{className:"ml-2 -mr-1 h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}))))))}function N({state:e}){console.log(e);var t=Object(n.useRef)(null);return i.a.createElement(c.a,{nodeRef:t,in:!0,timeout:{appear:2e3,exit:1e3},appear:!0,classNames:{appearActive:"animate__animated animate__fadeIn"}},i.a.createElement("div",{ref:t,className:"text-center"},i.a.createElement("p",null,"(Remember to confirm your email address by clicking the link in your email)"),i.a.createElement("div",{className:"text-left mt-6 leading-10"},i.a.createElement("h2",{className:"text-lg font-bold mb-4"},"Account Details:"),i.a.createElement("p",null,i.a.createElement("strong",null,"User: "),e.email),i.a.createElement("p",null,i.a.createElement("strong",null,"Pass: "),"******"),i.a.createElement("p",null,i.a.createElement("strong",null,"Type: "),"Free"),i.a.createElement("h2",null,i.a.createElement("strong",null,"Domains:")),i.a.createElement("ul",{className:"list-disc list-inside pl-8"},e.domains.map(e=>i.a.createElement("li",{className:"break-all",key:e},e)))),i.a.createElement("button",{className:"mt-8 inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"},"Go To Dashboard",i.a.createElement("svg",{className:"ml-2 -mr-1 h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})))))}var _=a(10);function y({values:e,labelCharacters:t,onSelect:a}){var l=Object(n.useState)(!1),o=Object(r.a)(l,2),m=o[0],s=o[1],c=Object(n.useState)(e),d=Object(r.a)(c,2),u=d[0],v=d[1],p=Object(n.useState)(e.find(e=>!0===e.selected)),f=Object(r.a)(p,2),x=f[0],b=f[1],g=Object(n.useState)(null!==t&&void 0!==t?t:45),h=Object(r.a)(g,2),w=h[0];h[1];function E(e){return e.length>w?e.slice(0,w)+"...":e}function N(e){var t=e.target.dataset.value;v(e=>e.map(e=>(e.value==x.value&&(e.selected=!1),e.value===t&&(e.selected=!0,b(e)),e)))}return Object(n.useEffect)(()=>{a(x)},[x]),i.a.createElement("div",{className:"mt-4 relative inline-block text-left",className:"relative inline-block text-left"},i.a.createElement("div",null,i.a.createElement("span",{className:"rounded-md shadow-sm"},i.a.createElement("button",{onFocus:()=>s(!0),onBlur:()=>s(!1),type:"button",className:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150",id:"options-menu","aria-haspopup":"true","aria-expanded":"true"},E(x.value),i.a.createElement("svg",{className:"-mr-1 ml-2 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},i.a.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))))),i.a.createElement("div",{className:(m?"visible":"invisible")+" origin-top-right absolute left-0 mt-2 min-w-56 rounded-md shadow-lg"},i.a.createElement("div",{className:"rounded-md bg-white shadow-xs"},i.a.createElement("div",{className:"py-1",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"},u.map((e,t)=>i.a.createElement("a",{onMouseDown:N,key:t,"data-label":e.label,"data-value":e.value,href:"#",className:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",role:"menuitem"},E(e.label),e.selected&&i.a.createElement("svg",{className:"w-4 h-4 float-right",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"}))))))))}function O({state:e,setState:t,moveNext:a,movePrev:l,entryDirection:o,showSelect:s=!0}){var u=d(l,a),f=u.inProp,x=u.startMoveback,b=u.startMoveNext,g=u.move,h=u.moveDirection,w=(u.moveValue,Object(n.useRef)(null)),E=Object(n.useState)({label:e.domains[0],value:e.domains[0],selected:!0}),N=Object(r.a)(E,2),O=N[0],j=N[1],k=Object(n.useState)(()=>{var t,a,n=null!==(t=Object(m.a)({},e.links))&&void 0!==t?t:{},i=Object(_.a)(e.domains);try{for(i.s();!(a=i.n()).done;){var l=a.value;n.hasOwnProperty(l)||(n[l]={urls:"",provider:""})}}catch(o){i.e(o)}finally{i.f()}return n}),S=Object(r.a)(k,2),C=S[0],R=S[1],D=e.domains.map((e,t)=>({label:e,value:e,selected:0===t}));return i.a.createElement(c.a,{nodeRef:w,in:f,onExited:g,timeout:{appear:2e3,exit:1e3},appear:!0,classNames:{appearActive:"next"===o?"animate__animated animate__slideInRight":"animate__animated animate__slideInLeft",exitActive:"next"===h?"animate__animated animate__fadeOutLeft":"animate__animated animate__fadeOutRight"}},i.a.createElement("div",{ref:w,className:""},console.log("component render"),s&&i.a.createElement(y,{values:D,onSelect:function(e){j(e)},labelCharacters:38}),i.a.createElement("p",{className:"mt-4 text-md font-semibold"},"Enter URL(s) containing backlinks to your site"),i.a.createElement("p",{className:"text-sm italic"},"(You can skip this step if you like by clicking next)"),i.a.createElement("textarea",{onChange:function(a){var n=a.target.value;R(e=>{var t=Object(m.a)({},C);return t[O.value].urls=n,t}),t(t=>Object(m.a)(Object(m.a)({},e),{},{links:C}))},placeholder:"https://example1.com/my_link_is_here.html\nhttps://example2.com/my_link_is_also_here.html",value:C[O.value].urls,name:"",id:"",cols:"",rows:"10",className:"mt-3 resize-none rounded-md shadow-sm inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"}),i.a.createElement("p",{className:"text-sm italic"},"(We will check up to 1,000 per day for free)"),i.a.createElement("p",{className:"mt-4 text-md font-semibold"},"Tag these URLs (optional)"),i.a.createElement(p,{placeHolder:"ABC Link Vendor",hideValidation:!0,value:C[O.value].provider,onChange:function(a){var n=a.target.value;R(e=>{var t=Object(m.a)({},C);return t[O.value].provider=n,t}),t(t=>Object(m.a)(Object(m.a)({},e),{},{links:C}))}}),i.a.createElement("p",{className:"text-sm italic mb-8"},"(If you add a provider name here later on you can run reports just on this provider)"),i.a.createElement(v,{back:!0,next:!0,movePrev:x,moveNext:b})))}function j(){var e=Object(n.useState)({title:"Create Account",name:null,accountType:null,domains:[],links:{},email:null,password:null,gscToken:null}),t=Object(r.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)("SelectType"),m=Object(r.a)(o,2),s=m[0],c=m[1],d=Object(n.useState)(null),v=Object(r.a)(d,2),p=(v[0],v[1]),f=Object(n.useState)({name:""}),b=Object(r.a)(f,2),w=(b[0],b[1],Object(n.useState)([])),_=Object(r.a)(w,2),y=_[0],j=_[1],k=Object(n.useState)("next"),S=Object(r.a)(k,2),C=S[0],R=(S[1],{SelectType:{title:"Get Started",component:i.a.createElement(u,{prev:!1,next:!0,movePrev:P,moveNext:D,state:a,setState:l,entryDirection:C}),free:"CreateAccount",pro:"EnterDomain",height:{0:"600px"}},EnterDomain:{title:"Get Started",next:"TrackBacklinksPro",component:i.a.createElement(x,{prev:!0,next:!1,movePrev:P,moveNext:D,state:a,setState:l,entryDirection:C}),height:{0:"370px"}},CreateAccount:{title:"Create Account",component:i.a.createElement(g,{prev:!0,next:!1,movePrev:P,moveNext:D,state:a,setState:l,entryDirection:C}),next:"GscVerify",height:{0:"640px"}},GscVerify:{title:"Import Domains",component:i.a.createElement(h,{prev:!1,next:!1,movePrev:P,moveNext:D,state:a,setState:l,entryDirection:C}),next:"SelectGscDomains",height:{0:"310px"}},SelectGscDomains:{title:"Select Domains",component:i.a.createElement(E,{prev:!1,showPrev:!1,next:!1,movePrev:P,moveNext:D,state:a,setState:l,entryDirection:C}),next:"TrackBacklinksFree",height:{0:"540px"}},SetupComplete:{title:"Setup Complete",component:i.a.createElement(N,{state:a}),height:{0:"580px"}},TrackBacklinksFree:{title:"Add URLs",component:i.a.createElement(O,{movePrev:P,moveNext:D,state:a,setState:l,entryDirection:C}),next:"SetupComplete",height:{0:"615px"}},TrackBacklinksPro:{title:"Add URLs",component:i.a.createElement(O,{showSelect:!1,movePrev:P,moveNext:D,state:a,setState:l,entryDirection:C}),next:"SetupComplete",height:{0:"600px"}}});function D(e=null){j(e=>[...e,s]),c(null===e?e=>R[e].next:t=>R[t][e]),p(e)}function P(){j(e=>{var t=[...e];return t.pop(),t}),c(y[y.length-1])}var M={height:function(e){var t="";for(var a in e)a<window.innerWidth&&(t=e[a]);return t}(R[s].height)};return i.a.createElement("div",{className:"min-h-screen bg-gray-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8"},i.a.createElement("div",{className:"sm:mx-auto sm:w-full sm:max-w-md"},i.a.createElement("img",{className:"mx-auto h-12 w-auto",src:"https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg",alt:"Workflow"}),i.a.createElement("h2",{className:"mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"},R[s].title)),i.a.createElement("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},i.a.createElement("div",{style:M,className:"transition-all duration-500 ease-in-out  overflow-hidden bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},(console.log("Current slide: "+s),R[s].component),console.log("render"))))}var k=document.getElementById("root");o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j,null)),k)}],[[12,1,2]]]);
//# sourceMappingURL=main.32aed7fc.chunk.js.map