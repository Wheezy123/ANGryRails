angular.module("startupNews", [])
  .controller("MainCtrl", [
    '$scope',
    function($scope){
      $scope.test = 'Hello World!';
    }
  ]);