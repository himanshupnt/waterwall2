const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const coreRoute = require("./core");
const root = require("./root");

const router = express.Router();

router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use("/", root);

// mount core route
router.use("/core", coreRoute);

module.exports = router;
