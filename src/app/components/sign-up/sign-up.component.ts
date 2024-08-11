import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUser } from '../../Models/IUser';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  formData: IUser = {} as IUser;

  constructor (private authserv: AuthService){}

  signUpFn(){
    this.authserv.signUpUser(this.formData);
  }

}
