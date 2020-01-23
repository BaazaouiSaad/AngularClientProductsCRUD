export class Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  qt: number;

  constructor(
    id: number,
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
}
