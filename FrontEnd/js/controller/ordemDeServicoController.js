angular
  .module("ProjetoBethaFrontEnd")
  .controller(
    "ordemDeServicoController",
    function ($location, $scope, ordemDeServicoService) {
      $scope.app = "Ordens De Serviço";
      $scope.ordens = [];

      //get all ordens
      loadOrdemDeServicos = function () {
        ordemDeServicoService
          .findAll()
          .then(function (response) {
            console.log(response.data);
            $scope.ordemDeServicos = response.data;
          })
          .catch(function (error) {
            alert(error.data.message);
          });
      };
      loadOrdemDeServicos();

      $scope.modifyOrdemDeServicoById = function (ordemId) {
        ordemDeServicoService.setIdOrdem(ordemId);
        $location.path("ordemdeservicos/alterarordem");
      };
    }
  );
