import GenreModel from "../../models/genre.model";
import { Request, Response, NextFunction } from "express";

export const createGenre = async (req: Request, res: Response, next: NextFunction) => {
  console.log("POST /genre/create");
  try {
    const { name } = req.body;

    // Check genre's name
    if (name === "") return res.status(400).json({ message: "Genre's name can not be empty !" });
    else {
      const isGenreExisted = await GenreModel.findOne({ name });
      if (isGenreExisted) return res.status(400).json({ message: "Genre has already existed !" });
      else {
        const genre = await GenreModel.create({ name });
        return res.status(200).json({ message: "Create genre successfully !", genre });
      }
    }
  } catch (error) {
    console.log("Location: /source/controllers/genre/create-one.ts", error);
    return res.status(500).json({ Error: error });
  }
};
