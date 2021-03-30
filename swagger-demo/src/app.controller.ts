import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiImplicitBody } from '@nestjs/swagger/dist/decorators/api-implicit-body.decorator';
import { Type } from '@nestjs/common/interfaces/type.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //private reminder = '';

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /*
  @ApiTags('math')
  @ApiParam({ name: 'int1', type: 'integer' })
  @ApiParam({ name: 'int2', type: 'integer' })
  @Post('add/:int1/:int2')
  add(@Param('int1') int1: string, @Param('int2') int2: string): number {
    return +int1 + +int2;
  }
  */

  /*
  @ApiTags('util')
  @ApiImplicitBody({
    content: undefined,
    description: 'memory data',
    required: true,
    name: 'memory data',
    type: '{ value: string}',
  })
  @ApiResponse({ status: 200, description: 'Set the value to memorize'})
  @Post('remind')
  remind(@Body() s: { value: string }): void {
    this.reminder = s.value;
  }

  @ApiTags('util')
  @Get('remind')
  read_remind(): string {
    return this.reminder;
  }
  */
}
