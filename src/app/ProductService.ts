import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  id: String;
  constructor(private http: HttpClient) { }
  login(user) {
     
    return this.http.post("https://github.com/parambannavas/productApp-backend/login", user);
  }
  signup(userData) {
    return this.http.post("https://github.com/parambannavas/productApp-backend/signup", userData);
  }


  getProducts() {
    return this.http.get("https://github.com/parambannavas/productApp-backend/products");

  }
  addProducts(item) {
    return this.http.post("https://github.com/parambannavas/productApp-backend/products/add", item);
  }

  deleteProduct(id) {
    return this.http.post("https://github.com/parambannavas/productApp-backend/products/delete", {id:id});
  }

  editProduct(id) {
    return this.http.post("https://github.com/parambannavas/productApp-backend/products/edit", {id:id});
  }

  updateProduct(product) {
    return this.http.post("https://github.com/parambannavas/productApp-backend/products/update", product);
  }

  setId(id) {
    this.id = id;
  }
 getId(){
   return this.id;
 }

}
