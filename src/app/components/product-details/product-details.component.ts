import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../Models/IProducts';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  productId!: number;
  productSelected!: IProduct;
  productsCart: IProduct[] =[];


  constructor(private route: ActivatedRoute,private productServ: ProductsService, private cartServ:CartService){}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productServ.getProductById(this.productId)
    .subscribe((detailsProdct) =>{
      this.productSelected = detailsProdct;
    })
  }

  addProduct(product: IProduct): void {
    this.cartServ.addProductToCart(product);
    this.productsCart = this.cartServ.getCartProducts();
  }
}
