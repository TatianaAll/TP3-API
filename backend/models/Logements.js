const mongoose = require("mongoose");

const logementSchema = mongoose.Schema({
  title: { type: String, required: true },
  cover: {
    type: String,
    required: true,
    default: "https://picsum.photos/1600",
  },
  pictures: {
    type: [String],
    required: true,
    default: ["https://picsum.photos/1600"],
  },
  description: { type: String, required: true },
  host: {
    name: { type: String, required: true },
    picture: {
      type: String,
      required: true,
      default: "https://picsum.photos/1600",
    },
  },

  rating: { type: String, required: true },
  location: { type: String, required: true },
  equipments: { type: Array, required: true },
  tags: { type: Array, required: true },
});

module.exports = mongoose.model("Logements", logementSchema);
