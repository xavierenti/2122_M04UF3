#!/usr/bin/node

let http = require("http");
let fs = require("fs");

let http_server = http.createServer(function(req, res){
	
	if(req.url == "/character.png"){
		fs.readFile("characters.png", function(err,res){
			if (err){
				console.log("Error");
				return
			}
			res.writeHead(200);
			res.end(data);
		});
	
			return

	}

	fs.readFile("index.html", function(err, data){
		if(err){
			console.log("Error");
			return
		}
		
	

	res.writeHead(200);

	res.end(data);
});
	
}).listen(1095);

