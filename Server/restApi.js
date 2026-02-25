const express = require('express')
const users = require('./MOCK_DATA.json')
const fs = require('fs')

const PORT = 8000;
////////////////////////ROUTE


const app = express()
/////////////////Middleware --- Plugin
app.use(express.urlencoded({ extended: false }));
/////////home page
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});
////////////////////// HTML render

app.get("/users", (req, res) => {
    const html = `
    <ul>
       ${users.map((user) => `<li>${user.first_name} </li>`).join("")}
    </ul>
    `
    res.send(html)
})
//////////////////////// JSON Render

app.get("/api/users", (req, res) => {
    return res.json(users)
})

//////////////////get only one user
app.route("/api/users/:id") ///////////////  only one user
    .get((req, res) => {
        const id = Number(req.params.id);

        const user = users.find((user) => user.id === id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.json(user);
    })  ////////////// edit user
    .patch((req, res) =>{
        const id = Number(req.params.id)
        const userIndex = users.findIndex((user)=> user.id === id)
    })
      /// delete
    .delete((req, res) => {
        const id = Number(req.params.id);

        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            return res.status(404).json({ message: "User not found" });
        }

        const deletedUser = users.splice(userIndex, 1);

        return res.json({ status: "User Deleted", user: deletedUser });
    })

//////////////////// Create a user
app.post("/api/users", (req, res) => {
    ///// user create
    const body = req.body;
    console.log("body:", body)
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {

        return res.json({ status: "Success", id: users.length })
    })





})




app.listen(PORT, () => {
    console.log(`Server Started ${PORT}`);

})
