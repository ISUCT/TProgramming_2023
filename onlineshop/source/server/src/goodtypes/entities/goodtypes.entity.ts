import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Goodtypes {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;
}
