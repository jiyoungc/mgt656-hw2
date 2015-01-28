var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!I am hungry!!');
});

app.get('/nickname', function(request, response){
    response.send('ok-barracuda');
});

app.listen(process.env.PORT || 4000);