//step1: create a folder
//step2: move into that folder
//step3: npm init -y
//step4: open folder using VSCode
//step5: npm i express
//step6: create server.js

const express = require("express");
const app = express();

// define port
app.listen(3000, () => {
  console.log("Server started at port no 3000");
});

// create routes
// get request :- fetch data
app.get("/", (request, response) => {
  response.send("Hello jee kaise ho aap sare");
});

// post request:- submit data

app.post("/api/cars", (request, response) => {
  const { name, brand } = request.body;
  console.log(name);
  console.log(brand);
  response.send("Car submitted successfully");
});
