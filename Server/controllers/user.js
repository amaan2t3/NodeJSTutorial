const User = require("../models/user")

async function handleGetAllUser(req , res) {
    const allDbUsers = await User.find({})

    return res.status(201).json(allDbUsers);
}

async function handleGetUserById(req , res) {
      const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.json(user);
    
}

async function handleGetUpdateById(req , res) {
    await User.findByIdAndUpdate(req.params.id,{last_name :"Changed"})
       return res.json({status:"Success"})
    
}

async function handleGetDeleteById(req , res) {
     await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "User Deleted"});
    
}

async function handleCreateNewUser(req , res) {
    const body = req.body;
  console.log("body:", body);
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.jobtitle
  ) {
    return res.status(400).json("Bad Request");
  }
  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    jobtitle: body.jobtitle,
    gender: body.gender,
  });
  console.log("result:", result);

  return res.status(201).json({ msg: "success" , id:result.id})
    
}
    


module.exports ={
    handleGetAllUser,
    handleGetUserById,
    handleGetUpdateById,
    handleGetDeleteById,
    handleCreateNewUser,
}