import { Injectable } from '@nestjs/common';
import { CreateFornecedoreDto } from './dto/create-fornecedore.dto';
import { UpdateFornecedoreDto } from './dto/update-fornecedore.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Fornecedor } from '@prisma/client';

@Injectable()
export class FornecedoresService {

  constructor(private readonly prisma: PrismaService) { }
  async create(createFornecedoreDto: CreateFornecedoreDto): Promise<Fornecedor> {
    return await this.prisma.fornecedor.create({ data: createFornecedoreDto });
  }

  async findAll(): Promise<Fornecedor[]> {
    return await this.prisma.fornecedor.findMany();
  }

  async findOne(id: string): Promise<Fornecedor | null> {
    return await this.prisma.fornecedor.findUnique({ where: { id } });
  }

  async update(id: string, updateFornecedoreDto: UpdateFornecedoreDto): Promise<Fornecedor | null> {
    return await this.prisma.fornecedor.update({ where: { id }, data: updateFornecedoreDto });
  }

  async remove(id: string): Promise<Fornecedor> {
    return await this.prisma.fornecedor.delete({ where: { id } });
  }
}
