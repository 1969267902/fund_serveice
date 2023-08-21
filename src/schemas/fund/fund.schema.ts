import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FundDocument = FundList & Document;

@Schema()
export class FundList extends Document {
  @Prop()
  name: string;

  @Prop()
  id: string;
}

export const FundSchema = SchemaFactory.createForClass(FundList);
