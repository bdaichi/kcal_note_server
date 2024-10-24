import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(input: Prisma.UserCreateInput) {
    return await this.prisma.user.create({
      data: input,
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(uid: string) {
    return await this.prisma.user.findUnique({
      where: {
        uid: uid,
      },
    });
  }

  update(uid: string, input: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: {
        uid: uid,
      },
      data: input,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
