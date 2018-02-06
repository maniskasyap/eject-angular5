import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { environment } from "../environments/environment";

@Injectable()
export class DataService {
  private url = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
