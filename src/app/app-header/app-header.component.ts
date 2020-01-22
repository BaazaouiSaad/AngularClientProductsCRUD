import { Component } from "@angular/core";
import { MENUITEMS } from "./mock-menuitems";

@Component({
  selector: "app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.css"]
})
export class AppHeaderComponent {
  menuList = MENUITEMS;
}
