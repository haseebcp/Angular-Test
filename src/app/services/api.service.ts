import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getDetails() :Observable <any> {
    return this.http.get("https://randomuser.me/api/0.8/?results=20")
  }
}
