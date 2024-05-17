import express from "express";

import db from "../utils/prisma";
import emojis from "./emojis";
import nutritions from "./nutritions";

const router = express.Router();

router.use("/emojis", emojis);
router.use('/nutritions',nutritions)

export default router;
