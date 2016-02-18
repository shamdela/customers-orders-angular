(function (){
   
    var AllOrdersController = function ($scope, $log, customerFactory){
        
        $scope.orders = [];
        $scope.ordersTotal = 0.0;
        $scope.totalType;
        
        function init(){
            customerFactory.getOrders()
                .success(function(orders){
                    $scope.orders = orders;
                    getOrdersTotal();
                })
                .error(function(data, status, headers, config) {  
                    // handle error
                    $log.log(data.error + ' ' + status);
                });
        }
        
        function getOrdersTotal (){
            var total = 0;
            for (var i=0; i < $scope.orders.length; i++){
                total += $scope.orders[i].total;
            }
            $scope.ordersTotal = total;
            $scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger';
        }
        
        init();
                  
    };
    
    AllOrdersController.$inject = ['$scope', '$log', 'customerFactory'];
    
    angular.module('CustomerModule').controller('AllOrdersController', AllOrdersController);
    
}());