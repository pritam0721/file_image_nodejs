const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const createProduct = async (req, res) => {
  res.status(StatusCodes.OK).send("created a product");
};
const getAllProducts = async (req, res) => {
  res.status(StatusCodes.OK).send("geting all the products");
};

module.exports = {
  createProduct,
  getAllProducts,
};
