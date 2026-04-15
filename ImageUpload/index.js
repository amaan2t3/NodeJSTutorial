///
import path from "path";
import express from "express";
import multer from "multer";
 
 
const app = express();
const PORT = 3000;
// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null,  `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });
// Set up EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
// Middleware to parse form data
app.use(express.urlencoded({ extended: false }));
 // Routes
app.get("/", (req, res) => {
    res.render("home");
});
app.post("/upload", upload.single("Image"), (req, res) => {
    console.log(req.file);
     res.send("File Uploaded Successfully");
});

// Start the server
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});