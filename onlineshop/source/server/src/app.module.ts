import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MySqlDriver } from '@mikro-orm/mysql';
import { GoodtypesModule } from './goodtypes/goodtypes.module';
import { GoodcatalogModule } from './goodcatalog/goodcatalog.module';

@Module({
  imports: [GoodcatalogModule,
 MikroOrmModule.forRoot({
    driver: MySqlDriver,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mLbr%@.-G.890n^]albYUI3#',
    dbName: 'zooshop_new',
    autoLoadEntities: true,
 }),
 GoodtypesModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
