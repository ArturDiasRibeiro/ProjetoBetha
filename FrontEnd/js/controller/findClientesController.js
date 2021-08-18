angular.module("ProjetoBethaFrontEnd").controller("findClientesController", function ($scope, $routeParams, clienteService) {

    $scope.findClienteById = function (clienteId) {
        clienteService.findOneById(clienteId).then(function(response) {
            $scope.cliente = response.data
            console.log(response.data)
        }, function(error) {
            $scope.cliente = null
            alert(error.data.message)
        });
    }

    $scope.findClienteById($routeParams.id);
})