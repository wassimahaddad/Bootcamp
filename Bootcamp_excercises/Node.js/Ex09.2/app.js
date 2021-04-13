const http = require("http");
const fs = require("fs");
port = 3000;

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      fs.readFile("./public/index.html", "UTF-8", function (err, html) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      });
    } else if (req.url === "/index.html") {
      fs.readFile("./public/index.html", "UTF-8", function (err, file) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(file);
      });
    } else if (req.url === "/index.css") {
      fs.readFile("./public/index.html", "UTF-8", function (err, file) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(file);
      });
    } else if (req.url.indexOf("css") != -1) {
      res.writeHeader(200, { "Content-type": "text/css" });
      fs.readFile("./public/index.css", function (err, file) {
        if (err) throw err;
        res.end(file);
      });
    } else if (req.url === "/raw-html") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Welcome</h1>");
      res.end();
    } else if (req.url === "/users") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ a: 1, b: 2, c: 3 }));
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("404 Page not found!");
      res.end();
    }
  })
  .listen(3000, () =>
    console.log(`server is running on http://localhost:${port}`)
  );
