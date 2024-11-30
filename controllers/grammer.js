const asyncHandler = require("../middleware/async.js");
const fs = require("fs");
const path = require("path");
const check = require("../utils/grammerCheck.js");
const ErrorResponse = require("../utils/errorResponse.js");

//@desc check grammar of a note
//@route POST /api/v1/grammer
//access Public

exports.grammerCheck = asyncHandler(async (req, res, next) => {
  if (!req.file) {
    return new ErrorResponse("Please upload a file", 400);
  }
  const filePath = req.file.path;
  const text = fs.readFileSync(filePath, "utf8");

  const result = await check(text);

  fitredResults = result.matches.map((match) => ({
    sentence: match.sentence,
    message: match.message,
    shortMessage: match.shortMessage,
    replacements: match.replacements[0],
  }));

  fs.unlink(filePath, (err) => {
    if (err) {
      return new ErrorResponse("Error deleting file", 500);
    }
  });

  res.status(200).json({ success: true, data: fitredResults });
});
