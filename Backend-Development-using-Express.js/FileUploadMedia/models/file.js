const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

require("dotenv").config();

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
});

//! post middleware

fileSchema.post("save", async function (doc) {
  try {
    console.log("DOC-->>", doc);

    // transporter
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // send mail

    const info = await transporter.sendMail({
      from: "CodeHelp -> By Atul singh",
      to: doc.email,
      subject: "New file Uploded on Cloudinary",
      html: `<h2>Hell Bhai Sahab</h> <p>Mai Atul Singh <a href= "${doc.imageUrl}">${doc.imageUrl}</a></p>`,
    });

    console.log("INFO-->>", info);
  } catch (error) {
    console.error(error);
  }
});

const File = mongoose.model("File", fileSchema);
module.exports = File;
