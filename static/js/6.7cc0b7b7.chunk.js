(this.webpackJsonpsamurai_way=this.webpackJsonpsamurai_way||[]).push([[6],{311:function(e,t,n){e.exports={user:"User_user__4mMfO",user_info_container:"User_user_info_container__1psho",no_status:"User_no_status__2Qwff",user_settings_container:"User_user_settings_container__2bEbe",selected:"User_selected__1mAEL",handling:"User_handling__VYQpR",dots:"User_dots__1A4Uw"}},312:function(e,t,n){e.exports={content_wrapper:"Users_content_wrapper__2ZKCr",ub:"Users_ub__2WJv_",lb:"Users_lb__3BRjZ",loading_wrapper:"Users_loading_wrapper__1rpUc"}},317:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(19),o=n(39),i=n(1),c=n(11),l=n(24),u=n(61),f=n(5),d=n.n(f),_=n(311),m=n.n(_),g=Object(i.a)(Object(i.a)({},d.a),m.a),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.preventDefault();for(var n=arguments.length,s=new Array(n>2?n-2:0),a=2;a<n;a++)s[a-2]=arguments[a];t&&t.apply(void 0,s)},b=function(e){return a.a.createElement("div",{className:g.user_info_container},a.a.createElement(c.b,{to:"/profile/".concat(e.id)},a.a.createElement("b",null,e.name," : ",e.id)),a.a.createElement("u",null,e.location.country," : ",e.location.city),a.a.createElement("p",null,e.status||a.a.createElement("i",{className:g.no_status},"no status")))},w=function(e){var t=e.id,n=e.friendsList.includes(t),s=e.friendIsFetching.includes(t),r=e.followList.includes(t),o=e.followIsFetching.includes(t);return a.a.createElement("div",{className:"".concat(g.user_settings_container," ").concat(g.default_a)},a.a.createElement(E,{click:function(n){return p(n,e.setFollowTo,t,!r)},isLoading:o,isOn:r,onContent:"un-follow",offContent:"follow"}),a.a.createElement(E,{click:function(s){return p(s,e.setFriendTo,t,!n)},isLoading:s,isOn:n,onContent:"un-friend",offContent:"set as friend"}),a.a.createElement("a",{href:"/#",onClick:p},"send message"))},E=function(e){var t=e.click,n=e.isLoading,s=e.isOn,r=e.onContent,o=e.offContent,i=n?p:t,c=n?g.handling:s?g.selected:null,l=s?r:o;return a.a.createElement("a",{href:"/#",onClick:i,className:c},l)},U=function(){return a.a.createElement("div",{className:"".concat(g.user_settings_container," ").concat(g.default_a),style:{background:"var(--gray)",opacity:".5"}})},v=function(e){var t=Object(l.b)().isAuth,n=e.id,s=e.photos,r=e.name,i=e.location,c=e.status,f=Object(o.a)(e,["id","photos","name","location","status"]);return a.a.createElement("div",{className:"".concat(g.block," ").concat(g.user)},a.a.createElement(u.a,{id:n,havePH:s.small,size:"medium"}),a.a.createElement(b,{id:n,name:r,location:i,status:c}),t?a.a.createElement(w,Object.assign({id:n},f)):a.a.createElement(U,null))},h=n(312),F=n.n(h),O=Object(i.a)(Object(i.a)({},d.a),F.a),L=function(e){if(e.totalUsers){var t=e.users,n=Object(o.a)(e,["users"]);return t.map((function(e){return a.a.createElement(v,Object.assign({key:e.id},n,e))}))}return null},P=function(e){var t=e.isLoading,n=e.isActive,s=e.setPageToNext;return t?a.a.createElement("div",{className:"".concat(O.button," ").concat(O.lb)},"LOADING..."):n?a.a.createElement("div",{className:"".concat(O.button," ").concat(O.ub),onClick:s},"UPLOAD MORE"):null},A=function(e){var t=e.isLoading,n=e.setPageToNext,s=Object(o.a)(e,["isLoading","setPageToNext"]),r=e.page*e.limit+e.limit<e.totalUsers;return a.a.createElement("div",{className:O.content_wrapper},a.a.createElement(L,s),a.a.createElement(P,{isLoading:0!==e.totalUsers&&t,isActive:0!==e.totalUsers&&!t&&r,setPageToNext:n}))},I=n(92),j=n(30),N=n(64),T=n(106),C=function(e){return e.users.totalUsers},k=function(e){return e.users.isLoading},y=function(e){return e.users.users},x=function(e){return e.users.limit},D=function(e){return e.users.page},J=function(e){return e.friends.friendsList},R=function(e){return e.friends.totalFriends},M=function(e){return e.friends.friendIsFetching},Q=function(e){return e.follow.followList},Z=function(e){return e.follow.totalFollow},z=function(e){return e.follow.followIsFetching},B={resetPage:T.d,setPageToNext:T.e,getUsersAPI:T.c,updateUsersAPI:T.f,setFollowToAPI:N.c,setFriendToAPI:j.b,cancelUsersAPI:T.a};t.default=Object(r.b)((function(e){return{totalUsers:C(e),isLoading:k(e),users:y(e),limit:x(e),page:D(e),friendsList:J(e),totalFriends:R(e),friendIsFetching:M(e),followList:Q(e),totalFollow:Z(e),followIsFetching:z(e)}}),B)((function(e){var t=e.page,n=e.limit,r=e.users,o=e.totalFriends,i=e.totalFollow,c=e.getUsersAPI,l=e.updateUsersAPI,u=e.cancelUsersAPI,f=e.resetPage;return Object(s.useEffect)((function(){0===t?c(t,n):l(t,n)}),[t,n,c,l]),Object(s.useEffect)((function(){return function(){u(),f()}}),[u,f]),a.a.createElement(I.a,{isLoading:null===r||null===o||null===i,noContent:!1===e.users,noContentFiller:"no users found"},a.a.createElement(A,Object.assign({setFriendTo:e.setFriendToAPI,setFollowTo:e.setFollowToAPI},e)))}))}}]);
//# sourceMappingURL=6.7cc0b7b7.chunk.js.map