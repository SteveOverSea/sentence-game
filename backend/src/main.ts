import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import { APP_CONFIG } from './config/app.config';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  });
  app.use(cookieParser());

  await app.listen(APP_CONFIG.API_PORT);
}

bootstrap();
