const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() =>
      console.log("DB ka connection successfull hai").catch((error) => {
        console.log("issue in db connection");
        console.error(error.message);
        process.exit(1);
      })
    );
};
