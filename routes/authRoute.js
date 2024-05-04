const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authController");

// router object
const router = express.Router();

// routes
// register || POST
router.post("/register", registerController);

// login || POST
router.post("/login", loginController);

// export
module.exports = router;
