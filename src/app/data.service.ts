import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {
  private url = "https://super-crud.herokuapp.com/pokemon";
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
