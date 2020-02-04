import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ListProductComponent } from "./list-product/list-product.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { UpdateProductComponent } from "./update-product/update-product.component";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { LoginComponent } from "./login/login.component";
import { AppHomeComponent } from "./home/home.component";
import { ValidationFormComponent } from "./validation-form/validation-form.component";

import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "products", component: ListProductComponent },
  { path: "add", component: AddProductComponent },
  { path: "update", component: UpdateProductComponent },
  { path: "delete", component: UpdateProductComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: AppHomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    AppHeaderComponent,
    AppFooterComponent,
    LoginComponent,
    ValidationFormComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
