import { Component } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';
import {ActivatedRoute} from '@angular/router';

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
  constructor(private crudService:CrudService,private ruta:ActivatedRoute ){

    this.ruta.data.subscribe((data) => {      
      this.nota = Object.entries(data).map((i) => i[1]);
      console.log(this.nota, "esto es main2")
      this.crudService.unArticulo = this.nota[0];  
      this.articulos = this.nota[0];              
      this.loader = false
  
    });






    this.crudService.getAnuncios().subscribe(res=>{

     this.publi = res
     console.log(this.publi)
    })  


  }

 
cerrar(){
  this.estadoBtn = true
}
  
}

