import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateRecipeDto) {
    const { steps, ...recipeData } = dto;
    return this.prisma.recipe.create({
      data: {
        ...recipeData,
        steps: steps ? { create: steps } : undefined,
      },
      include: { steps: { orderBy: { stepNumber: 'asc' } } },
    });
  }

  async findAll() {
    return this.prisma.recipe.findMany({
      include: { steps: { orderBy: { stepNumber: 'asc' } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id },
      include: { steps: { orderBy: { stepNumber: 'asc' } } },
    });
    if (!recipe) throw new NotFoundException(`Recipe #${id} not found`);
    return recipe;
  }

  async update(id: number, dto: UpdateRecipeDto) {
    await this.findOne(id);
    const { steps, ...recipeData } = dto;
    return this.prisma.recipe.update({
      where: { id },
      data: {
        ...recipeData,
        steps: steps
          ? {
              deleteMany: {},
              create: steps,
            }
          : undefined,
      },
      include: { steps: { orderBy: { stepNumber: 'asc' } } },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.recipe.delete({ where: { id } });
  }
}
