import UserModel from "../../models/user.model";
import { Request, Response, NextFunction } from "express";

export const getFavoriteMovies = async (req: Request, res: Response, next: NextFunction) => {
  console.log("GET /user/get-favorite-movies");
  try {
    const user: any = req.params.user;
    return res.status(200).json({ favorite_movies: user.favorite_movies });
  } catch (error) {
    console.log("Location: /source/controllers/movie/get-favorite-movies.ts", error);
    return res.status(500).json({ Error: error });
  }
};
