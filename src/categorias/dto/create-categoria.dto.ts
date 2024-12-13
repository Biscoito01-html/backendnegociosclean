import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoriaDto {
    @IsOptional()
    @IsString()
    id!: number;

    @IsString()
    @IsNotEmpty()
    nome!: string;

    @IsString()
    @IsOptional()
    subCategoria!: string;
}
