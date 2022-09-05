import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const urlAPI = 'http://localhost:3000/account';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  // dang ky 
  register(data: any): Observable<any> {
    return this.http.post<any>(urlAPI, data);
  }

  // Cách 1 
  login(data: any): Observable<any> {
    return this.http.get(`${urlAPI}?email=${data.email}&password=${data.password}`);
  }

  getAll(): Observable<any> {
    return this.http.get<any>(urlAPI);
  }

}
