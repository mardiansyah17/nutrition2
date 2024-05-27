import { RequestHandler } from "express";
import db from "../utils/prisma";

const createDailyPlan: RequestHandler = async (req, res, next) => {
  try {
    const dailyMealPlan = await db.dailyMealPlan.findFirst({
      where: {
        date: new Date(req.body.date),
        user_id: req.user.id,
      },
      select: {
        order: true,
      },
    });

    await db.dailyMealPlan.create({
      data: {
        user_id: req.user.id,
        order: dailyMealPlan?.order ? dailyMealPlan.order + 1 : 1,
        category_id: req.body.category_id,
        nutrition_id: req.body.nutrition_id,
        date: new Date(req.body.date).toISOString(),
      },
    });
    return res.status(201).json({ message: "Berhasil" });
  } catch (error) {
    console.log(error);
  }
};

const getDailyPlans: RequestHandler = async (req, res, next) => {
  try {
    const { date: dateParams } = req.params;
    const date = new Date(dateParams);
    const dailyPlan = await db.dailyMealPlan
      .findMany({
        where: {
          date: date,
          user_id: req.user.id,
        },
        include: {
          category: true,
          nutrition: true,
        },
      })
      .then((item) => {
        console.log(item);
        const groupCategory = [] as any[];
        item.forEach((val) => {
          if (groupCategory.find((x) => x.id == val.category.id) == undefined) {
            groupCategory.push({
              id: val.category.id,
              name: val.category.name,
              nutritions: [val.nutrition],
            });
          } else {
            groupCategory.find((x) => {
              if (x.id == val.category.id) {
                x.nutritions.push(val.nutrition);
              }
            });
          }
        });
        return groupCategory;
      });

    return res.json({ date: date.toDateString(), data: dailyPlan });
  } catch (er) {
    console.log(er);
  }
};

export { getDailyPlans, createDailyPlan };
