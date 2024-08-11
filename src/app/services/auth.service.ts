import { Injectable } from '@angular/core';
import { IUser } from '../Models/IUser';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: BehaviorSubject<boolean>;

  constructor() {
    this.user =  new BehaviorSubject<boolean> (this.isUserLogged);;
  }

  signInUser(userData: IUser){
    let userToken = "ahmed123456";
    localStorage.setItem("userToken",userToken);

    this.user.next(true);
    // console.log(user);
  }

  logOut(){
    localStorage.removeItem("userToken");
    this.user.next(false);
  }

  get isUserLogged(){
    return localStorage.getItem("userToken") ? true : false;
  }

  getUserState() :Observable<boolean>{
    return this.user.asObservable();
  }

  signUpUser(user: IUser){
    console.log(user);
  }
}
