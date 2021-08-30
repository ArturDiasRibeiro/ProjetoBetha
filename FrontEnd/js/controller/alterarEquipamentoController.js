// angular
//   .module("ProjetoBethaFrontEnd")
//   .controller(
//     "alterarEquipamentoController",
//     function (
//       $scope,
//       $location,
//       $routeParams,
//       equipamentoService,
//       ordemDeServicoService
//     ) {
//       $scope.findEquipamentoById = function (equipamentoId) {
//         equipamentoService.findOneById(equipamentoId).then(
//           function (response) {
//             $scope.equipamento = response.data;
//           },
//           function (error) {
//             alert(error.data.errors[0].message);
//           }
//         );
//       };

//       $scope.findEquipamentoById($routeParams.id);

//       //put Equipamento
//       $scope.putEquipamento = function (equipamento) {
//         equipamentoService.putEquipamento(equipamento).then(
//           function (response) {
//             //this.findEquipamento()
//           },
//           function (error) {
//             alert(error.data.errors[0].message);
//             console.log(error);
//           }
//         );
//       };
//     }
//   );
