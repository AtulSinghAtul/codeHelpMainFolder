const File = require("../models/file");
const cloudinary = require("cloudinary").v2;

//? localfileupload -> handler function

exports.localFileUpload = async (req, res) => {
  try {
    //!fetch file from req body
    const file = req.files.file;
    console.log("file-->>", file);

    //! create path where file need to be stored on server
    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    console.log("path-->>", path);

    //! add path to the move function
    file.mv(path, (err) => {
      console.log(err);
    });

    //! create a successfull response
    res.json({
      success: true,
      message: "Local file uploaded successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

//^ Image Upload Handler

function fileTypeValidator(fileType, supportedFileTypes) {
  return supportedFileTypes.includes(fileType);
}

async function uploadOnCloudinary(file, folder) {
  console.log("temp file path ->", file.tempFilePath);
  const option = { folder };
  return await cloudinary.uploader.upload(file.tempFilePath, option);
}

exports.imageUpload = async (req, res) => {
  try {
    // fetch data
    const { name, imageUrl, tags, email } = req.body;
    console.log(name, imageUrl, tags, email);

    let file = req.files.imageFile;
    console.log(file);

    // valdation of image file

    const supportedFileTypes = ["jpg", "jpeg", "png"];
    // console.log(supportedFileTypes);

    const fileType = file.name.split(".")[1].toLowerCase();
    console.log(fileType);
    console.log("cloudinary me problem hai");

    if (!fileTypeValidator(fileType, supportedFileTypes)) {
      return res.status(400).json({
        success: false,
        message: "file type not supported",
      });
    }

    // upload image on cloudinary
    console.log("cloudinary me problem hai");
    const response = await uploadOnCloudinary(file, "codehelp");
    console.log("response -> ", response);

    // db me entry save karna hai
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });
    console.log(fileData);

    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "image successfully uploaded",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
};

//^ Video Upload Handler

function videoTypeValidation(videoType, supportedVideo) {
  return supportedVideo.includes(videoType);
}

async function uploadOnCloudinary(file, folder) {
  const options = { folder };
  options.resource_type = "auto";
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.videoUpload = async (req, res) => {
  try {
    // fetch data
    const { name, imageUrl, tags, email } = req.body;
    console.log(name, imageUrl, tags, email);

    let file = req.files.videoFile;
    console.log(file);

    // validation video format
    const supportedVideo = ["mp4", "mov"];
    const videoType = file.name.split(/\.(?=[^\.]+$)/)[1].toLowerCase();

    // const videoType = file.name;
    console.log("file nmae ->", videoType);

    //* TodDo: add aupper limit of 5mb for video

    if (!videoTypeValidation(videoType, supportedVideo)) {
      res.status(400).json({
        success: false,
        message: "video type not supported",
      });
    }

    // video upload on cloudianry
    console.log("uploadOnCloudinary ka response fat gaya");
    const response = await uploadOnCloudinary(file, "codehelp");
    console.log(response);

    // db me entry save karna hai

    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });
    console.log(fileData);

    res.status(200).json({
      success: true,
      message: "successfully uploaded video",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "something went wrong",
      error: error.message,
    });
  }
};

//? imageSizeReducer handler

function fileTypeValidator(fileType, supportedFileTypes) {
  return supportedFileTypes.includes(fileType);
}

async function uploadOnCloudinary(file, folder, quality) {
  console.log("temp file path ->", file.tempFilePath);
  const options = { folder };
  if (quality) {
    // options.quality = quality;
    options.transformation = [
      { width: 100, crop: "scale" },
      { fetch_format: "auto" },
    ];
  }
  console.log("options - >", options);

  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageSizeReducer = async (req, res) => {
  try {
    // fetch data
    const { name, imageUrl, tags, email } = req.body;
    console.log(name, imageUrl, tags, email);

    let file = req.files.imageFile;
    console.log(file);

    // valdation of image file

    const supportedFileTypes = ["jpg", "jpeg", "png"];
    // console.log(supportedFileTypes);

    const fileType = file.name.split(/\.(?=[^\.]+$)/)[1].toLowerCase();
    console.log(fileType);
    console.log("cloudinary me problem hai");

    if (!fileTypeValidator(fileType, supportedFileTypes)) {
      return res.status(400).json({
        success: false,
        message: "file type not supported",
      });
    }

    // upload image on cloudinary
    console.log("cloudinary me problem hai");
    const response = await uploadOnCloudinary(file, "codehelp", 80);
    console.log("response -> ", response);

    // db me entry save karna hai
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });
    console.log(fileData);

    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "image successfully uploaded",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "something went wrong",
      error: error.message,
    });
  }
};
