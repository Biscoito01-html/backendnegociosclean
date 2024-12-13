import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { ClienteModule } from './clientes/cliente.module';
import { CategoriasModule } from './categorias/categorias.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { ProdutosModule } from './produtos/produtos.module';
import { PagamentosModule } from './pagamentos/pagamentos.module';
import { CustosModule } from './custos/custos.module';
import { MateriaprimasModule } from './materiaprimas/materiaprimas.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ClienteModule,
    FornecedoresModule,
    CategoriasModule,
    FuncionariosModule,
    ProdutosModule,
    PagamentosModule,
    CustosModule,
    MateriaprimasModule,
    PedidosModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
