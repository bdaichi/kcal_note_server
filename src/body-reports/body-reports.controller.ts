import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { BodyReportsService } from './body-reports.service';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';
import { Prisma } from '@prisma/client';

@Controller('body-reports')
export class BodyReportsController {
  constructor(private readonly bodyReportsService: BodyReportsService) {}

  @UseGuards(FirebaseAuthGuard)
  @Post()
  create(
    @Request() req,
    @Body()
    input: Prisma.BodyReportCreateInput,
  ) {
    const user = req.user;
    const newBodyReport: Prisma.BodyReportCreateInput = {
      ...input,
      creatorID: user.uid,
    };
    return this.bodyReportsService.create(newBodyReport);
  }

  @UseGuards(FirebaseAuthGuard)
  @Get()
  findAll(@Request() req) {
    const user = req.user;
    return this.bodyReportsService.findAll(user.uid);
  }

  @UseGuards(FirebaseAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bodyReportsService.findOne(id);
  }

  @UseGuards(FirebaseAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    input: Prisma.BodyReportCreateInput,
  ) {
    return this.bodyReportsService.update(id, input);
  }
}
