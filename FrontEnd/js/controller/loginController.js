angular
  .module("ProjetoBethaFrontEnd")
  .controller("loginController", function ($scope, loginService, $location) {
      
    $scope.logar = (funcionario) => {
      loginService.login(funcionario).then((response) => {
          console.log(response);
          const authorization = response.headers("authorization");
          localStorage.setItem("token", authorization);
          $location.path("/homepage");
        })
        .catch(function (error) {
          alert("Usúario ou senha incorretos!");
        });
    };
  });
