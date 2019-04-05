import { Document, Types } from 'mongoose';

export interface BaseInterface extends Document {
  _id: Types.ObjectId; // mongodb id
  createdAt: Date; // 创建时间
  updatedAt: Date; // 更新时间
}
