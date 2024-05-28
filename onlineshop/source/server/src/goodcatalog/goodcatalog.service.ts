import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateGoodcatalogDto } from './dto/create-goodcatalog.dto';
import { UpdateGoodcatalogDto } from './dto/update-goodcatalog.dto';
import { Goodcatalog } from './entities/goodcatalog.entity';
import { error } from 'console';
import { EntityRepository, EntityManager  } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class GoodcatalogService {
  constructor(
    @InjectRepository(Goodcatalog)
    private readonly goodcatalogRepo: EntityRepository<Goodcatalog>,
    private readonly em: EntityManager
  ) {}

        async create(createGoodcatalogDto: CreateGoodcatalogDto): Promise<Goodcatalog> {
          const exists = await this.goodcatalogRepo.findOne({ id: createGoodcatalogDto.id });
          if (exists) {
            throw new HttpException('Good with this ID already exists', HttpStatus.BAD_REQUEST);
          }
          const goodcatalog = new Goodcatalog();
          goodcatalog.id = createGoodcatalogDto.id;
          goodcatalog.selfdiscount = createGoodcatalogDto.selfdiscount;
          goodcatalog.name = createGoodcatalogDto.name;
          goodcatalog.price = createGoodcatalogDto.price;
          goodcatalog.quantity = createGoodcatalogDto.quantity;
          goodcatalog.goodtype = null; 
          await this.em.persistAndFlush(goodcatalog);
          return goodcatalog;
        }

  findAll():Promise<Array<Goodcatalog>> {
    return this.goodcatalogRepo.findAll({
        populate: ['goodtype']
    });
  }

  async findOne(id: string): Promise<Goodcatalog> {
    const good = await this.goodcatalogRepo.findOne({ id });
    if (!good) {
      throw new HttpException('Good was not found', HttpStatus.NOT_FOUND);
    }
    return good;
  }

  async update(id: number, updateGoodcatalogDto: UpdateGoodcatalogDto) {
    return `This action updates a #${id} good`;
  }

  async remove(id: string) {
    const em = this.goodcatalogRepo.getEntityManager();
    const good = await this.goodcatalogRepo.findOne(id);
    if (good) {
        em.removeAndFlush(good);
        return;
    }
    throw new HttpException('Good was not found', HttpStatus.NOT_FOUND);
  }
}