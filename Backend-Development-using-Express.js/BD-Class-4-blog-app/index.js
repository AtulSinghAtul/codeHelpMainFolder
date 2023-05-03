const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

//route
const blog = require("./routes/blog");
//mounting
app.use("/api/v1", blog);

//database import
const connectWithDb = require("./config/db");
connectWithDb();

// start the server
app.listen(PORT, () => {
  console.log(`App is started at port on ${PORT}`);
});

// default route

app.get("/", (req, res) => {
  res.send(`<h1>This is my home page</h1>`);
});
