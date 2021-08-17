angular.module("ProjetoBethaFrontEnd").controller("ordemDeServicoController", function ($scope, ordemDeServicoService, clienteService) {

    $scope.app = "Ordens De Serviço"

    $scope.ordemDeServicos = []
    $scope.clientesOrdem = []
    $scope.showOrdemDeServico = true
    $scope.showPutOrdemDeServico = false
    $scope.showNGShowGetOrdemDeServico = false
    $scope.showPostOrdemDeServico = false

    //get all
    loadOrdemDeServicos = function () {
        ordemDeServicoService.findAll().then(function (response) {
            console.log(response.data)
            $scope.ordemDeServicos = response.data
        }).catch(function (error) {
            alert(error.data.message)
        })
    }
    loadOrdemDeServicos()

    //get one
    $scope.loadOrdemDeServico = function (ordemDeServicoId) {
        ordemDeServicoService.findOneById(ordemDeServicoId).then(function (response) {
            $scope.ordemDeServicos = response.data
            console.log(response.data)
        }).catch(function (error) {
            alert(error.data.message)
        })
    }

    $scope.loadClienteOrdem =  function () {
        clienteService.findAll().then(function(response){
            $scope.clientesOrdem = response.data
            console.log(response.data)
        }).catch(function(error){
            alert(error.data.message)
        })
    }

    //put one
    $scope.putOrdemDeServico = function (ordemDeServico) {
        ordemDeServicoService.putOrdemDeServico(ordemDeServico).then(function (response) {
            console.log(response.data)
            this.loadOrdemDeServicos()
        }).catch(function (error) {
            alert(error.data.message)
        })
    }

    //post one
    $scope.postOrdemDeServico = function (ordemDeServico) {
        ordemDeServicoService.postOrdemDeServico(ordemDeServico).then(function (response) {
            loadOrdemDeServicos()
            $scope.showODS()
            console.log(response)
        }).catch(function (error) {
            alert(error.data.message)
        })
    }

    //delete one
    $scope.deleteOrdemDeServico = function (ordemDeServicoId) {
        ordemDeServicoService.deleteOrdemDeServico(ordemDeServicoId).then(function (response) {
            console.log(response.data)
            this.loadOrdemDeServico()
        }).catch(function (error) {
            alert(error.data.message)
        })
    }

    //upload da foto
    $scope.postFotos = function (ordemDeServicoId) {
        ordemDeServicoService.uploadFotos(ordemDeServicoId).then(function (response) {
            console.log(response.data)
        }).catch(function (error) {
            alert(error.data.message)
        })
    }

    //botaozinho para concluir a ordem
    $scope.concluirOrdemDeServico = function (ordemDeServicoId) {
        ordemDeServicoService.concluirOrdemDeServico(ordemDeServicoId).then(function (response) {
            console.log(response.data)
        }).catch(function (error) {
            alert(error.data.message)
        })
    }

    //mostrar alteração no ordemDeServico
    $scope.showPutODS = function (ordemDeServicoId) {
        this.loadOrdemDeServico(ordemDeServicoId)
        $scope.showOrdemDeServico = false
        $scope.showPutOrdemDeServico = true
        $scope.showPostOrdemDeServico = false
    }

    //mostrar area geral de ordemDeServico
    $scope.showODS = function () {
        $scope.showOrdemDeServico = true
        $scope.showPutOrdemDeServico = false
        $scope.showPostOrdemDeServico = false
    }

    //habilitar ngshow para mostrar função de get ordemDeServico
    $scope.showNGShowGetOrdemDeServicoFunction = function (ordemDeServicoId) {
        this.loadOrdemDeServico(ordemDeServicoId)
        $scope.showNGShowGetOrdemDeServico = true
        $scope.showPostOrdemDeServico = false
    }

    //habilitar a area de post usando ng-If quando for realizar o post de ordemDeServico
    $scope.showIfShowPostOrdemDeServico = function () {
        this.loadClienteOrdem()
        $scope.showOrdemDeServico = false
        $scope.showPutOrdemDeServico = false
        $scope.showPostOrdemDeServico = true
    }
})