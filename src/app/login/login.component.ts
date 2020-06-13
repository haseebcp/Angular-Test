import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFrom: FormGroup;
  isUserValid: boolean = true;
  user;
  constructor(private fb: FormBuilder, private ls: LoginService, private  router: Router) {
    this.loginFrom = this.fb.group({
      userName: [],
      password: []
    });
  }
  get f(){
    return this.loginFrom.controls;
  }
  ngOnInit() {
    this.user = this.ls.getCredentials();
  }
  onSubmit() {
    if (this.f["userName"].value != this.user.username ||  this.f['password'].value != this.user.password ||
      this.f['password'].value == "" ||this.f['userName'].value == "") {
      this.isUserValid = false ;
      return;
    }
    console.log("hey")
    this.router.navigate(["home"]);
  }
}
