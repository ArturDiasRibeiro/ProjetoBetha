angular.module("ProjetoBethaFrontEnd").controller("funcionarioController", function ($scope, funcionarioService) {

    $scope.app = "Funcionarios"

    $scope.funcionarios = [];
    $scope.showFuncionarios = true
    $scope.showPutFuncionario = false
    $scope.showNGShowGetFuncionario = false
    $scope.showPostFuncionario = false

    //get all
    loadFuncionarios = function () {
        funcionarioService.findAll().then(function (response) {
            console.log(response)
            $scope.funcionarios = response.data
        }).catch(function (error) {
            alert(error.data.message)
        })
    }
    loadFuncionarios()

    //get one
    $scope.loadFuncionario = function (funcionarioId) {
        funcionarioService.findOneById(funcionarioId).then(function (response) {
            $scope.funcionario = response.data
            console.log(response.data)
        }).catch(function (error) {
            alert(error.data.message)
        })
    }

    //put one
    $scope.putFuncionario = function (funcionario) {
        funcionarioService.putFuncionario(funcionario).then(function (response) {
            console.log(response.data)
            this.loadFuncionarios()
        }).catch(function (error) {
            alert(error.data.message)
        })
    }

    //post one
    $scope.postFuncionario = function (funcionario) {
        funcionarioService.postFuncionario(funcionario).then(function (response) {
            this.loadFuncionarios()
            $scope.showFunc()
            console.log(response)
        }).catch(function (error) {
            alert(error.data.message)
        })
    }

    //delete one
    $scope.deleteFuncionario = function (funcionarioId) {
        funcionarioService.deleteFuncionario(funcionarioId).then(function (response) {
            console.log(response.data)
            this.loadFuncionarios()
        }).catch(function (error) {
            alert(error.data.message)
        })
    }

    //mostrar alteração no funcionario
    $scope.showPutFunc = function (funcionarioId) {
        this.loadFuncionario(funcionarioId)
        $scope.showFuncionarios = false
        $scope.showPutFuncionario = true
        $scope.showPostFuncionario = false
    }

    //mostrar area geral de funcionarios
    $scope.showFunc = function () {
        $scope.showFuncionarios = true
        $scope.showPutFuncionario = false
        $scope.showPostFuncionario = false
    }

    //habilitar ngshow para mostrar função de get funcionario
    $scope.showNGShowGetFuncionarioFunction = function (funcionarioId) {
        this.loadFuncionario(funcionarioId)
        $scope.showNGShowGetFuncionario = true
        $scope.showPostFuncionario = false
    }

    //habilitar a area de post usando ng-If quando for realizar o post de funcionario
    $scope.showIfShowPostFuncionario = function () {
        $scope.showFuncionarios = false
        $scope.showPutFuncionario = false
        $scope.showPostFuncionario = true
    }
})