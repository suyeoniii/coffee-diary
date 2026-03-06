import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBrewLogDto } from './dto/create-brew-log.dto';
import { UpdateBrewLogDto } from './dto/update-brew-log.dto';

const STEPS_ORDER = { steps: { orderBy: { stepNumber: 'asc' as const } } };

@Injectable()
export class BrewLogService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateBrewLogDto) {
    const { steps, ...logData } = dto;
    return this.prisma.brewLog.create({
      data: {
        ...logData,
        steps: steps ? { create: steps } : undefined,
      },
      include: STEPS_ORDER,
    });
  }

  async findAll() {
    return this.prisma.brewLog.findMany({
      include: STEPS_ORDER,
      orderBy: { brewedAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const log = await this.prisma.brewLog.findUnique({
      where: { id },
      include: STEPS_ORDER,
    });
    if (!log) throw new NotFoundException(`BrewLog #${id} not found`);
    return log;
  }

  async update(id: number, dto: UpdateBrewLogDto) {
    await this.findOne(id);
    const { steps, ...logData } = dto;
    return this.prisma.brewLog.update({
      where: { id },
      data: {
        ...logData,
        steps: steps ? { deleteMany: {}, create: steps } : undefined,
      },
      include: STEPS_ORDER,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.brewLog.delete({ where: { id } });
  }
}
