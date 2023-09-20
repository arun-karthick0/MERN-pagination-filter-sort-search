import mongoose from "mongoose";

const dataModels = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  genre: {
    type: Array,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
});

const queryPractice = mongoose.model("queryPractice", dataModels);

export default queryPractice;
