
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsDate, IsBoolean } from 'class-validator';

export class CreateProdutoDto {

    @IsOptional()
    id?: string;

    @IsNotEmpty()
    @IsString()
    codigoDeBarras!: string;

    @IsNotEmpty()
    @IsString()
    nome!: string;

    @IsOptional()
    @IsString()
    descricao!: string;

    @IsNotEmpty()
    @IsNumber()
    peso!: number;

    @IsNotEmpty()
    @IsNumber()
    preco!: number;

    @IsNotEmpty()
    @IsNumber()
    precoAquisicao!: number;

    @IsNotEmpty()
    @IsNumber()
    precoCusto!: number;

    @IsNotEmpty()
    @IsNumber()
    margem!: number;

    @IsOptional()
    @IsBoolean()
    isDelivery!: boolean;

    @IsNotEmpty()
    @IsNumber()
    quantidade!: number;

    @IsOptional()
    @IsNumber()
    quantidadeMinimaEmEstoque!: number;

    @IsOptional()
    @IsString()
    pathImagem!: string;

    @IsOptional()
    @IsDate()
    validade!: Date;

    @IsOptional()
    @IsString()
    unidadeDeMedida!: string;

    @IsOptional()
    @IsString()
    categoriaId!: string;

    @IsOptional()
    fornecedorId!: string;

}
