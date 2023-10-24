import { Component, OnInit } from '@angular/core';
import {Alumno,Padre } from '../../../../../models/Client_Model';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  hijos: Alumno[] = [{ Nombre: '', Apellido: '', Apellido_2: '', Grado: '', Escuela: '', Grupo: '' }];
  async eliminarHijo(index: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Seguro que deseas eliminar este hijo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.hijos.splice(index, 1);
          },
        },
      ],
    });
  
    await alert.present();
  }
  
  addHijo() {
    this.hijos.push({ Nombre: '', Apellido: '', Apellido_2: '', Grado: '', Escuela: '', Grupo: '' });
  }
  register() {
    console.log('Datos del Padre:', this.padre);
    console.log('Lista de Hijos:', this.hijos);
  }
  constructor(    private loadingController: LoadingController,
    private alertController: AlertController,) { }

  ngOnInit() {
  }

}
