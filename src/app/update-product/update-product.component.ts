import { Component } from "@angular/core";
import { PRODUCTS } from "../list-product/mock-products";

@Component({
  selector: "app-update-product",
  templateUrl: "./update-product.component.html",
  styleUrls: ["./update-product.component.css"]
})
export class UpdateProductComponent {
  title = "UpdateProduct";
  products_list = PRODUCTS;
  selectedPersonId = "5a15b13c36e7a7f00cf0d7cb";
}
