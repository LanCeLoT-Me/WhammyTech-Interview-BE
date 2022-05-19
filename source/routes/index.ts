import express from "express";

// Import routers
import userRouter from "./user.route";
import genreRouter from "./genre";

const router: express.Router = express.Router();

router.use("/user", userRouter);
router.use("/genre", genreRouter);

export default router;
