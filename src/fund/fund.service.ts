import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { list, details } from '../mock/fund_list';
import { FundDocument } from 'src/schemas/fund.schema';

@Injectable()
export class FundService {
  constructor(
    @InjectModel('FundList') public readonly fundModel: Model<FundDocument>
  ) {}

  getFundList() {
    return list;
  }

  getFundDetail(id: string) {
    return details;
  }

  async createFund(data) {
    try {
      const result = await this.findAll(data.id);
      if (result.length === 0) {
        const CreateModel = new this.fundModel(data);
        CreateModel.save();
      } else {
        return {
          status: HttpStatus.FORBIDDEN,
          error: '已存在',
        };
      }
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN
      );
    }
  }

  async findAll(id) {
    return await this.fundModel.find({ id }).exec();
  }
}
