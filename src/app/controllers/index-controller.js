(function () {
  angular.module('adminApp').controller('IndexController', ['$scope', IndexController]);

  function IndexController($scope){
    var vm = this;
    vm.Name = 'Hello';
  }
})();