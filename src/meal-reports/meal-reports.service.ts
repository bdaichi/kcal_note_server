import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MealReportsService {
  constructor(private prisma: PrismaService) {}

  async create(input: {
    mealReport: Prisma.MealReportCreateInput;
    meals: Prisma.MealCreateInput[];
  }) {
    await this.prisma.mealReport.create({
      data: input.mealReport,
    });
    await this.prisma.meal.createMany({
      data: input.meals,
    });
    return true;
  }

  async findAll(creatorID: string) {
    return await this.prisma.mealReport.findMany({
      where: {
        AND: [
          {
            creatorID: creatorID,
          },
          {
            archivedAt: null,
          },
        ],
      },
      include: {
        meals: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.mealReport.findUnique({
      where: {
        id: id,
      },
      include: {
        meals: true,
      },
    });
  }

  async update(
    id: string,
    input: {
      mealReport: Prisma.MealReportCreateInput;
      meals: Prisma.MealCreateInput[];
    },
  ) {
    input.meals.forEach(async (meal) => {
      await this.prisma.meal.upsert({
        where: {
          id: meal.id,
        },
        update: meal,
        create: meal,
      });
    });
    return await this.prisma.mealReport.update({
      where: {
        id: id,
      },
      data: input.mealReport,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} mealReport`;
  }
}
