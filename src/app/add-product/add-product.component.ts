import { Component } from "@angular/core";
import { PRODUCTS } from "../list-product/mock-products";
import { Product } from "../list-product/product";
import { FormGroup, Validators, FormControl } from "@angular/forms";
// used for uploading files
import { HttpClient, HttpEventType } from "@angular/common/http";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent {
  title = "AddProduct";
  list_products = PRODUCTS;
  // Upload Image Product arguments
  _fileData: File = null;
  _previewUrl: any = null;
  _fileUploadProgress: string = null;
  _uploadedFilePath: string = null;

  constructor(private http: HttpClient) {}

  addProductForm = new FormGroup({
    productname: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30)
    ]),
    quantite: new FormControl("", [Validators.required, Validators.max(20)]),
    price: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30)
    ])
  });

  onSubmit() {
    this.addProductToList(
      this.addProductForm.value.productname,
      this.addProductForm.value.quantite,
      this.addProductForm.value.price,
      this.addProductForm.value.imageUrl
    );
  }

  // Methode to add a Product
  private addProductToList(
    _productname: string,
    _quantite: number,
    _price: number,
    _imageUrl: string
  ) {
    const product = new Product(69, _productname, _imageUrl, _quantite, _price);
    this.list_products.push(product);
  }

  fileProgress(fileInput: any) {
    this._fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview
    var mimeType = this._fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this._fileData);
    reader.onload = _event => {
      this._previewUrl = reader.result;
    };
  }

  onUpload() {
    const formData = new FormData();
    formData.append("files", this._fileData);

    this._fileUploadProgress = "0%";

    this.http
      .post("./assets/img/Products", formData, {
        reportProgress: true,
        observe: "events"
      })
      .subscribe(events => {
        if (events.type === HttpEventType.UploadProgress) {
          this._fileUploadProgress =
            Math.round((events.loaded / events.total) * 100) + "%";
          console.log(this._fileUploadProgress);
        } else if (events.type === HttpEventType.Response) {
          this._fileUploadProgress = "";
          console.log(events.body);
          alert("SUCCESS !!");
        }
      });
  }
}
