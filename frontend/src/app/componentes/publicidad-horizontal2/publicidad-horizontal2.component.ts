import { Component, Input } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-publicidad-horizontal2',
  templateUrl: './publicidad-horizontal2.component.html',
  styleUrls: ['./publicidad-horizontal2.component.css']
})
export class PublicidadHorizontal2Component {
  @Input('publi') publi: any

constructor(private crudService:CrudService){}

  sumarContador(x:any){

 
    if(x === 12 ){
      var aux = this.publi[0]?.contador12 + 1 
      this.publi[0].contador12 = aux
          this.crudService.modificarAnuncios(this.publi[0]).subscribe(res=>{
console.log(res,this.publi[0].contador12 )
    })
  }
   }

}
