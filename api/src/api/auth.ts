import express from "express";
import { login, register } from "../controllers/authController";
import { loginValidator, registerValidator } from "../validator/authValidator";
const router = express.Router();
router.post("/login", loginValidator, login);
router.post("/register", registerValidator, register);

export default router;
