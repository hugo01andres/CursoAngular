import { Component } from '@angular/core';
import { Empleado } from './empleado.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de empleados';
  cuadroNombre = '';

  empleados: Empleado[] = [
    { nombre: 'Juan', apellidos: 'Perez', cargo: 'Gerente', salario: 1000 },
    { nombre: 'Maria', apellidos: 'Gomez', cargo: 'Administrativo', salario: 800 },
  ];

  constructor() {
    console.log('AppComponent constructor');
  }

}
