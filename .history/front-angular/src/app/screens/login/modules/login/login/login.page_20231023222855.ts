import { Component, OnInit } from '@angular/core';
import {Login} from '../../../../../models/Login_model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginData: Login = {
    email: '',
    pass: '',
  };


  constructor() { }

  ngOnInit() {

  }
  login(){
    login() {
      // Muestra los datos en la consola
      console.log('Datos de inicio de sesión:', this.loginData);
    }
  }
}
