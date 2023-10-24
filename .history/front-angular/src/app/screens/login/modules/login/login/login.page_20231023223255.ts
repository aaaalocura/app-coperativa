import { Component, OnInit } from '@angular/core';
import {Login} from '../../../../../models/Login_model';
import { HttpClient } from '@angular/common/http';
import { LoadingController, AlertController } from '@ionic/angular';

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


  constructor(private http: HttpClient) { }


  ngOnInit() {

  }
  login() {
    // Hacer la solicitud POST a la API
    this.http.post('URL_DE_LA_API_AQUI', this.loginData).subscribe(
      (response) => {
        console.log('Respuesta de la API:', response);
        // Aquí puedes manejar la respuesta de la API, como redireccionar al usuario si la autenticación es exitosa.
      },
      (error) => {
        console.error('Error en la solicitud POST:', error);
        // Aquí puedes manejar errores, como mostrar un mensaje al usuario.
      }
    );
  }
  
}
