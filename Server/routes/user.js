const express = require("express");
const {
  handleGetAllUser,
  handleGetUserById,
  handleGetUpdateById,
  handleGetDeleteById,
  handleCreateNewUser,
} = require("../controllers/user");
const router = express.Router();

//////////////////////ROUTE

router.route("/")
   .get( handleGetAllUser) ///// all users
   .post(handleCreateNewUser)   //// new user

router
  .route("/:id")
  .get(handleGetUserById) ///////////////  only one user
  .patch(handleGetUpdateById) ///////////// edit user
  .delete(handleGetDeleteById); /// delete



module.exports = router;
