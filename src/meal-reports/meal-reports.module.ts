import { Module } from '@nestjs/common';
import { MealReportsService } from './meal-reports.service';
import { MealReportsController } from './meal-reports.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MealReportsController],
  providers: [MealReportsService, PrismaService],
})
export class MealReportsModule {}
