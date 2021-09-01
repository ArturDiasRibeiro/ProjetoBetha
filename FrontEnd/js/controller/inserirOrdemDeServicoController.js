angular
  .module("ProjetoBethaFrontEnd")
  .controller(
    "inserirOrdemDeServicoController",
    function ($scope, $location, ordemDeServicoService) {
      $scope.app = "Adicionar Ordem De Serviço";
      $scope.ordemDeServicoDTO = {
        clienteId: undefined,
        equipamentos: [],
        valor: undefined,
      };

      //post one
      $scope.postOrdemDeServico = function (ordemDeServico) {
        ordemDeServicoService.postOrdemDeServico(ordemDeServico).then(
          function (response) {
            console.log(response);
            $location.path("/ordemdeservicos");
          },
          function (error) {
            console.log(error);
            alert(error.data.message);
          }
        );
      };

      $scope.onAdicionarEquipamento = function (equipamento) {
        let viewText = true;
        adicionarEquipamento(equipamento);
        console.log($scope.ordemDeServicoDTO);
      };

      var adicionarEquipamento = function (equipamento) {
        $scope.ordemDeServicoDTO.equipamentos.push(equipamento);
        delete $scope.equipamento;
      };

      $scope.onAdicionarCliente = function (clienteId) {
        adicionarCliente(clienteId);
        console.log($scope.ordemDeServicoDTO);
      };

      var adicionarCliente = function (clienteId) {
        $scope.ordemDeServicoDTO.clienteId = clienteId;
      };

      $scope.onAdicionarValor = function (valor) {
        adicionarValor(valor);
        console.log($scope.ordemDeServicoDTO);
      };

      var adicionarValor = function (valor) {
        $scope.ordemDeServicoDTO.valor = valor;
      };
    }
  );
