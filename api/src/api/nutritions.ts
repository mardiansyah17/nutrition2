import express from "express";
import { findAll, findOne } from "../controllers/nutritionController";
import { authMiddleware } from "../middleware/authMiddleware";
const router = express.Router();
// route nutrisi

// route mengambil semua makanan atau minuman
router.get("/", authMiddleware, findAll);
// mengambil informasi nilai gizi berdasarkan id
router.get("/:id", authMiddleware, findOne);

export default router;
