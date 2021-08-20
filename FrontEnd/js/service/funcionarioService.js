angular.module("ProjetoBethaFrontEnd").service("funcionarioService", function ($http, configValue) {

    this.findAll = function () {
        return $http.get(configValue.apiUrl + "/funcionarios")
    }

    this.findOneById = function (funcionarioId) {
        return $http.get(configValue.apiUrl + "/funcionarios/" + funcionarioId)
    }

    this.putFuncionario = function (funcionario) {
        return $http.put(configValue.apiUrl + "/funcionarios/" + funcionario.id, funcionario)
    }

    this.postFuncionario = function (funcionario) {
        return $http.post(configValue.apiUrl + "/funcionarios", funcionario)
    }

    this.deleteFuncionario = function (funcionarioId) {
        return $http.delete(configValue.apiUrl + "/funcionarios/" + funcionarioId)
    }
})