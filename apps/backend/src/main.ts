import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.CORS_ORIGIN ?? [
      'http://localhost:5173',
      'https://coffee-diary-app.onrender.com',
    ],
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
