(function () {
  angular.module('adminApp', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
        templateUrl: "./app/view/index.html",
        controller: 'IndexController',
        controllerAs: 'index'
      }).when('/products', {
        templateUrl: "./app/view/products.html",
        controller: 'ProductsController',
        controllerAs: 'products'
      });
    })
    .value("baseUrl", "http://localhost:3000/api/");
})();