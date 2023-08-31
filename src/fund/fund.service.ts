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
    // 查询基金名称列表
    return await this.fundModel.find({});
  }

  async findFund(id) {
    // 按条件查找基金
    return await this.fundModel.find({ id }).exec();
  }

  getFundDetail(id: string) {
    // 获取基金记录
    return details;
  }

  async createFund(data, res) {
    // 新增基金名称
    const result = await this.findFund(data.id);
    if (result.length === 0) {
      const CreateModel = new this.fundModel(data);
      CreateModel.save();
      res.status(HttpStatus.OK).send({
        msg: '新增成功',
      });
    }
    res.status(HttpStatus.BAD_REQUEST).send({ msg: '已存在' });
  }

  addRecord(data, res) {
    // 创建基金买卖记录
    const RecordModel = new this.recordModel(data);
    RecordModel.save();
    res.status(HttpStatus.OK).send({
      msg: '新增成功',
    });
  }
}
