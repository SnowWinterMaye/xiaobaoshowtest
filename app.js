
    angular.module('exampleApp',[])
      .directive('scopeDemo',function(){
        return{
          template:function(){
            return angular.element(document.querySelector('#scopeTemplate')).html();
          },
           scope: {
               sex:'@',
               local: "=nameprop",//数据的双向绑定要通过=前缀标识符实现，所以不可以使用{{}}
               cityFn:"&city"//绑定函数
           }
        };
      })
      .controller('scopeCtrl',function($scope){
        $scope.data = {
            sex: '男',
            name:"daniel",
            defaultCity:"HangZhou"
        };
        $scope.getCity = function (name) {
            return name == "daniel" ? $scope.data.defaultCity : "Unknown";
        };
      });
