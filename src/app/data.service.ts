import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { HomeComponent} from './home/home.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // searchQuery: string = "goat";

  constructor(private http: HttpClient) { }

  search(){
    let query = (<HTMLInputElement>document.getElementById("userQuery")).value;
    let apiKey = "&api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc";
    console.log(query)

    let params = {
      q: query,
      limit: "25",
      offset: "0",
      rating: "Y",
      lang: "en"
    }

      return this.http.get<any>(`https://api.giphy.com/v1/gifs/search?q=` + query + apiKey );
      // api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC'
    
  }
}
