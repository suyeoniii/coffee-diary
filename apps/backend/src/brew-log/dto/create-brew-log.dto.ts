import { BrewMethod } from '@prisma/client';

export class CreateStepDto {
  declare stepNumber: number;
  declare cumulativeAmount: number;
  declare timeSeconds: number;
}

export class CreateBrewLogDto {
  declare title: string;
  recipeName?: string;
  note?: string;
  rating?: number;
  method?: BrewMethod;
  brewedAt?: Date;

  grindSize?: string;
  coffeeAmount?: number;
  waterAmount?: number;
  waterTemp?: number;
  brewTimeSec?: number;
  dripper?: string;
  filterType?: string;

  steps?: CreateStepDto[];
}
