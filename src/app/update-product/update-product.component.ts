import { Component } from "@angular/core";
import { PRODUCTS } from "../list-product/mock-products";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: "app-update-product",
  templateUrl: "./update-product.component.html",
  styleUrls: ["./update-product.component.css"]
})
export class UpdateProductComponent {
  title = "UpdateProduct";
  products_list = PRODUCTS;

  updateProductForm = new FormGroup({
    productname: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30)
    ]),
    quantite: new FormControl("", [Validators.required, Validators.max(20)]),
    prix: new FormControl("", [Validators.required])
  });

  myForm = this.updateProductForm;
}
