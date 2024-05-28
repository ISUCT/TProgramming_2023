import { PartialType } from '@nestjs/mapped-types';
import { CreateGoodcatalogDto } from './create-goodcatalog.dto';

export class UpdateGoodcatalogDto extends PartialType(CreateGoodcatalogDto) {}
