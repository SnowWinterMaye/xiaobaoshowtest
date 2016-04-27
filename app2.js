angular.module('myApp', [])
  .controller('MessageController', function ( $scope ) {
      sb={name:'daniel',gender:'female',age:18}
  })
  .directive("eNamecard",function(){
      return{
        restrict:"E",
        template:"<div class='namecard'>",
        replace:true,
        link: function(scope,element,attrs){
            var sb = scope.$eval(attrs.data);
            console.log(sb);
            element.append("<div>name : " + sb.name + "</div>")
				.append("<div>gender : " + sb.gender + "</div>")
				.append("<div>age : " + sb.age + "</div>");
        }
      };
  });