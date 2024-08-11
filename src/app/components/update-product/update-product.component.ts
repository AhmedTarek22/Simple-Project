import { Component } from '@angular/core';
import { IProduct } from '../../Models/IProducts';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {

  productId!: number;
  productSelected!: IProduct;

  formProduct: any;


  constructor(private route: ActivatedRoute,private productServ: ProductsService){}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productServ.getProductById(this.productId)
    .subscribe((detailsProdcut) =>{
      this.productSelected = detailsProdcut;
      
      this.formProduct={
        title: this.productSelected.title,
        price: this.productSelected.price,
        category: this.productSelected.category,
        description: this.productSelected.description,
        image: this.productSelected.image,
        id: this.productSelected.id,
        rating: this.productSelected.rating,
      };
    })
  }


  updateProductFn(){
    console.log(this.formProduct);

    // this.productServ.getProductToUpdate(this.productId,this.formProduct)
  }
}
