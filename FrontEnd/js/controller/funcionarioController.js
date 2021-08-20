angular.module("ProjetoBethaFrontEnd").controller("funcionarioController", function ($location, $scope, funcionarioService) {

    $scope.app = "Área de Funcionários"
    $scope.funcionarios = []

    //get all Funcionarios
    findFuncionarios = function () {
        funcionarioService.findAll().then(function (response) {
            $scope.funcionarios = response.data
        }, function(error) {
            alert(error.data.errors[0].message)
        });
    }
    findFuncionarios()

    $scope.modifyFuncionariosById = function (funcionariosId) {
        funcionarioService.setIdFuncionario(funcionariosId);
        $location.path('funcionarios/alterarfuncionario');
    }

})