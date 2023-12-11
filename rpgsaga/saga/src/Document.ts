export class Document {
    public title: string;
    public content: string;
    public format: string;
  
    constructor(title: string, content: string, format: string = "A4") {
      this.title = title;
      this.content = content;
      this.format = format;
    }
  
    public print(): void {
      console.log(`Printing document: ${this.title}`);
    }
  
    public saveAs(format: string): void {
      console.log(`Saving document as ${format} format`);
    }
  
    public encrypt(key: string): string {
      return "Encrypted content";
    }
  
    toString(): string {
      return `Document: ${this.title}`;
    }
  }