// @ts-nocheck
import { PrismaClient } from "../../prisma/generated/client";
import { pagination } from "prisma-extension-pagination";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}
const db = prisma.$extends(pagination());
export default db;
