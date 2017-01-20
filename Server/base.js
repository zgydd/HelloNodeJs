/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var http = require('http');
http.createServer(function(req, res) {
	var postchunk = '';
	req.on('data', function(data) {
		res.writeHead(200, {
			'Content-type': 'text/plain'
		});
		postchunk += data;
	});
	req.on('end', function() {
		res.write(JSON.stringify(postchunk));
		res.end("Hello world!\n");
	})
}).listen(1337, "127.0.0.1");
console.log("Server running at http://127.0.0.1:1337/");