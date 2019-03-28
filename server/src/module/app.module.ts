import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGODB } from '../config/config';
// import { ConfigModule } from './config/config.module';
import { ArticleModule } from './article/article.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // GraphQLModule.forRoot({
    //   typePaths: ['./**/*.graphql'],
    //   // debug: false,
    //   // playground: false,
    // }),
    // ConfigModule,
    MongooseModule.forRoot(MONGODB.uris),
    UserModule,
    ArticleModule,
    CommentModule,
  ],
})
export class AppModule {}
