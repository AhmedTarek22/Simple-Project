import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/IProducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // cartProducts!: any[];

  // getCartProducts(id:number){
  //   return this.http.get<any>('https://fakestoreapi.com/carts')
  // }


  private cartProducts: IProduct[] = [];

  constructor(private http: HttpClient) { }

  addProductToCart(product: IProduct): void {
    this.cartProducts.push(product);
  }

  getCartProducts(): IProduct[] {
    return this.cartProducts;
  }

  removeProductFromCart(productId: number): void {
    this.cartProducts = this.cartProducts.filter(product => product.id !== productId);
  }
}
