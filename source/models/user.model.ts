import mongoose from "mongoose";

export interface IUser {
  _id?: mongoose.Schema.Types.ObjectId;
  uid: string; // User'id from firebase auth
  provider_id: string;
  display_name: string;
  email: string;
  is_email_verified: boolean;
  phone_number: string;
  photo_url: string;
  role?: "user" | "admin";
  favorite_movies?: mongoose.Schema.Types.ObjectId[];
  created_at?: Date;
}

const UserSchema: mongoose.Schema = new mongoose.Schema<IUser>({
  uid: { type: String, required: true },
  email: { type: String },
  is_email_verified: { type: Boolean, required: true },
  provider_id: { type: String, required: true },
  display_name: { type: String },
  phone_number: { type: String },
  photo_url: { type: String },
  role: { type: String, default: "user" },
  favorite_movies: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "movies" }],
    required: false,
    default: [],
  },
  created_at: { type: Date, default: () => new Date() },
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
