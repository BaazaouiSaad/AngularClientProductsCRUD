import { Component } from "@angular/core";
import { PRODUCTS } from "../list-product/mock-products";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { Product } from "./product";

@Component({
  selector: "app-update-product",
  templateUrl: "./update-product.component.html",
  styleUrls: ["./update-product.component.css"]
})
export class UpdateProductComponent {
  title = "UpdateProduct";
  products_list = PRODUCTS;
  selectedProduct: Product;

  constructor(private router: Router) {}

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

  onSubmit(buttonType) {
    if (buttonType === "Delete") {
      this.router.navigate(["/home"]);
    }
    if (buttonType === "Update") {
      this.router.navigate(["/products"]);
    }
  }

  public onChange(event): void {
    // event will give you full breif of action
    var namer = PRODUCTS.find(x => x.id === event.target.value).name;

    console.log(event.target.value);
    console.log("Hello1");
    console.log(namer);
  }
}
