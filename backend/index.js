const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const uploadController = require("./controllers/uploadController");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("DB is successfully connected"))
  .catch((err) => {
    console.error(err);
  });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authController);
app.use("/images", express.static("public/images"));
app.use("/product", productController);
app.use("/upload", uploadController);

// start our server
app.listen(process.env.PORT, () =>
  console.log("Server has been started successfully")
);
