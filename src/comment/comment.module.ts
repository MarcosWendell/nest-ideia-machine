import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { CommentEntity } from './comment.entity';
import { UserEntity } from './../user/user.entity';
import { IdeaEntity } from './../idea/idea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, IdeaEntity, CommentEntity])],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
