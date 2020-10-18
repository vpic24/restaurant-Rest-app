import { Injectable } from '@angular/core';
import { Product } from "src/app/models/product";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly BaseUrl = 'http://localhost:3000/products';

  // dependency Injection
  constructor(private httpClient: HttpClient) { }

  public get() {
    return this.httpClient.get(`${this.BaseUrl}`);
  }

  public getById(id: number) {
    return this.httpClient.get(`${this.BaseUrl}/${id}`);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.BaseUrl}/${id}`);
  }

  public create(product: Product) {
    return this.httpClient.post(`${this.BaseUrl}`, product);
  }

  public update(product: Product, id: number) {
    return this.httpClient.put(`${this.BaseUrl}/${id}`, product);
  }
}
