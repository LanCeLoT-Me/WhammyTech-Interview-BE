import express from "express";
import { serverMiddlewares } from "../middlewares";
import { movieControllers } from "../controllers/movie";

const movieRouter: express.Router = express.Router();

movieRouter.post("/create", serverMiddlewares.adminRoleRequired, movieControllers.createMovie);
movieRouter.get("/get", movieControllers.getAllMovies);
movieRouter.get("/get/:id", movieControllers.getMovie);

export default movieRouter;
