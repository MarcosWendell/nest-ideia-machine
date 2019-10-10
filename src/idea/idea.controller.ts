import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Put,
  UsePipes,
  Logger,
  UseGuards,
} from '@nestjs/common';

import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';
import { ValidationPipe } from '../shared/validation.pipe';
import { User } from 'src/user/user.decorator';
import { AuthGuard } from './../shared/auth.guard';
import { userInfo } from 'os';

@Controller('idea')
export class IdeaController {
  private logger = new Logger('IdeaController');

  constructor(private ideaService: IdeaService) {}

  @Get()
  showAllIdeas() {
    return this.ideaService.showAll();
  }

  @Post()
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  createIdea(@User('id') user, @Body() data: IdeaDTO) {
    this.logger.log(JSON.stringify(data));
    return this.ideaService.create(user, data);
  }

  @Get(':id')
  readIdea(@Param('id') id: string) {
    return this.ideaService.read(id);
  }

  @Put(':id')
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  updateIdea(@Param('id') id: string, @User('id') user, @Body() data: Partial<IdeaDTO>) {
    this.logger.log(JSON.stringify(data));
    return this.ideaService.update(id, user, data);
  }

  @Delete(':id')
  removeIdea(@Param('id') id: string, @User('id') user) {
    return this.ideaService.remove(id, user);
  }
}
