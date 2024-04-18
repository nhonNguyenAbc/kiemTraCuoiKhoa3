import { Router } from "express";
import movieController from "../controllers/movie/index.js";
const movieRouter = Router();

movieRouter.post("/create", movieController.createMovie);
movieRouter.get("/get", movieController.getAllMovies);
movieRouter.get("/search", movieController.searchMovies);
movieRouter.get("/arrange", movieController.getMoviesByYear);
movieRouter.get("/:id", movieController.getMovieById);
movieRouter.put("/:id", movieController.updateMovie);
movieRouter.delete("/:id", movieController.deleteMovie);

export default movieRouter;
