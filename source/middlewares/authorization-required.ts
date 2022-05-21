import UserModel from "../models/user.model";
import { Request, Response, NextFunction } from "express";

// Import firebase-admin services
import firebaseAdminAuthentication from "../configs/firebase";

export const authorizationRequired = async (req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware authorization-required.");
  try {
    if (req.headers["authorization"] && `${req.headers["authorization"]}`.startsWith("Bearer")) {
      // Get Json Web Token
      const JWTToken: string = `${req.headers["authorization"]}`.split(" ")[1];
      // Decode token
      const decodedToken = await firebaseAdminAuthentication.verifyIdToken(JWTToken);

      if (decodedToken) {
        if (decodedToken.exp > Date.now())
          return res.status(401).json({ message: "Your login session has expired !" });
        else {
          const user = await UserModel.findOne({ uid: decodedToken.uid }).populate([
            { path: "favorite_movies", select: "-created_at" },
          ]);
          req.params.user = user;
          next();
        }
      }
    } else return res.status(401).json({ message: "You are not authorized !" });
  } catch (error: any) {
    console.log("Location: /source/middlewares/admin-role-required.ts", error);
    if (error.code === "auth/id-token-expired") {
      return res.status(401).json({ message: "Your login session expired !" });
    } else return res.status(500).json({ Error: error });
  }
};
