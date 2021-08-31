angular
  .module("ProjetoBethaFrontEnd")
  .controller("loginController", function ($scope, loginAPI, $location) {
    $scope.fazerLogin = function (login) {
      var creds = {
        email: login.email,
        senha: login.senha,
      };
      loginAPI.login(creds).then(
        function (response) {
          console.log(response);
          localStorage.setItem("auth", response.headers("Authorization"));
          $location.path("/homepage");
        },
        function (error) {
          console.log(error);
        }
      );
    };
  });
