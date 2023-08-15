import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FundModule } from './fund/fund.module';
import { DatabaseModule } from './database';

@Module({
  imports: [DatabaseModule, FundModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
