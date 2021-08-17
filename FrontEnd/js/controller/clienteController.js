angular.module("ProjetoBethaFrontEnd").controller("clienteController", function ($location, $scope, clienteService) {

    $scope.app = "Área de Clientes"
    $scope.clientes = []

    //get all Clientes
    findClientes = function () {
        clienteService.findAll().then(function (response) {
            console.log(response)
            $scope.clientes = response.data
        }).catch(function (error) {
            alert(error.data.message)
        })
    }
    findClientes()

    //get one Cliente
    $scope.findClienteById = function (clienteId) {
        clienteService.findOneById(clienteId).then(function (response) {
            $scope.cliente = response.data
            console.log(response.data)
        }).catch(function (error) {
            $scope.cliente = null
            //alert(error.data.message)
        })
    }

    $scope.modifyClienteById = function (clienteId) {
        clienteService.setIdCliente(clienteId);
        $location.path('clientes/alterarcliente');
    }

    //post one
    $scope.postCliente = function (cliente) {
        clienteService.postCliente(cliente).then(function (response) {
            this.findClientes()
            console.log(response)
        }).catch(function (error) {
            alert(error.data.message)
        })
    }

    

    //delete one
    $scope.deleteCliente = function (clienteId) {
        clienteService.deleteCliente(clienteId).then(function (response) {
            console.log(response.data)
            this.findClientes()
        }).catch(function (error) {
            alert(error.data.message)
        })
    }
})