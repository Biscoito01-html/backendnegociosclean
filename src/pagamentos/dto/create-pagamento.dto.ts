import { IsDate, IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreatePagamentoDto {
    @IsOptional()
    @IsString()
    id!: string;

    @IsNotEmpty()
    @IsString()
    nome!: string;

    @IsNotEmpty()
    @IsNumber()
    valor!: number;

    @IsNotEmpty()
    @IsString()
    descricao!: string;

    @IsNotEmpty()
    @IsDate()
    data!: Date;

    @IsNotEmpty()
    @IsString()
    fornecedorId!: string;



}
