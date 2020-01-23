import { Component } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: "validation-form",
  templateUrl: "./validation-form.component.html",
  styleUrls: ["./validation-form.component.css"]
})
export class ValidationFormComponent {
  title = "ValidationForm";

  addProductForm = new FormGroup({
    productname: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30)
    ]),
    quantite: new FormControl("", [Validators.required, Validators.max(20)]),
    prix: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30)
    ])
  });
}
