import { RequestHandler } from "express";
import db from "../utils/prisma";

const findAll: RequestHandler = async (req, res) => {
  const page = (req.query.page as string) ?? "1";
  const search = req.query.search as string;
  try {
    const nutritions = await db.nutrition
      .paginate({
        where: {
          name: {
            contains: search,
          },
        },
      })
      .withPages({ limit: 10, page: parseInt(page), user: req });
    setTimeout(() => {
      return res.json({
        data: nutritions[0],
        meta: nutritions[1],
      });
    }, 0);
  } catch (error) {
    console.log(error);
  }
};

const findOne: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;

    const nutrition = await db.nutrition.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!id || !nutrition) {
      return res.status(404).json({ message: "Not found" });
    }

    return res.json({
      nutrition: nutrition,
    });
  } catch (error) {
    console.log(error);
  }
};

export { findAll, findOne };
