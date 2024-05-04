const mongoose = require("mongoose");
const colors = require("colors");

// mongo db db connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to Database ${mongoose.connection.host} `.bgWhite);
  } catch (error) {
    console.log("db error ", error, colors.bgRed);
  }
};

module.exports = connectDB;
