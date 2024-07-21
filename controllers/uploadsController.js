const path = require("path");

const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const cloudinary = require("cloudinary").v2;
const fs = require('fs')

const uploadProductImagelocal = async (req, res) => {
  console.log(req.files);

  if (!req.files) {
    throw new CustomError.BadRequestError("No files has been chossen");
  }

  const productImagae = req.files.image;

  if (!productImagae.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please upload a image ");
  }
  const maxSize = 1024 * 1024;

  if (productImagae.size > maxSize) {
    throw new CustomError.BadRequestError("Please upload smaller image ");
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImagae.name}`
  );

  await productImagae.mv(imagePath);

  res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImagae.name}` } });
};

const uploadProductImage = async (req, res) => {

  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'file-upload',
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath)
 return res.status(StatusCodes.OK).json({image:{src:result.secure_url}})
};

module.exports = {
  uploadProductImage,
};
