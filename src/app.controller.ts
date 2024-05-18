import { Controller, Get, Render, UseGuards } from '@nestjs/common';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Render('index')
  @UseGuards(ThrottlerGuard)
  @Throttle({ default: { limit: 100, ttl: 60000 } })
  root() {
    return { message: 'This is my album!' };
  }
}
