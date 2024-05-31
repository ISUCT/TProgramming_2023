import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateGoodtypesDto } from './dto/create-goodtypes.dto';
import { UpdateGoodtypesDto } from './dto/update-goodtypes.dto';
import { Goodtypes } from './entities/goodtypes.entity';
import { EntityManager } from '@mikro-orm/core';

@Injectable()
export class GoodtypesService {
    constructor(
        private readonly em: EntityManager
    ) {}

    async create(createGoodtypesDto: CreateGoodtypesDto): Promise<Goodtypes> {
        const exists = await this.em.findOne(Goodtypes, { id: createGoodtypesDto.id });
        if (exists) {
            throw new HttpException('Goodtype with this ID already exists', HttpStatus.BAD_REQUEST);
        }
        const goodtypes = new Goodtypes();
        goodtypes.id = createGoodtypesDto.id;
        goodtypes.name = createGoodtypesDto.name;
        await this.em.persistAndFlush(goodtypes);
        return goodtypes;
    }

    async findAll(): Promise<Array<Goodtypes>> {
        return this.em.find(Goodtypes, {});
    }

    async findOne(id: number): Promise<Goodtypes> {
        const goodtype = await this.em.findOne(Goodtypes, id);
        if (!goodtype) {
            throw new HttpException('Goodtype was not found', HttpStatus.NOT_FOUND);
        }
        return goodtype;
    }

    update(id: number, updateGoodtypesDto: UpdateGoodtypesDto) {
        return `This action updates a #${id} breed`;
    }

    async remove(id: number) {
        const goodtype = await this.em.findOne(Goodtypes, id);
        if (goodtype) {
            await this.em.removeAndFlush(goodtype);
            return;
        }
        throw new HttpException('Goodtype was not found', HttpStatus.NOT_FOUND);
    }
}
