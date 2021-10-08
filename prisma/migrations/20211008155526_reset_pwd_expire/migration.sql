/*
  Warnings:

  - The `reset_password_expire` column on the `customers` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "customers" DROP COLUMN "reset_password_expire",
ADD COLUMN     "reset_password_expire" INTEGER;
