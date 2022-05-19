import express from "express";
import { userControllers } from "../controllers/user";

const userRouter: express.Router = express.Router();

userRouter.post("/create", userControllers.createUser);

export default userRouter;
