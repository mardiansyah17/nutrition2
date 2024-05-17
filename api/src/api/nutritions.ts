import express from 'express'
import db from '../utils/prisma';
import { findAll, findOne } from '../controllers/nutritionController';
const router = express.Router();
router.get("/", findAll);
router.get("/:id", findOne);
  
  export default router;