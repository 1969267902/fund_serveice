import { Injectable } from '@nestjs/common';
import { list, details } from '../../mock/fund_list';

@Injectable()
export class FundService {
  getFundList() {
    return list;
  }

  getFundDetail(id: string) {
    console.log(id);
    return details;
  }
}
