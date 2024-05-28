import { UuidType } from "@mikro-orm/core";
import { Goodtypes } from "../../goodtypes/entities/goodtypes.entity"

export class GetGoodcatalogDto {
    id: string;
    selfdiscount: number;
    name: string;
    price: number;
    quantity: number;
    goodtype?: string
}
