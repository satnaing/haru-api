/*
  Warnings:

  - Added the required column `total_price` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DeliveryType" AS ENUM ('STORE_PICKUP', 'YANGON', 'OTHERS');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('CASH_ON_DELIVERY', 'BANK_TRANSFER');

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "delivery_type" "DeliveryType" NOT NULL DEFAULT E'STORE_PICKUP',
ADD COLUMN     "payment_type" "PaymentType" NOT NULL DEFAULT E'CASH_ON_DELIVERY',
ADD COLUMN     "total_price" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "township" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "state" DROP NOT NULL,
ALTER COLUMN "zip_code" DROP NOT NULL;
