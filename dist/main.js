module.exports=function(r){function n(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=r,n.c=e,n.i=function(r){return r},n.d=function(r,n,e){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:e})},n.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return n.d(e,"a",e),e},n.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},n.p="",n(n.s=15)}([function(r,n,e){"use strict";function t(r){for(var e in r)n.hasOwnProperty(e)||(n[e]=r[e])}t(e(1))},function(r,n,e){"use strict";var t=e(2);e(4),e(3),e(6),e(7),e(8),e(12),e(10),e(9),e(11),e(5),e(13);var o=e(14),i=o.actionCreator("MantTest.Login/");n.LoginEvents={usernameChanged:i.of("USERNAME_CHANGED",function(r,n){return o.reassign(r,{username:n})}),passwordChanged:i.of("PASSWORD_CHANGED",function(r,n){return o.reassign(r,{password:n})}),loginStarted:i("LOGIN_STARTED",function(r){return o.reassign(r,{loginInProgress:!0,error:void 0})}),loginCompleted:i("LOGIN_COMPLETED",function(r){return o.reassign(r,{loginInProgress:!1,loginDone:!0,error:void 0})}),loginFailed:i.of("LOGIN_FAILED",function(r,n){return o.reassign(r,{loginInProgress:!1,loginDone:!1,error:n})}),canLoginChanged:i.of("CAN_LOGIN_CHANGED",function(r,n){return o.reassign(r,{canLogin:n})}),login:i("LOGIN")},n.loginReducer=o.reducerFromActions(n.LoginEvents),n.defaultLoginState=function(){return{username:"",password:"",canLogin:!1,loginDone:!1,loginInProgress:!1,error:void 0}};var s=function(r){return r.state$.map(function(r){return!!r.username&&!!r.password}).distinctUntilChanged().map(n.LoginEvents.canLoginChanged)},u=function(r){return function(e){return e.update$.filter(function(r){return r.action.type===n.LoginEvents.login.type}).filter(function(r){return r.state.canLogin}).switchMap(function(e){return r(e.state.username,e.state.password).map(function(r){return"success"===r.kind?n.LoginEvents.loginCompleted():n.LoginEvents.loginFailed(r.error)}).timeout(1e4,t.Observable.of(n.LoginEvents.loginFailed("Service is unavailable right now"))).startWith(n.LoginEvents.loginStarted())})}};n.createLoginStore=function(r){return o.defineStore(n.loginReducer,n.defaultLoginState,o.withEffects(s,u(r)),o.extendWithActions(n.LoginEvents))}},function(r,n){r.exports=require("rxjs/Observable")},function(r,n){r.exports=require("rxjs/add/observable/merge")},function(r,n){r.exports=require("rxjs/add/observable/of")},function(r,n){r.exports=require("rxjs/add/operator/debounceTime")},function(r,n){r.exports=require("rxjs/add/operator/distinctUntilChanged")},function(r,n){r.exports=require("rxjs/add/operator/filter")},function(r,n){r.exports=require("rxjs/add/operator/map")},function(r,n){r.exports=require("rxjs/add/operator/observeOn")},function(r,n){r.exports=require("rxjs/add/operator/startWith")},function(r,n){r.exports=require("rxjs/add/operator/subscribeOn")},function(r,n){r.exports=require("rxjs/add/operator/switchMap")},function(r,n){r.exports=require("rxjs/add/operator/timeout")},function(r,n){r.exports=require("rxstore")},function(r,n,e){"use strict";function t(r){for(var e in r)n.hasOwnProperty(e)||(n[e]=r[e])}t(e(0))}]);