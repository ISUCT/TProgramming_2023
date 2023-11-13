import { IAndroidApp } from './IAndroidApp';
import { Smartphone } from './smartphone';

export class Android extends Smartphone<IAndroidApp> {
  installApp(app: IAndroidApp): void {
    app.checkSecurity();
    super.installApp(app);
  }
}
