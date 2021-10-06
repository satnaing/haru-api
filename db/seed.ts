import { customers, categories, products, admins } from "./data";
import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

async function main() {
  for (let customer of customers) {
    await prisma.customer.create({
      data: customer,
    });
  }

  for (let category of categories) {
    await prisma.category.create({
      data: category,
    });
  }

  for (let product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  for (let admin of admins) {
    await prisma.admin.create({
      data: admin,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
