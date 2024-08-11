import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Models/IProducts';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{

  // formProduct: any = { title: '', price: 0, description: '', category: '', image: '' };
  products!: IProduct[];
  formProduct : IProduct = {} as IProduct;

  constructor(private productServ: ProductsService){}

  ngOnInit(): void {
    this.productServ.getAllProducts().subscribe((data) =>{
      this.products = data;
    })
  }

  productAddedFn(){
    this.productServ.addProduct(this.formProduct).subscribe((data) =>{
      this.products.push(data);
      console.log(data);

    })
    console.log(this.formProduct);
    console.log(this.products);
  }

  test(){
    console.log(this.products);

  }

}
