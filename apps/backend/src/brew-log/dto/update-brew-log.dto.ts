import { BrewMethod } from '@prisma/client';
import { CreateStepDto } from './create-brew-log.dto';

export class UpdateBrewLogDto {
  title?: string;
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
