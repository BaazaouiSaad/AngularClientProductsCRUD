export class Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  qt: number;

  constructor(
    id: string,
    name: string,
    imageUrl: string,
    qt: number,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.qt = qt;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getQt(): number {
    return this.qt;
  }
}
