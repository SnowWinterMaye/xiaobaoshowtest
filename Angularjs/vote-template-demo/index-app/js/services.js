angular.module('myService',[])
 .factory('getData',function($http){
     var promise;
     return{
          data: function(){
            promise = $http.get("../mock.json");
            return promise;
          },
     };
          
 });
 