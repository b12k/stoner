import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private message = 'Hello World!';

  getHello() {
    return this.message;
  }
}
