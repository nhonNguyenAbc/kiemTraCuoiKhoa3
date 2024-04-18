import MovieModel from "../../models/movies.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("image");
const movieController = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await MovieModel.find();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createMovie: async (req, res) => {
    const movie = req.body;
    try {
      const newMovie = await MovieModel.create(movie);
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  updateMovie: async (req, res) => {
    try {
      const movie = await MovieModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(movie);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getMovieById: async (req, res) => {
    try {
      const movie = await MovieModel.findById(req.params.id);
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  deleteMovie: async (req, res) => {
    try {
      const deletedMovie = await MovieModel.findByIdAndDelete(req.params.id);
      if (!deletedMovie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  searchMovies: async (req, res) => {
    try {
      const { keyword } = req.query;
      const movies = await MovieModel.find({
        name: { $regex: new RegExp(keyword, "i") },
      });
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getMoviesByYear: async (req, res) => {
    try {
      //nếu người dùng không truyền tham số sort, chúng ta sẽ sử dụng mặc định là sắp xếp giảm dần, nếu người dùng truyền tham số sort=asc, chúng ta sẽ sắp xếp tăng dần.
      let sortOrder = req.query.sort === "asc" ? 1 : -1;

      const movies = await MovieModel.find().sort({ year: sortOrder });

      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default movieController;
