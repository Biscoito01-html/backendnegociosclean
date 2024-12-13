/*
  Warnings:

  - You are about to drop the column `produtoId` on the `materiaprimas` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "materiaprimas" DROP CONSTRAINT "materiaprimas_produtoId_fkey";

-- AlterTable
ALTER TABLE "materiaprimas" DROP COLUMN "produtoId";
