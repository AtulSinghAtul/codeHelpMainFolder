//step1: create a folder
//step2: move into that folder
//step3: npm init -y
//step4: open folder using VSCode
//step5: npm i express
//step6: create server.js

//! Server Instantiate
const express = require("express");
const app = express();

//* used to parse req.body in express ==> PUT or POST
const bodyParser = require("body-parser");

//* specifically parse JSON data & add it to the request.body object
app.use(bodyParser.json());

//! Activate the server on 5000 port
app.listen(5000, () => {
  console.log("Server started at port no 5000");
});

//! create routes
//* get request :- fetch data
app.get("/", (request, response) => {
  response.send("Hello jee kaise ho aap sare");
});

//* post request:- submit data
app.post("/api/cars", (request, response) => {
  const { name, brand } = request.body;
  console.log(name);
  console.log(brand);
  response.send("Car submitted successfully");
});

//! connect mongodb to server(express.js)
// localhost(127.0.0.1) this is localhost IP address
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/myDatabase", {
    useNewurlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connrction Successfull");
  })
  .catch((error) => {
    console.log("connection failed");
  });
