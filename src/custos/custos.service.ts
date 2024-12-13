import { Injectable } from '@nestjs/common';
import { CreateCustoDto } from './dto/create-custo.dto';
import { UpdateCustoDto } from './dto/update-custo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Custos } from '@prisma/client';

@Injectable()
export class CustosService {

  constructor(private readonly prisma: PrismaService) { }
  async create(createCustoDto: CreateCustoDto): Promise<Custos> {
    return await this.prisma.custos.create({ data: createCustoDto });
  }

  async findAll(): Promise<Custos[]> {
    return await this.prisma.custos.findMany();
  }

  async findOne(id: string): Promise<Custos | null> {
    return await this.prisma.custos.findUnique({ where: { id } });
  }

  async update(id: string, updateCustoDto: UpdateCustoDto) {
    return await this.prisma.custos.update({ where: { id }, data: updateCustoDto });
  }

  async remove(id: string) {
    return await this.prisma.custos.delete({ where: { id } })
  }
}
