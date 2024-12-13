import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Produto } from '@prisma/client';

@Injectable()
export class ProdutosService {

  constructor(private readonly prisma: PrismaService) { }
  async create(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    return await this.prisma.produto.create({ data: createProdutoDto });
  }

  async findAll(): Promise<Produto[]> {
    return await this.prisma.produto.findMany(
      {
        where: {
          quantidade: {
            gt: 0
          }
        }
      }
    );
  }
  async findAllIncluindoZarados(): Promise<Produto[]> {
    return await this.prisma.produto.findMany();
  }


  async findOne(id: string): Promise<Produto | null> {
    return await this.prisma.produto.findUnique({ where: { id } });
  }

  update(id: string, updateProdutoDto: UpdateProdutoDto) {
    return this.prisma.produto.update({
      where: { id },
      data: updateProdutoDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.produto.delete({ where: { id } });
  }
}
