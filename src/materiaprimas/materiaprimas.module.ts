import { Module } from '@nestjs/common';
import { MateriaprimasService } from './materiaprimas.service';
import { MateriaprimasController } from './materiaprimas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MateriaprimasController],
  providers: [MateriaprimasService],
})
export class MateriaprimasModule { }
