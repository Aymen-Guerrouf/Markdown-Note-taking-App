const express = require("express");
const { grammerCheck } = require("../controllers/grammer");
const upload = require("../config/multer");

const router = express.Router();

router.route("/").post(upload.single("markdownFile"), grammerCheck);

module.exports = router;
