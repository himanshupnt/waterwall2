const express = require("express");
const { calcWaterWall } = require("../actions/coreCtrl");

const router = express.Router();
router.post("/", calcWaterWall);

module.exports = router;
