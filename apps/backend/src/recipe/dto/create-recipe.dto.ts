export class CreateStepDto {
  stepNumber!: number;
  cumulativeAmount!: number;
  timeSeconds!: number;
}

export class CreateRecipeDto {
  grindSize?: string;
  coffeeAmount!: number;
  waterAmount!: number;
  waterTemp!: number;
  brewTime!: number;
  dripper?: string;
  filterType?: string;
  memo?: string;
  steps?: CreateStepDto[];
}
