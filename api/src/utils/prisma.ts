import { PrismaClient } from "@prisma/client";
import { pagination } from "prisma-extension-pagination";

const db = new PrismaClient({
  // log: ["query"],
}).$extends(pagination());

export default db;
