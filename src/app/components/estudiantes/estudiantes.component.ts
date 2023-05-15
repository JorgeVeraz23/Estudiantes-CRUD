import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/Estudiante';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {
  nombre = "";
  apellido="";
  edad = "";
  listEstudiante: Estudiante[] = [];

  ngOnInit(): void {

  }
  agregarEstudiante():void {
    const estudiante: Estudiante = {
      nombre: this.nombre,
      apellido: this.apellido,
      estado: false,
      edad: this.edad
    }

    this.listEstudiante.push(estudiante);

    this.nombre='';
    this.apellido='';
    this.edad = '';

  }

  eliminarEstudiante(indice:number):void{
    this.listEstudiante.splice(indice,1);

  }

  actualizarEstudiante(estudiante:Estudiante, indice:number){
    console.log(estudiante);
    this.listEstudiante[indice].estado=!estudiante.estado;

  }
}
