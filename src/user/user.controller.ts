import { AuthGuard } from './../shared/auth.guard';
import {
  Controller,
  Post,
  Get,
  Body,
  UsePipes,
  UseGuards,
  Query,
} from '@nestjs/common';

import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { ValidationPipe } from './../shared/validation.pipe';
import { User } from './user.decorator';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('users')
  @UseGuards(new AuthGuard())
  showAllUsers(@Query('page') page: number) {
    this.userService.showAll(page);
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: UserDTO) {
    this.userService.login(data);
  }

  @Post('register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: UserDTO) {
    this.userService.register(data);
  }
}
