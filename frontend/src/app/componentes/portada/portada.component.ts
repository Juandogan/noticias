import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  @Input('nro') nro : any ;
  @Input('data') data : any ;
    numero=0
    link=""
  constructor() { }

  ngOnInit(): void {
   this.numero = this.nro + 137

  }

  cut(value:any){
    var corte = value.slice(2)

   return corte
 };




}
