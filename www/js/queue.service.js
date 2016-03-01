(function(){
  var app = angular.module('queup');

  app.factory('Queue', function($firebaseArray){

    var ref = new Firebase('https://cfcfon-queueapp.firebaseio.com/');
    return $firebaseArray(ref);



    // var people = [
    //   {
    //     id:'1',
    //     name: 'Tittaya',
    //     status: 'waiting queue',
    //     updateTime: moment().subtract(10,'minutes')
    //   },
    //   {
    //     id:'2',
    //     name: 'Nattaya',
    //     status: 'waiting queue',
    //     updateTime: moment().subtract(5,'minutes')
    //   }
    // ];

    // function indexOf(id){
    //   for (var i = 0; i < people.length; i++) {
    //     if(people[i].id === id){
    //       return i;
    //     }
    //   }

    //   return -1;
    // }

    // return {
    //   getPeople: function(){
    //     return people;
    //   },

    //   getPerson : function(id){
    //     return people[indexOf(id)];
    //   },

    //   updatePerson: function(person){
    //     person.updateTime = moment();
    //     people[indexOf(person.id)] = person;
    //   },

    //   deletePerson: function(id){
    //     var i = indexOf(id);
    //     people.splice(i,1);
    //   },

    //   addPerson : function(person){
    //     person.updateTime = moment();
    //     person.id = people.length + 1 + '';
    //     people.push(person);
    //   } 

    // };

  });

})();