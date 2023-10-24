import { Component, OnInit } from '@angular/core';
import {Alumno, } from '../../../../../models/Client_Model';

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

  addHijo() {
    this.hijos.push({ Nombre: '', Apellido: '', Apellido_2: '', Grado: '', Escuela: '', Grupo: '' });
  }
  constructor() { }

  ngOnInit() {
  }

}
