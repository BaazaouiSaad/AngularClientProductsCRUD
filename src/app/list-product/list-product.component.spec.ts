import { Component, OnInit } from "@angular/core"; // here angular/core is imported .
@Component({
  // this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.
  selector: "app-list-product", //
  templateUrl: "./list-product/list-product.component.html",
  // reference to the html file created in the new component.
  styleUrls: ["./list-product/list-product.component.css"] // reference to the style file.
})
export class ListProductComponent implements OnInit {}
