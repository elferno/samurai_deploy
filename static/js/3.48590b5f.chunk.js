(this.webpackJsonpsamurai_way=this.webpackJsonpsamurai_way||[]).push([[3],{296:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return a}))},297:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n.d(e,"a",(function(){return r}))},298:function(t,e,n){"use strict";function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){return function(){var e,n=a(t);if(r()){var c=a(this).constructor;e=Reflect.construct(n,arguments,c)}else e=n.apply(this,arguments);return o(this,e)}}n.d(e,"a",(function(){return i}))},299:function(t,e,n){"use strict";function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}n.d(e,"a",(function(){return r}))},305:function(t,e,n){t.exports={message:"Message_message__2pcTQ"}},306:function(t,e,n){t.exports={messages:"Messages_messages__2N6ds"}},307:function(t,e,n){t.exports={editor:"Editor_editor__2-RA8",add_text:"Editor_add_text__15WMv",add_button:"Editor_add_button__3lpM-"}},308:function(t,e,n){t.exports={dialog:"Dialog_dialog__Sq8fI"}},309:function(t,e,n){t.exports={dialogs:"DialogList_dialogs__29n6D"}},310:function(t,e,n){t.exports={wrapper:"Dialogs_wrapper__mDi1v"}},314:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(0),c=n.n(r),o=n(296),i=n(297),u=n(299),s=n(298),l=n(15),f=n(11),b=function(t){var e=function(e){Object(u.a)(a,e);var n=Object(s.a)(a);function a(){return Object(o.a)(this,a),n.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return!1===this.props.isAuth?c.a.createElement(f.a,{to:"/"}):c.a.createElement(t,this.props)}}]),a}(c.a.Component);return Object(l.b)((function(t){return{isAuth:t.auth.isAuth}}))(e)},m=n(3),p=n.n(m),d=n(305),y=n.n(d),_=Object(a.a)(Object(a.a)({},p.a),y.a),g=function(t){var e=t.text;return c.a.createElement("div",{className:_.message},e)},O=n(306),j=n.n(O),E=Object(a.a)(Object(a.a)({},p.a),j.a),h=function(t){var e=t.messages,n=t.messagesBlockStyle,a=e.map((function(t){return c.a.createElement(g,Object.assign({key:t.id},t))}));return c.a.createElement("div",{className:"".concat(E.messages," ").concat(E.block),style:n},a)},v=Object(l.b)((function(t){return{messagesBlockStyle:{minHeight:(window.innerHeight||document.element.clientHeight||document.body.clientHeight)-230},messages:t.dialogs.messages}}))(h),S=n(125),w=n(126),x=n(69),k=n(62),N=n(307),R=n.n(N),D=Object(a.a)(Object(a.a)({},p.a),R.a),M=[Object(x.b)("ENTER YOUR MESSAGE"),Object(x.a)(300)],A=Object(w.a)({form:"sendMessage"})((function(t){return c.a.createElement("form",{onSubmit:t.handleSubmit,className:"".concat(D.block," ").concat(D.editor)},c.a.createElement("div",{className:D.add_text},c.a.createElement(S.a,{name:"text",component:k.c,validate:M})),c.a.createElement("button",{className:"".concat(D.button," ").concat(D.add_button)},"SEND",c.a.createElement("span",null," MESSAGE")))})),P=n(104),H=Object(l.b)(null,{onSubmit:function(t){return Object(P.a)(t,"sendMessage")}})(A),T=n(9),B=n(308),C=n.n(B),G=Object(a.a)(Object(a.a)({},p.a),C.a),J=function(t){var e=t.id,n=t.name,a=t.active,r={to:"/dialogs/"+e};return void 0!==a&&a&&(r.className=G.active_link),c.a.createElement(T.b,r,n)},q=n(309),I=n.n(q),L=Object(a.a)(Object(a.a)({},p.a),I.a),Q=function(t){var e=t.contacts.map((function(t){return c.a.createElement(J,Object.assign({key:t.id},t))}));return c.a.createElement("div",{className:"".concat(L.block," ").concat(L.default_a," ").concat(L.dialogs)},e)},U=Object(l.b)((function(t){return{contacts:t.dialogs.contacts}}))(Q),W=n(310),Y=n.n(W),z=Object(a.a)(Object(a.a)({},p.a),Y.a);e.default=b((function(){return c.a.createElement("div",{className:z.wrapper},c.a.createElement(v,null),c.a.createElement(H,null),c.a.createElement(U,null))}))}}]);
//# sourceMappingURL=3.48590b5f.chunk.js.map