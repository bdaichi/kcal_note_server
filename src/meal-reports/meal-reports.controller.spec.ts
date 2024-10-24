import { Test, TestingModule } from '@nestjs/testing';
import { MealReportsController } from './meal-reports.controller';
import { MealReportsService } from './meal-reports.service';

describe('MealReportsController', () => {
  let controller: MealReportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealReportsController],
      providers: [MealReportsService],
    }).compile();

    controller = module.get<MealReportsController>(MealReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
