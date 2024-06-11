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

const findMany: RequestHandler = async (req, res) => {
  try {
    const ids = req.body.ids;
    if (!ids || ids.length == 0) {
      return res.status(404).json({ message: "Tidak di temukan" });
    }
    const getNutrition = await db.nutrition.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    const nutrition = getNutrition.map((data: any, i: number) => {
      // console.log(i < getNutrition.length - 1);

      if (i < getNutrition.length - 1) {
        const nextNutrition = getNutrition[i + 1];
        console.log(
          (
            parseFloat(data.vitamin_b1?.toFixed(2) ?? "0") +
            parseFloat(nextNutrition.vitamin_b1?.toFixed(2) ?? "0")
          ).toFixed(2)
        );

        return {
          id: 1,
          energy_kcal: (
            parseFloat(data.energy_kcal?.toFixed(2) ?? "0") +
            parseFloat(nextNutrition.energy_kcal?.toFixed(2) ?? "0")
          ).toFixed(2),
          fat: (
            parseFloat(data.fat?.toFixed(2) ?? "0") +
            parseFloat(nextNutrition.fat?.toFixed(2) ?? "0")
          ).toFixed(2),
          vitamin_a: (
            parseFloat(data.vitamin_a?.toFixed(2) ?? "0") +
            parseFloat(nextNutrition.vitamin_a?.toFixed(2) ?? "0")
          ).toFixed(2),
          vitamin_b1: (
            parseFloat(data.vitamin_b1?.toFixed(2) ?? "0") +
            parseFloat(nextNutrition.vitamin_b1?.toFixed(2) ?? "0")
          ).toFixed(2),
          vitamin_b2: (
            parseFloat(data.vitamin_b2?.toFixed(2) ?? "0") +
            parseFloat(nextNutrition.vitamin_b2?.toFixed(2) ?? "0")
          ).toFixed(2),
          vitamin_c: (
            parseFloat(data.vitamin_c?.toFixed(2) ?? "0") +
            parseFloat(nextNutrition.vitamin_c?.toFixed(2) ?? "0")
          ).toFixed(2),
          carbohydrate: (
            parseFloat(data.carbohydrate?.toFixed(2) ?? "0") +
            parseFloat(nextNutrition.carbohydrate?.toFixed(2) ?? "0")
          ).toFixed(2),
          protein: (
            parseFloat(data.protein?.toFixed(2) ?? "0") +
            parseFloat(nextNutrition.protein?.toFixed(2) ?? "0")
          ).toFixed(2),
          dietary_fiber: (
            parseFloat(data.dietary_fiber?.toFixed(2) ?? "0") +
            parseFloat(nextNutrition.dietary_fiber?.toFixed(2) ?? "0")
          ).toFixed(2),
          calcium: (
            parseFloat(data.calcium?.toFixed(2) ?? "0") +
            parseFloat(nextNutrition.calcium?.toFixed(2) ?? "0")
          ).toFixed(2),
          phosphorus: (
            parseFloat(data.phosphorus?.toFixed(2) ?? "0") +
            parseFloat(nextNutrition.phosphorus?.toFixed(2) ?? "0")
          ).toFixed(2),
          sodium: (
            parseFloat(data.sodium?.toFixed(2) ?? "0") +
            parseFloat(nextNutrition.sodium?.toFixed(2) ?? "0")
          ).toFixed(2),
          potassium: (
            parseFloat(data.potassium?.toFixed(2) ?? "0") +
            parseFloat(nextNutrition.potassium?.toFixed(2) ?? "0")
          ).toFixed(2),
          copper: (
            parseFloat(data.copper?.toFixed(2) ?? "0") +
            parseFloat(nextNutrition.copper?.toFixed(2) ?? "0")
          ).toFixed(2),
          iron: (
            parseFloat(data.iron?.toFixed(2) ?? "0") +
            parseFloat(nextNutrition.iron?.toFixed(2) ?? "0")
          ).toFixed(2),
          zinc: (
            parseFloat(data.zinc?.toFixed(2) ?? "0") +
            parseFloat(nextNutrition.zinc?.toFixed(2) ?? "0")
          ).toFixed(2),
        };
      }
    });
    return res.json({
      nutrition: nutrition[0],
    });
  } catch (error) {
    console.log(error);
  }
};

export { findAll, findOne, findMany };
