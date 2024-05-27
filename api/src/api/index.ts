import express from "express";

import auth from "./auth";
import emojis from "./emojis";
import nutritions from "./nutritions";
import dailyPlan from "./dailyPlan";

const router = express.Router();

router.use("/emojis", emojis);
router.use("/nutritions", nutritions);
router.use("/daily-plan", dailyPlan);
router.use("/auth", auth);

export default router;
