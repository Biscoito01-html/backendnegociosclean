/*
  Warnings:

  - Changed the type of `quantidade` on the `materiaprimas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `preco` on the `materiaprimas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `peso` on the `produtos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `preco` on the `produtos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `precoAquisicao` on the `produtos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `precoCusto` on the `produtos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `margem` on the `produtos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `quantidade` on the `produtos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `quantidadeMinimaEmEstoque` on the `produtos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "materiaprimas" DROP COLUMN "quantidade",
ADD COLUMN     "quantidade" DOUBLE PRECISION NOT NULL,
DROP COLUMN "preco",
ADD COLUMN     "preco" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "peso",
ADD COLUMN     "peso" DOUBLE PRECISION NOT NULL,
DROP COLUMN "preco",
ADD COLUMN     "preco" DOUBLE PRECISION NOT NULL,
DROP COLUMN "precoAquisicao",
ADD COLUMN     "precoAquisicao" DOUBLE PRECISION NOT NULL,
DROP COLUMN "precoCusto",
ADD COLUMN     "precoCusto" DOUBLE PRECISION NOT NULL,
DROP COLUMN "margem",
ADD COLUMN     "margem" DOUBLE PRECISION NOT NULL,
DROP COLUMN "quantidade",
ADD COLUMN     "quantidade" DOUBLE PRECISION NOT NULL,
DROP COLUMN "quantidadeMinimaEmEstoque",
ADD COLUMN     "quantidadeMinimaEmEstoque" DOUBLE PRECISION ;
