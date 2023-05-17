//^ 1:- App create karna hai
//^ 2:- Port find karna hai
//^ 3:- middleware add karna hai
//^ 4:- db se connect karna hai
//^ 5:- cloudinary se connect karna hai
//^ 6:- api route mount karna hai
//^ 7:- activate server

const express = require("express");
const app = express();

// find PORT
require("dotenv").config();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());

//mount route
const Upload = require("./routes/FileUpload");
app.use("api/v1/upload", Upload);

// db connection
const db = require("./config/database");
db.connect();

// cloudinery se connection
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinerConnect();

// server activate

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
