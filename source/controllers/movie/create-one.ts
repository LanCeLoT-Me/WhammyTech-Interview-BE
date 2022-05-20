import mongoose from "mongoose";
import MovieModel, { IMovie } from "../../models/movie.model";
import { Request, Response, NextFunction } from "express";

export const createMovie = async (req: Request, res: Response, next: NextFunction) => {
  console.log("POST /movie/create");
  try {
    const poster_url = req.body.poster_url;
    const backdrop_url = req.body.backdrop_url;
    const title = req.body.title;
    const popularity = req.body.popularity;
    const synopsis = req.body.synopsis;
    const genres = req.body.genres;
    const language = req.body.language;
    const duration = req.body.duration;

    if (poster_url === "")
      return res.status(400).json({ error: "Movie's poster_url can not be empty !" });
    else if (backdrop_url === "")
      return res.status(400).json({ error: "Movie's backdrop_url can not be empty !" });
    else if (title === "")
      return res.status(400).json({ error: "Movie's title can not be empty !" });
    else if (popularity === "")
      return res.status(400).json({ error: "Movie's popularity can not be empty !" });
    else if (synopsis === "")
      return res.status(400).json({ error: "Movie's synopsis can not be empty !" });
    else if (genres.length === 0)
      return res.status(400).json({ error: "Movies must be in at least one genre !" });
    else if (language === "")
      return res.status(400).json({ error: "Movie's language can not be empty !" });
    else if (duration === "")
      return res.status(400).json({ error: "Movie's duration can not be empty !" });

    const genreArr = genres.map((genre: string) => {
      return new mongoose.Types.ObjectId(genre);
    });

    const data: IMovie = {
      poster_url,
      backdrop_url,
      title,
      popularity,
      synopsis,
      genres: genreArr,
      language,
      duration,
    };

    const movie = await MovieModel.create(data);
    return res.status(200).json({ message: "Create movie successfully !", movie });
  } catch (error) {
    console.log("Location /source/controllers/movie/create-one.ts", error);
    return res.status(500).json({ Error: error });
  }
};
