import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiParam, ApiProperty, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiTags('math')
  @ApiParam({ name: 'int1', type: 'integer' })
  @ApiParam({ name: 'int2', type: 'integer' })
  @Post('add/:int1/:int2')
  add(@Param('int1') int1: string, @Param('int2') int2: string): number {
    return +int1 + +int2;
  }
}
