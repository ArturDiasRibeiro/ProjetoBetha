angular
  .module("ProjetoBethaFrontEnd")
  .service("loginService", function ($http, configValue) {

    this.login = function (login) {
      return $http.post(configValue.apiUrl + "/login", login);
    };
  });
