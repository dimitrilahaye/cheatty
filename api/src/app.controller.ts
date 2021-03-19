import { Controller, Get, InternalServerErrorException } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  healthCheck(): any {
    // test sentry
    throw new InternalServerErrorException();

    return {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now(),
    };
  }
}
