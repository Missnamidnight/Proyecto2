import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
curso1: any ={nombre : "Beca Angular", total_dias: 9, descripcion: "Curso sobre Angular y Typescript"};
curso2: any ={nombre : "Beca Java", total_dias: 10, descripcion: "Formación sobre Java"};

contador:number = 0;

aux1:any;
aux2:any;
  constructor() { }

  ngOnInit(): void {
  }

  
  intercambioContenido():void
  {

    this.contador=this.contador+1;
    this.aux1=this.curso1.nombre;
    this.aux2=this.curso1.descripcion;
    this.curso1.nombre=this.curso2.nombre;
    this.curso1.descripcion=this.curso2.descripcion;
    this.curso2.nombre=this.aux1;
    this.curso2.descripcion=this.aux2;

  }
}
