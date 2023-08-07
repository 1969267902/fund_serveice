import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FundController } from './module/fund/fund.controller';
import { FundService } from './module/fund/fund.service';

@Module({
  imports: [],
  controllers: [AppController, FundController],
  providers: [AppService, FundService],
})
export class AppModule {}
