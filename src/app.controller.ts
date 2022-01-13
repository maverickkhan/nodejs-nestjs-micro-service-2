import { Controller, Get } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, TcpContext } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern( 'message' )
  message(@Payload() data: string, @Ctx() context: TcpContext): string {
    return this.appService.getMessage(data);
  }
}
