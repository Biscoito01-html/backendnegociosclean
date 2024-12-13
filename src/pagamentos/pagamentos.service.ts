import { Injectable } from '@nestjs/common';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Pagamento } from '@prisma/client';

@Injectable()
export class PagamentosService {

  constructor(private readonly prisma: PrismaService) { }
  async create(createPagamentoDto: CreatePagamentoDto): Promise<Pagamento> {
    return await this.prisma.pagamento.create({ data: createPagamentoDto });
  }

  async findAll(startDate?: string, endDate?: string): Promise<Pagamento[]> {
    const where: any = {};

    if (startDate) {
      where.createdAt = { gte: new Date(startDate) };
    }

    if (endDate) {
      where.createdAt = { ...where.createdAt, lte: new Date(endDate) };
    }

    return await this.prisma.pagamento.findMany({
      where,
    });

  }

  async findYear(year?: string): Promise<Pagamento[]> {
    if (year && !isNaN(Number(year))) {
      const startDate = new Date(`${year}-01-01`);
      const endDate = new Date(`${year}-12-31`);
      const pagamentos = await this.prisma.pagamento.findMany({
        where: {
          createdAt: {
            gte: startDate,
            lte: endDate,
          },
        },
      });
      return pagamentos.length > 0 ? pagamentos : [];
    } else {
      return await this.prisma.pagamento.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });
    }
  }
  async findOne(id: string): Promise<Pagamento | null> {
    return await this.prisma.pagamento.findUnique({ where: { id } });
  }

  async update(id: string, updatePagamentoDto: UpdatePagamentoDto): Promise<Pagamento> {
    return await this.prisma.pagamento.update({ where: { id }, data: updatePagamentoDto });
  }

  async remove(id: string): Promise<Pagamento> {
    return await this.prisma.pagamento.delete({ where: { id } });
  }
}
