import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService, } from 'src/prisma/prisma.service';
import { Clientes } from '@prisma/client';

@Injectable()
export class ClienteService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createClienteDto: CreateClienteDto): Promise<Clientes> {
    return await this.prisma.clientes.create({ data: createClienteDto });
  }

  async findAll(): Promise<Clientes[]> {
    return await this.prisma.clientes.findMany();
  }

  async findOne(id: string): Promise<Clientes | null> {
    return await this.prisma.clientes.findUnique({ where: { id } });
  }

  async update(id: string, updateClienteDto: UpdateClienteDto) {
    return await this.prisma.clientes.update({ where: { id }, data: updateClienteDto });
  }

  async remove(id: string) {
    return await this.prisma.clientes.delete({ where: { id } });
  }
}
