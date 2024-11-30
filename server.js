const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const error = require("./middleware/error");
const connectDB = require("./config/db");
const upload = require("./config/multer");

// Route files
const notes = require("./routes/note");
const grammer = require("./routes/grammer");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// connect to db
connectDB();

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routers
app.use("/api/v1/notes", notes);
app.use("/api/v1/grammer", grammer);

app.use(error);

PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold
  );
});

app.use;

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
