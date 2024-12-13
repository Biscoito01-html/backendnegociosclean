import { Module } from '@nestjs/common';
import { CustosService } from './custos.service';
import { CustosController } from './custos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CustosController],
  providers: [CustosService],
})
export class CustosModule { }
