angular.module("ProjetoBethaFrontEnd").controller("alterarFuncionarioController", function ($scope, $location, $routeParams, funcionarioService) {

    $scope.findFuncionarioById = function (funcionarioId) {
        funcionarioService.findOneById(funcionarioId).then(function (response) {
            $scope.funcionario = response.data
        }, function (error) {
            $scope.funcionario = null
            alert(error.data.errors[0].message)
        });
    }

    $scope.findFuncionarioById($routeParams.id);

    //put Funcionario
    $scope.putFuncionario = function (funcionario) {
        funcionarioService.putFuncionario(funcionario).then(function (response) {
            //this.findFuncionarios()
            $location.path("/funcionarios")
        }, function (error) {
            alert(error.data.errors[0].message)
        });
    }

});