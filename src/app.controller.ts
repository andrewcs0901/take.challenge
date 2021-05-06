import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('repos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getRepos(@Query('language') language?: string): Promise<any> {
    return this.appService.getRepos(language);
  }
}
