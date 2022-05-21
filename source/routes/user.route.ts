import express from "express";
import { userControllers } from "../controllers/user";

// Import middlewares
import { serverMiddlewares } from "../middlewares";

const userRouter: express.Router = express.Router();

userRouter.post("/create", userControllers.createUser);
userRouter.post(
  "/add-movie-to-favorites",
  serverMiddlewares.authorizationRequired,
  userControllers.addMovieToFavorites
);
userRouter.post(
  "/remove-movie-from-favorites",
  serverMiddlewares.authorizationRequired,
  userControllers.removeMovieFromFavorites
);

export default userRouter;
