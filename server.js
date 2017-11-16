// can we run it on https thanks
//we need http too for dev, but added https because tilapia tilapianess
var http    = require('http');
var https   = require('https');
var express = require('express');
var app     = express();
var path    = require('path');

app.use(express.static('./public'));
app.set('view engine', 'ejs');


app.get("/", function(req, res){
    res.render('index', {
		auth: {
			name: "TheNightOwl"
		}
	});
})

var server = app.listen(2048, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('App listening at http://%s:%s', host, port);
});
