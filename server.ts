import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./source/routes";
import { corsOptions } from "./source/configs/cors";

dotenv.config();

const server: express.Express = express();

server.use(express.json());
server.use(cors(corsOptions));

server.use("/api", router);

server.listen(process.env.PORT || 8545, () => {
  console.log(`Server is listening at port ${process.env.PORT} !`);
});

// Trying to connect to MongoDB
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS_CONNECTION_STRING || "");
    console.log("Connected to MongoDB");
  } catch (error) {
    // Error on initial connection
    console.log(`Failed to connect to MongoDB, error: ${error}`);
  }
};

mongoose.connection.on("connecting", () => {
  console.log("Connecting to MongoDB...");
});

// Error after initial connection
mongoose.connection.on("error", (error: mongoose.CallbackError) => {
  console.log(`An error has occurred, error: ${error}`);
});

connectToMongoDB();
