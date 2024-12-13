/*
  Warnings:

  - You are about to drop the column `criado-em` on the `custos` table. All the data in the column will be lost.
  - Added the required column `formaPagamento` to the `custos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "custos" DROP COLUMN "criado-em",
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dataPagamento" TIMESTAMP(3),
ADD COLUMN     "formaPagamento" TEXT NOT NULL,
ADD COLUMN     "isExtraordinaria" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isRecorrente" BOOLEAN NOT NULL DEFAULT false;
