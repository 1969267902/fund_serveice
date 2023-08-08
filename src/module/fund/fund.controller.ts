import { Controller, Get, Param } from '@nestjs/common';
import { FundService } from './fund.service';

@Controller('/fund')
export class FundController {
  @Get('/list')
  findAll() {
    return new FundService().getFundList();
  }

  @Get(`/detail/:id`)
  findDetail(@Param() params) {
    console.log(params.id);
    return new FundService().getFundDetail(params.id);
  }
}
