import { Component, Inject } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';
import {ActivatedRoute} from '@angular/router';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css']
})
export class Main2Component {
  nota:any
  revistaIndice:any
  estadoBtn= false
  articulos:any
  loader = true
  publi:any
  constructor(private crudService:CrudService,private ruta:ActivatedRoute,  @Inject(PLATFORM_ID) private _platformId: Object ){

    this.ruta.data.subscribe((data) => {      
      this.nota = Object.entries(data).map((i) => i[1]);
      console.log(this.nota, "esto es main2")
      this.crudService.unArticulo = this.nota[0];  
      this.articulos = this.nota[0];              
      this.loader = false
      // this.articulos[0].vistas = this.articulos[0]?.vistas + 1 
      // this.crudService.modificarArticulo(this.articulos[0]).subscribe(res => console.log(res))
  
  
    });

    if (isPlatformBrowser(this._platformId)) {
      const htmlElement = document.querySelector('html');

      // Agregar el evento contextmenu
      htmlElement?.addEventListener('contextmenu', function (e) {
        e.preventDefault(); // Evitar que se muestre el menú contextual por defecto
        alert('Si están interesados en el material fotográfico del CCAM, acuerden con la institución su uso. Contactarse a: info@culturademontania.org.ar');
      });
 }




    this.crudService.getAnuncios().subscribe(res=>{

     this.publi = res
     console.log(this.publi)
    })  


  }

 
cerrar(){
  this.estadoBtn = true
}
  
}

