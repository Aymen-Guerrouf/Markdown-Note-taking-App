const express = require("express");
const upload = require("../config/multer");
const {
  saveNote,
  getNotes,
  renderHtml,
  deleteNote,
} = require("../controllers/note");
const Note = require("../models/Note");

const router = express.Router();

router.route("/").get(getNotes).post(upload.single("markdownFile"), saveNote);

router.route("/:id/render").get(renderHtml);

router.route("/:id").delete(deleteNote);

module.exports = router;
