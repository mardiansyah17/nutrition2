import { RequestHandler } from "express";
import { validationResult } from "express-validator";

interface Error {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
}
interface ErrorMap {
  [key: string]: string;
}
export const mapValidatorMsg = (errors: Error[]) => {
  const errorMap: ErrorMap = {};
  errors.forEach((error) => {
    if (!errorMap[error.path]) {
      errorMap[error.path] = error.msg;
    }
  });

  return errorMap;
};
