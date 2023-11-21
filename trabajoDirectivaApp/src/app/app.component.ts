import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface Entrada{
  titulo: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registro de usuarios';
  mensaje = ''
  registrado = false
  sinRegistrar = true
  nombre: string = ''
  apellido: string = ''
  entradas: Entrada[]

  constructor(){

    this.entradas = [
      {titulo:"Python cada dia mas presente"},
      {titulo:"Angular es el mejor framework"},
      {titulo:"React es el mejor framework"},
      {titulo:"Vue es el mejor framework"},
    ]
    console.log(this.entradas)
  }

  registrarUsuario(){
    this.registrado = true
    this.mensaje = 'Usuario registrado con exito'
  }
}
