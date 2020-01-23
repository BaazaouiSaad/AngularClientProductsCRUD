import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ListProductComponent } from "./list-product/list-product.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { UpdateProductComponent } from "./update-product/update-product.component";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { LoginComponent } from "./login/login.component";
import { ValidationFormComponent } from "./validation-form/validation-form.component";

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    AppHeaderComponent,
    AppFooterComponent,
    LoginComponent,
    ValidationFormComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
