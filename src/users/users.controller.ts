import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(FirebaseAuthGuard)
  @Post()
  create(@Request() req) {
    const newUser: Prisma.UserCreateInput = {
      uid: req.user.uid,
      email: req.user.email,
      name: '',
    };
    return this.usersService.create(newUser);
  }

  @UseGuards(FirebaseAuthGuard)
  @Get()
  getProfile(@Request() req) {
    const user = req.user;
    return this.usersService.findOne(user.uid);
  }

  @UseGuards(FirebaseAuthGuard)
  @Patch()
  update(@Body() input: Prisma.UserUpdateInput, @Request() req) {
    const user = req.user;
    return this.usersService.update(user.uid, input);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
