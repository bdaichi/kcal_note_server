import { Test, TestingModule } from '@nestjs/testing';
import { BodyReportsController } from './body-reports.controller';

describe('BodyReportsController', () => {
  let controller: BodyReportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BodyReportsController],
    }).compile();

    controller = module.get<BodyReportsController>(BodyReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
