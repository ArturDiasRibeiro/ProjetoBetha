angular
  .module("ProjetoBethaFrontEnd")
  .service("clienteService", function ($http, configValue) {
    this.findAll = function () {
      return $http.get(configValue.apiUrl + "/clientes");
    };

    this.findOneById = function (clienteId) {
      return $http.get(configValue.apiUrl + "/clientes/" + clienteId);
    };

    this.putCliente = function (cliente) {
      return $http.put(configValue.apiUrl + "/clientes/" + cliente.id, cliente);
    };

    this.postCliente = function (cliente) {
      return $http.post(configValue.apiUrl + "/clientes", cliente);
    };

    this.deleteCliente = function (clienteId) {
      return $http.delete(configValue.apiUrl + "/clientes/" + clienteId);
    };
  });
