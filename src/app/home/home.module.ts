import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {RegistrationFormComponent} from "./registration-form/registration-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchPipe} from "../pipe/search.pipe.td";


@NgModule({
  declarations: [
    HomeComponent,
    RegistrationFormComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule { }
