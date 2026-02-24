const express = require('express')

const app = express()

app.get('/' ,(req , res)=>{
    return res.send('This is Home Page')
});
app.get('/about' ,(req , res)=>{
    const username = req.query.username
    return res.send(` Hey, ${username}`)

})
app.get('/signup' ,(req , res)=>{
    return res.send("This is SignUp page")

})

app.listen(8000 , ()=>{
    console.log("Server is Started");
    
})