import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { BrewLogService } from './brew-log.service';
import { CreateBrewLogDto } from './dto/create-brew-log.dto';
import { UpdateBrewLogDto } from './dto/update-brew-log.dto';

@Controller('brew-logs')
export class BrewLogController {
  constructor(private readonly brewLogService: BrewLogService) {}

  @Post()
  create(@Body() dto: CreateBrewLogDto) {
    return this.brewLogService.create(dto);
  }

  @Get()
  findAll() {
    return this.brewLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.brewLogService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateBrewLogDto) {
    return this.brewLogService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.brewLogService.remove(id);
  }
}
