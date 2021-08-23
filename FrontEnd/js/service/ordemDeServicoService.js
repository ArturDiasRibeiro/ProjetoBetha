angular
  .module("ProjetoBethaFrontEnd")
  .service("ordemDeServicoService", function ($http, configValue) {
    this.findAll = function () {
      return $http.get(configValue.apiUrl + "/ordemdeservicos");
    };
});