angular
  .module("ProjetoBethaFrontEnd")
  .controller(
    "alterarClienteController",
    function ($scope, $location, $routeParams, clienteService) {
      $scope.findClienteById = function (clienteId) {
        clienteService.findOneById(clienteId).then(
          function (response) {
            $scope.cliente = response.data;
          },
          function (error) {
            $scope.cliente = null;
            alert(error.data.errors[0].message);
          }
        );
      };

      $scope.findClienteById($routeParams.id);

      //put Cliente
      $scope.putCliente = function (cliente) {
        clienteService.putCliente(cliente).then(
          function (response) {
            //this.findClientes()
            $location.path("/clientes");
          },
          function (error) {
            alert(error.data.errors[0].message);
            console.log(error);
          }
        );
      };
    }
  );
