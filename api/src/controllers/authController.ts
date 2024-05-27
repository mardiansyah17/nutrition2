import { RequestHandler } from "express";
import db from "../utils/prisma";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { mapValidatorMsg } from "../utils/mapValidatorMsg";

const login: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(mapValidatorMsg(errors.array() as any));
  const user = await db.user.findUnique({
    where: {
      email: req.body.email,
    },
  });
  if (!user) return res.status(401).json({ message: "Email atau password anda salah" });
  const checkPassword = await bcrypt.compare(req.body.password, user?.password as string);
  if (!checkPassword) return res.status(401).json({ message: "Email atau password anda salah" });
  //   return console.log();
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
    },
    process.env.SECRET_KEY as string
  );
  return res.json({ message: "Berhasil login", token: token });
};

const register: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(mapValidatorMsg(errors.array() as any));
  const password = await bcrypt.hash(req.body.password, 10);
  const createUser = await db.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      password: password,
    },
  });

  const token = jwt.sign(
    {
      id: createUser.id,
      email: createUser.email,
      name: createUser.name,
    },
    process.env.SECRET_KEY as string
  );

  return res.json({ message: "Berhasil", token });
};

export { login, register };
