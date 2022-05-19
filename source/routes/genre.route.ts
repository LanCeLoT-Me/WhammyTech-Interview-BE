import express from "express";
import { serverMiddlewares } from "../middlewares";
import { genreControllers } from "../controllers/genre";

const genreRouter: express.Router = express.Router();

genreRouter.post("/create", serverMiddlewares.adminRoleRequired, genreControllers.createGenre);

export default genreRouter;
