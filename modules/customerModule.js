(function (){
    
    var app = angular.module ('CustomerModule', ['ngRoute']);
    
    app.config(function ($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'CustomerController',
                templateUrl: '/views/customers.html'
            })
            .when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: '/views/orders.html'     
            })
            .when('/orders', {
                controller: 'AllOrdersController',
                templateUrl: '/views/allorders.html'     
            })
            .otherwise({ redirectTo: '/' });
    });
    
}());