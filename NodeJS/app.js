const http = require("http");
const fs = require("fs");
const url = require("url");
const moment = require("moment");
const today = moment().format("MMMM d, yyyy");
console.log(today);

const port = 8000;
const address = "127.0.0.1";

// Server

const readFileFunc = function (path, response) {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      response.end(`${err}`);
    }
    response.writeHead(200, { "Content-type": "text/html" });
    response.write(data);
    response.end();
  });
};

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/overview") {
    readFileFunc(`./public/overview.html`, res);
  } else if (req.url === "/contact" || req.url === "/register")
    readFileFunc(`./public/${req.url}.html`, res);
  else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.write(`<h1>404 Not Found</h1>`);
  }
});

server.listen(port, address, () => {
  console.log(`server is listening...`);
});

// Files
