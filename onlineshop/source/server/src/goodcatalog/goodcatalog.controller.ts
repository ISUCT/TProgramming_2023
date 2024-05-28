import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    NotFoundException,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { GoodcatalogService } from './goodcatalog.service';
  import { CreateGoodcatalogDto } from './dto/create-goodcatalog.dto';
  import { UpdateGoodcatalogDto } from './dto/update-goodcatalog.dto';
  import { NotFoundError } from 'rxjs';
  import { Goodcatalog } from './entities/goodcatalog.entity';
  import { GetGoodcatalogDto } from './dto/get-goodcatalog.dto';
  
  @Controller('goodcatalog')
  export class GoodcatalogController {
    constructor(private readonly goodcatalogService: GoodcatalogService) {}
  
    @Post()
    create(@Body() createGoodcatalogDto: CreateGoodcatalogDto) {
      try {
        return this.goodcatalogService.create(createGoodcatalogDto);
      } catch (err) {}
    }
  
    @Get()
    async findAll(): Promise<Array<GetGoodcatalogDto>> {
      const goods = await this.goodcatalogService.findAll();
      const dto = goods.map((item) => {
        const itm: GetGoodcatalogDto = {
          id: item.id,
          selfdiscount: item.selfdiscount,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          goodtype: item.goodtype ? item.goodtype.name : 'unknown',
        };
        return itm;
      });
      return dto;
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      const good = this.goodcatalogService.findOne(id);
      if (good) {
        return good
      }
      throw new HttpException(
        `Good with id: ${id} was not found`,
        HttpStatus.NOT_FOUND,
      );
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() updateGoodcatalogDto: UpdateGoodcatalogDto) {
      return this.goodcatalogService.update(id, updateGoodcatalogDto);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string) {
      try {
        await this.goodcatalogService.remove(id);
      } catch (err) {
        throw new HttpException(
          `Good with id: ${id} was not found`,
          HttpStatus.NOT_FOUND,
        );
      }
      return;
    }
  }
  