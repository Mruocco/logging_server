const http = require('http');
const server = http.createServer();

server.on('request', (request, response) => {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
     //   console.log(request.headers);
//        if((request.headers['user-agent'] !== 'homeintel-communication-publisher') && request.headers['User-Agent'] !== 'homeintel-communication-publisher'){
          //response.end();
          //return;
  //      }

        console.log('===================')
        console.log(`==== ${request.method} - ${request.url}`);
        console.log('> Headers');
        console.log(request.headers);

        console.log('> Body');
        console.log(body);
        console.log('===================')
        response.end();
    });
}).listen(80);
