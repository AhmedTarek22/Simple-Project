import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../Models/IProducts';
import { RouterLink, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products!:IProduct[];
  productsCart: IProduct[] =[];

  proTest!: IProduct[];

  constructor(private productsServ: ProductsService, private cartServ:CartService){}

  ngOnInit(): void {
    this.productsServ.getAllProducts().subscribe((data)=> {
      this.products = data;
      this.productsCart = this.cartServ.getCartProducts();
    });
  }

  addtoCart(product: IProduct): void {
    this.cartServ.addProductToCart(product);
    this.productsCart = this.cartServ.getCartProducts();
  }

  updateProductFn(product: IProduct){
  }
}
