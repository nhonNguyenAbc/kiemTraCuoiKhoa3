import { Router } from "express";
import userRouter from "./user.js";
import movieRouter from "./movie.js";
const router = Router();

router.use("/users", userRouter);
router.use("/movies", movieRouter);
export default router;
