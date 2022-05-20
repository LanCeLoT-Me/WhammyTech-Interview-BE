import MovieModel from "../../models/movie.model";
import { Request, Response, NextFunction } from "express";

export const getMovie = async (req: Request, res: Response, next: NextFunction) => {
  console.log("GET /movie/:id");
  try {
    const _id = req.params.id;

    const movie = await MovieModel.findById(_id);

    if (!movie) {
      return res.status(400).json({ message: "This movie is no longer exist !" });
    } else return res.status(200).send(movie);
  } catch (error) {
    console.log("Location: /source/controllers/movie/get-one.ts", error);
    return res.status(500).json({ Error: error });
  }
};
