import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import 'bootstrap/dist/css/bootstrap.min.css';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de empleados';
  cuadroNombre = '';
  cuadroApellidos = '';
  cuadroCargo = '';
  cuadroSalario = 0;

  empleados: Empleado[] = [
    { nombre: 'Juan', apellidos: 'Perez', cargo: 'Gerente', salario: 1000 },
    { nombre: 'Maria', apellidos: 'Gomez', cargo: 'Administrativo', salario: 800 },
  ];

  constructor() {
    console.log('AppComponent constructor');
  }

  agregarEmpleado() {
    const empleado: Empleado = {
      nombre: this.cuadroNombre,
      apellidos: this.cuadroApellidos,
      cargo: this.cuadroCargo,
      salario: this.cuadroSalario
    };
    this.empleados.push(empleado);
    this.cuadroNombre = '';
    this.cuadroApellidos = '';
    this.cuadroCargo = '';
    this.cuadroSalario = 0;
  }

}
