angular.module("ProjetoBethaFrontEnd").controller("inserirClienteController", function ($scope, $location, clienteService) {

    //post one
    $scope.postCliente = function (cliente) {
        clienteService.postCliente(cliente).then(function (response) {
            console.log(response)
            $location.path("/clientes")
        }, function(error) {
            alert(error.data.errors[0].message)
        });
    }

});