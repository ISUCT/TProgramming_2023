import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [CatsModule,
 MikroOrmModule.forRoot({
    driver: PostgreSqlDriver,
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    dbName: 'cats',
    autoLoadEntities: true,
 }),
 BreedsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
