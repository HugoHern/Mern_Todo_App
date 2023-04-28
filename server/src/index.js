const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
//importing modules
const router = require("./routes/router");

//MIDDLEWARE
app.use(express.json()); //always call this first
app.use(morgan("tiny")); //for logging requests
app.use(cors());

app.use(router);

//ENDPOINTS

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("mongoose connected");
  app.listen(5000);
});

//https://youtu.be/oJBu2k7OEk8?t=2341
