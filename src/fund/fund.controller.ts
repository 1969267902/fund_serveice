import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
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
  create(@Body() body) {
    this.fundService.createFund(body);
    return {
      status: HttpStatus.OK,
      message: '添加成功',
    };
  }
}
