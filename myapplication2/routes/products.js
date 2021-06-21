var express = require("express");
var router = express.Router();
var Product = require("../models/product");
/* GET home page. */
router.get("/", async function (req, res, next) {
  let products = await Product.find();
  console.log(products);
  res.render("products/list", { title: "Products In DB", products });
});

module.exports = router;
