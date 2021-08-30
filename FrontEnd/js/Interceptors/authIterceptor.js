angular.module("ProjetoBethaFrontEnd").factory("authInterceptor", function($q) {
    return {
        request: (config) => {
            config.headers.Authorization = localStorage.getItem("token");
            return config;
        },
        requestError: (rejection) => {
            return $q.reject(rejection);
        },
        response: (response) => {
            return response;
        },
        responseError: (rejection) => {
            return $q.reject(rejection);
        }
    };
});
