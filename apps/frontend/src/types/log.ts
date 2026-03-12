// src/types/log.ts
export type BrewMethod = "POUR_OVER" | "OTHER";

export type CreateBrewStepPayload = {
  stepNumber: number;
  cumulativeAmount: number;
  timeSeconds: number;
};

export type CreateBrewLogPayload = {
  brewedAt: string;
  title: string;
  recipeName?: string;
  note?: string;
  rating?: number;
  method: BrewMethod;
  grindSize?: string;
  coffeeAmount?: number;
  waterAmount?: number;
  waterTemp?: number;
  brewTimeSec?: number;
  dripper?: string;
  filterType?: string;
  steps: CreateBrewStepPayload[];
};
