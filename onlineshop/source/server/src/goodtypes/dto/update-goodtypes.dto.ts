import { PartialType } from '@nestjs/mapped-types';
import { CreateGoodtypesDto } from './create-goodtypes.dto';

export class UpdateGoodtypesDto extends PartialType(CreateGoodtypesDto) {}
