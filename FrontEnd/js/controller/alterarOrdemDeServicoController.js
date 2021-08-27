angular
  .module("ProjetoBethaFrontEnd")
  .controller(
    "alterarOrdemDeServicoController",
    function ($scope, $location, $routeParams, ordemDeServicoService) {
      $scope.ordemDeServicoDTO = {
        clienteId: undefined,
        equipamentos: [],
        valor: undefined,
        status: undefined,
      };

      $scope.idOrdem;

      var setEquipamentosDTO = function (equipamentos) {
        let equipamentosDTO = [];
        equipamentos.forEach((equipamento) => {
          let equipamentoDTO = {
            modelo: equipamento.modelo,
            marca: equipamento.marca,
            classificacaoDoProduto: equipamento.classificacaoDoProduto,
            avarias: equipamento.avarias,
          };
          equipamentosDTO.push(equipamentoDTO);
        });
        return equipamentosDTO;
      };

      var setOrdemDeServicoDTO = function (ordemDeServico) {
        $scope.ordemDeServicoDTO.clienteId = ordemDeServico.cliente.id;
        $scope.ordemDeServicoDTO.equipamentos = ordemDeServico.equipamentos;
        $scope.ordemDeServicoDTO.valor = ordemDeServico.valor;
        $scope.ordemDeServicoDTO.status = ordemDeServico.status;
        console.log($scope.ordemDeServicoDTO);
      };

      $scope.findOrdemDeServicoById = function (ordemDeServicoId) {
        ordemDeServicoService.findOneById(ordemDeServicoId).then(
          function (response) {
            let ordemDeServico = response.data;
            $scope.idOrdem = ordemDeServico.id;
            // $scope.ordemDeServico = response.data;
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
        ordemDeServicoDTO.status = parseInt(ordemDeServicoDTO.status);
        ordemDeServicoService
          .putOrdemDeServico(ordemDeServicoDTO, idOrdem)
          .then(
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
