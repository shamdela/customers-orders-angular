(function (){
    
    var customerFactory = function($http){               
        
        var factory = {};
        
        factory.getCustomers = function(){
            return $http.get('/customers');
        };
        
        factory.getCustomer = function(customerId){
            return $http.get('/customers/' + customerId);
        };
        
        factory.getOrders = function(){
            return $http.get('/orders');
        };
        
        return factory;
    };
    
    customerFactory.$inject = ['$http'];
    
    angular.module('CustomerModule').factory('customerFactory', customerFactory);
    
}());