import { Component } from "@angular/core";
import { PRODUCTS } from "./mock-products";

@Component({
  selector: "app-list-product",
  templateUrl: "./list-product.component.html",
  styleUrls: ["./list-product.component.css"]
})
export class ListProductComponent {
  title = "ListProduct";
  list_products = PRODUCTS;
}
