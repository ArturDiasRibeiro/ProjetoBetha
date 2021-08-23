angular
    .module("ProjetoBethaFrontEnd").controller("findOrdemDeServicoController",function ($scope, $routeParams, $location, ordemDeServicoService) {
        $scope.app = "Ordem De Serviço"  
        $scope.findOrdemDeServicoById = function (ordemDeServicoId) {
                ordemDeServicoService.findOneById(ordemDeServicoId).then(
                    function (response) {
                        $scope.ordemDeServico = response.data;
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
        }
    );