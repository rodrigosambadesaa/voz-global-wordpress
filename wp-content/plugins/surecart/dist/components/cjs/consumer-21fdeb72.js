"use strict";const index=require("./index-f1e4d53b.js");var createDeferredPromise=function(){var e;return{promise:new Promise((function(n){e=n})),resolve:e}},openWormhole=function(e,n,o){void 0===o&&(o=!0);var r="Function"===e.constructor.name?e.prototype:e,t=r.componentWillLoad;r.componentWillLoad=function(){var e=this,r=index.getElement(this),i=createDeferredPromise(),s=new CustomEvent("openWormhole",{bubbles:!0,composed:!0,detail:{consumer:this,fields:n,updater:function(n,o){(n in r?r:e)[n]=o},onOpen:i}});r.dispatchEvent(s);var c=function(){if(t)return t.call(e)};return o?i.promise.then((function(){return c()})):c()}};exports.openWormhole=openWormhole;