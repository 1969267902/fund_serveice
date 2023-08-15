import { Module } from '@nestjs/common';
import { FundController } from './fund.controller';
import { FundService } from './fund.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FundSchema } from 'src/schemas/fund.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'FundList', schema: FundSchema }]),
  ],
  controllers: [FundController],
  providers: [FundService],
})
export class FundModule {}
