
import { IsString, IsOptional, IsNumber } from 'class-validator';
export class CreateMateriaprimaDto {
    @IsString()
    @IsOptional()
    id!: string;

    @IsString()
    @IsOptional()
    nome!: string;

    @IsString()
    @IsOptional()
    unidadeDeMedida!: string;

    @IsOptional()
    @IsNumber()
    quantidade!: number;

    @IsOptional()
    @IsNumber()
    preco!: number;

    @IsOptional()
    @IsString()
    fornecedoresId!: string[]


}
