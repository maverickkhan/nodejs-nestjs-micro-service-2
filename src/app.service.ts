import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMessage(data: string): string {
    if (data == 'hello') {
      return 'Hello from microservice'
    } else if (data == 'bye'){
      return 'Bye from microservice'
    } else {
      return 'Microservice does not understands'
    }
    }
}
