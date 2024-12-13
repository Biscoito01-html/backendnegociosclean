import { Injectable } from '@nestjs/common';
import { CreateMateriaprimaDto } from './dto/create-materiaprima.dto';
import { UpdateMateriaprimaDto } from './dto/update-materiaprima.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MateriaPrima } from '@prisma/client';

@Injectable()
export class MateriaprimasService {

  constructor(private readonly prisma: PrismaService) { }
  async create(createMateriaprimaDto: CreateMateriaprimaDto): Promise<MateriaPrima> {
    return await this.prisma.materiaPrima.create({ data: createMateriaprimaDto });
  }


  async findAll(): Promise<MateriaPrima[]> {
    return await this.prisma.materiaPrima.findMany();
  }


  async findOne(id: string): Promise<MateriaPrima | null> {
    return await this.prisma.materiaPrima.findUnique({ where: { id } });
  }

  async update(id: string, updateMateriaprimaDto: UpdateMateriaprimaDto) {
    return await this.prisma.materiaPrima.update({ where: { id }, data: updateMateriaprimaDto });
  }

  async remove(id: string) {
    return await this.prisma.materiaPrima.delete({ where: { id } });
  }
}
