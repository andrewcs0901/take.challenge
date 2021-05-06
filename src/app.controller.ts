import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('repos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('language') language?: string): any {
    return this.appService.getHello(language);
  }
}
