import { IAndroidApp } from './IAndroidApp';

export class Keep implements IAndroidApp {
  readonly name = 'Keep';
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
