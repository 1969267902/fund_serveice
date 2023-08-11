import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FundDocument = Fund & Document;

@Schema()
export class Fund extends Document {
  @Prop()
  name: string;

  @Prop()
  id: string;
}

export const FundSchema = SchemaFactory.createForClass(Fund);
