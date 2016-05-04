angular.module('directive',['myService'])
//头部状态栏
  .directive('editorBarTop',function(){
     return{
         restrict: "E",
         template: "<div class='editorBarTop'></div>",
         replace: true,
         link:function(scope,element,attr){
           element.append('<div class="edit"><a href="#">编辑</a></div>');
           element.append('<div class="share"><a href="#">分享</a></div>');
           element.append('<div class="music"><a href="#">音乐</a></div>');
         }
     };
  })
  //企业信息活动栏
   .directive('activHeader',function(getData){
     return{
         restrict: "E",
         template: "<div class='activHeader'></div>",
         replace: true,
         link:function(scope,element,attr){
          //传入$http 对象,成功时返回数据
           getData.data()
           .success(function (data) {
           element.append('<div class="edit">'+data[0].host[0].name+'</div>');
           element.append('<div class="share">'+data[0].host[0].activity+'</div>');
            })
          .error(function (data, status) { 
            console.log('传入数据错误：' + status); 
          });
         }
        
     }; 
  })
   .directive('footerLink',function(){
     return{
         restrict: "E",
         template: "<div class='footerLink'></div>",
         replace: true,
         link:function(scope,element,attr){
           element.append('<div class="edit"><a href="#">我也要参加</a></div>');
         }
     };
  })
  