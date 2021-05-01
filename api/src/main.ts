import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { environment } from './environment';
import * as Sentry from '@sentry/node';
import { SentryInterceptor } from './interceptors/sentry.interceptor';

async function bootstrap() {
  const SENTRY = process.env.SENTRY || environment.sentry.url;
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.ORIGIN || environment.server.origin,
  });
  logger.log(`Accepted requests from origin ${environment.server.origin}`);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new SentryInterceptor());

  Sentry.init({
    dsn: SENTRY,
    tracesSampleRate: environment.sentry.traces,
  });
  logger.log(`Sentry initialized`);

  const port = process.env.PORT || environment.server.port;
  await app.listen(port);
  logger.log(`Server is listening on port ${port}`);
}
bootstrap();
