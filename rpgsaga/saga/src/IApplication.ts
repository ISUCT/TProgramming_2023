export interface IApplication {
  readonly name: string;
  install(): void;
  run(): void;
  uninstall(): void;
}
