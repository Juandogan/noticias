import { Component, Input } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-publicidad-horizontal',
  templateUrl: './publicidad-horizontal.component.html',
  styleUrls: ['./publicidad-horizontal.component.css']
})
export class PublicidadHorizontalComponent {
  @Input('publi') publi: any

constructor(private crudService:CrudService){}

  sumarContador(x:any){

 
    if(x === 11 ){
      var aux = this.publi[0]?.contador11 + 1 
      this.publi[0].contador11 = aux
          this.crudService.modificarAnuncios(this.publi[0]).subscribe(res=>{
console.log(res,this.publi[0].contador11 )
    })
  }
   }

}
