(this.webpackJsonpsamurai_way=this.webpackJsonpsamurai_way||[]).push([[4],{298:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},299:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))},300:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return function(){var t,n=a(e);if(r()){var o=a(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return i(this,t)}}n.d(t,"a",(function(){return c}))},301:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",(function(){return r}))},302:function(e,t,n){e.exports={profile_settings:"ProfileSettings_profile_settings__iQdOV",edit_mode:"ProfileSettings_edit_mode__iVy1g",buttons:"ProfileSettings_buttons__1MjxD",settings_input:"ProfileSettings_settings_input__2eN4C"}},303:function(e,t,n){e.exports={info:"UserInfo_info__2TajZ",info_content:"UserInfo_info_content__Q3ZKo",status:"UserInfo_status__XomkX",edit_info:"UserInfo_edit_info__XsKuT"}},304:function(e,t,n){e.exports={intro:"ProfileInfo_intro__2CLq8",stats:"ProfileInfo_stats__2gjro",stats_container:"ProfileInfo_stats_container__2nzzj"}},305:function(e,t,n){e.exports={post_create:"PostCreate_post_create__3xCaw",add_text:"PostCreate_add_text__29KTD",add_error:"PostCreate_add_error__2EGg5",add_button:"PostCreate_add_button__3XBvk"}},306:function(e,t,n){e.exports=n.p+"static/media/error_404.61939259.png"},317:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n(20),c=n(10),l=n(25),u=n(39),s=n(67),f=n(1),m=n(63),b=n(5),p=n.n(b),d=function(e){var t=e.id,n=e.banner;if(n){var a={backgroundImage:"URL('https://fishup.fun/api/users/".concat(t,"/").concat(n,".jpg')")};return r.a.createElement("div",{className:p.a.block,style:a,role:"banner"})}return null},_=n(69),E=function(e){var t=e.website,n=e.noContent;return t?r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"".concat(p.a.inline_a," ").concat(p.a.colored_a)},"active link"):n},v=n(298),P=n(299),y=n(301),O=n(300),h=n(128),j=n(129),g=n(53),w=n(72),S=n(61),C=n(94),N=n(302),k=n.n(N),I=Object(f.a)(Object(f.a)({},p.a),k.a),x={name:[Object(w.b)("ENTER YOUR NAME"),Object(w.a)(20)],status:[Object(w.a)(50)],country:[Object(w.a)(30)],city:[Object(w.a)(20)],education:[Object(w.a)(20)],website:[Object(w.a)(50)],dob:[Object(w.a)(10)]},A=function(e){Object(y.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).el=document.createElement("div"),a}return Object(P.a)(n,[{key:"componentDidMount",value:function(){this.portal=document.getElementById("settings-portal"),this.portal.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){this.portal.removeChild(this.el)}},{key:"close",value:function(){this.props.reset(),this.props.toggleSS()}},{key:"render",value:function(){var e=this,t=this.props,n=t.editMode,a=t.ownProfile,o=t.isSavingProfile,i=t.handleSubmit,c=t.onSubmit,l=Object.keys(this.props.initialValues).map((function(e,t){return r.a.createElement(F,{name:e,key:t})})),u=I.profile_settings;return n&&(u+=" "+I.edit_mode),o&&(u+=" "+I.cc),Object(g.createPortal)(r.a.createElement("form",{onSubmit:i((function(t){return c(t,e.close.bind(e))})),className:u},r.a.createElement(C.a,{isLoading:o,noContent:!a,noContentFiller:null,clearContent:!0},r.a.createElement("div",{className:I.buttons},r.a.createElement("button",{type:"button",onClick:function(){return e.close()},className:I.button},"CLOSE"),r.a.createElement("button",{type:"submit",className:I.button},"SAVE")),l)),this.el)}}]),n}(r.a.Component),F=function(e){var t=e.name;return r.a.createElement(h.a,{name:t,type:"text",label:"dob"===t?"date of birth":t,extraClass:I.settings_input,component:S.b,validate:x[t]})},R=Object(j.a)({form:"profileSettings",enableReinitialize:!0})(A),T=n(303),D=n.n(T),U=Object(f.a)(Object(f.a)({},p.a),D.a),z=function(e){var t=Object(a.useState)(!1),n=Object(_.a)(t,2),o=n[0],i=n[1],c=function(){i(!o)},l=e.userInfo,u=e.ownProfile,s=e.saveProfile,f=e.isSavingProfile,m=l.dob,b=l.name,p=l.status,d=l.website,v=l.country,P=l.city,y=l.education;return r.a.createElement("div",{className:U.info},u&&r.a.createElement("div",{onClick:c,className:"".concat(U.edit_info," ").concat(U.cc)},"\u270e"),u&&r.a.createElement(R,{initialValues:l,onSubmit:s,ownProfile:u,toggleSS:c,saveProfile:s,editMode:o,isSavingProfile:f}),r.a.createElement("h1",{className:U.ff_header},b),r.a.createElement("div",{className:U.status},p||r.a.createElement("i",null,"your status could be here")),r.a.createElement("div",{className:U.info_content},r.a.createElement("p",null,r.a.createElement("b",null,"Date of birth"),r.a.createElement("i",null,":"),r.a.createElement("u",null,m)),r.a.createElement("p",null,r.a.createElement("b",null,"Country"),r.a.createElement("i",null,":"),r.a.createElement("u",null,v)),r.a.createElement("p",null,r.a.createElement("b",null,"City"),r.a.createElement("i",null,":"),r.a.createElement("u",null,P)),r.a.createElement("p",null,r.a.createElement("b",null,"Education"),r.a.createElement("i",null,":"),r.a.createElement("u",null,y||"none")),r.a.createElement("p",null,r.a.createElement("b",null,"Web-site"),r.a.createElement("i",null,":"),r.a.createElement("u",null,r.a.createElement(E,{website:d,noContent:"none"})))))},L=n(304),M=n.n(L),V=Object(f.a)(Object(f.a)({},p.a),M.a),X=function(){return r.a.createElement("div",{className:V.stats},r.a.createElement("div",{id:"settings-portal"}),r.a.createElement("div",{className:"".concat(V.cc_inline," ").concat(V.stats_container)},"\u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"))},K=function(e){var t=e.id,n=e.photos,a=Object(u.a)(e,["id","photos"]),o=a.ownProfile,i=a.submitFile;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{id:t,banner:n.banner}),r.a.createElement("div",{className:"".concat(V.intro," ").concat(V.block)},r.a.createElement(m.a,{id:t,shadow:!0,size:"large",editable:o,avatar:n.avatar,submitFile:i}),r.a.createElement(z,a),r.a.createElement(X,null)))},W=n(305),B=n.n(W),J=Object(f.a)(Object(f.a)({},p.a),B.a),Q=[Object(w.b)("ENTER YOUR POST TEXT"),Object(w.a)(300)],Y=Object(j.a)({form:"sendPost"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:J.block},r.a.createElement("div",{className:J.block_label},"CREATE NEW POST"),r.a.createElement("div",{className:J.post_create},r.a.createElement("div",{className:J.add_text},r.a.createElement(h.a,{name:"text",component:S.c,validate:Q})),r.a.createElement("button",{className:"".concat(J.button," ").concat(J.add_button)},"ADD POST")))})),Z=r.a.lazy((function(){return n.e(5).then(n.bind(null,320))})),q=function(e){var t=e.profile,n=e.isAuth,a=e.ownProfile,o=e.addPost,i=e.saveProfile,c=e.submitFile,l=t.info,f=(l.follow,l.followers,l.friends,Object(u.a)(l,["follow","followers","friends"])),m=Object(s.a)(Z)({posts:t.posts});return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,Object.assign({ownProfile:a,isSavingProfile:t.saving,saveProfile:i,submitFile:c},f)),n&&r.a.createElement(Y,{onSubmit:function(e){return o(e,"sendPost")}}),m)},G=n(306),H=n.n(G),$=function(){return r.a.createElement("img",{src:H.a,style:{maxHeight:"300px"},alt:""})},ee=function(e){return e.profile},te=n(95),ne=n(12),ae=n.n(ne),re=n(17),oe=n(13),ie={addPost:te.a,resetPage:te.d,setProfileAPI:te.g,saveProfileAPI:te.e,cancelProfileAPI:te.b,submitFileAPI:function(e,t,n){return function(){var a=Object(re.a)(ae.a.mark((function a(r){var o;return ae.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,oe.b.uploadFile(e,n);case 2:if(o=a.sent){a.next=5;break}return a.abrupt("return",null);case 5:o.error||"avatar"===n&&r(Object(te.f)(o.photos)),t(o.error);case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},cancelFileAPI:function(){return function(){oe.b.cancelUploadFile()}}};t.default=Object(o.d)(Object(i.b)((function(e){return{profile:ee(e)}}),ie),c.f)((function(e){var t=e.match.params.id||"own",n=e.profile.currentID,o="own"===n,i=Object(l.b)(),u=i.isAuth,s=i.fetching,f=e.profile,m=e.addPost,b=function(){e.cancelProfileAPI(),e.cancelFileAPI(),e.resetPage()};return Object(a.useEffect)((function(){var a;null===n?(a=t,e.setProfileAPI(a)):n!==t&&b()}),[n,t]),Object(a.useEffect)((function(){return function(){return b()}}),[]),!u&&o?r.a.createElement(c.a,{to:"/"}):r.a.createElement(C.a,{isLoading:null===f.info||s,noContent:!1===f.info,noContentFiller:r.a.createElement($,null)},r.a.createElement(q,{profile:f,addPost:m,isAuth:u,ownProfile:o,saveProfile:function(t,n){return e.saveProfileAPI(t,n)},submitFile:function(t,n,a){return e.submitFileAPI(t,n,a)}}))}))}}]);
//# sourceMappingURL=4.fb6f36b2.chunk.js.map