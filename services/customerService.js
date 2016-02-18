(function (){
    
    var customerService = function(){
        
        var customers = [
            {
                id: 1,
                name:'John', 
                city:'Dublin', 
                orderTotal:'99.156', 
                joined:'2015-12-11',
                order: [
                    {
                        id: 101,
                        product: 'Hurley',
                        total: 19.995
                    },
                    {
                        id: 102,
                        product: 'Helmet',
                        total: 35.995
                    },
                    {
                        id: 102,
                        product: 'Boots',
                        total: 35.995
                    }
                ]
            }, 
            {
                id: 2,
                name:'Brian', 
                city:'Galway', 
                orderTotal:'78.956', 
                joined:'2014-05-01',
                order: [
                    {
                        id: 201,
                        product: 'Football',
                        total: 8.956
                    }
                ]
            }, 
            {   
                id: 3,
                name:'Kevin', 
                city:'Kilkenny', 
                orderTotal:'54.499', 
                joined:'2011-08-11',
                order: [
                    {
                        id: 301,
                        product: 'Hurley',
                        total: 19.995
                    },
                    {
                        id: 302,
                        product: 'Helmet',
                        total: 35.995
                    }
                ]
            },
            {
                id: 4,
                name:'Frank', 
                city:'Cork', 
                orderTotal:'20.5064', 
                joined:'2013-08-05',
                order: [
                    {
                        id: 401,
                        product: 'Baseball',
                        total: 9.995
                    },
                    {
                        id: 402,
                        product: 'Bat',
                        total: 9.995
                    }
                ]
            }
        ];               
        
        this.getCustomers = function(){
            return customers;  
        };
        
        this.getCustomer = function(customerId){
            for (var i = 0; i < customers.length; i++){
                if (customers[i].id === parseInt(customerId)){
                    return customers[i];                   
                }
            } 
            return {};
        };
                
    };
    
    angular.module('CustomerModule').service('customerService', customerService);
    
}());