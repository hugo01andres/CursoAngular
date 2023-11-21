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
  empresa = "Google";

  habilitacionCuadro = true;
  usuRegistrado = false;
  textoR = "No hay nadie registrado"

  getRegistroUsuario(){
    this.usuRegistrado = true;
  }
  setSeRegistra(){
    this.textoR = "El usuario se acaba de registrar";
  }
  cambiarEmpresa(event: any){
    this.empresa = event.target.value;
  }

  constructor() {
    
   }

  llamaEmpresa(value: string){
    this.empresa = value;
    
  }
  

  ngOnInit(): void {
  }

}
