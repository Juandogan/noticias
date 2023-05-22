import { Component } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('slideDown', [
      state('void', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate('500ms ease-out', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})



export class MainComponent {

  estadoBtn= false
  articulos:any
  loader = true
  publi:any
  constructor(private crudservice:CrudService){

    this.crudservice.getArticulos().subscribe(res=>{

      this.articulos = res
      this.articulos = this.articulos.reverse() 
      console.log(this.articulos)


      this.loader = false
          //sumar contador
    this.articulos[0].vistas = this.articulos[0]?.vistas + 1 
    console.log( this.articulos[0].vistas)
    this.crudservice.modificarArticulo(this.articulos[0]).subscribe(res => console.log(res))

    })
    this.crudservice.getAnuncios().subscribe(res=>{

     this.publi = res
     console.log(this.publi)
    })  


  }

 
cerrar(){
  this.estadoBtn = true
}
  
}
