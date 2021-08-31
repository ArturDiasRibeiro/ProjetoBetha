angular.module("ProjetoBethaFrontEnd").config(function ($httpProvider) {
  $httpProvider.interceptors.push("errorInterceptor");
  $httpProvider.interceptors.push("authenticationInterceptor");
});
