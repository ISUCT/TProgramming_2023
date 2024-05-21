import { Migration } from '@mikro-orm/migrations';

export class Migration20240316120100 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "cat" add column "breed" varchar(255) null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "cat" drop column "breed";');
  }

}
