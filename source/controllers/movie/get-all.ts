import MovieModel from "../../models/movie.model";
import { Request, Response, NextFunction } from "express";

export const getAllMovies = async (req: Request, res: Response, next: NextFunction) => {
  console.log("GET /movie/get-all");
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const sort_by = req.query.sort_by || "";
    let sortOptions: any = { created_at: "desc" };

    switch (sort_by) {
      case "release_date.asc":
        sortOptions = { release_date: "asc" };
        break;
      case "release_date.desc":
        sortOptions = { release_date: "desc" };
        break;
      case "alphabetical.asc":
        sortOptions = { title: "asc" };
        break;
      case "alphabetical.desc":
        sortOptions = { title: "desc" };
        break;
      case "popularity.asc":
        sortOptions = { popularity: "asc" };
        break;
      case "popularity.desc":
        sortOptions = { popularity: "desc" };
        break;
    }

    const skipAmount = (page - 1) * limit;
    const totalMovies = await (await MovieModel.find()).length;
    const totalPages = Math.ceil(totalMovies / limit);

    const has_prev_page = page > 1 && page <= totalPages ? true : false;
    const has_next_page = page >= 1 && page < totalPages ? true : false;
    const prev_page = has_prev_page ? page - 1 : null;
    const next_page = has_next_page ? page + 1 : null;

    const movies = await MovieModel.find().sort(sortOptions).skip(skipAmount).limit(limit);

    return res.status(200).json({
      total: totalMovies,
      totalPages,
      prev_page,
      next_page,
      has_prev_page,
      has_next_page,
      movies,
    });
  } catch (error) {
    console.log("Location: /source/controllers/get-all.ts", error);
    return res.status(500).json({ Error: error });
  }
};
