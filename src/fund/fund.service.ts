import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { list, details } from '../mock/fund_list';
import { FundDocument } from 'src/schemas/fund/fund.schema';
import { RecordDocument } from 'src/schemas/fund/add_record.schema';

@Injectable()
export class FundService {
  constructor(
    @InjectModel('FundList') public readonly fundModel: Model<FundDocument>,
    @InjectModel('Record') public readonly recordModel: Model<RecordDocument>
  ) {}

  async getFundList() {
    // 获取基金名称
    return await this.fundModel.find({});
  }

  getFundDetail(id: string) {
    // 获取基金记录
    return details;
  }

  async createFund(data, res) {
    // 新增基金名称
    try {
      const result = await this.findFund(data.id);

      if (result.length === 0) {
        const CreateModel = new this.fundModel(data);
        CreateModel.save();
        res.status(HttpStatus.OK).send({
          msg: '新增成功',
        });
      } else {
        res.status(HttpStatus.BAD_REQUEST).send({ msg: '已存在' });
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

  async findFund(id) {
    // 查找基金
    return await this.fundModel.find({ id }).exec();
  }

  addFundRecord(data, res) {
    console.log(data);
    try {
      const RecordModel = new this.recordModel(data);

      RecordModel.save();
      res.status(HttpStatus.OK).send({
        msg: '新增成功',
      });
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send({
        msg: err,
      });
    }
  }
}
