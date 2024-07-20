const { StatusCodes } = require("http-status-codes");
// const { BadRequestError, NotFoundError } = require("../errors");

const uploadProductImage = async (req, res) => {
  res.status(StatusCodes.OK).send("uploaded a product image ");
};

module.exports = {
  uploadProductImage,
};
