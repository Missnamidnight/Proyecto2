import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  @Input("propiedad1") prop1:any;

  @Input("propiedad2") contador:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
