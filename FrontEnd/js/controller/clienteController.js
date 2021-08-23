angular
  .module("ProjetoBethaFrontEnd")
  .controller(
    "clienteController",
    function ($location, $scope, clienteService) {
      $scope.app = "Área de Clientes";
      $scope.clientes = [];

      //get all Clientes
      findClientes = function () {
        clienteService.findAll().then(
          function (response) {
            $scope.clientes = response.data;
          },
          function (error) {
            alert(error.data.message);
          }
        );
      };
      findClientes();

      ($scope.modifyClienteById = function (clienteId) {
        clienteService.setIdCliente(clienteId);
        $location.path("clientes/alterarcliente");
      }),
        function (error) {
          alert(error.data.errors[0].message);
        };
    }
  );
