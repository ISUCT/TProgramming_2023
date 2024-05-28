import { Module } from '@nestjs/common';
import { GoodcatalogService } from './goodcatalog.service';
import { GoodcatalogController } from './goodcatalog.controller';
import { Goodcatalog } from './entities/goodcatalog.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [MikroOrmModule.forFeature([Goodcatalog])],
  controllers: [GoodcatalogController],
  providers: [GoodcatalogService],
})
export class GoodcatalogModule {}
