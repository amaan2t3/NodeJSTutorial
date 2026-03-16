const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
  {
    shortID: {
      type: String,
      require: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      require: true,
    },
    visitHistory: [{ timestamp: { type: Number, default: Date.now } }],
  },
  { timestamps: true },
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
