const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// dotenv config
// dotenv.config({ path: "./.." }); defined env in a folder
dotenv.config(); // because it is root

// connection
connectDB();

// rest obj
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // which url hit and status code time taken
app.use("/api/v1/test", require("./routes/testRoute"));
app.use("/api/v1/auth", require("./routes/authRoute"));
app.use("/api/v1/user", require("./routes/userRoute"));

// route
app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome Food to servers api</h1>");
});

// port
const port = process.env.PORT || 8080;

// listen
app.listen(port, () => {
  console.log(`Node Server is Running on port ${port}`.white.bgMagenta);
});
