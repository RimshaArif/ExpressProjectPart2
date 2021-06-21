var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get(
  "https://web-assignment3-heroku.herokuapp.com/",
  function (req, res, next) {
    res.send("respond with a resource");
  }
);

module.exports = router;
