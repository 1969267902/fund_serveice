import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { FundService } from './fund.service';

@Controller('/fund')
export class FundController {
  constructor(private fundService: FundService) {}

  @Post('/add/record')
  addRecord(@Body() body, @Res() res) {
    this.fundService.addRecord(body, res);
  }

  @Get('/list')
  findAll() {
    return this.fundService.getFundList();
  }
  @Post('/create')
  create(@Body() body, @Res() res) {
    console.log(body);
    this.fundService.createFund(body, res);
  }

  @Get(`/detail/:id`)
  findDetail(@Param('id') id) {
    return this.fundService.getFundDetail(id);
  }
}
