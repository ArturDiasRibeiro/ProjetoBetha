angular
  .module("ProjetoBethaFrontEnd")
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");

    // HomePage //
    $routeProvider.when("/homepage", {
      templateUrl: "view/homepage.html",
    });

    // Clientes //
    $routeProvider.when("/clientes", {
      templateUrl: "view/clientes.html",
      controller: "clienteController",
    });

    $routeProvider.when("/clientes/find/:id", {
      templateUrl: "view/findClientes.html",
      controller: "findClientesController",
    });

    $routeProvider.when("/clientes/inserircliente", {
      templateUrl: "view/inserirCliente.html",
      controller: "inserirClienteController",
    });

    $routeProvider.when("/clientes/alterarcliente/:id", {
      templateUrl: "view/alterarCliente.html",
      controller: "alterarClienteController",
    });

    // Funcionarios //
    $routeProvider.when("/funcionarios", {
      templateUrl: "view/funcionarios.html",
      controller: "funcionarioController",
    });

    $routeProvider.when("/funcionarios/alterarfuncionario/:id", {
      templateUrl: "view/alterarFuncionario.html",
      controller: "alterarFuncionarioController",
    });

    $routeProvider.when("/funcionarios/inserirfuncionario", {
      templateUrl: "view/inserirFuncionario.html",
      controller: "inserirFuncionarioController",
    });

    // Ordem De Serviços //
    $routeProvider.when("/ordemdeservicos", {
      templateUrl: "view/ordemDeServicos.html",
      controller: "ordemDeServicoController",
    });

    $routeProvider.when("/ordemdeservicos/find/:id", {
      templateUrl: "view/findOrdemDeServico.html",
      controller: "findOrdemDeServicoController",
    });

    $routeProvider.when("/ordemdeservicos/inserirordem", {
      templateUrl: "view/inserirOrdemDeServico.html",
      controller: "inserirOrdemDeServicoController",
    });

    $routeProvider.when("/ordemdeservicos/alterarordem/:id", {
      templateUrl: "view/alterarOrdemDeServico.html",
      controller: "alterarOrdemDeServicoController",
    });

    // Login //
    $routeProvider.when("/login", {
      templateUrl: "view/login.html",
      controller: "loginController",
    });

    $routeProvider.otherwise("/homepage");
  });
