const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} Req Received\n`;
  fs.appendFile("log.txt", log, (err, data) => { 
    switch(req.url){
        case '/': res.end("Home Page"); break;
        case '/about': res.end("About page"); break;
        default: res.end("Default Page"); break;
    }
    res.end("Hello from Server Again");
  });
});

myserver.listen(8080, () => console.log("Server Started..."));
