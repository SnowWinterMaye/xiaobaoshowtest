
    var app = angular.module('myApp',[]);
    
    //站点数据
    app.controller('myCtrl',function($scope){
        $scope.data =[{
            id: 1,
            place: '北京',
            status: 0,  //status(0:未到站 1：当前位置 ) 
            first:false, //是否始发站（false：非始发站 true：始发站）
            show:true //是否显示（true：显示 false：隐藏）
        },
        {
            id: 2,
            place: '天津',
            status: 0,
            first:false,
            show:true,
        },
        {
            id: 3,
            place: '上海',
            status: 0,
            first:false,
            show:true
        },
        {
            id: 4,
            place: '广州',
            status: 0,
            first:false,
            show:true
        },
        {
            id: 5,
            place: '杭州',
            status: 0,
            first:false,
            show:true
        },
        {
            id: 6,
            place:'深圳',
            status: 0,
            first:false,
            show:true
        }
        ];
     //添加新对象
     
     $scope.add = function(){
      
        $scope.addadd=true;
        $scope.cutcut=true;
        $scope.myPush=true;
        $scope.myCancel=true;
        $scope.addValue = true;
     }; 
     $scope.cancel = function(){
        $scope.addadd=false;
        $scope.cutcut=false;
        $scope.myPush=false;
        $scope.myCancel=false;
        $scope.addValue = false;
     };
     //添加数据
     $scope.push =function(){
         var a = {id: $scope.data.length+1 ,place:$scope.place,status:0,first:false,show:true};
         $scope.data.push(a);
         $scope.place="";
     };
      var cutFlag = false;
      $scope.cut = function(){
          if(cutFlag){
              $scope.myCut = false;
              cutFlag = false;
          }else{
              $scope.myCut = true;
              cutFlag = true; 
          }
         
      };
     //删除当前对象
     $scope.myDelete = function(e,index){
          e = e || window.event;
        //   console.log(e);
        //阻止冒泡
         if (e && e.stopPropagation){
            e.stopPropagation();    
        }
        else{
            e.cancelBubble=true;
        }
     
        $scope.data.splice(index,1);
  
     };
     
    //当前选中对象    
    var cur ={};
    $scope.selectValue = function (index) {
        // console.log(index);
        for(var i=0;i<$scope.data.length;i++){
            $scope.data[i].index = i;
            $scope.data[i].status = 0;
            $scope.data[i].show = false;
            if($scope.data[i].index == index){
               //保存当前选中城市索引
                cur.index = i;
                this.data[i].status = 1;
                this.data[i].show = true;
                //选择站点后显示显示切换键
                $scope.message =  '当前站：' + $scope.data[cur.index].place;
                //隐藏拖动条
                $scope.toTop = false;
                $scope.toBottom = true;
            }
        }
        };
     $scope.toTop = false;
     $scope.toBottom = true;
     $scope.message = '请选择始发站...';   
     $scope.display = function(){
         //变更显示状态
          $scope.message = '请选择...';
          //弹出乘车列表框
          $scope.toTop = true;
          $scope.toBottom = false;
          //重置所有始发站状态
           for(var i=0;i<$scope.data.length;i++){
          $scope.data[i].show = true;
           }
     };
        
     $scope.prev = function(){
       if(cur.index!==0&&!cur.index){
           alert('请先选择起点');$scope.toTop = true;
            for(var i=0;i<$scope.data.length;i++){
                $scope.data[i].show = true;
            }
        }else{
            for(var i=0;i<$scope.data.length;i++){
                $scope.data[i].status = 0;
            }
            if(cur.index < 1){
                $scope.data[0].status = 1;
                $scope.message =  '当前站：' + $scope.data[0].place;
            }else{
                $scope.data[cur.index-1].status = 1;
                $scope.message =  '当前站：' + $scope.data[cur.index-1].place;
                cur.index--;
            }
        }
     };
     
     $scope.next = function () {
          if(cur.index!==0&&!cur.index){
              alert('请先选择起点');
              $scope.toTop = true;
               for (var i = 0; i < $scope.data.length; i++) {
                    $scope.data[i].show = true;
                }
            }else{
                for (var i = 0; i < $scope.data.length; i++) {
                    $scope.data[i].status = 0;
                }
                if (cur.index > $scope.data.length-2) {
                    $scope.data[$scope.data.length-1].status = 1;
                    $scope.message =  '当前站：' + $scope.data[$scope.data.length-1].place;
                } else {
                    $scope.data[cur.index + 1].status = 1;
                    $scope.message =  '当前站：' + $scope.data[cur.index+1].place;
                    cur.index++;
                }
            }
        
     };
    });//控制器结束
   
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
            template:'<div ng-class="{\'curr\': first==true}" ng-click="selectValue(index)">{{city}}<em ng-if="myCut" ng-click="myDelete(event,index)" >X </em></div>',
            replace: true,
            scope:{
                city:'@myCity',
                index:"@cityIndex",
                selectValue: "&cityFn",
                myDelete:"&delFn",
                first:"@weFirst",
                myCut:"@"
            }
        };
    });