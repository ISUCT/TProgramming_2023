import { Migration } from '@mikro-orm/migrations';

export class Migration20240316115131 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "cat" ("uuid" uuid not null, "name" varchar(255) not null, "age" int not null, constraint "cat_pkey" primary key ("uuid"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "cat" cascade;');
  }

}
