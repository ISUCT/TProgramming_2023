import { Breed } from "../../breeds/entities/breed.entity"

export class GetCatDto {
   id: string
   name: string
   age: number
   breed?: string
}
