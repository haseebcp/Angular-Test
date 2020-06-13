import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetails;
  searchkey;
  isAddUser = false;
  constructor(private  api: ApiService) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem("userDetals"));
    console.log(this.userDetails)
    if(!this.userDetails){
      this.api.getDetails().subscribe(data => {
        if (data && data.results){
          localStorage.setItem("userDetals" ,JSON.stringify(data.results));
        }

      });
    }

  }
  saved(event) {
    this.isAddUser = false;
  }

}
