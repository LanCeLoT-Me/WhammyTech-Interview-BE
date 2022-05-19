import express from "express";

// Import routers
import userRouter from "./user.route";

const router: express.Router = express.Router();

router.use("/user", userRouter);

export default router;
