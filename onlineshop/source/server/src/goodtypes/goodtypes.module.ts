import { Module } from '@nestjs/common';
import { GoodtypesService } from './goodtypes.service';
import { GoodtypesController } from './goodtypes.controller';

@Module({
  controllers: [GoodtypesController],
  providers: [GoodtypesService],
})
export class GoodtypesModule {}
