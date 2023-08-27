const http = require("http");

const myserver = http.createServer((req, res) => {  //This line creates an HTTP server using the createServer method from the http module. The method takes a callback function as an argument, which will be executed whenever a request is made to the server. req means request and res means response
  console.log(req); //req contains various properties and methods that provide information about the request, such as the URL, HTTP headers, request method (GET, POST, etc.), and more. 
  res.end("Hello from Server"); //This line sends an HTTP response back to the client. The res object represents the response that the server will send to the client. The end method is used to send the response content. 
});

myserver.listen(8080, () => console.log("Server Started...")); //The listen() method tells the server to start listening on a specific port for incoming HTTP requests. It takes two arguments: 8080: This is the port number on which the server will listen for incoming requests. () => console.log("Server Started..."): This is a callback function that will be executed once the server starts listening on the specified port. 
