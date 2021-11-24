import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getValue(){
    return this.http.get<any>("http://localhost:3000/data")
    .pipe( map( (res:any) => {
      return res;
    }))
  }
  getData(){
    return this.http.get<any>("http://localhost:3000/spent")
    .pipe( map( (res:any) => {
      return res;
    }))
  }
}
