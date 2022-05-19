import UserModel, { IUser } from "../../models/user.model";
import { Request, Response, NextFunction } from "express";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log("POST /api/user/create");
  try {
    const { user } = req.body;

    if (user) {
      const uid = user.uid;
      const email = user.email || "";
      const is_email_verified = user.emailVerified;
      const provider_id = user.providerData[0].providerId;
      const display_name = user.providerData[0].displayName || "";
      const phone_number = user.providerData[0].phoneNumber || "";
      const photo_url =
        user.providerData[0].photoURL ||
        "https://firebasestorage.googleapis.com/v0/b/whammytech-interview.appspot.com/o/public%2Fuser-default.jpg?alt=media&token=49974ab6-9530-44e7-adaf-a2dc6a139549";

      // Check if user has already existed in database
      const existedUser = await UserModel.findOne({ uid });

      if (existedUser) {
        existedUser.provider_id = "google.com";
        existedUser.is_email_verified = is_email_verified;
        existedUser.display_name = display_name;
        existedUser.phone_number = phone_number;
        existedUser.photo_url = photo_url;
        await existedUser.save();
      } else {
        // If user has not been existed in database, create user
        const data: IUser = {
          uid,
          provider_id,
          email,
          is_email_verified,
          photo_url,
          display_name,
          phone_number,
        };

        const createdUser = await UserModel.create(data);
        return res.status(200).json({
          message: "Create user successfully !",
          user: createdUser,
        });
      }
    }
  } catch (error) {
    console.log("Location: /source/controllers/user/create-one.ts", error);
    return res.status(500).json({ Error: error });
  }
};
