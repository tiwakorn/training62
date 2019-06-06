import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BmiService {

  private headers = new HttpHeaders({ "Content-Type": `application/json` });
  private ROOT_URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {

  }

  addNewBmi(item): Observable<any>{
    const body = JSON.stringify(item);
    return this.http.post(this.ROOT_URL + "bmi", body, { responseType: 'json', headers: this.headers });
  }

  findAllBmi(): Observable<any>{
    return this.http.get(this.ROOT_URL + "bmi");
  }

}
