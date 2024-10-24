import { Module, OnModuleInit } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { FoodsController } from './foods.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FoodsController],
  providers: [FoodsService, PrismaService],
})
export class FoodsModule implements OnModuleInit {
  constructor(private readonly foodsService: FoodsService) {}

  async onModuleInit() {
    await this.foodsService.initialize();
  }
}
