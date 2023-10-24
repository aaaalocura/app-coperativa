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
  padreForm: FormGroup;
  hijosForm: FormGroup[];
  loading: any;
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

  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  addHijo() {
    const nuevoHijoForm = this.createHijoForm();
    this.hijosForm.push(nuevoHijoForm);
  }
  
  async register() {
    if (!this.padreForm.valid || !this.hijosForm.every((form) => form.valid)) {
      this.presentErrorAlert('Todos los campos son obligatorios.');
      return;
    }

    const data = {
      padre: this.padreForm.value,
      hijos: this.hijosForm.map((form) => form.value),
    };

    this.loading = await this.loadingController.create({
      message: 'Enviando solicitud...',
    });

    await this.loading.present();

    // Realiza la solicitud POST a la API
    this.http.post('URL_DE_LA_API_AQUI', data).subscribe(
      (response) => {
        this.loading.dismiss();
        console.log('Respuesta de la API:', response);
        // Puedes realizar acciones adicionales si la solicitud es exitosa
      },
      (error) => {
        this.loading.dismiss();
        console.error('Error en la solicitud POST:', error);
        this.presentErrorAlert('Hubo un error durante el envío de la solicitud. Por favor, inténtalo de nuevo.');
      }
    );
  }
  constructor(
    private loadingController: LoadingController,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {
    // Inicializa el formulario del padre
    this.padreForm = this.formBuilder.group({
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      Apellido_2: '',
      Telefono: ['', Validators.required],
      Direccion: ['', Validators.required],
    });

    // Inicializa el formulario de los hijos
    this.hijosForm = [this.createHijoForm()];
    
  }
  createHijoForm(): FormGroup {
    return this.formBuilder.group({
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      Apellido_2: '',
      Grado: '',
      Escuela: '',
      Grupo: '',
    });
  }

  ngOnInit() {}
}
