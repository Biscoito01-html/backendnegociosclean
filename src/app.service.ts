import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  criarHello(): string {
    return 'Voce criou um hello!';
  }
}
