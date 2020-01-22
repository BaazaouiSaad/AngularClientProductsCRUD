import { Component, OnInit } from "@angular/core";
import { USERS } from "./mock-users";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  _listUsers = null;
  _isPublicUser = true;
  _isAuthenticated = false;

  // Our form model
  //username = new FormControl("");

  //use of FormGroup with multi-form-elements
  loginForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });

  // A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
  //Define an ngOnInit() method to handle any additional initialization tasks.

  ngOnInit() {
    this._listUsers = USERS;
  }

  // Update values of login element form
  updateName() {
    this.loginForm.username.setValue("Nancy");
  }

  onSubmit() {
    this.isValidUser(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
  }

  // Method to check if the login user is Public or Admin
  private isPublicUser(_username: string) {
    for (let user of this._listUsers) {
      if (user.userName === _username) {
        this._isPublicUser = user.isPublic;
      }
    }
  }

  // Methode for User Authentication
  private isValidUser(_username: string, _password: string) {
    for (let user of this._listUsers) {
      if (user.userName === _username && user.password === _password) {
        this.isPublicUser(_username);
        this._isAuthenticated = true;
      }
    }
  }
}
