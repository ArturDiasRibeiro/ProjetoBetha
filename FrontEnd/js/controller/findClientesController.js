angular.module("ProjetoBethaFrontEnd").controller("findClientesController", function ($scope, $routeParams, $location, clienteService) {

    $scope.findClienteById = function (clienteId) {
        clienteService.findOneById(clienteId).then(function (response) {
            $scope.cliente = response.data
        }, function (error) {
            alert(error.data.message)
            $location.path("/clientes")
        });
    }

    $scope.findClienteById($routeParams.id);

    //delete one
    $scope.deleteCliente = function (clienteId) {
        clienteService.deleteCliente(clienteId).then(function (response) {
            $location.path("/clientes")
        }, function (error) {
            alert(error.data.message)
        });
    }
})