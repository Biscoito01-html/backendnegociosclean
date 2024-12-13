import { IsString, IsOptional, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateFuncionarioDto {
    @IsString()
    @IsNotEmpty()
    id!: string;

    @IsString()
    @IsNotEmpty()
    nome!: string;

    @IsString()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsNotEmpty()
    senha!: string;

    @IsString()
    @IsNotEmpty()
    endereco!: string;

    @IsString()
    @IsNotEmpty()
    cargo!: string;

    @IsString()
    @IsOptional()
    token?: string;

    @IsString()
    @IsNotEmpty()
    cpf!: string;

    @IsString()
    @IsNotEmpty()
    pathPhoto!: string;

    @IsBoolean()
    @IsNotEmpty()
    isActivity!: boolean;

    @IsOptional()
    @IsString()
    createdAt?: string;

    @IsOptional()
    @IsString()
    updatedAt?: string;
}
