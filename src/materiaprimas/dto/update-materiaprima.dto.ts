import { PartialType } from '@nestjs/mapped-types';
import { CreateMateriaprimaDto } from './create-materiaprima.dto';

export class UpdateMateriaprimaDto extends PartialType(CreateMateriaprimaDto) {}
