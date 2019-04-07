import Mongoose from 'mongoose';
import { autoIncrement } from 'mongoose-plugin-autoinc';
import mongoosePaginate from 'mongoose-paginate';
import { schemaOptions } from '@/shared/base';

export const PostSchema = new Mongoose.Schema(
  {
    // 文章标题
    title: { type: String, required: true },

    // 关键字
    keyword: String,

    // 描述
    description: String,

    // 标签
    tag: [{ type: Mongoose.Schema.Types.ObjectId, ref: 'Tag' }],

    // 内容
    content: { type: String, required: true },

    // 状态 1 草稿 2 发布
    state: { type: Number, default: 1 },

    // 公开
    ['public']: { type: Boolean, default: true },

    // 缩略图
    thumb: String,

    // 文章分类
    type: { type: String, required: true },

    // 其他元信息
    meta: {
      views: { type: Number, default: 0 },
      likes: { type: Number, default: 0 },
      comments: { type: Number, default: 0 },
    },
  },
  schemaOptions,
);

PostSchema.plugin(mongoosePaginate);
PostSchema.plugin(autoIncrement, {
  model: 'Post',
  field: 'index',
  startAt: 1,
  incrementBy: 1,
});
