import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FoodsModule } from './foods/foods.module';
import { MealReportsModule } from './meal-reports/meal-reports.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersController } from './users/users.controller';
import { FoodsController } from './foods/foods.controller';
import { MealReportsController } from './meal-reports/meal-reports.controller';
import { UsersService } from './users/users.service';
import { FoodsService } from './foods/foods.service';
import { MealReportsService } from './meal-reports/meal-reports.service';
import { PrismaService } from './prisma/prisma.service';
import { BodyReportsService } from './body-reports/body-reports.service';
import { BodyReportsController } from './body-reports/body-reports.controller';
import { BodyReportsModule } from './body-reports/body-reports.module';

@Module({
  imports: [
    AppModule,
    ConfigModule.forRoot(),
    UsersModule,
    FoodsModule,
    MealReportsModule,
    AuthModule,
    PrismaModule,
    BodyReportsModule,
  ],
  controllers: [
    AppController,
    UsersController,
    FoodsController,
    MealReportsController,
    BodyReportsController,
  ],
  providers: [
    AppService,
    UsersService,
    FoodsService,
    MealReportsService,
    PrismaService,
    BodyReportsService,
  ],
})
export class AppModule {}
