import { Pedido, Produto } from "@prisma/client";
import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePedidoDto {
    @IsOptional()
    @IsString()
    id!: string;

    @IsString()
    @IsNotEmpty()
    nome!: string;

    @IsEmail()
    @IsNotEmpty()
    email!: string;

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
    numero!: string;

    @IsString()
    @IsNotEmpty()
    complemento!: string;

    @IsArray()
    @IsOptional()
    produtosList!: Array<Produto>;

    @IsOptional()
    @IsString()
    clienteId!: string;

    @IsOptional()
    @IsString()
    funcionarioId!: string;
}
