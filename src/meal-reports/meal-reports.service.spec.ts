import { Test, TestingModule } from '@nestjs/testing';
import { MealReportsService } from './meal-reports.service';

describe('MealReportsService', () => {
  let service: MealReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealReportsService],
    }).compile();

    service = module.get<MealReportsService>(MealReportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
