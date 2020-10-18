"use strict";

var http = require('http');

fs = require('fs');
var hostname = '127.0.0.1';
var port = 3000;
http.createServer(function (req, res) {
  fs.readFile('index.html', function (err, data) {
    console.log("server running in port : ", port);
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': data.length
    });
    res.write(data);
    res.end();
  });
}).listen(port);