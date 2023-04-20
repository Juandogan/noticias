import { Component, OnInit } from '@angular/core';

import {Subject} from 'rxjs';




@Component({
  selector: 'app-barra-negra',
  templateUrl: './barra-negra.component.html',
  styleUrls: ['./barra-negra.component.css']
})
export class BarraNegraComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  buscar:any
  existir:any
  buscarMensaje:string = ""
  claseAnima = false;
  estado = false
  public color = "rgb(33,33,33)"

  constructor()  { }

  ngOnInit(): void {






  }





}
