import UserModel from "../models/user.model";
import { Request, Response, NextFunction, response } from "express";

// Import firebase-admin services
import firebaseAdminAuthentication from "../configs/firebase";

export const adminRoleRequired = async (req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware admin-role-required.");
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
          const user = await UserModel.findOne({ uid: decodedToken.uid });
          if (user.role === "admin") next();
          else return res.status(403).json({ message: "Only admin can do this !" });
        }
      }
    } else return res.status(401).json({ message: "You are not authorized !" });
  } catch (error) {
    console.log("Location: /source/middlewares/admin-role-required.ts", error);
    return res.status(500).json({ Error: error });
  }
};
