import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent {
@Output() caracteristicasEmpleado = new EventEmitter<string>();

addNewCaracteristicas(value: string) {
    this.caracteristicasEmpleado.emit(value);
  }
}
