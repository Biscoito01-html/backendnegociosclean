/*
  Warnings:

  - You are about to drop the column `atualizado_em` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `criado_em` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `atualizado_em` on the `custos` table. All the data in the column will be lost.
  - You are about to drop the column `criado_em` on the `custos` table. All the data in the column will be lost.
  - You are about to drop the column `atualizado_em` on the `fornecedores` table. All the data in the column will be lost.
  - You are about to drop the column `criado-em` on the `fornecedores` table. All the data in the column will be lost.
  - You are about to drop the column `atualizado_em` on the `funcionarios` table. All the data in the column will be lost.
  - You are about to drop the column `criado-em` on the `funcionarios` table. All the data in the column will be lost.
  - You are about to drop the column `atualizado_em` on the `materiaprimas` table. All the data in the column will be lost.
  - You are about to drop the column `criado-em` on the `materiaprimas` table. All the data in the column will be lost.
  - You are about to drop the column `atualizado_em` on the `pagamentos` table. All the data in the column will be lost.
  - You are about to drop the column `criado-em` on the `pagamentos` table. All the data in the column will be lost.
  - You are about to drop the column `atualizado_em` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `bairro` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `cep` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `complemento` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `criado-em` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `localidade` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `logradouro` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `numero` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `atualizado_em` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `categorias_id` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `criado-em` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `fornecedor_id` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `pedidos_id` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `fornecedorId` to the `pagamentos` table without a default value. This is not possible if the table is not empty.
  - Made the column `clienteId` on table `pedidos` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `categoriaId` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fornecedorId` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_funcionarioId_fkey";

-- DropForeignKey
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_categorias_id_fkey";

-- DropForeignKey
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_fornecedor_id_fkey";

-- DropForeignKey
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_pedidos_id_fkey";

-- DropIndex
DROP INDEX "pedidos_email_key";

-- AlterTable
ALTER TABLE "categorias" ADD COLUMN     "produtosId" TEXT[];

-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "atualizado_em",
DROP COLUMN "criado_em",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "pedidosId" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "custos" DROP COLUMN "atualizado_em",
DROP COLUMN "criado_em",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "fornecedores" DROP COLUMN "atualizado_em",
DROP COLUMN "criado-em",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "funcionarios" DROP COLUMN "atualizado_em",
DROP COLUMN "criado-em",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "pedidosId" TEXT[],
ADD COLUMN     "updateAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "materiaprimas" DROP COLUMN "atualizado_em",
DROP COLUMN "criado-em",
ADD COLUMN     "cratedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "fornecedoresId" TEXT[],
ADD COLUMN     "updateAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "pagamentos" DROP COLUMN "atualizado_em",
DROP COLUMN "criado-em",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "fornecedorId" TEXT NOT NULL,
ADD COLUMN     "updateAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "atualizado_em",
DROP COLUMN "bairro",
DROP COLUMN "cep",
DROP COLUMN "complemento",
DROP COLUMN "criado-em",
DROP COLUMN "email",
DROP COLUMN "localidade",
DROP COLUMN "logradouro",
DROP COLUMN "nome",
DROP COLUMN "numero",
ADD COLUMN     "cratedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "listaVendas" TEXT[],
ADD COLUMN     "updateAt" TIMESTAMP(3),
ALTER COLUMN "clienteId" SET NOT NULL;

-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "atualizado_em",
DROP COLUMN "categorias_id",
DROP COLUMN "criado-em",
DROP COLUMN "fornecedor_id",
DROP COLUMN "pedidos_id",
ADD COLUMN     "categoriaId" TEXT NOT NULL,
ADD COLUMN     "cratedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "fornecedorId" TEXT NOT NULL,
ADD COLUMN     "updateAt" TIMESTAMP(3);
