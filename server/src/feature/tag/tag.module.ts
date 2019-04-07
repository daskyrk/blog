import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TagSchema } from './schema/tag.schema';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tag', schema: TagSchema }]),
  ],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}