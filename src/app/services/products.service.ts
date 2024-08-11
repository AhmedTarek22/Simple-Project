import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiUrl: string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  allProducts!: any[];

  proTest!: any[];

  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  // ngOnInit(): void {
  //   this.getAllProducts().subscribe(
  //     data => {
  //       this.allProducts = data;
  //       console.log('Products loaded:', this.allProducts);
  //     },
  //     error => {
  //       console.error('Error fetching products:', error);
  //     }
  //   );
  //   console.log(this.allProducts);
  // }

  gettTest(): any[] {
    return this.allProducts;
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: any): Observable<any> {
    this.proTest = product;
    console.log(this.proTest);

    return this.http.post<any>(this.apiUrl, product);
  }

  // productToApdate! : Observable<any>;

  // getProductToUpdate(id: number,data:any){
  //   this.productToApdate = this.getProductById(id);

  //   this.productToApdate = data;
  // }
}
