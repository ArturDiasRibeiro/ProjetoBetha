angular.module("ProjetoBethaFrontEnd").controller("inserirClienteController", function ($scope, $location, clienteService) {

    //post one
    $scope.postCliente = function (cliente) {
        clienteService.postCliente(cliente).then(function (response) {
            this.findClientes()
            console.log(response)
            $location.path("/clientes")
        }).catch(function (error) {
            alert(error.data.message)
        })
    }

});