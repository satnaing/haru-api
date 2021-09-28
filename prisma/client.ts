import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// let prisma = new PrismaClient({
//   log: ["query", "info", "warn", "error"],
// });

export default prisma;
