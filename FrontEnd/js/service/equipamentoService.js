angular
  .module("ProjetoBethaFrontEnd")
  .service("equipamentoService", function ($http, configValue) {
    this.findAll = function () {
      return $http.get(configValue.apiUrl + "/equipamentos");
    };

    this.findOneById = function (equipamentoId) {
      return $http.get(configValue.apiUrl + "/equipamentos/" + equipamentoId);
    };

    this.putEquipamento = function (equipamento) {
      return $http.put(configValue.apiUrl + "/equipamentos/" + equipamento.id, equipamento);
    };

    this.postEquipamento = function (equipamento) {
      return $http.post(configValue.apiUrl + "/equipamentos", equipamento);
    };

    this.deleteEquipamento = function (equipamentoId) {
      return $http.delete(configValue.apiUrl + "/equipamentos/" + equipamentoId);
    };
  });
