import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) { }

  @Get()
  @HttpCode(200)
  async getHello() {
    return await this.prisma.funcionario.findMany();
  }
}
