import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  id: String;
  constructor(private http: HttpClient) { }
  login(user) {
     
    return this.http.post("https://productbackendapp.herokuapp.com/login", user);
  }
  signup(userData) {
    return this.http.post("https://productbackendapp.herokuapp.com/signup", userData);
  }


  getProducts() {
    return this.http.get("https://productbackendapp.herokuapp.com/products");

  }
  addProducts(item) {
    return this.http.post("https://productbackendapp.herokuapp.com/products/add", item);
  }

  deleteProduct(id) {
    return this.http.post("https://productbackendapp.herokuapp.com/products/delete", {id:id});
  }

  editProduct(id) {
    return this.http.post("https://productbackendapp.herokuapp.com/products/edit", {id:id});
  }

  updateProduct(product) {
    return this.http.post("https://productbackendapp.herokuapp.com/products/update", product);
  }

  setId(id) {
    this.id = id;
  }
 getId(){
   return this.id;
 }

}
