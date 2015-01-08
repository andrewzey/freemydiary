(function () {
  var injectParams = ['MfpService'];

  var DiaryFormCtrl = function (MfpService) {
    // MfpService.validateUsername('azey47');
  };

  DiaryFormCtrl.$inject = injectParams;

  angular.module('freemydiaryApp')
  .controller('DiaryFormCtrl', DiaryFormCtrl);
}());
