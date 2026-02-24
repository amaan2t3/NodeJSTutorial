const http = require('http');
const fs = require('fs');

//////////////// created http server Modern Method node 24 -v

const server = http.createServer((req, res) => {

  if (req.url === "/favicon.ico") return res.end();

  const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;

  // ✅ Modern URL API (Node 18+ / 20+ / 24+)
  const MyURL = new URL(req.url, `http://${req.headers.host}`);

  fs.appendFile("log.txt", log, (err) => {

    if (err) {
      res.statusCode = 500;
      return res.end("Server Error");
    }

    switch (MyURL.pathname) {

      case "/":
        if (req.method === "GET") {
          return res.end("Home Page");
        }
        break;

      case "/about":
        const username = MyURL.searchParams.get("username");
        return res.end(`Hey, ${username}`);

      case "/search":
        // ✅ FIXED (modern query access)
        const search = MyURL.searchParams.get("search_query");
        return res.end("Here are your result for, " + search);
        case "/signup":
        if (req.method === 'GET') {
          return res.end("This is a signup Form")
        }else if(req.method === 'POST'){
          //// DB Query
          return res.end("signUp is completed")
        }
          

      default:
        return res.end("404 not found");
    }

  });

});
///////////////Server run on browsec
server.listen(8000, () => {
  console.log("server started");
});