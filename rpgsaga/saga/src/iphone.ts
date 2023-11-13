import { IAndroidApp } from './IAndroidApp';
import { IIosApp } from './IIOsApp';
import { Smartphone } from './smartphone';

export class IPhone extends Smartphone<IIosApp> {
  installApp(app: IIosApp): void {
    app.checkSignature();
    super.installApp(app);
  }
}
