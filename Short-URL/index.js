const express = require("express");
const path = require("path");
const urlRoute = require("./routes/urlRoute");
const { connectToMongoDB } = require("./connectMD");
const URL = require("./models/url");
const staticRouter = require("./routes/staticRouter");


const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("Mongodb Connected"),
);

//////// ejs

 app.set("view engine", "ejs");
 app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/" ,staticRouter);

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
