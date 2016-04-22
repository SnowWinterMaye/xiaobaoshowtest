
    var app = angular.module('myApp',[]);
    
    //站点数据
    app.controller('myCtrl',function($scope){
        $scope.data =[{
            id: 1,
            place: '北京',
            status: 0,  //status(0:未到站 1：当前位置 ) 
            first:false //是否始发站（false：非始发站 true：始发站）
        },
        {
            id: 2,
            place: '天津',
            status: 0,
            first:false
        },
        {
            id: 3,
            place: '上海',
            status: 0,
            first:false
        },
        {
            id: 4,
            place: '广州',
            status: 0,
            first:false
        },
        {
            id: 5,
            place: '杭州',
            status: 0,
            first:false
        },
        {
            id: 6,
            place:'深圳',
            status: 0,
            first:false
        }
        ];
        
    var cur ={};
    $scope.selectValue = function (id) {
        for(var i=0;i<$scope.data.length;i++){
            $scope.data[i].status = 0;
            if($scope.data[i].id == id){
                this.data[i].status = 1;
                cur.index = i;
               $scope.message =  '当前站：' + $scope.data[cur.index].place;
            }
        }
        };
     
     $scope.message = '请选择始发站...';   
     $scope.display = function(){
         //变更显示状态
          $scope.message = '请选择...';
          //弹出乘车列表框
     };
        
     $scope.prev = function(){
        for(var i=0;i<$scope.data.length;i++){
            $scope.data[i].status = 0;
        }
        if(cur.index < 1){
             $scope.data[0].status = 1;
              $scope.message =  '当前站：' + $scope.data[0].place;
        }else{
            $scope.data[cur.index-1].status = 1;
            $scope.message =  '当前站：' + $scope.data[cur.index].place;
            cur.index--;
        }
     };
     
     $scope.next = function () {
         for (var i = 0; i < $scope.data.length; i++) {
             $scope.data[i].status = 0;
         }
         if (cur.index > $scope.data.length-2) {
             $scope.data[$scope.data.length-1].status = 1;
              $scope.message =  '当前站：' + $scope.data[$scope.data.length-1].place;
         } else {
             $scope.data[cur.index + 1].status = 1;
              $scope.message =  '当前站：' + $scope.data[cur.index].place;
             cur.index++;
         }
     };
    });
   
    app.directive('placeDetail',function(){
        return {
            restrict:'E',
            template:'<div ng-class="{\'active\':status==1}">{{city}}<em></em></div>',
            replace: true,
            scope:{
                city:'@myCity',
                index:'@cityIndex',
                status:'@cityStatus'
            }
        };
    });

    app.directive('placeList',function(){
        return {
            restrict:'E',
            template:'<div ng-class="\'curr\': first==true" ng-click="selectValue(id)">{{city}}<em ng-if="delete">X</em></div>',
            replace: true,
            scope:{
                city:'@myCity',
                id:"@cityId",
                selectValue: "&cityFn",
                first:"@weFirst",
            }
        };
    });