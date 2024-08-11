import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IProduct } from '../../Models/IProducts';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  productsCart: IProduct[] = [];
  // totalPrice: number =0;

  constructor(private cartServ:CartService){}

  ngOnInit(): void {
    this.productsCart= this.cartServ.getCartProducts();
    console.log(this.productsCart);
  }

  deleteProduct(id:number){
    this.cartServ.removeProductFromCart(id);
    this.productsCart= this.cartServ.getCartProducts();
  }

  getTotalPrice():number{
    return this.productsCart.reduce((total,product) => total + product.price , 0);
  }

}
