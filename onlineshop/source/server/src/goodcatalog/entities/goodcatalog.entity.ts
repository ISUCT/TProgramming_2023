import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Goodtypes } from '../../goodtypes/entities/goodtypes.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Goodcatalog {
  @PrimaryKey({ type: 'uuid' })
  id: string = uuidv4();

  @ManyToOne(() => Goodtypes)
  goodtype?: Goodtypes;

  @Property()
  selfdiscount: number;

  @Property()
  name: string;

  @Property()
  price: number;

  @Property()
  quantity: number;
}