import { Component, Input } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-publicidadx3',
  templateUrl: './publicidadx3.component.html',
  styleUrls: ['./publicidadx3.component.css']
})
export class Publicidadx3Component {
  @Input('publi') publi: any;

  constructor(private crudService:CrudService){}


  sumarContador(x:any){

 
    if(x === 8 ){
      var aux = this.publi[0]?.contador8 + 1 
      this.publi[0].contador8 = aux
          this.crudService.modificarAnuncios(this.publi[0]).subscribe(res=>{
console.log(res,this.publi[0].contador8 )
    })
  }

   
  if(x === 9 ){
    var aux = this.publi[0]?.contador9 + 1 
    this.publi[0].contador9 = aux
        this.crudService.modificarAnuncios(this.publi[0]).subscribe(res=>{
          console.log(res,this.publi[0].contador9 )
  })
}

 
if(x === 10 ){
  var aux = this.publi[0]?.contador10 + 1 
  this.publi[0].contador10 = aux
      this.crudService.modificarAnuncios(this.publi[0]).subscribe(res=>{
        console.log(res,this.publi[0].contador10 )
})
}
  }
  
}
