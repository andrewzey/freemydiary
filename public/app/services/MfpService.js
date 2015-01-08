(function () {
  var injectParams = ['$http'];

  var MfpService = function ($http) {
    var factory = {};

    factory.validateUsername = function (username) {
      return $http.get('api/userCheck/' + username)
      .then(function (results) {
        return console.log(results.data);
      });
    };

    return factory;
  };

  MfpService.$inject = injectParams;

  angular.module('freemydiaryApp')
  .factory('MfpService', MfpService);
}());
