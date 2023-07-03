// app create karna hai
const express = require("express");

const app = express();

//port find karna hai
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// middleware add karna hai

app.use(express.json());

const fileUpload = require("express-fileupload");

app.use(
  fileUpload({
    tempFilePath: true,
  })
);

// db se connect karna
const db = require("./config/database");
db.connect();

// cloud se connect karna
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//api route mount karna hai
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

//! server activate karna hai

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
