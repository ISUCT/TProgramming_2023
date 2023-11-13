import { Phone } from './phone';

export class LandlinePhone extends Phone {
  display(): string {
    return `i'm landline phone`;
  }
}
