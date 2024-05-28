import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GoodtypesService } from './goodtypes.service';
import { CreateGoodtypesDto } from './dto/create-goodtypes.dto';
import { UpdateGoodtypesDto } from './dto/update-goodtypes.dto';

@Controller('goodtypes')
export class GoodtypesController {
  constructor(private readonly goodtypesService: GoodtypesService) {}

  @Post()
  create(@Body() createGoodtypesDto: CreateGoodtypesDto) {
    return this.goodtypesService.create(createGoodtypesDto);
  }

  @Get()
  findAll() {
    return this.goodtypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goodtypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGoodtypesDto: UpdateGoodtypesDto) {
    return this.goodtypesService.update(+id, updateGoodtypesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goodtypesService.remove(+id);
  }
}
