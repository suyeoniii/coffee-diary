import { BrewMethod } from '@prisma/client';
import { BrewLogController } from './brew-log.controller';
import { BrewLogService } from './brew-log.service';
import { CreateBrewLogDto } from './dto/create-brew-log.dto';
import { UpdateBrewLogDto } from './dto/update-brew-log.dto';

describe('BrewLogController', () => {
  const brewLog = {
    id: 1,
    title: '아침 드립',
    method: BrewMethod.POUR_OVER,
  };

  let controller: BrewLogController;
  let service: {
    create: jest.MockedFunction<(dto: CreateBrewLogDto) => Promise<unknown>>;
    findAll: jest.MockedFunction<() => Promise<unknown>>;
    findOne: jest.MockedFunction<(id: number) => Promise<unknown>>;
    update: jest.MockedFunction<
      (id: number, dto: UpdateBrewLogDto) => Promise<unknown>
    >;
    remove: jest.MockedFunction<(id: number) => Promise<unknown>>;
  };

  beforeEach(() => {
    service = {
      create: jest.fn<Promise<unknown>, [CreateBrewLogDto]>(),
      findAll: jest.fn<Promise<unknown>, []>(),
      findOne: jest.fn<Promise<unknown>, [number]>(),
      update: jest.fn<Promise<unknown>, [number, UpdateBrewLogDto]>(),
      remove: jest.fn<Promise<unknown>, [number]>(),
    };
    controller = new BrewLogController(service as unknown as BrewLogService);
  });

  it('생성 요청을 서비스에 전달한다', async () => {
    const dto = { title: '아침 드립', method: BrewMethod.POUR_OVER };
    service.create.mockResolvedValue(brewLog);

    await expect(controller.create(dto)).resolves.toEqual(brewLog);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('전체 조회 요청을 서비스에 전달한다', async () => {
    service.findAll.mockResolvedValue([brewLog]);

    await expect(controller.findAll()).resolves.toEqual([brewLog]);
    expect(service.findAll).toHaveBeenCalledWith();
  });

  it('단건 조회 요청의 아이디를 서비스에 전달한다', async () => {
    service.findOne.mockResolvedValue(brewLog);

    await expect(controller.findOne(1)).resolves.toEqual(brewLog);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('수정 요청의 아이디와 내용을 서비스에 전달한다', async () => {
    const dto = { rating: 5 };
    service.update.mockResolvedValue({ ...brewLog, rating: 5 });

    await expect(controller.update(1, dto)).resolves.toEqual({
      ...brewLog,
      rating: 5,
    });
    expect(service.update).toHaveBeenCalledWith(1, dto);
  });

  it('삭제 요청의 아이디를 서비스에 전달한다', async () => {
    service.remove.mockResolvedValue(brewLog);

    await expect(controller.remove(1)).resolves.toEqual(brewLog);
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});
