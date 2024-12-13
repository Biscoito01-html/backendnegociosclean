import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriasService {

  constructor(private readonly prisma: PrismaService) { }

  create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    return this.prisma.categoria.create({ data: createCategoriaDto });
  }

  async findAll(): Promise<Categoria[]> {
    return this.prisma.categoria.findMany();
  }

  async findOne(id: number): Promise<Categoria | null> {
    return this.prisma.categoria.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> {
    return this.prisma.categoria.update({
      where: { id },
      data: updateCategoriaDto,
    });
  }

  async remove(id: number): Promise<Categoria> {
    return this.prisma.categoria.delete({
      where: { id },
    });
  }
}
