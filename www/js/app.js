(function(){

  var app = angular.module('queup', ['ionic', 'angularMoment', 'firebase']);


  app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('queue',{
      url: '/queue',
      controller: 'QueueController',
      templateUrl: 'templates/queue.html'
    })
    .state('edit',{
      url: '/edit/:personId',
      controller : 'EditController',
      templateUrl: 'templates/edit.html'
    })
    .state('add',{
      url: '/add',
      controller : 'AddController',
      templateUrl: 'templates/edit.html'
    });

    $urlRouterProvider.otherwise('/queue');

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


  app.controller('QueueController', function($scope, $state, Queue){
    
     $scope.queue = Queue;
    //$scope.queue = Queue.getPeople();

    // $scope.queue.$loaded(function(){

    //   if($scope.queue.length === 0){
    //     $scope.queue.$add({
    //       name: 'Tittaya Mairittha',
    //       status: 'Added to queue',
    //       updateTime: Firebase.ServerValue.TIMESTAMP
    //     });
    //     $scope.queue.$add({
    //       name: 'Nattaya Mairittha',
    //       status: 'Added to queue',
    //       updateTime: Firebase.ServerValue.TIMESTAMP
    //     });
    //   }

    // });

    $scope.add = function(){
      $state.go('add');
    };

    $scope.delete = function(person){
      // Queue.deletePerson(personId);
      Queue.$remove(person);
    };

  });


  app.controller('EditController', function($scope, $state, Queue){
    var person = Queue.$getRecord($state.params.personId);
    $scope.person = angular.copy(person);
    
    // $scope.person = Queue.getPerson($state.params.personId); 
    //$scope.person = angular.copy(Queue.getPerson($state.params.personId)); 

    // $scope.save = function(){
    //   Queue.updatePerson($scope.person);
    //   $state.go('queue');
    // };

    $scope.save = function(){
      person.name =  $scope.person.name;
      person.status = $scope.person.status;
      person.updateTime = Firebase.ServerValue.TIMESTAMP;
      Queue.$save(person);
      $state.go('queue');
    };
    
    $scope.delete = function(){
      Queue.$remove(person);
      // Queue.deletePerson($scope.person.id);
      $state.go('queue');
    }
  });

  app.controller('AddController', function($scope, $state, Queue){
    $scope.person = {
      name: '',
      status: 'waiting in queue'
    };

    $scope.save = function(){
      // Queue.addPerson($scope.person);
      // $state.go('queue');
      $scope.person.updateTime = Firebase.ServerValue.TIMESTAMP;
      Queue.$add($scope.person);
      $state.go('queue');
    };
  });

})();



