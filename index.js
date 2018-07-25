var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    //response.end("Hello World!");
    response.end(<strong>"Hello, Mr. Christopher Witcher! Wzup? :D"</strong>);


});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
