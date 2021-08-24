angular
  .module("ProjetoBethaFrontEnd")
  .controller(
    "findOrdemDeServicoController",
    function ($scope, $routeParams, $route, $location, ordemDeServicoService) {
      $scope.app = "Ordem De Serviço";

      $scope.findOrdemDeServicoById = function (ordemDeServicoId) {
        ordemDeServicoService.findOneById(ordemDeServicoId).then(
          function (response) {
            $scope.ordemDeServico = response.data;
            console.log($scope.ordemDeServico);
          },
          function (error) {
            alert(error.data.errors[0].message);
            $location.path("/ordemdeservicos");
          }
        );
      };

      $scope.findOrdemDeServicoById($routeParams.id);

      //delete one
      $scope.deleteOrdemDeServico = function (ordemDeServicoId) {
        ordemDeServicoService.deleteOrdemDeServico(ordemDeServicoId).then(
          function (response) {
            $location.path("/ordemdeservicos");
          },
          function (error) {
            alert(error.data.errors[0].message);
          }
        );
      };

      $scope.onAdicionarImagem = function (id) {
        let equipamentosOrdem = $scope.ordemDeServico.equipamentos;
        let inputElement;

        for (let i = 0; i < equipamentosOrdem.length; i++) {
          if (equipamentosOrdem[i].id === id) {
            inputElement = document.getElementsByClassName(
              "addImagemEquipamento"
            )[i].files[0];
          }
        }

        adicionarImagem(id, inputElement);
      };

      var adicionarImagem = function (ordemDeServicoId, imageFile) {
        ordemDeServicoService.adicionarImagem(ordemDeServicoId, imageFile).then(
          function (response) {
            console.log(response);
            $route.reload();
          },
          function (err) {
            console.log(err);
          }
        );
      };

      // $scope.hasImages = function (equipamentosList) {
      //   equipamentosList.forEach((equipamento) => {
      //     if (equipamento.imageUrl != null) {
      //       counter = true;
      //     } else {
      //       counter = false;
      //     }
      //   });
      //   return counter;
      // };
    }
  );
