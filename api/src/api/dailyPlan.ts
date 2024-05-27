import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { createDailyPlan, getDailyPlans } from "../controllers/dailyPlanController";
const router = express.Router();

router.post("/", authMiddleware, createDailyPlan);
router.get("/:date", authMiddleware, getDailyPlans);

export default router;
