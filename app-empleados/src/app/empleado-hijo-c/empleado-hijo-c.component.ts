import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrl: './empleado-hijo-c.component.css'
})

export class EmpleadoHijoCComponent {
  @Input() empleadoDeLista!: Empleado;

  arrayCaracteristicas = [''];
  addNewCaracteristicas(newItem: string) {
    this.arrayCaracteristicas.push(newItem);
  }
}
