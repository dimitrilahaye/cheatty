/* eslint-disable @typescript-eslint/no-var-requires */
// require('dotenv').config({ path: `../.env.${process.env.NODE_ENV}` });
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import { SentryInterceptor } from './interceptors/sentry.interceptor';

async function bootstrap() {
  const SENTRY = process.env.SENTRY;
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new SentryInterceptor());
  app.setGlobalPrefix('api');

  Sentry.init({
    dsn: SENTRY,
    tracesSampleRate: Number(process.env.TRACES),
  });
  logger.log(`Sentry initialized`);

  const port = process.env.PORT;
  await app.listen(port);
  logger.log(`Server is listening on port ${port}`);
}
bootstrap();
