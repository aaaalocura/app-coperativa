import { Component, OnInit } from '@angular/core';
import { Alumno, Padre } from '../../../../../models/Client_Model';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  padre: Padre = {
    Nombre: '',
    Apellido: '',
    Apellido_2: '',
    Telefono: '',
    Direccion: '',
    Hijos: [],
  };
  hijos: Alumno[] = [
    {
      Nombre: '',
      Apellido: '',
      Apellido_2: '',
      Grado: '',
      Escuela: '',
      Grupo: '',
    },
  ];

  constructor(
    private loadingController: LoadingController,
    private alertController: AlertController,
    private formBuilder: FormBuilder
  ) {

    
  }

  ngOnInit() {}
}
