import { IsString, IsNotEmpty, IsOptional, IsNumber, IsDate, IsBoolean } from 'class-validator';

export class CreateCustoDto {
    @IsString()
    @IsOptional()
    id?: string;

    @IsString()
    @IsNotEmpty()
    nome!: string;

    @IsString()
    @IsNotEmpty()
    descricao!: string;

    @IsNumber()
    @IsNotEmpty()
    valor!: number;

    @IsBoolean()
    @IsNotEmpty()
    isRecorrente!: boolean;

    @IsBoolean()
    @IsNotEmpty()
    isExtraordinaria!: boolean;

    @IsDate()
    @IsNotEmpty()
    dataPagamento!: Date;

    @IsString()
    @IsNotEmpty()
    formaPagamento!: string;

}
