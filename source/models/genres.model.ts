import mongoose from "mongoose";

interface IGenresSchema {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  created_at: Date;
}

const GenresSchema: mongoose.Schema = new mongoose.Schema<IGenresSchema>({
  name: { type: String, required: true },
  created_at: { type: Date, required: true, default: () => new Date() },
});

const GenresModel = mongoose.model("genres", GenresSchema);

export default GenresModel;
