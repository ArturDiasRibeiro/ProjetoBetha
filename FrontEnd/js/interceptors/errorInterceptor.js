angular
  .module("ProjetoBethaFrontEnd")
  .factory("errorInterceptor", function ($q, $location) {
    return {
      responseError: function (rejection) {
        if (localStorage.getItem("auth") == undefined) {
          $location.path("/login");
        } else if (rejection.status === 403) {
          $location.path("/erro403");
        }
        return $q.reject(rejection);
      },
    };
  });
