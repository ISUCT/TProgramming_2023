import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Breed {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;
}
