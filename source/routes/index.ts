import express from "express";

// Import routers
import userRouter from "./user.route";
import genreRouter from "./genre.route";
import movieRouter from "./movie.route";

const router: express.Router = express.Router();

router.use("/user", userRouter);
router.use("/genre", genreRouter);
router.use("/movie", movieRouter);

export default router;
