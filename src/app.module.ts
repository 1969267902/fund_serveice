import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FundController } from './fund/fund.controller';
import { FundService } from './fund/fund.service';
import { DatabaseModule } from './mongodb';
@Module({
  imports: [],
  controllers: [AppController, FundController],
  providers: [AppService, FundService],
})
export class AppModule {}
