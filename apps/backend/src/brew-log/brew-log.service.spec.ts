import { NotFoundException } from '@nestjs/common';
import { BrewMethod } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { BrewLogService } from './brew-log.service';

type PrismaCall = (args: Record<string, unknown>) => Promise<unknown>;

describe('BrewLogService', () => {
  const stepsOrder = {
    steps: { orderBy: { stepNumber: 'asc' } },
  };
  const brewedAt = new Date('2026-09-22T01:00:00.000Z');
  const brewLog = {
    id: 1,
    title: '아침 드립',
    recipeName: '4:6 레시피',
    note: '산미가 선명함',
    rating: 4,
    method: BrewMethod.POUR_OVER,
    brewedAt,
    createdAt: brewedAt,
    updatedAt: brewedAt,
    grindSize: '중간',
    coffeeAmount: 20,
    waterAmount: 300,
    waterTemp: 92,
    brewTimeSec: 180,
    dripper: 'V60',
    filterType: '종이',
    steps: [
      {
        id: 1,
        brewLogId: 1,
        stepNumber: 1,
        cumulativeAmount: 60,
        timeSeconds: 0,
      },
    ],
  };

  let service: BrewLogService;
  let prisma: {
    brewLog: {
      create: jest.MockedFunction<PrismaCall>;
      findMany: jest.MockedFunction<PrismaCall>;
      findUnique: jest.MockedFunction<PrismaCall>;
      update: jest.MockedFunction<PrismaCall>;
      delete: jest.MockedFunction<PrismaCall>;
    };
  };

  beforeEach(() => {
    prisma = {
      brewLog: {
        create: jest.fn<Promise<unknown>, [Record<string, unknown>]>(),
        findMany: jest.fn<Promise<unknown>, [Record<string, unknown>]>(),
        findUnique: jest.fn<Promise<unknown>, [Record<string, unknown>]>(),
        update: jest.fn<Promise<unknown>, [Record<string, unknown>]>(),
        delete: jest.fn<Promise<unknown>, [Record<string, unknown>]>(),
      },
    };
    service = new BrewLogService(prisma as unknown as PrismaService);
  });

  describe('커피 추출 기록 생성', () => {
    it('추출 단계가 있으면 기록과 단계를 함께 생성한다', async () => {
      const dto = {
        title: '아침 드립',
        method: BrewMethod.POUR_OVER,
        brewedAt,
        steps: [
          { stepNumber: 1, cumulativeAmount: 60, timeSeconds: 0 },
          { stepNumber: 2, cumulativeAmount: 180, timeSeconds: 45 },
        ],
      };
      prisma.brewLog.create.mockResolvedValue(brewLog);

      await expect(service.create(dto)).resolves.toEqual(brewLog);
      expect(prisma.brewLog.create).toHaveBeenCalledWith({
        data: {
          title: '아침 드립',
          method: BrewMethod.POUR_OVER,
          brewedAt,
          steps: { create: dto.steps },
        },
        include: stepsOrder,
      });
    });

    it('추출 단계가 없으면 단계 생성 요청을 보내지 않는다', async () => {
      const dto = { title: '간단 기록' };
      prisma.brewLog.create.mockResolvedValue(brewLog);

      await service.create(dto);

      expect(prisma.brewLog.create).toHaveBeenCalledWith({
        data: { title: '간단 기록', steps: undefined },
        include: stepsOrder,
      });
    });
  });

  describe('커피 추출 기록 조회', () => {
    it('전체 기록을 최신 추출순으로 조회하고 단계는 순서대로 정렬한다', async () => {
      prisma.brewLog.findMany.mockResolvedValue([brewLog]);

      await expect(service.findAll()).resolves.toEqual([brewLog]);
      expect(prisma.brewLog.findMany).toHaveBeenCalledWith({
        include: stepsOrder,
        orderBy: { brewedAt: 'desc' },
      });
    });

    it('아이디로 기록 한 건을 조회한다', async () => {
      prisma.brewLog.findUnique.mockResolvedValue(brewLog);

      await expect(service.findOne(1)).resolves.toEqual(brewLog);
      expect(prisma.brewLog.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
        include: stepsOrder,
      });
    });

    it('아이디에 해당하는 기록이 없으면 찾을 수 없음 예외를 던진다', async () => {
      prisma.brewLog.findUnique.mockResolvedValue(null);

      await expect(service.findOne(999)).rejects.toThrow(
        new NotFoundException('BrewLog #999 not found'),
      );
    });
  });

  describe('커피 추출 기록 수정', () => {
    it('새 추출 단계가 있으면 기존 단계를 지우고 새 단계로 교체한다', async () => {
      const steps = [
        { stepNumber: 1, cumulativeAmount: 50, timeSeconds: 0 },
        { stepNumber: 2, cumulativeAmount: 200, timeSeconds: 60 },
      ];
      prisma.brewLog.findUnique.mockResolvedValue(brewLog);
      prisma.brewLog.update.mockResolvedValue({
        ...brewLog,
        title: '수정한 기록',
      });

      await service.update(1, { title: '수정한 기록', steps });

      expect(prisma.brewLog.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: {
          title: '수정한 기록',
          steps: { deleteMany: {}, create: steps },
        },
        include: stepsOrder,
      });
    });

    it('추출 단계가 없으면 기존 단계를 유지한다', async () => {
      prisma.brewLog.findUnique.mockResolvedValue(brewLog);
      prisma.brewLog.update.mockResolvedValue({ ...brewLog, rating: 5 });

      await service.update(1, { rating: 5 });

      expect(prisma.brewLog.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: { rating: 5, steps: undefined },
        include: stepsOrder,
      });
    });

    it('존재하지 않는 기록은 수정하지 않는다', async () => {
      prisma.brewLog.findUnique.mockResolvedValue(null);

      await expect(service.update(999, { title: '수정' })).rejects.toThrow(
        NotFoundException,
      );
      expect(prisma.brewLog.update).not.toHaveBeenCalled();
    });
  });

  describe('커피 추출 기록 삭제', () => {
    it('기록이 존재하는지 확인한 뒤 삭제한다', async () => {
      prisma.brewLog.findUnique.mockResolvedValue(brewLog);
      prisma.brewLog.delete.mockResolvedValue(brewLog);

      await expect(service.remove(1)).resolves.toEqual(brewLog);
      expect(prisma.brewLog.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('존재하지 않는 기록은 삭제하지 않는다', async () => {
      prisma.brewLog.findUnique.mockResolvedValue(null);

      await expect(service.remove(999)).rejects.toThrow(NotFoundException);
      expect(prisma.brewLog.delete).not.toHaveBeenCalled();
    });
  });
});
