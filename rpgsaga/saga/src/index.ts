import { Phone } from './phone';
import { CellPhone } from './cellphone';
import { LandlinePhone } from './landlinephone';
import { Babushkaphone } from './babushkaphone';
import { Eshop } from './EShop';
import { Smartphone } from './smartphone';
import { IAndroidApp } from './IAndroidApp';
import { Android } from './android';
import { Keep } from './keep';
import { IPhone } from './iphone';
import { Telegram } from './telegram';

const incYear = (phone: Phone): Phone => {
  const res = new LandlinePhone(phone.phoneNumber, phone.year + 1, phone.name);
  return res;
};

const first = new LandlinePhone('+7900-000 000 (123)', 1990, 'Телефон 1');
console.log(incYear(first));

const a = new LandlinePhone('+7900-000 000 (123)', 1990, 'Телефон 1');
const b = first;
console.log(b === first, a === first);

first.year = 1998;

try {
  first.year = -1998;
} catch (e) {
  console.log(e);
}
first.call('12345');
first.endCall();

try {
  const second = new LandlinePhone('+799900000', -5);
  // second.name = 'Телефон 2';
  console.log(second.year);
  second.call('12345');
  second.endCall();
} catch (e) {
  console.log(e);
}
const cp1: CellPhone = new Babushkaphone('+79000000000', 2010, 5, 'samsung');
cp1.call('12345');
cp1.endCall();
cp1.sendMessage('some message', 1234);

const cp2 = new Babushkaphone('+79000000000', 2010, 5, 'samsung');
cp2.call('1234111111');
cp2.endCall();
console.log(`${cp2}`);

const tmp = `
   /\\   /\\   Todd Vargo
  //\\\\_//\\\\     ____
  \\_     _/    /   /
   / * * \\    /^^^]
   \\_\\O/_/    [   ]
    /   \\_    [   /
    \\     \\_  /  /
     [ [ /  \\/ _/
    _[ [ \\  /_/
`;
console.log(tmp);

const phones: Array<Phone> = [cp2, cp1, first];
for (const phone of phones) {
  console.log(phone.display());
}
phones.push(b);
phones[1].name = 'aaaaaaa';

const someReq = () => {
  throw new Error('Something bad happend');
};

try {
  someReq();
  console.log('success');
} catch (e) {
  console.log(`failed ${e}`);
}
console.log('after finally');

const shop = new Eshop();

shop.addStuff(cp1);
shop.addStuff(cp2);
shop.addStuff(first);
shop.showStuff();

const keep = new Keep();
const tel = new Telegram();
const samsung1 = new Android('+79000000000', 2010, 5, 'samsung');
samsung1.installApp(keep);
samsung1.installApp(tel);
samsung1.runApp('Keep');
samsung1.runApp('Telegram');

const iphone15 = new IPhone('+79000000000', 2010, 5, 'apple');
iphone15.installApp(tel);
iphone15.runApp('Telegram');
