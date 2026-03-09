const express = require('express')
 
const userRouter = require("./routes/user")
const {connectMongoDB} = require("./connections")
const {logReqRes} = require("./middlewares/index")
 
const app = express()
const PORT = 8000;

///connection
connectMongoDB("mongodb://127.0.0.1:27017/MongoBD-test")

/////////////////Middleware --- Plugin
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // VERY IMPORTANT for Postman JSON

//////////Custom Middleware --------------- Plugin
app.use(logReqRes("log.txt"))

////////////////Routers
app.use("/api/users", userRouter)

app.listen(PORT, () => {
    console.log(`Server Started ${PORT}`);

})
