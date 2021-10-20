import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url : string = "https://localhost:44323";

  constructor(private http : HttpClient) { }

  GetProductDetail() : Observable<Product[]> {
    return this.http.get<Product[]>(this.url+'/api/Product');
  }
  
  InsertEmployee(product :Product) : Observable<Product>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Product>(this.url +'/api/Product/insert',product,httpOptions);
  }
  GetProductById(product : number) : Observable<Product> {
    return this.http.get<Product>(this.url+'/api/Product/'+product);
  }
  UpdateProductId(productDetail : Product) : Observable<Product>  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Product>(this.url+'/api/UpdateProduct/'+productDetail.ProductId,productDetail,httpOptions);
  }
 
  DeleteProduct(productId : number) : Observable<Product>{
    return this.http.delete(this.url+'/api/Product/'+productId);
  }
}