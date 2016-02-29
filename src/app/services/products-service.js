(function () {
  angular.module('adminApp').service('ProductService', ['$http', '$q', 'ProductRepository', ProductService]);

  function ProductService($http, $q, ProductRepository) {
    var products = null;

    function loadProducts() {
      var deferred = $q.defer();

      ProductRepository.LoadProducts()
        .then(function (data) {
          products = data;
          deferred.resolve();
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function getProduct() {
      return products;
    }

    return{
      LoadProducts: loadProducts,
      GetProduct: getProduct
    };
  }
})();