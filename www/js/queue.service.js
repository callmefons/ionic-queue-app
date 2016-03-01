(function(){
  var app = angular.module('queup');

  app.factory('queueService', function(){
    var people = [
      {
        id:'1',
        name: 'Tittaya',
        status: 'waiting queue'
      },
      {
        id:'2',
        name: 'Nattaya',
        status: 'waiting queue'
      }
    ];

    function indexOf(id){
      for (var i = 0; i < people.length; i++) {
        if(people[i].id === id){
          return i;
        }
      }

      return -1;
    }

    return {
      getPeople: function(){
        return people;
      },

      getPerson : function(id){
        return people[indexOf(id)];
      },

      updatePerson: function(person){
        people[indexOf(person.id)] = person;
      },

      deletePerson: function(id){
        var i = indexOf(id);
        people.splice(i,1);
      },

      addPerson : function(person){
        person.id = people.length + 1 + '';
        people.push(person);
      } 

    };

  });

})();