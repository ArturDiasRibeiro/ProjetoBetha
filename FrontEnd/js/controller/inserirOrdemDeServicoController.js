angular
  .module("ProjetoBethaFrontEnd")
  .controller(
    "inserirOrdemDeServicoController",
    function ($scope, $location, ordemDeServicoService, clienteService) {
      $scope.app = "Adicionar Ordem De Serviço";

      //"DTO" para criar nova ordem de serviço
      $scope.ordemDeServicoDTO = {
        clienteId: undefined,
        equipamentos: [],
        valor: undefined,
      };

      //POST ordem de serviço
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

      //Apagar todos os campos da tela
      $scope.apagarTodosCampos = function () {
        window.location.reload();
      };

      //Função salvar Cliente via DTO
      $scope.onAdicionarCliente = function (clienteId) {
        clienteService.findOneById(clienteId).then(
          function (response) {
            $scope.cliente = response.data;
          }, function(error){
            alert("ID Inválido!")
          })
        adicionarCliente(clienteId);
        console.log($scope.ordemDeServicoDTO);
      };
      let adicionarCliente = function (clienteId) {
          console.log(clienteId);
          $scope.ordemDeServicoDTO.clienteId = clienteId;
      };

      //Função salvar Equipamento via DTO
      $scope.onAdicionarEquipamento = function (equipamento) {
        adicionarEquipamento(equipamento);
        console.log($scope.ordemDeServicoDTO);
      };
      let adicionarEquipamento = function (equipamento) {
        if (equipamento === null || equipamento === undefined) {
          alert("Os campos de Equipamento não podem estar vazios");
        } else {
          console.log(equipamento);
          $scope.ordemDeServicoDTO.equipamentos.push(equipamento);
          delete $scope.equipamento;
        }
      };

      //Função salvar Valor via DTO
      $scope.onAdicionarValor = function (valor) {
        adicionarValor(valor);
        console.log($scope.ordemDeServicoDTO);
      };
      let adicionarValor = function (valor) {
        if (valor === null || valor === undefined) {
          alert("O campo valor não pode ser adicionado vazio");
        } else {
          console.log(valor);
          $scope.ordemDeServicoDTO.valor = valor;
        }
      };
    }
  );
