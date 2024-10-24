import { Test, TestingModule } from '@nestjs/testing';
import { BodyReportsService } from './body-reports.service';

describe('BodyReportsService', () => {
  let service: BodyReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BodyReportsService],
    }).compile();

    service = module.get<BodyReportsService>(BodyReportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
