const express = require("express");
const {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteUserController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

// router object
const router = express.Router();

// routes
// GET user
router.get("/getUser", authMiddleware, getUserController);

// UPDATE user
router.put("/updateUser", authMiddleware, updateUserController);

// UPDATE password
router.post("/updatePassword", authMiddleware, updatePasswordController);

// RESET password
router.post("/resetPassword", authMiddleware, resetPasswordController);

// DELETE user
router.delete("/deleteUser/:id", authMiddleware, deleteUserController);

// export
module.exports = router;
