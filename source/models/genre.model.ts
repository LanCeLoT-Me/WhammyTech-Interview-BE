import mongoose from "mongoose";

export interface IGenre {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  created_at: Date;
}

const GenreSchema: mongoose.Schema = new mongoose.Schema<IGenre>({
  name: { type: String, required: true },
  created_at: { type: Date, required: true, default: () => new Date() },
});

const GenreModel = mongoose.model("genres", GenreSchema);

export default GenreModel;
