import { Controller, Get } from '@nestjs/common';

@Controller('/fund')
export class FundController {
  @Get('/list')
  findAll(): string {
    return 'hello world';
  }
}
