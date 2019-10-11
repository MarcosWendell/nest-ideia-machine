import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { IdeaEntity } from './../idea/idea.entity';
import { CommentEntity } from './../comment/comment.entity';
import { CommentService } from './../comment/comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, IdeaEntity, CommentEntity])],
  controllers: [UserController],
  providers: [UserService, UserResolver, CommentService],
})
export class UserModule {}
