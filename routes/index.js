const express = require("express");
const { homePageHandler } = require("../controllers/index");
const router = express.Router();

router.get("/", homePageHandler);

module.exports = router;
