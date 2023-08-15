import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // 这里不能用 mongodb://localhost
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/fund')],
})
export class DatabaseModule {}
