import { body } from "express-validator";
import db from "../utils/prisma";

export const registerValidator = [
  body("email")
    .not()
    .isEmpty()
    .withMessage("Email wajib di isi")
    .isEmail()
    .withMessage("Email tidak valid")
    .custom(async (val, { req }) => {
      const userIsExist = await db.user.findUnique({ where: { email: val } });
      if (userIsExist) throw new Error("Email ini telah terdaftar");
    }),
  body("name").not().isEmpty().withMessage("Nama wajib di isi"),
  body("password").not().isEmpty().withMessage("Password wajib di isi"),
  body("confirmPassword")
    .not()
    .isEmpty()
    .withMessage("Konfirmasi password wajib di isi")
    .custom((val, { req }) => {
      if (val !== req.body.password) {
        throw new Error("Password tidak sama");
      }
      return true;
    }),
];

export const loginValidator = [
  body("email")
    .not()
    .isEmpty()
    .withMessage("Email wajib di isi")
    .isEmail()
    .withMessage("Email tidak valid"),
  body("password").not().isEmpty().withMessage("Password wajib di isi"),
];
