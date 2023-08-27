const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req, res) => {
  const log = `${Date.now()}: New Req Received\n`;
  fs.appendFile("log.txt", log, (err, data) => { //(err, data) => { ... }: This is a callback function that will be executed after the append operation is complete. err will hold any error that occurred during the operation, and data will contain information about the written data.
    res.end("Hello from Server Again");
  });
});

myserver.listen(8080, () => console.log("Server Started..."));
