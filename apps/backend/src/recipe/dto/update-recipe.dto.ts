import { CreateStepDto } from './create-recipe.dto';

export class UpdateRecipeDto {
  grindSize?: string;
  coffeeAmount?: number;
  waterAmount?: number;
  waterTemp?: number;
  brewTime?: number;
  dripper?: string;
  filterType?: string;
  memo?: string;
  steps?: CreateStepDto[];
}
