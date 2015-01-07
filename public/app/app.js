/*global angular:false */

(function() {
  'use strict';
  angular.module('freemydiary', []);

  function MainCtrl () {
    console.log('hello world from angular');
  }
  function SomeService () {

  }
  angular
  .module('freemydiary')
  .controller('MainCtrl', MainCtrl)
  .service('SomeService', SomeService);
})();
