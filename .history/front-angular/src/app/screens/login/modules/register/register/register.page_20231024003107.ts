import { Component, OnInit } from '@angular/core';
import { Alumno, Padre } from '../../../../../models/Client_Model';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
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
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {

    
  }

  ngOnInit() {}
  
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
    this.hijos.push({
      Nombre: '',
      Apellido: '',
      Apellido_2: '',
      Grado: '',
      Escuela: '',
      Grupo: '',
    });
  }
  register() {
    const data = {
      Nombre: this.padre.Nombre,
      Apellido: this.padre.Apellido,
      Apellido_2: this.padre.Apellido_2,
      Telefono: this.padre.Telefono,
      Direccion: this.padre.Direccion,
      Hijos: this.hijos
    };
  
    console.log(data)
      // Muestra el loader mientras se realiza la solicitud POST
  const loading = await this.loadingController.create({
    message: 'Cargando...',
  });
  await loading.present();
    this.http.post('http://127.0.0.1:8000/api/crear-padre-y-hijos', data).subscribe(
      (response) => {
        console.log('Respuesta de la API:', response);
      },
      (error) => {
        console.error('Error en la solicitud POST:', error);
      }
    );
  }
}
