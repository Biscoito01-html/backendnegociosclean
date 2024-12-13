-- AlterTable
ALTER TABLE "materiaprimas" ADD COLUMN     "produtoId" TEXT;

-- AddForeignKey
ALTER TABLE "materiaprimas" ADD CONSTRAINT "materiaprimas_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
