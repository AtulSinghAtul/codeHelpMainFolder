const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

// middleware
const cookieParser = require("cookie-parser");
app.use(cookieParser);
app.use(express.json());

// db call
const { dbConnect } = require("./config/database");
dbConnect();

//import route and mount
const user = require("./routes/user");
app.use("/api/v1", user);

//server activate
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
