import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AppComponent} from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchResult: object;

  constructor(private data: DataService, private router: Router, private app: AppComponent) { }

  ngOnInit() {
    if(this.router.url == "/"){
      console.log("homepage")

      // removing the active class from the navbar about link on the app component imported here
      document.getElementById("about").classList.remove("active");
      
    }
  }

  // triggered by the search button
  userSearch(){
    let image = (<HTMLImageElement>document.getElementById("img"));
    let loading = document.getElementById("loading");
    this.data.search().subscribe(data =>{
    this.searchResult = data;

    console.log(this.searchResult);
  })

  loading.innerHTML = "Loading..."

}

  // makes search button clickable
  clickableSearch(){
    let userQuery = (<HTMLInputElement>document.getElementById("userQuery")).value;
    if(userQuery == ""){
      document.getElementById("searchBtn").classList.add("disabled");
    }else{
    document.getElementById("searchBtn").classList.remove("disabled");
    }
  }

}
