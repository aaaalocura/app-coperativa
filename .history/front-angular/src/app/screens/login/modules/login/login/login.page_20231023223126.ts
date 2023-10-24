import { Component, OnInit } from '@angular/core';
import {Login} from '../../../../../models/Login_model';
import { HttpClient } from '@angular/common/http';

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

      console.log('Datos de inicio de sesión:', this.loginData);
    
  }
}
