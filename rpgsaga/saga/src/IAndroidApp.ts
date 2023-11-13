import { IApplication } from './IApplication';

export interface IAndroidApp extends IApplication {
  checkSecurity(): void;
}
