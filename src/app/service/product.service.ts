import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const urlAPI = './assets/data/product.json';
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(urlAPI);
  }

  addPro(data: any): Observable<any> {
    return this.http.post<any>(urlAPI, data);
  }
}
