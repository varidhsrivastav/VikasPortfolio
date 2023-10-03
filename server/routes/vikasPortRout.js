const express = require("express");
const router = express.Router();
const allvikasPort = require("../controllers/VikasPort");

 router.route("/").get(allvikasPort);

module.exports = router
