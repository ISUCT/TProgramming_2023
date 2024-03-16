import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { NotFoundError } from 'rxjs';
import { Cat } from './entities/cat.entity';
import { GetCatDto } from './dto/get-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    try {
        return this.catsService.create(createCatDto);
    } catch(err) {
        
    }
  }

  @Get()
  async findAll():Promise<Array<GetCatDto>> {
    const cats = await this.catsService.findAll();
    const dto = cats.map(item => {
        const itm: GetCatDto = {
            id: item.uuid,
            name: item.name,
            age: item.age,
            breed: item.breed ? item.breed : "unknown"
        }
        return itm;
    })
    return dto;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // const cat = this.catsService.findOne(+id);
    // if (cat) {
    //     return cat
    // }
    throw new HttpException(`cat with id: ${id} was not found`, HttpStatus.NOT_FOUND)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
