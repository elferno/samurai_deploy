(this.webpackJsonpsamurai_way=this.webpackJsonpsamurai_way||[]).push([[4],{296:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},297:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))},298:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return function(){var t,n=a(e);if(r()){var o=a(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return i(this,t)}}n.d(t,"a",(function(){return c}))},299:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",(function(){return r}))},300:function(e,t,n){e.exports={profile_settings:"ProfileSettings_profile_settings__iQdOV",edit_mode:"ProfileSettings_edit_mode__iVy1g",buttons:"ProfileSettings_buttons__1MjxD",settings_input:"ProfileSettings_settings_input__2eN4C"}},301:function(e,t,n){e.exports={info:"UserInfo_info__2TajZ",info_content:"UserInfo_info_content__Q3ZKo",status:"UserInfo_status__XomkX",edit_info:"UserInfo_edit_info__XsKuT"}},302:function(e,t,n){e.exports={intro:"ProfileInfo_intro__2CLq8",stats:"ProfileInfo_stats__2gjro",stats_container:"ProfileInfo_stats_container__2nzzj"}},303:function(e,t,n){e.exports={post_create:"PostCreate_post_create__3xCaw",add_text:"PostCreate_add_text__29KTD",add_error:"PostCreate_add_error__2EGg5",add_button:"PostCreate_add_button__3XBvk"}},304:function(e,t,n){e.exports=n.p+"static/media/error_404.61939259.png"},315:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n(19),c=n(10),l=n(24),u=n(39),s=n(66),f=n(1),m=n(61),b=n(5),d=n.n(b),p=function(e){var t=e.id;if(e.haveBN){var n={backgroundImage:"URL('https://fishup.fun/api/users/".concat(t,"/banner.jpg')")};return r.a.createElement("div",{className:d.a.block,style:n,role:"banner"})}return null};var _=n(95);function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(l){r=!0,o=l}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}}(e,t)||Object(_.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=function(e){var t=e.website,n=e.noContent;return t?r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"".concat(d.a.inline_a," ").concat(d.a.colored_a)},"active link"):n},v=n(296),h=n(297),P=n(299),O=n(298),j=n(127),g=n(128),S=n(53),w=n(70),N=n(62),C=n(92),k=n(300),I=n.n(k),x=Object(f.a)(Object(f.a)({},d.a),I.a),A={name:[Object(w.b)("ENTER YOUR NAME"),Object(w.a)(20)],status:[Object(w.a)(50)],country:[Object(w.a)(30)],city:[Object(w.a)(20)],education:[Object(w.a)(20)],website:[Object(w.a)(50)],dob:[Object(w.a)(10)]},T=function(e){Object(P.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).el=document.createElement("div"),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.portal=document.getElementById("settings-portal"),this.portal.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){this.portal.removeChild(this.el)}},{key:"close",value:function(){this.props.reset(),this.props.toggleSS()}},{key:"render",value:function(){var e=this,t=this.props,n=t.editMode,a=t.ownProfile,o=t.isSavingProfile,i=t.handleSubmit,c=t.onSubmit,l=Object.keys(this.props.initialValues).map((function(e,t){return r.a.createElement(R,{name:e,key:t})})),u=x.profile_settings;return n&&(u+=" "+x.edit_mode),o&&(u+=" "+x.cc),Object(S.createPortal)(r.a.createElement("form",{onSubmit:i((function(t){return c(t,e.close.bind(e))})),className:u},r.a.createElement(C.a,{isLoading:o,noContent:!a,noContentFiller:null,clearContent:!0},r.a.createElement("div",{className:x.buttons},r.a.createElement("button",{type:"button",onClick:function(){return e.close()},className:x.button},"CLOSE"),r.a.createElement("button",{type:"submit",className:x.button},"SAVE")),l)),this.el)}}]),n}(r.a.Component),R=function(e){var t=e.name;return r.a.createElement(j.a,{name:t,type:"text",label:"dob"===t?"date of birth":t,extraClass:x.settings_input,component:N.b,validate:A[t]})},D=Object(g.a)({form:"profileSettings",enableReinitialize:!0})(T),U=n(301),z=n.n(U),L=Object(f.a)(Object(f.a)({},d.a),z.a),M=function(e){var t=E(Object(a.useState)(!1),2),n=t[0],o=t[1],i=function(){o(!n)},c=e.userInfo,l=e.ownProfile,u=e.saveProfile,s=e.isSavingProfile,f=c.dob,m=c.name,b=c.status,d=c.website,p=c.country,_=c.city,v=c.education;return r.a.createElement("div",{className:L.info},l&&r.a.createElement("div",{onClick:i,className:"".concat(L.edit_info," ").concat(L.cc)},"\u270e"),l&&r.a.createElement(D,{initialValues:c,onSubmit:u,ownProfile:l,toggleSS:i,saveProfile:u,editMode:n,isSavingProfile:s}),r.a.createElement("h1",{className:L.ff_header},m),r.a.createElement("div",{className:L.status},b||r.a.createElement("i",null,"your status could be here")),r.a.createElement("div",{className:L.info_content},r.a.createElement("p",null,r.a.createElement("b",null,"Date of birth"),r.a.createElement("i",null,":"),r.a.createElement("u",null,f)),r.a.createElement("p",null,r.a.createElement("b",null,"Country"),r.a.createElement("i",null,":"),r.a.createElement("u",null,p)),r.a.createElement("p",null,r.a.createElement("b",null,"City"),r.a.createElement("i",null,":"),r.a.createElement("u",null,_)),r.a.createElement("p",null,r.a.createElement("b",null,"Education"),r.a.createElement("i",null,":"),r.a.createElement("u",null,v||"none")),r.a.createElement("p",null,r.a.createElement("b",null,"Web-site"),r.a.createElement("i",null,":"),r.a.createElement("u",null,r.a.createElement(y,{website:d,noContent:"none"})))))},V=n(302),X=n.n(V),B=Object(f.a)(Object(f.a)({},d.a),X.a),F=function(){return r.a.createElement("div",{className:B.stats},r.a.createElement("div",{id:"settings-portal"}),r.a.createElement("div",{className:"".concat(B.cc_inline," ").concat(B.stats_container)},"\u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"))},K=function(e){var t=e.id,n=e.photos,a=Object(u.a)(e,["id","photos"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{id:t,haveBN:n.large}),r.a.createElement("div",{className:"".concat(B.intro," ").concat(B.block)},r.a.createElement(m.a,{id:t,havePH:n.small,size:"large",shadow:!0}),r.a.createElement(M,a),r.a.createElement(F,null)))},W=n(303),H=n.n(W),J=Object(f.a)(Object(f.a)({},d.a),H.a),Q=[Object(w.b)("ENTER YOUR POST TEXT"),Object(w.a)(300)],Y=Object(g.a)({form:"sendPost"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:J.block},r.a.createElement("div",{className:J.block_label},"CREATE NEW POST"),r.a.createElement("div",{className:J.post_create},r.a.createElement("div",{className:J.add_text},r.a.createElement(j.a,{name:"text",component:N.c,validate:Q})),r.a.createElement("button",{className:"".concat(J.button," ").concat(J.add_button)},"ADD POST")))})),Z=r.a.lazy((function(){return n.e(5).then(n.bind(null,318))})),q=function(e){var t=e.profile,n=e.isAuth,a=e.ownProfile,o=e.addPost,i=e.saveProfile,c=t.info,l=(c.follow,c.followers,c.friends,Object(u.a)(c,["follow","followers","friends"])),f=Object(s.a)(Z)({posts:t.posts});return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,Object.assign({ownProfile:a,isSavingProfile:t.saving,saveProfile:i},l)),n&&r.a.createElement(Y,{onSubmit:function(e){return o(e,"sendPost")}}),f)},G=n(304),$=n.n(G),ee=function(){return r.a.createElement("img",{src:$.a,style:{maxHeight:"300px"},alt:""})},te=function(e){return e.profile},ne=n(104),ae={addPost:ne.a,resetPage:ne.d,setProfileAPI:ne.f,saveProfileAPI:ne.e,cancelProfileAPI:ne.b};t.default=Object(o.d)(Object(i.b)((function(e){return{profile:te(e)}}),ae),c.f)((function(e){var t=e.match.params.id||"own",n=e.profile.currentID,o="own"===n,i=Object(l.b)(),u=i.isAuth,s=i.fetching,f=e.profile,m=e.addPost,b=function(){e.cancelProfileAPI(),e.resetPage()};return Object(a.useEffect)((function(){var a;null===n?(a=t,e.setProfileAPI(a)):n!==t&&b()}),[n,t]),Object(a.useEffect)((function(){return function(){return b()}}),[]),!u&&o?r.a.createElement(c.a,{to:"/"}):r.a.createElement(C.a,{isLoading:null===f.info||s,noContent:!1===f.info,noContentFiller:r.a.createElement(ee,null)},r.a.createElement(q,{profile:f,addPost:m,isAuth:u,ownProfile:o,saveProfile:function(t,n){return e.saveProfileAPI(t,n)}}))}))}}]);
//# sourceMappingURL=4.2dc5b453.chunk.js.map