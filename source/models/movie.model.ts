import mongoose from "mongoose";

export interface IMovie {
  _id: mongoose.Schema.Types.ObjectId;
  poster_url: string;
  backdrop_url: string;
  title: string;
  popularity: number;
  synopsis: string;
  genres: mongoose.Schema.Types.ObjectId[];
  language: string;
  duration: string;
  created_at: Date;
}

const MovieSchema: mongoose.Schema = new mongoose.Schema<IMovie>({
  poster_url: { type: String, required: true },
  backdrop_url: { type: String, required: true },
  title: { type: String, required: true },
  popularity: { type: Number, required: false, default: 0.0 },
  synopsis: { type: String, required: true },
  genres: { type: [{ type: mongoose.Schema.Types.ObjectId }], required: true },
  language: { type: String, required: true },
  duration: { type: String, required: true },
  created_at: { type: Date, required: true, default: () => new Date() },
});

const MovieModel = mongoose.model("movies", MovieSchema);

export default MovieModel;
