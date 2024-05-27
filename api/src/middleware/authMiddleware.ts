import { User } from "@prisma/client";
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
export const authMiddleware: RequestHandler = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY as string);

    req.user = <any>decoded;

    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
