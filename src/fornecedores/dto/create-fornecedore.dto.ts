import { IsString, IsNotEmpty, IsOptional, IsUUID, IsDate } from 'class-validator';

export class CreateFornecedoreDto {
    @IsUUID()
    @IsOptional()
    id?: string;

    @IsString()
    @IsNotEmpty()
    nome!: string;

    @IsString()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsNotEmpty()
    telefone!: string;

    @IsString()
    @IsNotEmpty()
    cnpj!: string;

    @IsString()
    @IsNotEmpty()
    razaoSocial!: string;

    @IsString()
    @IsNotEmpty()
    inscricaoEstadual!: string;

    @IsString()
    @IsNotEmpty()
    inscricaoMunicipal!: string;

    @IsString()
    @IsNotEmpty()
    nomeFantasia!: string;

    @IsString()
    @IsNotEmpty()
    pathImagem!: string;

    @IsString()
    @IsNotEmpty()
    cep!: string;

    @IsString()
    @IsNotEmpty()
    logradouro!: string;

    @IsString()
    @IsNotEmpty()
    bairro!: string;

    @IsString()
    @IsNotEmpty()
    localidade!: string;

    @IsString()
    @IsNotEmpty()
    uf!: string;

    @IsString()
    @IsOptional()
    complemento?: string;

    @IsDate()
    @IsOptional()
    createdAt?: Date;

    @IsDate()
    @IsOptional()
    updatedAt?: Date;
}
