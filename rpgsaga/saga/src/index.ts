import { Document } from "./Document";

//Определяем класс, который расширяет класс Document и реализует интерфейс для печати
export class ExtendedDocument extends Document implements Printable {
  public author: string;

//Конструктор для инициализации заголовка, содержимого, автора и формата расширенного документа
  constructor(title: string, content: string, author: string, format: string = "A4") {
    super(title, content, format);
    this.author = author;
  }

//Метод печати расширенного документа
  public print(): void {
    console.log(`Printing extended document: ${this.title} by ${this.author}`);
  }

//Метод реализации интерфейса
  public implementInterface(): void {
    console.log("Implementing interface method");
  }
}

//Определяем доступный для печати интерфейс с помощью методов print и implementInterface
interface Printable {
  print(): void;
  implementInterface(): void;
}
