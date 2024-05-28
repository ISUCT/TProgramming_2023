import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateGoodtypesDto } from './dto/create-goodtypes.dto';
import { UpdateGoodtypesDto } from './dto/update-goodtypes.dto';
import { Goodtypes } from './entities/goodtypes.entity';
import { error } from 'console';
import { EntityRepository, EntityManager  } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class GoodtypesService {
    constructor(
        @InjectRepository(Goodtypes)
        private readonly goodtypesRepo: EntityRepository<Goodtypes>,
        private readonly em: EntityManager
      ) {}
    
            async create(createGoodtypesDto: CreateGoodtypesDto): Promise<Goodtypes> {
              const exists = await this.goodtypesRepo.findOne({ id: createGoodtypesDto.id });
              if (exists) {
                throw new HttpException('Goodtype with this ID already exists', HttpStatus.BAD_REQUEST);
              }
              const goodtypes = new Goodtypes();
              goodtypes.id = createGoodtypesDto.id;
              goodtypes.name = createGoodtypesDto.name;
              await this.em.persistAndFlush(goodtypes);
              return goodtypes;
            }
    
      findAll():Promise<Array<Goodtypes>> {
        return this.goodtypesRepo.findAll();
      }

  async findOne(id: number) {
    const goodtype = await this.goodtypesRepo.findOne({ id });
    if (!goodtype) {
      throw new HttpException('Goodtype was not found', HttpStatus.NOT_FOUND);
    }
    return goodtype;
  }

  update(id: number, updateGoodtypesDto: UpdateGoodtypesDto) {
    return `This action updates a #${id} breed`;
  }

  async remove(id: number) {
    const em = this.goodtypesRepo.getEntityManager();
    const goodtype = await this.goodtypesRepo.findOne(id);
    if (goodtype) {
        em.removeAndFlush(goodtype);
        return;
    }
    throw new HttpException('Goodtype was not found', HttpStatus.NOT_FOUND);
  }
}
