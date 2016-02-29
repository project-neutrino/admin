(function () {
  angular.module('adminApp')
    .controller('ProductsController', ['$scope', 'ProductService', ProductsController]);

  function ProductsController($scope, ProductService){
    var vm = this;
    vm.Title = "PRODUCTS";
    init();

    function init() {
      //console.log('init');
      ProductService.LoadProducts();

    }
  }
})();