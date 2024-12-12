const asyncHandler = require("../middleware/async.js");
const ErrorResponse = require("../utils/errorResponse.js");
const fs = require("fs");
const { marked } = require("marked");
const Note = require("../models/Note");

//@desc save a note
//@route POST /api/v1/notes
//access Public
exports.saveNote = asyncHandler(async (req, res, next) => {
  if (!req.file) {
    new ErrorResponse("Please upload a file", 400);
  }
  const markdown = req.file;
  const note = new Note({
    filename: markdown.filename,
    path: markdown.path,
    originalname: markdown.originalname,
  });
  await note.save();
  res.status(200).json({ success: true, data: note });
});

//@desc get all notes
//@route GET /api/v1/notes
//access Public
exports.getNotes = asyncHandler(async (req, res, next) => {
  const notes = await Note.find();
  result = notes.map((match) => ({
    id: match._id,
    file_name: match.orginalname,
  }));
  res.status(200).json({ success: true, data: result });
});

//@desc render html version of the note
// @route GET /api/notes/:id/render
// @access public
exports.renderHtml = asyncHandler(async (req, res, next) => {
  const note = await Note.findById(req.params.id);

  const filePath = note.path;

  const text = fs.readFileSync(filePath, "utf8");

  const html = marked(text);
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
});

//@desc delete a note
// @route DELETE /api/notes/:id
// @access public
exports.deleteNote = asyncHandler(async (req, res, next) => {
  const note = await Note.findByIdAndDelete(req.params.id);

  const filePath = note.path;

  fs.unlink(filePath, (err) => {
    if (err) {
      return new ErrorResponse("Error deleting file", 500);
    }
  });
  res.status(200).json({ success: true, data: {} });
});
