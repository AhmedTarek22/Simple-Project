import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { Component } from '@angular/core';
import { AddProductComponent } from './components/add-product/add-product.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

export const routes: Routes = [
  {path: '', redirectTo: "products", pathMatch:"full"},
  {path: 'products',component:ProductsComponent},
  {path: 'carts',component:CartComponent},
  {path: 'details/:id',component:ProductDetailsComponent},
  {path: 'update/:id', component:UpdateProductComponent},
  {path: 'addProduct',component:AddProductComponent},
  {path: 'signIn', component:SignInComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: '**', component:PageNotFoundComponent},
];
