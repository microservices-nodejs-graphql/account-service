import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('msaccount');
  const configService = app.get(ConfigService);

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      consumen: {
        groupId: configService.get('KAFKA_GROUP_ID')
      },
      client: {
        brokers: [configService.get('KAFKA_BROKER')],
      }
    }
  } as MicroserviceOptions);

  app.startAllMicroservices();

  await app.listen(3001);
}
bootstrap();
