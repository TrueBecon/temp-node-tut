const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is a brief history about us");
    return;
  }
  res.end(`
   <h1>Oops</h1>
   <p>We can't seems to find the page you are looking for</p>
   <a href="/">back home</a>
   `);
});

server.listen(5000);
