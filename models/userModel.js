const mongoose = require("mongoose");

// Schema
const userModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "User Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    address: {
      type: Array,
    },
    phone: {
      type: String,
      required: [true, "Phone Number is required"],
    },
    usertype: {
      type: String,
      required: [true, "User Type is Required"],
      default: "client",
      enum: ["client", "admin", "vendor", "driver"],
    },
    profile: {
      type: String,
      default:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SnYzh4lsfrOarIgl_axMNgHaFF%26pid%3DApi&f=1&ipt=977ba35ebe82cc805fe29d57c342c7f0c91f01774e88f3f295b6353cc9214a5e&ipo=images",
    },
    answer: {
      type: String,
      required: [true, "Answer is required"],
    },
  },
  {
    timestamps: true,
  }
);

// export
module.exports = mongoose.model("user", userModel);
