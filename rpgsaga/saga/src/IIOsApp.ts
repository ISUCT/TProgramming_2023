import { IApplication } from './IApplication';

export interface IIosApp extends IApplication {
  checkSignature(): void;
}
