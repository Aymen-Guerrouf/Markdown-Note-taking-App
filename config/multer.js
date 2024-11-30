const multer = require("multer");
const path = require("path");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

// File filter for markdown files
const fileFilter = (req, file, cb) => {
  const filetypes = /markdown|md/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  }
  cb(new Error("Only markdown files are allowed!"));
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;
