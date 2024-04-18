import mongoose from "mongoose";
import Collections from "../database/collections.js";

const movieSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  introduce: {
    type: String,
    required: true,
  },
});

const MovieModel = mongoose.model(Collections.MOVIE, movieSchema);

export default MovieModel;
