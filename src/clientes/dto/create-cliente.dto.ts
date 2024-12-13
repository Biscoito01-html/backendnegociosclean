import { ComprasClientes, PedidoDelivery } from '@prisma/client';
import {
    IsString,
    IsOptional,
    IsEmail,
    IsDate,
    IsUUID,
    IsArray,
} from 'class-validator';

export class CreateClienteDto {
    @IsUUID()
    @IsOptional()
    id!: number;

    @IsString()
    nome!: string;

    @IsEmail()
    email!: string;

    @IsString()
    password!: string;

    @IsString()
    cpf!: string;

    @IsString()
    rua!: string;

    @IsString()
    numero!: string;

    @IsString()
    telefone!: string;

    @IsString()
    bairro!: string;

    @IsString()
    localidade!: string;

    @IsString()
    cep!: string;

    @IsString()
    pontoDeReferencia!: string;

    @IsDate()
    aniversario!: Date;

    @IsDate()
    @IsOptional()
    createdAt?: Date;

    @IsDate()
    @IsOptional()
    updatedAt?: Date;


    @IsOptional()
    pedidosDelivery!: PedidoDelivery;

    @IsArray()
    @IsOptional()
    comprasClientes!: ComprasClientes;





}
