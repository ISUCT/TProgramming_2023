import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Breed } from '../../breeds/entities/breed.entity';
import { uuid } from 'uuid'
@Entity()
export class Cat {
   @PrimaryKey({ type: 'uuid' })
   uuid: string = uuid.v4();

   @Property()
   name: string

   @Property()
   age: number

   @ManyToOne({ entity: () => Breed })
   breed?: Breed
}
