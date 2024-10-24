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
import { FoodsService } from './foods.service';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';
import { Prisma } from '@prisma/client';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @UseGuards(FirebaseAuthGuard)
  @Post()
  create(@Request() req, @Body() input: Prisma.FoodCreateInput) {
    const user = req.user;
    const newFood: Prisma.FoodCreateInput = {
      ...input,
      creatorID: user.uid,
    };
    return this.foodsService.create(newFood);
  }

  @UseGuards(FirebaseAuthGuard)
  @Get()
  findAll(@Request() req) {
    const user = req.user;
    return this.foodsService.findAll(user.uid);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: Prisma.FoodUpdateInput) {
    return this.foodsService.update(id, input);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodsService.remove(+id);
  }
}
