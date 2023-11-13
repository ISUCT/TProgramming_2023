import { IAndroidApp } from './IAndroidApp';
import { IIosApp } from './IIOsApp';

export class Telegram implements IAndroidApp, IIosApp {
  checkSignature(): void {
    console.log('Checking security for IPhone');
  }
  readonly name = 'Telegram';
  checkSecurity(): void {
    console.log('Checking security for Android');
  }

  install(): void {
    console.log(`Installing ${this.name}`);
  }
  run(): void {
    console.log(`Running ${this.name}`);
  }
  uninstall(): void {
    console.log(`Uninstalling ${this.name}`);
  }
}
