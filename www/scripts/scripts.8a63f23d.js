"use strict";angular.module("angularReactCordovaBenchApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("angularReactCordovaBenchApp").controller("MainCtrl",["$scope",function(a){a.messagesCount=10,a.messages=[],a.addMessages=function(){for(var b=a.messages.length,c=0;c<a.messagesCount;c++)a.messages.push("message "+(b+c))},a.removeMessages=function(){var b=a.messages.length,c=a.messagesCount;if(b>=c)for(var d=0;c>d;d++)a.messages.pop()}}]),angular.module("angularReactCordovaBenchApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);