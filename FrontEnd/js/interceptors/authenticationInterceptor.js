angular
  .module("ProjetoBethaFrontEnd")
  .factory("authenticationInterceptor", function ($q, $location) {
    return {
      request: (config) => {
        config.headers.Authorization = localStorage.getItem("auth");
        return config;
      },
    };
  });
