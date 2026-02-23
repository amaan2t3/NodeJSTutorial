
const http = require('http')
const fs = require('fs')

//////////////// created http server


const sever = http.createServer((req, res) => {

  const log = `${Date.now()}: ${req.url} New Req Received\n`
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page")
        break;
      case "/about":
        res.end("This is About Page")
        break;
      default:
        res.end("404 not found")
        break;
    }
    res.end("hello World! server is run Again")
  })
})

sever.listen(8000, () => {
  console.log("server started");

})
