var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/'));


app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    
    for (var i=0; i < customers.length; i++){
        if (customers[i].id === customerId){
            data = customers[i];
            break;
        }
    }
    res.json(data);
});

app.get('/customers', function(req, res){
    res.json(customers);
    
    // Mimic an error returned
    //res.status(500).json({error: 'An error has occurred'});
});

app.get('/orders', function(req, res){
    var orders = [];    
    for (var i=0; i < customers.length; i++){    
        if (customers[i].order){            
            for (var j=0; j < customers[i].order.length; j++ ){
                orders.push(customers[i].order[j]);
            }
        }
    }    
    res.json(orders);
});

app.listen(8080);

console.log('Express listening on port 8080');

var customers = [
    {
        id: 1,
        name: 'John',
        city: 'Dublin',
        orderTotal: '99.156',
        joined: '2015-12-11',
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
        name: 'Brian',
        city: 'Galway',
        orderTotal: '78.956',
        joined: '2014-05-01',
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
        name: 'Kevin',
        city: 'Kilkenny',
        orderTotal: '54.499',
        joined: '2011-08-11',
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
        name: 'Frank',
        city: 'Cork',
        orderTotal: '20.5064',
        joined: '2013-08-05',
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