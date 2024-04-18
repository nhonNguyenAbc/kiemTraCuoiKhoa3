import { Router } from "express";
import userController from "../controllers/user/index.js";
const userRouter = Router();
import middlewares from "../middlewares/index.js";

userRouter.post("/signUp", middlewares.validateSignUp, userController.signUp);
userRouter.post("/signIn", middlewares.validateSignIn, userController.signIn);
userRouter.post("/logout", middlewares.validateSignIn, userController.logout);
export default userRouter;
