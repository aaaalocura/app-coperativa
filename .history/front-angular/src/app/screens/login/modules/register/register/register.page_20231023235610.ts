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
    // Crear un objeto que contenga los datos del padre y de los hijos
    const data = {
      padre: this.padre,
      hijos: this.hijos
    };
  
    console.log(d)
    // Realizar la solicitud POST a la API
    this.http.post('URL_DE_TU_API', data).subscribe(
      (response) => {
        console.log('Respuesta de la API:', response);
        // Puedes manejar la respuesta de la API, como redireccionar al usuario si la operación fue exitosa.
      },
      (error) => {
        console.error('Error en la solicitud POST:', error);
        // Puedes mostrar un mensaje de error al usuario en caso de un fallo en la solicitud.
      }
    );
  }
}
