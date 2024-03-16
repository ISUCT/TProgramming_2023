import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { uuid } from 'uuid'
@Entity()
export class Cat {
   @PrimaryKey({ type: 'uuid' })
   uuid: string = uuid.v4();

   @Property()
   name: string

   @Property()
   age: number

   @Property()
   breed?: string
}
