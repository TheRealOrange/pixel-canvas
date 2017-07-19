var http    = require('http');
var express = require('express');
var app     = express();
var path    = require('path');

app.use(express.static('./public'));
app.set('view engine', 'ejs');

/*
app.get("/", function(req, res){
    res.render('index');
})
*/


var server = app.listen(8000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('App listening at http://%s:%s', host, port);
});
