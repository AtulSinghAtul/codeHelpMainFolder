const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB Connection Successfully"))
    .catch((error) => {
      console.log("DB Connection Issue");
      console.error(error);
      process.exit(1);
    });
};
