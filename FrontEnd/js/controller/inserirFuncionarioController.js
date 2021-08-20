angular.module("ProjetoBethaFrontEnd").controller("inserirFuncionarioController", function ($scope, $location, funcionarioService) {

    //post one
    $scope.postFuncionario = function (funcionario) {
        funcionarioService.postFuncionario(funcionario).then(function (response) {
            console.log(response)
            $location.path("/funcionarios")
        }, function(error) {
            alert(error.data.errors[0].message)
        });
    }

});