angular.module("ProjetoBethaFrontEnd").controller("alterarClienteController", function ($scope, clienteService) {

    $scope.findClienteById = function (clienteId) {
        clienteService.findOneById(clienteId).then(function (response) {
            $scope.cliente = response.data
            console.log(response.data)
        }).catch(function (error) {
            $scope.cliente = null
            //alert(error.data.message)
        })
    }

    //put Cliente
    $scope.putCliente = function (cliente) {
        clienteService.putCliente(cliente).then(function (response) {
            console.log(response.data)
            this.findClientes()
        }).catch(function (error) {
            //alert(error.data.message)
        })
    }
    
});