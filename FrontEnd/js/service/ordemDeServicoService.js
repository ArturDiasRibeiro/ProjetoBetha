angular
  .module("ProjetoBethaFrontEnd")
  .service("ordemDeServicoService", function ($http, configValue) {
    this.findAll = function () {
      return $http.get(configValue.apiUrl + "/ordemdeservicos");
    };

    this.findOneById = function (ordemDeServicoId) {
      return $http.get(
        configValue.apiUrl + "/ordemdeservicos/" + ordemDeServicoId
      );
    };

    this.putOrdemDeServico = function (ordemDeServico) {
      return $http.put(
        configValue.apiUrl + "/ordemdeservicos/" + ordemDeServico.id,
        ordemDeServico
      );
    };

    this.postOrdemDeServico = function (ordemDeServico) {
      return $http.post(
        configValue.apiUrl + "/ordemdeservicos",
        ordemDeServico
      );
    };

    this.deleteOrdemDeServico = function (ordemDeServicoId) {
      return $http.delete(
        configValue.apiUrl + "/ordemdeservicos/" + ordemDeServicoId
      );
    };

    this.adicionarImagem = function (equipamentoId, imageFile) {
      var formData = new FormData();
      formData.append("file", imageFile, imageFile.name);

      return $http.post(
        configValue.apiUrl + "/equipamentos/uploadfotos/" + equipamentoId,
        formData,
        {
          headers: { "Content-Type": undefined },
        }
      );
    };
  });
