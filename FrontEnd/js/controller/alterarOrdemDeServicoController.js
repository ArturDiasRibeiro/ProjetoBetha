angular
  .module("ProjetoBethaFrontEnd")
  .controller(
    "alterarOrdemDeServicoController",
    function ($scope, $location, $routeParams, ordemDeServicoService) {
      $scope.app = "Alterar Ordem de Serviço";
      $scope.ordemDeServicoDTO = {
        clienteId: undefined,
        equipamentos: [],
        valor: undefined,
        status: undefined,
      };

      $scope.idOrdem;

      let setOrdemDeServicoDTO = function (ordemDeServico) {
        $scope.ordemDeServicoDTO.clienteId = ordemDeServico.cliente.id;
        $scope.ordemDeServicoDTO.equipamentos = ordemDeServico.equipamentos;
        $scope.ordemDeServicoDTO.valor = ordemDeServico.valor;
        $scope.ordemDeServicoDTO.status = ordemDeServico.status;
        $scope.ordemDeServicoDTO.imagemUrl = ordemDeServico.imagemUrl;
        console.log($scope.ordemDeServicoDTO);
      };

      $scope.findOrdemDeServicoById = function (ordemDeServicoId) {
        ordemDeServicoService.findOneById(ordemDeServicoId).then(
          function (response) {
            let ordemDeServico = response.data;
            $scope.idOrdem = ordemDeServico.id;
            setOrdemDeServicoDTO(ordemDeServico);
          },
          function (error) {
            $location.path("/ordemdeservicos");
            alert(error.data.errors[0].message);
          }
        );
      };

      $scope.findOrdemDeServicoById($routeParams.id);

      //put OrdemDeServico
      $scope.putOrdemDeServico = function (ordemDeServicoDTO, idOrdem) {
        console.log(ordemDeServicoDTO);
        ordemDeServicoDTO.equipamentos.forEach((equipamento) => {
          if (equipamento.imagemUrl === "") {
            equipamento.imagemUrl = null;
            console.log(imagemUrl);
          }
        });

        ordemDeServicoDTO.status = parseInt(ordemDeServicoDTO.status);
        ordemDeServicoService
          .putOrdemDeServico(ordemDeServicoDTO, idOrdem)
          .then(
            function (response) {
              $location.path("/ordemdeservicos/find/" + idOrdem);
            },
            function (error) {
              alert(error.data.message);
            }
          );
      };
    }
  );
