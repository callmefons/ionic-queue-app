(function(){

  var app = angular.module('queup', ['ionic']);


  app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/queue');

    $stateProvider
    .state('queue',{
      url: '/queue',
      templateUrl: 'templates/queue.html'
    })
    .state('edit',{
      url: '/edit/:personId',
      templateUrl: 'templates/edit.html'
    });

  });

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


  app.controller('QueueController', function($scope, queueService){
    $scope.queue = queueService.getPeople();
  });


  app.controller('EditController', function($scope, $state, queueService){
    
    // $scope.person = queueService.getPerson($state.params.personId); 
    $scope.person = angular.copy(queueService.getPerson($state.params.personId)); 

    $scope.save = function(){
      queueService.updatePerson($scope.person);
      $state.go('queue');
    };
    
    $scope.delete = function(){
      queueService.deletePerson($scope.person.id);
      $state.go('queue');
    }
  });

})();
