import { Controller, Get, Param } from '@nestjs/common';
import { FundService } from './fund.service';

@Controller('/fund')
export class FundController {
  constructor(private fundService: FundService) {}
  @Get('/list')
  findAll() {
    return this.fundService.getFundList();
  }

  @Get(`/detail/:id`)
  findDetail(@Param('id') id) {
    console.log(id);
    return new FundService().getFundDetail(id);
  }
}
