import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RecordDocument = Record & Document;

@Schema()
export class Record extends Document {
  @Prop()
  date: Date;

  @Prop()
  amount: number;

  @Prop()
  price: string;

  @Prop()
  portion: number;

  @Prop()
  status: boolean;

  @Prop()
  id: string;
}

export const RecordSchema = SchemaFactory.createForClass(Record);
