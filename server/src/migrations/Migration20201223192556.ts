import { Migration } from '@mikro-orm/migrations';

export class Migration20201223192556 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "email" text not null;');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');

    this.addSql('alter table "user" drop constraint "user_password_unique";');

    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
  }

}
