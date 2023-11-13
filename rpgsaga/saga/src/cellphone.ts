import { Phone } from './phone';

export abstract class CellPhone extends Phone {
  diagonal: number;

  display(): string {
    return `i'm cellphone ${this.name}`;
  }

  constructor(number: string, year: number, diagonal: number, public name?: string) {
    console.log('Creating cellphone');
    super(number, year, name);
    this.diagonal = diagonal;
  }

  call(number: string): void {
    console.log(`making call by cellphone ${number}`);
  }

  declaineCall() {
    console.log('declaing call');
  }
  sendMessage(text: string, num: number) {
    console.log(`sending ${text} to ${num}`);
  }

  readMessage() {
    console.log('reading incoming messages');
  }
}
