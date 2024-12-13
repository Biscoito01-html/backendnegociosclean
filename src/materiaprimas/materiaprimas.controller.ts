import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MateriaprimasService } from './materiaprimas.service';
import { CreateMateriaprimaDto } from './dto/create-materiaprima.dto';
import { UpdateMateriaprimaDto } from './dto/update-materiaprima.dto';

@Controller('materiaprimas')
export class MateriaprimasController {
  constructor(private readonly materiaprimasService: MateriaprimasService) { }

  @Post()
  create(@Body() createMateriaprimaDto: CreateMateriaprimaDto) {
    return this.materiaprimasService.create(createMateriaprimaDto);
  }

  @Get()
  findAll() {
    return this.materiaprimasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materiaprimasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMateriaprimaDto: UpdateMateriaprimaDto) {
    return this.materiaprimasService.update(id, updateMateriaprimaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materiaprimasService.remove(id);
  }
}
