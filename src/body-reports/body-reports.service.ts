import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BodyReportsService {
  constructor(private prisma: PrismaService) {}

  async create(input: Prisma.BodyReportCreateInput) {
    await this.prisma.bodyReport.create({
      data: input,
    });
    return true;
  }

  async findAll(creatorID: string) {
    return await this.prisma.bodyReport.findMany({
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
    });
  }

  async findOne(id: string) {
    return await this.prisma.bodyReport.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, input: Prisma.BodyReportCreateInput) {
    return await this.prisma.bodyReport.update({
      where: {
        id: id,
      },
      data: input,
    });
  }
}
