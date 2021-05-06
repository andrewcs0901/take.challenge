import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('repos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRepos(@Query('language') language?: string): any {
    return this.appService.getRepos(language);
  }
}
