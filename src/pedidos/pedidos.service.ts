import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Pedido } from '@prisma/client';

@Injectable()
export class PedidosService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    return this.prisma.pedido.create({
      data: createPedidoDto,
    });
  }

  // Buscar todos os pedidos
  async findAll() {
    return await this.prisma.pedido.findMany();
  }

  // Buscar um pedido específico
  async findOne(id: string) {
    return await this.prisma.pedido.findUnique({
      where: { id },

    });
  }

  // Atualizar um pedido
  async update(id: string, updatePedidoDto: UpdatePedidoDto) {
    return await this.prisma.pedido.update({
      where: { id },
      data: updatePedidoDto,
    });
  }


  // Remover um pedido
  async remove(id: string) {
    return await this.prisma.pedido.delete({
      where: { id },
    });
  }
}
