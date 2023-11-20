import { CarnivoreNames } from '../enums/carnivoreNames';
import { PlantNames } from '../enums/plantNames';

export interface Herbivore {
  runFromCarnivore(carnivoreName: CarnivoreNames): string;
  eatPlant(plantName: PlantNames): string;
}
