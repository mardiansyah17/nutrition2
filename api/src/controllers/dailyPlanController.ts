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
        order: dailyMealPlan?.order ? dailyMealPlan!.order + 1 : 1,
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
    const dailyPlan = await db.category.findMany({
      include: {
        daily_meal_plan: {
          where: {
            date: date,
            user_id: req.user.id,
          },
          select: {
            id: true,
            nutrition: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    return res.json({ date: date.toDateString(), categories: dailyPlan });
  } catch (er) {
    console.log(er);
  }
};

const deleteDaily: RequestHandler = async (req, res, next) => {
  try {
    const daily = await db.dailyMealPlan.delete({ where: { id: parseInt(req.params.id) } });
    // console.log(req.params);
    return res.json({ message: "Berhasil" });
    // await db.dailyMealPlan.delete({where:{id:req.}})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

const listDatePlan: RequestHandler = async (req, res, next) => {
  try {
    const date = new Date();

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 2);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    return res.json({ firstDay, lastDay });
    const dailyPlan = await db.dailyMealPlan.findMany({
      where: {
        date: {
          gte: firstDay,
          lte: lastDay,
        },
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { getDailyPlans, createDailyPlan, deleteDaily, listDatePlan };
