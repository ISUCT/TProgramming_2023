import { IApplication } from './IApplication';
import { CellPhone } from './cellphone';

export abstract class Smartphone<TApp extends IApplication> extends CellPhone {
  apps: Set<TApp>;

  constructor(number: string, year: number, diagonal: number, public name?: string) {
    super(number, year, diagonal, name);
    this.apps = new Set<TApp>();
  }

  installApp(app: TApp) {
    app.install();
    this.apps.add(app);
  }

  uninstallApp(name: string) {
    for (const elem of this.apps) {
      if (elem.name === name) {
        elem.uninstall();
        this.apps.delete(elem);
        return;
      }
    }
  }

  runApp(name: string) {
    for (const elem of this.apps) {
      if (elem.name === name) {
        elem.run();
        return;
      }
    }
  }
}
