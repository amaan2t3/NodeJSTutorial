const express = require('express')
const users = require('./MOCK_DATA.json')
const fs = require('fs');
const  mongoose  = require('mongoose');
 

const PORT = 8000;

///connection

mongoose
.connect("mongodb://127.0.0.1:27017/MongoBD-test")
.then( ()=>console.log("Mongodb Connected"))
.catch((err)=>console.log("Mongo Error",err));

/////////// Schema

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        require: true
    },
    last_name:{
        type: String
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    jobtitle:{
        type: String
    },
    gender:{
        type: String
    }
},{timestamps: true})

const User = mongoose.model("user", userSchema)

const app = express()
/////////////////Middleware --- Plugin
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // VERY IMPORTANT for Postman JSON

//////////Custom Middleware --------------- Plugin
app.use((req, res, next) => {
    fs.appendFile("log.txt",
        `${Date.now()}: ${req.ip} ${req.method}: ${req.path}\n`,
        (err, data) => {
            next();
        }
    );
});

//////////////////////ROUTE
/////////home page
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});
////////////////////// HTML render

app.get("/users", async (req, res) => {
    const allDbUsers = await User.find({})
    const html = `
    <ul>
       ${allDbUsers.map((user) => `<li>${user.first_name} -
       ${user.email} </li>`).join("")}
    </ul> `
    res.send(html)
})
//////////////////////// JSON Render

app.get("/api/users",  async (req, res) => {
        const allDbUsers = await User.find({})

    res.setHeader("X-MyName", "Amaan");
    console.log(req.headers); ///////////// custom header always add X to custom header

    return res.status(201).json(allDbUsers);
})

//////////////////get only one user
app.route("/api/users/:id") ///////////////  only one user
    .get( async (req, res) => {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.json(user);
    })  ////////////// edit user
    .patch(async (req, res) => {
       await User.findByIdAndUpdate(req.params.id,{last_name :"Changed"})
       return res.json({status:"Success"})
    })
    /// delete
    .delete(async (req, res) => {
        await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "User Deleted"});
    })

//////////////////// Create a user
app.post("/api/users", async (req, res) => {
    ///// user create
    const body = req.body;
    console.log("body:", body)
    if (!body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.jobtitle) {
        return res.status(400).json("Bad Request")

    };
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        jobtitle: body.jobtitle,
        gender:body.gender,
    });
    console.log("result:" ,result);

    return res.status(201).json({msg: "success"})
     
});




app.listen(PORT, () => {
    console.log(`Server Started ${PORT}`);

})
