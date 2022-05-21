import UserModel from "../../models/user.model";
import { Request, Response, NextFunction } from "express";

export const removeMovieFromFavorites = async (req: Request, res: Response, next: NextFunction) => {
  console.log("POST /api/user/remove-movie-from-favorites");
  try {
    const user: any = req.params.user;
    const movie_id = req.body.movie_id;

    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: user._id },
      { $pull: { favorite_movies: movie_id } },
      { new: true }
    );

    return res
      .status(200)
      .json({ message: "Movie has been removed from your favorites !", user: updatedUser });
  } catch (error) {
    console.log("Location: /source/controllers/user/remove-movie-from-favorites.ts", error);
    return res.status(500).json({ Error: error });
  }
};
