import { Controller, Post, Get, Body, UsePipes } from '@nestjs/common';

import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { ValidationPipe } from './../shared/validation.pipe';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('users')
  showAllUsers() {
    this.userService.showAll();
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
