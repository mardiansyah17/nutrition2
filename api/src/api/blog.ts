import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { allBlog, findBlogById } from "../controllers/blogController";
const router = express.Router();

router.get("/", authMiddleware, allBlog);
router.get("/:id", authMiddleware, findBlogById);

export default router;
