import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan";
  apellido = "Perez";
  edad = 25;
  empresa: string = "Google";

  constructor() {
    
   }

  llamaEmpresa(){
    
  }

  ngOnInit(): void {
  }

}
