(function () {
  angular.module('adminApp').service('ProductRepository', ['$http', '$q', 'baseUrl', ProductRepository]);

  function ProductRepository($http, $q, baseUrl) {
    function loadProducts() {
      var deferred = $q.defer();

      $http.get(baseUrl + 'products')
        .success(function (data) {
          deferred.resolve(data);
        })
        .error(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    return{
      LoadProducts: loadProducts
    };
  }
})();