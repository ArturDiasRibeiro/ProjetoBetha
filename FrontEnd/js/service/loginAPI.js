angular
  .module("ProjetoBethaFrontEnd")
  .factory("loginAPI", function ($http, configValue) {
    var _login = function (credenciais) {
      return $http.post(configValue.apiUrl + "/login", credenciais);
    };

    return {
      login: _login,
    };
  });
