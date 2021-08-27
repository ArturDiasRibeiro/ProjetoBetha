angular
  .module("ProjetoBethaFrontEnd")
  .controller(
    "alterarOrdemDeServicoController",
    function ($scope, $location, $routeParams, ordemDeServicoService) {
      $scope.findOrdemDeServicoById = function (ordemDeServicoId) {
        ordemDeServicoService.findOneById(ordemDeServicoId).then(
          function (response) {
            $scope.ordemDeServico = response.data;
          },
          function (error) {
            $location.path("/ordemdeservicos");
            alert(error.data.errors[0].message);
          }
        );
      };

      $scope.findOrdemDeServicoById($routeParams.id);

      //put OrdemDeServico
      $scope.putOrdemDeServico = function (ordemDeServico) {
        ordemDeServicoService.putOrdemDeServico(ordemDeServico).then(
          function (response) {
            //this.findOrdemDeServicos()
            $location.path("/ordemdeservicos");
          },
          function (error) {
            alert(error.data.message);
          }
        );
      };
    }
  );
