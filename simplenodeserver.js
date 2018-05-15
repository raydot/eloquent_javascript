//QnD Node server for testing scripts

//Files you want loaded go here:
//require('./ch03_Functions/recursion.js');

// const http = require('http');
// const url = require('url');
// const fs = require('fs');
// const path = require('path');
// const baseDirectory = __dirname //or whatever you want!
// const port = 1234;

/*const requestHandler = (request, response) => {
	console.log(request.url);
	response.end('Hello from the Node.js Server!');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if (err) {
		return console.log('Ooops, something bad happened!', err);
	}

	console.log(`Server listening on port ${port}`)
});*/

// let app = http.createServer(function (request, response) {

// 	try {
// 		var requestUrl = url.parse(request.url);
// 		var fsPath = baseDirectory+path(requestUrl.pathname);

// 		var filestream = fs.createReadStream(fsPath);
// 		fileStream.pipe(response)
// 		fileStream.on('open', function() {
// 			response.writeHead(200);
// 		});

// 		fileStream.on('error', function(e) {
// 			response.writeHead(404);  //that's the only error we got!
// 			response.end()
// 		});
// 	} catch(e) {
// 		response.writeHead(500);
// 		response.end() //so the browser doesn't hang
// 		console.log(e.stack);
// 	}

	//var requestUrl = url.parse(request.url);
	//response.writeHead(200);
	//fs.createReadStream(requestUrl.pathname).pipe(response);
// }).listen(port)

// app.use(ignoreFavicon);

// console.log(`Tune your radio to localhost:${port}`);

// // DAMNIT FAVICON!
// function ignoreFavicon(req, res, next) {
//   if (req.originalUrl === '/favicon.ico') {
//     res.status(204).json({nope: true});
//   } else {
//     next();
//   }
// }

const csp = require(`helmet-csp`);

const express = require('express');
const app = express();
const port = 1234;

app.get('/', (req, res) => res.send('Dave rules!'))

app.use(csp({
  directives: {
    defaultSrc: [`'self'`],
    imgSrc: [`'self'`]
  }
}))

app.use(express.static('ch03_Functions'))

app.listen(port, () => `Tune your radio to loaclhost:${port}`)





