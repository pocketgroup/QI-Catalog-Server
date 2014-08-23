'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

        $scope.redirectLink = function () {
            var link = 'http://acme.marcelmika.com/html/products.html';
            // Redirect parent to the product website
            window.parent.location.assign(link);
        }
  }]);
