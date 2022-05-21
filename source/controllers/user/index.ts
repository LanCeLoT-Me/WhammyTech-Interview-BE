import { createUser } from "./create-one";
import { getFavoriteMovies } from "./get-favorite-movies";
import { addMovieToFavorites } from "./add-movie-to-favorites";
import { removeMovieFromFavorites } from "./remove-movie-from-favorites";

export const userControllers = {
  createUser,
  getFavoriteMovies,
  addMovieToFavorites,
  removeMovieFromFavorites,
};
