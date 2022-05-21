import mongoose from "mongoose";
import UserModel from "../../models/user.model";
import { Request, Response, NextFunction } from "express";

export const addMovieToFavorites = async (req: Request, res: Response, next: NextFunction) => {
  console.log("POST /api/user/add-movie-to-favorites");
  try {
    const user: any = req.params.user;
    const movie_id = req.body.movie_id;
    const user_favorite_movies: string[] = user.favorite_movies;

    if (user_favorite_movies.length === 0 || !user_favorite_movies.includes(movie_id)) {
      user.favorite_movies.push(new mongoose.Types.ObjectId(movie_id));
      await user.save();
      return res.status(200).json({ message: "Add movie to favorites successfully !" });
    }
  } catch (error) {
    console.log("Location: /source/controllers/user/add-movie-to-favorites.ts", error);
    return res.status(500).json({ Error: error });
  }
};
