import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as foodJson from '../seed/food/foods.json';

@Injectable()
export class FoodsService {
  constructor(private prisma: PrismaService) {}

  async create(input: Prisma.FoodCreateInput) {
    return await this.prisma.food.create({
      data: input,
    });
  }

  async findAll(creatorID: string) {
    return await this.prisma.food.findMany({
      where: {
        OR: [
          {
            creatorID: creatorID,
          },
          {
            creatorID: 'owner',
          },
        ],
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} food`;
  }

  async update(id: string, input: Prisma.FoodUpdateInput) {
    return await this.prisma.food.update({
      where: {
        id: id,
      },
      data: input,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} food`;
  }

  async initialize() {
    if ((await this.prisma.food.count()) > 0) {
      return;
    }

    const foods: Prisma.FoodCreateInput[] =
      foodJson.foods as Prisma.FoodCreateInput[];
    await this.prisma.food.createMany({
      data: foods,
    });
  }
}
