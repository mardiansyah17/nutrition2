import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { createDailyPlan, deleteDaily, getDailyPlans } from "../controllers/dailyPlanController";
const router = express.Router();

router.post("/", authMiddleware, createDailyPlan);
router.get("/:date", authMiddleware, getDailyPlans);
router.delete("/:id", authMiddleware, deleteDaily);

export default router;
