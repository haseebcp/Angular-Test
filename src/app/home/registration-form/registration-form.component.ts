import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  userData = [];
  @Output() onSaveUser = new EventEmitter();
  constructor(private fb: FormBuilder,
              private router: Router, private activatedRoute: ActivatedRoute) {
    this.registrationForm = this.fb.group({
      title: [],
      firstName: [''],
      lastName: [''],
      dob: [],
      email: [''],
      phoneNumber: [''],
      gender: [],
      userName: [],
      password: [],

    });
  }
  get f(){
    return this.registrationForm.controls;
  }

  ngOnInit() {
  }

  onSubmit() {
    let obj = this.registrationForm.getRawValue();
    let data = {
      user : {
        "name": {
          "title": obj.title,
          "first": obj.firstName,
          "last": obj.lastName
        },
        "email": obj.email,
        "username": obj.userName,
        "password": obj.password,
        "dob": obj.dob
      }
    };
     this.userData = JSON.parse(localStorage.getItem("userDetals"));
     this.userData.push(data);
     localStorage.removeItem('userDetals');
     localStorage.setItem('userDetals',JSON.stringify(this.userData));
     this.router.navigate(["home"]);
    this.onSaveUser.emit('true');
   }

}
