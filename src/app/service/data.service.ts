import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs-compat/add/operators/map';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {

  constructor(public http: Http ) {
    console.log("data service connected");
  }
  getPosts(){
    console.log("In Data service method");
    return this.http.get("https://jsonplaceholder.typicode.com/posts").map(res=> res.json());
    //.subscribe(res => this.res =res.json());
  }
}