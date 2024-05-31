import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateGoodcatalogDto } from './dto/create-goodcatalog.dto';
import { UpdateGoodcatalogDto } from './dto/update-goodcatalog.dto';
import { Goodcatalog } from './entities/goodcatalog.entity';
import { Goodtypes } from '../goodtypes/entities/goodtypes.entity'; // Импортируем Goodtypes
import { EntityManager } from '@mikro-orm/core';

@Injectable()
export class GoodcatalogService {
  constructor(
    private readonly em: EntityManager,
  ) {}

  async create(createGoodcatalogDto: CreateGoodcatalogDto): Promise<Goodcatalog> {
    const exists = await this.em.findOne(Goodcatalog, { id: createGoodcatalogDto.id });
    if (exists) {
      throw new HttpException('Good with this ID already exists', HttpStatus.BAD_REQUEST);
    }
    
    const goodtype = await this.em.findOne(Goodtypes, { id: createGoodcatalogDto.goodtype });
    if (!goodtype) {
      throw new HttpException('Goodtype not found', HttpStatus.BAD_REQUEST);
    }

    const goodcatalog = this.em.create(Goodcatalog, {
      ...createGoodcatalogDto,
      goodtype,
    });

    await this.em.persistAndFlush(goodcatalog);
    return goodcatalog;
  }

  async findAll(): Promise<Array<Goodcatalog>> {
    return this.em.find(Goodcatalog, {}, { populate: ['goodtype'] });
  }

  async findOne(id: string): Promise<Goodcatalog> {
    const good = await this.em.findOne(Goodcatalog, { id });
    if (!good) {
      throw new HttpException('Good was not found', HttpStatus.NOT_FOUND);
    }
    return good;
  }

  async update(id: number, updateGoodcatalogDto: UpdateGoodcatalogDto) {
    return `This action updates a #${id} good`;
  }

  async remove(id: string) {
    const good = await this.em.findOne(Goodcatalog, id);
    if (good) {
      await this.em.removeAndFlush(good);
      return;
    }
    throw new HttpException('Good was not found', HttpStatus.NOT_FOUND);
  }
}
