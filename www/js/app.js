(function(){

  var app = angular.module('queue', ['ionic']);

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });


  app.controller('QueueController', function($scope){
    
    $scope.queue = [
      {
        name: 'Tittaya Mairittha',
        status: 'Waiting in queue'
      },
      {
        name: 'Nattaya Mairittha',
        status: 'Waiting in queue'
      }
    ];

  });

})();
