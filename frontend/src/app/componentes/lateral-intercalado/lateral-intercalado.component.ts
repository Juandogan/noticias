import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../../servicios/crud.service'
import { Articulos } from '../../models/articulos';

@Component({
  selector: 'app-lateral-intercalado',
  templateUrl: './lateral-intercalado.component.html',
  styleUrls: ['./lateral-intercalado.component.css']
})
export class LateralIntercaladoComponent implements OnInit {
  articulos: Articulos[] = []

  articuloBusqueda: Articulos[] = []


  @Input('data') nota : any ;
  @Input('anuncios') anuncios: any;;
  @Input('estado') estado : any ;

  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
    console.log('badenra',this.nota)

  }
  sumarContador(x:any){

 
    if(x === 12 ){
      var aux = this.anuncios[0]?.contador12 + 1 
      this.anuncios[0].contador12 = aux
          this.crudService.modificarAnuncios(this.anuncios[0]).subscribe(res=>{
          console.log(res,this.anuncios[0].contador12 )
    })
  }


   
  if(x === 13 ){
    var aux = this.anuncios[0]?.contador13 + 1 
    this.anuncios[0].contador13 = aux
        this.crudService.modificarAnuncios(this.anuncios[0]).subscribe(res=>{
        console.log(res,this.anuncios[0].contador13 )
  })
}

if(x === 14 ){
  var aux = this.anuncios[0]?.contador14 + 1 
  this.anuncios[0].contador14 = aux
      this.crudService.modificarAnuncios(this.anuncios[0]).subscribe(res=>{
      console.log(res,this.anuncios[0].contador14 )
})
}
   }

  cut(value:any){

    return value


};

}
