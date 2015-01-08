(function() {
  // angular.module('freemydiaryApp')
  // .directive('validateMfpName', ['$http', function($http){
  //   return {
  //     restrict: 'A',
  //     require: 'ngModel',
  //     link: function(scope, element, attrs, ctrl) {
  //       scope.$watch(attrs.ngModel, function() {
  //         $http({
  //           method: 'POST',
  //           url: '/api/check/' + attrs.ensureUnique,
  //           data: {'field': attrs.ensureUnique}
  //         }).success(function(data, status, headers, cfg) {
  //           ctrl.$setValidity('unique', data.isUnique);
  //         }).error(function(data, status, headers, cfg) {
  //           ctrl.$setValidity('unique', false);
  //         });
  //       });
  //     }
  //   };
  // }])
})();
