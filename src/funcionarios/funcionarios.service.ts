import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Funcionario } from '@prisma/client';

@Injectable()
export class FuncionariosService {

  constructor(private readonly prisma: PrismaService) { }
  async create(createFuncionarioDto: CreateFuncionarioDto): Promise<Funcionario> {
    return await this.prisma.funcionario.create({ data: createFuncionarioDto });
  }

  async findAll(): Promise<Funcionario[]> {
    return await this.prisma.funcionario.findMany();
  }

  async findOne(id: string): Promise<Funcionario | null> {
    return await this.prisma.funcionario.findUnique({ where: { id } });
  }

  async update(id: string, updateFuncionarioDto: UpdateFuncionarioDto): Promise<Funcionario> {
    return await this.prisma.funcionario.update({ where: { id }, data: updateFuncionarioDto });
  }

  async remove(id: string): Promise<Funcionario> {
    return await this.prisma.funcionario.delete({ where: { id } });
  }
}
