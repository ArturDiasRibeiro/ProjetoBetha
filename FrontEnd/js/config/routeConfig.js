angular.module("ProjetoBethaFrontEnd").config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('')

    $routeProvider.when("/clientes", {
        templateUrl: "view/clientes.html",
        controller: "clienteController"
    })

    $routeProvider.when("/clientes/find/:id", {
        templateUrl: "view/findClientes.html",
        controller: "findClientesController"
    })

    $routeProvider.when("/clientes/inserircliente", {
        templateUrl: "view/inserirCliente.html",
        controller: "inserirClienteController"
    })

    $routeProvider.when("/clientes/alterarcliente/:id", {
        templateUrl: "view/alterarCliente.html",
        controller: "alterarClienteController"
    })

    // $routeProvider.when("/funcionarios", {
    //     templateUrl: "view/funcionarios.html",
    //     controller: "funcionarioController"
    // })

    /*  $routeProvider.when("/ordemdeservicos", {
          templateUrl: "view/ordemdeservicos.html",
          controller: "ordemdeservicoController"
      })
  
      $routeProvider.when("/home", {
          templateUrl: "view/home.html",
          controller: "homeController"
      })
  
      $routeProvider.when("/login", {
          templateUrl: "view/login.html",
          controller: "loginController"
      }) */

    $routeProvider.otherwise("/clientes")
})
