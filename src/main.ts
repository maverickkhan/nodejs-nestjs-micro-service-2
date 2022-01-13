import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Main 2');
  const microserviceOptions = {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3001,
      retryAttempts: 3,
      retryDelay: 10,
    }
  }
  const options = {
    host: '127.0.0.1',
    port: 3001,
    retryAttempts: 3,
    retryDelay: 10,
  }
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    // transport: Transport.TCP
    {
      transport: Transport.TCP,
      options: options,
    }
  );

  app.listen();
  logger.log(`App is running at Port: ${options.port}`);
}
bootstrap();
