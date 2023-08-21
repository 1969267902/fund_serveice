import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
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
    return this.fundService.getFundDetail(id);
  }

  @Post('/create')
  create(@Body() body, @Res() res) {
    this.fundService.createFund(body, res);
  }

  @Post('/add/record')
  addRecord(@Body() body, @Res() res) {
    console.log(body);
    return {};
    this.fundService.addFundRecord(body, res);
  }
}
