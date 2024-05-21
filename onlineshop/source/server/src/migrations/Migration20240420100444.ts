import { Migration } from '@mikro-orm/migrations';

export class Migration20240420100444 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "breed" ("id" serial primary key, "name" varchar(255) not null);');

    this.addSql('alter table "cat" drop column "breed";');

    this.addSql('alter table "cat" add column "breed_id" int null;');
    this.addSql('alter table "cat" add constraint "cat_breed_id_foreign" foreign key ("breed_id") references "breed" ("id") on update cascade on delete set null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "cat" drop constraint "cat_breed_id_foreign";');

    this.addSql('drop table if exists "breed" cascade;');

    this.addSql('alter table "cat" drop column "breed_id";');

    this.addSql('alter table "cat" add column "breed" varchar(255) null;');
  }

}
