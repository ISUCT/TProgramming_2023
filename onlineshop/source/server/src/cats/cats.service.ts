import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { error } from 'console';
import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';

// const cats: Array<Cat> = [
//     {
//         id: 1,
//         name: "Vasya",
//         age: 3
//     },
//     {
//         id: 2,
//         name: "Murzik",
//         age: 2
//     },
//     {
//         id: 3,
//         name: "Pushok",
//         age: 5
//     }
// ]

@Injectable()
export class CatsService {
    constructor(
        @InjectRepository(Cat)
        private readonly catsRepo: EntityRepository<Cat>){}

  create(createCatDto: CreateCatDto) {
    // const exists = cats.some((item) => createCatDto.id === item.id );
    // if (exists) {
    //     throw new Error();
    // }
    // const cat: Cat = {
    //     id: createCatDto.id,
    //     name: createCatDto.name,
    //     age: createCatDto.age,
    // };
    // cats.push(cat);
    // return cat;
  }

  findAll():Promise<Array<Cat>> {
    return this.catsRepo.findAll();
  }

  findOne(id: number) {
    // return cats.find((item) => id === item.id );
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
