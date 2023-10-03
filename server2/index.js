const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require('cors')
// import cors from "cors";
const dotenv = require('dotenv');
dotenv.config();
const posts = require("./routes/Schemas");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongodb = process.env.MONGODB_URL

app.use("/api/posts", posts);

mongoose
  .set({ strictQuery: false })
  .connect(mongodb)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error(`Could not connected to MongoDB... ${err}`));

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Listening on port ${port}`));