import express from "express";
import {
  createDailyPlan,
  deleteDaily,
  getDailyPlans,
  listDatePlan,
} from "../controllers/dailyPlanController";
import { authMiddleware } from "../middleware/authMiddleware";
const router = express.Router();

router.post("/", authMiddleware, createDailyPlan);
router.get("/date/:date", authMiddleware, getDailyPlans);
router.delete("/:id", authMiddleware, deleteDaily);
router.get("/list-date-plan/:date", authMiddleware, listDatePlan);

export default router;
