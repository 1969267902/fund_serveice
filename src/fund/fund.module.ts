import { Module } from '@nestjs/common';
import { FundController } from './fund.controller';
import { FundService } from './fund.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FundSchema } from 'src/schemas/fund/fund.schema';
import { RecordSchema } from 'src/schemas/fund/add_record.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'FundList', schema: FundSchema },
      { name: 'Record', schema: RecordSchema },
    ]),
  ],
  controllers: [FundController],
  providers: [FundService],
})
export class FundModule {}
