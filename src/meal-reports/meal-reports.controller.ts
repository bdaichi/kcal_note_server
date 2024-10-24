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
import { MealReportsService } from './meal-reports.service';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';
import { Prisma } from '@prisma/client';

@Controller('meal-reports')
export class MealReportsController {
  constructor(private readonly mealReportsService: MealReportsService) {}

  @UseGuards(FirebaseAuthGuard)
  @Post()
  create(
    @Request() req,
    @Body()
    input: {
      mealReport: Prisma.MealReportCreateInput;
      meals: Prisma.MealCreateInput[];
    },
  ) {
    const user = req.user;
    const newMealReport: Prisma.MealReportCreateInput = {
      ...input.mealReport,
      creatorID: user.uid,
    };
    return this.mealReportsService.create({
      mealReport: newMealReport,
      meals: input.meals,
    });
  }

  @UseGuards(FirebaseAuthGuard)
  @Get()
  findAll(@Request() req) {
    const user = req.user;
    return this.mealReportsService.findAll(user.uid);
  }

  @UseGuards(FirebaseAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealReportsService.findOne(id);
  }

  @UseGuards(FirebaseAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    input: {
      mealReport: Prisma.MealReportCreateInput;
      meals: Prisma.MealCreateInput[];
    },
  ) {
    return this.mealReportsService.update(id, input);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mealReportsService.remove(+id);
  }
}
