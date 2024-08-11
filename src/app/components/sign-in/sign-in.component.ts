import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { IUser } from '../../Models/IUser';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  formData: IUser = {} as IUser;

  constructor(private authServ: AuthService){}

  signInFn(){
    this.authServ.signInUser(this.formData);
  }

}
